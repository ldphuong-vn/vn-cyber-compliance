# Mẫu Tờ trình phê duyệt kinh phí giải pháp kỹ thuật an ninh mạng

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ5.3.a, Đ6.2–6.3, Đ28.4, Đ28.6, Đ29.1, Đ30.1–30.2, Đ30.4–30.6, Đ30.8–30.9, Đ37, Đ39.1; Luật 116/2025/QH15 Đ29.1, Đ38.2, Đ40.1.b, Đ45.1, Đ45.3; NĐ 333/2026/NĐ-CP Đ7.2, Đ19; NĐ 330/2026/NĐ-CP Đ7.1, Đ22.1.a, Đ23.1.c–d, Đ23.2.a, Đ35.2.đ, Đ69.1.b, Đ69.2; TCVN 14423:2026 mục 5.1–5.18 (tham chiếu số mục) · **Đối chiếu văn bản gốc:** 25/09/2026 · **Trạng thái:** Bản khung v0.1

> Phần TCVN 14423:2026 là tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI). Tờ trình chỉ nêu tên nhóm yêu cầu và số mục, không chép nội dung tiêu chuẩn.

## Khi nào dùng

- **Ai trình:** đơn vị chuyên trách ANM, phối hợp đơn vị vận hành HTTT. Có thể đồng trình với đơn vị mua sắm.
- **Trình ai:** người đứng đầu chủ quản, hoặc cấp có thẩm quyền phê duyệt đầu tư, mua sắm theo quy chế tài chính.
- **Dùng lúc nào:** sau khi đã có kết quả tự đánh giá theo checklist cấp độ ([`../03-yeu-cau-theo-cap-do/`](../03-yeu-cau-theo-cap-do/README.md)) và đã có (hoặc đang lập) phương án bảo đảm ANM trong hồ sơ đề xuất cấp độ ([`../02-ho-so-cap-do/thuyet-minh-phuong-an-anm.md`](../02-ho-so-cap-do/thuyet-minh-phuong-an-anm.md)). Với HTTT xây mới, nâng cấp: trình trước khi phê duyệt dự án hoặc kế hoạch thuê dịch vụ, vì NĐ 331 Đ37 khuyến khích phê duyệt cấp độ trước bước này.
- **Kèm theo:** bảng kết quả tự đánh giá (xuất từ `templates/03-yeu-cau-theo-cap-do/checklist-tu-danh-gia-cap-1-5.xlsx`); báo giá hoặc khảo sát thị trường; sơ đồ giải pháp; phân tích phương án dùng chung.
- **Tài liệu liên quan:** ma trận yêu cầu theo cấp [`../03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.md`](../03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.md); ánh xạ NĐ 331 Đ30 với TCVN [`../03-yeu-cau-theo-cap-do/anh-xa-nd331-d30-tcvn.md`](../03-yeu-cau-theo-cap-do/anh-xa-nd331-d30-tcvn.md); quản lý nhà cung cấp [`../04-chinh-sach-quy-trinh/quy-trinh-quan-ly-nha-cung-cap.md`](../04-chinh-sach-quy-trinh/quy-trinh-quan-ly-nha-cung-cap.md).

---

| {{TEN_TO_CHUC}}<br/>**{{TEN_PHONG_TRINH}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_TO_TRINH}}/TTr-{{VIET_TAT_PHONG}} | *{{DIA_DANH}}, ngày {{NGAY}} tháng {{THANG}} năm {{NAM}}* |

<p align="center"><b>TỜ TRÌNH</b><br/><b>Về việc phê duyệt kinh phí đầu tư, thuê giải pháp kỹ thuật bảo đảm an ninh mạng theo cấp độ</b></p>

Kính gửi: {{CHUC_DANH_LANH_DAO}}

*Căn cứ Luật An ninh mạng số 116/2025/QH15;*

*Căn cứ Nghị định số 331/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ về bảo vệ an ninh mạng đối với hệ thống thông tin;*

*Căn cứ Tiêu chuẩn quốc gia TCVN 14423:2026 An ninh mạng – Hệ thống thông tin – Yêu cầu cơ bản;*

*Căn cứ {{CAN_CU_THAM_QUYEN}} và {{QUY_CHE_TAI_CHINH}};*

*Căn cứ kết quả tự đánh giá mức độ đáp ứng yêu cầu an ninh mạng của hệ thống {{TEN_HE_THONG}} ngày {{NGAY_TU_DANH_GIA}}.*

