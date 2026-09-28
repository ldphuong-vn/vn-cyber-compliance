# Mẫu Phụ lục thỏa thuận xử lý dữ liệu cá nhân (DPA) — hợp đồng cung cấp giải pháp AI vision

> **Căn cứ:** Luật 91/2025/QH15 Đ2.7–2.9, Đ3, Đ9, Đ14.3, Đ17.1.d, Đ20, Đ21.3, Đ23.1, Đ25.3, Đ31.4, Đ32.2, Đ37; NĐ 356/2025/NĐ-CP Đ5, Đ7.1–7.2, Đ10.1, Đ12.2–12.4, Đ19.3, Đ22, Đ23.7, Đ27, Đ28, Đ29; NĐ 330/2026/NĐ-CP Đ44.2–44.3, Đ52.1.a, Đ52.3, Đ59.2.a, Đ59.3.a, Đ69.1.b, Đ70.2.b · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

Phụ lục này gắn vào hợp đồng cung cấp giải pháp AI vision (camera, VMS, nhận diện khuôn mặt, nhận diện biển số) khi **nhà cung cấp tiếp cận dữ liệu cá nhân** do khách hàng thu thập. Khách hàng là **Bên A — bên kiểm soát** (quyết định lắp camera ở đâu, nhận diện ai, để làm gì). Nhà cung cấp là **Bên B — bên xử lý** (xử lý theo yêu cầu của Bên A thông qua hợp đồng).

### Khi nào cần dùng

| Mô hình (bản thảo luận mục 2) | Có cần phụ lục này? | Các điều cần giữ |
|---|---|---|
| **M1** — bán thiết bị, phần mềm cài tại chỗ, Bên B không truy cập | Không bắt buộc. Nên thay bằng một điều khoản ngắn "Bên B không tiếp cận dữ liệu; nếu phát sinh hỗ trợ có tiếp cận thì ký phụ lục này trước" | — |
| **M2** — lắp đặt, cấu hình, đăng ký khuôn mặt hộ, bảo hành, hỗ trợ từ xa | **Có**. Bên B chỉ được tiếp nhận dữ liệu **sau khi** có thỏa thuận (Luật 91 Đ37.2.a) | Điều 1–14, 16–17; bỏ Điều 15; kèm [`c3-thoa-thuan-ho-tro-tu-xa.md`](c3-thoa-thuan-ho-tro-tu-xa.md) |
| **M3** — cloud/SaaS do Bên B vận hành | **Có** | Toàn bộ, gồm Điều 15 (Giấy chứng nhận) và các khoản ghi [M3/M4] |
| **M4** — vận hành, trực giám sát thay khách | **Có** | Như M3 |
| **M5** — Bên B dùng dữ liệu để huấn luyện mô hình | Không xử lý trong phụ lục này. Mặc định **cấm** (Điều 11). Nếu muốn làm, cần thỏa thuận riêng — xem [`b7-tuyen-bo-du-lieu-huan-luyen.md`](b7-tuyen-bo-du-lieu-huan-luyen.md) | — |

### Yêu cầu nguồn phụ lục phải đáp ứng

| Yêu cầu | Căn cứ | Điều trong phụ lục |
|---|---|---|
| Bên kiểm soát nêu rõ trách nhiệm, quyền, nghĩa vụ của các bên trong hợp đồng liên quan đến xử lý DLCN | Luật 91 Đ37.1.a | Toàn bộ |
| Bên xử lý chỉ tiếp nhận DLCN sau khi có thỏa thuận; xử lý đúng thỏa thuận; chịu trách nhiệm trước bên kiểm soát về thiệt hại | Luật 91 Đ37.2.a, b, d | Điều 4, 14 |
| Thỏa thuận chuyển giao DLCN cho bên xử lý phải nêu: mục đích; đối tượng chủ thể và loại dữ liệu; thời hạn xử lý, xóa, hủy; cơ sở pháp lý; trách nhiệm bảo vệ; trách nhiệm thực hiện quyền chủ thể; trách nhiệm phối hợp khi có vi phạm | NĐ 356 Đ7.1.a–g; Luật 91 Đ17.1.d | Điều 2, 3, 5, 8, 9, 13; Phụ lục 1 |
| Chuyển giao DLCN nhạy cảm phải có bảo mật vật lý thiết bị lưu, truyền; mã hóa; ẩn danh; biện pháp bảo mật khác | NĐ 356 Đ7.2 | Điều 5; Phụ lục 2 |
| Hợp đồng với nhà cung cấp cloud: tuân thủ pháp luật VN, thông tin nhân sự BVDLCN, luồng dữ liệu và vai trò, yêu cầu bảo mật, thông báo ngay thay đổi, thời hạn xử lý và xóa, quyền chủ thể, phân quyền truy cập; mã hóa khi lưu và truyền | NĐ 356 Đ12.2.a–g, Đ12.4 | Điều 5, 6, 7, 8, 13, 16 |
| Tổ chức kinh doanh dịch vụ xử lý DLCN khi là bên xử lý phải **yêu cầu bên kiểm soát xin đồng ý** trước khi cung cấp dịch vụ; chủ thể phải biết loại dữ liệu, mục đích và **tổ chức cung cấp dịch vụ xử lý** | NĐ 356 Đ23.7 | Điều 3.3 [M3/M4] |
| Bên xử lý phát hiện vi phạm phải thông báo kịp thời cho bên kiểm soát | Luật 91 Đ23.1 | Điều 9 |
| Bảo vệ dữ liệu sinh trắc học: bảo mật vật lý, hạn chế truy cập, hệ thống theo dõi phát hiện xâm phạm | Luật 91 Đ31.4.a | Điều 5; Phụ lục 2 |
| Xóa, hủy bằng biện pháp an toàn, ngăn khôi phục trái phép | Luật 91 Đ14.3 | Điều 13 |
| Thời hạn thực hiện yêu cầu của chủ thể khi phải yêu cầu bên xử lý: ngừng xử lý 20 ngày; xem, chỉnh sửa, cung cấp 15 ngày; xóa 30 ngày. Bên xử lý bị phạt nếu không làm đúng thời hạn bên kiểm soát xác định | NĐ 356 Đ5.2–5.4; NĐ 330 Đ44.2, Đ44.3 | Điều 8 |

