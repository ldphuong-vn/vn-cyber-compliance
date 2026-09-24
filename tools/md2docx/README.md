# md2docx — xuất mẫu văn bản sang Word

Chuyển các mẫu Markdown trong `docs/` sang `.docx` theo thể thức văn bản hành chính (NĐ 30/2020/NĐ-CP, Phụ lục I). Kết quả nằm trong `word/`, cùng cấu trúc thư mục với `docs/`.

```bash
cd tools/md2docx
npm install
node build.js                                  # build các mẫu trong danh sách TARGETS
node build.js ../../docs/02-ho-so-cap-do/mau-06-quyet-dinh-phe-duyet-cap-do.md   # build 1 file
```

Tham số trình bày (font, cỡ chữ, lề, giãn dòng) nằm trong `CFG` ở đầu `build.js`.

| Tham số | Giá trị hiện tại | Ghi chú |
|---|---|---|
| Khổ giấy | A4 (210 × 297 mm) | Bảng từ 9 cột trở lên tự chuyển sang trang khổ ngang |
| Lề | Normal của Word: 2,54 cm mỗi cạnh | Theo yêu cầu dùng lề Normal. NĐ 30/2020 quy định trên/dưới 20–25, trái 30–35, phải 15–20 mm — đổi `CFG.margin` nếu cần đúng tuyệt đối |
| Font | Times New Roman 13 | Theo NĐ 30/2020/NĐ-CP (phông Unicode TCVN 6909:2001) |
| Cỡ chữ | nội dung 13, quốc hiệu/tên cơ quan 12, nơi nhận 11 | NĐ 30/2020: 13–14 |
| Bảng dữ liệu | AutoFit, rộng 100% khổ trang (vừa cửa sổ); cỡ chữ tự giảm theo số cột: ≤3 cột 12 · 4–5 cột 11 · 6–7 cột 10 · ≥8 cột 9 | Độ rộng cột theo nội dung: cột ngắn (STT, mã, tên người, đơn vị, ngày) vừa đủ để không xuống dòng; cột nhiều chữ chia phần còn lại theo độ dài; cột để trống cho người điền nhận phần dư. Hàng tiêu đề lặp lại khi sang trang |
| Chỗ cần điền `{{...}}` | thay bằng **dữ liệu mẫu** trong `du-lieu-mau.json` và tô vàng | Tắt dữ liệu mẫu: `CFG.sampleData = false` (giữ nguyên `{{...}}`); tắt tô vàng: `CFG.highlightPlaceholders = false` |

Nhận diện Markdown: bảng 2 cột đầu tiên là khối quốc hiệu; bảng có "Nơi nhận" là khối ký; `<p align="center">` là tên loại/trích yếu; phần nội dung mẫu nằm giữa hai dòng `---` đầu tiên (phần "Hướng dẫn điền" không được xuất).

## Dữ liệu mẫu (`du-lieu-mau.json`)

Để bản Word dễ hình dung, các chỗ cần điền được thay bằng một bộ hồ sơ mô phỏng của **Công ty cổ phần Giải pháp Công nghệ TURBO**. Chỉ tên công ty là thật; họ tên, phòng ban, địa chỉ, số điện thoại, email (`example.vn`), số văn bản, IP (dải tài liệu `192.0.2.0/24`), nhà cung cấp và mọi số liệu đều giả lập. Mọi giá trị mẫu vẫn tô vàng để nhận biết cần thay.

- Khóa chung: `"TEN_PLACEHOLDER": "giá trị"`.
- Giá trị riêng cho từng văn bản: `"_theo_file": { "<tên file không đuôi .md>": { ... } }` (ví dụ ngày ký khác nhau giữa Mẫu 01, 04, 06).
- Giá trị dạng mảng: lần xuất hiện thứ k của placeholder trong văn bản nhận phần tử thứ k (ví dụ danh sách thành viên Hội đồng).
- Đổi sang dữ liệu thật của tổ chức mình: sao chép file, sửa giá trị, chạy lại `node build.js`. **Không** đưa dữ liệu thật lên repo công khai.

## Excel (`tools/md2xlsx/build.py`)

Checklist, ma trận và sổ đăng ký xuất sang Excel (thư mục `excel/`): `python3 tools/md2xlsx/build.py` (cần `openpyxl`).

| File | Nội dung |
|---|---|
| `excel/03-yeu-cau-theo-cap-do/checklist-tu-danh-gia-cap-1-5.xlsx` | Checklist cấp 1–5, cột Kết quả chọn từ danh sách (Đạt/Một phần/Chưa/N/A), tô màu tự động; sheet Tổng hợp tính bằng công thức |
| `excel/03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.xlsx` | Ma trận 18 nhóm × 5 cấp, ngưỡng định lượng, ánh xạ NĐ 331 ↔ TCVN |
| `excel/02-ho-so-cap-do/so-dang-ky-rui-ro.xlsx` | Sổ đăng ký rủi ro; Mức rủi ro = Khả năng × Tác động và phân loại bằng công thức |
| `excel/04-chinh-sach-quy-trinh/ma-tran-raci.xlsx` | Ma trận RACI |
