# Văn bản gốc — nguồn căn cứ

> Bản text lưu ngày 23–24/09/2026 để tra cứu, tìm kiếm (grep) và trích dẫn. Khi trích dẫn vào hồ sơ, ghi **tên văn bản + điều khoản + ngày đối chiếu**.

Các file trong `toan-van/` là bản text trích từ trang nguồn nên **còn phần menu/quảng cáo ở đầu và cuối file**. Nội dung pháp lý nằm ở giữa. Văn bản quy phạm pháp luật không thuộc đối tượng bảo hộ quyền tác giả (Luật SHTT, Điều 15), nên được lưu ở đây.

| Tệp | Văn bản | Nguồn text | Ghi chú |
|---|---|---|---|
| `toan-van/luat-116-2025-qh15-an-ninh-mang.txt` | **Luật An ninh mạng số 116/2025/QH15** (thông qua 10/12/2025, hiệu lực 01/7/2026) | Công báo số 35 ngày 21/01/2026 | Trích được chữ từ bản Công báo |
| `toan-van/nd-331-2026-nd-cp-bao-ve-anm-httt.txt` | **NĐ 331/2026/NĐ-CP** — Bảo vệ an ninh mạng đối với hệ thống thông tin (19/8/2026) | luatnguyen.vn (đối chiếu vanban.chinhphu.vn docid 219243) | 40 điều + Phụ lục Mẫu 01–08. Bản PDF ký số là ảnh scan |
| `toan-van/nd-333-2026-nd-cp-chi-tiet-luat-anm.txt` | **NĐ 333/2026/NĐ-CP** — Quy định chi tiết và biện pháp thi hành Luật An ninh mạng (19/8/2026) | luatnguyen.vn (đối chiếu vanban.chinhphu.vn docid 219244) | 32 điều |
| `toan-van/nd-330-2026-nd-cp-xu-phat-anm-dlcn.txt` | **NĐ 330/2026/NĐ-CP** — Xử phạt VPHC lĩnh vực an ninh mạng và bảo vệ DLCN (19/8/2026) | Công báo (tệp .docx đính kèm) congbao.chinhphu.vn | 4 chương, 82 điều |
| `toan-van/luat-91-2025-qh15-bao-ve-dlcn.txt` | Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 | Công báo số 971+972 ngày 24/7/2025 | |
| `toan-van/nd-356-2025-nd-cp-chi-tiet-luat-dlcn.txt` | NĐ 356/2025/NĐ-CP — Chi tiết Luật BVDLCN (31/12/2025) | luatvietnam.vn (kèm Phụ lục Mẫu 01a–10) | Bản có chèn ghi chú cập nhật theo NQ 22/2026 |
| `toan-van/luat-24-2023-qh15-vien-thong.txt` | Luật Viễn thông số 24/2023/QH15 (hiệu lực 01/7/2024) | Công báo số 29+30 ngày 05/01/2024 | Đ3 k10–12 (điện toán đám mây, dịch vụ ứng dụng viễn thông), Đ20, Đ28–29 — dùng cho vùng xám ngành nghề có điều kiện |
| `toan-van/nd-163-2024-nd-cp-chi-tiet-luat-vien-thong.txt` | NĐ 163/2024/NĐ-CP — Chi tiết Luật Viễn thông (24/12/2024) | luatvietnam.vn | Đ28 (thông tin người dùng dịch vụ cloud/DC), Đ45 (thông báo cung cấp dịch vụ viễn thông) |
| `toan-van/luat-64-2025-qh15-ban-hanh-vbqppl.txt` | Luật Ban hành văn bản QPPL số 64/2025/QH15 | Công báo số 603+604 ngày 26/3/2025 | Đ58 — nguyên tắc áp dụng khi văn bản quy định khác nhau |
| `toan-van/nq-22-2026-nq-cp-cat-giam-tthc-bo-cong-an.txt` | NQ 22/2026/NQ-CP — Cắt giảm, đơn giản hóa TTHC, điều kiện kinh doanh thuộc Bộ Công an (29/4/2026) | luatvietnam.vn | Bản ký số là ảnh scan. Phần liên quan: Phụ lục I.7 |

## TCVN 14423:2026 — không lưu trong repo

**TCVN 14423:2026 An ninh mạng – Hệ thống thông tin – Yêu cầu cơ bản** (công bố theo QĐ 3243/QĐ-BKHCN ngày 24/7/2026; thay thế TCVN 14423:2025 và TCVN 11930:2017) là tiêu chuẩn **có bản quyền**, do Viện Tiêu chuẩn Chất lượng Việt Nam (VSQI) phát hành và bán.

- Repo này chỉ chứa **bản tóm lược bằng lời riêng, kèm số mục** để tra cứu (`docs/03-yeu-cau-theo-cap-do/`).
- Khi lập và ký duyệt phương án bảo đảm an ninh mạng, **phải đối chiếu bản chính thức mua từ VSQI**.
- `.gitignore` chặn các file `tcvn-14423*` để tránh vô tình đưa toàn văn lên repo.

## Văn bản liên quan chưa lưu

| Văn bản | Lý do |
|---|---|
| Luật Đầu tư (Phụ lục IV — danh mục ngành, nghề đầu tư kinh doanh có điều kiện) | Cần để kết luận ranh giới cấp 2/3 (NĐ 331 Đ12.2.a, Đ13.2.a) |
| NĐ 329/2026/NĐ-CP (lực lượng bảo vệ ANM), NĐ 332/2026/NĐ-CP (kinh doanh sản phẩm, dịch vụ ANM) | Chưa cần cho bộ khung; bổ sung khi thuê/cung cấp dịch vụ đánh giá, kiểm thử ANM |
| Thông tư hướng dẫn của Bộ Công an (đánh giá rủi ro, giám sát, ứng cứu sự cố, Khung quản lý rủi ro ANM) | **Chưa ban hành** tại ngày 24/09/2026 (NĐ 331 Đ10.8, Đ28.6, Đ34.1.c) |
