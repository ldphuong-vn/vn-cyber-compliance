# Thuyết minh phương án bảo đảm an ninh mạng — khung

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ6.2, Đ10, Đ21.4, Đ22.2.c, Đ22.6, Đ27, Đ28, Đ29, Đ30, Đ31.2.d, Đ33; Luật 116/2025/QH15 Đ10, Đ40; TCVN 14423:2026 mục 3–7 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

> Phần dẫn chiếu TCVN 14423:2026 là tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI).

Thành phần 4 của hồ sơ (Đ21.4), phần c) của thuyết minh (Đ22.2.c). Yêu cầu cốt lõi: thuyết minh phương án đáp ứng yêu cầu **quản lý, kỹ thuật** tương ứng cấp độ đề xuất, **mô tả chi tiết phương án triển khai đối với từng yêu cầu** (Đ22.6). Phương án phải đáp ứng yêu cầu cơ bản của NĐ 331 và Tiêu chuẩn quốc gia "An ninh mạng - Hệ thống thông tin - Yêu cầu cơ bản" (Đ29.1, Đ30.1), tức TCVN 14423:2026. Yêu cầu TCVN chi tiết theo cấp: [../03-yeu-cau-theo-cap-do/](../03-yeu-cau-theo-cap-do/).

**Cách điền các cột:**

| Cột | Nội dung |
|---|---|
| Phương án triển khai | Mô tả cụ thể giải pháp, quy trình, công cụ, người chịu trách nhiệm (không chỉ ghi "có") |
| Trạng thái | `Đã đáp ứng` · `Đáp ứng một phần` · `Chưa đáp ứng` · `Không áp dụng` (ghi lý do). Tương thích Mẫu 08 cột (10) và Đ36.10 |
| Bằng chứng | Tài liệu, cấu hình, log, biên bản chứng minh — đường dẫn nội bộ |
| Kế hoạch khắc phục | Việc cần làm, người phụ trách, hạn hoàn thành (bắt buộc nếu chưa đáp ứng đầy đủ — Đ36.10) |

---

<p align="center"><b>{{TEN_CO_QUAN_TO_CHUC}}</b></p>
<p align="center"><b>THUYẾT MINH PHƯƠNG ÁN BẢO ĐẢM AN NINH MẠNG</b><br/><b>{{TEN_HE_THONG}} — CẤP ĐỘ {{CAP_DO}}</b></p>
<p align="center"><i>(Phiên bản {{PHIEN_BAN}}, ngày {{NGAY}})</i></p>

## 0. Nguyên tắc và phạm vi phương án

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| NT-1 | Phương án đáp ứng yêu cầu cơ bản của NĐ 331 và TCVN "An ninh mạng - HTTT - Yêu cầu cơ bản" theo cấp độ | Đ29.1, Đ30.1 | *Áp dụng TCVN 14423:2026 mục {{3/4/5/6/7}} cho cấp {{CAP_DO}}* | | | |
| NT-2 | Yêu cầu cơ bản là tối thiểu, gồm quản lý và kỹ thuật; **không bao gồm an ninh vật lý** (an ninh vật lý tham khảo TCVN 14423:2026 Phụ lục A) | Đ30.2 | | | | |
| NT-3 | Cấp 1, 2, 3: xem xét dùng chung giải pháp bảo vệ, chia sẻ tài nguyên giữa các HTTT, tránh đầu tư trùng lặp | Đ30.5.a, Đ6.2 | *Liệt kê giải pháp dùng chung (SOC, tường lửa, EDR...)* | | | |
| NT-4 | Cấp 4, 5: thiết kế bảo đảm tính sẵn sàng, phân tách, hạn chế ảnh hưởng toàn hệ thống khi một thành phần mất ANM | Đ30.5.b | | | | |
| NT-5 | HTTT xây mới/mở rộng/nâng cấp: triển khai đầy đủ phương án đã phê duyệt và đáp ứng Đ29, Đ30 **trước khi** đưa vào vận hành | Đ30.6 | | | | |
| NT-6 | Quy chế bảo đảm ANM cho hệ thống được xây dựng theo cấp độ và được phê duyệt, ban hành **trước khi** hồ sơ đề xuất cấp độ được phê duyệt | Đ30.7 | *Số, ngày QĐ ban hành quy chế* | | | |

## Phần A. Bảy nội dung của phương án bảo đảm ANM (NĐ 331 Đ29.2)

