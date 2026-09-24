# Thuyết minh đề xuất cấp độ — khung

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ8, Đ9, Đ10, Đ11–Đ16, Đ21.3, Đ22.2.b, Đ22.4, Đ22.5; Luật 116/2025/QH15 Đ8.1 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

Thành phần 3 của hồ sơ (Đ21.3), phần b) của thuyết minh (Đ22.2.b). Nội dung bắt buộc: **Đ22.4.a–c** cho mọi cấp; **Đ22.5.a–d** bổ sung cho cấp 4–5. Đầu vào: [phiếu xác định cấp độ](../01-xac-dinh-cap-do/phieu-xac-dinh-cap-do.md), [tiêu chí](../01-xac-dinh-cap-do/tieu-chi-cap-do.md), [báo cáo đánh giá rủi ro](bao-cao-danh-gia-rui-ro.md).

---

<p align="center"><b>{{TEN_CO_QUAN_TO_CHUC}}</b></p>
<p align="center"><b>THUYẾT MINH ĐỀ XUẤT CẤP ĐỘ HỆ THỐNG THÔNG TIN</b></p>
<p align="center"><i>(Phiên bản {{PHIEN_BAN}}, ngày {{NGAY}})</i></p>

## 1. Danh mục hệ thống thông tin và cấp độ đề xuất (Đ22.4.a)

| STT | Tên hệ thống thông tin | Chủ quản | Đơn vị vận hành | Loại hình (Đ9.2) | Cấp độ đề xuất | Căn cứ đề xuất (điều, khoản, điểm) |
|---|---|---|---|---|---|---|
| 1 | {{TEN_HE_THONG}} | {{TEN_CHU_QUAN}} | {{TEN_DON_VI_VAN_HANH}} | {{LOAI_HINH}} | {{CAP_DO}} | *Ví dụ: NĐ 331 Đ13.2.c; Đ8.2* |

## 2. Thuyết minh chi tiết từng hệ thống (Đ22.4.b)

*Lặp lại mục này cho mỗi hệ thống.*

### 2.1. {{TEN_HE_THONG}}

**a) Loại thông tin được xử lý (Đ9.1)**

| Loại thông tin | Có/Không | Mô tả dữ liệu cụ thể | Số lượng chủ thể (nếu là TTCN) |
|---|---|---|---|
| Thông tin công cộng | | | — |
| Thông tin riêng | | | — |
| Thông tin cá nhân — DLCN cơ bản (NĐ 356 Đ3) | | | {{SO_CO_BAN}} |
| Thông tin cá nhân — DLCN nhạy cảm (NĐ 356 Đ4) | | | {{SO_NHAY_CAM}} |
| Thông tin bí mật nhà nước | | | — |

Phương pháp đếm chủ thể: {{PHUONG_PHAP_DEM}} *(thời điểm chốt, nguồn truy vấn, cách loại trùng; vai trò kiểm soát/xử lý — xem vùng xám 6.3 tại [tieu-chi-cap-do.md](../01-xac-dinh-cap-do/tieu-chi-cap-do.md)).*

**b) Loại hệ thống thông tin (Đ9.2)**

Loại hình: {{LOAI_HINH}}. Lý do: {{LY_DO}}. *(Nếu loại b: nêu dịch vụ trực tuyến cung cấp, lĩnh vực; kết quả tra danh mục ngành, nghề đầu tư kinh doanh có điều kiện — Phụ lục IV Luật Đầu tư, số thứ tự hoặc "không thuộc" **[CẦN ĐỐI CHIẾU văn bản đang có hiệu lực]**; có giải quyết thủ tục hành chính không.)*

**c) Căn cứ đề xuất cấp độ**

