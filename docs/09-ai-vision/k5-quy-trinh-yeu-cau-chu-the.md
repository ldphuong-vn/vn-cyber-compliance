# Mẫu Quy trình tiếp nhận và xử lý yêu cầu của chủ thể dữ liệu đối với hệ thống camera, nhận diện (K5)

> **Căn cứ:** Luật 91/2025/QH15 Đ4.1, Đ4.3–4.5, Đ10, Đ13, Đ14.1–14.2, Đ14.5, Đ15.2.a, Đ19.1, Đ24.2, Đ25.2.b–c, Đ37.1.e; NĐ 356/2025/NĐ-CP Đ5, Đ7.6, Đ10.3, Đ10.6; NĐ 330/2026/NĐ-CP Đ7.1, Đ42.2.c, Đ44, Đ45, Đ46, Đ49.1, Đ51.1.a, Đ67.2.b–c, Đ67.3.b, Đ71.1.b, Đ71.4.b; Luật Kế toán 88/2015/QH13 Đ41.5; BLDS 2015 Đ588 **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** · **Đối chiếu văn bản gốc:** 29/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Ai dùng:** khách hàng (bên kiểm soát) ban hành và vận hành. Người trực lễ tân, bảo vệ, nhân sự, quản trị hệ thống phải biết quy trình này vì yêu cầu thường đến qua họ. Nhà cung cấp {{TEN_NHA_CUNG_CAP}} hỗ trợ kỹ thuật (tìm, trích xuất, làm mờ video; xóa template) theo hợp đồng.

**Khi nào:** ban hành trước khi vận hành hệ thống; công bố cách gửi yêu cầu trên biển báo và Thông báo đầy đủ (K1).

**Mô hình:**

| Mô hình | Ai thực hiện kỹ thuật | Thời hạn áp dụng |
|---|---|---|
| M1 | Khách hàng tự làm | Cột "Thực hiện" |
| M2 | Khách hàng; gọi nhà cung cấp hỗ trợ từ xa khi cần | Cột "Thực hiện" nếu khách tự làm; cột "Khi phải yêu cầu bên xử lý" nếu phải chờ nhà cung cấp — **[CẦN ĐỐI CHIẾU]** hỗ trợ từ xa có làm nhà cung cấp thành bên xử lý không (vùng xám V2) |
| M3, M4 | Nhà cung cấp thực hiện trên nền tảng theo yêu cầu của khách | Cột "Khi phải yêu cầu bên xử lý". Hợp đồng xử lý dữ liệu phải quy định thời hạn nhà cung cấp hoàn thành **ngắn hơn** hạn của khách |

### Thời hạn — NĐ 356 Đ5 (đối chiếu NĐ 330 Đ44)

| Loại yêu cầu | Phản hồi, hướng dẫn thủ tục | Thực hiện | Khi phải yêu cầu bên xử lý, bên thứ ba | Gia hạn (tối đa 01 lần) | Căn cứ |
|---|---|---|---|---|---|
| Rút lại sự đồng ý; hạn chế xử lý; phản đối xử lý | 02 ngày làm việc | 15 ngày | 20 ngày | ≤ 15 ngày | NĐ 356 Đ5.2; NĐ 330 Đ44.3.a |
| Xem; chỉnh sửa; cung cấp (bản sao hình ảnh, nhật ký) | 02 ngày làm việc | 10 ngày | 15 ngày | ≤ 10 ngày | NĐ 356 Đ5.3; NĐ 330 Đ44.3.b |
| Xóa (template khuôn mặt, hình ảnh, nhật ký) | 02 ngày làm việc | 20 ngày | 30 ngày | ≤ 20 ngày | NĐ 356 Đ5.4; NĐ 330 Đ44.3.c |
| Yêu cầu áp dụng biện pháp bảo vệ dữ liệu của mình | 02 ngày làm việc | 15 ngày | — | ≤ 15 ngày | NĐ 356 Đ5.5; NĐ 330 Đ44.3.d |

Lưu ý khi áp dụng:

