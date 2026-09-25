# Mẫu Tờ trình triển khai các nghĩa vụ bảo vệ dữ liệu cá nhân

> **Căn cứ:** Luật 91/2025/QH15 Đ2.7–2.9, Đ20–Đ23, Đ33.2, Đ38, Đ39.2; NĐ 356/2025/NĐ-CP Đ4.1, Đ13, Đ14, Đ17–Đ22, Đ41; NQ 22/2026/NQ-CP Đ6.1, Phụ lục I.7; NĐ 330/2026/NĐ-CP Đ3.1–3.2, Đ7.1, Đ7.4, Đ54, Đ55, Đ56, Đ57, Đ59 · **Đối chiếu văn bản gốc:** 25/09/2026 · **Trạng thái:** Bản khung v0.1

## Khi nào dùng

- **Ai trình:** Phòng Pháp chế hoặc nhân sự, bộ phận bảo vệ dữ liệu cá nhân (BVDLCN). Đơn vị chuyên trách ANM đồng trình phần kỹ thuật (mã hóa, sự cố).
- **Trình ai:** người đứng đầu tổ chức (bên kiểm soát dữ liệu cá nhân).
- **Dùng lúc nào:** khi bắt đầu một hoạt động xử lý dữ liệu cá nhân (DLCN) mới; khi rà soát lại toàn bộ nghĩa vụ BVDLCN; khi phát sinh chuyển dữ liệu ra nước ngoài (thuê cloud, dịch vụ SaaS ở nước ngoài, chia sẻ cho công ty mẹ); khi cân nhắc cung cấp dịch vụ có xử lý DLCN cho khách hàng. Hạn nộp hồ sơ là **60 ngày** kể từ ngày đầu tiên xử lý hoặc chuyển dữ liệu, nên cần trình sớm.
- **Kèm theo:** bảng kiểm kê hoạt động xử lý DLCN (loại dữ liệu, số chủ thể, vị trí lưu trữ, bên nhận); dự thảo hồ sơ đánh giá tác động xử lý DLCN (Mẫu 10 NĐ 356) và hồ sơ đánh giá tác động chuyển DLCN xuyên biên giới (Mẫu 09); dự thảo văn bản chỉ định nhân sự BVDLCN; kết luận rà soát "kinh doanh dịch vụ xử lý DLCN".
- **Tài liệu liên quan:** giao thoa ANM – DLCN: [`../05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md`](../05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md); kinh doanh dịch vụ xử lý DLCN: [`../05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md`](../05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md); mức phạt DLCN: [`../05-nghia-vu-lien-quan/nd-330-muc-phat.md`](../05-nghia-vu-lien-quan/nd-330-muc-phat.md) mục 3; quy trình sự cố có nhánh DLCN: [`../04-chinh-sach-quy-trinh/quy-trinh-ung-pho-su-co.md`](../04-chinh-sach-quy-trinh/quy-trinh-ung-pho-su-co.md).

---

| {{TEN_TO_CHUC}}<br/>**{{TEN_PHONG_TRINH}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_TO_TRINH}}/TTr-{{VIET_TAT_PHONG}} | *{{DIA_DANH}}, ngày {{NGAY}} tháng {{THANG}} năm {{NAM}}* |

<p align="center"><b>TỜ TRÌNH</b><br/><b>Về việc triển khai các nghĩa vụ bảo vệ dữ liệu cá nhân theo Luật Bảo vệ dữ liệu cá nhân</b></p>

Kính gửi: {{CHUC_DANH_LANH_DAO}}

*Căn cứ Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15;*

*Căn cứ Nghị định số 356/2025/NĐ-CP ngày 31 tháng 12 năm 2025 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật Bảo vệ dữ liệu cá nhân;*

*Căn cứ Nghị quyết số 22/2026/NQ-CP ngày 29 tháng 4 năm 2026 của Chính phủ cắt giảm, phân cấp, đơn giản hóa thủ tục hành chính và cắt giảm, đơn giản hóa điều kiện kinh doanh thuộc phạm vi quản lý của Bộ Công an;*

*Căn cứ Nghị định số 330/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ quy định xử phạt vi phạm hành chính trong lĩnh vực an ninh mạng và bảo vệ dữ liệu cá nhân;*

*Căn cứ {{CAN_CU_THAM_QUYEN}}.*

