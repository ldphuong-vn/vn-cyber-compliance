# Mẫu Tờ trình thuê dịch vụ đánh giá, kiểm thử xâm nhập an ninh mạng

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ27, Đ28.5–28.6, Đ31.2.c, Đ31.4, Đ32.5, Đ33.3–33.4, Đ34.1.đ; Luật 116/2025/QH15 Đ7.3, Đ7.5, Đ28.2.a, Đ29.1, Đ45.2; Luật 91/2025/QH15 Đ23.1; NĐ 330/2026/NĐ-CP Đ7.1, Đ16.1.đ, Đ23.2.a, Đ27.1.c, Đ35.4.a; TCVN 14423:2026 mục 5.7, 5.18, 6.18, 7.18 (tham chiếu số mục) · **Đối chiếu văn bản gốc:** 25/09/2026 · **Trạng thái:** Bản khung v0.1

> Phần TCVN 14423:2026 là tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI).

## Khi nào dùng

- **Ai trình:** đơn vị chuyên trách ANM. Nếu cần bảo đảm độc lập với vận hành thì đơn vị đánh giá độc lập (ví dụ Kiểm soát nội bộ) trình hoặc đồng trình.
- **Trình ai:** người đứng đầu chủ quản HTTT, hoặc cấp có thẩm quyền phê duyệt thuê dịch vụ.
- **Dùng lúc nào:** khi lập kế hoạch kiểm tra, đánh giá năm; hoặc khi rơi vào trường hợp **bắt buộc** thuê tổ chức chuyên môn theo NĐ 331 Đ31.2.c (ví dụ sau sự cố nghiêm trọng, sau thay đổi lớn về kiến trúc); hoặc trước khi đưa HTTT mới vào vận hành.
- **Kèm theo:** kế hoạch kiểm tra, đánh giá năm (mẫu tại [`../06-kiem-tra-bao-cao/kiem-tra-danh-gia-dinh-ky.md`](../06-kiem-tra-bao-cao/kiem-tra-danh-gia-dinh-ky.md) mục 6); đề cương phạm vi kiểm thử; hồ sơ năng lực, giấy phép của nhà cung cấp; dự thảo hợp đồng và thỏa thuận bảo mật.
- **Tài liệu liên quan:** khi nào bắt buộc tổ chức chuyên môn: [`../06-kiem-tra-bao-cao/kiem-tra-danh-gia-dinh-ky.md`](../06-kiem-tra-bao-cao/kiem-tra-danh-gia-dinh-ky.md) mục 3; quy trình quản lý nhà cung cấp: [`../04-chinh-sach-quy-trinh/quy-trinh-quan-ly-nha-cung-cap.md`](../04-chinh-sach-quy-trinh/quy-trinh-quan-ly-nha-cung-cap.md); đánh giá trước vận hành: [`../04-chinh-sach-quy-trinh/quy-trinh-danh-gia-truoc-van-hanh.md`](../04-chinh-sach-quy-trinh/quy-trinh-danh-gia-truoc-van-hanh.md).

---

| {{TEN_TO_CHUC}}<br/>**{{TEN_PHONG_TRINH}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_TO_TRINH}}/TTr-{{VIET_TAT_PHONG}} | *{{DIA_DANH}}, ngày {{NGAY}} tháng {{THANG}} năm {{NAM}}* |

<p align="center"><b>TỜ TRÌNH</b><br/><b>Về việc thuê dịch vụ kiểm tra, đánh giá và kiểm thử xâm nhập an ninh mạng độc lập</b></p>

Kính gửi: {{CHUC_DANH_LANH_DAO}}

*Căn cứ Luật An ninh mạng số 116/2025/QH15;*

*Căn cứ Nghị định số 331/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ về bảo vệ an ninh mạng đối với hệ thống thông tin;*

*Căn cứ {{CAN_CU_THAM_QUYEN}} và {{QUY_CHE_TAI_CHINH}};*

*Căn cứ Quy chế bảo đảm an ninh mạng ban hành kèm theo Quyết định số {{SO_NGAY_QD_QUY_CHE}}.*

{{TEN_PHONG_TRINH}} kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt việc thuê dịch vụ kiểm tra, đánh giá và kiểm thử xâm nhập ANM độc lập như sau:

*Viết tắt: Luật 116 là Luật An ninh mạng; NĐ 330, NĐ 331 là các Nghị định số 330/2026/NĐ-CP, 331/2026/NĐ-CP; ANM là an ninh mạng; HTTT là hệ thống thông tin; TCVN là TCVN 14423:2026. "Đ31.2.c" nghĩa là điểm c khoản 2 Điều 31.*

**I. SỰ CẦN THIẾT**

**1. Cơ sở pháp lý**

a) Chủ quản HTTT chỉ đạo, tổ chức kiểm tra, đánh giá ANM và quản lý rủi ro ANM, đồng thời chịu trách nhiệm trước pháp luật về tính trung thực, đầy đủ, chính xác của kết quả đánh giá (NĐ 331 Đ31.2.c).

b) Việc tự đánh giá nội bộ chỉ hợp lệ khi do bộ phận hoặc đơn vị **độc lập với đơn vị trực tiếp vận hành** hệ thống thực hiện (NĐ 331 Đ31.2.c).

c) Việc kiểm tra, đánh giá phải do **tổ chức chuyên môn** thực hiện (tổ chức được cơ quan có thẩm quyền cấp phép, tổ chức sự nghiệp nhà nước có chức năng phù hợp, hoặc tổ chức chuyên môn được cấp có thẩm quyền chỉ định) trong các trường hợp: HTTT cấp độ 5 hoặc HTTT quan trọng về an ninh quốc gia; khi xảy ra sự cố ANM nghiêm trọng hoặc có nguy cơ cao ảnh hưởng đến an ninh quốc gia, trật tự, an toàn xã hội; khi có thay đổi lớn về chức năng, phạm vi, kiến trúc hoặc công nghệ; khi có dấu hiệu việc tự đánh giá không trung thực, đầy đủ, chính xác; khi cơ quan nhà nước có thẩm quyền yêu cầu hoặc do chủ quản tổ chức thực hiện (NĐ 331 Đ31.2.c).

d) Nội dung kiểm tra, đánh giá gồm: kiểm tra tuân thủ (NĐ 331 Đ27.1); kiểm tra hiệu quả của biện pháp, trong đó có Quy chế và cấu hình (Đ27.2); dò quét mã độc, lỗ hổng, điểm yếu, thử nghiệm xâm nhập, đánh giá an toàn mã nguồn phần mềm nội bộ (Đ27.3). Hình thức kiểm tra: hộp đen, hộp xám, hộp trắng (Đ27.4).

đ) Hoạt động kiểm tra, đánh giá hiệu quả được thực hiện định kỳ theo cấp độ và mức độ rủi ro, đột xuất khi có dấu hiệu vi phạm hoặc nguy cơ, và theo yêu cầu của cơ quan có thẩm quyền (NĐ 331 Đ28.5.a).

e) Với HTTT cấp độ 3, TCVN (mục 5.18) yêu cầu có chương trình kiểm thử xâm nhập được phê duyệt và khắc phục sau kiểm thử. Với cấp 4, TCVN yêu cầu kiểm thử xâm nhập từ bên ngoài và từ bên trong, mỗi loại ít nhất 01 lần/năm (mục 6.18).

g) Dịch vụ kiểm tra, đánh giá ANM là dịch vụ ANM (Luật 116 Đ28.2.a). Doanh nghiệp kinh doanh dịch vụ này phải có giấy phép kinh doanh sản phẩm, dịch vụ ANM (Luật 116 Đ29.1).

**2. Lý do thuê tổ chức bên ngoài**

{{LY_DO_THUE_NGOAI}}

**3. Rủi ro nếu không thực hiện**

| Hành vi | Căn cứ | Mức phạt tổ chức (đồng) |
|---|---|---|
| Không kiểm tra, giám sát việc tuân thủ, lưu trữ nhật ký hoặc không đánh giá hiệu quả của biện pháp quản lý và kỹ thuật | NĐ 330 Đ23.2.a | 60–100 triệu |
| Không thực hiện hoặc thực hiện không đầy đủ yêu cầu của lực lượng chuyên trách về khắc phục điểm yếu, lỗ hổng bảo mật | NĐ 330 Đ27.1.c | 50–100 triệu |
| Phát hiện, thử nghiệm điểm yếu, lỗ hổng kỹ thuật của HTTT không đúng quy định (áp dụng cả với việc kiểm thử không được phê duyệt) | NĐ 330 Đ16.1.đ | 40–60 triệu |