### Rủi ro phạt nếu thiếu (mức cho tổ chức)

| Hành vi | Mức phạt | Căn cứ |
|---|---|---|
| Thỏa thuận chuyển giao không xác định trách nhiệm bảo vệ, trách nhiệm thực hiện quyền chủ thể, trách nhiệm phối hợp khi vi phạm | 20–30 triệu | NĐ 330 Đ52.1.a |
| Chuyển giao DLCN nhạy cảm (template khuôn mặt) không có bảo mật vật lý, mã hóa, ẩn danh | 50–80 triệu | NĐ 330 Đ52.3 |
| Dùng cloud mà hợp đồng không xác định luồng dữ liệu, vai trò, yêu cầu bảo mật | 20–50 triệu | NĐ 330 Đ69.1.b |
| Bên xử lý không ngừng xử lý, không chỉnh sửa, cung cấp, xóa, hạn chế trong thời hạn bên kiểm soát xác định | 20–30 triệu | NĐ 330 Đ44.2 |
| [M3/M4] Không yêu cầu bên kiểm soát xin đồng ý trước khi cung cấp dịch vụ | 30–50 triệu | NĐ 330 Đ59.2.a |
| [M3/M4] Kinh doanh dịch vụ xử lý DLCN khi chưa có Giấy chứng nhận | 50–80 triệu | NĐ 330 Đ59.3.a |
| Dùng dữ liệu sinh trắc học vượt mục đích ban đầu mà chưa có đồng ý (ví dụ tự ý dùng để huấn luyện) | 70–150 triệu | NĐ 330 Đ70.2.b |

### Lưu ý khi điền

- **Không đổi vai trò cho "đẹp" hợp đồng.** Nếu Bên B tự quyết định mục đích (ví dụ phân tích dữ liệu khách để bán báo cáo, huấn luyện mô hình), Bên B là bên kiểm soát cho phần đó, phụ lục này không che được.
- **Khoản ghi [M3/M4]** chỉ giữ khi Bên B vận hành nền tảng; **khoản ghi [M2]** chỉ giữ khi có lắp đặt, hỗ trợ tại chỗ hoặc từ xa. Xóa nhãn trước khi ký.
- **Thời hạn báo sự cố của Bên B** (Điều 9) nên ngắn hơn nhiều so với 72 giờ, để Bên A kịp đánh giá và thông báo cơ quan chuyên trách, chủ thể trong 72 giờ.
- **Hồ sơ DPIA của bên xử lý:** Luật 91 Đ21.3 cho phép bên xử lý lập, lưu hồ sơ "theo thỏa thuận với bên kiểm soát", nhưng NĐ 356 Đ19.1, Đ19.4 buộc cả bên xử lý lập và nộp. Bộ khung khuyến nghị Bên B **vẫn lập và nộp** (điểm C13 tại [`../00-tong-quan/diem-can-doi-chieu.md`](../00-tong-quan/diem-can-doi-chieu.md)). Điều 10.4 viết theo hướng đó.
- **Chuyển xuyên biên giới:** Luật 91 Đ20 không nói rõ khi bên xử lý đặt máy chủ ở nước ngoài thì bên nào là "bên chuyển" phải lập hồ sơ — **[CẦN ĐỐI CHIẾU]**. Điều 7 chọn cách an toàn: mặc định lưu tại Việt Nam; nếu có chuyển, hai bên cùng xác định bên lập hồ sơ và Bên B cung cấp đủ thông tin.
- **Vùng xám V2** (hỗ trợ từ xa có biến M2 thành "vận hành thay mặt bên kiểm soát" theo NĐ 356 Đ21.1 không): xem bản thảo luận mục 8.

---

<p align="center"><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br/><b>Độc lập - Tự do - Hạnh phúc</b></p>