1. **Gia hạn:** chỉ khi yêu cầu phức tạp; phải **thông báo lý do cho chủ thể** và tự chứng minh việc gia hạn là cần thiết, hợp lý (NĐ 356 Đ5.2–5.5). Không báo lý do: 10–20 triệu đồng (NĐ 330 Đ44.1.đ).
2. **"Ngày" hay "ngày làm việc":** NĐ 356 Đ5 ghi "02 ngày làm việc" cho phản hồi nhưng chỉ ghi "ngày" cho thực hiện. **[CẦN ĐỐI CHIẾU]** — bộ khung tính **ngày theo lịch** (cách thận trọng), mốc tính từ khi nhận yêu cầu hợp lệ (NĐ 330 Đ44.1.d).
3. **Cung cấp qua bên xử lý:** NĐ 356 Đ5.3 chỉ nêu hạn 15 ngày cho *chỉnh sửa* qua bên xử lý; Đ5.4 lại gộp "cung cấp, xóa, hạn chế" qua bên xử lý vào hạn 30 ngày; NĐ 330 Đ44.3.b phạt khi *cung cấp* qua bên xử lý quá 15 ngày. **[CẦN ĐỐI CHIẾU]** — bộ khung áp **15 ngày** cho cung cấp bản sao video qua nhà cung cấp.
4. **Xem xét lại quyết định tự động** (kết quả nhận diện bất lợi): văn bản không quy định thời hạn riêng. **[CẦN ĐỐI CHIẾU]** — bộ khung xếp vào nhóm "yêu cầu áp dụng biện pháp bảo vệ" (15 ngày) và khuyến nghị xử lý trước kỳ tính lương.
5. **Ngoại lệ Đ19:** rút lại đồng ý, hạn chế, xóa không áp dụng khi xử lý thuộc trường hợp không cần đồng ý tại Luật 91 Đ19 (Luật 91 Đ10.1, Đ14.2; NĐ 356 Đ5.2). Video an ninh ghi theo Luật 91 Đ32 **không dựa vào đồng ý**, nên yêu cầu "rút lại đồng ý" với video an ninh được xử lý như yêu cầu phản đối hoặc xóa — xem mục 8 của Quy trình.

### Rủi ro phạt (mức cho tổ chức — NĐ 330 Đ7.1)

| Hành vi | Mức phạt | Căn cứ |
|---|---|---|
| Không có quy trình, biểu mẫu; không phân định trách nhiệm; không cho chủ thể biết thủ tục; không phản hồi trong 02 ngày làm việc; không báo lý do khi từ chối, gia hạn | 10–20 triệu đồng | NĐ 330 Đ44.1 |
| Bên xử lý (nhà cung cấp M3/M4) không thực hiện trong thời hạn khách hàng xác định | 20–30 triệu đồng (phạt bên xử lý) | NĐ 330 Đ44.2 |
| Không thực hiện đúng thời hạn 10/15/20/30 ngày | 30–40 triệu đồng | NĐ 330 Đ44.3 |
| Cản trở rút lại đồng ý; không ngừng xử lý; không yêu cầu bên xử lý ngừng | 20–30 triệu đồng | NĐ 330 Đ45.1 |
| Từ chối cho xem, chỉnh sửa | 20–30 triệu đồng | NĐ 330 Đ46.1.a |
| Từ chối cung cấp dữ liệu cho chính chủ thể khi yêu cầu hợp lệ | 10–20 triệu đồng | NĐ 330 Đ49.1 |
| Không cung cấp thông tin liên hệ khi người dân yêu cầu truy xuất hình ảnh của mình | 10–20 triệu đồng | NĐ 330 Đ71.1.b |
| Không cho từ chối xử lý tự động; không cho xóa hồ sơ nhận dạng | 50–70 triệu đồng | NĐ 330 Đ67.2.b–c |
| Quyết định tự động bất lợi không cho yêu cầu con người đánh giá lại | 70–100 triệu đồng | NĐ 330 Đ67.3.b |

### Lưu ý vùng xám

