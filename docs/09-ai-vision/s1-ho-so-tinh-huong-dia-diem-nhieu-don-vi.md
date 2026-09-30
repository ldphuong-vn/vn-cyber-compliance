# Hồ sơ tình huống S1 — Kiểm soát ra vào bằng nhận diện khuôn mặt tại địa điểm có nhiều đơn vị cùng làm việc

> **Căn cứ:** Luật 91/2025/QH15 Đ3.3, Đ9, Đ11.1, Đ17.1, Đ19.1.d, Đ21.1, Đ25.3, Đ31.4, Đ32.2, Đ33.2, Đ37.2.a, Đ38.2; NĐ 356/2025/NĐ-CP Đ5.2, Đ6.4, Đ7.1, Đ7.2, Đ10.3, Đ19, Đ20.1, Đ21.1; NĐ 330/2026/NĐ-CP Đ39.1.b, Đ43.1, Đ48.3.c–d, Đ52.1.a, Đ52.3, Đ55, Đ57, Đ67.2.b, Đ67.3.b, Đ70.1.c–d; Luật 134/2025/QH15 Đ9, Đ10, Đ11.1; QĐ 33/2026/QĐ-TTg Phụ lục · **Đối chiếu văn bản gốc:** 30/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Mã tài liệu:** S1 (S = hồ sơ tình huống). S1 không tạo nghĩa vụ mới. S1 gom các mẫu đã có thành **một bộ hồ sơ cho một dự án**, xếp theo thứ tự thời gian, ghi rõ ai lập, ai ký, chọn biến thể nào và cấu hình khuyến nghị. Nhà cung cấp dùng S1 khi chào giá, lập kế hoạch triển khai; khách hàng dùng phần xuất Word làm danh mục theo dõi.

### Tình huống

| Yếu tố | Mô tả |
|---|---|
| Địa điểm | Một địa điểm do khách hàng quản lý (nhà máy, tòa nhà, kho bãi, khu dự án…), có cổng ra vào kiểm soát bằng nhận diện khuôn mặt |
| Người được đăng ký | (1) Nhân viên của khách hàng; (2) người lao động của **nhiều đơn vị đối tác** làm việc tại địa điểm; (3) khách vãng lai |
| Quy mô | Vài trăm đến vài nghìn người; danh sách thay đổi thường xuyên |
| Hạ tầng | Máy chủ nhận diện **đặt tại địa điểm**; không dùng cloud |
| Mô hình với nhà cung cấp | **M1 + M2**: khách hàng tự vận hành hằng ngày; nhà cung cấp lắp đặt, cấu hình, bảo hành, hỗ trợ tại chỗ và từ xa theo phiếu |
| Mục đích | (a) An ninh, kiểm soát ra vào; (b) tổng hợp ngày có mặt để đối chiếu ngày công, thanh toán với đơn vị đối tác |

### Sáu quyết định cần chốt trước khi triển khai

| # | Quyết định | Khuyến nghị của bộ khung | Tài liệu |
|---|---|---|---|
| Q1 | Cơ sở xử lý cho từng nhóm người | Khuôn mặt: **đồng ý** của từng người, có phương thức thay thế. Danh sách cấp thẻ: thực hiện thỏa thuận (Luật 91 Đ19.1.d) — **[CẦN ĐỐI CHIẾU]** | K2, K3, K11 |
| Q2 | Cách đăng ký khuôn mặt người lao động đơn vị đối tác | **Chụp tại bàn đăng ký**; chỉ nhận ảnh từ đơn vị đối tác khi không bố trí được bàn | K2 Mẫu E, K11 Điều 6, K12 |
| Q3 | Chế độ so khớp | Quyết định sau khi đo thử (K13). Danh sách vượt quy mô khuyến nghị của B3 thì chia danh sách theo cổng hoặc dùng **1:1** (thẻ, mã QR kết hợp khuôn mặt) | B3 mục B.3, K13 |
| Q4 | Bảng tổng hợp gửi đơn vị đối tác | Mặc định **loại A** (không gắn tên). Loại B chỉ gồm người đã đồng ý | K11 Điều 4, K12 |
| Q5 | Thời hạn lưu, xóa | Xóa đặc trưng khuôn mặt khi người lao động rời địa điểm; video, ảnh sự kiện theo chính sách lưu trữ | K4 |
| Q6 | Phân công tại địa điểm | Đầu mối bảo vệ dữ liệu cá nhân; người phụ trách bàn đăng ký; bảo vệ xử lý ngoại lệ; quản trị hệ thống; đầu mối từng đơn vị đối tác | K12 mục 2 |

