# Mẫu Bộ thông báo sự cố dữ liệu sinh trắc học, vị trí (K7)

> **Căn cứ:** Luật 91/2025/QH15 Đ23, Đ31.2, Đ31.4.b, Đ37.1.d, Đ37.2.e; NĐ 356/2025/NĐ-CP Đ4.1.đ, Đ4.1.h, Đ28, Đ29, Đ39.1, Mẫu số 08; NĐ 330/2026/NĐ-CP Đ7.1, Đ54, Đ70.1.đ–h; NQ 22/2026/NQ-CP Phụ lục I.7; Luật 134/2025/QH15 Đ3.5, Đ3.8, Đ12.2.b, Đ12.4; NĐ 142/2026/NĐ-CP Đ19, Đ46.1, Phụ lục Mẫu AI01a · **Đối chiếu văn bản gốc:** 29/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Ai dùng:** khách hàng (bên kiểm soát, hoặc bên kiểm soát và xử lý) khi xảy ra sự cố với **dữ liệu khuôn mặt** (template, ảnh đăng ký) hoặc **dữ liệu vị trí** (theo cách hiểu thận trọng: hành trình người, xe dựng từ nhiều camera — vùng xám V4). Nhà cung cấp {{TEN_NHA_CUNG_CAP}} khi là bên xử lý (M2–M4) phải **báo ngay cho khách hàng** (Luật 91 Đ23.1) và cung cấp thông tin kỹ thuật để khách điền mẫu; không gửi thay khách hàng, trừ khi được ủy quyền.

**Mẫu gồm 4 phần:** (a) Thông báo cho chủ thể bị ảnh hưởng; (b) Thông báo công khai trên website, ứng dụng; (c) Thông báo cho cơ quan chuyên trách theo Mẫu số 08 NĐ 356; (d) Biên bản xác nhận vi phạm.

**Ví dụ sự cố trong hệ thống AI vision:** lộ, bị tải trái phép cơ sở dữ liệu template hoặc ảnh đăng ký; mất, trộm đầu đọc khuôn mặt còn dữ liệu; tài khoản quản trị VMS, nền tảng cloud bị chiếm; mã độc tống tiền mã hóa đầu ghi, máy chủ nhận diện; nhân viên, kỹ thuật viên, đại lý sao chép dữ liệu khuôn mặt ra ngoài; dùng dữ liệu khuôn mặt chấm công để nhận diện trên camera giám sát (xử lý sai mục đích — Luật 91 Đ23.3.b).

### Mốc thời gian

| Mốc | Việc | Căn cứ |
|---|---|---|
| T0 | **Phát hiện** vi phạm. Ghi chính xác thời điểm — mọi thời hạn tính từ đây | NĐ 356 Đ29.1.a |
| Ngay khi phát hiện | Bên xử lý (nhà cung cấp) báo bên kiểm soát | Luật 91 Đ23.1; không báo kịp thời: 10–20 triệu đồng (NĐ 330 Đ54.1.a) |
| T0 → T0 + 72 giờ | Ngăn chặn, khắc phục; lập **biên bản xác nhận** (mẫu d) | Luật 91 Đ23.2, Đ23.4 |
| ≤ T0 + 72 giờ | **Thông báo cơ quan chuyên trách** (mẫu c) | Luật 91 Đ23.1; NĐ 356 Đ28, Đ29.1.b |
| ≤ T0 + 72 giờ | **Thông báo từng chủ thể bị ảnh hưởng** (mẫu a) | NĐ 356 Đ29.1.a |
| Không báo được hết trong 72 giờ vì lý do kỹ thuật, khẩn cấp | **Thông báo công khai** (mẫu b); gửi tiếp cho từng người ngay khi điều kiện cho phép | NĐ 356 Đ29.3 |
| Sau khi khắc phục xong | Lưu hồ sơ vi phạm **tối thiểu 05 năm** kể từ ngày khắc phục xong | NĐ 356 Đ29.1.c |