| Tiêu chí đối chiếu | Kết quả | Điều khoản | Cấp tương ứng |
|---|---|---|---|
| Xử lý BMNN / phục vụ QP–AN | ☐ Có ☐ Không | Đ13.1–Đ15.1 | |
| Loại hình + thông tin (nội bộ) | | Đ11.1 / Đ12.1 | |
| Dịch vụ trực tuyến thuộc/không thuộc ngành nghề có điều kiện | | Đ12.2.a / Đ13.2.a | |
| Giải quyết TTHC | | Đ13.2.b | |
| Ngưỡng chủ thể dữ liệu | | Đ12.2.b / Đ13.2.c | |
| Cơ sở hạ tầng thông tin — phạm vi phục vụ | | Đ12.3 / Đ13.3 / Đ14.2 / Đ15.3 | |
| Điều khiển công nghiệp — cấp công trình | | Đ13.4 / Đ14.3 / Đ15.4 | |
| Dữ liệu đặc biệt quan trọng quốc gia | | Đ15.2 | |
| Kết quả đánh giá rủi ro | | Đ10.4.a, Đ10.5 | |
| Tiêu chí HTTT quan trọng về ANQG | ☐ Có ☐ Không | Đ16 | |
| **Cấp đề xuất = cấp cao nhất** | | **Đ8.2** | **{{CAP_DO}}** |

**d) Luận giải mức độ tổn hại theo Luật 116 Đ8.1**

*Phân tích hậu quả khi hệ thống bị sự cố hoặc có hành vi vi phạm pháp luật về ANM (mất bí mật, mất toàn vẹn, mất sẵn sàng) đối với từng đối tượng bị ảnh hưởng. Nêu rõ giả định định lượng của tổ chức vì Luật chưa định lượng các mức.*

| Đối tượng bị ảnh hưởng | Kịch bản (bí mật / toàn vẹn / sẵn sàng) | Hậu quả dự kiến | Mức tổn hại | Tương ứng Luật 116 Đ8.1 |
|---|---|---|---|---|
| Quyền, lợi ích hợp pháp của tổ chức, cá nhân | *Ví dụ: lộ DLCN của {{N}} khách hàng* | | ☐ Tổn hại ☐ Nghiêm trọng ☐ Đặc biệt nghiêm trọng | a / b / c |
| Lợi ích công cộng | *Ví dụ: gián đoạn dịch vụ thiết yếu {{X}} giờ* | | ☐ Tổn hại ☐ Nghiêm trọng ☐ Đặc biệt nghiêm trọng | b / c / d |
| Trật tự, an toàn xã hội | | | ☐ Tổn hại ☐ Nghiêm trọng ☐ Đặc biệt nghiêm trọng | c / d |
| An ninh quốc gia | | | ☐ Tổn hại ☐ Nghiêm trọng ☐ Đặc biệt nghiêm trọng | c / d / đ |

Kết luận: mức tổn hại cao nhất tương ứng **cấp {{CAP_THEO_TON_HAI}}** theo Luật 116 Đ8.1; {{NHAT_QUAN_HAY_KHONG}} với cấp theo tiêu chí NĐ 331. Nếu cao hơn → đề xuất cấp cao hơn (NĐ 331 Đ10.5).

Bảng tham chiếu Luật 116 Đ8.1 (rút gọn):

| Cấp | Mức tổn hại |
|---|---|
| 1 | Tổn hại quyền, lợi ích hợp pháp của tổ chức, cá nhân |
| 2 | Tổn hại nghiêm trọng quyền, lợi ích hợp pháp của tổ chức, cá nhân hoặc tổn hại lợi ích công cộng |
| 3 | Tổn hại đặc biệt nghiêm trọng quyền, lợi ích hợp pháp của tổ chức, cá nhân; tổn hại nghiêm trọng lợi ích công cộng; tổn hại hoặc tổn hại nghiêm trọng TT-ATXH hoặc tổn hại ANQG |
| 4 | Tổn hại đặc biệt nghiêm trọng lợi ích công cộng, TT-ATXH hoặc tổn hại nghiêm trọng ANQG |
| 5 | Tổn hại đặc biệt nghiêm trọng ANQG |

**e) Vùng xám và lựa chọn áp dụng**

{{VUNG_XAM_VA_LAP_LUAN}} *(nêu vấn đề, các cách hiểu, lý do chọn; tham chiếu [tieu-chi-cap-do.md mục 6](../01-xac-dinh-cap-do/tieu-chi-cap-do.md)).*

