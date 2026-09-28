# Hồ sơ đề xuất cấp độ hệ thống thông tin cấp độ 1, cấp độ 2 (hồ sơ gộp)

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ8, Đ10.3, Đ11, Đ12, Đ13, Đ20.1, Đ21.1–21.4, Đ22.2–22.4, Đ22.6, Đ29.2, Đ30.1–30.5.a, Đ30.7; Luật 116/2025/QH15 Đ8.1; TCVN 14423:2026 mục 3, mục 4 · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

Một hồ sơ duy nhất cho nhiều HTTT cấp độ 1–2 của cùng một chủ quản: Đ22.4.a yêu cầu "danh mục các hệ thống thông tin và cấp độ tương ứng" nên một hồ sơ được liệt kê nhiều hệ thống, miễn là **từng hệ thống** có căn cứ cấp độ và phương án riêng. Đơn vị vận hành lập (Đ20.1.a), gửi đơn vị chuyên trách ANM kèm [Mẫu 01](mau-01-de-nghi-tham-dinh-phe-duyet.md) (Đ20.1.b).

**Hồ sơ gồm (Đ21.1–21.4, Đ22.2):**

| Thành phần | Căn cứ | Vị trí trong file |
|---|---|---|
| Thuyết minh tổng quan | Đ21.1, Đ22.3.a–d (không giảm theo cấp) | Phần I |
| Tài liệu thiết kế | Đ21.2 | Phụ lục (tài liệu tương đương) |
| Thuyết minh đề xuất cấp độ + nhận diện rủi ro sơ bộ | Đ21.3, Đ22.4.a–c; Đ10.3.a–g | Phần II |
| Thuyết minh phương án bảo đảm ANM | Đ21.4, Đ22.6; Đ29.2; Đ30.3–30.5.a | Phần III |

**Không cần với cấp 1–2:** ý kiến chuyên môn của đơn vị chuyên trách (Đ21.5 — chỉ cấp 4–5); báo cáo đánh giá rủi ro chi tiết và các nội dung Đ22.5.a–d (chỉ cấp 4–5); thiết kế tính sẵn sàng, phân tách (Đ30.5.b — cấp 4–5); tách biệt khi thuê TTDL/cloud (Đ30.8 — cấp 3–4; Đ30.9 — cấp 5). Mẫu 04 (ý kiến thẩm định) không bắt buộc vì Đ24.1.b chỉ áp dụng từ cấp 3.

**Tài liệu thiết kế (Đ21.2):** HTTT đang vận hành dùng "thiết kế thi công đã được cấp có thẩm quyền phê duyệt **hoặc tài liệu có giá trị tương đương**" (Đ21.2.b). DN nhỏ thường không có thiết kế thi công → dùng sơ đồ mạng lô-gic/vật lý có ký xác nhận, hồ sơ cấu hình thiết bị chính, danh mục tài sản (Phụ lục).

**Dự án mới / thuê dịch vụ:** thuyết minh đề xuất cấp độ được lồng vào báo cáo nghiên cứu khả thi/báo cáo đầu tư (Đ19.1) hoặc kế hoạch thuê dịch vụ CNTT (Đ19.2.a); phương án kỹ thuật trong BCKTKT, thiết kế cơ sở, kế hoạch thuê dịch vụ hoặc đề cương và dự toán chi tiết phải đáp ứng phương án ANM theo cấp đề xuất (Đ22.1); triển khai đủ phương án trước khi vận hành (Đ30.6).

**Điều kiện trước khi phê duyệt:** Quy chế bảo đảm ANM phải được ban hành **trước khi** hồ sơ được phê duyệt (Đ30.7) — ở đây là Quy chế ban hành kèm QĐ số 41/2026/QĐ-TURBO ([03-quy-che-anm-cap-1-2.md](03-quy-che-anm-cap-1-2.md)). Đầu vào: [phiếu sàng lọc](01-phieu-sang-loc-cap-do.md) từng HTTT.

**Phạm vi áp dụng:** NĐ 331 áp dụng cho HTTT phục vụ cơ quan, tổ chức nhà nước và HTTT cung cấp dịch vụ trực tuyến; tổ chức khác được "khuyến khích" áp dụng (Đ2). HTTT thuần nội bộ của DN tư nhân vẫn chịu Luật 116 Đ8, Đ10 — xem [tieu-chi-cap-do.md mục 6.1](../01-xac-dinh-cap-do/tieu-chi-cap-do.md).

> **Bảo mật tài liệu:** hồ sơ chứa sơ đồ mạng, dải IP, danh mục thiết bị → thông tin riêng (NĐ 331 Đ9.1.b); giới hạn người tiếp cận, không đưa lên kho công khai. IP trong mẫu là dải giả lập (10.x, 192.0.2.0/24).

---

<p align="center"><b>{{TEN_TO_CHUC_IN_HOA}}</b></p>
<p align="center"><b>{{TEN_DON_VI_VAN_HANH}}</b></p>

<p align="center"><b>HỒ SƠ ĐỀ XUẤT CẤP ĐỘ HỆ THỐNG THÔNG TIN</b><br/><b>CẤP ĐỘ 1, CẤP ĐỘ 2</b></p>

<p align="center"><i>(Gồm {{C12_SO_HTTT}} hệ thống thông tin — theo điểm a khoản 4 Điều 22 Nghị định số 331/2026/NĐ-CP)</i></p>

