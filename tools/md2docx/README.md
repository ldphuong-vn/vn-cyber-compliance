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
| Khổ giấy | A4 (210 × 297 mm) | Bảng trên 6 cột tự chuyển sang trang khổ ngang |
| Lề | trên 20, dưới 20, trái 30, phải 15 mm | NĐ 30/2020: trên/dưới 20–25, trái 30–35, phải 15–20 mm |
| Font | Calibri | NĐ 30/2020 quy định Times New Roman; đổi `CFG.font` nếu cần |
| Cỡ chữ | nội dung 13, quốc hiệu/tên cơ quan 12, nơi nhận 11 | NĐ 30/2020: 13–14 |
| Bảng dữ liệu | Word AutoFit theo nội dung, có độ rộng cột ước lượng sẵn | Hàng tiêu đề lặp lại khi sang trang |
| Chỗ cần điền `{{...}}` | tô vàng | Tắt bằng `CFG.highlightPlaceholders = false` |

Nhận diện Markdown: bảng 2 cột đầu tiên là khối quốc hiệu; bảng có "Nơi nhận" là khối ký; `<p align="center">` là tên loại/trích yếu; phần nội dung mẫu nằm giữa hai dòng `---` đầu tiên (phần "Hướng dẫn điền" không được xuất).