<p align="center"><b>PHỤ LỤC SỐ {{SO_PHU_LUC}}</b><br/><b>THỎA THUẬN XỬ LÝ DỮ LIỆU CÁ NHÂN</b><br/><i>Kèm theo Hợp đồng số {{SO_HOP_DONG}} ngày {{NGAY_HOP_DONG}} về {{TEN_HOP_DONG}}</i></p>

*Căn cứ Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15;*

*Căn cứ Nghị định số 356/2025/NĐ-CP ngày 31 tháng 12 năm 2025 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật Bảo vệ dữ liệu cá nhân;*

*Căn cứ Hợp đồng số {{SO_HOP_DONG}} ngày {{NGAY_HOP_DONG}} giữa hai bên (sau đây gọi là "Hợp đồng").*

Hôm nay, ngày ... tháng ... năm ..., tại {{DIA_DANH}}, chúng tôi gồm:

**BÊN A (Bên kiểm soát dữ liệu cá nhân): {{TEN_KHACH_HANG}}**

- Địa chỉ: {{DIA_CHI_KHACH_HANG}}
- Mã số thuế: {{MST_KHACH_HANG}}
- Người đại diện: {{DAI_DIEN_KHACH_HANG}} — Chức vụ: {{CHUC_VU_DAI_DIEN_KH}}
- Đầu mối bảo vệ dữ liệu cá nhân: {{NHAN_SU_BVDLCN_KH}} — Điện thoại: {{DIEN_THOAI_BVDLCN_KH}} — Email: {{EMAIL_BVDLCN_KH}}

**BÊN B (Bên xử lý dữ liệu cá nhân): {{TEN_NHA_CUNG_CAP}}**

- Địa chỉ: {{DIA_CHI_NHA_CUNG_CAP}}
- Mã số thuế: {{MST_NHA_CUNG_CAP}}
- Người đại diện: {{DAI_DIEN_NHA_CUNG_CAP}} — Chức vụ: {{CHUC_VU_DAI_DIEN_NCC}}
- Đầu mối bảo vệ dữ liệu cá nhân: {{NHAN_SU_BVDLCN_NCC}} — Điện thoại: {{DIEN_THOAI_BVDLCN_NCC}} — Email: {{EMAIL_BVDLCN_NCC}}

Hai bên thống nhất ký Phụ lục này với các nội dung sau:

### Điều 1. Giải thích từ ngữ và vai trò của các bên

1. Trong Phụ lục này, các từ ngữ sau được hiểu như sau:
   a) **Hệ thống** là giải pháp {{TEN_SAN_PHAM}} phiên bản {{PHIEN_BAN_SAN_PHAM}} gồm camera, thiết bị biên, phần mềm quản lý video và các mô-đun nhận diện do Bên B cung cấp theo Hợp đồng{{kể cả nền tảng cloud do Bên B vận hành, nếu có}};
   b) **Dữ liệu** là dữ liệu cá nhân do Bên A thu thập qua Hệ thống và dữ liệu cá nhân Bên A cung cấp cho Bên B để thực hiện Hợp đồng, được mô tả tại Phụ lục 1;
   c) **Dữ liệu sinh trắc học** là ảnh khuôn mặt dùng để đăng ký và đặc trưng khuôn mặt (template, vector đặc trưng) được trích xuất để xác định một người cụ thể, thuộc dữ liệu cá nhân nhạy cảm theo khoản 2 Điều 31 Luật Bảo vệ dữ liệu cá nhân và điểm đ khoản 1 Điều 4 Nghị định số 356/2025/NĐ-CP;
   d) **Sự cố dữ liệu** là việc Dữ liệu bị truy cập, thu thập, sao chép, tiết lộ, thay đổi, xóa, mất trái phép, hoặc bị xử lý sai mục đích, sai chỉ dẫn của Bên A.
2. Đối với Dữ liệu, Bên A là bên kiểm soát dữ liệu cá nhân; Bên B là bên xử lý dữ liệu cá nhân, chỉ xử lý theo yêu cầu của Bên A thông qua Hợp đồng và Phụ lục này (khoản 7, khoản 8 Điều 2 Luật Bảo vệ dữ liệu cá nhân).
3. Đối với thông tin của người đại diện, đầu mối liên hệ, tài khoản quản trị của Bên A mà Bên B dùng để giao kết, thực hiện Hợp đồng, mỗi bên là bên kiểm soát độc lập và tự chịu trách nhiệm theo chính sách bảo vệ dữ liệu cá nhân của mình.

### Điều 2. Phạm vi, mục đích và thời hạn xử lý

1. Bên B chỉ xử lý Dữ liệu trong phạm vi các hoạt động được liệt kê tại Phụ lục 1, gồm: {{lắp đặt, cấu hình; đăng ký khuôn mặt theo danh sách Bên A cung cấp; bảo hành, hỗ trợ kỹ thuật tại chỗ và từ xa; lưu trữ, vận hành, sao lưu trên nền tảng cloud; trực giám sát}}.
2. Mục đích xử lý do Bên A quyết định và được ghi tại Phụ lục 1. Bên B không xử lý Dữ liệu cho bất kỳ mục đích nào khác.
3. Bên B xử lý Dữ liệu trong thời hạn hiệu lực của Hợp đồng và thời hạn cần thiết để thực hiện Điều 13.

