# Phiếu xác định cấp độ hệ thống thông tin (worksheet)

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ4, Đ5, Đ7–Đ16, Đ10.3; Luật 116/2025/QH15 Đ8.1 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

**Cách dùng:** sao chép phiếu này cho **mỗi** HTTT (đặt tên `phieu-{{MA_HE_THONG}}.md`). Phiếu là tài liệu làm việc nội bộ, không phải biểu mẫu pháp định; nội dung phiếu là đầu vào cho [Thuyết minh đề xuất cấp độ](../02-ho-so-cap-do/thuyet-minh-de-xuat-cap-do.md) (NĐ 331 Đ22.4) và [Thuyết minh tổng quan](../02-ho-so-cap-do/thuyet-minh-tong-quan-httt.md) (Đ22.3). Tra tiêu chí tại [tieu-chi-cap-do.md](tieu-chi-cap-do.md), đi nhanh bằng [cay-quyet-dinh.md](cay-quyet-dinh.md).

---

## Phần A. Thông tin chung

| Trường | Giá trị | Căn cứ |
|---|---|---|
| Mã hệ thống (nội bộ) | `{{MA_HE_THONG}}` | — |
| Tên hệ thống thông tin | `{{TEN_HE_THONG}}` | — |
| Chủ quản HTTT | `{{TEN_CHU_QUAN}}` — văn bản xác định: `{{SO_VAN_BAN_GIAO_CHU_QUAN}}` | NĐ 331 Đ4; Luật 116 Đ2.8 |
| Có ủy quyền chủ quản? | ☐ Không ☐ Có — văn bản `{{SO_VB_UY_QUYEN}}`, phạm vi, thời hạn `{{THOI_HAN}}` | Đ4.3 |
| Đơn vị vận hành | `{{TEN_DON_VI_VAN_HANH}}` | Đ5.1 |
| Nhiều đơn vị vận hành? Đơn vị chủ trì | `{{DON_VI_CHU_TRI}}` | Đ5.2 |
| Thuê dịch vụ CNTT? | ☐ Không ☐ Có — nhà cung cấp `{{TEN_NHA_CUNG_CAP}}`, hợp đồng `{{SO_HOP_DONG}}`; điều khoản trách nhiệm ANM đã có? ☐ | Đ5.3 |
| Đơn vị chuyên trách ANM | `{{TEN_DON_VI_CHUYEN_TRACH_ANM}}` | Đ3.2, Đ31.1 |
| Tình trạng | ☐ Đang vận hành ☐ Dự án xây mới ☐ Mở rộng/nâng cấp ☐ Thuê dịch vụ | Đ19, Đ20 |
| Đã có cấp độ theo quy định cũ? | ☐ Không ☐ Có — cấp `{{CAP_CU}}`, QĐ `{{SO_QD_CU}}` ngày `{{NGAY}}` | Luật 116 Đ45.1; NĐ 331 Đ39 |
| Mục đích, chức năng nghiệp vụ chính | `{{MO_TA_CHUC_NANG}}` | Đ7.1 |
| Đối tượng sử dụng / phục vụ | ☐ Nhân sự nội bộ ☐ Khách hàng cá nhân ☐ Khách hàng tổ chức ☐ Người dân ☐ Cơ quan nhà nước ☐ Khác: `{{...}}` | Đ7.1, Đ9.2 |
| Vị trí triển khai | ☐ On-premise ☐ Trung tâm dữ liệu thuê ☐ Cloud (`{{NHA_CUNG_CAP_CLOUD}}`, vùng `{{REGION}}`) ☐ Hỗn hợp | Đ30.8, Đ30.9 |

## Phần B. Xác định HTTT và phạm vi (NĐ 331 Đ7, Đ8)

**B1. Điều kiện là HTTT (Đ7.1, Đ8.1)**

- [ ] Có chức năng nghiệp vụ rõ ràng
- [ ] Có xử lý dữ liệu
- [ ] Có người dùng/đối tượng vận hành/đối tượng phục vụ cụ thể
- [ ] Có kết quả đầu ra là thông tin, dữ liệu
- [ ] Chỉ có một chủ quản
- [ ] Có thể hoạt động độc lập, phục vụ nghiệp vụ/sản xuất/kinh doanh cụ thể

**B2. Thành phần trong phạm vi**

