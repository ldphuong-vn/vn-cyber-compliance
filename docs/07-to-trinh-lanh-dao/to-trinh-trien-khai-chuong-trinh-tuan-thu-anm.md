# Mẫu Tờ trình triển khai chương trình tuân thủ an ninh mạng

> **Căn cứ:** Luật 116/2025/QH15 Đ10, Đ38.2, Đ44, Đ45; NĐ 331/2026/NĐ-CP Đ2, Đ4, Đ6.3, Đ10.2, Đ20–Đ24, Đ30.6–30.7, Đ31, Đ35, Đ38, Đ39; NĐ 330/2026/NĐ-CP Đ7, Đ21, Đ23, Đ24, Đ80 · **Đối chiếu văn bản gốc:** 25/09/2026 · **Trạng thái:** Bản khung v0.1

## Khi nào dùng

- **Ai trình:** trưởng đơn vị chuyên trách an ninh mạng (ANM). Nếu tổ chức chưa có đơn vị này thì trưởng đơn vị công nghệ thông tin (CNTT) trình.
- **Trình ai:** người đứng đầu chủ quản hệ thống thông tin (HTTT). Với doanh nghiệp, chủ quản là cấp có thẩm quyền quyết định đầu tư HTTT (NĐ 331 Đ4.2), ví dụ Tổng Giám đốc, Hội đồng quản trị hoặc Hội đồng thành viên tùy Điều lệ.
- **Dùng lúc nào:** đây là tờ trình **đầu tiên**, xin chủ trương cho toàn bộ chương trình tuân thủ (phân vai, kiểm kê, xác định cấp độ, Quy chế, hồ sơ cấp độ, triển khai, báo cáo năm). Các tờ trình chi tiết trong thư mục này trình sau, theo thứ tự tại [README](README.md).
- **Kèm theo:** danh mục HTTT sơ bộ; bảng tự rà soát hiện trạng; dự toán tổng; lộ trình. Nên kèm bảng mức phạt rút gọn từ [`../05-nghia-vu-lien-quan/nd-330-muc-phat.md`](../05-nghia-vu-lien-quan/nd-330-muc-phat.md).
- **Tài liệu liên quan:** lộ trình và các mốc: [`../00-tong-quan/lo-trinh-tuan-thu.md`](../00-tong-quan/lo-trinh-tuan-thu.md); thẩm quyền, trình tự: [`../01-xac-dinh-cap-do/tham-quyen-trinh-tu.md`](../01-xac-dinh-cap-do/tham-quyen-trinh-tu.md); thứ tự ban hành văn bản nội bộ: [`../04-chinh-sach-quy-trinh/README.md`](../04-chinh-sach-quy-trinh/README.md); báo cáo năm: [`../06-kiem-tra-bao-cao/bao-cao-nam-mau-08.md`](../06-kiem-tra-bao-cao/bao-cao-nam-mau-08.md); vùng chưa rõ: [`../00-tong-quan/diem-can-doi-chieu.md`](../00-tong-quan/diem-can-doi-chieu.md).

---

| {{TEN_TO_CHUC}}<br/>**{{TEN_PHONG_TRINH}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_TO_TRINH}}/TTr-{{VIET_TAT_PHONG}} | *{{DIA_DANH}}, ngày {{NGAY}} tháng {{THANG}} năm {{NAM}}* |

<p align="center"><b>TỜ TRÌNH</b><br/><b>Về việc phê duyệt chủ trương triển khai chương trình tuân thủ pháp luật về an ninh mạng</b></p>

Kính gửi: {{CHUC_DANH_LANH_DAO}}

*Căn cứ Luật An ninh mạng số 116/2025/QH15;*

*Căn cứ Nghị định số 331/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ về bảo vệ an ninh mạng đối với hệ thống thông tin;*

*Căn cứ Nghị định số 330/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ quy định xử phạt vi phạm hành chính trong lĩnh vực an ninh mạng và bảo vệ dữ liệu cá nhân;*

*Căn cứ {{CAN_CU_THAM_QUYEN}}.*