- **V2** — hỗ trợ từ xa (M2): nếu nhà cung cấp phải thao tác trên dữ liệu, cần hợp đồng xử lý dữ liệu và ghi nhật ký phiên.
- Video của **người khác** trong cùng khung hình: cung cấp nguyên bản có thể xâm phạm quyền của họ (Luật 91 Đ15.2.a). Quy trình yêu cầu làm mờ; nếu không làm mờ được, cho xem tại chỗ hoặc cung cấp ảnh tĩnh đã cắt.
- Cung cấp cho chính chủ thể theo yêu cầu **không phải là chuyển giao** dữ liệu (NĐ 356 Đ7.6), không cần thỏa thuận chuyển giao.
- **Yêu cầu xóa dữ liệu chấm công** (mục 7.2, mục 8): tách hai loại.
  - **Bảng chấm công tổng hợp tháng, bảng lương, chứng từ kế toán khác** phải lưu theo Luật Kế toán 88/2015/QH13 Đ41.5 (tối thiểu 05 năm; 10 năm với chứng từ dùng trực tiếp ghi sổ) **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]**. Luật 91 cho xóa khi "hết thời hạn lưu trữ theo quy định của pháp luật" (Đ14.1.c) và không thực hiện yêu cầu xóa trong trường hợp tại Đ19 hoặc khi việc xóa vi phạm Đ4.3 (Đ14.2). Bộ khung hiểu: xóa chứng từ còn trong thời hạn lưu làm cản trở nghĩa vụ pháp lý của Công ty (Đ4.3.b) và thuộc "trường hợp khác theo quy định của pháp luật" (Đ19.1.đ).
  - **Nhật ký chấm công thô** không có thời hạn luật định. Chỉ giữ được nhờ **thỏa thuận** ghi thời hạn trong nội quy, phụ lục HĐLĐ (Luật 91 Đ25.2.b; Đ19.1.d) — mẫu K3 Điều 9 và Phụ lục HĐLĐ khoản 4. Không có thỏa thuận thì xóa theo yêu cầu, và phải xóa khi chấm dứt hợp đồng (Đ25.2.c). Đây là cách hiểu của bộ khung.
  - Cả hai trường hợp: thông báo cho người yêu cầu phần được giữ lại và lý do (Luật 91 Đ14.5).

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>QUY TRÌNH</b><br/><b>Tiếp nhận và xử lý yêu cầu của chủ thể dữ liệu đối với hệ thống camera và nhận diện</b><br/><i>(Ban hành kèm theo Quyết định số {{SO_VB}}/QĐ-{{VIET_TAT_KH}} ngày ... tháng ... năm ... của {{CHUC_DANH_NGUOI_KY}} {{TEN_KHACH_HANG}})</i></p>

Mã quy trình: **QT-CTDL** · Đầu mối: {{NHAN_SU_BVDLCN_KH}} · Phối hợp: {{BO_PHAN_HCNS}}, quản trị hệ thống, bảo vệ, lễ tân; *(M2–M4)* {{TEN_NHA_CUNG_CAP}}.

**1. Phạm vi**

Quy trình áp dụng cho yêu cầu của người lao động, khách, người đi đường, chủ phương tiện và người đại diện hợp pháp của họ (sau đây gọi là người yêu cầu) đối với hình ảnh, video, dữ liệu khuôn mặt, biển số xe, nhật ký ra vào, nhật ký chấm công do hệ thống camera và nhận diện của {{TEN_KHACH_HANG}} (sau đây gọi là Công ty) thu thập. Yêu cầu của cơ quan nhà nước có thẩm quyền thực hiện theo Quy trình cung cấp dữ liệu cho cơ quan chức năng.

**2. Kênh tiếp nhận**

2.1. Công ty tiếp nhận yêu cầu qua: {{DAU_MOI_TIEP_NHAN_YEU_CAU_KH}}; email {{EMAIL_BVDLCN_KH}}; điện thoại {{DIEN_THOAI_BVDLCN_KH}}; Phiếu yêu cầu tại {{URL_THONG_BAO_CAMERA}}.

2.2. Yêu cầu rút lại sự đồng ý, hạn chế xử lý phải thể hiện bằng văn bản, kể cả dạng điện tử hoặc định dạng kiểm chứng được (khoản 2 Điều 10 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15). Yêu cầu nhận qua điện thoại được người tiếp nhận ghi vào Phiếu yêu cầu và gửi lại người yêu cầu xác nhận.