**Nơi gửi thông báo cho cơ quan chuyên trách:** Cơ quan chuyên trách bảo vệ dữ liệu cá nhân là đơn vị thuộc Bộ Công an (NĐ 356 Đ39.1); gửi trực tiếp hoặc qua **Cổng thông tin quốc gia về bảo vệ dữ liệu cá nhân** (NĐ 356 Đ28.2). NQ 22 chỉ phân cấp cho Công an tỉnh các thủ tục **hồ sơ DPIA, hồ sơ chuyển dữ liệu xuyên biên giới, cập nhật hồ sơ** và Giấy chứng nhận dịch vụ xử lý dữ liệu (Phụ lục I.7) — không điều chỉnh thông báo vi phạm (xem [`../05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md`](../05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md) mục 3 dòng 5 và mục 3.2). **[CẦN ĐỐI CHIẾU]** kênh tiếp nhận thực tế tại thời điểm xảy ra sự cố; không để việc tìm kênh làm trễ mốc 72 giờ.

**Sự cố an ninh mạng song song:** nếu sự cố đồng thời là sự cố an ninh mạng (tấn công, mã độc), thực hiện thêm quy trình ứng phó sự cố ANM: [`../04-chinh-sach-quy-trinh/quy-trinh-ung-pho-su-co.md`](../04-chinh-sach-quy-trinh/quy-trinh-ung-pho-su-co.md).

### Nhánh riêng: sự cố AI nghiêm trọng

Khách hàng là **bên triển khai** hệ thống AI (Luật 134 Đ3.5). Nếu sự kiện xảy ra trong hoạt động của hệ thống AI gây một trong các hậu quả dưới đây thì đó là **sự cố nghiêm trọng** (Luật 134 Đ3.8; NĐ 142 Đ19.1), phải báo cáo thêm qua **Cổng thông tin điện tử một cửa về trí tuệ nhân tạo**, độc lập với thông báo vi phạm DLCN:

- (a) thiệt hại về tính mạng hoặc tổn hại nghiêm trọng đến sức khỏe;
- (b) thiệt hại đáng kể về tài sản hoặc ảnh hưởng nghiêm trọng đến hoạt động của tổ chức;
- (c) xâm phạm nghiêm trọng quyền con người, quyền và lợi ích hợp pháp (ví dụ có thể xảy ra: nhận diện nhầm hàng loạt dẫn tới từ chối ra vào, trừ công, cảnh báo an ninh sai — **[CẦN ĐỐI CHIẾU]**);
- (d) gián đoạn nghiêm trọng dịch vụ công, dịch vụ thiết yếu, ảnh hưởng an ninh quốc gia, trật tự, an toàn xã hội.

| Mốc | Việc | Căn cứ |
|---|---|---|
| Ngay | Ghi nhận sự cố, hạn chế hậu quả (tạm dừng tính năng, chuyển phương thức thay thế), **thông báo cho nhà cung cấp** để phối hợp khắc phục | Luật 134 Đ12.2.b; NĐ 142 Đ19.2.a |
| T1 | **Thời điểm xác nhận sự cố:** khi có đủ cơ sở thông tin ban đầu để xác định sự cố đã thực sự xảy ra và có khả năng cao bắt nguồn từ lỗi của hệ thống AI; không chờ điều tra toàn diện. Khác T0 (thời điểm phát hiện) của thông báo DLCN | NĐ 142 Đ19.3.c |
| ≤ T1 + 72 giờ | Báo cáo sơ bộ **Mẫu AI01a** với hậu quả (a), (d), hoặc (c) không thể kiểm soát | NĐ 142 Đ19.3.a |
| ≤ T1 + 05 ngày làm việc | Báo cáo sơ bộ Mẫu AI01a với các sự cố nghiêm trọng còn lại | NĐ 142 Đ19.3.b |
| ≤ 15 ngày kể từ ngày nộp báo cáo sơ bộ | Báo cáo chính thức về kết quả khắc phục; lưu nhật ký hệ thống, dữ liệu liên quan đến sự cố | NĐ 142 Đ19.4 |

**Ai nộp:** nhà cung cấp **hoặc** bên triển khai nộp báo cáo (NĐ 142 Đ19.3). Thống nhất với nhà cung cấp bên nộp ngay khi nhận thông báo sự cố; ghi vào biên bản (mẫu d, mục 11). Nếu **không liên lạc được nhà cung cấp**, {{TEN_KHACH_HANG}} **tự báo cáo**. Nộp báo cáo sơ bộ đúng hạn không bị coi là thừa nhận lỗi kỹ thuật hoặc trách nhiệm pháp lý (NĐ 142 Đ19.3.c).

