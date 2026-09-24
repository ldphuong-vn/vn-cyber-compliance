# Báo cáo đánh giá rủi ro an ninh mạng — khung

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ9.1, Đ10, Đ22.4.c, Đ22.5, Đ31.2.c; Luật 116/2025/QH15 Đ8.1, Đ10.1.b · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

Khung báo cáo bám **đúng 7 nội dung tối thiểu Đ10.3.a–g**. Phương pháp đánh giá rủi ro chính thức: **chờ hướng dẫn của Bộ Công an (NĐ 331 Đ10.8)**; Khung quản lý rủi ro ANM do Bộ Công an ban hành/trình ban hành (Đ34.1.c). Thang điểm dưới đây là **gợi ý nội bộ**, điều chỉnh khi có hướng dẫn.

**Khi nào phải lập/cập nhật** (Đ10.2): xác định cấp độ lần đầu; thay đổi chức năng, phạm vi, đối tượng, loại thông tin, công nghệ; mở rộng, tích hợp, liên thông, chia sẻ dữ liệu; sự cố nghiêm trọng hoặc nguy cơ cao; theo yêu cầu cơ quan có thẩm quyền.

**Kết quả dùng để** (Đ10.4): đề xuất/điều chỉnh cấp độ (Đ11–Đ16); chọn biện pháp theo cấp độ; xây dựng, điều chỉnh phương án bảo vệ và phương án ứng cứu sự cố. Rủi ro cao hơn cấp đã xác định → đề xuất cấp cao hơn (Đ10.5). Cấp 4–5: báo cáo ở mức chi tiết hơn, là thành phần của thuyết minh đề xuất cấp độ (Đ22.5).

**Tính độc lập:** chủ quản chịu trách nhiệm về tính trung thực, đầy đủ, chính xác của kết quả; tự đánh giá phải do bộ phận/đơn vị độc lập với đơn vị trực tiếp vận hành thực hiện; một số trường hợp phải do tổ chức chuyên môn thực hiện (Đ31.2.c).

---

<p align="center"><b>{{TEN_CO_QUAN_TO_CHUC}}</b></p>
<p align="center"><b>BÁO CÁO ĐÁNH GIÁ RỦI RO AN NINH MẠNG</b><br/><b>{{TEN_HE_THONG}}</b></p>

## 0. Thông tin báo cáo

| Trường | Nội dung |
|---|---|
| Hệ thống | {{TEN_HE_THONG}} — cấp độ hiện tại/đề xuất: {{CAP_DO}} |
| Lý do đánh giá (Đ10.2) | ☐ a. Xác định cấp độ lần đầu ☐ b. Thay đổi ☐ c. Mở rộng/liên thông ☐ d. Sự cố nghiêm trọng ☐ đ. Theo yêu cầu cơ quan có thẩm quyền |
| Phạm vi đánh giá | {{PHAM_VI}} |
| Thời gian thực hiện | Từ {{NGAY_BAT_DAU}} đến {{NGAY_KET_THUC}} |
| Đơn vị thực hiện | {{DON_VI_THUC_HIEN}} — ☐ Tự đánh giá (bộ phận độc lập với vận hành) ☐ Tổ chức chuyên môn |
| Phương pháp, thang đo | {{PHUONG_PHAP}} *(ví dụ: ma trận khả năng × tác động 5×5 — xem mục 3)* |
| Phiên bản / lần đánh giá trước | {{PHIEN_BAN}} / {{NGAY_LAN_TRUOC}} |

## 1. Tài sản, chức năng trọng yếu và phân loại tài sản (Đ10.3.a)

| Mã TS | Tài sản | Loại (phần cứng / phần mềm / dữ liệu / dịch vụ / con người / nhà cung cấp) | Chức năng trọng yếu hỗ trợ | Vai trò trong HTTT | Chủ sở hữu tài sản | Mức quan trọng (1–5) | Thứ tự ưu tiên |
|---|---|---|---|---|---|---|---|
| TS-01 | {{TAI_SAN}} | | | | | | |
| TS-02 | | | | | | | |

*Gợi ý mức quan trọng: 5 = gián đoạn/lộ lọt làm dừng chức năng cốt lõi hoặc ảnh hưởng lớn tới bên ngoài; 1 = ảnh hưởng không đáng kể.*