| Mã | Tên hệ thống thông tin | Cấp độ đề xuất |
|---|---|---|
| {{C12_HT1_MA}} | {{C12_HT1_TEN}} | {{C12_HT1_CAP}} |
| {{C12_HT2_MA}} | {{C12_HT2_TEN}} | {{C12_HT2_CAP}} |
| {{C12_HT3_MA}} | {{C12_HT3_TEN}} | {{C12_HT3_CAP}} |
| {{C12_HT4_MA}} | {{C12_HT4_TEN}} | {{C12_HT4_CAP}} |

<p align="center">Phiên bản: {{PHIEN_BAN}} — Ngày lập: {{C12_NGAY_HO_SO}}<br/>Người lập: {{NGUOI_LAP}}, {{C12_CHUC_VU_NGUOI_LAP}}</p>

---

## PHẦN I. THUYẾT MINH TỔNG QUAN VỀ HỆ THỐNG THÔNG TIN

### 1. Chủ quản hệ thống thông tin (Đ22.3.a)

| Nội dung | Thông tin |
|---|---|
| Tên chủ quản | {{TEN_CHU_QUAN}} |
| Quy định chức năng, nhiệm vụ, quyền hạn | {{VAN_BAN_CHUC_NANG_CHU_QUAN}} |
| Người đại diện, chức vụ | {{NGUOI_DAI_DIEN}}, {{CHUC_VU}} |
| Địa chỉ | {{DIA_CHI}} |
| Điện thoại / Thư điện tử | {{DIEN_THOAI}} / {{C12_EMAIL_CHU_QUAN}} |

### 2. Đơn vị vận hành hệ thống thông tin (Đ22.3.b)

| Nội dung | Thông tin |
|---|---|
| Tên đơn vị vận hành | {{TEN_DON_VI_VAN_HANH}} |
| Quy định chức năng, nhiệm vụ, quyền hạn | {{C12_VB_GIAO_VAN_HANH}} |
| Người đại diện, chức vụ | {{NGUOI_LAP}}, {{C12_CHUC_VU_NGUOI_LAP}} |
| Địa chỉ | {{C12_DIA_CHI_VAN_HANH}} |
| Điện thoại / Thư điện tử | {{C12_DT_VAN_HANH}} / {{C12_EMAIL_VAN_HANH}} |
| Đơn vị chuyên trách ANM (thẩm định, phê duyệt — Đ18.1) | {{TEN_DON_VI_CHUYEN_TRACH_ANM}}, Trưởng phòng {{NGUOI_DAI_DIEN_CHUYEN_TRACH}} |
| Dịch vụ thuê ngoài | {{C12_DICH_VU_THUE_NGOAI}} |

### 3. Phạm vi, quy mô, đối tượng phục vụ (Đ22.3.c)

| Mã | Phạm vi (thành phần, chức năng) | Quy mô | Đối tượng phục vụ |
|---|---|---|---|
| {{C12_HT1_MA}} | {{C12_HT1_PHAM_VI}} | {{C12_HT1_QUY_MO}} | {{C12_HT1_DOI_TUONG}} |
| {{C12_HT2_MA}} | {{C12_HT2_PHAM_VI}} | {{C12_HT2_QUY_MO}} | {{C12_HT2_DOI_TUONG}} |
| {{C12_HT3_MA}} | {{C12_HT3_PHAM_VI}} | {{C12_HT3_QUY_MO}} | {{C12_HT3_DOI_TUONG}} |
| {{C12_HT4_MA}} | {{C12_HT4_PHAM_VI}} | {{C12_HT4_QUY_MO}} | {{C12_HT4_DOI_TUONG}} |

Ranh giới: các HTTT không cung cấp dịch vụ trực tuyến cho người dân, doanh nghiệp; không kết nối liên thông với hệ thống bên ngoài ngoài {{C12_KET_NOI_NGOAI}}.

### 4. Hiện trạng kiến trúc hệ thống (Đ22.3.d)

**4.1. Mô hình lô-gic.** {{C12_MO_HINH_LOGIC}}

**4.2. Mô hình vật lý.** {{C12_MO_HINH_VAT_LY}} Sơ đồ chi tiết: Phụ lục 1.

**4.3. Danh mục thiết bị và thiết bị mạng chính**

| STT | Thiết bị / chủng loại | Số lượng | Vị trí triển khai | Mục đích sử dụng | HTTT |
|---|---|---|---|---|---|
| 1 | Tường lửa biên có chức năng phòng, chống xâm nhập (IPS), cổng VPN | {{C12_TB_SL}} | {{C12_TB_VI_TRI}} | Kiểm soát truy cập Internet và giữa các vùng mạng; VPN | Dùng chung |
| 2 | Switch lõi (lớp 3) | {{C12_TB_SL}} | {{C12_TB_VI_TRI}} | Định tuyến, phân tách VLAN | HT-04 |
| 3 | Switch truy cập, bộ phát Wi-Fi và bộ điều khiển | {{C12_TB_SL}} | {{C12_TB_VI_TRI}} | Kết nối máy trạm, Wi-Fi nhân viên và khách | HT-04 |
| 4 | Máy chủ ảo hóa | {{C12_TB_SL}} | {{C12_TB_VI_TRI}} | Chạy máy chủ ảo AD, Intranet, ERP, nhật ký | HT-02, 03, 04 |
| 5 | Thiết bị lưu trữ sao lưu (NAS) | {{C12_TB_SL}} | {{C12_TB_VI_TRI}} | Lưu bản sao lưu, có phiên bản | Dùng chung |
| 6 | Màn hình hiển thị và bộ phát nội dung | {{C12_TB_SL}} | {{C12_TB_VI_TRI}} | Hiển thị bảng tin | HT-05 |
| 7 | Máy trạm, máy tính xách tay người dùng | {{C12_TB_SL}} | {{C12_TB_VI_TRI}} | Truy cập các HTTT | Dùng chung |