**Nội dung Mẫu AI01a:** tên, liên hệ tổ chức; tên hệ thống, mã định danh (AI-ID), mức độ rủi ro, nhà cung cấp, bên triển khai; thời điểm phát hiện; thời điểm xác nhận mối liên hệ nhân quả với hệ thống AI; địa điểm; mô tả; loại hậu quả và số người bị ảnh hưởng ước tính; trạng thái vận hành; nguyên nhân sơ bộ; biện pháp khẩn cấp; đánh giá sơ bộ thiệt hại; kiến nghị. Nhà cung cấp cung cấp AI-ID, mức độ rủi ro và thông tin kỹ thuật.

**Một kênh hay hai kênh:** NĐ 142 Đ19.5 quy định sự cố đồng thời phải báo cáo theo pháp luật an ninh mạng, bảo vệ DLCN thì "thực hiện theo quy định của pháp luật đó". Chưa rõ có miễn báo cáo qua Cổng AI không — **[CẦN ĐỐI CHIẾU]**. Khuyến nghị **báo cả hai kênh**: mẫu (c) cho cơ quan chuyên trách BVDLCN và Mẫu AI01a qua Cổng một cửa. Khi Cổng chưa vận hành chính thức, dùng phương thức do Bộ KH&CN công bố (NĐ 142 Đ46.1); địa chỉ tiếp nhận thực tế — **[CẦN ĐỐI CHIẾU]**.

### Nội dung bắt buộc

| Thông báo cho chủ thể — NĐ 356 Đ29.2 | Thông báo cho cơ quan chuyên trách — NĐ 356 Đ28.1, Mẫu 08 |
|---|---|
| a) Thời điểm và hình thức phát hiện | a) Tính chất vi phạm: thời gian, địa điểm, hành vi, tổ chức, cá nhân, loại dữ liệu, số lượng dữ liệu |
| b) Loại dữ liệu bị ảnh hưởng (vị trí, sinh trắc học hoặc cả hai) | b) Liên lạc của bộ phận, nhân sự BVDLCN hoặc tổ chức cung cấp dịch vụ BVDLCN |
| c) Mức độ nghiêm trọng, rủi ro với quyền, lợi ích của chủ thể | c) Hậu quả, thiệt hại có thể xảy ra |
| d) Biện pháp đã, đang, sẽ thực hiện để khắc phục, giảm thiểu | d) Biện pháp giải quyết, giảm thiểu |
| đ) Hướng dẫn chủ thể tự phòng ngừa, ngăn chặn | — |
| e) Liên hệ nhân sự BVDLCN; bộ phận tiếp nhận, xử lý sự cố | — |

### Rủi ro phạt (mức cho tổ chức — NĐ 330 Đ7.1)

| Hành vi | Mức phạt | Căn cứ |
|---|---|---|
| Không lập biên bản xác nhận vi phạm | 10–20 triệu đồng | NĐ 330 Đ54.1.b |
| Báo cáo nhưng che giấu, khai sai tính chất, quy mô, loại dữ liệu, số chủ thể | 10–20 triệu đồng | NĐ 330 Đ54.1.c |
| Không thông báo cơ quan chuyên trách | 20–40 triệu đồng | NĐ 330 Đ54.2 |
| Thông báo cơ quan chuyên trách chậm hơn 72 giờ | 40–60 triệu đồng | NĐ 330 Đ54.3 |
| Không ngăn chặn, không khắc phục; không phối hợp | 60–80 triệu đồng | NĐ 330 Đ54.4 |
| Sinh trắc học, vị trí: không thông báo cơ quan và chủ thể trong 72 giờ; thông báo chủ thể thiếu nội dung tối thiểu; không lưu hồ sơ 05 năm; không thông báo công khai khi không báo được hết | 50–70 triệu đồng mỗi hành vi | NĐ 330 Đ70.1.đ, e, g, h |

### Lưu ý