### Điều 3. Cơ sở pháp lý và sự đồng ý

1. Bên A chịu trách nhiệm bảo đảm có cơ sở pháp lý hợp lệ cho việc thu thập, xử lý Dữ liệu, gồm:
   a) Xin và lưu trữ sự đồng ý của chủ thể dữ liệu trước khi đăng ký Dữ liệu sinh trắc học, bảo đảm chủ thể được thông báo rằng đây là dữ liệu cá nhân nhạy cảm (Điều 9 Luật Bảo vệ dữ liệu cá nhân; khoản 4 Điều 6 Nghị định số 356/2025/NĐ-CP);
   b) Thông báo hoặc đặt biển báo để chủ thể biết mình đang bị ghi hình (khoản 2 Điều 32 Luật Bảo vệ dữ liệu cá nhân);
   c) Bảo đảm người lao động biết rõ biện pháp công nghệ, kỹ thuật được áp dụng trong quản lý người lao động (khoản 3 Điều 25 Luật Bảo vệ dữ liệu cá nhân);
   d) Cung cấp phương thức thay thế không dùng sinh trắc học (thẻ, mã PIN, mã QR hoặc {{...}}) cho chủ thể không đồng ý hoặc rút lại sự đồng ý.
2. Trước mỗi lần yêu cầu Bên B đăng ký khuôn mặt, Bên A xác nhận bằng văn bản hoặc trên Hệ thống rằng các chủ thể trong danh sách đã đồng ý. Bên B có quyền từ chối đăng ký khi chưa nhận được xác nhận này.
3. [M3/M4] Theo khoản 7 Điều 23 Nghị định số 356/2025/NĐ-CP, Bên B yêu cầu và Bên A cam kết xin sự đồng ý của chủ thể trước khi Bên B cung cấp dịch vụ; trong thông báo gửi chủ thể, Bên A nêu rõ loại dữ liệu cá nhân được xử lý, mục đích xử lý và tên tổ chức cung cấp dịch vụ xử lý dữ liệu cá nhân là **{{TEN_NHA_CUNG_CAP}}**.
4. Bên B cung cấp trên Hệ thống chức năng ghi nhật ký sự đồng ý (người đồng ý, thời điểm, mục đích, phiên bản thông báo) và chức năng rút lại sự đồng ý để Bên A sử dụng.

### Điều 4. Nghĩa vụ của Bên B

1. Chỉ xử lý Dữ liệu theo Hợp đồng, Phụ lục này và chỉ dẫn bằng văn bản của Bên A (điểm b khoản 2 Điều 37 Luật Bảo vệ dữ liệu cá nhân). Nếu Bên B cho rằng một chỉ dẫn trái pháp luật, Bên B thông báo ngay cho Bên A và được tạm dừng thực hiện chỉ dẫn đó.
2. Không bán, cho thuê, chia sẻ, công khai Dữ liệu; không dùng Dữ liệu để huấn luyện, kiểm thử, cải tiến mô hình trí tuệ nhân tạo hoặc cho mục đích thương mại của Bên B, trừ khi có thỏa thuận riêng theo Điều 11.
3. Không tái nhận dạng dữ liệu đã được khử nhận dạng (điểm b khoản 6 Điều 14 Luật Bảo vệ dữ liệu cá nhân).
4. Thực hiện đầy đủ biện pháp bảo vệ dữ liệu cá nhân tại Điều 5 và Phụ lục 2; ngăn chặn hoạt động thu thập Dữ liệu trái phép từ hệ thống, thiết bị, dịch vụ của mình (điểm c, điểm đ khoản 2 Điều 37 Luật Bảo vệ dữ liệu cá nhân).
5. Chỉ cho phép nhân sự thật sự cần thiết tiếp cận Dữ liệu; mỗi nhân sự đã ký cam kết bảo mật (theo mẫu [`c4-cam-ket-bao-mat-nhan-su-dai-ly.md`](c4-cam-ket-bao-mat-nhan-su-dai-ly.md)) và được đào tạo về bảo vệ dữ liệu cá nhân.
6. [M2] Thực hiện hỗ trợ kỹ thuật, truy cập từ xa theo Thỏa thuận hỗ trợ từ xa kèm theo Hợp đồng; không sao chép Dữ liệu ra khỏi Hệ thống của Bên A khi chưa có đồng ý bằng văn bản của Bên A.
7. Phối hợp với Bộ Công an, cơ quan nhà nước có thẩm quyền trong bảo vệ dữ liệu cá nhân (điểm e khoản 2 Điều 37 Luật Bảo vệ dữ liệu cá nhân). Khi nhận yêu cầu cung cấp Dữ liệu trực tiếp từ cơ quan có thẩm quyền, Bên B thông báo cho Bên A trong phạm vi pháp luật cho phép.

### Điều 5. Biện pháp bảo vệ Dữ liệu