**4.4. Danh mục ứng dụng, dịch vụ**

| STT | Dịch vụ / ứng dụng | Máy chủ / vị trí triển khai | Hệ điều hành | Mục đích sử dụng | HTTT |
|---|---|---|---|---|---|
| 1 | Cổng thông tin nội bộ, văn phòng điện tử | {{C12_DV_MAY_CHU}} | {{C12_DV_HDH}} | Văn bản, thông báo, quy trình nội bộ | HT-02 |
| 2 | Thư điện tử (dịch vụ đám mây) | {{C12_DV_MAY_CHU}} | {{C12_DV_HDH}} | Thư điện tử công việc | HT-02 |
| 3 | Phần mềm kế toán – nhân sự (ERP) và CSDL | {{C12_DV_MAY_CHU}} | {{C12_DV_HDH}} | Kế toán, tiền lương, hồ sơ nhân sự | HT-03 |
| 4 | Dịch vụ thư mục (AD), DNS, DHCP, NTP | {{C12_DV_MAY_CHU}} | {{C12_DV_HDH}} | Xác thực tập trung, dịch vụ mạng | HT-04 |
| 5 | Thu thập nhật ký (syslog) | {{C12_DV_MAY_CHU}} | {{C12_DV_HDH}} | Lưu, rà soát nhật ký | Dùng chung |
| 6 | Phần mềm quản lý nội dung bảng tin | {{C12_DV_MAY_CHU}} | {{C12_DV_HDH}} | Soạn, phát nội dung công khai | HT-05 |

**4.5. Quy hoạch vùng mạng và địa chỉ IP**

| Vùng mạng | IP Private | IP Public | VLAN | Kiểm soát truy cập |
|---|---|---|---|---|
| Biên (Internet, VPN) | {{C12_IP_PRIVATE}} | {{C12_IP_PUBLIC}} | {{C12_VLAN}} | Chỉ mở cổng VPN; chặn mọi kết nối vào khác |
| Máy chủ | {{C12_IP_PRIVATE}} | {{C12_IP_PUBLIC}} | {{C12_VLAN}} | Chỉ nhận cổng dịch vụ từ vùng người dùng; quản trị chỉ từ vùng quản trị |
| Quản trị | {{C12_IP_PRIVATE}} | {{C12_IP_PUBLIC}} | {{C12_VLAN}} | Máy trạm quản trị chỉ định; bắt buộc MFA |
| Người dùng nội bộ (có dây, Wi-Fi nhân viên) | {{C12_IP_PRIVATE}} | {{C12_IP_PUBLIC}} | {{C12_VLAN}} | Ra Internet qua lọc tên miền; không vào vùng quản trị |
| Wi-Fi khách | {{C12_IP_PRIVATE}} | {{C12_IP_PUBLIC}} | {{C12_VLAN}} | Chỉ ra Internet; cách ly hoàn toàn với mạng nội bộ |
| Bảng tin (thiết bị hiển thị) | {{C12_IP_PRIVATE}} | {{C12_IP_PUBLIC}} | {{C12_VLAN}} | Chỉ nhận nội dung từ máy chủ bảng tin |
| DMZ | {{C12_IP_PRIVATE}} | {{C12_IP_PUBLIC}} | {{C12_VLAN}} | {{C12_DMZ_GHI_CHU}} |

---

## PHẦN II. THUYẾT MINH ĐỀ XUẤT CẤP ĐỘ

### 1. Danh mục hệ thống thông tin và cấp độ đề xuất (Đ22.4.a, Đ22.4.b)

| Mã | Loại HTTT (Đ9.2) | Loại thông tin xử lý (Đ9.1) | Cấp đề xuất | Căn cứ |
|---|---|---|---|---|
| {{C12_HT1_MA}} | {{C12_HT1_LOAI_HTTT}} | {{C12_HT1_LOAI_TT}} | {{C12_HT1_CAP}} | {{C12_HT1_CAN_CU}} |
| {{C12_HT2_MA}} | {{C12_HT2_LOAI_HTTT}} | {{C12_HT2_LOAI_TT}} | {{C12_HT2_CAP}} | {{C12_HT2_CAN_CU}} |
| {{C12_HT3_MA}} | {{C12_HT3_LOAI_HTTT}} | {{C12_HT3_LOAI_TT}} | {{C12_HT3_CAP}} | {{C12_HT3_CAN_CU}} |
| {{C12_HT4_MA}} | {{C12_HT4_LOAI_HTTT}} | {{C12_HT4_LOAI_TT}} | {{C12_HT4_CAP}} | {{C12_HT4_CAN_CU}} |

Thuyết minh chi tiết:

- **{{C12_HT1_MA}}:** {{C12_HT1_THUYET_MINH}}
- **{{C12_HT2_MA}}:** {{C12_HT2_THUYET_MINH}}
- **{{C12_HT3_MA}}:** {{C12_HT3_THUYET_MINH}}
- **{{C12_HT4_MA}}:** {{C12_HT4_THUYET_MINH}}

### 2. Kiểm tra các yếu tố làm tăng cấp độ