- **Không chờ đủ thông tin mới báo.** Gửi thông báo trong 72 giờ với thông tin đã có; ghi rõ phần "đang xác minh"; gửi thông báo bổ sung sau.
- **Không chép dữ liệu bị lộ vào thông báo.** Không đính kèm ảnh khuôn mặt, danh sách người bị ảnh hưởng vào thông báo công khai.
- **Template có "đảo ngược" được thành ảnh không** là câu hỏi kỹ thuật — không dùng lập luận "template không khôi phục được ảnh" để không thông báo. Template vẫn là dữ liệu sinh trắc học (Luật 91 Đ31.2). Ghi ý kiến kỹ thuật của nhà cung cấp (tài liệu B4) vào phần mức độ rủi ro.
- **Trẻ em** (điểm danh học sinh): thông báo cho cha, mẹ, người giám hộ (Luật 91 Đ24.2).

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_VB}}/TB-{{VIET_TAT_KH}} | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>THÔNG BÁO</b><br/><b>Về sự cố liên quan đến dữ liệu {{khuôn mặt/vị trí/khuôn mặt và vị trí}} của ông/bà</b></p>

Kính gửi: Ông/Bà ................................................

{{TEN_KHACH_HANG}} xin thông báo tới ông/bà về sự cố liên quan đến dữ liệu cá nhân của ông/bà trong hệ thống {{kiểm soát ra vào/chấm công/quản lý bãi xe}} tại {{DIA_DIEM_LAP_DAT}}, theo khoản 2 Điều 29 Nghị định số 356/2025/NĐ-CP.

**1. Thời điểm và cách phát hiện**

Chúng tôi phát hiện sự cố lúc {{THOI_DIEM_PHAT_HIEN_SU_CO}}, qua {{HINH_THUC_PHAT_HIEN}}. Sự cố xảy ra {{THOI_GIAN_XAY_RA_SU_CO}}. Tóm tắt: {{MO_TA_SU_CO}}.

**2. Dữ liệu của ông/bà bị ảnh hưởng**

Loại dữ liệu: **{{LOAI_DU_LIEU_ANH_HUONG}}**. Đây là dữ liệu {{sinh trắc học/vị trí}} — dữ liệu cá nhân nhạy cảm. Dữ liệu khác liên quan (nếu có): {{DU_LIEU_KHAC_ANH_HUONG}}.

**3. Mức độ nghiêm trọng và rủi ro có thể xảy ra**

Mức độ đánh giá: **{{MUC_DO_SU_CO}}**. Rủi ro có thể xảy ra với ông/bà: {{RUI_RO_VOI_CHU_THE}}.

**4. Chúng tôi đã, đang và sẽ làm gì**

- Đã làm: {{BIEN_PHAP_DA_THUC_HIEN}}.
- Đang làm: {{BIEN_PHAP_DANG_THUC_HIEN}}.
- Sẽ làm: {{BIEN_PHAP_SE_THUC_HIEN}}.
- Đã thông báo cho Cơ quan chuyên trách bảo vệ dữ liệu cá nhân, Bộ Công an ngày {{NGAY_THONG_BAO_CO_QUAN}}.

**5. Ông/bà nên làm gì**

- Nếu không muốn tiếp tục dùng nhận diện khuôn mặt: đề nghị chuyển sang {{PHUONG_THUC_THAY_THE}} và xóa dữ liệu khuôn mặt — chúng tôi thực hiện ngay, không cần lý do.
- Cảnh giác với cuộc gọi, tin nhắn, email tự xưng là {{TEN_KHACH_HANG}} hoặc cơ quan chức năng yêu cầu gửi ảnh chân dung, video khuôn mặt, mã OTP, thông tin tài khoản.
- Nếu ông/bà dùng khuôn mặt để xác thực tại dịch vụ khác (ngân hàng, ví điện tử, ứng dụng), theo dõi thông báo đăng nhập, giao dịch bất thường và liên hệ ngay nhà cung cấp dịch vụ đó khi có dấu hiệu lạ.
- {{HUONG_DAN_PHONG_NGUA_KHAC}}

**6. Liên hệ**