{{TEN_PHONG_TRINH}} kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt kinh phí đầu tư, thuê giải pháp kỹ thuật bảo đảm an ninh mạng như sau:

*Viết tắt: Luật 116 là Luật An ninh mạng; NĐ 330, NĐ 331, NĐ 333 là các Nghị định số 330/2026/NĐ-CP, 331/2026/NĐ-CP, 333/2026/NĐ-CP; ANM là an ninh mạng; HTTT là hệ thống thông tin; TCVN là TCVN 14423:2026. "Đ30.5.a" nghĩa là điểm a khoản 5 Điều 30.*

**I. SỰ CẦN THIẾT**

**1. Cơ sở pháp lý**

a) Phương án bảo đảm ANM theo cấp độ phải đáp ứng yêu cầu cơ bản của NĐ 331 và Tiêu chuẩn quốc gia về ANM – HTTT – Yêu cầu cơ bản (NĐ 331 Đ29.1, Đ30.1). Đây là yêu cầu tối thiểu, gồm yêu cầu về quản lý và về kỹ thuật, không bao gồm an ninh vật lý (NĐ 331 Đ30.2). Yêu cầu kỹ thuật gồm: an toàn mạng, an toàn máy chủ, an toàn ứng dụng, an toàn dữ liệu (NĐ 331 Đ30.4).

b) HTTT xây mới hoặc mở rộng, nâng cấp phải triển khai đầy đủ phương án đã phê duyệt **trước khi** đưa vào vận hành (NĐ 331 Đ30.6).

c) Với HTTT cấp 1, 2, 3, phương án phải xem xét khả năng **dùng chung giải pháp** giữa các HTTT để tránh đầu tư thừa, trùng lặp (NĐ 331 Đ30.5.a; Đ6.2).

d) HTTT cấp 3, cấp 4 triển khai trên trung tâm dữ liệu hoặc điện toán đám mây thuê ngoài phải được thiết kế tách riêng về lô-gic với hệ thống khác; các vùng mạng tách riêng về lô-gic; phân vùng lưu trữ tách riêng về lô-gic (NĐ 331 Đ30.8).

đ) Chủ quản HTTT kết nối hệ thống giám sát ANM và hệ thống phòng chống mã độc tập trung về Trung tâm An ninh mạng quốc gia hoặc Trung tâm An ninh mạng của tỉnh, thành phố (Luật 116 Đ40.1.b; NĐ 333 Đ7.2).

e) Tổ chức ngoài khu vực nhà nước tự bảo đảm kinh phí bảo vệ ANM (Luật 116 Đ38.2).

**2. Hiện trạng (kết quả tự đánh giá HTTT {{TEN_HE_THONG}}, cấp độ {{CAP_DO}})**

| Nhóm yêu cầu | Mục TCVN (cấp 3) | Số mục phải đáp ứng | Số mục chưa đạt hoặc đạt một phần |
|---|---|---|---|
| Quản lý rủi ro | 5.1 | {{SO_MUC}} | {{SO_MUC}} |
| Quản lý tài sản phần cứng, phần mềm | 5.2, 5.3 | {{SO_MUC}} | {{SO_MUC}} |
| Quản lý tài sản thông tin (phân loại, mã hóa) | 5.4 | {{SO_MUC}} | {{SO_MUC}} |
| Cấu hình an toàn | 5.5 | {{SO_MUC}} | {{SO_MUC}} |
| Quản lý tài khoản, truy cập | 5.6 | {{SO_MUC}} | {{SO_MUC}} |
| Quản lý lỗ hổng | 5.7 | {{SO_MUC}} | {{SO_MUC}} |
| Nhật ký ANM | 5.8 | {{SO_MUC}} | {{SO_MUC}} |
| Trình duyệt, thư điện tử; phòng chống mã độc | 5.9, 5.10 | {{SO_MUC}} | {{SO_MUC}} |
| Sao lưu, khôi phục | 5.11 | {{SO_MUC}} | {{SO_MUC}} |
| Hạ tầng mạng | 5.12 | {{SO_MUC}} | {{SO_MUC}} |
| Giám sát, phòng thủ ANM | 5.13 | {{SO_MUC}} | {{SO_MUC}} |
| Nhân sự; nhà cung cấp | 5.14, 5.15 | {{SO_MUC}} | {{SO_MUC}} |
| Ứng phó sự cố | 5.16 | {{SO_MUC}} | {{SO_MUC}} |
| Phát triển ứng dụng an toàn | 5.17 | {{SO_MUC}} | {{SO_MUC}} |
| Kiểm tra ANM (kiểm thử xâm nhập) | 5.18 | {{SO_MUC}} | {{SO_MUC}} |
| **Tổng cộng** | | **{{SO_MUC}}** | **{{SO_MUC}}** |