| Yếu tố | Căn cứ | Kết quả rà soát (cả {{C12_SO_HTTT}} HTTT) |
|---|---|---|
| Xử lý thông tin bí mật nhà nước; phục vụ quốc phòng, an ninh | Đ13.1 | {{C12_KQ_CAP3}} |
| Cung cấp dịch vụ trực tuyến thuộc danh mục ngành, nghề đầu tư kinh doanh có điều kiện | Đ13.2.a | {{C12_KQ_CAP3}} |
| Giải quyết thủ tục hành chính | Đ13.2.b | {{C12_KQ_CAP3}} |
| Dịch vụ trực tuyến xử lý thông tin của từ 100.000 chủ thể DLCN cơ bản hoặc từ 10.000 chủ thể DLCN nhạy cảm | Đ13.2.c | {{C12_KQ_CAP3}} |
| Hạ tầng phục vụ nhiều cơ quan, tổ chức (một bộ, ngành, tỉnh) | Đ13.3 | {{C12_KQ_CAP3}} |
| Điều khiển công nghiệp công trình cấp II–IV | Đ13.4 | {{C12_KQ_CAP3}} |
| Đáp ứng nhiều tiêu chí → áp dụng cấp cao nhất | Đ8.2 | {{C12_KQ_CAP3}} |
| Phân tách/hợp nhất phạm vi hình thức để hạ cấp | Đ8.3 | {{C12_KQ_CAP3}} |
| Kết quả đánh giá rủi ro cao hơn cấp đề xuất | Đ10.5 | {{C12_KQ_CAP3}} |

Đối chiếu mức tổn hại (Luật 116 Đ8.1): {{C12_KET_LUAN_TON_HAI}}

### 3. Nhận diện sơ bộ rủi ro an ninh mạng (Đ22.4.c; nội dung tối thiểu Đ10.3)

| Yếu tố (Đ10.3) | Kết quả sơ bộ |
|---|---|
| a) Tài sản, chức năng trọng yếu, thứ tự quan trọng | {{C12_RR_A}} |
| b) Loại thông tin xử lý, lưu trữ, truyền đưa | {{C12_RR_B}} |
| c) Mối đe dọa, điểm yếu, lỗ hổng, khả năng bị khai thác | Bảng rủi ro chính dưới đây |
| d) Khả năng xảy ra, mức tác động | Bảng rủi ro chính dưới đây (thang 1–5; mức = khả năng × tác động) |
| đ) Năng lực phòng ngừa, phát hiện, ứng phó, khắc phục hiện có | {{C12_RR_DD}} |
| e) Kế hoạch, biện pháp giảm thiểu | Phần III mục 2 và mục 4 |
| g) Truyền thông rủi ro, báo cáo cơ quan có thẩm quyền | {{C12_RR_G}} |

| STT | Rủi ro chính (mối đe dọa – điểm yếu) | HTTT | Khả năng | Tác động | Mức rủi ro |
|---|---|---|---|---|---|
| 1 | Thư lừa đảo đánh cắp thông tin đăng nhập, phát tán mã độc; người dùng chưa được đào tạo nhận thức | HT-02 | {{C12_RR_KN}} | {{C12_RR_TD}} | {{C12_RR_MUC}} |
| 2 | Mã độc tống tiền mã hóa máy chủ ERP và bản sao lưu trực tuyến | HT-03, HT-04 | {{C12_RR_KN}} | {{C12_RR_TD}} | {{C12_RR_MUC}} |
| 3 | Lộ dữ liệu lương, hồ sơ nhân sự do phân quyền ERP rộng, tài khoản dùng chung | HT-03 | {{C12_RR_KN}} | {{C12_RR_TD}} | {{C12_RR_MUC}} |
| 4 | Khai thác lỗ hổng chưa vá trên tường lửa/cổng VPN | HT-04 | {{C12_RR_KN}} | {{C12_RR_TD}} | {{C12_RR_MUC}} |
| 5 | Lạm dụng tài khoản quản trị AD; nhật ký chưa được rà soát | HT-04 | {{C12_RR_KN}} | {{C12_RR_TD}} | {{C12_RR_MUC}} |
| 6 | Gián đoạn dịch vụ thư điện tử đám mây hoặc đường truyền Internet | HT-02 | {{C12_RR_KN}} | {{C12_RR_TD}} | {{C12_RR_MUC}} |
| 7 | Chiếm quyền bộ phát, hiển thị nội dung trái phép tại sảnh | HT-05 | {{C12_RR_KN}} | {{C12_RR_TD}} | {{C12_RR_MUC}} |

Kết luận: {{C12_KET_LUAN_RUI_RO}}

---

## PHẦN III. THUYẾT MINH PHƯƠNG ÁN BẢO ĐẢM AN NINH MẠNG

Phương án áp dụng yêu cầu cơ bản của NĐ 331 và TCVN 14423:2026 (Đ29.1, Đ30.1): **mục 4 (cấp độ 2)** cho {{C12_HT1_MA}}, {{C12_HT2_MA}}, {{C12_HT3_MA}}; **mục 3 (cấp độ 1)** cho {{C12_HT4_MA}}. An ninh vật lý không thuộc yêu cầu cơ bản (Đ30.2); Công ty tham khảo TCVN 14423:2026 Phụ lục A cho phòng máy.

### 1. Bảy nội dung của phương án (Đ29.2)