{{TEN_PHONG_TRINH}} kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt chủ trương triển khai chương trình tuân thủ pháp luật về an ninh mạng của {{TEN_TO_CHUC}} như sau:

*Viết tắt trong Tờ trình: Luật 116 là Luật An ninh mạng số 116/2025/QH15; NĐ 330, NĐ 331, NĐ 333 là các Nghị định số 330/2026/NĐ-CP, 331/2026/NĐ-CP, 333/2026/NĐ-CP; HTTT là hệ thống thông tin; ANM là an ninh mạng. Cách ghi "Đ31.1.a" nghĩa là điểm a khoản 1 Điều 31.*

**I. SỰ CẦN THIẾT**

**1. Cơ sở pháp lý**

Luật 116 có hiệu lực từ ngày 01/7/2026 (Luật 116 Đ44.1). Các Nghị định hướng dẫn và xử phạt có hiệu lực từ ngày 19/8/2026 (NĐ 331 Đ38; NĐ 330 Đ80). Nhiệm vụ bảo vệ ANM đối với HTTT gồm: xác định cấp độ; đánh giá, quản lý rủi ro; đôn đốc, giám sát, kiểm tra; triển khai biện pháp bảo vệ; báo cáo; tuyên truyền, nâng cao nhận thức (Luật 116 Đ10.1).

NĐ 331 áp dụng đối với HTTT phục vụ hoạt động của cơ quan, tổ chức nhà nước và HTTT cung cấp dịch vụ trực tuyến phục vụ người dân, doanh nghiệp; các tổ chức khác được khuyến khích áp dụng (NĐ 331 Đ2). {{TEN_TO_CHUC}} đang vận hành {{TONG_SO_HTTT}} HTTT, trong đó có HTTT cung cấp dịch vụ trực tuyến là {{TEN_HE_THONG}}, nên thuộc đối tượng áp dụng.

Các nghĩa vụ chính của chủ quản HTTT:

| STT | Nghĩa vụ | Căn cứ |
|---|---|---|
| 1 | Người đứng đầu trực tiếp chỉ đạo và chịu trách nhiệm trước pháp luật về công tác bảo vệ ANM của tổ chức | NĐ 331 Đ31.1.a |
| 2 | Bố trí bộ phận hoặc nhân sự chuyên trách ANM phù hợp với cấp độ của hệ thống | NĐ 331 Đ31.1.b–c |
| 3 | Chỉ đạo lập hồ sơ đề xuất cấp độ; tổ chức thẩm định, phê duyệt | NĐ 331 Đ31.2.a; Đ18, Đ20 |
| 4 | Ban hành Quy chế bảo đảm ANM **trước khi** hồ sơ đề xuất cấp độ được phê duyệt | NĐ 331 Đ30.7 |
| 5 | Triển khai đầy đủ phương án bảo đảm ANM đã phê duyệt trước khi đưa HTTT xây mới, nâng cấp vào vận hành | NĐ 331 Đ30.6 |
| 6 | Tổ chức kiểm tra, đánh giá ANM và quản lý rủi ro; chịu trách nhiệm về tính trung thực của kết quả | NĐ 331 Đ31.2.c |
| 7 | Báo cáo sự cố: thông báo ban đầu sự cố nghiêm trọng trong 24 giờ; báo cáo trong 72 giờ | NĐ 331 Đ31.2.d |
| 8 | Đào tạo, tuyên truyền, diễn tập ANM | NĐ 331 Đ31.3 |
| 9 | Báo cáo định kỳ hằng năm: nội bộ trước 20/12, gửi Bộ Công an trước 25/12 | NĐ 331 Đ35.4 |
| 10 | Tự bảo đảm kinh phí bảo vệ ANM (tổ chức ngoài khu vực nhà nước) | Luật 116 Đ38.2 |

**2. Các mốc thời gian**