| Thành phần (ứng dụng, CSDL, máy chủ, dịch vụ cloud, API...) | Vai trò | Lý do đưa vào phạm vi (chọn căn cứ Đ7.2.a) |
|---|---|---|
| `{{THANH_PHAN_1}}` | `{{VAI_TRO}}` | ☐ Cùng chức năng ☐ Dòng dữ liệu ☐ Phụ thuộc vận hành ☐ Ảnh hưởng sự cố |
| `{{THANH_PHAN_2}}` | | ☐ ☐ ☐ ☐ |

**B3. Thành phần/hệ thống liên quan nhưng để NGOÀI phạm vi**

| Hệ thống | Quan hệ (kết nối, chia sẻ hạ tầng) | Lý do để ngoài | Đánh giá lan truyền rủi ro (Đ7.2.b) |
|---|---|---|---|
| `{{HE_THONG_LIEN_QUAN}}` | | | |

**B4. Tự kiểm tra Đ8.3** — Việc tách/gộp trên có làm cấp độ thấp hơn so với phương án khác không? ☐ Không ☐ Có → giải thích: `{{GIAI_THICH}}`

## Phần C. Loại thông tin xử lý (NĐ 331 Đ9.1)

| Loại thông tin | Có? | Mô tả/ví dụ dữ liệu trong hệ thống |
|---|---|---|
| Thông tin công cộng (Đ9.1.a) | ☐ | |
| Thông tin riêng (Đ9.1.b) | ☐ | |
| Thông tin cá nhân (Đ9.1.c) | ☐ | |
| Thông tin bí mật nhà nước (Đ9.1.d) | ☐ | Độ mật: ☐ Mật ☐ Tối mật ☐ Tuyệt mật |

## Phần D. Loại hình hệ thống (NĐ 331 Đ9.2)

| Loại | Chọn | Lý do |
|---|---|---|
| a. Phục vụ hoạt động nội bộ | ☐ | |
| b. Phục vụ người dân, doanh nghiệp (dịch vụ trực tuyến; DVC trực tuyến) | ☐ | Lĩnh vực: `{{LINH_VUC}}`; có giải quyết TTHC? ☐ |
| c. Cơ sở hạ tầng thông tin | ☐ | Phạm vi phục vụ: ☐ một tổ chức ☐ một bộ/ngành/tỉnh/một số tỉnh ☐ toàn quốc 24/7 ☐ kết nối quốc tế |
| d. Điều khiển công nghiệp | ☐ | Cấp công trình xây dựng: `{{CAP_CONG_TRINH}}` |
| đ. Khác | ☐ | |
| Đã tra danh mục HTTT do Bộ Công an công bố (Đ9.2.e)? | ☐ | Ngày tra: `{{NGAY}}` |

## Phần E. Số chủ thể dữ liệu cá nhân

| Chỉ tiêu | Số lượng | Phương pháp đếm (truy vấn, thời điểm chốt, loại trừ trùng) | Dự báo 12–36 tháng |
|---|---|---|---|
| Số chủ thể có **DLCN cơ bản** (NĐ 356 Đ3) | `{{SO_CHU_THE_CO_BAN}}` | | |
| Số chủ thể có **DLCN nhạy cảm** (NĐ 356 Đ4) | `{{SO_CHU_THE_NHAY_CAM}}` | Loại DLCN nhạy cảm: `{{...}}` | |
| Vai trò đối với DLCN | ☐ Bên kiểm soát ☐ Bên kiểm soát và xử lý ☐ Bên xử lý (thay khách hàng) | Luật 91/2025 Đ2.7–Đ2.9 | |
| Vượt ngưỡng 100.000 (cơ bản) hoặc 10.000 (nhạy cảm)? | ☐ Có → tiêu chí Đ13.2.c ☐ Không → Đ12.2.b | | |

Xem cách đếm thận trọng khi là bên xử lý: [tieu-chi-cap-do.md mục 6.3](tieu-chi-cap-do.md).

## Phần F. Ngành, nghề