Mức phạt ANM trong NĐ 330 là mức cho cá nhân; tổ chức bị phạt gấp hai lần (NĐ 330 Đ7.1). Bảng trên đã quy đổi. Ngoài ra, nếu kết quả tự đánh giá không bảo đảm tính độc lập thì chủ quản vẫn chịu trách nhiệm về tính trung thực của kết quả (NĐ 331 Đ31.2.c).

**II. NỘI DUNG ĐỀ XUẤT**

**1. Phạm vi dịch vụ**

| STT | Hạng mục | Đối tượng | Hình thức | Căn cứ |
|---|---|---|---|---|
| 1 | Đánh giá tuân thủ theo cấp độ và hiệu quả biện pháp | HTTT {{TEN_HE_THONG}} | Rà soát hồ sơ, phỏng vấn, lấy mẫu | NĐ 331 Đ27.1, Đ27.2 |
| 2 | Rà quét lỗ hổng, điểm yếu | {{PHAM_VI}} | Công cụ tự động và kiểm tra thủ công | NĐ 331 Đ27.3.a; TCVN 5.7 |
| 3 | Kiểm thử xâm nhập từ bên ngoài | Dịch vụ công khai trên Internet | Hộp đen hoặc hộp xám | NĐ 331 Đ27.3.a, Đ27.4 |
| 4 | Kiểm thử xâm nhập từ bên trong | Mạng nội bộ, vùng máy chủ | Hộp xám | NĐ 331 Đ27.3.a, Đ27.4 |
| 5 | Đánh giá an toàn mã nguồn phần mềm nội bộ | {{TEN_UNG_DUNG}} | Hộp trắng | NĐ 331 Đ27.3.c |
| 6 | Kiểm tra lại sau khắc phục | Các lỗ hổng đã phát hiện | Như hạng mục gốc | NĐ 331 Đ27.3.b, d |

**2. Yêu cầu đối với nhà cung cấp**

a) Là doanh nghiệp có giấy phép kinh doanh sản phẩm, dịch vụ ANM còn hiệu lực, có phạm vi bao gồm dịch vụ kiểm tra, đánh giá ANM (Luật 116 Đ28.2.a, Đ29.1). Giấy phép cấp theo Luật An toàn thông tin mạng số 86/2015/QH13 còn giá trị đến hết thời hạn ghi trên giấy phép (Luật 116 Đ45.2).

b) Không có quan hệ hợp đồng triển khai, vận hành hoặc cung cấp giải pháp cho HTTT được kiểm tra trong {{SO_THANG}} tháng gần nhất, để bảo đảm tính độc lập.

c) Nhân sự thực hiện có chứng chỉ chuyên môn về kiểm thử xâm nhập, đánh giá ANM; cung cấp danh sách, lý lịch nhân sự trước khi thực hiện.

d) Ký thỏa thuận bảo mật; cam kết không lưu giữ, sử dụng dữ liệu thu được ngoài mục đích hợp đồng; xóa dữ liệu và bàn giao bằng chứng xóa khi kết thúc.

**3. Điều kiện thực hiện kiểm thử**

a) Chỉ thực hiện theo văn bản phê duyệt của {{CHUC_DANH_LANH_DAO}}, ghi rõ phạm vi, thời gian, địa chỉ nguồn kiểm thử, phương pháp và đầu mối liên lạc. Xâm nhập trái phép, gây sự cố cho HTTT là hành vi bị nghiêm cấm (Luật 116 Đ7.3, Đ7.5).

b) Nếu HTTT đặt tại trung tâm dữ liệu hoặc điện toán đám mây thuê ngoài, {{DON_VI_VAN_HANH}} thông báo và xin chấp thuận của nhà cung cấp hạ tầng trước khi kiểm thử.

c) {{DON_VI_CHUYEN_TRACH_ANM}} làm đầu mối phối hợp với nhà cung cấp dịch vụ (NĐ 331 Đ32.5). {{DON_VI_VAN_HANH}} sẵn sàng phương án khôi phục trong thời gian kiểm thử.

**4. Sản phẩm bàn giao:** báo cáo kết quả theo từng hạng mục, mức độ nghiêm trọng của lỗ hổng, đề xuất khắc phục; báo cáo kiểm tra lại. Kết quả được đưa vào kế hoạch khắc phục (NĐ 331 Đ27.3.d) và báo cáo năm.

**III. KINH PHÍ DỰ KIẾN**