| Mốc | Nội dung | Căn cứ | Áp dụng với {{TEN_TO_CHUC}} |
|---|---|---|---|
| 01/7/2026 | Luật 116 có hiệu lực | Luật 116 Đ44.1 | Đã hiệu lực |
| 19/8/2026 | NĐ 330, NĐ 331, NĐ 333 có hiệu lực; mức phạt mới áp dụng | NĐ 331 Đ38; NĐ 330 Đ80 | Đã hiệu lực |
| Trước 25/12 hằng năm | Gửi báo cáo năm cho Bộ Công an (số liệu từ 15/12 năm trước đến 14/12) | NĐ 331 Đ35.3, Đ35.4.b | Kỳ đầu: {{THOI_HAN}} |
| 06 tháng kể từ 01/7/2026 | HTTT đang đầu tư, xây dựng trước 01/7/2026: hoàn thành thẩm định, phê duyệt cấp độ theo NĐ 85/2016 | NĐ 331 Đ39.1 | {{TINH_TRANG}} |
| 12 tháng kể từ 01/7/2026 | HTTT đã xác định cấp độ theo Luật 86/2015, hoặc đang đầu tư trước 01/7/2026: phải đáp ứng điều kiện, biện pháp bảo vệ ANM tương ứng cấp độ | Luật 116 Đ45.1; NĐ 331 Đ39.1 | {{TINH_TRANG}} |

HTTT đang vận hành nhưng chưa từng được xác định cấp độ không thuộc hai trường hợp chuyển tiếp nêu trên, nên nghĩa vụ xác định cấp độ áp dụng ngay từ ngày 19/8/2026.

**3. Hiện trạng**

| STT | Nội dung | Hiện trạng tại {{TEN_TO_CHUC}} |
|---|---|---|
| 1 | Văn bản xác định chủ quản, đơn vị chuyên trách ANM, đơn vị vận hành | {{TINH_TRANG}} |
| 2 | Danh mục HTTT và cấp độ đề xuất | {{TINH_TRANG}} |
| 3 | Quy chế bảo đảm ANM | {{TINH_TRANG}} |
| 4 | Hồ sơ đề xuất cấp độ đã được phê duyệt | {{TINH_TRANG}} |
| 5 | Kiểm tra, đánh giá ANM gần nhất | {{TINH_TRANG}} |
| 6 | Quy trình ứng phó, báo cáo sự cố | {{TINH_TRANG}} |
| 7 | Đào tạo, diễn tập trong năm | {{TINH_TRANG}} |

**4. Rủi ro nếu không thực hiện**

Theo NĐ 330, mức phạt ghi trong các điều về ANM là mức cho cá nhân; tổ chức vi phạm bị phạt **gấp hai lần** (NĐ 330 Đ7.1). Mức tối đa trong lĩnh vực ANM là 200 triệu đồng đối với tổ chức (NĐ 330 Đ7.3). Các mức dưới đây là mức áp dụng cho tổ chức:

| Hành vi vi phạm | Căn cứ | Mức phạt tổ chức (đồng) |
|---|---|---|
| Không ban hành quy định về bảo đảm ANM trong thiết kế, xây dựng, quản lý, vận hành, sử dụng, nâng cấp, hủy bỏ HTTT | NĐ 330 Đ23.1.a | 40–60 triệu |
| Không xây dựng hồ sơ đề xuất cấp độ đối với HTTT cấp 3 đến cấp 5 | NĐ 330 Đ23.1.b | 40–60 triệu |
| Đưa HTTT cấp 3 đến cấp 5 vào vận hành khi chưa được phê duyệt cấp độ | NĐ 330 Đ23.1.c | 40–60 triệu |
| Không triển khai đầy đủ biện pháp như hồ sơ đã phê duyệt (cấp 3 đến cấp 5) | NĐ 330 Đ23.1.d | 40–60 triệu |
| Không lập hồ sơ đề xuất cấp độ hoặc không tổ chức thẩm định, phê duyệt | NĐ 330 Đ24.1 | 40–60 triệu |
| Không kiểm tra, giám sát tuân thủ, lưu trữ nhật ký hệ thống hoặc không đánh giá hiệu quả biện pháp | NĐ 330 Đ23.2.a | 60–100 triệu |
| Không tổ chức thực thi, đôn đốc, kiểm tra, giám sát công tác bảo đảm ANM | NĐ 330 Đ23.2.c | 60–100 triệu |
| Không báo cáo lực lượng chuyên trách khi phát hiện sự cố | NĐ 330 Đ21.2.a | 40–60 triệu |
| Không xây dựng Kế hoạch ứng phó sự cố; không thành lập hoặc chỉ định đơn vị chuyên trách ứng cứu sự cố, Đội ứng cứu sự cố | NĐ 330 Đ21.3.b, d | 60–100 triệu |