Các mục chưa đạt thuộc nhóm quản lý (quy chế, quy trình, nhân sự) được xử lý bằng Quy chế bảo đảm ANM và kế hoạch đào tạo. Tờ trình này chỉ đề xuất các hạng mục cần kinh phí giải pháp kỹ thuật.

**3. Rủi ro nếu không thực hiện**

| Hành vi | Căn cứ | Mức phạt tổ chức (đồng) |
|---|---|---|
| Không triển khai đầy đủ biện pháp bảo đảm ANM như hồ sơ đã được phê duyệt (cấp 3 đến cấp 5) | NĐ 330 Đ23.1.d | 40–60 triệu |
| Đưa HTTT cấp 3 đến cấp 5 vào vận hành khi chưa được phê duyệt cấp độ | NĐ 330 Đ23.1.c | 40–60 triệu |
| Không kiểm tra, giám sát tuân thủ, lưu trữ nhật ký hệ thống hoặc không đánh giá hiệu quả biện pháp | NĐ 330 Đ23.2.a | 60–100 triệu |
| Không có biện pháp quản lý, phòng ngừa, phát hiện, ngăn chặn phát tán phần mềm độc hại | NĐ 330 Đ22.1.a | 30–60 triệu |
| Tổ chức sử dụng điện toán đám mây không mã hóa dữ liệu cá nhân khi lưu trữ và khi truyền; không phân quyền truy cập nghiêm ngặt | NĐ 330 Đ69.2.b–c | 50–70 triệu |
| Hợp đồng điện toán đám mây không xác định rõ luồng xử lý dữ liệu cá nhân, vai trò, trách nhiệm, yêu cầu bảo mật | NĐ 330 Đ69.1.b | 20–50 triệu |

Mức phạt ANM trong NĐ 330 là mức cho cá nhân, tổ chức bị phạt gấp hai lần. Mức phạt dữ liệu cá nhân là mức cho tổ chức (NĐ 330 Đ7.1). Bảng trên đã quy đổi ra mức cho tổ chức. Ngoài tiền phạt, tổ chức có thể bị buộc khắc phục tình trạng mất ANM, loại bỏ yếu tố vi phạm (NĐ 330 Đ22.4, Đ23.4).

**II. NỘI DUNG ĐỀ XUẤT**

**1. Nguyên tắc lựa chọn giải pháp**

a) Ưu tiên các yêu cầu bắt buộc của cấp độ đang đề xuất hoặc đã được phê duyệt; phân bổ nguồn lực theo thứ tự từ HTTT cấp độ cao xuống cấp độ thấp (NĐ 331 Đ6.3).

b) Dùng chung giải pháp cho nhiều HTTT khi phù hợp (NĐ 331 Đ30.5.a).

c) So sánh phương án đầu tư với phương án thuê dịch vụ theo tổng chi phí trong {{SO_NAM_TINH_CHI_PHI}} năm.

d) Nhà cung cấp dịch vụ ANM phải có giấy phép kinh doanh sản phẩm, dịch vụ ANM (Luật 116 Đ29.1).

**2. Danh mục hạng mục đề xuất**