| Nội dung | Phương án tóm tắt | Chi tiết |
|---|---|---|
| a) ANM trong thiết kế, xây dựng | Yêu cầu ANM đưa vào khi mua sắm, thuê, nâng cấp; kiểm thử, nghiệm thu trước vận hành; phần mềm thuê khoán có cam kết bảo mật | Mục 2: 4.3, 4.12 |
| b) ANM trong vận hành | Thực hiện Quy chế ban hành kèm Quyết định số {{C12_SO_QD_QUY_CHE}} ngày {{C12_NGAY_QD_QUY_CHE}}; quản lý tài sản, cấu hình, tài khoản, vá lỗi, mã độc, sao lưu, mạng | Mục 2: 4.2–4.12 |
| c) Kiểm tra, đánh giá | Tự đánh giá hằng năm do {{C12_BO_PHAN_DANH_GIA}} thực hiện, độc lập với đơn vị vận hành (Đ31.2.c); quét lỗ hổng hằng năm | Mục 2: 4.7 |
| d) Quản lý rủi ro | Quy trình 4 bước (xác định, phân tích, đánh giá, xử lý); cập nhật hằng năm và khi có trường hợp Đ10.2 | Mục 2: 4.1 |
| đ) Giám sát ANM | Thu thập nhật ký tập trung, cảnh báo từ tường lửa và phần mềm phòng chống mã độc; rà soát theo Quy chế | Mục 2: 4.8, 4.10 |
| e) Dự phòng, ứng phó sự cố, khôi phục | Đầu mối chính {{HO_TEN}}, dự phòng {{HO_TEN_DU_PHONG}}; báo cáo 24 giờ/72 giờ (Đ31.2.d); sao lưu, khôi phục thử | Mục 2: 4.11, 4.15 |
| g) Kết thúc vận hành, thanh lý, hủy bỏ | Xóa sạch dữ liệu khi chuyển giao, thanh lý thiết bị; thu hồi tài khoản; chấm dứt hợp đồng dịch vụ kèm trả/hủy dữ liệu | Mục 2: 4.2, 4.4 |

Ánh xạ yêu cầu quản lý (Đ30.3): a) chính sách, b) tổ chức — Quy chế và QĐ số {{C12_SO_QD_PHAN_CONG}}; c) nhân lực — 4.13; d) thiết kế, xây dựng — 4.3, 4.12; đ) vận hành — 4.2–4.12, 4.14, 4.15; e) rủi ro — 4.1; g) kết thúc vận hành — 4.2, 4.4. Yêu cầu kỹ thuật (Đ30.4): a) mạng — 4.12; b) máy chủ — 4.5–4.8, 4.10; c) ứng dụng — 4.5, 4.6, 4.9; d) dữ liệu — 4.4, 4.11.

### 2. Phương án theo từng nhóm yêu cầu TCVN 14423:2026