Ngoài tiền phạt, tổ chức có thể bị áp dụng biện pháp khắc phục hậu quả, như buộc khôi phục tình trạng ban đầu của HTTT, buộc khắc phục tình trạng mất ANM, buộc loại bỏ yếu tố vi phạm (NĐ 330 Đ23.4, Đ24.4). Chủ quản HTTT và đơn vị vận hành HTTT đều là đối tượng bị xử phạt (NĐ 330 Đ2.2.k). Người đứng đầu chủ quản chịu trách nhiệm trước pháp luật về công tác bảo vệ ANM (NĐ 331 Đ31.1.a).

**II. NỘI DUNG ĐỀ XUẤT**

**1. Mục tiêu:** hoàn thành xác định cấp độ, ban hành Quy chế và phê duyệt hồ sơ đề xuất cấp độ cho toàn bộ HTTT trước {{THOI_HAN}}; đáp ứng yêu cầu theo cấp độ đã phê duyệt trước {{THOI_HAN}}; gửi báo cáo năm đúng hạn.

**2. Phạm vi:** toàn bộ HTTT do {{TEN_TO_CHUC}} làm chủ quản. Ưu tiên HTTT cung cấp dịch vụ trực tuyến và HTTT có cấp độ cao hơn, vì nguồn lực được phân bổ theo thứ tự từ cấp độ cao xuống cấp độ thấp (NĐ 331 Đ6.3).

**3. Các hạng mục công việc**

| STT | Hạng mục | Đầu ra | Căn cứ |
|---|---|---|---|
| 1 | Phân vai: xác định chủ quản (ủy quyền nếu cần), chỉ định đơn vị chuyên trách ANM, giao đơn vị vận hành, xử lý xung đột vai trò khi thẩm định | Các quyết định nội bộ | NĐ 331 Đ4, Đ5, Đ18.4, Đ31.1 |
| 2 | Kiểm kê HTTT, phân loại thông tin và loại hình HTTT | Danh mục HTTT, phiếu xác định cấp độ | NĐ 331 Đ7, Đ8, Đ9 |
| 3 | Đánh giá rủi ro ANM lần đầu, đề xuất cấp độ | Báo cáo đánh giá rủi ro, cấp độ đề xuất | NĐ 331 Đ10.2.a, Đ11–Đ16 |
| 4 | Xây dựng, ban hành Quy chế bảo đảm ANM và các quy trình kèm theo | Quyết định ban hành Quy chế | NĐ 331 Đ30.3, Đ30.7 |
| 5 | Lập hồ sơ đề xuất cấp độ; thẩm định; phê duyệt | Quyết định phê duyệt cấp độ | NĐ 331 Đ20–Đ24 |
| 6 | Triển khai phương án bảo đảm ANM theo cấp độ | Hồ sơ triển khai, nghiệm thu | NĐ 331 Đ29, Đ30; TCVN 14423:2026 |
| 7 | Kiểm tra, đánh giá định kỳ; quản lý rủi ro | Báo cáo kiểm tra, kế hoạch khắc phục | NĐ 331 Đ27, Đ31.2.c |
| 8 | Đào tạo, tuyên truyền, diễn tập | Kế hoạch năm, hồ sơ đào tạo, diễn tập | NĐ 331 Đ31.3 |
| 9 | Báo cáo năm | Báo cáo theo Mẫu 08 | NĐ 331 Đ35, Đ36 |
| 10 | Rà soát song song nghĩa vụ bảo vệ dữ liệu cá nhân và nghĩa vụ của doanh nghiệp cung cấp dịch vụ (nếu thuộc diện) | Báo cáo rà soát | Luật 91/2025/QH15; NĐ 333 Đ16, Đ19, Đ20 |