### Rủi ro trọng tâm của tình huống

- **Không có hợp đồng lao động với người lao động đơn vị đối tác:** không dùng nội quy lao động (K3) cho nhóm này; thiếu đồng ý hợp lệ khi thu thập dữ liệu nhạy cảm bằng biện pháp công nghệ của 200 đến 1.000 người bị phạt 300–500 triệu đồng, từ 1.000 người trở lên 500–800 triệu đồng (NĐ 330 Đ48.3.c–d).
- **Chuyển giao giữa hai đơn vị:** thiếu thỏa thuận chuyển giao hoặc gửi ảnh không mã hóa (NĐ 330 Đ52.1.a, Đ52.3).
- **Độ chính xác khi danh sách lớn:** ở chế độ 1:N, khả năng nhận nhầm người lạ tăng theo số người trong danh sách (B3 mục B.3); từ chối nhầm làm thiếu ngày công nếu không có cách ghi nhận thay thế (Luật 91 Đ3.3; NĐ 330 Đ39.1.b).
- **Hồ sơ đánh giá tác động:** xử lý dữ liệu nhạy cảm nên không được miễn, kể cả doanh nghiệp nhỏ (Luật 91 Đ38.2); nộp trong 60 ngày kể từ ngày xử lý đầu tiên (Luật 91 Đ21.1).

### Mức rủi ro theo Luật Trí tuệ nhân tạo

Kiểm soát ra vào, tổng hợp ngày có mặt tại địa điểm của doanh nghiệp: **mức thấp** — không thuộc Danh mục tại QĐ 33 (B2). Xét lại theo B2 mục 5.3 nếu địa điểm là đầu mối giao thông, công trình công cộng quan trọng (QĐ 33 mục VI.6). Ở mọi mức vẫn phải cho người dùng biết đang tương tác với hệ thống trí tuệ nhân tạo (Luật 134 Đ11.1) — đã có trong K1, K2.

---

<p align="center"><b>DANH MỤC HỒ SƠ TUÂN THỦ</b><br/><b>DỰ ÁN KIỂM SOÁT RA VÀO BẰNG NHẬN DIỆN KHUÔN MẶT</b><br/><i>{{DIA_DIEM_LAP_DAT}}</i></p>

### 1. Thông tin dự án

| Nội dung | Thông tin |
|---|---|
| Bên kiểm soát dữ liệu (đơn vị quản lý địa điểm) | {{TEN_KHACH_HANG}} — đầu mối bảo vệ dữ liệu cá nhân: {{NHAN_SU_BVDLCN_KH}} |
| Nhà cung cấp hệ thống | {{TEN_NHA_CUNG_CAP}} — đầu mối: {{NHAN_SU_BVDLCN_NCC}} |
| Hệ thống | {{TEN_SAN_PHAM}} — phiên bản {{PHIEN_BAN_SAN_PHAM}} |
| Nơi đặt máy chủ | {{VI_TRI_MAY_CHU}} |
| Mô hình hỗ trợ | ☐ M1 — khách hàng tự vận hành ☐ M2 — nhà cung cấp lắp đặt, bảo hành, hỗ trợ tại chỗ, từ xa theo phiếu |
| Số điểm kiểm soát ra vào | {{SO_DIEM_KIEM_SOAT}} |
| Số người dự kiến đăng ký khuôn mặt | Nhân viên: ...... · Người lao động đơn vị đối tác: ...... · Khách (ước tính/tháng): ...... |
| Số đơn vị đối tác | ...... *(danh sách tại mục 3, dòng 13)* |
| Chế độ so khớp đã chọn | ☐ 1:N ☐ 1:N chia danh sách theo cổng ☐ 1:1 (thẻ, mã QR kết hợp khuôn mặt) — theo Biên bản đo thử (K13) |
| Ngày xử lý đầu tiên (ngày đăng ký khuôn mặt người đầu tiên) | ....../....../............ → hạn nộp hồ sơ đánh giá tác động: + 60 ngày |