{{TEN_PHONG_TRINH}} kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt việc triển khai các nghĩa vụ BVDLCN của {{TEN_TO_CHUC}} như sau:

*Viết tắt: Luật 91 là Luật Bảo vệ dữ liệu cá nhân; NĐ 356, NĐ 330 là các Nghị định số 356/2025/NĐ-CP, 330/2026/NĐ-CP; NQ 22 là Nghị quyết số 22/2026/NQ-CP; DLCN là dữ liệu cá nhân; BVDLCN là bảo vệ dữ liệu cá nhân; DPIA là hồ sơ đánh giá tác động xử lý DLCN. "Đ21.1" nghĩa là khoản 1 Điều 21.*

**I. SỰ CẦN THIẾT**

**1. Cơ sở pháp lý**

| STT | Nghĩa vụ | Thời hạn | Căn cứ |
|---|---|---|---|
| 1 | Bên kiểm soát, bên kiểm soát và xử lý DLCN lập, lưu trữ DPIA và gửi 01 bản chính cho cơ quan chuyên trách BVDLCN | 60 ngày kể từ ngày đầu tiên xử lý DLCN | Luật 91 Đ21.1; NĐ 356 Đ19 |
| 2 | Lập hồ sơ đánh giá tác động chuyển DLCN xuyên biên giới khi chuyển dữ liệu ra hệ thống đặt ngoài lãnh thổ (kể cả cloud của nhà cung cấp ở nước ngoài), chuyển cho tổ chức ở nước ngoài, hoặc dùng nền tảng ở nước ngoài để xử lý DLCN thu thập tại Việt Nam; gửi 01 bản chính | 60 ngày kể từ ngày đầu tiên chuyển dữ liệu | Luật 91 Đ20.1–20.2; NĐ 356 Đ17.1, Đ18 |
| 3 | Cập nhật hai loại hồ sơ trên | Định kỳ 06 tháng khi có mục đích mới hoặc thay đổi các bên; trong 10 ngày khi tổ chức lại, thay đổi nhà cung cấp dịch vụ BVDLCN, thay đổi ngành nghề liên quan | Luật 91 Đ22; NĐ 356 Đ20 |
| 4 | Chỉ định bộ phận, nhân sự đủ điều kiện năng lực BVDLCN, hoặc thuê dịch vụ BVDLCN | Khi xử lý DLCN | Luật 91 Đ33.2; NĐ 356 Đ13 |
| 5 | Thông báo cơ quan chuyên trách BVDLCN khi phát hiện vi phạm có thể gây tổn hại quốc phòng, an ninh, trật tự hoặc tính mạng, sức khỏe, danh dự, tài sản của chủ thể; lập biên bản xác nhận vi phạm | Chậm nhất 72 giờ kể từ khi phát hiện | Luật 91 Đ23.1–23.2 |
| 6 | Kinh doanh một trong 09 dịch vụ xử lý DLCN phải có Giấy chứng nhận đủ điều kiện và đáp ứng điều kiện về nhân sự, hạ tầng, hồ sơ DPIA đạt yêu cầu | Trước khi kinh doanh | NĐ 356 Đ21, Đ22 |

Hồ sơ nộp qua Cổng Dịch vụ công quốc gia, trực tiếp hoặc bưu chính về Bộ Công an; Bộ Công an tiếp nhận, phân loại và chuyển Công an tỉnh, thành phố xử lý (NQ 22 Phụ lục I.7). Thủ tục theo NQ 22 áp dụng từ 29/4/2026 đến hết 01/3/2027 (NQ 22 Đ6.1).

**2. Hiện trạng**

| STT | Nội dung | Hiện trạng tại {{TEN_TO_CHUC}} |
|---|---|---|
| 1 | Vai trò của {{TEN_TO_CHUC}} với từng hoạt động xử lý (bên kiểm soát, bên xử lý, bên kiểm soát và xử lý) | {{TINH_TRANG}} |
| 2 | Số chủ thể DLCN cơ bản / nhạy cảm (tính tích lũy) | {{SO_CHU_THE_CO_BAN}} / {{SO_CHU_THE_NHAY_CAM}} |
| 3 | Hồ sơ DPIA | {{TINH_TRANG}} |
| 4 | Luồng dữ liệu ra nước ngoài (cloud, SaaS, công ty mẹ) | {{TINH_TRANG}} |
| 5 | Nhân sự BVDLCN | {{TINH_TRANG}} |
| 6 | Kết luận rà soát "kinh doanh dịch vụ xử lý DLCN" | {{TINH_TRANG}} |
| 7 | Quy trình thông báo vi phạm 72 giờ | {{TINH_TRANG}} |

