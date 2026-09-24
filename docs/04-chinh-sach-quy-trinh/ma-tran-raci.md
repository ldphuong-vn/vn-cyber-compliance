# Ma trận RACI — trách nhiệm bảo đảm an ninh mạng cấp tổ chức

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ4, Đ5, Đ10, Đ18, Đ20, Đ26–Đ28, Đ31–Đ33, Đ35; Luật 116/2025/QH15 Đ10, Đ25, Đ40, Đ41; NĐ 333/2026/NĐ-CP Đ7, Đ9, Đ16; Luật 91/2025/QH15 Đ23, Đ33; NĐ 356/2025/NĐ-CP Đ12–Đ14 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

**R** = thực hiện · **A** = chịu trách nhiệm cuối cùng/phê duyệt (mỗi dòng đúng một A) · **C** = được tham vấn · **I** = được thông báo. Ô có dấu `*` là phân vai **do pháp luật ấn định**; ô khác là khuyến nghị.

## 1. Vai trò

| Mã | Vai trò | Căn cứ |
|---|---|---|
| **CQ** | Chủ quản HTTT (người đứng đầu hoặc tổ chức được ủy quyền theo Đ4.3) | NĐ 331 Đ4, Đ31 |
| **CT** | Đơn vị chuyên trách ANM / bộ phận chuyên trách ANM | NĐ 331 Đ3.2–3.3, Đ32 |
| **VH** | Đơn vị vận hành HTTT | NĐ 331 Đ5, Đ33 |
| **HĐ** | Hội đồng thẩm định độc lập / đơn vị trực thuộc được giao thẩm định (khi CT đồng thời là VH) | NĐ 331 Đ18.4 |
| **ĐL** | Bộ phận/đơn vị đánh giá độc lập (tự đánh giá nội bộ) | NĐ 331 Đ31.2.c |
| **PC** | Pháp chế / bộ phận, nhân sự bảo vệ DLCN (DPO) | Luật 91 Đ33.2; NĐ 356 Đ13–Đ14 |
| **NCC** | Nhà cung cấp dịch vụ (DC, đám mây, MSP/SOC, phát triển thuê khoán) | NĐ 331 Đ5.3, Đ19.2.b |

## 2. Ma trận

### 2.1 Thiết lập tổ chức và văn bản

| Hoạt động | CQ | CT | VH | HĐ | ĐL | PC | NCC | Căn cứ |
|---|---|---|---|---|---|---|---|---|
| Xác định chủ quản; ủy quyền | A* | C | I | – | – | C | – | Đ4.2–4.3 |
| Thành lập/chỉ định đơn vị, bộ phận chuyên trách ANM | A*/R | C | I | – | – | C | – | Đ31.1.b–c |
| Giao đơn vị vận hành; chỉ định đơn vị chủ trì | A*/R | C | I | – | – | C | C (thuê dịch vụ) | Đ5 |
| Chỉ định nhân sự/bộ phận BVDLCN | A | C | I | – | – | R | – | Luật 91 Đ33.2; NĐ 356 Đ13.1 |
| Xây dựng Quy chế bảo đảm ANM | A | R | C | – | C | C | I | Đ30.7, Đ32.1 |
| Phê duyệt, ban hành Quy chế (trước khi phê duyệt hồ sơ cấp độ) | A*/R | C | I | – | – | C | I | Đ30.7 |

### 2.2 Xác định cấp độ

| Hoạt động | CQ | CT | VH | HĐ | ĐL | PC | NCC | Căn cứ |
|---|---|---|---|---|---|---|---|---|
| Chỉ đạo xác định, lập hồ sơ đề xuất cấp độ | A* | C | I | – | – | – | – | Đ31.2.a |
| Lập hồ sơ đề xuất cấp độ | I | C | R*/A | – | – | C | C* (cập nhật hiện trạng hạ tầng khi thuê dịch vụ) | Đ20.1.a; Đ19.2.b |
| Thẩm định + phê duyệt cấp 1–2 | I* (nhận báo cáo) | A*/R* | C | R (nếu Đ18.4) | – | – | – | Đ18.1, Đ20.3.a |
| Thẩm định cấp 3 | I | A*/R* | C | R (nếu Đ18.4) | – | – | – | Đ18.2.a |
| Phê duyệt cấp 3–4 (VH trình) | A*/R* | C | R* (trình) | – | – | – | – | Đ18.2.b, Đ18.3.d, Đ20.3.b |
| Ý kiến chuyên môn hồ sơ cấp 4–5; gửi BCA/BQP/BCY thẩm định | A* (trình gửi) | R* (ý kiến) | R* (trình) | C | – | – | – | Đ20.1.d, Đ21.5 |
| Phê duyệt phương án ANM cấp 5 | A*/R* | C | R* (trình) | – | – | – | – | Đ18.3.d, Đ20.3.c |
| Xác định lại cấp độ | A | C | R | C | C | – | C | Đ25, Đ10.5 |