2.3. Mọi người lao động nhận được yêu cầu (kể cả qua tin nhắn cá nhân) phải chuyển cho đầu mối **trong ngày làm việc**. Thời hạn tính từ khi Công ty nhận được yêu cầu, không phải từ khi đầu mối nhận.

**3. Loại yêu cầu và thời hạn**

| Loại yêu cầu | Ví dụ với hệ thống camera, nhận diện | Phản hồi | Thực hiện | Khi phải yêu cầu bên xử lý | Gia hạn tối đa |
|---|---|---|---|---|---|
| Xem, nhận bản sao | Xem đoạn video có mình; nhận bản sao nhật ký ra vào, chấm công; hỏi Công ty có dữ liệu khuôn mặt của mình không | 02 ngày làm việc | 10 ngày | 15 ngày | 10 ngày |
| Chỉnh sửa | Sửa họ tên gắn với khuôn mặt; sửa nhật ký chấm công sai; đăng ký lại khuôn mặt do nhận nhầm | 02 ngày làm việc | 10 ngày | 15 ngày | 10 ngày |
| Xóa | Xóa template khuôn mặt; xóa ảnh khách; xóa đoạn video không còn cần | 02 ngày làm việc | 20 ngày | 30 ngày | 20 ngày |
| Rút lại sự đồng ý | Không dùng khuôn mặt để ra vào, chấm công nữa | 02 ngày làm việc | 15 ngày | 20 ngày | 15 ngày |
| Hạn chế xử lý | Tạm ngừng dùng khuôn mặt trong khi kiểm tra nhận nhầm | 02 ngày làm việc | 15 ngày | 20 ngày | 15 ngày |
| Phản đối xử lý, phản đối xử lý tự động | Không muốn bị nhận diện tự động; chuyển sang thẻ, mã PIN | 02 ngày làm việc | 15 ngày | 20 ngày | 15 ngày |
| Xem xét lại kết quả tự động bất lợi | Bị ghi đi muộn, vắng mặt, từ chối ra vào do "không nhận diện được" | 02 ngày làm việc | 15 ngày | — | 15 ngày |
| Áp dụng biện pháp bảo vệ | Đề nghị làm mờ, hạn chế người xem hình ảnh của mình | 02 ngày làm việc | 15 ngày | — | 15 ngày |

Thời hạn theo Điều 5 Nghị định số 356/2025/NĐ-CP, tính theo ngày lịch kể từ khi nhận yêu cầu hợp lệ. Việc gia hạn chỉ thực hiện 01 lần, phải thông báo lý do cho người yêu cầu trước khi hết hạn ban đầu. Công ty ưu tiên hoàn thành sớm hơn thời hạn, nhất là yêu cầu liên quan đến tiền lương hoặc video sắp hết thời hạn lưu.

**4. Các bước xử lý**

| Bước | Việc | Người thực hiện | Thời hạn nội bộ |
|---|---|---|---|
| B1 | Ghi Sổ theo dõi: mã yêu cầu, thời điểm nhận, kênh, loại yêu cầu, hạn phản hồi, hạn thực hiện | Đầu mối | Ngay khi nhận |
| B2 | **Giữ nguyên dữ liệu liên quan**: tách đoạn video, nhật ký được nêu trong yêu cầu ra khỏi vòng ghi đè tự động, để không bị xóa trong khi xử lý | Quản trị hệ thống | Trong ngày làm việc |
| B3 | Xác minh người yêu cầu theo mục 5; kiểm tra yêu cầu đủ thông tin | Đầu mối | 01 ngày làm việc |
| B4 | **Phản hồi**: xác nhận đã nhận, hướng dẫn thủ tục, thông tin cần bổ sung, thời hạn dự kiến | Đầu mối | ≤ 02 ngày làm việc |
| B5 | Tìm dữ liệu trên mọi nơi lưu (camera, đầu ghi, VMS, đầu đọc, máy chủ, cloud, bản sao lưu) | Quản trị hệ thống, nhà cung cấp (M2–M4) | Theo hạn mục 3 |
| B6 | Đánh giá có thuộc trường hợp từ chối (mục 8) hoặc cần gia hạn không; xin ý kiến pháp chế nếu cần | Đầu mối | Trước khi thực hiện |
| B7 | Thực hiện theo mục 6, 7; nếu cần bên xử lý thì gửi yêu cầu theo mục 9 | Quản trị hệ thống, nhà cung cấp | Theo hạn mục 3 |
| B8 | Trả lời bằng văn bản: kết quả, phần không thực hiện được và lý do, quyền khiếu nại | Đầu mối | Trong hạn |
| B9 | Đóng hồ sơ; lưu phiếu, phản hồi, bằng chứng thực hiện; trả đoạn dữ liệu đã giữ ở B2 về vòng xóa bình thường (trừ khi có lý do giữ lại khác) | Đầu mối | Khi hoàn thành |