| STT | Hạng mục giải pháp | Căn cứ | Ưu tiên | Chi phí dự kiến (đồng) | Tiến độ |
|---|---|---|---|---|---|
| 1 | Thu thập, lưu trữ tập trung nhật ký và tương quan sự kiện (SIEM) | TCVN 5.8, 5.13; NĐ 331 Đ30.4 | {{UU_TIEN}} | {{KINH_PHI}} | {{THOI_HAN}} |
| 2 | Phát hiện, phản ứng trên máy chủ và máy trạm (EDR) | TCVN 5.10 | {{UU_TIEN}} | {{KINH_PHI}} | {{THOI_HAN}} |
| 3 | Bảo vệ ứng dụng web, cơ sở dữ liệu; chống tấn công từ chối dịch vụ | TCVN 5.12 | {{UU_TIEN}} | {{KINH_PHI}} | {{THOI_HAN}} |
| 4 | Quản lý tài khoản tập trung, xác thực đa yếu tố cho quản trị viên | TCVN 5.6 | {{UU_TIEN}} | {{KINH_PHI}} | {{THOI_HAN}} |
| 5 | Rà quét lỗ hổng, quản lý bản vá tập trung | TCVN 5.7 | {{UU_TIEN}} | {{KINH_PHI}} | {{THOI_HAN}} |
| 6 | Sao lưu tự động, tập trung, có bản sao tách biệt | TCVN 5.11 | {{UU_TIEN}} | {{KINH_PHI}} | {{THOI_HAN}} |
| 7 | Mã hóa dữ liệu quan trọng khi lưu trữ và khi truyền | TCVN 5.4; NĐ 330 Đ69.2.b | {{UU_TIEN}} | {{KINH_PHI}} | {{THOI_HAN}} |
| 8 | Phân vùng mạng, kiểm soát truy cập mạng | TCVN 5.12; NĐ 331 Đ30.8 | {{UU_TIEN}} | {{KINH_PHI}} | {{THOI_HAN}} |
| 9 | Kiểm tra an toàn mã nguồn, thư viện trước khi đưa vào vận hành | TCVN 5.17 | {{UU_TIEN}} | {{KINH_PHI}} | {{THOI_HAN}} |
| 10 | Kết nối giám sát với Trung tâm An ninh mạng theo hướng dẫn | Luật 116 Đ40.1.b | {{UU_TIEN}} | {{KINH_PHI}} | Khi có hướng dẫn |
| | **Tổng cộng** | | | **{{TONG_KINH_PHI}}** | |

**3. Phương án dùng chung giải pháp:** các hạng mục {{HANG_MUC_DUNG_CHUNG}} được triển khai một lần, dùng chung cho {{DANH_SACH_HTTT_DUNG_CHUNG}}. Chi phí được phân bổ theo {{CACH_PHAN_BO_CHI_PHI}}. Phương án này đáp ứng nguyên tắc tại NĐ 331 Đ30.5.a.

**4. Yêu cầu khi thuê trung tâm dữ liệu hoặc điện toán đám mây (nếu có):** hợp đồng với {{NHA_CUNG_CAP_CLOUD}} phải bảo đảm:

a) Hệ thống {{TEN_HE_THONG}} tách riêng về lô-gic với hệ thống khác, có biện pháp quản lý truy cập giữa các hệ thống; các vùng mạng tách riêng về lô-gic; phân vùng lưu trữ tách riêng về lô-gic (NĐ 331 Đ30.8).

b) Quy định rõ trách nhiệm, thẩm quyền của các bên trong quản trị dữ liệu, kiểm soát truy cập, bảo đảm ANM (NĐ 331 Đ5.3.a).

c) Xác định luồng xử lý dữ liệu cá nhân, vai trò, trách nhiệm và yêu cầu bảo mật; mã hóa dữ liệu cá nhân khi lưu trữ và khi truyền (NĐ 330 Đ69.1.b, Đ69.2.b).

d) Vị trí lưu trữ dữ liệu phù hợp nghĩa vụ lưu trữ dữ liệu tại Việt Nam, nếu {{TEN_TO_CHUC}} thuộc diện áp dụng.

**5. Hình thức thực hiện:** mua sắm hoặc thuê dịch vụ theo {{QUY_CHE_TAI_CHINH}}. Hạng mục thuê dịch vụ giám sát ANM được lựa chọn cùng quy trình quản lý nhà cung cấp.

**III. KINH PHÍ DỰ KIẾN**

| STT | Nhóm chi phí | Đầu tư ban đầu (đồng) | Chi phí hằng năm (đồng) | Ghi chú |
|---|---|---|---|---|
| 1 | Bản quyền phần mềm, thiết bị | {{KINH_PHI}} | {{KINH_PHI}} | |
| 2 | Thuê dịch vụ (cloud, giám sát ANM) | {{KINH_PHI}} | {{KINH_PHI}} | |
| 3 | Triển khai, tích hợp, đào tạo sử dụng | {{KINH_PHI}} | {{KINH_PHI}} | |
| 4 | Dự phòng | {{KINH_PHI}} | {{KINH_PHI}} | |
| | **Tổng cộng** | **{{TONG_KINH_PHI}}** | **{{TONG_KINH_PHI_HANG_NAM}}** | |