**3. Diện miễn trừ và ngoại lệ**

a) Doanh nghiệp nhỏ, doanh nghiệp khởi nghiệp được **lựa chọn** thực hiện hay không thực hiện DPIA, cập nhật hồ sơ và chỉ định nhân sự BVDLCN trong 05 năm kể từ 01/01/2026. Hộ kinh doanh, doanh nghiệp siêu nhỏ không phải thực hiện các nghĩa vụ này (Luật 91 Đ38.2–38.3; NĐ 356 Đ41).

b) Không được hưởng miễn trừ nếu: kinh doanh dịch vụ xử lý DLCN; trực tiếp xử lý DLCN nhạy cảm; hoặc xử lý DLCN kể từ thời điểm quy mô đạt từ 100.000 chủ thể trở lên, tính trên kết quả tích lũy (NĐ 356 Đ41).

c) Miễn trừ **không** bao gồm hồ sơ chuyển DLCN xuyên biên giới (Luật 91 Đ20) và nghĩa vụ thông báo vi phạm (Luật 91 Đ23). Đây là cách đọc theo câu chữ Luật 91 Đ38.2–38.3 (xem Hướng dẫn điền, điểm C14).

d) Kết luận đối với {{TEN_TO_CHUC}}: {{KET_LUAN_MIEN_TRU}}.

**4. Rủi ro nếu không thực hiện (mức phạt tổ chức)**

| Hành vi | Căn cứ | Mức phạt tổ chức | Biện pháp khác |
|---|---|---|---|
| Không lập, duy trì DPIA; không gửi trong 60 ngày; không cập nhật 06 tháng hoặc 10 ngày | NĐ 330 Đ55.1 | 20–30 triệu đồng | Buộc dừng xử lý DLCN đến khi hoàn thành và được xác nhận, nếu không lập hồ sơ (Đ55.3.b) |
| Không lập, không nộp hồ sơ chuyển DLCN xuyên biên giới trong 60 ngày | NĐ 330 Đ56.1.a–b | 30–50 triệu đồng | Buộc ngừng chuyển dữ liệu đến khi hoàn thành (Đ56.6.b) |
| Chuyển xuyên biên giới không lập hồ sơ, dẫn đến lộ, mất DLCN | NĐ 330 Đ56.3–56.4 | 1–5% tổng doanh thu năm tài chính liền trước tại Việt Nam, theo số chủ thể bị ảnh hưởng; nếu không có doanh thu hoặc mức tính thấp hơn 03 tỷ đồng thì 200 triệu – 03 tỷ đồng | Đình chỉ chuyển DLCN xuyên biên giới 06–12 tháng (Đ56.5.b) |
| Không ban hành văn bản chỉ định nhân sự BVDLCN; nhân sự không đủ điều kiện | NĐ 330 Đ57.2 | 20–30 triệu đồng | Buộc thay nhân sự (Đ57.3.a) |
| Thông báo vi phạm cho cơ quan chuyên trách chậm hơn 72 giờ | NĐ 330 Đ54.3 | 40–60 triệu đồng | Buộc thông báo đúng hạn (Đ54.5.a) |
| Kinh doanh dịch vụ xử lý DLCN khi chưa có Giấy chứng nhận | NĐ 330 Đ59.3.a | 50–80 triệu đồng | Buộc hủy dữ liệu xử lý trái phép; nộp lại khoản thu (Đ59.5) |

Trong lĩnh vực BVDLCN, mức phạt ghi trong điều khoản là mức cho tổ chức (NĐ 330 Đ7.1). Mức tối đa đối với tổ chức là 03 tỷ đồng; riêng vi phạm về chuyển DLCN xuyên biên giới là 5% doanh thu năm trước liền kề nếu cao hơn (NĐ 330 Đ7.4).

**II. NỘI DUNG ĐỀ XUẤT**