| Trường | Giá trị |
|---|---|
| Dịch vụ trực tuyến cung cấp | `{{MO_TA_DICH_VU}}` |
| Ngành, nghề tương ứng | `{{NGANH_NGHE}}` |
| Thuộc danh mục ngành, nghề ĐTKD có điều kiện (Phụ lục IV Luật Đầu tư)? | ☐ Có — STT `{{STT_PHU_LUC_IV}}` ☐ Không ☐ Chưa rõ |
| Văn bản đã tra, phiên bản, ngày tra | `{{VAN_BAN_DA_TRA}}` — **[CẦN ĐỐI CHIẾU] Phụ lục IV Luật Đầu tư chưa có trong repo** |
| Giấy phép/điều kiện kinh doanh đang có | `{{GIAY_PHEP}}` |

## Phần G. Kết nối, liên thông

| Hệ thống kết nối | Chủ quản | Chiều dữ liệu | Giao thức/phương thức | Loại dữ liệu trao đổi | Cấp độ của hệ thống kia (nếu biết) |
|---|---|---|---|---|---|
| `{{HE_THONG_KET_NOI}}` | | ☐ Vào ☐ Ra ☐ Hai chiều | | | |

Ghi chú: kết nối liên thông, chia sẻ dữ liệu là trường hợp phải đánh giá rủi ro (NĐ 331 Đ10.2.c); với cấp 4–5 phải nêu các HTTT liên quan/kết nối trong thuyết minh (Đ22.5.a).

## Phần H. Kết quả đánh giá rủi ro sơ bộ (NĐ 331 Đ10.3)

| Nội dung (Đ10.3) | Tóm tắt kết quả | Tài liệu chi tiết |
|---|---|---|
| a) Tài sản, chức năng trọng yếu, xếp hạng tài sản | | [bao-cao-danh-gia-rui-ro.md](../02-ho-so-cap-do/bao-cao-danh-gia-rui-ro.md) |
| b) Loại thông tin xử lý, lưu trữ, truyền đưa | (xem Phần C) | |
| c) Mối đe dọa, điểm yếu, lỗ hổng, khả năng khai thác chính | | |
| d) Khả năng xảy ra & mức tác động tới ANQG, TT-ATXH, quyền lợi tổ chức/cá nhân, lợi ích công cộng | Mức tổn hại dự kiến theo Luật 116 Đ8.1: ☐ cấp 1 ☐ 2 ☐ 3 ☐ 4 ☐ 5 | |
| đ) Năng lực phòng ngừa, phát hiện, ứng phó, khắc phục hiện có | | |
| e) Kế hoạch giảm thiểu rủi ro | | |
| g) Truyền thông rủi ro, báo cáo cơ quan có thẩm quyền | | |

## Phần I. Cấp đề xuất và căn cứ

| Tiêu chí khớp | Điều khoản | Cấp tương ứng |
|---|---|---|
| `{{TIEU_CHI_1}}` | NĐ 331 Đ`{{...}}` | |
| `{{TIEU_CHI_2}}` | | |
| Mức tổn hại theo đánh giá rủi ro | Luật 116 Đ8.1; NĐ 331 Đ10.5 | |
| **Cấp đề xuất (cao nhất — Đ8.2)** | | **`{{CAP_DE_XUAT}}`** |
| Có dấu hiệu HTTT quan trọng về ANQG (Đ16)? | ☐ Không ☐ Có → Đ17 | |
| Vùng xám đã gặp và lựa chọn áp dụng | `{{VUNG_XAM}}` | |
| Thẩm quyền thẩm định/phê duyệt dự kiến | Xem [tham-quyen-trinh-tu.md](tham-quyen-trinh-tu.md) | |

## Phần J. Người lập, soát xét

| Vai trò | Họ tên | Chức danh | Ngày | Ký |
|---|---|---|---|---|
| Người lập (đơn vị vận hành) | `{{NGUOI_LAP}}` | | `{{NGAY}}` | |
| Soát xét (đơn vị chuyên trách ANM) | `{{NGUOI_SOAT_XET}}` | | `{{NGAY}}` | |
| Xác nhận của chủ quản (nếu cần) | `{{NGUOI_XAC_NHAN}}` | | `{{NGAY}}` | |

**Lịch sử phiên bản:** `{{PHIEN_BAN}}` — `{{NGAY}}` — `{{THAY_DOI}}`

> Lưu phiếu cùng hồ sơ đánh giá rủi ro; chủ quản phải lưu giữ hồ sơ đánh giá rủi ro và cung cấp khi thanh tra, kiểm tra (NĐ 331 Đ10.6).