Nguồn kinh phí: {{NGUON_KINH_PHI}}.

**IV. TIẾN ĐỘ**

| Đợt | Hạng mục | Thời hạn hoàn thành | Mốc liên quan |
|---|---|---|---|
| 1 | Hạng mục ưu tiên cao: {{HANG_MUC_DOT_1}} | {{THOI_HAN}} | Trước khi đưa HTTT xây mới, nâng cấp vào vận hành (NĐ 331 Đ30.6) |
| 2 | {{HANG_MUC_DOT_2}} | {{THOI_HAN}} | Mốc chuyển tiếp 12 tháng, nếu HTTT thuộc diện áp dụng (Luật 116 Đ45.1; NĐ 331 Đ39.1) |
| 3 | {{HANG_MUC_DOT_3}} | {{THOI_HAN}} | Theo lộ trình trong phương án đã phê duyệt |

**V. TỔ CHỨC THỰC HIỆN**

1. {{DON_VI_CHUYEN_TRACH_ANM}}: xây dựng yêu cầu kỹ thuật; đánh giá hồ sơ nhà cung cấp; nghiệm thu về ANM; cập nhật kết quả vào checklist tự đánh giá.

2. {{DON_VI_VAN_HANH}}: triển khai, tích hợp, vận hành giải pháp.

3. {{DON_VI_MUA_SAM}}: tổ chức lựa chọn nhà cung cấp theo quy chế mua sắm.

4. {{PHONG_PHAP_CHE}}: rà soát hợp đồng, bảo đảm các điều khoản tại Mục II.4.

5. {{PHONG_TAI_CHINH}}: bố trí kinh phí theo tiến độ.

**VI. KIẾN NGHỊ**

Kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt:

1. Danh mục hạng mục giải pháp kỹ thuật và thứ tự ưu tiên tại Mục II.2.

2. Tổng kinh phí đầu tư ban đầu {{TONG_KINH_PHI}}; chi phí hằng năm {{TONG_KINH_PHI_HANG_NAM}}; nguồn {{NGUON_KINH_PHI}}.

3. Phương án dùng chung giải pháp tại Mục II.3 và yêu cầu hợp đồng tại Mục II.4.

4. Giao {{DON_VI_MUA_SAM}} tổ chức lựa chọn nhà cung cấp; {{DON_VI_CHUYEN_TRACH_ANM}} báo cáo kết quả triển khai theo từng đợt.