**4. Nhân lực:** giao {{DON_VI_CHUYEN_TRACH_ANM}} làm đầu mối chương trình. Đề xuất cụ thể về tổ chức bộ phận chuyên trách, số lượng và tiêu chuẩn nhân sự sẽ trình tại tờ trình riêng.

**5. Các đề xuất chi tiết sẽ trình tiếp theo:** thành lập, chỉ định bộ phận chuyên trách ANM; ban hành Quy chế bảo đảm ANM; thành lập Hội đồng thẩm định độc lập (nếu cần); kinh phí giải pháp kỹ thuật; thuê dịch vụ đánh giá, kiểm thử; kế hoạch đào tạo, diễn tập; tuân thủ bảo vệ dữ liệu cá nhân; lưu trữ dữ liệu và nhật ký (nếu thuộc diện).

**III. KINH PHÍ DỰ KIẾN**

| STT | Hạng mục | Nội dung chi | Kinh phí dự kiến (đồng) | Ghi chú |
|---|---|---|---|---|
| 1 | Kiểm kê, đánh giá rủi ro, lập hồ sơ cấp độ | Nhân công nội bộ; thuê tư vấn (nếu có) | {{KINH_PHI}} | |
| 2 | Quy chế, quy trình | Soạn thảo, rà soát pháp lý | {{KINH_PHI}} | |
| 3 | Giải pháp kỹ thuật theo cấp độ | Theo tờ trình kinh phí giải pháp kỹ thuật | {{KINH_PHI}} | Ước tính sơ bộ |
| 4 | Đánh giá, kiểm thử độc lập | Theo tờ trình thuê dịch vụ | {{KINH_PHI}} | |
| 5 | Đào tạo, diễn tập | Theo kế hoạch năm | {{KINH_PHI}} | |
| 6 | Dự phòng | | {{KINH_PHI}} | |
| | **Tổng cộng** | | **{{TONG_KINH_PHI}}** | |

Nguồn kinh phí: {{NGUON_KINH_PHI}}. Tổ chức ngoài khu vực nhà nước tự bảo đảm kinh phí bảo vệ ANM (Luật 116 Đ38.2). Từng hạng mục sẽ được trình phê duyệt chi tiết theo quy chế tài chính của {{TEN_TO_CHUC}}.

**IV. TIẾN ĐỘ**

| Giai đoạn | Công việc chính | Đơn vị chủ trì | Thời hạn |
|---|---|---|---|
| 1 | Ban hành các quyết định phân vai | {{DON_VI_CHUYEN_TRACH_ANM}} | {{THOI_HAN}} |
| 2 | Kiểm kê HTTT, đánh giá rủi ro, đề xuất cấp độ | {{DON_VI_VAN_HANH}} | {{THOI_HAN}} |
| 3 | Ban hành Quy chế bảo đảm ANM | {{DON_VI_CHUYEN_TRACH_ANM}} | {{THOI_HAN}} |
| 4 | Lập hồ sơ, thẩm định, phê duyệt cấp độ | {{DON_VI_VAN_HANH}} | {{THOI_HAN}} |
| 5 | Triển khai phương án bảo đảm ANM | {{DON_VI_VAN_HANH}} | {{THOI_HAN}} |
| 6 | Kiểm tra, đánh giá; lập báo cáo năm | {{DON_VI_CHUYEN_TRACH_ANM}} | Trước 20/12 hằng năm (nội bộ) |

**V. TỔ CHỨC THỰC HIỆN**

1. {{DON_VI_CHUYEN_TRACH_ANM}}: đầu mối chương trình; tham mưu, đôn đốc, kiểm tra; thẩm định hồ sơ đề xuất cấp độ theo thẩm quyền; tổng hợp báo cáo năm.

2. {{DON_VI_VAN_HANH}}: kiểm kê HTTT; lập hồ sơ đề xuất cấp độ; triển khai biện pháp bảo đảm ANM theo phương án được duyệt.