### 2.3 Vận hành và kiểm soát

| Hoạt động | CQ | CT | VH | HĐ | ĐL | PC | NCC | Căn cứ |
|---|---|---|---|---|---|---|---|---|
| Triển khai biện pháp theo phương án đã phê duyệt | A* (chỉ đạo) | C | R* | – | – | – | R (theo hợp đồng) | Đ31.2.b, Đ33.1 |
| Đôn đốc, kiểm tra, giám sát công tác bảo vệ ANM | I | A*/R* | C | – | C | – | I | Đ32.1 |
| Quản lý tài khoản, quyền truy cập | I | C (thẩm tra đặc quyền) | A/R | – | – | C | R (tài khoản NCC) | Quy chế Đ25 |
| Nhật ký, giám sát ANM; kết nối giám sát với cơ quan chức năng | A* (tổ chức giám sát) | R | R* (kết nối, đấu nối) | – | – | – | C | NĐ 333 Đ7.2; Luật 116 Đ40.1.b; Đ33.5 |
| Sao lưu, khôi phục thử | I | C | A/R | – | – | – | R | Quy chế Đ28 |
| Rà quét lỗ hổng, kiểm thử xâm nhập | I | R* | R* (phối hợp khắc phục) | – | C | – | C | Đ32.5, Đ33.4 |
| Khắc phục lỗ hổng, điểm yếu | I | C | A/R* | – | – | – | R | Đ33.4 |
| Quản lý thay đổi; cổng đánh giá trước vận hành | A* (cho phép vận hành) | R (điều phối) | R (hồ sơ) | – | R (đánh giá) | C | C | Đ28.3, Đ30.6 |
| Quản lý nhà cung cấp, điều khoản hợp đồng | A | C | R | – | – | R (pháp lý, DLCN) | C | Đ5.3.a; NĐ 356 Đ12.2 |
| Xác thực tài khoản người dùng dịch vụ; lưu nhật ký ≥ 12 tháng (DN cung cấp dịch vụ) | A | C | R | – | – | C | R | Luật 116 Đ25.2; NĐ 333 Đ16.2, Đ16.6 |
| Lưu trữ dữ liệu tại Việt Nam (DN cung cấp dịch vụ) | A | C | R | – | – | C | R | NĐ 333 Đ19 |

### 2.4 Rủi ro, kiểm tra, đánh giá

| Hoạt động | CQ | CT | VH | HĐ | ĐL | PC | NCC | Căn cứ |
|---|---|---|---|---|---|---|---|---|
| Đánh giá rủi ro ANM (các trường hợp Đ10.2) | A* | R (điều phối) | R (dữ liệu tài sản, lỗ hổng) | – | R* (thẩm tra, kết luận) | C | C | Đ10.2, Đ31.2.c |
| Lưu hồ sơ đánh giá rủi ro, cung cấp khi kiểm tra | A* | R | C | – | – | – | – | Đ10.6 |
| Tự đánh giá tuân thủ, hiệu quả (độc lập với VH) | A* (chịu trách nhiệm tính trung thực) | C | C (cung cấp) — **không được R** | – | R* | C | C | Đ31.2.c |
| Thuê tổ chức chuyên môn đánh giá (các trường hợp Đ31.2.c gạch 2) | A* | R | C | – | C | C | – | Đ31.2.c |
| Đánh giá hiệu quả biện pháp định kỳ, báo cáo chủ quản | I (nhận báo cáo) | C | A/R* | – | C | – | – | Đ33.3 |
| Phối hợp đoàn kiểm tra ANM của BCA | A* | R* (đầu mối phối hợp) | R | – | C | C | C | Đ26; Đ32.2 |

### 2.5 Sự cố và yêu cầu của cơ quan chức năng