1. Bên B áp dụng tối thiểu các biện pháp kỹ thuật, tổ chức tại Phụ lục 2, gồm:
   a) Mã hóa Dữ liệu sinh trắc học và video khi lưu trữ và khi truyền; [M3/M4] mã hóa toàn bộ Dữ liệu trên điện toán đám mây ở trạng thái nghỉ và khi truyền (khoản 4 Điều 12 Nghị định số 356/2025/NĐ-CP);
   b) Bảo mật vật lý đối với thiết bị lưu trữ và truyền tải Dữ liệu sinh trắc học; hạn chế quyền truy cập; hệ thống theo dõi để phòng ngừa, phát hiện hành vi xâm phạm (điểm a khoản 4 Điều 31 Luật Bảo vệ dữ liệu cá nhân);
   c) Xác thực đa yếu tố cho tài khoản quản trị; phân quyền theo vai trò; ghi và lưu nhật ký truy cập, xuất, xóa Dữ liệu tối thiểu {{THOI_HAN_LUU_NHAT_KY}};
   d) Khi chuyển Dữ liệu sinh trắc học giữa các thiết bị, hệ thống hoặc giữa hai bên: dùng kênh mã hóa, không gửi qua thư điện tử, ứng dụng nhắn tin hoặc thiết bị lưu trữ di động không mã hóa (khoản 2 Điều 7 Nghị định số 356/2025/NĐ-CP).
2. Bên B rà soát, cập nhật biện pháp bảo vệ ít nhất {{CHU_KY_RA_SOAT}} và khi có thay đổi Hệ thống; [M3/M4] thông báo ngay cho Bên A mọi thay đổi hệ thống, hạ tầng có thể ảnh hưởng tới Dữ liệu (điểm d khoản 2 Điều 12 Nghị định số 356/2025/NĐ-CP).

### Điều 6. Bên xử lý phụ

1. Bên B chỉ sử dụng bên xử lý phụ (nhà cung cấp hạ tầng, đại lý lắp đặt, nhà thầu phụ) có tên tại Phụ lục 3.
2. Bên B thông báo cho Bên A bằng văn bản ít nhất {{SO_NGAY_BAO_TRUOC}} ngày trước khi bổ sung hoặc thay thế bên xử lý phụ. Bên A có quyền phản đối có lý do; nếu hai bên không thống nhất được, Bên A có quyền chấm dứt phần dịch vụ liên quan mà không bị phạt.
3. Bên B ràng buộc bên xử lý phụ bằng văn bản với nghĩa vụ bảo vệ dữ liệu cá nhân không thấp hơn Phụ lục này (điểm b khoản 3 Điều 12 Nghị định số 356/2025/NĐ-CP) và chịu trách nhiệm trước Bên A về vi phạm của bên xử lý phụ.

### Điều 7. Vị trí lưu trữ và chuyển dữ liệu xuyên biên giới

1. Dữ liệu được lưu trữ, xử lý tại: {{VI_TRI_MAY_CHU}}.
2. Bên B không chuyển Dữ liệu ra ngoài lãnh thổ Việt Nam, không cho phép truy cập Dữ liệu từ ngoài lãnh thổ Việt Nam và không sử dụng nền tảng ở ngoài lãnh thổ Việt Nam để xử lý Dữ liệu, trừ khi được Bên A chấp thuận trước bằng văn bản.
3. Trường hợp được chấp thuận, hai bên xác định bằng văn bản bên có nghĩa vụ lập hồ sơ đánh giá tác động chuyển dữ liệu cá nhân xuyên biên giới theo Điều 20 Luật Bảo vệ dữ liệu cá nhân; bên còn lại cung cấp đầy đủ, kịp thời thông tin cần thiết để lập, cập nhật hồ sơ.

### Điều 8. Hỗ trợ thực hiện quyền của chủ thể dữ liệu

1. Khi nhận trực tiếp yêu cầu của chủ thể dữ liệu, Bên B chuyển cho Bên A trong {{SO_NGAY_LAM_VIEC_CHUYEN_YEU_CAU}} ngày làm việc và không tự trả lời nội dung, trừ khi Bên A yêu cầu.
2. Theo yêu cầu của Bên A, Bên B thực hiện việc xem, cung cấp, chỉnh sửa, xóa (kể cả xóa template khuôn mặt), hạn chế, ngừng xử lý Dữ liệu trong thời hạn Bên A yêu cầu, **không vượt quá** thời hạn áp dụng khi phải yêu cầu bên xử lý thực hiện theo khoản 2, khoản 3, khoản 4 Điều 5 Nghị định số 356/2025/NĐ-CP và khoản 3 Điều 44 Nghị định số 330/2026/NĐ-CP: ngừng xử lý, hạn chế xử lý 20 ngày; xem, chỉnh sửa, cung cấp 15 ngày; xóa 30 ngày.
3. Bên B cung cấp trên Hệ thống công cụ để Bên A: tìm và xuất hình ảnh của một chủ thể có làm mờ người không liên quan; xóa template theo từng người; xóa hàng loạt khi người lao động nghỉ việc; tạm ngừng xử lý tự động đối với một chủ thể.

### Điều 9. Thông báo và xử lý sự cố dữ liệu