| *Nơi nhận:*<br/>- Như trên;<br/>- {{PHONG_TAI_CHINH}};<br/>- {{DON_VI_MUA_SAM}};<br/>- Lưu: VT, {{VIET_TAT_PHONG}}. | **{{CHUC_DANH_NGUOI_TRINH_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{HO_TEN_NGUOI_TRINH}}** |
|:---|:---:|

| Ý KIẾN PHÊ DUYỆT CỦA LÃNH ĐẠO |
|:---|
| ☐ Đồng ý toàn bộ &nbsp;&nbsp; ☐ Đồng ý đợt 1, các đợt sau trình lại &nbsp;&nbsp; ☐ Không đồng ý &nbsp;&nbsp; ☐ Ý kiến khác |
| Ý kiến cụ thể: ............................................................................................................ |
| Ngày ....../....../.......... &nbsp;&nbsp; {{CHUC_DANH_LANH_DAO}} *(ký, ghi rõ họ tên)* |

## Hướng dẫn điền

**Cách điền**

- **Bản quyền TCVN:** chỉ ghi tên nhóm yêu cầu (bằng lời của mình) và số mục. Không chép câu chữ hay bảng của tiêu chuẩn vào tờ trình, kể cả bản lưu nội bộ nếu tờ trình có thể được chia sẻ ra ngoài.
- Bảng I.2 đang ghi số mục cho **cấp 3** (mục 5.x). Với cấp khác, đổi số mục theo quy tắc: cấp 1 là mục 3.x, cấp 2 là 4.x, cấp 4 là 6.x, cấp 5 là 7.x. Lưu ý thứ tự nhóm ở cấp 4–5 khác cấp 3: phát triển ứng dụng an toàn là 6.16/7.16, ứng phó sự cố là 6.17/7.17. Cấp 1–2 không có ba nhóm giám sát – phòng thủ, phát triển ứng dụng an toàn, kiểm tra ANM. Xem [`../03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.md`](../03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.md).
- `{{SO_MUC}}`: đếm từ checklist của cấp tương ứng. Cột "Kết quả" trong bản Excel có sẵn công thức tổng hợp.
- Chỉ đưa vào Mục II.2 các hạng mục thực sự lấp khoảng thiếu hụt đã ghi nhận. Mỗi dòng phải trỏ được về một mục TCVN hoặc điều khoản cụ thể. Không đề xuất sản phẩm theo tên thương mại trong tờ trình; nêu tên sản phẩm trong phụ lục báo giá.
- NĐ 331 Đ30.8 chỉ áp dụng cho HTTT **cấp 3, cấp 4** thuê trung tâm dữ liệu hoặc điện toán đám mây. Cấp 5 và HTTT quan trọng về an ninh quốc gia phải tách biệt **vật lý** (Đ30.9). Cấp 1–2 không có yêu cầu riêng về vấn đề này.
- Mục II.4.d: nghĩa vụ lưu trữ dữ liệu tại Việt Nam áp dụng cho doanh nghiệp cung cấp dịch vụ trên mạng viễn thông, Internet, dịch vụ gia tăng (NĐ 333 Đ19). Xem [to-trinh-luu-tru-du-lieu-va-nhat-ky-tai-viet-nam.md](to-trinh-luu-tru-du-lieu-va-nhat-ky-tai-viet-nam.md). Nếu tổ chức không thuộc diện này, xóa điểm d.
- Dòng 10 (kết nối giám sát): Luật 116 Đ40.1.b đặt nghĩa vụ, nhưng thủ tục kết nối cụ thể **chờ quy định của Bộ trưởng Bộ Công an về giám sát ANM** (NĐ 331 Đ28.6). Chỉ dự trù kinh phí, không cam kết thời hạn.
- **[CẦN ĐỐI CHIẾU]** Sản phẩm ANM có phải chứng nhận hoặc công bố hợp quy trước khi lưu thông hay không (NĐ 330 Đ35.2.đ xử phạt nhà cung cấp vi phạm việc này). Danh mục sản phẩm và điều kiện kinh doanh quy định tại NĐ 332/2026, chưa có toàn văn trong bộ nguồn. Khi lựa chọn nhà cung cấp, yêu cầu họ xuất trình giấy phép và giấy tờ hợp quy (nếu có).
- Luật 116 Đ45.3: sản phẩm, giải pháp an toàn thông tin mạng đã đưa vào sử dụng trước 01/7/2026 được tiếp tục sử dụng, nhưng phải đáp ứng điều kiện ANM trong 12 tháng. Nên rà lại các giải pháp đang dùng trước khi mua mới.

**Mẹo thuyết phục lãnh đạo**

- Trình bày theo **đợt**: đợt 1 là các hạng mục chặn việc phê duyệt hoặc đưa hệ thống vào vận hành (NĐ 331 Đ30.6). Lãnh đạo có thể duyệt đợt 1 trước.
- Cho thấy phần tiết kiệm nhờ dùng chung giải pháp (NĐ 331 Đ30.5.a). Đây là yêu cầu của Nghị định chứ không chỉ là lựa chọn kinh tế.
- So sánh chi phí đề xuất với các khoản: mức phạt ở bảng I.3; chi phí khắc phục sự cố trước đây (nếu có); chi phí gián đoạn dịch vụ ước tính mỗi giờ. Không cộng dồn các mức phạt.
- Gắn mỗi hạng mục với số mục TCVN chưa đạt. Lãnh đạo thấy tiền đầu tư được chuyển thành "số mục đạt" có thể đo được.

**Tài liệu đính kèm**

- [ ] Kết quả tự đánh giá (bảng Excel hoặc bản in checklist cấp độ).
- [ ] Sơ đồ giải pháp tổng thể; phân tích phương án dùng chung.
- [ ] Báo giá hoặc khảo sát giá của ít nhất {{SO_BAO_GIA}} nhà cung cấp.
- [ ] Giấy phép kinh doanh sản phẩm, dịch vụ ANM của nhà cung cấp dự kiến.
- [ ] Dự thảo điều khoản hợp đồng thuê trung tâm dữ liệu hoặc điện toán đám mây (nếu có).