### 2. Nhóm người và cơ sở xử lý

| Nhóm | Khuôn mặt | Danh sách, thẻ ra vào | Mẫu thông báo, đồng ý | Tài liệu đi kèm |
|---|---|---|---|---|
| Nhân viên của {{TEN_KHACH_HANG}} | Đồng ý, có phương thức thay thế | Quản lý lao động | K2 Mẫu A | K3 (biện pháp công nghệ trong quản lý người lao động) |
| Người lao động của đơn vị đối tác | Đồng ý, có phương thức thay thế | Thực hiện thỏa thuận **[CẦN ĐỐI CHIẾU]** | K2 Mẫu E | K11 ký với từng đơn vị đối tác |
| Khách vãng lai | Đồng ý tại kiosk, lễ tân; hoặc chỉ cấp thẻ khách | Đồng ý tại thời điểm đăng ký | K2 Mẫu B | K1 |
| Mọi nhóm — rút lại đồng ý | | | K2 Mẫu D | K5 |

### 3. Danh mục hồ sơ theo giai đoạn

| # | Tài liệu | Mẫu | Bên lập / ký | Thời điểm | Xong |
|---|---|---|---|---|---|
| | **Giai đoạn 1 — Trước khi ký hợp đồng** | | | | |
| 1 | Phiếu đánh giá nhanh, xếp mức hỗ trợ | P1 | Nhà cung cấp lập với khách hàng | Trước báo giá | ☐ |
| 2 | Phụ lục xử lý dữ liệu cá nhân | C1 | Khách hàng và nhà cung cấp ký | Cùng hợp đồng; **trước khi** nhà cung cấp tiếp cận dữ liệu | ☐ |
| 3 | Thỏa thuận hỗ trợ kỹ thuật, bảo hành, truy cập từ xa | C3 | Khách hàng và nhà cung cấp ký | Cùng C1 | ☐ |
| 4 | Cam kết bảo mật của từng kỹ thuật viên | C4 | Kỹ thuật viên ký | Trước khi đến địa điểm | ☐ |
| | **Giai đoạn 2 — Trước khi lắp đặt** | | | | |
| 5 | Quyết định chỉ định nhân sự, bộ phận bảo vệ dữ liệu cá nhân của khách hàng | Sửa từ A1 | Khách hàng ban hành | Nếu chưa có | ☐ |
| 6 | Chính sách lưu trữ, xóa | K4 | Khách hàng ban hành | Trước khi cấu hình thời hạn | ☐ |
| 7 | Quy định giám sát bằng camera, nhận diện tại nơi làm việc (cho nhân viên của khách hàng) | K3 | Khách hàng ban hành | Sớm — cần thời gian để có hiệu lực (xem K3) | ☐ |
| 8 | Tài liệu sản phẩm giao khách hàng: luồng dữ liệu, phân loại rủi ro AI, giải thích thuật toán | B1, B2, B3 | Nhà cung cấp giao | Trước khi khách hàng lập hồ sơ đánh giá tác động | ☐ |
| | **Giai đoạn 3 — Trước khi đăng ký khuôn mặt người đầu tiên** | | | | |
| 9 | Biển báo camera, biển báo nhận diện khuôn mặt tại cổng | K1 | Khách hàng lắp | Trước khi bật camera, đầu đọc | ☐ |
| 10 | Quy trình vận hành điểm kiểm soát ra vào | K12 | Khách hàng ban hành | Trước khi mở bàn đăng ký | ☐ |
| 11 | Biên bản đo thử độ chính xác tại hiện trường | K13 | Nhà cung cấp và khách hàng ký | Trước khi dùng kết quả nhận diện chính thức | ☐ |
| 12 | Phiếu thông báo và đồng ý: Mẫu A (nhân viên), Mẫu B (khách), Mẫu E (người lao động đơn vị đối tác), Mẫu D (rút lại) | K2 | Khách hàng ban hành; từng người ký | Trước khi đăng ký từng người | ☐ |
| 13 | Thỏa thuận chuyển giao dữ liệu với từng đơn vị đối tác | K11 | Khách hàng và từng đơn vị đối tác ký | Trước khi nhận danh sách đầu tiên của đơn vị đó | ☐ |
| 14 | Checklist nghiệm thu tuân thủ, biên bản bàn giao; xác nhận bối cảnh lắp đặt (B2 mục 5.3) | K8 | Nhà cung cấp và khách hàng ký | Khi bàn giao | ☐ |
| | **Giai đoạn 4 — Trong 60 ngày kể từ ngày xử lý đầu tiên** | | | | |
| 15 | Hồ sơ đánh giá tác động xử lý dữ liệu cá nhân, kèm K2, K11, K12, K13 | K6 | Khách hàng lập, nộp; nhà cung cấp điền sẵn phần kỹ thuật | ≤ 60 ngày | ☐ |
| | **Giai đoạn 5 — Vận hành** | | | | |
| 16 | Tiếp nhận yêu cầu của người lao động, khách | K5 | Khách hàng | Khi có yêu cầu | ☐ |
| 17 | Thông báo sự cố dữ liệu sinh trắc học (72 giờ) | K7 | Khách hàng; nhà cung cấp phối hợp | Khi có sự cố | ☐ |
| 18 | Cung cấp video cho cơ quan có thẩm quyền | K9 | Khách hàng | Khi có yêu cầu bằng văn bản | ☐ |
| 19 | Đối chiếu danh sách định kỳ với từng đơn vị đối tác; thống kê từ chối nhầm; đo thử lại khi thay đổi | K12 mục 6, K13 | Khách hàng; nhà cung cấp hỗ trợ | Theo chu kỳ tại K12 | ☐ |
| 20 | Cập nhật hồ sơ đánh giá tác động khi phát sinh mục đích mới hoặc phát sinh, thay đổi bên xử lý, bên thứ ba — ví dụ thêm đơn vị đối tác nhận bảng tổng hợp có tên, đổi nhà cung cấp hỗ trợ | K6 (Mẫu số 03a NĐ 356) | Khách hàng | Định kỳ 06 tháng kể từ lần nộp đầu, gộp các thay đổi phát sinh | ☐ |
| | **Giai đoạn 6 — Kết thúc** | | | | |
| 21 | Xóa dữ liệu khuôn mặt của người lao động đơn vị đối tác khi hợp đồng với đơn vị đó chấm dứt; biên bản xóa gửi đơn vị đối tác | K11 Điều 7, K4 | Khách hàng | Theo K11 | ☐ |
| 22 | Nhà cung cấp thu hồi tài khoản, trả khóa, xóa dữ liệu tạm | C3 Điều 12 | Nhà cung cấp | Khi hợp đồng hỗ trợ chấm dứt | ☐ |