3. {{PHONG_PHAP_CHE}}: rà soát pháp lý các quyết định, Quy chế, hợp đồng với nhà cung cấp; đầu mối các nghĩa vụ về bảo vệ dữ liệu cá nhân.

4. {{PHONG_NHAN_SU}}: bố trí nhân sự; đưa nghĩa vụ ANM vào nội quy lao động và bản mô tả công việc.

5. {{PHONG_TAI_CHINH}}: cân đối, bố trí kinh phí theo tiến độ.

6. {{DON_VI_DANH_GIA_DOC_LAP}}: thực hiện hoặc giám sát việc tự đánh giá, bảo đảm độc lập với đơn vị vận hành (NĐ 331 Đ31.2.c).

7. Các đơn vị nghiệp vụ sử dụng HTTT: phối hợp cung cấp thông tin kiểm kê, tham gia đào tạo, tuân thủ Quy chế.

**VI. KIẾN NGHỊ**

Kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt:

1. Chủ trương triển khai chương trình tuân thủ pháp luật về ANM với phạm vi, hạng mục và tiến độ nêu tại Mục II và Mục IV.

2. Giao {{DON_VI_CHUYEN_TRACH_ANM}} làm đầu mối; các đơn vị liên quan thực hiện theo Mục V.

3. Tổng mức kinh phí dự kiến {{TONG_KINH_PHI}}; từng hạng mục được trình phê duyệt chi tiết theo quy định nội bộ.

4. Giao {{DON_VI_CHUYEN_TRACH_ANM}} báo cáo tiến độ định kỳ {{CHU_KY_BAO_CAO_TIEN_DO}} cho {{CHUC_DANH_LANH_DAO}}.