## 3. Nhận diện sơ bộ nguy cơ, rủi ro an ninh mạng (Đ22.4.c)

*Liệt kê các nguy cơ, rủi ro chính và mức độ ảnh hưởng dự kiến, làm căn cứ hỗ trợ đề xuất cấp độ. Chi tiết tại [bao-cao-danh-gia-rui-ro.md](bao-cao-danh-gia-rui-ro.md).*

| STT | Nguy cơ / mối đe dọa | Điểm yếu, lỗ hổng liên quan | Tài sản bị ảnh hưởng | Khả năng xảy ra (1–5) | Mức ảnh hưởng dự kiến (1–5) | Mức rủi ro | Ảnh hưởng tới đề xuất cấp độ |
|---|---|---|---|---|---|---|---|
| 1 | *Ví dụ: tấn công chiếm quyền tài khoản* | | | | | | |
| 2 | *Ví dụ: mã độc tống tiền mã hóa CSDL* | | | | | | |
| 3 | *Ví dụ: lộ lọt dữ liệu qua API* | | | | | | |
| 4 | *Ví dụ: gián đoạn nhà cung cấp cloud/TTDL* | | | | | | |

---

## 4. Bổ sung bắt buộc cho hệ thống đề xuất cấp độ 4 hoặc 5 (Đ22.5)

Với cấp 4–5, thuyết minh phải bao gồm **báo cáo đánh giá rủi ro ANM ở mức chi tiết hơn** và làm rõ thêm các nội dung dưới đây (Đ22.5).

> **[CẦN ĐỐI CHIẾU]** Đ22.5 ghi "ngoài các nội dung được quy định tại khoản 3 Điều này" (khoản 3 là thuyết minh tổng quan); về logic có thể là khoản 4. Để an toàn, trình bày đủ nội dung khoản 3, khoản 4 và khoản 5.

### 4.1. Hệ thống thông tin liên quan, kết nối, có ảnh hưởng quan trọng (Đ22.5.a)

| Hệ thống | Chủ quản | Quan hệ (kết nối / phụ thuộc / ảnh hưởng) | Dữ liệu trao đổi | Hệ quả khi hệ thống này gặp sự cố |
|---|---|---|---|---|
| {{HE_THONG}} | | | | |

### 4.2. Nguy cơ tấn công mạng và mức độ ảnh hưởng (Đ22.5.b)

| Kịch bản tấn công | Tác nhân đe dọa | Vector tấn công | Mức độ ảnh hưởng tới hệ thống | Biện pháp hiện có |
|---|---|---|---|---|
| {{KICH_BAN}} | | | | |

### 4.3. Phạm vi, mức độ ảnh hưởng tới lợi ích công cộng, TT-ATXH, ANQG (Đ22.5.c)

| Khía cạnh | Phạm vi ảnh hưởng (địa bàn, số người, lĩnh vực) | Mức độ | Luận giải |
|---|---|---|---|
| Lợi ích công cộng | | | |
| Trật tự, an toàn xã hội | | | |
| An ninh quốc gia | | | |

### 4.4. Yêu cầu vận hành 24/7 (Đ22.5.d — áp dụng với HTTT theo Đ14.2)

| Nội dung | Thuyết minh |
|---|---|
| Lý do phải vận hành 24/7 | {{LY_DO}} |
| Hệ quả khi ngừng vận hành không có kế hoạch | {{HE_QUA}} |
| Mục tiêu RTO / RPO | {{RTO}} / {{RPO}} |
| Phương án dự phòng, chuyển đổi | {{PHUONG_AN}} |

---

## 5. Kết luận đề xuất

{{TEN_DON_VI_VAN_HANH}} đề xuất hệ thống {{TEN_HE_THONG}} được xác định **cấp độ {{CAP_DO}}**, căn cứ {{CAN_CU_TOM_TAT}}.

| Người lập | Đơn vị chuyên trách ANM soát xét | Ngày |
|---|---|---|
| {{NGUOI_LAP}} | {{NGUOI_SOAT_XET}} | {{NGAY}} |