## 2. Loại thông tin xử lý, lưu trữ, truyền đưa (Đ10.3.b)

| Loại thông tin (Đ9.1) | Có? | Tài sản lưu trữ/xử lý (mã TS) | Kênh truyền đưa | Số chủ thể (nếu là TTCN) |
|---|---|---|---|---|
| Thông tin công cộng | | | | — |
| Thông tin riêng | | | | — |
| Thông tin cá nhân — cơ bản | | | | {{SO_CO_BAN}} |
| Thông tin cá nhân — nhạy cảm | | | | {{SO_NHAY_CAM}} |
| Thông tin bí mật nhà nước | | | | — |

## 3. Nhận diện rủi ro (Đ10.3.c) và đánh giá khả năng, tác động (Đ10.3.d)

### 3.1. Thang đo gợi ý

| Điểm | Khả năng xảy ra | Mức tác động (gắn với Luật 116 Đ8.1) |
|---|---|---|
| 1 | Hiếm (≤ 1 lần/5 năm) | Tổn hại nhỏ tới quyền, lợi ích tổ chức, cá nhân |
| 2 | Ít (1 lần/2–5 năm) | Tổn hại quyền, lợi ích hợp pháp của tổ chức, cá nhân (≈ cấp 1) |
| 3 | Có thể (1 lần/năm) | Tổn hại nghiêm trọng quyền, lợi ích tổ chức, cá nhân hoặc tổn hại lợi ích công cộng (≈ cấp 2) |
| 4 | Thường (nhiều lần/năm) | Tổn hại đặc biệt nghiêm trọng quyền, lợi ích tổ chức, cá nhân; tổn hại nghiêm trọng lợi ích công cộng; tổn hại TT-ATXH hoặc ANQG (≈ cấp 3) |
| 5 | Gần như chắc chắn | Tổn hại đặc biệt nghiêm trọng lợi ích công cộng, TT-ATXH; tổn hại nghiêm trọng / đặc biệt nghiêm trọng ANQG (≈ cấp 4–5) |

Mức rủi ro = Khả năng × Tác động: **1–4 Thấp · 5–9 Trung bình · 10–16 Cao · 20–25 Rất cao** (gợi ý).

### 3.2. Sổ đăng ký rủi ro (risk register)

| Mã RR | Tài sản (mã TS) | Mối đe dọa | Điểm yếu / lỗ hổng | Khả năng bị khai thác | Hậu quả (bí mật / toàn vẹn / sẵn sàng) | Đối tượng bị tác động (ANQG / TT-ATXH / quyền lợi TC-CN / lợi ích công cộng) | Khả năng (1–5) | Tác động (1–5) | Mức rủi ro | Biện pháp hiện có | Phương án xử lý (giảm / chuyển / chấp nhận / tránh) | Biện pháp bổ sung | Người phụ trách | Hạn | Rủi ro còn lại |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| RR-01 | *TS-0x (cổng web)* | *Chiếm quyền tài khoản* | *Chưa bắt buộc xác thực đa yếu tố* | *Cao — dịch vụ công khai Internet* | *Bí mật, toàn vẹn* | *Quyền lợi TC-CN* | 4 | 3 | 12 Cao | | Giảm | *Triển khai MFA* | {{NGUOI}} | {{NGAY}} | |
| RR-02 | *TS-0x (CSDL)* | *Mã độc tống tiền* | *Sao lưu chưa tách biệt* | | *Sẵn sàng, toàn vẹn* | | | | | | | | | | |
| RR-03 | *TS-0x (API đối tác)* | *Lộ lọt dữ liệu qua API* | *Thiếu kiểm soát phân quyền đối tượng* | | *Bí mật* | | | | | | | | | | |
| RR-04 | *TS-0x (nhà cung cấp cloud)* | *Gián đoạn dịch vụ nhà cung cấp* | *Không có phương án dự phòng vùng* | | *Sẵn sàng* | | | | | | | | | | |
| RR-05 | *TS-0x (nhân sự quản trị)* | *Lạm dụng quyền quản trị* | *Chưa giám sát phiên đặc quyền* | | | | | | | | | | | | |

### 3.3. Nguồn nhận diện đã dùng

