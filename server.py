import os
import sys
import json
import zipfile
import re
import socket
import subprocess
import tempfile
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler

sys.stdout.reconfigure(encoding='utf-8')

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')
BANKS_FILE = os.path.join(DATA_DIR, 'banks.json')
HISTORY_FILE = os.path.join(DATA_DIR, 'history.json')

os.makedirs(DATA_DIR, exist_ok=True)

# Lấy địa chỉ IP mạng nội bộ (LAN) để các máy khác có thể truy cập
def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

LOCAL_IP = get_local_ip()

# Khởi tạo dữ liệu banks.json ban đầu nếu chưa có
def init_storage():
    if not os.path.exists(BANKS_FILE):
        initial_banks = []
        kngt_path = os.path.join(BASE_DIR, 'user_kngt_150.json')
        if os.path.exists(kngt_path):
            try:
                with open(kngt_path, 'r', encoding='utf-8') as f:
                    initial_banks.append(json.load(f))
            except Exception as e:
                print("Lỗi đọc user_kngt_150.json:", e)
        with open(BANKS_FILE, 'w', encoding='utf-8') as f:
            json.dump(initial_banks, f, ensure_ascii=False, indent=2)

    if not os.path.exists(HISTORY_FILE):
        with open(HISTORY_FILE, 'w', encoding='utf-8') as f:
            json.dump([], f, ensure_ascii=False, indent=2)

init_storage()