| Nhóm yêu cầu | Mục TCVN (C1/C2) | Hiện trạng | Biện pháp / phương án triển khai | Hạn hoàn thành |
|---|---|---|---|---|
| Quản lý rủi ro ANM | 3.1 / 4.1 | {{C12_PA_HIEN_TRANG}} | Quy trình xác định – phân tích – đánh giá – xử lý rủi ro trong Quy chế; sổ đăng ký rủi ro; rà soát hằng năm | {{C12_PA_HAN}} |
| Tài sản phần cứng | 3.2 / 4.2 | {{C12_PA_HIEN_TRANG}} | Danh mục mọi thiết bị có lưu trữ/xử lý dữ liệu (IP, MAC, vị trí, người phụ trách, hạn hỗ trợ); đăng ký thiết bị di động; kiểm kê, dò thiết bị lạ hằng năm; xóa sạch dữ liệu khi chuyển giao (4.2.2.3) | {{C12_PA_HAN}} |
| Tài sản phần mềm | 3.3 / 4.3 | {{C12_PA_HIEN_TRANG}} | Danh mục phần mềm được phép, thủ tục ngoại lệ, gỡ phần mềm trái phép; ERP thuê: hợp đồng có cam kết bảo mật, mã nguồn hoặc chứng nhận đánh giá an toàn độc lập (4.3.2.3) | {{C12_PA_HAN}} |
| Tài sản thông tin | 3.4 / 4.4 | {{C12_PA_HIEN_TRANG}} | Phân loại 3 mức (công khai, nội bộ, hạn chế); quy trình cấp, sửa, xóa quyền dữ liệu; rà soát phân quyền hằng năm; mã hóa thông tin xác thực và dữ liệu không công khai lưu trữ (4.4.2.4). HT-05: chỉ mã hóa thông tin xác thực (3.4.2.4) | {{C12_PA_HAN}} |
| Cấu hình an toàn | 3.5 / 4.5 | {{C12_PA_HIEN_TRANG}} | Tài liệu cấu hình chuẩn cho máy chủ, máy trạm, thiết bị mạng; giao thức an toàn, tường lửa host; tắt dịch vụ, giao thức không dùng; khóa phiên máy trạm ≤ 15 phút, phiên quản trị ≤ 05 phút; ERP khóa sau ≤ 15 phút, tối đa 05 lần đăng nhập sai | {{C12_PA_HAN}} |
| Tài khoản, quyền truy cập | 3.6 / 4.6 | {{C12_PA_HIEN_TRANG}} | Quản lý tập trung qua AD; tách tài khoản quản trị/tác nghiệp/kỹ thuật/dịch vụ; vô hiệu tài khoản không hoạt động 45 ngày; MFA cho truy cập từ xa, từ Internet và tài khoản quản trị; mật khẩu ≥ 08 ký tự (có MFA) hoặc ≥ 14 ký tự; đổi mật khẩu quản trị 02 tháng/lần | {{C12_PA_HAN}} |
| Lỗ hổng bảo mật | 3.7 / 4.7 | {{C12_PA_HIEN_TRANG}} | Quy trình phát hiện – đánh giá – khắc phục; quét lỗ hổng hằng năm; vá máy người dùng hằng tháng; phương án vá toàn bộ tài sản, thử nghiệm và phương án khôi phục trước khi vá máy chủ ERP | {{C12_PA_HAN}} |
| Nhật ký ANM | 3.8 / 4.8 | {{C12_PA_HIEN_TRANG}} | Thu nhật ký truy cập, ứng dụng, cảnh báo bảo mật về máy chủ syslog; đủ trường tối thiểu; đồng bộ NTP; lưu {{C12_THOI_GIAN_LUU_NHAT_KY}} (TCVN cấp 2: ≥ 01 tháng); rà soát ≥ 01 lần/năm | {{C12_PA_HAN}} |
| Trình duyệt, thư điện tử | 3.9 / 4.9 | {{C12_PA_HIEN_TRANG}} | Danh sách trình duyệt, dịch vụ thư được phép, còn hỗ trợ, cập nhật tự động; lọc tên miền độc hại tại DNS/tường lửa; lọc thư rác, thư giả mạo của dịch vụ đám mây | {{C12_PA_HAN}} |
| Phòng chống mã độc | 3.10 / 4.10 | {{C12_PA_HIEN_TRANG}} | Phần mềm phòng chống mã độc quản lý tập trung, bảo vệ thời gian thực, tự cập nhật; quét thiết bị lưu trữ ngoài, tắt tự chạy | {{C12_PA_HAN}} |
| Sao lưu, khôi phục | 3.11 / 4.11 | {{C12_PA_HIEN_TRANG}} | Quy định loại dữ liệu, tần suất, phương pháp; sao lưu tự động; khôi phục thử định kỳ; bản sao lưu có phiên bản, lưu tách biệt môi trường vận hành (4.11.2.4) | {{C12_PA_HAN}} |
| Hạ tầng mạng | 3.12 / 4.12 | {{C12_PA_HIEN_TRANG}} | Sơ đồ mạng cập nhật hằng năm; phân vùng như Phần I mục 4.5; tường lửa có IPS, cập nhật mẫu nhận diện; dự phòng thiết bị mạng chính; giới hạn nguồn quản trị; VPN có xác thực bổ sung và kiểm tra thiết bị; kiểm thử, nghiệm thu trước vận hành | {{C12_PA_HAN}} |
| Nhân sự | 3.13 / 4.13 | {{C12_PA_HIEN_TRANG}} | Bộ phận phụ trách: {{TEN_DON_VI_VAN_HANH}} (vận hành) và {{TEN_DON_VI_CHUYEN_TRACH_ANM}} (bảo vệ); cam kết bảo mật; đào tạo nhận thức ≥ 01 lần/năm; thu hồi tài sản, quyền truy cập khi nghỉ việc | {{C12_PA_HAN}} |
| Nhà cung cấp | 3.14 / 4.14 | {{C12_PA_HIEN_TRANG}} | Danh sách, phân loại nhà cung cấp (thư điện tử đám mây, ERP, đường truyền, bảo trì); văn bản phân định trách nhiệm ANM; cập nhật hằng năm | {{C12_PA_HAN}} |
| Ứng phó sự cố | 3.15 / 4.15 | {{C12_PA_HIEN_TRANG}} | Người chủ chốt và người dự phòng; đầu mối với cơ quan quản lý nhà nước về ANM; quy trình báo cáo nội bộ, phân nhóm sự cố, ứng phó; cập nhật hằng năm | {{C12_PA_HAN}} |

### 3. Dùng chung giải pháp giữa các hệ thống (Đ30.5.a)

Các giải pháp sau được triển khai một lần, dùng chung cho cả {{C12_SO_HTTT}} HTTT: {{C12_GIAI_PHAP_DUNG_CHUNG}}. Mỗi HTTT vẫn có danh mục tài sản, phân quyền và phương án sao lưu riêng; cấu hình dùng chung được áp dụng theo mức của cấp độ cao nhất (cấp độ 2).

### 4. Kế hoạch khắc phục tồn tại

| STT | Tồn tại | Biện pháp | Phụ trách | Hạn | Nguồn lực |
|---|---|---|---|---|---|
| 1 | {{C12_KH_TON_TAI}} | {{C12_KH_BIEN_PHAP}} | {{C12_KH_PHU_TRACH}} | {{C12_KH_HAN}} | {{C12_KH_NGUON_LUC}} |
| 2 | {{C12_KH_TON_TAI}} | {{C12_KH_BIEN_PHAP}} | {{C12_KH_PHU_TRACH}} | {{C12_KH_HAN}} | {{C12_KH_NGUON_LUC}} |
| 3 | {{C12_KH_TON_TAI}} | {{C12_KH_BIEN_PHAP}} | {{C12_KH_PHU_TRACH}} | {{C12_KH_HAN}} | {{C12_KH_NGUON_LUC}} |
| 4 | {{C12_KH_TON_TAI}} | {{C12_KH_BIEN_PHAP}} | {{C12_KH_PHU_TRACH}} | {{C12_KH_HAN}} | {{C12_KH_NGUON_LUC}} |
| 5 | {{C12_KH_TON_TAI}} | {{C12_KH_BIEN_PHAP}} | {{C12_KH_PHU_TRACH}} | {{C12_KH_HAN}} | {{C12_KH_NGUON_LUC}} |

