# 09 — Giải pháp AI vision: camera, nhận diện khuôn mặt, nhận diện biển số

> **Căn cứ:** Luật 91/2025/QH15; NĐ 356/2025/NĐ-CP; NĐ 330/2026/NĐ-CP; NĐ 331/2026/NĐ-CP; NQ 22/2026/NQ-CP; Luật 134/2025/QH15; NĐ 142/2026/NĐ-CP; QĐ 33/2026/QĐ-TTg · **Đối chiếu văn bản gốc:** 29/09/2026 · **Trạng thái:** Bản khung v0.1

Hướng dẫn theo ngành cho **nhà cung cấp** camera giám sát, phần mềm quản lý video, nhận diện khuôn mặt, nhận diện biển số dùng cho kiểm soát ra vào, chấm công, điểm danh, bãi xe; và bộ công cụ cho **khách hàng** triển khai các giải pháp này. Bản Word: [`templates/09-ai-vision/`](../../templates/README.md#7-ngành-ai-vision-camera-nhận-diện-khuôn-mặt-nhận-diện-biển-số).

**Đọc trước:** [thao-luan-tai-lieu-va-phuong-an-ho-tro.md](thao-luan-tai-lieu-va-phuong-an-ho-tro.md) — phân loại dữ liệu, vai trò nhà cung cấp theo mô hình M1–M5, nghĩa vụ khách hàng theo tình huống, các mức dịch vụ hỗ trợ, vùng xám V1–V9.

## Chọn mẫu theo mô hình kinh doanh

| Mô hình | Mẫu cần có |
|---|---|
| **M1** — bán thiết bị, phần mềm cài tại chỗ, không truy cập dữ liệu khách | A1, A2, A3, A8; B1–B4, B7; toàn bộ K giao khách hàng; P1 |
| **M2** — thêm lắp đặt, đăng ký khuôn mặt hộ, bảo hành, hỗ trợ từ xa | Như M1 + C1, C3, C4, C5, A7 |
| **M3/M4** — cloud, vận hành hộ khách | Như M2 + **A6** (Giấy chứng nhận dịch vụ xử lý DLCN), các khoản [M3/M4] của C1; hồ sơ DPIA của chính nhà cung cấp (dùng khung K6); hồ sơ cấp độ HTTT cho nền tảng |
| **M5** — dùng dữ liệu khách để huấn luyện | Không khuyến nghị. Nếu làm: B7 phương án B, thỏa thuận riêng |

## Danh mục mẫu

### A — Tổ chức, pháp lý của nhà cung cấp

| Mã | File | Nội dung |
|---|---|---|
| A1 | [a1-qd-chi-dinh-nhan-su-bvdlcn.md](a1-qd-chi-dinh-nhan-su-bvdlcn.md) | Quyết định chỉ định nhân sự, bộ phận BVDLCN hoặc thuê dịch vụ; hồ sơ năng lực; thỏa thuận bảo mật (NĐ 356 Đ13, Đ14) |
| A2 | [a2-chinh-sach-bvdlcn.md](a2-chinh-sach-bvdlcn.md) | Chính sách BVDLCN công bố trên website; tách vai bên kiểm soát và bên xử lý |
| A3 | [a3-so-dang-ky-hoat-dong-xu-ly.md](a3-so-dang-ky-hoat-dong-xu-ly.md) | Sổ đăng ký hoạt động xử lý, 10 dòng mẫu điển hình; đếm chủ thể theo ngưỡng 10.000 / 100.000 |
| A6 | [a6-de-an-cap-giay-chung-nhan-dich-vu-xu-ly-dlcn.md](a6-de-an-cap-giay-chung-nhan-dich-vu-xu-ly-dlcn.md) | Đề án xin Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ xử lý DLCN (NĐ 356 Đ25.2) |
| A7 | [a7-quy-trinh-su-co-dlcn-sinh-trac-hoc.md](a7-quy-trinh-su-co-dlcn-sinh-trac-hoc.md) | Quy trình sự cố DLCN ba nhánh: bên xử lý, bên kiểm soát, sinh trắc học (NĐ 356 Đ28, Đ29) |
| A8 | [a8-bao-cao-danh-gia-tuan-thu-he-thong-ai.md](a8-bao-cao-danh-gia-tuan-thu-he-thong-ai.md) | Báo cáo đánh giá tuân thủ hằng năm cho hệ thống AI, cloud, dịch vụ có Giấy chứng nhận (NĐ 356 Đ10.5.đ, Đ12.3.d, Đ23.3) |

### B — Hồ sơ sản phẩm

| Mã | File | Nội dung |
|---|---|---|
| B1 | [b1-mo-ta-luong-du-lieu-kien-truc.md](b1-mo-ta-luong-du-lieu-kien-truc.md) | Thành phần, luồng dữ liệu, 11 loại dữ liệu; đoạn trích sẵn cho Mẫu 10 mục II.2, II.3, II.10, II.11 |
| B2 | [b2-phan-loai-rui-ro-he-thong-ai.md](b2-phan-loai-rui-ro-he-thong-ai.md) | Phân loại rủi ro 9 tính năng AI (Luật 91 Đ30.4); biện pháp theo mức; quy trình xét duyệt tính năng mới |
| B3 | [b3-giai-thich-thuat-toan.md](b3-giai-thich-thuat-toan.md) | Giải thích thuật toán: bản 1 trang cho người dùng, bản kỹ thuật (NĐ 356 Đ10.3) |
| B4 | [b4-tai-lieu-bao-mat-san-pham.md](b4-tai-lieu-bao-mat-san-pham.md) | Tài liệu bảo mật sản phẩm: cam kết, bằng chứng, việc khách hàng phải cấu hình |
| B7 | [b7-tuyen-bo-du-lieu-huan-luyen.md](b7-tuyen-bo-du-lieu-huan-luyen.md) | Tuyên bố dữ liệu huấn luyện: phương án A (không dùng dữ liệu khách), phương án B (có điều kiện) |

B5 (ma trận tính năng ↔ điều khoản) nằm trong bản thảo luận mục 5; B6 (hướng dẫn cấu hình, nghiệm thu) gộp vào K8.

### C — Hợp đồng

| Mã | File | Nội dung |
|---|---|---|
| C1 | [c1-phu-luc-xu-ly-du-lieu-ca-nhan.md](c1-phu-luc-xu-ly-du-lieu-ca-nhan.md) | Phụ lục thỏa thuận xử lý DLCN (DPA), gồm điều khoản cloud (C2 gộp vào đây) |
| C3 | [c3-thoa-thuan-ho-tro-tu-xa.md](c3-thoa-thuan-ho-tro-tu-xa.md) | Phụ lục hỗ trợ kỹ thuật, bảo hành, truy cập từ xa; phiếu hỗ trợ |
| C4 | [c4-cam-ket-bao-mat-nhan-su-dai-ly.md](c4-cam-ket-bao-mat-nhan-su-dai-ly.md) | Cam kết bảo mật của kỹ thuật viên, nhân viên đại lý, nhà thầu lắp đặt |
| C5 | [c5-dieu-khoan-dai-ly-tich-hop.md](c5-dieu-khoan-dai-ly-tich-hop.md) | Điều khoản BVDLCN trong hợp đồng đại lý, nhà tích hợp hệ thống |

### K — Bộ công cụ giao khách hàng (khách hàng ban hành)

| Mã | File | Nội dung |
|---|---|---|
| K1 | [k1-bien-bao-camera.md](k1-bien-bao-camera.md) | Bốn biển báo (công cộng, nơi làm việc, nhận diện khuôn mặt, bãi xe) và thông báo đầy đủ |
| K2 | [k2-thong-bao-va-dong-y-sinh-trac-hoc.md](k2-thong-bao-va-dong-y-sinh-trac-hoc.md) | Thông báo, đồng ý sinh trắc học cho người lao động, khách, phụ huynh và học sinh, người lao động của đơn vị đối tác; đơn rút lại đồng ý |
| K3 | [k3-dieu-khoan-noi-quy-lao-dong-giam-sat.md](k3-dieu-khoan-noi-quy-lao-dong-giam-sat.md) | Quy định giám sát bằng camera, nhận diện tại nơi làm việc; phiếu xác nhận đã được thông báo |
| K4 | [k4-chinh-sach-luu-tru-xoa.md](k4-chinh-sach-luu-tru-xoa.md) | Chính sách lưu trữ, xóa, hủy 15 loại dữ liệu; giữ lại khi có tranh chấp; biên bản xóa |
| K5 | [k5-quy-trinh-yeu-cau-chu-the.md](k5-quy-trinh-yeu-cau-chu-the.md) | Quy trình yêu cầu của chủ thể theo thời hạn NĐ 356 Đ5; phiếu yêu cầu; sổ theo dõi |
| K6 | [k6-dpia-dien-san-phan-ky-thuat.md](k6-dpia-dien-san-phan-ky-thuat.md) | Hồ sơ DPIA theo Mẫu 10 NĐ 356, điền sẵn phần kỹ thuật |
| K7 | [k7-thong-bao-su-co-sinh-trac-hoc.md](k7-thong-bao-su-co-sinh-trac-hoc.md) | Thông báo sự cố cho chủ thể, thông báo công khai, Mẫu 08, biên bản xác nhận vi phạm |
| K8 | [k8-checklist-trien-khai-ban-giao.md](k8-checklist-trien-khai-ban-giao.md) | Checklist 47 mục nghiệm thu tuân thủ; biên bản bàn giao |
| K9 | [k9-quy-trinh-cung-cap-video-co-quan-chuc-nang.md](k9-quy-trinh-cung-cap-video-co-quan-chuc-nang.md) | Cung cấp video cho cơ quan có thẩm quyền; biên bản giao nhận; sổ theo dõi |
| K10 | [k10-hoi-dap-khach-hang.md](k10-hoi-dap-khach-hang.md) | 22 câu hỏi đáp thường gặp |
| K11 | [k11-thoa-thuan-chuyen-giao-du-lieu-don-vi-doi-tac.md](k11-thoa-thuan-chuyen-giao-du-lieu-don-vi-doi-tac.md) | Phụ lục hợp đồng giữa khách hàng và đơn vị đối tác: chuyển danh sách, ảnh khuôn mặt, bảng tổng hợp ngày có mặt |
| K12 | [k12-quy-trinh-van-hanh-diem-kiem-soat-ra-vao.md](k12-quy-trinh-van-hanh-diem-kiem-soat-ra-vao.md) | Quy trình vận hành điểm kiểm soát ra vào: bàn đăng ký, xử lý tại cổng, khóa quyền và xóa, rà soát định kỳ, bảng tổng hợp; sổ theo dõi |
| K13 | [k13-bien-ban-do-thu-do-chinh-xac-hien-truong.md](k13-bien-ban-do-thu-do-chinh-xac-hien-truong.md) | Biên bản đo thử độ chính xác tại hiện trường theo từng cổng: từ chối nhầm, nhận nhầm người lạ, giả mạo; chốt chế độ so khớp, ngưỡng |

### P — Công cụ bán hàng

| Mã | File | Nội dung |
|---|---|---|
| P1 | [p1-phieu-danh-gia-nhanh-khach-hang.md](p1-phieu-danh-gia-nhanh-khach-hang.md) | Phiếu đánh giá nhanh 16 câu trước báo giá; xếp khách vào mức hỗ trợ 0/1/2 và danh sách tài liệu K cần giao |

### S — Hồ sơ tình huống

| Mã | File | Nội dung |
|---|---|---|
| S1 | [s1-ho-so-tinh-huong-dia-diem-nhieu-don-vi.md](s1-ho-so-tinh-huong-dia-diem-nhieu-don-vi.md) | Địa điểm có nhân viên, người lao động của nhiều đơn vị đối tác và khách; máy chủ tại chỗ; M1 + M2. Sáu quyết định cần chốt; danh mục 22 hồ sơ theo giai đoạn; cấu hình khuyến nghị |

## Lưu ý chung

- Ngoài Luật 91 và các nghị định về BVDLCN, bộ mẫu áp dụng **Luật Trí tuệ nhân tạo 134/2025/QH15**, NĐ 142/2026/NĐ-CP và Danh mục hệ thống AI rủi ro cao (QĐ 33/2026/QĐ-TTg) — toàn văn trong `sources/`. Tóm tắt: bản thảo luận mục 2a.
- Nội dung lấy từ pháp luật lao động, kế toán và quy chuẩn camera (QCVN 11:2026/BCA) mới tra cứu qua nguồn thứ cấp, gắn nhãn **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]**.
- **Quan hệ với bộ mẫu cấp 1–2:** [`../08-bo-mau-cap-1-2/`](../08-bo-mau-cap-1-2/README.md) có các mẫu bảo vệ dữ liệu cá nhân dùng chung (mẫu 10–16: thông báo xử lý dữ liệu người lao động, ứng viên; phiếu đồng ý; quy trình yêu cầu của chủ thể; cam kết bảo mật; phụ lục hợp đồng; biển báo camera). Các mẫu K1, K2, K5, C1, C4 ở đây là bản **chuyên cho camera, nhận diện khuôn mặt, biển số** (dữ liệu sinh trắc học, xử lý tự động, nhà cung cấp là bên xử lý); doanh nghiệp chỉ dùng camera an ninh thông thường có thể dùng bộ cấp 1–2.
- Mẫu là **khung tham khảo**, không phải ý kiến pháp lý. Các khoản ghi [M2], [M3/M4] phải chọn theo mô hình thực tế trước khi ký.
- Thời hạn lưu trữ trong mẫu là **placeholder**: nhà cung cấp chỉ gợi ý, khách hàng quyết định theo mục đích. Thời hạn lưu hồ sơ chấm công theo pháp luật lao động, kế toán chưa có trong bộ nguồn — **[CẦN ĐỐI CHIẾU]**.
- Các điểm chưa rõ phát sinh khi soạn mẫu được ghi **[CẦN ĐỐI CHIẾU]** trong từng file. Vùng xám chính V1–V9 xem bản thảo luận mục 8; sẽ được đưa vào [`../00-tong-quan/diem-can-doi-chieu.md`](../00-tong-quan/diem-can-doi-chieu.md) khi bộ mẫu được duyệt.
- Phần nghĩa vụ chung về DLCN (DPIA, chuyển xuyên biên giới, nhân sự BVDLCN, thông báo vi phạm, kinh doanh dịch vụ xử lý DLCN): [`../05-nghia-vu-lien-quan/`](../05-nghia-vu-lien-quan/README.md).