| Hoạt động | CQ | CT | VH | HĐ | ĐL | PC | NCC | Căn cứ |
|---|---|---|---|---|---|---|---|---|
| Xây dựng, duy trì phương án/quy trình ứng phó sự cố | A | R | C | – | – | C | C | NĐ 333 Đ9.3.a; Luật 116 Đ41.2 |
| Phát hiện, phân loại, xử lý ban đầu | I | A/R | R | – | – | C (nếu DLCN) | R (thông báo cho khách hàng theo hợp đồng) | NĐ 333 Đ9.3.b |
| **Báo cáo sự cố với BCA (ngay/24h/72h)** | **A*** (nghĩa vụ của chủ quản) | R (soạn, gửi) | C | – | – | C | C | NĐ 331 Đ31.2.d; Luật 116 Đ40.1.c |
| Thông báo vi phạm DLCN ≤ 72h cho cơ quan chuyên trách BVDLCN; biên bản xác nhận | A (bên kiểm soát) | C | C | – | – | R* | R* (bên xử lý thông báo kịp thời cho bên kiểm soát) | Luật 91 Đ23.1–23.2; NĐ 356 Đ14.1.d |
| Đánh giá sau sự cố; đánh giá lại rủi ro | A | R | R | – | C | C | C | Đ10.2.d |
| Tiếp nhận, xác thực, xử lý yêu cầu cung cấp thông tin/gỡ nội dung (24h/06h/03h) | A | R (đầu mối) | R (thực hiện) | – | – | C | R (nếu dữ liệu ở NCC) | Luật 116 Đ25.2; NĐ 333 Đ16.3–16.4 |

### 2.6 Nhân lực, đào tạo, báo cáo, kết thúc

| Hoạt động | CQ | CT | VH | HĐ | ĐL | PC | NCC | Căn cứ |
|---|---|---|---|---|---|---|---|---|
| Bảo đảm người làm ANM đạt tiêu chuẩn; tập huấn chuyên sâu (Luật 116 Đ34.2) | A* (bố trí kinh phí) | R* | C | – | – | – | – | Đ32.3; NĐ 333 Đ24.8 |
| Tuyên truyền, đào tạo nhận thức, diễn tập; tham gia diễn tập BCA | A* | R | C | – | – | R (nội dung DLCN) | C | Đ31.3 |
| Báo cáo năm nội bộ (trước 20/12) | I | R* | R* | – | C | C | C | Đ35.4.a |
| Báo cáo năm gửi BCA (trước 25/12), Mẫu 08 | A*/R* | R (tổng hợp) | C | – | – | – | – | Đ35.4.b, Đ36 |
| Kiểm tra, giám sát thực hiện QĐ phê duyệt cấp độ | I | A*/R* | C | – | – | – | – | Mẫu 06 Điều 3.2 |
| Kết thúc vận hành, thanh lý, hủy bỏ; xóa dữ liệu | A | C | R | – | C | C | R (trả/xóa dữ liệu) | Đ30.3.g |

## 3. Quy tắc kiểm tra xung đột vai trò

- [ ] Không có cá nhân/đơn vị nào vừa **R** ở "Lập hồ sơ đề xuất cấp độ" vừa **R** ở "Thẩm định" cùng một hệ thống → nếu CT = VH, bắt buộc kích hoạt **HĐ** (NĐ 331 Đ18.4).
- [ ] **ĐL** không thuộc, không chịu chỉ đạo chuyên môn của **VH** (Đ31.2.c).
- [ ] **CQ** giữ **A** ở các dòng: báo cáo sự cố, tự đánh giá, phê duyệt cấp 3–4 — không ủy quyền trách nhiệm người đứng đầu tại Đ31.1 (xem [QĐ ủy quyền](qd-chi-dinh-chu-quan-uy-quyen.md)).
- [ ] **NCC** không nắm **A** ở bất kỳ dòng nào — trách nhiệm pháp lý vẫn ở chủ quản.
- [ ] Doanh nghiệp nhỏ gộp vai trò: ghi rõ biện pháp bù (phê duyệt chéo, thuê đánh giá độc lập) trong Quy chế.

## Bằng chứng cần lưu

Ma trận đã ký ban hành kèm Quy chế; phụ lục RACI trong hợp đồng với NCC; biên bản kiểm tra xung đột vai trò khi thay đổi tổ chức.