def read_banks():
    try:
        with open(BANKS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return []

def save_banks(banks):
    with open(BANKS_FILE, 'w', encoding='utf-8') as f:
        json.dump(banks, f, ensure_ascii=False, indent=2)

def read_history():
    try:
        with open(HISTORY_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return []

def save_history(hist):
    with open(HISTORY_FILE, 'w', encoding='utf-8') as f:
        json.dump(hist, f, ensure_ascii=False, indent=2)

# ===================================================================
# BỘ BÓC TÁCH FILE WORD (.DOC / .DOCX) CHUẨN XÁC 100% TIẾNG VIỆT
# ===================================================================
def convert_doc_to_docx(doc_path, out_docx_path):
    """Sử dụng Word COM trên Windows để chuyển đổi .doc sang .docx giữ nguyên màu và gạch chân"""
    ps_cmd = f"""
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    try {{
        $doc = $word.Documents.Open('{doc_path}', $false, $true)
        $doc.SaveAs([ref]'{out_docx_path}', [ref]12)
        $doc.Close()
    }} finally {{
        $word.Quit()
    }}
    """
    cmd = ["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", ps_cmd]
    subprocess.run(cmd, capture_output=True, timeout=30)
    if not os.path.exists(out_docx_path):
        raise Exception("Không thể chuyển đổi file .doc sang .docx")

def parse_docx_file(docx_path):
    """Phân tích word/document.xml để trích xuất 100% câu hỏi, các lựa chọn và đáp án đỏ/gạch chân"""
    with zipfile.ZipFile(docx_path) as z:
        with z.open('word/document.xml') as f:
            xml_data = f.read()

    import xml.etree.ElementTree as ET
    root = ET.fromstring(xml_data)
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

    def get_run_text_and_flag(r):
        text_parts = []
        for child in r.iter():
            tag = child.tag.split('}')[-1]
            if tag == 't':
                text_parts.append(child.text or '')
            elif tag == 'tab':
                text_parts.append('\t')
            elif tag == 'br':
                text_parts.append('\n')
                
        t = ''.join(text_parts)
        u = r.find('.//w:u', namespaces)
        c = r.find('.//w:color', namespaces)
        u_val = u.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val') if u is not None else None
        c_val = c.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val') if c is not None else None
        
        # Đáp án đúng: chữ đỏ (FF0000, C00000) hoặc có gạch chân (single)
        is_ans = (u_val not in [None, 'none']) or (c_val in ['FF0000', 'C00000', 'red'])
        return t, is_ans

    questions = []
    current_q = None

    for p in root.findall('.//w:p', namespaces):
        runs = p.findall('.//w:r', namespaces)
        p_runs = [get_run_text_and_flag(r) for r in runs]
        p_text = ''.join(r[0] for r in p_runs).strip()
        
        if not p_text:
            continue
            
        m_q = re.match(r'^câu\s*(\d+)[\s.:\-–]+(.*)', p_text, re.IGNORECASE)
        if m_q:
            if current_q and len(current_q['options']) >= 2:
                questions.append(current_q)
            q_num = int(m_q.group(1))
            q_text = m_q.group(2).strip()
            current_q = {
                'id': f'q_{q_num}_{os.urandom(4).hex()}',
                'index': q_num,
                'question': q_text,
                'options': [],
                'correctAnswer': None,
                'explanation': ''
            }
            continue
            
        if current_q:
            # Tìm các options A. B. C. D.
            opt_matches = list(re.finditer(r'(?:^|[\t\s]+)([A-H])[.:\)]\s*', p_text))
            if opt_matches:
                for i, match in enumerate(opt_matches):
                    opt_key = match.group(1).upper()
                    start_offset = match.end()
                    end_offset = opt_matches[i+1].start() if i + 1 < len(opt_matches) else len(p_text)
                    opt_content = p_text[start_offset:end_offset].strip()
                    
                    # Kiểm tra offset để xác định xem option này có run nào đỏ hoặc gạch chân không
                    curr_offset = 0
                    is_correct = False
                    for r_text, r_is_ans in p_runs:
                        r_start = curr_offset
                        r_end = curr_offset + len(r_text)
                        curr_offset = r_end
                        
                        if max(r_start, start_offset) < min(r_end, end_offset):
                            if r_is_ans and len(r_text.strip()) > 0:
                                is_correct = True
                                
                    current_q['options'].append({
                        'key': opt_key,
                        'text': opt_content
                    })
                    if is_correct:
                        current_q['correctAnswer'] = opt_key
            else:
                if len(current_q['options']) == 0:
                    current_q['question'] += "\n" + p_text
                else:
                    current_q['options'][-1]['text'] += " " + p_text

    if current_q and len(current_q['options']) >= 2:
        questions.append(current_q)

    return questions

# ===================================================================
# HTTP REQUEST HANDLER (REST API & STATIC FILE SERVER)
# ===================================================================
class QuizServerHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Thêm CORS headers để mọi thiết bị trong mạng LAN truy cập thuận lợi
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Filename')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == '/api/info':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            data = {
                'ip': LOCAL_IP,
                'port': PORT,
                'shareUrl': f'http://{LOCAL_IP}:{PORT}'
            }
            self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))
            return

        if path == '/api/banks':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            banks = read_banks()
            self.wfile.write(json.dumps(banks, ensure_ascii=False).encode('utf-8'))
            return

        if path == '/api/history':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            hist = read_history()
            self.wfile.write(json.dumps(hist, ensure_ascii=False).encode('utf-8'))
            return

        # Phục vụ các file tĩnh (HTML, CSS, JS)
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        content_length = int(self.headers.get('Content-Length', 0))

        if path == '/api/upload':
            raw_filename = self.headers.get('X-Filename', 'tailieu.docx')
            filename = urllib.parse.unquote(raw_filename)
            file_bytes = self.rfile.read(content_length)

            ext = filename.split('.')[-1].lower()
            title = os.path.splitext(filename)[0]

            questions = []
            with tempfile.TemporaryDirectory() as tmpdir:
                tmp_path = os.path.join(tmpdir, f'uploaded.{ext}')
                with open(tmp_path, 'wb') as f:
                    f.write(file_bytes)

                if ext == 'doc':
                    out_docx = os.path.join(tmpdir, 'converted.docx')
                    convert_doc_to_docx(tmp_path, out_docx)
                    questions = parse_docx_file(out_docx)
                elif ext == 'docx':
                    questions = parse_docx_file(tmp_path)
                elif ext == 'json':
                    try:
                        data = json.loads(file_bytes.decode('utf-8'))
                        if isinstance(data, list):
                            questions = data
                        elif 'questions' in data:
                            questions = data['questions']
                            title = data.get('title', title)
                    except Exception as e:
                        print("JSON parse error:", e)

            if not questions:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Không tìm thấy câu hỏi hợp lệ trong file'}, ensure_ascii=False).encode('utf-8'))
                return

            new_bank = {
                'id': f'bank_{os.urandom(6).hex()}',
                'title': title,
                'createdAt': '2026-10-22T19:30:00.000Z',
                'tags': ['Đã tải lên'],
                'questions': questions
            }

            banks = read_banks()
            banks.insert(0, new_bank)
            save_banks(banks)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps({
                'success': True,
                'bank': new_bank,
                'totalQuestions': len(questions),
                'withAnswers': sum(1 for q in questions if q.get('correctAnswer'))
            }, ensure_ascii=False).encode('utf-8'))
            return

        if path == '/api/banks':
            body = self.rfile.read(content_length).decode('utf-8')
            bank_obj = json.loads(body)
            banks = read_banks()
            # Cập nhật nếu đã có hoặc thêm mới
            existing = False
            for i, b in enumerate(banks):
                if b.get('id') == bank_obj.get('id'):
                    banks[i] = bank_obj
                    existing = True
                    break
            if not existing:
                banks.insert(0, bank_obj)
            save_banks(banks)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps({'success': True}, ensure_ascii=False).encode('utf-8'))
            return

        if path == '/api/history':
            body = self.rfile.read(content_length).decode('utf-8')
            hist_item = json.loads(body)
            hist = read_history()
            hist.insert(0, hist_item)
            save_history(hist)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps({'success': True}, ensure_ascii=False).encode('utf-8'))
            return

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        if path == '/api/banks':
            bank_id = query.get('id', [None])[0]
            if bank_id:
                banks = read_banks()
                banks = [b for b in banks if b.get('id') != bank_id]
                save_banks(banks)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps({'success': True}, ensure_ascii=False).encode('utf-8'))
            return

if __name__ == '__main__':
    os.chdir(BASE_DIR)
    # Lắng nghe trên 0.0.0.0 để tất cả máy khác trong mạng LAN có thể kết nối
    server_address = ('0.0.0.0', PORT)
    httpd = HTTPServer(server_address, QuizServerHandler)
    print(f"================================================================")
    print(f"🎯 QuizMaster Server đang hoạt động!")
    print(f"💻 Máy của bạn (Local):     http://localhost:{PORT}")
    print(f"🌐 Máy khác trong mạng LAN: http://{LOCAL_IP}:{PORT}")
    print(f"================================================================")
    httpd.serve_forever()