Tiến độ khắc phục được báo cáo trong báo cáo năm (Mẫu 08) và kiểm tra trong lần tự đánh giá kế tiếp.

---

## PHỤ LỤC. DANH MỤC TÀI LIỆU ĐÍNH KÈM

| STT | Tài liệu | Số hiệu / ghi chú |
|---|---|---|
| 1 | Sơ đồ mạng lô-gic và sơ đồ vật lý (tài liệu tương đương thiết kế thi công — Đ21.2.b) | {{C12_PL_SO_DO}} |
| 2 | Hồ sơ cấu hình tường lửa, switch lõi, chính sách AD (bản trích, đã ẩn mật khẩu) | {{C12_PL_CAU_HINH}} |
| 3 | Danh mục tài sản phần cứng, phần mềm, tài sản thông tin | {{C12_PL_DANH_MUC}} |
| 4 | Quy chế bảo đảm an ninh mạng (Đ30.7) | {{C12_PL_QUY_CHE}} |
| 5 | Quyết định phân công nhiệm vụ bảo đảm an ninh mạng | {{C12_PL_QD_PHAN_CONG}} |
| 6 | Phiếu sàng lọc cấp độ của từng HTTT | {{C12_PL_PHIEU_SANG_LOC}} |
| 7 | Sổ đăng ký rủi ro (kết quả đánh giá rủi ro lần đầu — Đ10.2.a) | {{C12_PL_SO_RUI_RO}} |
| 8 | Hợp đồng/điều khoản dịch vụ thư điện tử đám mây và ERP (phần trách nhiệm ANM, bảo mật) | {{C12_PL_HOP_DONG}} |

<p align="center"><b>NGƯỜI LẬP</b><br/><i>(Ký, ghi rõ họ tên)</i><br/><br/><br/><b>{{NGUOI_LAP}}</b><br/>{{C12_CHUC_VU_NGUOI_LAP}}</p>

## Hướng dẫn điền