### 4. Cấu hình khuyến nghị

| Hạng mục | Giá trị khuyến nghị | Căn cứ, tài liệu |
|---|---|---|
| Nhận diện chỉ bật cho người đã đồng ý | Bắt buộc | K2; K8 mục C1, C2 |
| Phương thức thay thế tại mọi cổng | {{thẻ/mã QR}}; bảo vệ đối chiếu; lượt ra vào vẫn được ghi | K12 mục 4 |
| Chống giả mạo khuôn mặt | Bật | B3 mục B.4 |
| Chế độ so khớp, ngưỡng | Theo K13 | B3 mục B.3 |
| Không nhận diện được sau số lần thử | Chuyển phương thức thay thế; không tự động ghi vắng mặt | NĐ 330 Đ67.3.b; B3 mục B.8 |
| Xóa đặc trưng khuôn mặt khi rời địa điểm | {{SO_NGAY_XOA_KHI_ROI_DIA_DIEM}} ngày | K4; K11 Điều 7 |
| Ảnh gốc đăng ký | {{THOI_HAN_LUU_ANH_DANG_KY}} | K4 |
| Video | {{THOI_HAN_LUU_VIDEO}} | K4 |
| Ảnh chụp tại thời điểm nhận diện | {{THOI_HAN_LUU_ANH_SU_KIEN}} | K4 |
| Nhật ký ra vào | {{THOI_HAN_LUU_NHAT_KY_RA_VAO}} | K4 |
| Bảng tổng hợp gửi đơn vị đối tác | Loại A mặc định; loại B chỉ người đã đồng ý | K11 Điều 4 |
| Tài khoản người đăng ký | Tài khoản riêng; không xuất ảnh, đặc trưng khuôn mặt; ghi nhật ký thao tác | Luật 91 Đ31.4.a; NĐ 330 Đ70.1.c–d |
| Truy cập của nhà cung cấp | Tắt mặc định; mở theo từng phiếu hỗ trợ | C3 Điều 4 |
| Camera giám sát khu vực chung | Không bật nhận diện khuôn mặt | K8 mục B6 |
| Giấy tờ tùy thân | Không chụp, không lưu cho mục đích kiểm soát ra vào | K2 Mẫu B, Mẫu E |