1. Bên B thông báo cho Bên A về Sự cố dữ liệu **trong vòng {{SO_GIO_BAO_SU_CO}} giờ** kể từ khi phát hiện (khoản 1 Điều 23 Luật Bảo vệ dữ liệu cá nhân), qua đầu mối nêu tại Điều 16, kèm các thông tin đã có: thời gian, địa điểm, hành vi; loại và số lượng dữ liệu, số chủ thể liên quan; hậu quả có thể xảy ra; biện pháp đã áp dụng (khoản 1 Điều 28 Nghị định số 356/2025/NĐ-CP). Thông tin chưa có được bổ sung ngay khi có.
2. Khi Sự cố dữ liệu liên quan đến Dữ liệu sinh trắc học, Bên B cung cấp thông tin cần thiết để Bên A thông báo cho chủ thể bị ảnh hưởng trong 72 giờ và lập hồ sơ vi phạm theo Điều 29 Nghị định số 356/2025/NĐ-CP.
3. Bên B phối hợp ngăn chặn, khắc phục; bảo toàn nhật ký, chứng cứ; không tự thông báo cho chủ thể dữ liệu hoặc công khai Sự cố dữ liệu khi chưa thống nhất với Bên A, trừ trường hợp pháp luật hoặc cơ quan có thẩm quyền yêu cầu.

### Điều 10. Hỗ trợ đánh giá tác động và kiểm tra

1. Bên B cung cấp cho Bên A tài liệu mô tả luồng dữ liệu, kiến trúc, biện pháp bảo mật của Hệ thống và phần kỹ thuật đã điền sẵn của hồ sơ đánh giá tác động xử lý dữ liệu cá nhân (khoản 3 Điều 19 Nghị định số 356/2025/NĐ-CP), cập nhật khi Hệ thống thay đổi.
2. Bên B phối hợp khi cơ quan chuyên trách bảo vệ dữ liệu cá nhân kiểm tra hoạt động xử lý Dữ liệu.
3. Bên A hoặc bên thứ ba độc lập do Bên A chỉ định có quyền kiểm tra việc tuân thủ Phụ lục này {{tần suất}} và khi xảy ra Sự cố dữ liệu, với thông báo trước {{SO_NGAY_BAO_TRUOC_KIEM_TRA}} ngày làm việc. Bên B có thể thay thế bằng báo cáo đánh giá độc lập còn hiệu lực nếu Bên A chấp nhận.
4. Bên B lập, lưu trữ hồ sơ đánh giá tác động xử lý dữ liệu cá nhân đối với hoạt động xử lý theo Phụ lục này và thực hiện nghĩa vụ gửi hồ sơ theo quy định pháp luật.

### Điều 11. Dữ liệu huấn luyện và cải tiến sản phẩm

1. Bên B **không** sử dụng Dữ liệu để huấn luyện, kiểm thử hoặc cải tiến mô hình trí tuệ nhân tạo.
2. Bên B được sử dụng dữ liệu kỹ thuật không chứa dữ liệu cá nhân (thông số hoạt động, mã lỗi, thống kê tổng hợp đã khử nhận dạng) để bảo trì, cải tiến Hệ thống.
3. Mọi ngoại lệ đối với khoản 1 phải lập thành thỏa thuận riêng, nêu rõ phạm vi dữ liệu, biện pháp khử nhận dạng, cơ sở pháp lý đối với từng chủ thể và thời hạn xóa.

### Điều 12. Nhân sự của Bên B làm việc tại cơ sở Bên A

1. [M2] Nhân sự lắp đặt, bảo hành của Bên B hoặc của đại lý Bên B làm việc tại cơ sở Bên A tuân thủ nội quy an ninh của Bên A; chỉ đăng ký, sửa, xóa khuôn mặt theo danh sách hoặc yêu cầu bằng văn bản của Bên A.
2. Dữ liệu dùng để kiểm thử khi lắp đặt phải được xóa trước khi bàn giao; việc xóa được ghi trong biên bản bàn giao.

### Điều 13. Trả lại và xóa Dữ liệu khi kết thúc

1. Trong {{SO_NGAY_TRA_DU_LIEU}} ngày kể từ khi Hợp đồng chấm dứt hoặc khi Bên A yêu cầu, Bên B trả lại Dữ liệu cho Bên A ở định dạng {{DINH_DANG_TRA_DU_LIEU}}, sau đó xóa, hủy toàn bộ Dữ liệu còn lưu, kể cả bản sao lưu, bằng biện pháp an toàn, ngăn chặn khôi phục trái phép (khoản 3 Điều 14 Luật Bảo vệ dữ liệu cá nhân).
2. Bản sao lưu không thể xóa ngay vì lý do kỹ thuật được mã hóa, cách ly và xóa theo chu kỳ sao lưu, không quá {{SO_NGAY_XOA_BAN_SAO_LUU}} ngày.
3. Bên B gửi Bên A biên bản xác nhận xóa, nêu phạm vi, phương thức, thời điểm xóa.
4. Bên B chỉ được giữ lại Dữ liệu khi pháp luật bắt buộc và phải thông báo cho Bên A căn cứ, phạm vi, thời hạn giữ lại.

### Điều 14. Trách nhiệm và bồi thường