1. **Danh mục HTTT:** mỗi HTTT một mã cố định, dùng thống nhất trong phiếu sàng lọc, Mẫu 01, biên bản thẩm định, QĐ phê duyệt, Mẫu 08. Thêm/bớt hàng ở trang bìa, Phần I mục 3, Phần II mục 1 khi số HTTT khác 4.
2. **Phần I** không được rút gọn theo cấp: Đ22.3.d yêu cầu đủ mô hình lô-gic, vật lý, danh mục thiết bị (tên/chủng loại, vị trí, mục đích), danh mục dịch vụ (máy chủ/vị trí/hệ điều hành, mục đích), vùng mạng và IP Private/Public. Dịch vụ đám mây: ghi tên dịch vụ, vùng lưu trữ (region), tenant thay cho "máy chủ". Vùng không có IP Public ghi "—".
3. **Phần II mục 1:** ghi căn cứ đến điều, khoản (ví dụ "Đ12.1", "Đ12.3", "Đ11.1"). Chỉ có tài khoản nhân viên đã là xử lý thông tin riêng/thông tin cá nhân của người sử dụng → thường là cấp 2 (Đ12.1), không phải cấp 1. HTTT nội bộ xét theo Đ12.1; ngưỡng 100.000/10.000 chủ thể (Đ12.2.b, Đ13.2.c) chỉ dùng cho HTTT cung cấp dịch vụ trực tuyến.
4. **HT-05 (cấp 1):** chỉ giữ cấp 1 khi đúng là hệ thống nội bộ và chỉ xử lý thông tin công cộng (Đ11.1): không tài khoản người dùng, không thu thập hình ảnh/dữ liệu người qua sảnh, nội dung đều là thông tin đã công khai. Tài khoản quản trị cục bộ duy nhất của phần mềm bảng tin được coi là thông tin xác thực kỹ thuật, không phải "thông tin riêng của người sử dụng" **[CẦN ĐỐI CHIẾU]** — nếu thẩm định không chấp nhận cách hiểu này, đề xuất cấp 2. Tách HT-05 phải có căn cứ thực chất (chức năng độc lập, VLAN riêng), không nhằm hạ cấp (Đ8.3).
5. **Rủi ro sơ bộ:** Đ22.4.c chỉ yêu cầu nhận diện sơ bộ; Đ22.5 (đánh giá chi tiết) chỉ cấp 4–5. Tuy vậy đánh giá rủi ro lần đầu (Đ10.2.a) vẫn phải đủ 7 yếu tố Đ10.3.a–g — bảng Phần II mục 3 tóm tắt, bản đầy đủ là sổ đăng ký rủi ro (Phụ lục 7; khung: [bao-cao-danh-gia-rui-ro.md](../02-ho-so-cap-do/bao-cao-danh-gia-rui-ro.md)). Phương pháp chính thức chờ quy định của Bộ trưởng Bộ Công an (Đ10.8).
6. **Phần III mục 2:** Đ22.6 yêu cầu mô tả phương án "đối với từng yêu cầu". Mỗi hàng phải bao phủ mọi mục con x.y.2.z của nhóm; nếu ô quá dài, tách thành nhiều dòng theo [checklist-cap-2.md](../03-yeu-cau-theo-cap-do/checklist-cap-2.md) và [checklist-cap-1.md](../03-yeu-cau-theo-cap-do/checklist-cap-1.md). Cột Hiện trạng dùng: Đã đáp ứng · Đáp ứng một phần · Chưa đáp ứng · Không áp dụng (nêu lý do). Nội dung TCVN trong bảng là diễn giải, phải đối chiếu bản chính thức.
7. **Khác biệt cấp 1 (HT-05)** so với cấp 2: không bắt buộc xóa sạch khi chuyển giao (4.2.2.3), phần mềm thuê khoán (4.3.2.3), sao lưu tách biệt có phiên bản (4.11.2.4), WAF và phân vùng tối thiểu (4.12.2.2), xác thực bổ sung và kiểm tra thiết bị khi truy cập từ xa (4.12.2.5), bộ phận (chỉ cần người) phụ trách (3.13), chính sách sự cố 7 nội dung (4.15.1). Vì dùng chung hạ tầng với HTTT cấp 2 nên thực tế áp dụng mức cấp 2 cho phần dùng chung.
8. **Thư điện tử trên đám mây:** nếu máy chủ của nhà cung cấp ở nước ngoài, việc xử lý DLCN trên nền tảng ngoài lãnh thổ là chuyển DLCN xuyên biên giới (Luật 91 Đ20.1.c). Lưu DLCN của chính người lao động trên điện toán đám mây được miễn hồ sơ đánh giá tác động (Luật 91 Đ20.6.b), nhưng thư điện tử thường chứa DLCN của khách hàng, đối tác → xem xét lập hồ sơ trong 60 ngày (Đ20.2) **[CẦN ĐỐI CHIẾU]**. Xem [luu-tru-du-lieu-tai-viet-nam-website-saas.md](../05-nghia-vu-lien-quan/luu-tru-du-lieu-tai-viet-nam-website-saas.md). Ghi kết luận vào hàng "Nhà cung cấp" và Phụ lục 8.
9. **Nhật ký:** TCVN cấp 2 yêu cầu lưu ≥ 01 tháng (4.8.2.1). Yêu cầu lưu 12 tháng của NĐ 333 Đ16 chỉ áp dụng khi cung cấp dịch vụ trên mạng — không áp dụng cho HTTT thuần nội bộ; thời gian lưu thống nhất với Quy chế.
10. **Hạn khắc phục:** HTTT chưa từng xác định cấp độ không có mốc chuyển tiếp 12 tháng (Luật 116 Đ45.1 chỉ cho HTTT đã có cấp độ theo luật cũ) → đặt hạn theo mức rủi ro, ưu tiên rủi ro Cao trong 03 tháng.
11. **Dùng với Mẫu 01:** Mẫu 01 là văn bản đề nghị; hồ sơ này là tài liệu kèm theo. Ngày hồ sơ ({{C12_NGAY_HO_SO}}) phải trước ngày Mẫu 01; số QĐ ban hành Quy chế ghi trong Mẫu 01 và Phụ lục 4 phải trùng nhau. Hồ sơ sửa sau thẩm định → tăng phiên bản (1.1…) và ghi rõ trong biên bản thẩm định.
12. **DN chỉ có một phòng CNTT** (vừa vận hành vừa là đơn vị chuyên trách ANM): hồ sơ vẫn do phòng CNTT lập, nhưng thẩm định phải theo Đ18.4 — trình chủ quản giao đơn vị trực thuộc đủ năng lực (ví dụ Ban Kiểm soát nội bộ) hoặc lập Hội đồng thẩm định độc lập; ghi rõ trong Phần I mục 2.

## Checklist rà soát trước khi gửi thẩm định

- [ ] Trang bìa: đủ danh sách HTTT, cấp đề xuất, phiên bản, ngày lập, người lập.
- [ ] Phần I đủ 4 nội dung Đ22.3.a–d; mỗi HTTT có phạm vi, quy mô, đối tượng phục vụ; có IP Private/Public cho từng vùng.
- [ ] Không có IP, mật khẩu, khóa thật trong bản gửi ngoài phạm vi cần thiết; hồ sơ được đánh dấu thông tin riêng.
- [ ] Phần II: từng HTTT có loại thông tin (Đ9.1), loại HTTT (Đ9.2), căn cứ điều khoản; đã rà đủ Đ13, Đ8.2, Đ8.3, Đ10.5.
- [ ] Bảng rủi ro sơ bộ có đủ 7 yếu tố Đ10.3.a–g, có mức rủi ro; sổ đăng ký rủi ro đính kèm.
- [ ] Phần III: đủ 7 nội dung Đ29.2; đủ 15 nhóm TCVN; mỗi nhóm có hiện trạng, biện pháp, hạn; HTTT cấp 1 được ghi chú riêng.
- [ ] Đã nêu giải pháp dùng chung (Đ30.5.a) và kế hoạch khắc phục có người phụ trách, hạn.
- [ ] Quy chế ANM đã ban hành (số, ngày) trước ngày dự kiến phê duyệt (Đ30.7).
- [ ] Tài liệu thiết kế tương đương (sơ đồ, cấu hình) đính kèm và khớp Phần I.
- [ ] Đã xem xét nghĩa vụ chuyển DLCN xuyên biên giới cho thư điện tử đám mây.
- [ ] Mã HTTT, tên, cấp độ khớp với phiếu sàng lọc và Mẫu 01.