- [ ] Kết quả dò quét lỗ hổng, kiểm thử xâm nhập (NĐ 331 Đ27.3) — ngày {{NGAY}}.
- [ ] Rà soát cấu hình theo TCVN 14423:2026 (cấp tương ứng).
- [ ] Nhật ký sự cố, cảnh báo giám sát trong kỳ.
- [ ] Cảnh báo từ cơ quan chức năng, nhà cung cấp.
- [ ] Phỏng vấn đơn vị vận hành, chủ sở hữu nghiệp vụ.

## 4. Đánh giá năng lực phòng ngừa, phát hiện, ứng phó, khắc phục hiện có (Đ10.3.đ)

| Năng lực | Hiện trạng | Mức (Chưa có / Cơ bản / Đầy đủ) | Khoảng trống |
|---|---|---|---|
| Phòng ngừa (kiểm soát truy cập, cấu hình an toàn, vá lỗi, đào tạo) | | | |
| Phát hiện (giám sát, nhật ký, cảnh báo) | | | |
| Ứng phó (quy trình, đội ứng cứu, đầu mối báo cáo 24h/72h — Đ31.2.d) | | | |
| Khắc phục (sao lưu, khôi phục, DR, RTO/RPO) | | | |

## 5. Kế hoạch và biện pháp giảm thiểu rủi ro (Đ10.3.e)

| Mã RR | Biện pháp | Liên kết yêu cầu phương án ANM (mã trong [thuyet-minh-phuong-an-anm.md](thuyet-minh-phuong-an-anm.md)) | Ưu tiên | Người phụ trách | Hạn | Chi phí ước tính | Trạng thái |
|---|---|---|---|---|---|---|---|
| RR-01 | | | | | | | |

## 6. Truyền thông rủi ro và báo cáo cơ quan có thẩm quyền (Đ10.3.g)

| Đối tượng nhận thông tin | Nội dung | Hình thức | Thời điểm | Bằng chứng |
|---|---|---|---|---|
| Lãnh đạo chủ quản HTTT | Kết quả, rủi ro cao/rất cao, đề xuất cấp độ | Báo cáo, họp | | |
| Đơn vị vận hành, người dùng liên quan | Rủi ro và biện pháp phải thực hiện | Thông báo, đào tạo | | |
| Cơ quan có thẩm quyền | Khi được yêu cầu; trong hồ sơ đề xuất cấp độ; báo cáo năm (Đ35, Mẫu 08) | Văn bản | | |

## 7. Kết luận

| Nội dung | Kết quả |
|---|---|
| Số rủi ro theo mức: Rất cao / Cao / Trung bình / Thấp | {{...}} / {{...}} / {{...}} / {{...}} |
| Mức tổn hại cao nhất dự kiến theo Luật 116 Đ8.1 | Tương ứng cấp {{...}} |
| So sánh với cấp độ theo tiêu chí NĐ 331 Đ11–Đ16 | ☐ Phù hợp ☐ Rủi ro cao hơn → đề xuất cấp {{...}} (Đ10.5) |
| Đề xuất điều chỉnh phương án bảo vệ / phương án ứng cứu sự cố (Đ10.4.c) | {{...}} |
| Thời điểm đánh giá lại dự kiến | {{NGAY}} hoặc khi phát sinh trường hợp Đ10.2 |

## 8. Phụ lục bổ sung cho cấp 4–5 (Đ22.5)

- [ ] Danh sách HTTT liên quan, kết nối, có ảnh hưởng quan trọng (Đ22.5.a).
- [ ] Phân tích nguy cơ tấn công mạng và mức độ ảnh hưởng (Đ22.5.b).
- [ ] Phạm vi, mức độ ảnh hưởng tới lợi ích công cộng, TT-ATXH, ANQG (Đ22.5.c).
- [ ] Thuyết minh yêu cầu vận hành 24/7 (Đ22.5.d, với HTTT theo Đ14.2).

| Người lập | Người phê duyệt báo cáo | Ngày |
|---|---|---|
| {{NGUOI_LAP}} | {{NGUOI_PHE_DUYET}} | {{NGAY}} |

> Lưu giữ báo cáo và bằng chứng; cung cấp cho cơ quan có thẩm quyền khi thanh tra, kiểm tra, giám sát (NĐ 331 Đ10.6).