- Nhân sự bảo vệ dữ liệu cá nhân: {{NHAN_SU_BVDLCN_KH}} — {{DIEN_THOAI_BVDLCN_KH}} — {{EMAIL_BVDLCN_KH}}.
- Bộ phận tiếp nhận, xử lý sự cố: {{BO_PHAN_TIEP_NHAN_SU_CO_KH}} — {{DIEN_THOAI_SU_CO_KH}}.

Ông/bà có quyền khiếu nại, tố cáo, khởi kiện, yêu cầu bồi thường thiệt hại theo quy định của pháp luật (điểm đ khoản 1 Điều 4 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15). Chúng tôi thành thật xin lỗi vì sự cố này.

| **Nơi nhận:**<br/>- Như trên;<br/>- {{NHAN_SU_BVDLCN_KH}};<br/>- Lưu: VT, hồ sơ sự cố. | **{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

---

<p align="center"><b>THÔNG BÁO CÔNG KHAI</b><br/><b>Về sự cố dữ liệu {{khuôn mặt/vị trí}} tại {{TEN_KHACH_HANG}}</b><br/><i>Đăng ngày {{NGAY_DANG_THONG_BAO_CONG_KHAI}} trên {{WEBSITE_KH}} {{và ứng dụng}}</i></p>

{{TEN_KHACH_HANG}} thông báo công khai về sự cố liên quan đến dữ liệu {{khuôn mặt/vị trí}} vì chưa thể liên hệ trực tiếp với tất cả người bị ảnh hưởng trong thời hạn 72 giờ, theo điểm a khoản 3 Điều 29 Nghị định số 356/2025/NĐ-CP.

**Ai có thể bị ảnh hưởng:** {{NHOM_CHU_THE_ANH_HUONG}} *(ví dụ: người lao động và khách đã đăng ký khuôn mặt tại {{DIA_DIEM_LAP_DAT}} từ ngày ... đến ngày ...)*. Số người ước tính: {{SO_CHU_THE_ANH_HUONG}}.

**Chuyện gì đã xảy ra:** phát hiện lúc {{THOI_DIEM_PHAT_HIEN_SU_CO}} qua {{HINH_THUC_PHAT_HIEN}}. {{MO_TA_SU_CO}}.

**Dữ liệu bị ảnh hưởng:** {{LOAI_DU_LIEU_ANH_HUONG}} — dữ liệu cá nhân nhạy cảm.

**Mức độ và rủi ro:** {{MUC_DO_SU_CO}}. {{RUI_RO_VOI_CHU_THE}}.

**Chúng tôi đã làm:** {{BIEN_PHAP_DA_THUC_HIEN}}. Tiếp theo: {{BIEN_PHAP_SE_THUC_HIEN}}.

**Bạn nên làm:** cảnh giác với yêu cầu gửi ảnh, video khuôn mặt, mã OTP; theo dõi dịch vụ dùng xác thực khuôn mặt; liên hệ chúng tôi để chuyển sang {{PHUONG_THUC_THAY_THE}} và xóa dữ liệu khuôn mặt nếu muốn.

**Kiểm tra bạn có bị ảnh hưởng không:** liên hệ {{BO_PHAN_TIEP_NHAN_SU_CO_KH}} — {{DIEN_THOAI_SU_CO_KH}} — {{EMAIL_BVDLCN_KH}}. Chúng tôi sẽ gửi thông báo riêng cho từng người ngay khi điều kiện kỹ thuật cho phép.

Thông báo này được cập nhật khi có thông tin mới. Lần cập nhật gần nhất: ..................

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_VB}}/TB-{{VIET_TAT_KH}} | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>THÔNG BÁO</b><br/><b>VI PHẠM QUY ĐỊNH BẢO VỆ DỮ LIỆU CÁ NHÂN</b></p>

Kính gửi: Cơ quan chuyên trách bảo vệ dữ liệu cá nhân, Bộ Công an.

Thực hiện quy định về bảo vệ dữ liệu cá nhân, {{TEN_KHACH_HANG}} xin gửi Cơ quan chuyên trách bảo vệ dữ liệu cá nhân, Bộ Công an thông báo vi phạm quy định bảo vệ dữ liệu cá nhân, như sau:

**1. Thông tin về tổ chức, doanh nghiệp**