| STT | Hạng mục | Kinh phí dự kiến (đồng) | Ghi chú |
|---|---|---|---|
| 1 | Đánh giá tuân thủ và hiệu quả | {{KINH_PHI}} | |
| 2 | Rà quét lỗ hổng | {{KINH_PHI}} | |
| 3 | Kiểm thử xâm nhập từ bên ngoài | {{KINH_PHI}} | |
| 4 | Kiểm thử xâm nhập từ bên trong | {{KINH_PHI}} | |
| 5 | Đánh giá an toàn mã nguồn | {{KINH_PHI}} | |
| 6 | Kiểm tra lại sau khắc phục | {{KINH_PHI}} | |
| | **Tổng cộng** | **{{TONG_KINH_PHI}}** | Đã gồm thuế giá trị gia tăng |

Nguồn kinh phí: {{NGUON_KINH_PHI}}.

**IV. TIẾN ĐỘ**

| STT | Công việc | Đơn vị chủ trì | Thời hạn |
|---|---|---|---|
| 1 | Lựa chọn nhà cung cấp, ký hợp đồng và thỏa thuận bảo mật | {{DON_VI_MUA_SAM}} | {{THOI_HAN}} |
| 2 | Phê duyệt kế hoạch kiểm thử chi tiết | {{CHUC_DANH_LANH_DAO}} | {{THOI_HAN}} |
| 3 | Thực hiện đánh giá, kiểm thử | Nhà cung cấp | {{THOI_HAN}} |
| 4 | Khắc phục lỗ hổng | {{DON_VI_VAN_HANH}} | {{THOI_HAN}} |
| 5 | Kiểm tra lại; tổng hợp vào báo cáo năm | {{DON_VI_CHUYEN_TRACH_ANM}} | Trước 20/12 |

**V. TỔ CHỨC THỰC HIỆN**

1. {{DON_VI_CHUYEN_TRACH_ANM}}: xây dựng yêu cầu kỹ thuật, đánh giá năng lực nhà cung cấp, giám sát quá trình kiểm thử, nghiệm thu kết quả.

2. {{DON_VI_DANH_GIA_DOC_LAP}}: xác nhận tính độc lập của nhà cung cấp; theo dõi việc khắc phục.

3. {{DON_VI_VAN_HANH}}: cung cấp thông tin, tài khoản kiểm thử; chuẩn bị phương án khôi phục; khắc phục lỗ hổng.

4. {{DON_VI_MUA_SAM}}, {{PHONG_PHAP_CHE}}: tổ chức lựa chọn nhà cung cấp; rà soát hợp đồng và thỏa thuận bảo mật.

5. {{PHONG_TAI_CHINH}}: bố trí kinh phí.

**VI. KIẾN NGHỊ**

Kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt:

1. Chủ trương thuê tổ chức chuyên môn kiểm tra, đánh giá và kiểm thử xâm nhập ANM với phạm vi tại Mục II.1.

2. Yêu cầu đối với nhà cung cấp tại Mục II.2 và điều kiện thực hiện tại Mục II.3.

3. Kinh phí {{TONG_KINH_PHI}} từ {{NGUON_KINH_PHI}}.

4. Giao {{DON_VI_MUA_SAM}} tổ chức lựa chọn nhà cung cấp; {{DON_VI_CHUYEN_TRACH_ANM}} trình phê duyệt kế hoạch kiểm thử chi tiết trước khi thực hiện.