| **ĐẠI DIỆN BÊN CUNG CẤP HỆ THỐNG**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/>**{{NHAN_SU_BVDLCN_NCC}}** | **ĐẠI DIỆN BÊN KIỂM SOÁT DỮ LIỆU**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/>**{{NHAN_SU_BVDLCN_KH}}** |
|:---:|:---:|

## Hướng dẫn điền

1. **Mục 1:** nhà cung cấp điền cùng khách hàng khi lập kế hoạch triển khai; cập nhật số người, số đơn vị đối tác khi thay đổi lớn.
2. **Mục 3:** xóa dòng không áp dụng (ví dụ dòng 7 nếu nhân viên của khách hàng không đăng ký khuôn mặt; dòng 2, 3 nếu chỉ M1 và nhà cung cấp không tiếp cận dữ liệu). Mỗi đơn vị đối tác mới lặp lại dòng 13 trước khi gửi danh sách.
3. **Dòng 20:** NĐ 356 Đ20.1 yêu cầu cập nhật định kỳ 06 tháng khi phát sinh bên thứ ba mới. Đơn vị đối tác chỉ gửi danh sách, nhận bảng tổng hợp loại A có phải kê là bên thứ ba trong hồ sơ của khách hàng không — **[CẦN ĐỐI CHIẾU]**; cách thận trọng là kê tất cả đơn vị đối tác.
4. **Mục 4:** giá trị lấy từ K4 đã ban hành; nếu khác khuyến nghị thì ghi lý do vào hồ sơ đánh giá tác động.
5. **Không đưa dữ liệu thật của khách hàng vào kho mẫu công khai.** Bộ hồ sơ đã điền cho một dự án lưu tại hệ thống tài liệu nội bộ của nhà cung cấp và của khách hàng.

## Bằng chứng cần lưu

Bản S1 đã điền và đánh dấu tiến độ; bản ký của các tài liệu tại mục 3; bằng chứng nộp hồ sơ đánh giá tác động trong 60 ngày; các lần cập nhật S1 khi thêm đơn vị đối tác hoặc thay đổi cấu hình.