1. **Kiểm kê hoạt động xử lý DLCN:** lập danh mục hoạt động xử lý theo từng HTTT, gồm loại dữ liệu (cơ bản, nhạy cảm), số chủ thể, vai trò của {{TEN_TO_CHUC}}, vị trí lưu trữ, bên nhận. Dùng chung bảng kiểm kê với việc xác định cấp độ HTTT.

2. **Hồ sơ DPIA:** lập DPIA cho {{PHAM_VI_DPIA}}; nộp trước {{THOI_HAN}}. Thiết lập lịch cập nhật 06 tháng và cơ chế cập nhật trong 10 ngày.

3. **Hồ sơ chuyển DLCN xuyên biên giới:** lập cho các luồng {{LUONG_CHUYEN_XUYEN_BIEN_GIOI}}; ký hoặc bổ sung hợp đồng ràng buộc trách nhiệm với bên nhận; ghi nhận căn cứ miễn đối với các luồng thuộc trường hợp được miễn (Luật 91 Đ20.6; NĐ 356 Đ17.3).

4. **Nhân sự BVDLCN:** chỉ định {{NHAN_SU_BVDLCN}} bằng văn bản chính thức, nêu rõ chức năng, nhiệm vụ, quyền hạn (NĐ 356 Đ13.1); ký thỏa thuận trách nhiệm bảo mật (NĐ 356 Đ13.5); bố trí đào tạo (NĐ 356 Đ13.6).

5. **Rà soát "kinh doanh dịch vụ xử lý DLCN":** đối chiếu các dịch vụ {{TEN_TO_CHUC}} cung cấp cho khách hàng với 09 loại dịch vụ tại NĐ 356 Đ21. Nếu thuộc phạm vi thì lập hồ sơ đề nghị cấp Giấy chứng nhận (NĐ 356 Đ22). Nếu còn vùng chưa rõ thì xin ý kiến bằng văn bản của cơ quan chuyên trách BVDLCN hoặc luật sư.

6. **Thông báo vi phạm 72 giờ:** tích hợp vào quy trình ứng phó sự cố ANM một nhánh đánh giá có liên quan DLCN hay không, lập biên bản xác nhận vi phạm và thông báo đúng hạn.

**III. KINH PHÍ DỰ KIẾN**

| STT | Nội dung | Kinh phí dự kiến (đồng) | Ghi chú |
|---|---|---|---|
| 1 | Kiểm kê dữ liệu, lập DPIA và hồ sơ chuyển xuyên biên giới | {{KINH_PHI}} | Nội bộ hoặc thuê tư vấn |
| 2 | Đào tạo nhân sự BVDLCN | {{KINH_PHI}} | NĐ 356 Đ13.6 |
| 3 | Rà soát, bổ sung hợp đồng với bên xử lý, bên nhận | {{KINH_PHI}} | |
| 4 | Tư vấn pháp lý về phạm vi "kinh doanh dịch vụ xử lý DLCN" | {{KINH_PHI}} | Nếu cần |
| 5 | Hồ sơ đề nghị cấp Giấy chứng nhận (nếu thuộc diện) | {{KINH_PHI}} | |
| | **Tổng cộng** | **{{TONG_KINH_PHI}}** | |

Nguồn kinh phí: {{NGUON_KINH_PHI}}.

**IV. TIẾN ĐỘ**

| STT | Công việc | Đơn vị chủ trì | Thời hạn |
|---|---|---|---|
| 1 | Chỉ định nhân sự BVDLCN | {{PHONG_PHAP_CHE}} | {{THOI_HAN}} |
| 2 | Hoàn thành kiểm kê hoạt động xử lý DLCN | {{NHAN_SU_BVDLCN}} | {{THOI_HAN}} |
| 3 | Kết luận phạm vi "kinh doanh dịch vụ xử lý DLCN" | {{PHONG_PHAP_CHE}} | {{THOI_HAN}} |
| 4 | Nộp DPIA | {{NHAN_SU_BVDLCN}} | Trong 60 ngày kể từ ngày đầu xử lý: {{THOI_HAN}} |
| 5 | Nộp hồ sơ chuyển DLCN xuyên biên giới | {{NHAN_SU_BVDLCN}} | Trong 60 ngày kể từ ngày đầu chuyển: {{THOI_HAN}} |
| 6 | Cập nhật quy trình ứng phó sự cố (nhánh DLCN 72 giờ) | {{DON_VI_CHUYEN_TRACH_ANM}} | {{THOI_HAN}} |