- Tên tổ chức, doanh nghiệp: {{TEN_KHACH_HANG}}
- Địa chỉ trụ sở chính: {{DIA_CHI_KHACH_HANG}}
- Địa chỉ trụ sở giao dịch: {{DIA_CHI_GIAO_DICH_KH}}
- Quyết định thành lập/Giấy chứng nhận đăng ký doanh nghiệp/Giấy chứng nhận đăng ký kinh doanh/Giấy chứng nhận đầu tư số: {{SO_GCN_DKDN_KH}} do {{NOI_CAP_GCN_DKDN_KH}} cấp ngày ... tháng ... năm ... tại ...
- Mã số thuế: {{MST_KHACH_HANG}}
- Điện thoại: {{DIEN_THOAI_KH}} Website: {{WEBSITE_KH}}
- Nhân sự chịu trách nhiệm bảo vệ dữ liệu cá nhân:
  - Họ và tên: {{NHAN_SU_BVDLCN_KH}}
  - Chức danh: {{CHUC_DANH_NHAN_SU_BVDLCN_KH}}
  - Số điện thoại liên lạc: {{DIEN_THOAI_BVDLCN_KH}}
  - Email: {{EMAIL_BVDLCN_KH}}

**2. Mô tả hành vi vi phạm quy định bảo vệ dữ liệu cá nhân**

- Thời gian: xảy ra {{THOI_GIAN_XAY_RA_SU_CO}}; phát hiện lúc {{THOI_DIEM_PHAT_HIEN_SU_CO}} qua {{HINH_THUC_PHAT_HIEN}}
- Địa điểm: {{DIA_DIEM_SU_CO}}
- Hành vi: {{MO_TA_SU_CO}}
- Tổ chức, cá nhân liên quan: {{TO_CHUC_CA_NHAN_LIEN_QUAN_SU_CO}} *(ví dụ: bên xử lý {{TEN_NHA_CUNG_CAP}} — M3/M4; người thực hiện hành vi nếu xác định được)*
- Các loại dữ liệu cá nhân và số lượng dữ liệu liên quan: {{LOAI_DU_LIEU_ANH_HUONG}}; {{SO_BAN_GHI_ANH_HUONG}} bản ghi của {{SO_CHU_THE_ANH_HUONG}} chủ thể dữ liệu. Trong đó dữ liệu sinh trắc học: ........; dữ liệu vị trí: ........
- Nhân sự chịu trách nhiệm bảo vệ dữ liệu cá nhân:
  - Họ và tên: {{NHAN_SU_BVDLCN_KH}}
  - Chức danh: {{CHUC_DANH_NHAN_SU_BVDLCN_KH}}
  - Số điện thoại liên lạc: {{DIEN_THOAI_BVDLCN_KH}}
  - Email: {{EMAIL_BVDLCN_KH}}
- Hậu quả xảy ra: {{HAU_QUA_SU_CO}}
- Biện pháp áp dụng: {{BIEN_PHAP_DA_THUC_HIEN}}; {{BIEN_PHAP_DANG_THUC_HIEN}}. Đã thông báo cho chủ thể dữ liệu bị ảnh hưởng theo khoản 1 Điều 29 Nghị định số 356/2025/NĐ-CP lúc ........, bằng hình thức ........, cho ........ người; {{đã/chưa}} thông báo công khai trên {{WEBSITE_KH}}.

**3. Tài liệu kèm theo**

a) Biên bản xác nhận về việc xảy ra hành vi vi phạm số ......../BB-{{VIET_TAT_KH}} ngày ........;

b) {{TAI_LIEU_KEM_THEO_SU_CO}} *(ví dụ: bản sao thông báo đã gửi chủ thể; tóm tắt nhật ký hệ thống; báo cáo kỹ thuật của nhà cung cấp)*.

**4. Cam kết**

{{TEN_KHACH_HANG}} xin cam kết chịu trách nhiệm về tính chính xác và tính hợp pháp của thông báo cùng các tài liệu kèm theo và cam kết tuân thủ các quy định của pháp luật.

