/**
 * QuizParser - Bộ phân tích đề trắc nghiệm thông minh
 * Hỗ trợ nhận diện tự động nhiều định dạng câu hỏi phổ biến tại Việt Nam
 */

const QuizParser = {
    /**
     * Phân tích văn bản thô thành danh sách câu hỏi
     * @param {string} text - Nội dung văn bản
     * @returns {Array} Danh sách các câu hỏi đã chuẩn hóa
     */
    parseText(text) {
        if (!text || typeof text !== 'string') return [];

        // Chuẩn hóa ký tự xuống dòng
        let cleanText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

        // Kiểm tra xem có bảng đáp án ở cuối đề thi không
        // Ví dụ: "ĐÁP ÁN: 1-A 2-B 3-C" hoặc "BẢNG ĐÁP ÁN: 1.A 2.B..."
        const answerKeyMap = this.extractAnswerKeyTable(cleanText);

        // Tách các câu hỏi bằng regex thông minh
        // Dạng: "Câu 1:", "Câu 1.", "Câu 1 -", "Bài 1:", "1.", "1/", "1:", "Question 1:"
        const questionBlocks = this.splitQuestionBlocks(cleanText);

        const parsedQuestions = [];

        for (let i = 0; i < questionBlocks.length; i++) {
            const block = questionBlocks[i];
            const q = this.parseSingleQuestion(block, i + 1, answerKeyMap);
            if (q && q.question.trim().length > 0 && q.options.length >= 2) {
                parsedQuestions.push(q);
            }
        }

        return parsedQuestions;
    },

    /**
     * Tách văn bản thành các khối từng câu hỏi
     */
    splitQuestionBlocks(text) {
        // Tìm các vị trí bắt đầu câu hỏi:
        // Hỗ trợ:
        // - Câu 1: / Câu 1. / Câu 1 - / Câu 1 / Cau 1:
        // - Bài 1: / Question 1: / Q1:
        // - 1. / 1: / 1/ / [1] / (1) (khi đứng ở đầu dòng)
        const lines = text.split('\n');
        const blocks = [];
        let currentBlock = [];

        // Regex phát hiện dòng bắt đầu câu hỏi mới
        const qStartRegex = /^(?:(?:câu|cau|question|bài|bai)\s*\d+[\s.:\-)\]]|\d{1,4}[\s.:\-)\]])/i;
        
        // Regex kiểm tra xem dòng có phải là tiêu đề BẢNG ĐÁP ÁN ở cuối bài không
        const endTableRegex = /^(?:bảng đáp án|bang dap an|answer key|bảng trả lời|danh sách đáp án)/i;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();

            if (!trimmed) {
                if (currentBlock.length > 0) currentBlock.push(line);
                continue;
            }

            // Nếu gặp tiêu đề bảng đáp án cuối bài thì dừng tách câu hỏi
            if (endTableRegex.test(trimmed)) {
                break;
            }

            // Kiểm tra xem có phải bắt đầu câu hỏi mới không
            if (qStartRegex.test(trimmed)) {
                if (currentBlock.length > 0) {
                    blocks.push(currentBlock.join('\n'));
                    currentBlock = [];
                }
                currentBlock.push(line);
            } else {
                currentBlock.push(line);
            }
        }

        if (currentBlock.length > 0) {
            blocks.push(currentBlock.join('\n'));
        }

        return blocks;
    },

    /**
     * Phân tích một khối văn bản chứa 1 câu hỏi
     */
    parseSingleQuestion(block, defaultIndex, answerKeyMap) {
        const lines = block.split('\n');
        let questionNumber = defaultIndex;
        let questionTextLines = [];
        let options = [];
        let correctAnswer = null;
        let explanation = '';

        // Tìm số thứ tự câu hỏi ở dòng đầu tiên
        const numMatch = lines[0].match(/(?:câu|cau|question|bài|bai)?\s*(\d+)/i);
        if (numMatch && numMatch[1]) {
            questionNumber = parseInt(numMatch[1], 10);
        }

        // Bỏ tiền tố câu hỏi (VD: "Câu 1: ", "1. ", "Question 1 - ")
        let firstLineClean = lines[0].replace(/^(?:câu|cau|question|bài|bai)\s*\d+[\s.:\-)\]]*/i, '')
                                     .replace(/^\d+[\s.:\-)\]]+/, '').trim();
        if (firstLineClean) {
            questionTextLines.push(firstLineClean);
        }

        let inOptions = false;
        let currentOptKey = null;
        let currentOptText = [];

        // Regex phát hiện phương án: A. B. C. D. hoặc *A. hoặc [A] hoặc A) hoặc A/
        const optStartRegex = /^(\*?[A-H]\*?|\([A-H]\)|\[[A-H]\]|[A-H]\))[.\s:\-]/;

        // Regex phát hiện dòng đáp án: "Đáp án: A", "Đ/a: B", "Key: C", "Answer: D"
        const answerLineRegex = /^(?:đáp án|dap an|đ\/a|da|key|answer|chọn|chon)[\s.:\-]+([A-H])/i;

        // Regex phát hiện giải thích: "Giải thích: ...", "Lời giải: ..."
        const explLineRegex = /^(?:giải thích|giai thich|lời giải|loi giai|hướng dẫn|huong dan)[\s.:\-]+(.*)/i;

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();

            if (!trimmed) continue;

            // Kiểm tra dòng giải thích
            const explMatch = trimmed.match(explLineRegex);
            if (explMatch) {
                explanation = explMatch[1] || '';
                // Các dòng tiếp theo cho vào explanation
                for (let j = i + 1; j < lines.length; j++) {
                    explanation += '\n' + lines[j].trim();
                }
                break;
            }

            // Kiểm tra dòng đáp án (VD: "Đáp án: A")
            const ansMatch = trimmed.match(answerLineRegex);
            if (ansMatch) {
                correctAnswer = ansMatch[1].toUpperCase();
                continue;
            }

            // Kiểm tra xem dòng có chứa các phương án trên cùng 1 dòng không
            // Ví dụ: "A. Hà Nội     B. TP HCM     C. Đà Nẵng     D. Cần Thơ"
            const multiOptsOnLine = this.extractMultipleOptionsOnLine(trimmed);
            if (multiOptsOnLine.length >= 2) {
                inOptions = true;
                if (currentOptKey) {
                    options.push({
                        key: currentOptKey,
                        text: currentOptText.join(' ').trim()
                    });
                    currentOptKey = null;
                    currentOptText = [];
                }
                for (const opt of multiOptsOnLine) {
                    if (opt.isCorrect) correctAnswer = opt.key;
                    options.push({
                        key: opt.key,
                        text: opt.text
                    });
                }
                continue;
            }

            // Kiểm tra phương án dạng đơn từng dòng (VD: "A. Nội dung")
            const optMatch = trimmed.match(optStartRegex);
            if (optMatch) {
                inOptions = true;
                if (currentOptKey) {
                    options.push({
                        key: currentOptKey,
                        text: currentOptText.join(' ').trim()
                    });
                }

                let rawKey = optMatch[1];
                let isMarkedCorrect = false;

                // Nếu có dấu sao *A hoặc A* hoặc [A]
                if (rawKey.includes('*')) {
                    isMarkedCorrect = true;
                }
                const cleanKey = rawKey.replace(/[^A-H]/gi, '').toUpperCase();
                if (isMarkedCorrect) {
                    correctAnswer = cleanKey;
                }

                currentOptKey = cleanKey;
                // Nội dung phương án
                const contentText = trimmed.substring(optMatch[0].length).trim();
                currentOptText = [contentText];
            } else if (inOptions) {
                // Tiếp nối nội dung của phương án trước đó
                currentOptText.push(trimmed);
            } else {
                // Tiếp nối nội dung của câu hỏi
                questionTextLines.push(trimmed);
            }
        }

        // Đẩy phương án cuối cùng vào danh sách
        if (currentOptKey) {
            options.push({
                key: currentOptKey,
                text: currentOptText.join(' ').trim()
            });
        }

        // Nếu chưa tìm thấy đáp án đúng trong câu hỏi, tra cứu trong bảng đáp án cuối bài
        if (!correctAnswer && answerKeyMap && answerKeyMap[questionNumber]) {
            correctAnswer = answerKeyMap[questionNumber];
        }

        // Tự động kiểm tra nếu có dấu hiệu gạch chân hoặc in đậm trong options
        // Hoặc phương án có tiền tố *
        options.forEach(opt => {
            if (opt.text.startsWith('*') || opt.text.endsWith('*')) {
                opt.text = opt.text.replace(/\*/g, '').trim();
                if (!correctAnswer) correctAnswer = opt.key;
            }
        });

        return {
            id: 'q_' + Math.random().toString(36).substr(2, 9),
            index: questionNumber,
            question: questionTextLines.join('\n').trim(),
            options: options,
            correctAnswer: correctAnswer || null, // null nếu file đề cương chưa đánh dấu, người dùng có thể chọn nhanh
            explanation: explanation.trim()
        };
    },

    /**
     * Tách nhiều phương án trên cùng 1 dòng
     * Ví dụ: "A. 10    B. 20    C. 30    D. 40"
     */
    extractMultipleOptionsOnLine(line) {
        const regex = /(?:^|\s{2,}|\t)(\*?[A-H]\*?|\([A-H]\)|\[[A-H]\]|[A-H]\))[.\s:\-](.+?)(?=(?:\s{2,}|\t)(?:\*?[A-H]\*?|\([A-H]\)|\[[A-H]\]|[A-H]\))[.\s:\-]|$)/gi;
        const matches = [];
        let match;

        while ((match = regex.exec(line)) !== null) {
            let rawKey = match[1];
            let isCorrect = rawKey.includes('*');
            let cleanKey = rawKey.replace(/[^A-H]/gi, '').toUpperCase();
            let optText = match[2].trim();

            matches.push({
                key: cleanKey,
                text: optText,
                isCorrect: isCorrect
            });
        }

        return matches;
    },

    /**
     * Trích xuất bảng đáp án ở cuối văn bản
     * Hỗ trợ: "1.A 2.B 3.C", "1-A, 2-B, 3-C", "1:A  2:B", "1A 2B 3C"
     */
    extractAnswerKeyTable(text) {
        const keyMap = {};
        // Tìm các cụm số và chữ cái đáp án
        // Ví dụ: 1.A, 1-A, 1: A, 1A, Câu 1: A
        const keyRegex = /(?:câu\s*)?(\d+)[\s.:\-–]*([A-H])\b/gi;
        
        // Tìm vị trí của từ khóa "Đáp án" gần cuối văn bản
        const lower = text.toLowerCase();
        let searchIndex = -1;
        const keywords = ['bảng đáp án', 'đáp án:', 'dap an:', 'answer key', 'keys:'];
        for (const kw of keywords) {
            const idx = lower.lastIndexOf(kw);
            if (idx > searchIndex) searchIndex = idx;
        }

        // Nếu có phần bảng đáp án tách biệt
        const textToSearch = searchIndex !== -1 ? text.substring(searchIndex) : text;
        
        let match;
        while ((match = keyRegex.exec(textToSearch)) !== null) {
            const qNum = parseInt(match[1], 10);
            const ans = match[2].toUpperCase();
            keyMap[qNum] = ans;
        }

        return keyMap;
    },

    /**
     * Đọc và phân tích file dạng Excel / CSV
     */
    parseExcel(workbook) {
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        
        if (!rows || rows.length <= 1) return [];

        const headerRow = rows[0].map(h => (h || '').toString().toLowerCase().trim());
        
        // Tìm các cột: Câu hỏi, A, B, C, D, Đáp án đúng, Giải thích
        let qCol = headerRow.findIndex(h => h.includes('câu') || h.includes('question') || h.includes('nội dung'));
        let aCol = headerRow.findIndex(h => h === 'a' || h.includes('đáp án a') || h.includes('option a'));
        let bCol = headerRow.findIndex(h => h === 'b' || h.includes('đáp án b') || h.includes('option b'));
        let cCol = headerRow.findIndex(h => h === 'c' || h.includes('đáp án c') || h.includes('option c'));
        let dCol = headerRow.findIndex(h => h === 'd' || h.includes('đáp án d') || h.includes('option d'));
        let ansCol = headerRow.findIndex(h => h.includes('đúng') || h.includes('correct') || h.includes('key') || h.includes('đáp án'));
        let explCol = headerRow.findIndex(h => h.includes('giải thích') || h.includes('explanation') || h.includes('ghi chú'));

        if (qCol === -1) qCol = 0;
        if (aCol === -1) aCol = 1;
        if (bCol === -1) bCol = 2;
        if (cCol === -1) cCol = 3;
        if (dCol === -1) dCol = 4;
        if (ansCol === -1) ansCol = 5;

        const questions = [];

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            if (!row || !row[qCol]) continue;

            const questionText = (row[qCol] || '').toString().trim();
            if (!questionText) continue;

            const options = [];
            const optCols = [
                { key: 'A', col: aCol },
                { key: 'B', col: bCol },
                { key: 'C', col: cCol },
                { key: 'D', col: dCol }
            ];

            optCols.forEach(o => {
                if (row[o.col] !== undefined && row[o.col] !== null && row[o.col] !== '') {
                    options.push({
                        key: o.key,
                        text: (row[o.col] || '').toString().trim()
                    });
                }
            });

            let correct = (row[ansCol] || '').toString().trim().toUpperCase();
            // Lấy ký tự A-D đầu tiên trong đáp án
            const matchKey = correct.match(/[A-D]/);
            if (matchKey) correct = matchKey[0];

            questions.push({
                id: 'q_' + Math.random().toString(36).substr(2, 9),
                index: i,
                question: questionText,
                options: options,
                correctAnswer: correct || null,
                explanation: explCol !== -1 && row[explCol] ? row[explCol].toString().trim() : ''
            });
        }

        return questions;
    },

    /**
     * Đọc và phân tích file Word nhị phân (.doc - Word 97-2003)
     */
    parseDocBinary(arrayBuffer) {
        const bytes = new Uint8Array(arrayBuffer);
        const decoder16 = new TextDecoder('utf-16le', { fatal: false });
        const raw16 = decoder16.decode(bytes);

        // Làm sạch các ký tự điều khiển trong file nhị phân OLE CFBF
        let cleaned = raw16.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, ' ');
        cleaned = cleaned.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

        return this.parseText(cleaned);
    },

    /**
     * Đọc file Word (.docx) dùng mammoth (Hỗ trợ 100% trên GitHub Pages)
     * Tự động nhận diện các đáp án được gạch chân (<u>) thành đáp án đúng
     */
    async parseDocx(arrayBuffer) {
        if (!window.mammoth) {
            throw new Error("Thư viện Mammoth chưa được nạp");
        }
        // Sử dụng convertToHtml với styleMap để bảo tồn thẻ gạch chân <u>
        const result = await mammoth.convertToHtml(
            { arrayBuffer: arrayBuffer },
            { styleMap: ["u => u", "strike => s"] }
        );
        let html = result.value;
        // Đánh dấu thẻ <u> bằng dấu sao * để parser nhận diện đáp án đúng
        let marked = html.replace(/<u>(.*?)<\/u>/gi, '*$1*');
        // Chuyển đổi các thẻ khối thành xuống dòng
        marked = marked.replace(/<\/p>/gi, '\n')
                       .replace(/<br\s*\/?>/gi, '\n')
                       .replace(/<\/tr>/gi, '\n')
                       .replace(/<\/td>/gi, '\t')
                       .replace(/<[^>]+>/g, '');
        return this.parseText(marked);
    }
};

window.QuizParser = QuizParser;