**V. TỔ CHỨC THỰC HIỆN**

1. {{PHONG_PHAP_CHE}} và {{NHAN_SU_BVDLCN}}: đầu mối; lập, nộp, cập nhật hồ sơ; rà soát hợp đồng; tiếp nhận yêu cầu của chủ thể dữ liệu và cơ quan chuyên trách.

2. {{DON_VI_CHUYEN_TRACH_ANM}}: cung cấp phương án bảo đảm an toàn, sơ đồ hệ thống cho hồ sơ; tích hợp nhánh DLCN vào quy trình sự cố.

3. {{DON_VI_VAN_HANH}}: cung cấp thông tin luồng dữ liệu, vị trí lưu trữ, nhà cung cấp cloud.

4. Các đơn vị nghiệp vụ có xử lý DLCN (kinh doanh, chăm sóc khách hàng, nhân sự): kê khai hoạt động xử lý; tuân thủ quy trình.

5. {{PHONG_TAI_CHINH}}: bố trí kinh phí.

**VI. KIẾN NGHỊ**

Kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt:

1. Các nội dung triển khai tại Mục II và tiến độ tại Mục IV.

2. Chỉ định {{NHAN_SU_BVDLCN}} làm nhân sự BVDLCN của {{TEN_TO_CHUC}} (văn bản chỉ định kèm theo).

3. Giao {{PHONG_PHAP_CHE}} ký nộp hồ sơ DPIA và hồ sơ chuyển DLCN xuyên biên giới theo ủy quyền của {{CHUC_DANH_LANH_DAO}}.

4. Kinh phí {{TONG_KINH_PHI}} từ {{NGUON_KINH_PHI}}.