1. Bên A chịu trách nhiệm trước chủ thể dữ liệu về thiệt hại do quá trình xử lý Dữ liệu gây ra (điểm g khoản 1 Điều 37 Luật Bảo vệ dữ liệu cá nhân), và chịu trách nhiệm về cơ sở pháp lý, sự đồng ý, thông báo, biển báo thuộc phạm vi Điều 3.
2. Bên B chịu trách nhiệm trước Bên A về thiệt hại do xử lý Dữ liệu trái Phụ lục này, trái chỉ dẫn của Bên A hoặc do không thực hiện biện pháp bảo vệ tại Điều 5 (điểm d khoản 2 Điều 37 Luật Bảo vệ dữ liệu cá nhân), kể cả các khoản tiền phạt, chi phí khắc phục mà Bên A phải chịu do lỗi của Bên B.
3. Giới hạn trách nhiệm theo Hợp đồng {{áp dụng/không áp dụng}} đối với vi phạm Phụ lục này; không áp dụng đối với hành vi cố ý hoặc vi phạm Điều 4 khoản 2.

### Điều 15. Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ xử lý dữ liệu cá nhân [M3/M4]

1. Bên B cam kết có Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ xử lý dữ liệu cá nhân số {{SO_GIAY_CHUNG_NHAN}} cấp ngày {{NGAY_CAP_GIAY_CHUNG_NHAN}} còn hiệu lực trong suốt thời gian cung cấp dịch vụ (Điều 22, Điều 25 Nghị định số 356/2025/NĐ-CP).
2. Bên B thông báo ngay cho Bên A khi Giấy chứng nhận bị thu hồi hoặc Bên B không còn đáp ứng điều kiện (Điều 27 Nghị định số 356/2025/NĐ-CP). Khi đó Bên A có quyền chấm dứt Hợp đồng mà không bị phạt và Bên B thực hiện Điều 13.

### Điều 16. Đầu mối bảo vệ dữ liệu cá nhân

Mỗi bên chỉ định đầu mối nêu ở phần đầu Phụ lục này. Thay đổi đầu mối được thông báo bằng văn bản trong {{SO_NGAY_THONG_BAO_DOI_DAU_MOI}} ngày làm việc (điểm a khoản 2 Điều 12 Nghị định số 356/2025/NĐ-CP).

### Điều 17. Hiệu lực

1. Phụ lục này là bộ phận không tách rời của Hợp đồng, có hiệu lực từ ngày ký. Các Điều 4 khoản 2, Điều 9, Điều 13, Điều 14 tiếp tục có hiệu lực sau khi Hợp đồng chấm dứt cho đến khi Dữ liệu đã được xóa hoặc trả lại toàn bộ.
2. Khi có mâu thuẫn giữa Phụ lục này và Hợp đồng về xử lý dữ liệu cá nhân, Phụ lục này được ưu tiên áp dụng.
3. Phụ lục được lập thành {{SO_BAN}} bản có giá trị pháp lý như nhau, mỗi bên giữ {{SO_BAN_MOI_BEN}} bản.

| **ĐẠI DIỆN BÊN A**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/><br/>**{{DAI_DIEN_KHACH_HANG}}** | **ĐẠI DIỆN BÊN B**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/><br/>**{{DAI_DIEN_NHA_CUNG_CAP}}** |
|:---:|:---:|

---

## Phụ lục 1. Mô tả hoạt động xử lý dữ liệu

| Đối tượng chủ thể | Số lượng dự kiến | Loại dữ liệu | Phân loại | Hoạt động xử lý của Bên B | Mục đích (do Bên A quyết định) | Nơi lưu | Thời hạn lưu |
|---|---|---|---|---|---|---|---|
| Người lao động của Bên A | {{SO_NHAN_VIEN}} | Họ tên, mã nhân viên, phòng ban; ảnh đăng ký; template khuôn mặt; nhật ký ra vào, chấm công | Cơ bản; **nhạy cảm (sinh trắc học)** | Đăng ký khuôn mặt; lưu trữ; so khớp; hỗ trợ kỹ thuật | Kiểm soát ra vào; chấm công | {{VI_TRI_MAY_CHU}} | Template: đến khi nghỉ việc hoặc rút đồng ý; nhật ký: {{THOI_HAN_LUU_NHAT_KY_RA_VAO}} |
| Khách đến làm việc | {{SO_KHACH_DU_KIEN}}/tháng | Họ tên, đơn vị, số điện thoại; ảnh chụp tại kiosk; template khuôn mặt (nếu dùng) | Cơ bản; nhạy cảm (nếu có template) | Lưu trữ; so khớp trong thời gian hiệu lực thẻ khách | Kiểm soát khách ra vào | {{VI_TRI_MAY_CHU}} | {{THOI_HAN_LUU_DU_LIEU_KHACH}} |
| Người xuất hiện trong vùng camera | Không xác định | Hình ảnh, video | Cơ bản | Lưu trữ; hỗ trợ trích xuất theo yêu cầu Bên A | An ninh, bảo vệ tài sản | {{VI_TRI_MAY_CHU}} | {{THOI_HAN_LUU_VIDEO}} |
| Chủ phương tiện ra vào bãi xe | {{SO_XE_DANG_KY}} xe đăng ký | Biển số xe, ảnh phương tiện, thời điểm ra vào; thông tin vé tháng | Cơ bản | Nhận diện biển số; lưu trữ; đối chiếu danh sách | Quản lý bãi xe | {{VI_TRI_MAY_CHU}} | {{THOI_HAN_LUU_BIEN_SO}} |
| {{...}} | | | | | | | |

