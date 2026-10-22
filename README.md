# 🎓 QuizMaster Pro - Ứng Dụng Ôn & Thi Trắc Nghiệm Thông Minh

Hệ thống web tĩnh hiện đại hỗ trợ ôn tập trắc nghiệm qua Flashcard 3D và phòng thi thử bấm giờ, tương thích 100% khi triển khai lên **GitHub Pages**.

---

## 🌟 Tính Năng Nổi Bật

- **Tích hợp sẵn bộ đề chuẩn**: Đã tích hợp sẵn bộ đề **150 câu Kỹ Năng Giao Tiếp – Giáo Dục Sức Khỏe** với 100% đáp án chuẩn xác.
- **Không cần backend**: Chạy hoàn toàn trên trình duyệt tĩnh, thích hợp cho GitHub Pages.
- **Hỗ trợ nạp đề cương**: Đọc trực tiếp file Word (`.docx`), file sao lưu (`.json`), hoặc dán văn bản.
- **Tự động nhận diện đáp án gạch chân (`<u>`)**: Tự động chuyển đổi các phương án gạch chân trong Word thành đáp án đúng.
- **Chế độ Ôn tập**: Học qua thẻ Flashcard 3D hoặc trắc nghiệm tương tác chọn đáp án hiện màu xanh/đỏ ngay.
- **Chế độ Thi thử**: Chọn từng đề hoặc "Tick toàn bộ" để thi gộp, đếm ngược thời gian, chấm điểm theo thang điểm 10.
- **Lưu trữ tiến độ**: Tự động lưu tiến độ vào trình duyệt (`localStorage`).

---

## 🚀 Hướng Dẫn Đăng Lên GitHub Pages (Trong 1 Phút)

1. **Tạo Repository mới trên GitHub**:
   - Truy cập [GitHub](https://github.com/new) -> Tạo repository mới (ví dụ đặt tên: `on-thi-trac-nghiem`).
   - Đặt chế độ là **Public**.

2. **Đẩy mã nguồn lên GitHub**:
   Mở terminal tại thư mục dự án và chạy các lệnh:
   ```bash
   git init
   git add .
   git commit -m "Khoi tao web on thi trac nghiem"
   git branch -M main
   git remote add origin https://github.com/<TEN_GITHUB_CUA_BAN>/on-thi-trac-nghiem.git
   git push -u origin main
   ```

3. **Kích hoạt GitHub Pages**:
   - Vào repository trên GitHub -> Bấm vào tab **Settings** (Cài đặt).
   - Chọn mục **Pages** ở thanh menu bên trái.
   - Tại mục **Build and deployment** -> **Branch**, chọn nhánh `main` (thư mục `/root`) -> Bấm **Save**.
   - Chờ khoảng 30 giây, GitHub sẽ cung cấp đường link web của bạn:
     👉 `https://<TEN_GITHUB_CUA_BAN>.github.io/on-thi-trac-nghiem/`

Bạn có thể gửi đường link này cho bất kỳ ai (dùng điện thoại hay máy tính) để cùng vào ôn tập và thi thử trực tuyến!