| *Nơi nhận:*<br/>- Như trên;<br/>- {{DON_VI_CHUYEN_TRACH_ANM}};<br/>- {{PHONG_TAI_CHINH}};<br/>- Lưu: VT, {{VIET_TAT_PHONG}}. | **{{CHUC_DANH_NGUOI_TRINH_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{HO_TEN_NGUOI_TRINH}}** |
|:---|:---:|

| Ý KIẾN PHÊ DUYỆT CỦA LÃNH ĐẠO |
|:---|
| ☐ Đồng ý &nbsp;&nbsp; ☐ Đồng ý, có điều chỉnh &nbsp;&nbsp; ☐ Không đồng ý &nbsp;&nbsp; ☐ Ý kiến khác |
| Ý kiến cụ thể: ............................................................................................................ |
| Ngày ....../....../.......... &nbsp;&nbsp; {{CHUC_DANH_LANH_DAO}} *(ký, ghi rõ họ tên)* |

## Hướng dẫn điền

**Cách điền**

- **Đếm chủ thể tích lũy.** NĐ 356 Đ41 tính ngưỡng 100.000 chủ thể theo "kết quả tích lũy tổng lượng dữ liệu cá nhân đã xử lý", không phải số đang hoạt động. Ghi rõ phương pháp đếm.
- **DLCN nhạy cảm dễ bị bỏ sót:** ảnh thẻ căn cước (eKYC), tên đăng nhập và mật khẩu tài khoản định danh điện tử, thông tin thẻ và lịch sử giao dịch tài khoản ngân hàng, tài chính, dữ liệu theo dõi hành vi sử dụng dịch vụ trên không gian mạng, vị trí xác định qua dịch vụ định vị (NĐ 356 Đ4.1.h, i, k, l). Chỉ cần "trực tiếp xử lý DLCN nhạy cảm" là mất miễn trừ.
- `{{KET_LUAN_MIEN_TRU}}`: ghi một trong ba kết luận: "không thuộc diện miễn trừ", "thuộc diện được lựa chọn, đề nghị vẫn thực hiện", hoặc "thuộc diện được lựa chọn, đề nghị chưa thực hiện Đ21, Đ22, Đ33.2". Kèm căn cứ về quy mô doanh nghiệp. **[CẦN ĐỐI CHIẾU]** Tiêu chí doanh nghiệp nhỏ, siêu nhỏ, khởi nghiệp nằm trong pháp luật về hỗ trợ doanh nghiệp nhỏ và vừa, chưa có trong bộ nguồn.
- **[CẦN ĐỐI CHIẾU]** Miễn trừ gồm Luật 91 Đ22 (cập nhật hồ sơ, gồm cả hồ sơ chuyển xuyên biên giới) nhưng không gồm Đ20 (lập hồ sơ chuyển xuyên biên giới). Đọc theo câu chữ thì vẫn phải lập hồ sơ Đ20 (điểm C14 tại [`../00-tong-quan/diem-can-doi-chieu.md`](../00-tong-quan/diem-can-doi-chieu.md)).
- **[CẦN ĐỐI CHIẾU]** Bên xử lý có phải nộp DPIA không: Luật 91 Đ21.3 chỉ yêu cầu bên xử lý lập, lưu theo thỏa thuận; NĐ 356 Đ19 yêu cầu cả ba bên nộp. Khuyến nghị vẫn nộp (điểm C13).
- **[CẦN ĐỐI CHIẾU]** Nơi nhận hồ sơ: NĐ 330 Đ55.1.b ghi Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (Bộ Công an); NQ 22 quy định nộp về Bộ Công an rồi chuyển Công an tỉnh. Sau 01/3/2027 phải kiểm tra văn bản thay thế NQ 22 (điểm C9).
- **[CẦN ĐỐI CHIẾU]** Điều kiện kinh nghiệm của nhân sự BVDLCN: 02 năm (NĐ 356 Đ13.2.b), nhưng NĐ 330 Đ59.3.b dùng mức 03 năm và đào tạo chuyên sâu đối với tổ chức kinh doanh dịch vụ xử lý DLCN (điểm C11). Nếu thuộc diện kinh doanh dịch vụ, chọn người đáp ứng mức cao hơn và bố trí đủ ít nhất 03 nhân sự (NĐ 356 Đ22.2.c).
- **Vùng xám "kinh doanh dịch vụ xử lý DLCN"**: nền tảng SaaS, CRM, chatbot cho khách hàng dễ khớp nhiều khoản của NĐ 356 Đ21 cùng lúc. Việc phân biệt "xử lý cho chính mình" với "kinh doanh dịch vụ" là suy luận, chưa có hướng dẫn chính thức. Xem [`../05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md`](../05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md) mục 3. Không tự kết luận "không thuộc diện" khi chưa có căn cứ.
- Hồ sơ DPIA hoặc hồ sơ chuyển DLCN ra nước ngoài đã được tiếp nhận theo NĐ 13/2023/NĐ-CP trước 01/01/2026 thì tiếp tục được sử dụng, chỉ cần cập nhật theo Luật 91 (Luật 91 Đ39.2).

**Mẹo thuyết phục lãnh đạo**

- Nhấn mạnh **hệ quả vận hành** trước tiền phạt: không lập DPIA có thể bị **buộc dừng xử lý DLCN** (NĐ 330 Đ55.3.b); không lập hồ sơ chuyển xuyên biên giới có thể bị **buộc ngừng chuyển**, tức là dừng dùng cloud hoặc SaaS ở nước ngoài (Đ56.6.b).
- Mức phạt theo **doanh thu** (1–5%) chỉ áp dụng khi chuyển xuyên biên giới không lập hồ sơ, che giấu hoặc khai sai dòng dữ liệu **dẫn đến lộ, mất DLCN** (từ 10.000 chủ thể trở lên), hoặc tiếp tục chuyển sau quyết định yêu cầu ngừng của cơ quan chuyên trách (NĐ 330 Đ56.3). Trình bày đúng điều kiện này, không nói chung chung "phạt 5% doanh thu".
- Mốc 60 ngày tính từ ngày đầu xử lý. Với hoạt động đã bắt đầu từ lâu, nên nộp ngay. Thời hiệu xử phạt là 01 năm, tính từ ngày tổ chức thực hiện xong nghĩa vụ (NĐ 330 Đ3.1–3.2), nên việc nộp muộn vẫn có thể bị xử lý trong thời hạn này.

**Tài liệu đính kèm**

- [ ] Bảng kiểm kê hoạt động xử lý DLCN.
- [ ] Dự thảo hồ sơ DPIA (Mẫu 10) và hồ sơ chuyển xuyên biên giới (Mẫu 09) kèm hợp đồng, chính sách liên quan.
- [ ] Dự thảo văn bản chỉ định nhân sự BVDLCN, thỏa thuận bảo mật, hồ sơ năng lực.
- [ ] Biên bản rà soát 09 loại dịch vụ tại NĐ 356 Đ21.