### A.1. Bảo đảm ANM trong thiết kế, xây dựng (Đ29.2.a)

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| TK-1 | Yêu cầu ANM được đưa vào thiết kế từ đầu, xuyên suốt đến khi hủy bỏ | Đ6.1 | | | | |
| TK-2 | Phương án kỹ thuật trong BCKTKT / thiết kế cơ sở / kế hoạch thuê dịch vụ / đề cương đáp ứng phương án ANM theo cấp độ | Đ22.1 | | | | |
| TK-3 | Ban hành quy định về bảo đảm ANM trong thiết kế, xây dựng | Đ28.1; Luật 116 Đ10.2.a | | | | |
| TK-4 | Phát triển ứng dụng an toàn (cấp 3–5) | TCVN 14423:2026 mục 5.17 / 6.16 / 7.16 | *Xem ../03-yeu-cau-theo-cap-do/* | | | |
| TK-5 | Thuê TTDL/cloud: yêu cầu tách biệt (xem Phần D) | Đ30.8, Đ30.9 | | | | |

### A.2. Bảo đảm ANM trong quá trình vận hành (Đ29.2.b)

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| VH-1 | Ban hành quy định bảo đảm ANM trong quản lý, vận hành, sử dụng, nâng cấp | Đ28.1 | | | | |
| VH-2 | Lưu trữ, sao lưu bảo vệ an ninh thông tin mạng và các thành tố HTTT | Đ28.1; Luật 116 Đ10.2.đ | | | | |
| VH-3 | Áp dụng biện pháp quản lý, kỹ thuật theo Đ29, Đ30 và TCVN | Đ28.4 | *Chi tiết Phần B, C* | | | |
| VH-4 | Đơn vị vận hành thực hiện biện pháp theo phương án được phê duyệt; định kỳ đánh giá hiệu quả, báo cáo chủ quản | Đ33.1, Đ33.3 | | | | |
| VH-5 | Phối hợp xử lý, khắc phục điểm yếu, lỗ hổng | Đ33.4 | | | | |
| VH-6 | Báo cáo định kỳ/đột xuất theo yêu cầu chủ quản, cơ quan quản lý | Đ33.6, Đ35 | *Mẫu 08* | | | |

### A.3. Kiểm tra, đánh giá ANM (Đ29.2.c)

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| KT-1 | Đánh giá điều kiện ANM trước khi đưa vào vận hành; khi thay đổi lớn; theo yêu cầu | Đ28.3 | | | | |
| KT-2 | Kiểm tra, giám sát tuân thủ và đánh giá hiệu quả: định kỳ theo cấp độ và rủi ro, thường xuyên qua giám sát, đột xuất, theo yêu cầu | Đ28.5.a | *Tần suất: {{...}}* | | | |
| KT-3 | Nội dung kiểm tra tuân thủ (Đ27.1), đánh giá hiệu quả (Đ27.2) | Đ27.1, Đ27.2 | | | | |
| KT-4 | Dò quét mã độc, lỗ hổng, điểm yếu; kiểm thử xâm nhập; đánh giá an toàn mã nguồn phần mềm nội bộ; kế hoạch xử lý | Đ27.3 | *Hình thức: hộp đen/xám/trắng (Đ27.4)* | | | |
| KT-5 | Tự đánh giá do bộ phận độc lập với đơn vị vận hành; hoặc tổ chức chuyên môn đánh giá (thực hiện với cấp 5/ANQG và các trường hợp khác liệt kê tại Đ31.2.c) | Đ31.2.c | | | | |
| KT-6 | Quản lý kiểm tra ANM (cấp 3–5) | TCVN 14423:2026 mục 5.18 / 6.18 / 7.18 | | | | |

### A.4. Quản lý rủi ro ANM (Đ29.2.d)

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| RR-1 | Đánh giá rủi ro trong các trường hợp Đ10.2 | Đ10.2 | | | | |
| RR-2 | Nội dung tối thiểu Đ10.3.a–g | Đ10.3 | *[bao-cao-danh-gia-rui-ro.md](bao-cao-danh-gia-rui-ro.md)* | | | |
| RR-3 | Lưu giữ hồ sơ đánh giá rủi ro, cung cấp khi thanh tra, kiểm tra | Đ10.6 | | | | |
| RR-4 | Quản lý rủi ro theo TCVN | TCVN 14423:2026 mục 3.1 / 4.1 / 5.1 / 6.1 / 7.1 | | | | |

### A.5. Giám sát ANM (Đ29.2.đ)

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| GS-1 | Thực hiện giám sát ANM | Luật 116 Đ10.2.g | | | | |
| GS-2 | Kết nối hệ thống giám sát ANM, phòng chống mã độc tập trung về Trung tâm ANM quốc gia (Bộ Công an) hoặc Trung tâm ANM tỉnh, thành phố | Luật 116 Đ40.1.b | | | | |
| GS-3 | Phối hợp, thiết lập kết nối, đấu nối đường truyền, truyền dữ liệu phục vụ giám sát theo hướng dẫn lực lượng chuyên trách Bộ Công an | Đ33.5 | | | | |
| GS-4 | Giám sát và phòng thủ ANM (cấp 3–5) | TCVN 14423:2026 mục 5.13 / 6.13 / 7.13 | | | | |
| GS-5 | Quản lý nhật ký | TCVN 14423:2026 mục 3.8 / 4.8 / 5.8 / 6.8 / 7.8 | *Yêu cầu lưu log theo NĐ 333: xem ../05-nghia-vu-lien-quan/* | | | |

Quy định chi tiết về giám sát, ứng phó sự cố: chờ hướng dẫn của Bộ trưởng Bộ Công an (NĐ 331 Đ28.6).

### A.6. Dự phòng, ứng phó sự cố ANM, khôi phục sau thảm họa (Đ29.2.e)

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| SC-1 | Phương án ứng cứu sự cố ANM, được điều chỉnh theo kết quả đánh giá rủi ro | Đ10.4.c | | | | |
| SC-2 | Thông báo ban đầu sự cố nghiêm trọng trong **24 giờ** kể từ khi phát hiện | Đ31.2.d | | | | |
| SC-3 | Báo cáo nguyên nhân, phạm vi ảnh hưởng, biện pháp khắc phục trong **72 giờ**; sự cố phức tạp: báo cáo sơ bộ, cập nhật, kết thúc | Đ31.2.d | | | | |
| SC-4 | Sự cố có dấu hiệu xâm phạm ANQG, TT-ATXH hoặc gián đoạn nghiêm trọng: báo cáo **ngay** khi phát hiện | Đ31.2.d | | | | |
| SC-5 | Báo cáo sự cố với cơ quan chuyên trách Bộ Công an (hoặc Bộ Quốc phòng) | Luật 116 Đ40.1.c | *Đầu mối, kênh báo cáo: {{...}}* | | | |
| SC-6 | Sao lưu và khôi phục dữ liệu; khôi phục sau thảm họa | TCVN 14423:2026 mục 3.11 / 4.11 / 5.11 / 6.11 / 7.11 | *RTO/RPO: {{...}}* | | | |
| SC-7 | Quản trị ứng phó sự cố ANM | TCVN 14423:2026 mục 3.15 / 4.15 / 5.16 / 6.17 / 7.17 | | | | |
| SC-8 | Diễn tập bảo đảm ANM | Đ31.3 | | | | |

### A.7. Kết thúc vận hành, khai thác, thanh lý, hủy bỏ (Đ29.2.g)

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| KT-H1 | Quy định bảo đảm ANM khi hủy bỏ HTTT | Đ28.1 | | | | |
| KT-H2 | Phương án kết thúc vận hành, thanh lý, hủy bỏ (xóa/hủy dữ liệu an toàn, thu hồi tài khoản, thanh lý thiết bị lưu trữ) | Đ30.3.g | | | | |
| KT-H3 | Thuê dịch vụ: điều khoản duy trì, chuyển giao dịch vụ, trả/hủy dữ liệu khi hết hợp đồng | Đ5.3.b | | | | |

## Phần B. Yêu cầu cơ bản về quản lý (NĐ 331 Đ30.3)

Đ30.3 yêu cầu **ban hành các quy định và triển khai các quy định** về 7 nhóm sau. Mẫu quy chế, quy trình: `../04-chinh-sach-quy-trinh/`.

| Mã | Nhóm yêu cầu quản lý | Căn cứ | Nhóm TCVN 14423:2026 liên quan (gợi ý) | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|---|
| QL-a | Thiết lập chính sách ANM | Đ30.3.a | Xuyên suốt; Quy chế ANM (Đ30.7) | *Chính sách ANM, quy chế số {{...}}* | | | |
| QL-b | Tổ chức bảo đảm ANM | Đ30.3.b | Nhân sự vận hành, quản trị, bảo vệ ANM | *Đơn vị/bộ phận chuyên trách (Đ31.1); phân công trách nhiệm* | | | |
| QL-c | Bảo đảm nguồn nhân lực | Đ30.3.c | Nhân sự vận hành, quản trị, bảo vệ ANM | *Tuyển dụng, đào tạo, nâng cao nhận thức (Đ31.3), chấm dứt hợp đồng* | | | |
| QL-d | Quản lý thiết kế, xây dựng hệ thống | Đ30.3.d | Phát triển ứng dụng an toàn (cấp 3–5); Cấu hình an toàn; Quản lý nhà cung cấp | | | | |
| QL-đ | Quản lý vận hành hệ thống | Đ30.3.đ | Quản lý tài sản (phần cứng, phần mềm, thông tin); Tài khoản và truy cập; Lỗ hổng; Nhật ký; Trình duyệt, thư điện tử; Mã độc; Sao lưu; Giám sát (cấp 3–5); Ứng phó sự cố; Kiểm tra ANM (cấp 3–5) | | | | |
| QL-e | Phương án quản lý rủi ro ANM | Đ30.3.e | Quản lý rủi ro ANM | *Xem A.4* | | | |
| QL-g | Phương án kết thúc vận hành, khai thác, thanh lý, hủy bỏ HTTT | Đ30.3.g | Quản lý tài sản thông tin, tài sản phần cứng | *Xem A.7* | | | |

## Phần C. Yêu cầu cơ bản về kỹ thuật (NĐ 331 Đ30.4)

| Mã | Nhóm yêu cầu kỹ thuật | Căn cứ | Nhóm TCVN 14423:2026 liên quan (gợi ý) | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|---|
| KTH-a | Bảo đảm an toàn mạng | Đ30.4.a | Quản lý hạ tầng mạng; Giám sát và phòng thủ (cấp 3–5) | *Phân vùng, kiểm soát truy cập giữa vùng, bảo vệ biên, truy cập từ xa* | | | |
| KTH-b | Bảo đảm an toàn máy chủ | Đ30.4.b | Cấu hình an toàn; Lỗ hổng; Mã độc; Nhật ký; Tài khoản và truy cập | | | | |
| KTH-c | Bảo đảm an toàn ứng dụng | Đ30.4.c | Phát triển ứng dụng an toàn (cấp 3–5); Tài khoản và truy cập; Trình duyệt, thư điện tử | | | | |
| KTH-d | Bảo đảm an toàn dữ liệu | Đ30.4.d | Quản lý tài sản thông tin; Sao lưu và khôi phục | *Phân loại, mã hóa, kiểm soát truy cập, sao lưu* | | | |

> Cột "Nhóm TCVN liên quan" là **gợi ý ánh xạ** của bộ khung này; NĐ 331 và TCVN 14423:2026 không tự ánh xạ các nhóm Đ30.3/Đ30.4 vào các mục của tiêu chuẩn. Mỗi hàng nên tách thành các dòng con theo từng yêu cầu chi tiết trong ma trận tại [../03-yeu-cau-theo-cap-do/](../03-yeu-cau-theo-cap-do/) để đáp ứng Đ22.6 ("đối với từng yêu cầu").

## Phần D. HTTT triển khai trên TTDL thuê hoặc điện toán đám mây (NĐ 331 Đ30.8, Đ30.9)

### D.1. Cấp độ 3, 4 (Đ30.8)

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| DC-a | Hệ thống tách riêng, độc lập với hệ thống khác **về lô-gic**; có biện pháp quản lý truy cập giữa các hệ thống | Đ30.8.a | *VPC/tenant riêng, security group...* | | | |
| DC-b | Các vùng mạng trong hệ thống tách riêng, độc lập **về lô-gic**; quản lý truy cập giữa các vùng | Đ30.8.b | | | | |
| DC-c | Phân vùng lưu trữ phân tách độc lập **về lô-gic** | Đ30.8.c | | | | |

### D.2. Cấp độ 5 hoặc HTTT quan trọng về ANQG (Đ30.9)

| Mã | Yêu cầu | Căn cứ | Phương án triển khai | Trạng thái | Bằng chứng | Kế hoạch khắc phục |
|---|---|---|---|---|---|---|
| DC5-a | Tách riêng, độc lập với hệ thống khác **về vật lý**; quản lý truy cập giữa các hệ thống | Đ30.9.a | | | | |
| DC5-b | Các vùng mạng tách riêng **về lô-gic**; quản lý truy cập giữa các vùng | Đ30.9.b | | | | |
| DC5-c | Phân vùng lưu trữ phân tách **về vật lý** | Đ30.9.c | | | | |
| DC5-d | Thiết bị mạng chính phân tách **về vật lý** | Đ30.9.d | | | | |
| DC5-đ | Giải pháp ANM dùng chung chỉ được triển khai nếu chỉ giám sát, phát hiện, cảnh báo hoặc bảo vệ lớp biên, không tạo khả năng truy cập, điều khiển, can thiệp trực tiếp vào dữ liệu, tài nguyên, hoạt động nội bộ | Đ30.9.đ | | | | |

Hợp đồng thuê phải quy định trách nhiệm, thẩm quyền các bên về quản trị dữ liệu, kiểm soát truy cập, bảo đảm ANM (Đ5.3.a); nhà cung cấp phối hợp cập nhật hồ sơ theo hiện trạng hạ tầng (Đ19.2.b).

## Phần E. Bảng tra nhóm yêu cầu TCVN 14423:2026 theo cấp độ

Số mục theo cấu trúc tiêu chuẩn (tên nhóm diễn đạt ngắn). Nội dung yêu cầu: xem [../03-yeu-cau-theo-cap-do/](../03-yeu-cau-theo-cap-do/) và bản chính thức.

| Nhóm | Cấp 1 | Cấp 2 | Cấp 3 | Cấp 4 | Cấp 5 |
|---|---|---|---|---|---|
| Quản lý rủi ro ANM | 3.1 | 4.1 | 5.1 | 6.1 | 7.1 |
| Quản lý tài sản phần cứng | 3.2 | 4.2 | 5.2 | 6.2 | 7.2 |
| Quản lý tài sản phần mềm | 3.3 | 4.3 | 5.3 | 6.3 | 7.3 |
| Quản lý tài sản thông tin | 3.4 | 4.4 | 5.4 | 6.4 | 7.4 |
| Cấu hình an toàn phần cứng, phần mềm | 3.5 | 4.5 | 5.5 | 6.5 | 7.5 |
| Quản lý tài khoản và quyền truy cập | 3.6 | 4.6 | 5.6 | 6.6 | 7.6 |
| Quản lý lỗ hổng bảo mật | 3.7 | 4.7 | 5.7 | 6.7 | 7.7 |
| Quản lý nhật ký ANM | 3.8 | 4.8 | 5.8 | 6.8 | 7.8 |
| Bảo vệ trình duyệt web, thư điện tử | 3.9 | 4.9 | 5.9 | 6.9 | 7.9 |
| Phòng chống phần mềm độc hại | 3.10 | 4.10 | 5.10 | 6.10 | 7.10 |
| Sao lưu và khôi phục dữ liệu | 3.11 | 4.11 | 5.11 | 6.11 | 7.11 |
| Quản lý hạ tầng mạng | 3.12 | 4.12 | 5.12 | 6.12 | 7.12 |
| Giám sát và phòng thủ ANM | — | — | 5.13 | 6.13 | 7.13 |
| Nhân sự vận hành, quản trị, bảo vệ ANM | 3.13 | 4.13 | 5.14 | 6.14 | 7.14 |
| Quản lý nhà cung cấp sản phẩm, dịch vụ | 3.14 | 4.14 | 5.15 | 6.15 | 7.15 |
| Phát triển ứng dụng an toàn | — | — | 5.17 | 6.16 | 7.16 |
| Quản trị ứng phó sự cố ANM | 3.15 | 4.15 | 5.16 | 6.17 | 7.17 |
| Quản lý kiểm tra ANM | — | — | 5.18 | 6.18 | 7.18 |
| An ninh vật lý (tham khảo; ngoài yêu cầu cơ bản theo Đ30.2) | Phụ lục A | | | | |

Lưu ý: thứ tự mục "Phát triển ứng dụng an toàn" và "Quản trị ứng phó sự cố" ở cấp 3 (5.17, 5.16) khác cấp 4–5 (6.16/7.16, 6.17/7.17) — kiểm tra kỹ khi dẫn số mục.

## Phần F. Tổng hợp kế hoạch khắc phục

| STT | Mã yêu cầu | Nội dung chưa đáp ứng | Biện pháp | Người/đơn vị phụ trách | Hạn hoàn thành | Nguồn lực | Trạng thái |
|---|---|---|---|---|---|---|---|
| 1 | {{MA}} | | | | {{NGAY}} | | |

Mốc chuyển tiếp cần đáp ứng: 12 tháng kể từ 01/7/2026 với HTTT đã có cấp độ theo Luật ATTTM (Luật 116 Đ45.1) hoặc đang đầu tư trước 01/7/2026 (NĐ 331 Đ39.1) — xem [../01-xac-dinh-cap-do/tham-quyen-trinh-tu.md](../01-xac-dinh-cap-do/tham-quyen-trinh-tu.md).

| Người lập | Đơn vị chuyên trách ANM soát xét | Ngày |
|---|---|---|
| {{NGUOI_LAP}} | {{NGUOI_SOAT_XET}} | {{NGAY}} |