**5. Xác minh người yêu cầu**

5.1. Chỉ yêu cầu thông tin đủ để xác minh, không thu thêm dữ liệu không cần thiết. Xem giấy tờ tùy thân để đối chiếu, **không chụp, không lưu** ảnh giấy tờ, trừ khi người yêu cầu gửi qua kênh điện tử; khi đó xóa sau khi xác minh xong.

| Người yêu cầu | Cách xác minh |
|---|---|
| Người lao động | Qua tài khoản nội bộ hoặc đối chiếu hồ sơ nhân sự |
| Khách, người đi đường yêu cầu xem video | Giấy tờ tùy thân; mô tả thời gian (khoảng ± 30 phút), vị trí, trang phục để tìm và đối chiếu với hình ảnh |
| Chủ phương tiện yêu cầu hình ảnh xe | Giấy tờ tùy thân và giấy tờ xe hoặc vé, hợp đồng gửi xe |
| Người đại diện, người được ủy quyền | Giấy tờ tùy thân và văn bản ủy quyền hợp lệ |
| Cha, mẹ, người giám hộ của trẻ em | Giấy tờ chứng minh là người đại diện theo pháp luật (khoản 2 Điều 24 Luật Bảo vệ dữ liệu cá nhân) |

5.2. Không xác minh được người yêu cầu là chủ thể: không cung cấp dữ liệu; thông báo lý do và cách bổ sung.

**6. Cung cấp video, hình ảnh**

6.1. Ưu tiên cho xem **tại chỗ**, có nhân viên được phân quyền đi cùng; người yêu cầu không quay, chụp màn hình.

6.2. Khi cung cấp bản sao: chỉ trích đoạn có người yêu cầu; **làm mờ khuôn mặt, biển số của người khác**; xuất định dạng phổ biến; mã hóa tệp, gửi mật khẩu qua kênh riêng; ghi nhật ký trích xuất.

6.3. Không làm mờ được mà việc cung cấp có thể xâm phạm tính mạng, sức khỏe, tài sản hoặc quyền, lợi ích hợp pháp của người khác: cung cấp ảnh tĩnh đã cắt hoặc chỉ cho xem tại chỗ, nêu rõ lý do (điểm a khoản 2 Điều 15 Luật Bảo vệ dữ liệu cá nhân).

6.4. Đoạn video đã hết thời hạn lưu và đã bị xóa theo Chính sách lưu trữ, xóa: trả lời người yêu cầu rằng dữ liệu không còn, nêu thời hạn lưu đang áp dụng.

**7. Yêu cầu liên quan đến nhận diện khuôn mặt**

7.1. **Rút lại sự đồng ý, phản đối xử lý tự động:** cấp phương thức thay thế ({{PHUONG_THUC_THAY_THE}}) **ngay trong ngày**; ngừng nhận diện; xóa template theo mục 7.2. Không có bất lợi nào cho người yêu cầu (khoản 3 Điều 10 Nghị định số 356/2025/NĐ-CP).

7.2. **Xóa template:** xóa trên máy chủ, **đồng bộ xóa trên mọi đầu đọc**, xóa ảnh đăng ký (nếu có); kiểm tra người đó không còn được nhận diện; ghi nhật ký. Yêu cầu này không kéo theo xóa dữ liệu chấm công:

- Bảng chấm công tổng hợp tháng là tài liệu kế toán, được lưu theo khoản 5 Điều 41 Luật Kế toán số 88/2015/QH13 và chỉ xóa, hủy khi hết thời hạn lưu trữ theo quy định của pháp luật (điểm c khoản 1 Điều 14 Luật Bảo vệ dữ liệu cá nhân).
- Nhật ký chấm công được giữ đến hết thời hạn đã thỏa thuận với người lao động (điểm b khoản 2 Điều 25 Luật Bảo vệ dữ liệu cá nhân).
- Thông báo cho người yêu cầu phần được giữ lại, lý do và thời điểm sẽ xóa (khoản 5 Điều 14 Luật Bảo vệ dữ liệu cá nhân).

7.3. **Xem xét lại kết quả tự động bất lợi:** người xem xét không phải là người đã vận hành thiết bị tại thời điểm đó; đối chiếu nhật ký thiết bị, điểm so khớp, camera giám sát, xác nhận của quản lý; nếu hệ thống sai thì sửa nhật ký, bảng công và báo nhà cung cấp để kiểm tra thiết bị. Kết quả gửi người yêu cầu bằng văn bản.

**8. Trường hợp từ chối hoặc chỉ thực hiện một phần**

| Trường hợp | Áp dụng cho | Căn cứ |
|---|---|---|
| Xử lý thuộc trường hợp không cần sự đồng ý (bảo vệ tính mạng, tài sản trước hành vi xâm phạm; phòng, chống tội phạm; phục vụ cơ quan nhà nước; thực hiện thỏa thuận) | Rút lại đồng ý, hạn chế, xóa | Điều 19, khoản 1 Điều 10, khoản 2 Điều 14 Luật Bảo vệ dữ liệu cá nhân |
| Đoạn video đang được giữ theo yêu cầu bằng văn bản của cơ quan có thẩm quyền, hoặc là chứng cứ của vụ việc đang giải quyết | Xóa | Điểm b, c khoản 1 Điều 19; điểm d khoản 1 Điều 14 Luật Bảo vệ dữ liệu cá nhân |
| Việc cung cấp có thể gây tổn hại quốc phòng, an ninh, trật tự, an toàn xã hội hoặc xâm phạm tính mạng, sức khỏe, tài sản của người khác | Cung cấp | Điểm a khoản 2 Điều 15 Luật Bảo vệ dữ liệu cá nhân |
| Yêu cầu nhằm gian lận, trốn tránh nghĩa vụ; chỉnh sửa xâm phạm quyền của người khác | Chỉnh sửa | Khoản 3 Điều 46 Nghị định số 330/2026/NĐ-CP |
| Yêu cầu không nhằm bảo vệ quyền của chính chủ thể, vượt quá phạm vi cần thiết, cản trở hoạt động hợp pháp của Công ty | Mọi loại | Khoản 3 Điều 4 Luật Bảo vệ dữ liệu cá nhân; điểm c khoản 2 Điều 42 Nghị định số 330/2026/NĐ-CP |
| Pháp luật buộc lưu và chưa hết thời hạn: bảng chấm công tổng hợp tháng, bảng lương, chứng từ kế toán khác | Xóa | Khoản 2 Điều 14 (dẫn điểm đ khoản 1 Điều 19, điểm b khoản 3 Điều 4), điểm c khoản 1 Điều 14, điểm b khoản 2 Điều 25 Luật Bảo vệ dữ liệu cá nhân; khoản 5 Điều 41 Luật Kế toán số 88/2015/QH13 |
| Nhật ký chấm công còn trong thời hạn đã thỏa thuận với người lao động tại Nội quy lao động, phụ lục hợp đồng lao động | Xóa | Điểm b khoản 2 Điều 25; điểm d khoản 1 Điều 19, khoản 2 Điều 14 Luật Bảo vệ dữ liệu cá nhân. Không có thỏa thuận thì không áp dụng dòng này |
| Không xác minh được người yêu cầu | Mọi loại | Mục 5 |

Mọi trường hợp từ chối hoặc chỉ thực hiện một phần đều phải **thông báo lý do bằng văn bản** cho người yêu cầu (khoản 3 Điều 13, khoản 5 Điều 14 Luật Bảo vệ dữ liệu cá nhân).

**9. Phối hợp nhà cung cấp và bên xử lý** *(M2–M4)*

