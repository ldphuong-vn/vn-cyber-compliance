# Hướng dẫn đóng góp

Cảm ơn bạn quan tâm tới bộ khung tuân thủ An ninh mạng Việt Nam. Góp ý từ người làm thực tế giúp tài liệu đúng và dùng được hơn.

## Cách góp ý nhanh

| Bạn muốn | Làm gì |
|---|---|
| Báo văn bản mới, sửa đổi, hết hiệu lực; báo trích dẫn sai | Mở Issue theo mẫu **"Văn bản mới / trích dẫn"** |
| Góp ý nội dung, mẫu biểu, chia sẻ cách cơ quan có thẩm quyền đang hướng dẫn | Mở Issue theo mẫu **"Góp ý nội dung"** |
| Tự sửa | Gửi Pull Request (xem dưới) |

## Quy ước khi sửa tài liệu

1. **Trích dẫn điều khoản** cho mọi nghĩa vụ, thời hạn, con số, dạng `NĐ 331 Đ13.2.a`, `Luật 116 Đ8.1`, `TCVN 14423:2026 mục 5.8`. Chỉ trích điều bạn đã đọc trong văn bản gốc; chỗ chưa chắc ghi **[CẦN ĐỐI CHIẾU]** kèm lý do.
2. Văn bản pháp luật mới: lưu toàn văn vào `sources/van-ban-goc/toan-van/` và ghi nguồn trong `sources/van-ban-goc/README.md`; cập nhật `docs/00-tong-quan/danh-muc-van-ban.md`.
3. Điểm chưa rõ hoặc mâu thuẫn giữa các văn bản: thêm vào `docs/00-tong-quan/diem-can-doi-chieu.md`.
4. **Bản quyền:** không đưa toàn văn TCVN hay tài liệu có bản quyền khác vào repo; chỉ tóm lược bằng lời của bạn kèm số mục.
5. **Không** đưa thông tin nội bộ, dữ liệu cá nhân, IP, sơ đồ mạng hay hồ sơ thật của bất kỳ tổ chức nào. Mẫu dùng placeholder `{{...}}`; dữ liệu minh họa để trong `tools/md2docx/du-lieu-mau.json` và phải là dữ liệu mô phỏng.
6. Sửa mẫu văn bản trong `docs/` xong thì sinh lại bộ mẫu: `cd tools/md2docx && node build.js` và `python3 tools/md2xlsx/build.py` (xem `tools/md2docx/README.md`).
7. Tiếng Việt có dấu; tên file kebab-case không dấu; đầu mỗi tài liệu giữ khối **Căn cứ · Đối chiếu văn bản gốc · Trạng thái** và cập nhật ngày đối chiếu.

## Ghi nhận

Người đóng góp được ghi nhận trong Pull Request, trong báo cáo cập nhật tháng tại `docs/00-tong-quan/cap-nhat-dinh-ky/` và trong danh sách Contributors của repo. Nếu bạn muốn được ghi tên kèm đơn vị công tác, nêu rõ trong Issue hoặc Pull Request.

Nội dung repo là tài liệu tham khảo, không phải ý kiến pháp lý.