| *Nơi nhận:*<br/>- Như trên;<br/>- {{DON_VI_DANH_GIA_DOC_LAP}};<br/>- {{DON_VI_MUA_SAM}};<br/>- Lưu: VT, {{VIET_TAT_PHONG}}. | **{{CHUC_DANH_NGUOI_TRINH_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{HO_TEN_NGUOI_TRINH}}** |
|:---|:---:|

| Ý KIẾN PHÊ DUYỆT CỦA LÃNH ĐẠO |
|:---|
| ☐ Đồng ý &nbsp;&nbsp; ☐ Đồng ý, có điều chỉnh phạm vi &nbsp;&nbsp; ☐ Không đồng ý &nbsp;&nbsp; ☐ Ý kiến khác |
| Ý kiến cụ thể: ............................................................................................................ |
| Ngày ....../....../.......... &nbsp;&nbsp; {{CHUC_DANH_LANH_DAO}} *(ký, ghi rõ họ tên)* |

## Hướng dẫn điền

**Cách điền**

- `{{LY_DO_THUE_NGOAI}}`: ghi trường hợp cụ thể. Ví dụ:
  - "Thuộc trường hợp bắt buộc tại NĐ 331 Đ31.2.c: hệ thống vừa thay đổi kiến trúc (chuyển lên điện toán đám mây) ngày …";
  - "Công ty chưa có bộ phận độc lập với đơn vị vận hành đủ năng lực kiểm thử xâm nhập, nên chủ quản quyết định thuê tổ chức chuyên môn (NĐ 331 Đ31.2.c)".
- Không viết "pháp luật bắt buộc kiểm thử xâm nhập hằng năm" cho mọi hệ thống. NĐ 331 **không quy định tần suất cụ thể**. TCVN 14423:2026 chỉ ấn định tối thiểu 01 lần/năm cho mỗi loại từ **cấp 4** (mục 6.18), 01 lần/6 tháng cho **cấp 5** (mục 7.18). Cấp 3 để tổ chức tự chọn tần suất trong chương trình kiểm thử (mục 5.18); bộ khung khuyến nghị ít nhất 01 lần/năm. Cấp 1–2 không có nhóm yêu cầu kiểm tra ANM riêng.
- **[CẦN ĐỐI CHIẾU]** Điều kiện cấp phép kinh doanh dịch vụ ANM, phạm vi giấy phép và danh mục sản phẩm, dịch vụ quy định tại **NĐ 332/2026/NĐ-CP**. Văn bản này chưa có toàn văn trong bộ nguồn của repo. Trước khi ký hợp đồng, kiểm tra trực tiếp giấy phép của nhà cung cấp và đối chiếu NĐ 332.
- **[CẦN ĐỐI CHIẾU]** Biểu mẫu, tiêu chí, phương pháp tự đánh giá **chưa được ban hành**. Chờ hướng dẫn của Bộ Công an (NĐ 331 Đ31.2.c, Đ34.1.đ). Trong thời gian chờ, yêu cầu nhà cung cấp báo cáo theo cấu trúc tại [`../06-kiem-tra-bao-cao/kiem-tra-danh-gia-dinh-ky.md`](../06-kiem-tra-bao-cao/kiem-tra-danh-gia-dinh-ky.md) mục 7.
- **[CẦN ĐỐI CHIẾU]** Tiêu chí "sự cố ANM nghiêm trọng" (một trường hợp bắt buộc thuê tổ chức chuyên môn) chưa được định nghĩa. Chờ quy định của Bộ trưởng Bộ Công an về giám sát, ứng phó sự cố (NĐ 331 Đ28.6).
- Nhà cung cấp kinh doanh dịch vụ ANM không có giấy phép bị phạt 150–200 triệu đồng (tổ chức; NĐ 330 Đ35.4.a). Rủi ro này thuộc về nhà cung cấp. Nhưng nếu thuê nhà cung cấp không có giấy phép, kết quả đánh giá khó được chấp nhận là do "tổ chức chuyên môn được cấp phép" theo NĐ 331 Đ31.2.c.
- HTTT quân sự có quy định riêng (NĐ 331 Đ31.4). Không dùng mẫu này cho HTTT quân sự.

**Mẹo thuyết phục lãnh đạo**

- Lập luận về **trách nhiệm**: chủ quản chịu trách nhiệm trước pháp luật về tính trung thực của kết quả đánh giá (NĐ 331 Đ31.2.c). Đánh giá độc lập là cách bảo vệ người ký báo cáo năm.
- So sánh chi phí kiểm thử với chi phí một sự cố: thời gian gián đoạn, chi phí ứng cứu, nghĩa vụ thông báo vi phạm DLCN trong 72 giờ (Luật 91/2025/QH15 Đ23.1).
- Đề xuất hợp đồng khung nhiều năm cho các hạng mục định kỳ, kèm hạng mục đột xuất (sau sự cố, sau thay đổi lớn) để không phải trình lại khi phát sinh trường hợp bắt buộc.

**Tài liệu đính kèm**

- [ ] Kế hoạch kiểm tra, đánh giá năm.
- [ ] Đề cương phạm vi kiểm thử (danh sách tài sản, địa chỉ, thời gian dự kiến).
- [ ] Giấy phép kinh doanh sản phẩm, dịch vụ ANM và hồ sơ năng lực của nhà cung cấp.
- [ ] Cam kết độc lập, không xung đột lợi ích của nhà cung cấp.
- [ ] Dự thảo hợp đồng, thỏa thuận bảo mật.