| **Nơi nhận:**<br/>- Như trên;<br/>- {{NHAN_SU_BVDLCN_KH}};<br/>- Lưu: VT, hồ sơ sự cố. | **TM. TỔ CHỨC, DOANH NGHIỆP**<br/>**{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: ......./BB-{{VIET_TAT_KH}} | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>BIÊN BẢN</b><br/><b>Xác nhận về việc xảy ra hành vi vi phạm quy định về bảo vệ dữ liệu cá nhân</b></p>

*Căn cứ khoản 2 Điều 23 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15.*

Hôm nay, hồi ...... giờ ...... ngày ...... tháng ...... năm ......, tại {{DIA_CHI_KHACH_HANG}}, chúng tôi gồm:

**Bên kiểm soát dữ liệu:** {{TEN_KHACH_HANG}}

- Ông/bà {{DAI_DIEN_KHACH_HANG}} — {{CHUC_VU_DAI_DIEN_KH}}
- Ông/bà {{NHAN_SU_BVDLCN_KH}} — nhân sự bảo vệ dữ liệu cá nhân
- Ông/bà ........................ — {{BO_PHAN_TIEP_NHAN_SU_CO_KH}}

**Bên xử lý dữ liệu** *(M2–M4, nếu liên quan)*: {{TEN_NHA_CUNG_CAP}}

- Ông/bà ........................ — ........................

**Người phát hiện** *(nếu khác các bên trên)*: ........................

Cùng xác nhận các nội dung sau:

1. **Thời điểm, cách phát hiện:** {{THOI_DIEM_PHAT_HIEN_SU_CO}}; {{HINH_THUC_PHAT_HIEN}}; người phát hiện: ........................
2. **Thời gian, địa điểm xảy ra:** {{THOI_GIAN_XAY_RA_SU_CO}}; {{DIA_DIEM_SU_CO}}.
3. **Hệ thống, thiết bị liên quan:** ........................ *(đầu đọc, đầu ghi, máy chủ, nền tảng, tài khoản)*
4. **Mô tả hành vi vi phạm:** {{MO_TA_SU_CO}}.
5. **Dữ liệu bị ảnh hưởng:** {{LOAI_DU_LIEU_ANH_HUONG}}; {{SO_BAN_GHI_ANH_HUONG}} bản ghi; {{SO_CHU_THE_ANH_HUONG}} chủ thể; ☐ có dữ liệu sinh trắc học ☐ có dữ liệu vị trí ☐ có dữ liệu trẻ em.
6. **Nguyên nhân sơ bộ:** ........................ *(đang xác minh / đã xác định)*
7. **Hậu quả đã, có thể xảy ra:** {{HAU_QUA_SU_CO}}.
8. **Biện pháp đã thực hiện đến thời điểm lập biên bản:** {{BIEN_PHAP_DA_THUC_HIEN}}.
9. **Bằng chứng đã thu giữ, bảo toàn:** ........................ *(nhật ký hệ thống, ảnh chụp màn hình, bản sao ổ đĩa — kèm giá trị băm)*
10. **Thông báo:** cơ quan chuyên trách — ☐ đã gửi lúc ........ ☐ sẽ gửi trước ........ (mốc 72 giờ); chủ thể — ☐ đã gửi lúc ........ cho ........ người ☐ thông báo công khai lúc ........
11. **Sự cố nghiêm trọng của hệ thống trí tuệ nhân tạo** (khoản 1 Điều 19 Nghị định số 142/2026/NĐ-CP): ☐ không ☐ có — thời điểm xác nhận sự cố ........; báo cáo sơ bộ theo Mẫu AI01a qua Cổng thông tin điện tử một cửa về trí tuệ nhân tạo do ☐ {{TEN_NHA_CUNG_CAP}} ☐ {{TEN_KHACH_HANG}} gửi, ☐ đã gửi lúc ........ ☐ hạn gửi ........; hạn báo cáo chính thức ........
12. **Việc tiếp theo, người chịu trách nhiệm, thời hạn:** ........................

Biên bản lập thành ...... bản có giá trị như nhau; mỗi bên giữ 01 bản, 01 bản lưu hồ sơ sự cố (lưu tối thiểu 05 năm kể từ ngày khắc phục xong sự cố).

| **ĐẠI DIỆN BÊN KIỂM SOÁT DỮ LIỆU**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/><br/>**{{DAI_DIEN_KHACH_HANG}}** | **ĐẠI DIỆN BÊN XỬ LÝ DỮ LIỆU**<br/>*(Ký, ghi rõ họ tên — nếu có)*<br/><br/><br/><br/>........................................ |
|:---:|:---:|

## Hướng dẫn điền

| Chỗ cần điền | Cách điền |
|---|---|
| `{{THOI_DIEM_PHAT_HIEN_SU_CO}}` | Ngày, giờ, phút — mốc tính 72 giờ. Lấy từ cảnh báo hệ thống, email báo của nhà cung cấp, báo cáo của nhân viên |
| `{{HINH_THUC_PHAT_HIEN}}` | "cảnh báo đăng nhập bất thường trên VMS", "nhà cung cấp thông báo", "nhân viên báo mất đầu đọc" |
| `{{LOAI_DU_LIEU_ANH_HUONG}}` | Cụ thể: "đặc trưng khuôn mặt (template) và ảnh đăng ký", "họ tên, mã nhân viên gắn với template", "hành trình xe qua 5 cổng" |
| `{{MUC_DO_SU_CO}}`, `{{RUI_RO_VOI_CHU_THE}}` | Nêu thẳng, không giảm nhẹ: khả năng bị giả mạo khuôn mặt, bị theo dõi, lộ thông tin ra vào. Dùng ý kiến kỹ thuật của nhà cung cấp về khả năng khôi phục ảnh từ template, cơ chế chống giả mạo |
| `{{DIA_CHI_GIAO_DICH_KH}}`, `{{SO_GCN_DKDN_KH}}`, `{{NOI_CAP_GCN_DKDN_KH}}` | Theo Giấy chứng nhận đăng ký doanh nghiệp của khách hàng |
| Mẫu (c) | Giữ đúng cấu trúc Mẫu số 08 NĐ 356; phần "Đã thông báo cho chủ thể..." ở mục Biện pháp áp dụng là thông tin bổ sung cho sự cố sinh trắc học, vị trí |
| Mẫu (a) gửi qua email, tin nhắn | Bỏ bảng quốc hiệu và khối ký; giữ đủ 6 nội dung. Lưu bản đã gửi và nhật ký gửi |
| Biên bản (d), mục 11 | Đánh dấu "có" khi sự cố đạt một trong các hậu quả tại NĐ 142 Đ19.1. Ghi thời điểm xác nhận (T1) theo NĐ 142 Đ19.3.c, không dùng T0. Báo cáo Mẫu AI01a là văn bản riêng theo Phụ lục NĐ 142; mẫu này không thay thế |

## Bằng chứng cần lưu

Lưu toàn bộ hồ sơ **tối thiểu 05 năm kể từ ngày khắc phục xong** (NĐ 356 Đ29.1.c):

| Bằng chứng | Mục đích |
|---|---|
| Biên bản xác nhận vi phạm | Luật 91 Đ23.2; NĐ 330 Đ54.1.b |
| Thông báo đã gửi cơ quan chuyên trách, biên nhận hoặc ảnh chụp màn hình Cổng thông tin, thời điểm gửi | Chứng minh đúng hạn 72 giờ (NĐ 330 Đ54.3, Đ70.1.đ) |
| Thông báo đã gửi chủ thể, danh sách người nhận, nhật ký gửi; bản thông báo công khai và thời gian đăng | NĐ 356 Đ29.1.a, Đ29.3; NĐ 330 Đ70.1.e, h |
| Thông báo của nhà cung cấp (bên xử lý) gửi khách hàng | Luật 91 Đ23.1 |
| Nhật ký hệ thống, bằng chứng kỹ thuật kèm giá trị băm; báo cáo nguyên nhân, biện pháp khắc phục | Luật 91 Đ23.4; NĐ 330 Đ54.4 |
| *(Sự cố AI nghiêm trọng)* Mẫu AI01a đã nộp, xác nhận của Cổng một cửa, báo cáo chính thức; văn bản thống nhất bên nộp với nhà cung cấp; nhật ký hệ thống liên quan | NĐ 142 Đ19.3, Đ19.4 |