9.1. Khi dữ liệu nằm trên nền tảng hoặc cần nhà cung cấp thao tác, đầu mối gửi yêu cầu bằng văn bản (email, ticket) cho {{TEN_NHA_CUNG_CAP}} qua {{EMAIL_BVDLCN_NCC}} trong 01 ngày làm việc kể từ khi xác minh xong, nêu: mã yêu cầu, loại, dữ liệu, **hạn hoàn thành**.

9.2. Hạn giao nhà cung cấp phải để lại ít nhất {{SO_NGAY_DU_PHONG_NCC}} ngày trước hạn chót của Công ty để kiểm tra kết quả.

9.3. Khi người yêu cầu rút lại sự đồng ý, hạn chế, phản đối hoặc xóa, Công ty phải yêu cầu mọi bên xử lý liên quan ngừng xử lý, xóa dữ liệu; nhà cung cấp xác nhận hoàn thành bằng văn bản.

**10. Lưu hồ sơ**

Phiếu yêu cầu, phản hồi, bằng chứng thực hiện, văn bản trao đổi với nhà cung cấp và Sổ theo dõi được lưu {{THOI_HAN_LUU_HO_SO_YEU_CAU}}, hạn chế người truy cập.

| **Nơi nhận:**<br/>- Các bộ phận liên quan;<br/>- {{NHAN_SU_BVDLCN_KH}};<br/>- {{TEN_NHA_CUNG_CAP}} (M2–M4);<br/>- Lưu: VT. | **{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

---

<p align="center"><b>PHIẾU YÊU CẦU</b><br/><b>Thực hiện quyền đối với hình ảnh, dữ liệu nhận diện</b><br/><i>Gửi: {{TEN_KHACH_HANG}} — {{NHAN_SU_BVDLCN_KH}}, {{EMAIL_BVDLCN_KH}}</i></p>

**1. Người yêu cầu**

Họ và tên: ................................................ Điện thoại: ........................ Email: ..............................

☐ Tôi là chủ thể dữ liệu. ☐ Tôi là người đại diện, người được ủy quyền của: .................................... (kèm giấy tờ chứng minh)

Quan hệ với Công ty: ☐ Người lao động (mã nhân viên: ..........) ☐ Khách ☐ Chủ phương tiện ☐ Khác: ..........

**2. Nội dung yêu cầu** *(chọn một hoặc nhiều)*

- ☐ Xem hình ảnh, video có tôi
- ☐ Nhận bản sao hình ảnh, video có tôi (hình ảnh người khác sẽ được làm mờ)
- ☐ Nhận bản sao nhật ký ra vào, chấm công của tôi, từ ngày ........ đến ngày ........
- ☐ Chỉnh sửa dữ liệu sai: ....................................................................
- ☐ Xóa dữ liệu khuôn mặt (template, ảnh đăng ký) của tôi
- ☐ Rút lại sự đồng ý nhận diện khuôn mặt — tôi sẽ dùng {{PHUONG_THUC_THAY_THE}}
- ☐ Hạn chế xử lý ☐ Phản đối xử lý ☐ Không tham gia nhận diện tự động
- ☐ Xem xét lại kết quả tự động: ngày ........, kết quả bị ghi nhận: ....................................
- ☐ Xóa hình ảnh, video khác: ....................................................................
- ☐ Yêu cầu khác: ....................................................................

**3. Thông tin để tìm dữ liệu**

Thời gian (ngày, khoảng giờ): ................................ Vị trí, cửa, camera, làn xe: ................................

Mô tả để nhận biết (trang phục, phương tiện, biển số): ................................................................

Lý do (không bắt buộc): ................................................................................................

**4. Cách nhận kết quả:** ☐ Xem tại chỗ ☐ Email ☐ Nhận trực tiếp ☐ Bưu chính

Tôi cam đoan thông tin trên là đúng và yêu cầu này nhằm bảo vệ quyền, lợi ích hợp pháp của chính tôi (hoặc người tôi đại diện).

*Ngày ...... tháng ...... năm ......*

**Người yêu cầu** *(ký, ghi rõ họ tên)*

*Phần dành cho Công ty:* Mã yêu cầu: .............. Thời điểm nhận: ...... giờ ...... ngày ........ Người nhận: .............. Đã xác minh bằng: ..............

---

<p align="center"><b>MẪU PHẢN HỒI TIẾP NHẬN</b><br/><i>(gửi trong 02 ngày làm việc)</i></p>

Kính gửi ông/bà ................................................

{{TEN_KHACH_HANG}} đã nhận yêu cầu mã **........** của ông/bà lúc ...... giờ ngày ........ về việc: ...................................

- Thủ tục: ....................................................................... *(giấy tờ cần bổ sung, nếu có)*
- Thời hạn dự kiến hoàn thành: ngày ........ *(theo Điều 5 Nghị định số 356/2025/NĐ-CP)*
- Trong thời gian xử lý, đoạn dữ liệu liên quan được giữ nguyên, không bị xóa tự động.
- Hình ảnh của người khác (nếu có) sẽ được làm mờ trước khi cung cấp.

Mọi thắc mắc xin liên hệ {{NHAN_SU_BVDLCN_KH}} — {{DIEN_THOAI_BVDLCN_KH}} — {{EMAIL_BVDLCN_KH}}.

---

<p align="center"><b>SỔ THEO DÕI YÊU CẦU CỦA CHỦ THỂ DỮ LIỆU</b></p>

| Mã | Thời điểm nhận | Kênh | Người yêu cầu | Loại yêu cầu | Dữ liệu liên quan | Đã giữ nguyên dữ liệu (B2) | Xác minh (cách, ngày) | Hạn phản hồi | Ngày phản hồi | Hạn thực hiện | Gia hạn (lý do, hạn mới) | Cần bên xử lý? | Kết quả (đã làm / một phần / từ chối — lý do) | Ngày hoàn thành | Đúng hạn? |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| YC-{{NAM}}-001 | | | | | | ☐ | | | | | | ☐ | | | ☐ |

## Hướng dẫn điền

| Chỗ cần điền | Cách điền |
|---|---|
| `{{DAU_MOI_TIEP_NHAN_YEU_CAU_KH}}`, `{{URL_THONG_BAO_CAMERA}}` | Giống K1. Đầu mối phải trả lời được điện thoại trong giờ hành chính |
| `{{SO_NGAY_DU_PHONG_NCC}}` | Gợi ý 03–05 ngày. Ghi cùng giá trị vào hợp đồng xử lý dữ liệu với nhà cung cấp |
| `{{THOI_HAN_LUU_HO_SO_YEU_CAU}}` | Khách hàng tự quyết định; gợi ý 03 năm để chứng minh việc thực hiện quyền khi bị kiểm tra, khiếu nại. Mức này khớp thời hiệu khởi kiện yêu cầu bồi thường thiệt hại 03 năm kể từ ngày biết quyền bị xâm phạm (BLDS 2015 Đ588) **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** |
| Các chỗ đánh dấu *(M2–M4)* | Xóa nếu khách tự vận hành toàn bộ (M1) |
| Sổ theo dõi | Nên dùng bảng tính có công thức tính hạn; tô màu yêu cầu còn ≤ 02 ngày đến hạn |

Đào tạo tối thiểu: lễ tân, bảo vệ biết nhận yêu cầu, không tự cho xem video, chuyển đầu mối trong ngày; quản trị hệ thống biết giữ nguyên đoạn video, làm mờ, xóa template đồng bộ.

## Bằng chứng cần lưu

| Bằng chứng | Mục đích |
|---|---|
| Quy trình đã ban hành; bằng chứng công bố cách gửi yêu cầu (K1, website) | NĐ 356 Đ5.1; NĐ 330 Đ44.1.a–c |
| Sổ theo dõi; phiếu yêu cầu; phản hồi 02 ngày làm việc; văn bản gia hạn, từ chối có lý do | NĐ 330 Đ44.1.d–đ, Đ44.3 |
| Nhật ký trích xuất, làm mờ; nhật ký xóa template | Chứng minh đã thực hiện |
| Yêu cầu gửi nhà cung cấp và xác nhận hoàn thành | NĐ 330 Đ44.2, Đ45.1.c |