## Phụ lục 2. Biện pháp kỹ thuật và tổ chức

| Nhóm | Biện pháp Bên B áp dụng | Bằng chứng Bên B cung cấp khi được yêu cầu |
|---|---|---|
| Mã hóa | Template, ảnh đăng ký, video được mã hóa khi lưu ({{THUAT_TOAN_MA_HOA_LUU}}) và khi truyền ({{GIAO_THUC_TRUYEN}}); khóa quản lý tách khỏi dữ liệu | Tài liệu bảo mật sản phẩm; ảnh chụp cấu hình |
| Kiểm soát truy cập | Phân quyền theo vai trò; xác thực đa yếu tố cho quản trị viên; tài khoản kỹ thuật viên có thời hạn, cấp theo phiếu | Danh sách tài khoản, quyền; nhật ký cấp, thu hồi |
| Nhật ký, giám sát | Ghi nhật ký đăng nhập, xem, xuất, xóa dữ liệu; cảnh báo truy cập bất thường | Mẫu nhật ký; báo cáo cảnh báo |
| Bảo mật vật lý | Máy chủ, đầu ghi đặt trong phòng có khóa, kiểm soát ra vào; ổ cứng thay thế được hủy an toàn | Biên bản hủy thiết bị lưu trữ |
| Giảm thiểu dữ liệu | Không lưu ảnh gốc sau khi tạo template ({{có/không}}); làm mờ người không liên quan khi xuất video; nhận diện khuôn mặt tắt mặc định trên camera hướng khu vực công cộng | Hướng dẫn cấu hình; biên bản bàn giao |
| Tự động xóa | Xóa theo thời hạn tại Phụ lục 1; xóa template khi người lao động nghỉ việc | Nhật ký xóa |
| Chống giả mạo | Kiểm tra người thật (liveness) khi nhận diện khuôn mặt | Kết quả kiểm thử |
| Vá lỗi, cập nhật | Cập nhật firmware, phần mềm theo {{CHINH_SACH_CAP_NHAT}}; thông báo lỗ hổng nghiêm trọng trong {{SO_NGAY_THONG_BAO_LO_HONG}} ngày | Bản tin bảo mật; lịch sử cập nhật |
| Nhân sự | Cam kết bảo mật; đào tạo bảo vệ dữ liệu cá nhân hằng năm | Danh sách đã ký, đã đào tạo |
| Đánh giá | Đánh giá tuân thủ bảo vệ dữ liệu cá nhân của hệ thống trí tuệ nhân tạo định kỳ 01 năm/lần (điểm đ khoản 5 Điều 10 Nghị định số 356/2025/NĐ-CP) | Báo cáo đánh giá năm gần nhất |

## Phụ lục 3. Danh sách bên xử lý phụ

| STT | Tên tổ chức | Mã số thuế | Dịch vụ | Dữ liệu tiếp cận | Nơi xử lý | Đầu mối bảo vệ dữ liệu cá nhân |
|---|---|---|---|---|---|---|
| 1 | {{TEN_BEN_XU_LY_PHU}} | | {{thuê hạ tầng cloud/lắp đặt/bảo hành}} | | | |

## Hướng dẫn điền

1. Chọn mô hình ở bảng "Khi nào cần dùng"; xóa các Điều, khoản và nhãn [M2], [M3/M4] không áp dụng.
2. Phụ lục 1 phải khớp với hồ sơ đánh giá tác động xử lý dữ liệu cá nhân của Bên A (mục II.1–II.3 Mẫu 10 NĐ 356) và của Bên B.
3. Thời hạn lưu tại Phụ lục 1 do **Bên A quyết định** theo mục đích; Bên B chỉ gợi ý giá trị mặc định (xem [`k4-chinh-sach-luu-tru-xoa.md`](k4-chinh-sach-luu-tru-xoa.md)).
4. Nếu Bên B dùng đại lý lắp đặt, ghi đại lý vào Phụ lục 3 và ký điều khoản với đại lý theo [`c5-dieu-khoan-dai-ly-tich-hop.md`](c5-dieu-khoan-dai-ly-tich-hop.md).
5. Lưu bản ký vào hồ sơ đánh giá tác động của cả hai bên (điểm b khoản 2 Điều 19 NĐ 356: bản sao hợp đồng hoặc thỏa thuận về xử lý dữ liệu cá nhân là thành phần hồ sơ).

## Bằng chứng cần lưu

Bản ký Phụ lục; xác nhận đồng ý của chủ thể trước mỗi đợt đăng ký khuôn mặt (Điều 3.2); danh sách bên xử lý phụ và thông báo thay đổi; thông báo sự cố và biên bản xử lý; biên bản bàn giao; biên bản xác nhận xóa khi kết thúc.