| *Nơi nhận:*<br/>- Như trên;<br/>- {{PHONG_TAI_CHINH}};<br/>- {{PHONG_PHAP_CHE}};<br/>- Lưu: VT, {{VIET_TAT_PHONG}}. | **{{CHUC_DANH_NGUOI_TRINH_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{HO_TEN_NGUOI_TRINH}}** |
|:---|:---:|

| Ý KIẾN PHÊ DUYỆT CỦA LÃNH ĐẠO |
|:---|
| ☐ Đồng ý &nbsp;&nbsp; ☐ Đồng ý, có điều chỉnh &nbsp;&nbsp; ☐ Không đồng ý &nbsp;&nbsp; ☐ Ý kiến khác |
| Ý kiến cụ thể: ............................................................................................................ |
| Ngày ....../....../.......... &nbsp;&nbsp; {{CHUC_DANH_LANH_DAO}} *(ký, ghi rõ họ tên)* |

## Hướng dẫn điền

**Cách điền**

- Mục I.3 (hiện trạng): ghi đúng thực tế, không làm đẹp số liệu. Chỗ nào chưa có thì ghi "Chưa có". Tờ trình này là bằng chứng cho thấy chủ quản đã chỉ đạo thực hiện (NĐ 331 Đ27.1.a kiểm tra việc này).
- Mục I.2: xác định từng HTTT thuộc trường hợp chuyển tiếp nào. Mốc 12 tháng tại Luật 116 Đ45.1 **chỉ** áp dụng cho HTTT đã có cấp độ theo Luật 86/2015. Mốc tại NĐ 331 Đ39.1 **chỉ** áp dụng cho HTTT đang đầu tư, xây dựng trước 01/7/2026. Không dùng mốc 30/6/2027 làm hạn chung cho mọi hệ thống.
- **[CẦN ĐỐI CHIẾU]** Văn bản chỉ ghi "trong thời hạn 06/12 tháng kể từ ngày Luật có hiệu lực". Bộ khung dùng mốc an toàn **31/12/2026** và **30/6/2027** để lập kế hoạch. Cách tính chính xác theo Bộ luật Dân sự chưa được đối chiếu. Xem [`../00-tong-quan/lo-trinh-tuan-thu.md`](../00-tong-quan/lo-trinh-tuan-thu.md) mục A.1.
- **[CẦN ĐỐI CHIẾU]** HTTT đang vận hành nhưng chưa từng được xác định cấp độ không có điều khoản chuyển tiếp riêng (điểm B2 trong [`diem-can-doi-chieu.md`](../00-tong-quan/diem-can-doi-chieu.md)).
- **[CẦN ĐỐI CHIẾU]** Báo cáo năm kỳ đầu (2026): kỳ số liệu bắt đầu trước ngày NĐ 331 có hiệu lực, Bộ Công an chưa có hướng dẫn riêng. Khuyến nghị vẫn gửi trước 25/12/2026.
- **Phạm vi NĐ 331 (Đ2):** tổ chức không có HTTT nhà nước và không cung cấp dịch vụ trực tuyến thì chỉ được "khuyến khích" áp dụng NĐ 331. Tuy vậy Luật 116 Đ10 vẫn giao nhiệm vụ cho chủ quản HTTT, và NĐ 330 xử phạt không phân biệt (điểm A3 trong [`diem-can-doi-chieu.md`](../00-tong-quan/diem-can-doi-chieu.md)). Khi đó, sửa đoạn I.1 cho đúng tình trạng của tổ chức.
- **Không khẳng định cấp độ trong tờ trình này.** Cung cấp dịch vụ trực tuyến không có nghĩa là HTTT đương nhiên ở cấp 3. Cấp độ được xác định theo tiêu chí NĐ 331 Đ11–Đ16 (ví dụ: dịch vụ trực tuyến xử lý dữ liệu của từ 100.000 chủ thể DLCN cơ bản trở lên là cấp 3 theo Đ13.2.c; dưới ngưỡng này có thể là cấp 2 theo Đ12.2.b). Xem [`../01-xac-dinh-cap-do/tieu-chi-cap-do.md`](../01-xac-dinh-cap-do/tieu-chi-cap-do.md).
- Bảng rủi ro: chỉ giữ các hành vi liên quan tới tổ chức. Luôn ghi **mức cho tổ chức** (gấp đôi khung trong điều khoản ANM, NĐ 330 Đ7.1). Không cộng dồn các mức phạt thành một con số "tổng rủi ro", vì mỗi hành vi bị xử lý riêng theo hồ sơ vụ việc.

**Mẹo thuyết phục lãnh đạo**

- Đặt ba con số cạnh nhau: (1) tổng kinh phí đề xuất; (2) mức phạt tổ chức cho các hành vi ở bảng I.4; (3) chi phí gián tiếp khi bị buộc khắc phục hoặc phải dừng đưa hệ thống vào vận hành (NĐ 330 Đ23.1.c). Nói rõ tiền phạt thường nhỏ hơn chi phí gián đoạn kinh doanh và chi phí khắc phục.
- Nhấn mạnh trách nhiệm cá nhân của người đứng đầu (NĐ 331 Đ31.1.a) bằng giọng trung tính. Không dọa.
- Dùng lịch cố định: báo cáo năm 25/12 (NĐ 331 Đ35.4.b) là mốc lãnh đạo phải ký hằng năm. Nên hoàn thành phân vai và Quy chế trước mốc này.
- Đề xuất theo giai đoạn: xin chủ trương và tổng mức trước, xin phê duyệt chi tiết từng hạng mục sau. Cách này giúp lãnh đạo dễ quyết.

**Tài liệu đính kèm**

- [ ] Danh mục HTTT sơ bộ (tên, chức năng, đơn vị vận hành, số chủ thể DLCN ước tính).
- [ ] Bảng hiện trạng tuân thủ (có thể dùng checklist tại [`../03-yeu-cau-theo-cap-do/`](../03-yeu-cau-theo-cap-do/README.md)).
- [ ] Bảng mức phạt rút gọn (trích từ [`../05-nghia-vu-lien-quan/nd-330-muc-phat.md`](../05-nghia-vu-lien-quan/nd-330-muc-phat.md)).
- [ ] Lộ trình chi tiết (dựa trên [`../00-tong-quan/lo-trinh-tuan-thu.md`](../00-tong-quan/lo-trinh-tuan-thu.md) mục B).
- [ ] Dự toán sơ bộ.
