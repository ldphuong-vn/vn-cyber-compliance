# Mẫu Biên bản đo thử độ chính xác nhận diện khuôn mặt tại hiện trường (K13)

> **Căn cứ:** Luật 91/2025/QH15 Đ3.3, Đ9, Đ31.4.a; NĐ 356/2025/NĐ-CP Đ10.3, Đ10.5.a; NĐ 330/2026/NĐ-CP Đ39.1.b, Đ67.3.b · **Đối chiếu văn bản gốc:** 30/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Mã tài liệu:** K13. **Ai lập:** nhà cung cấp (Bên B) đo cùng khách hàng (Bên A) tại địa điểm; hai bên ký. **Dùng cho:** K8 mục B10a, B10b; chọn chế độ so khớp, ngưỡng cho từng cổng (S1 quyết định Q3); đính kèm hồ sơ đánh giá tác động (K6).

### Vì sao phải đo tại hiện trường

- Nguyên tắc **chính xác** của dữ liệu cá nhân (Luật 91 Đ3.3): nhận nhầm người A thành người B là tạo ra dữ liệu sai về người B. Không bảo đảm tính chính xác bị phạt 20–40 triệu đồng (NĐ 330 Đ39.1.b).
- Tổ chức áp dụng hệ thống trí tuệ nhân tạo phải chú trọng **độ tin cậy của thuật toán** (NĐ 356 Đ10.5.a) và giải thích được ảnh hưởng tới người bị nhận diện (NĐ 356 Đ10.3).
- Số liệu kiểm thử của nhà cung cấp (B3 mục B.5) đo trên bộ dữ liệu chuẩn, thường **tốt hơn** thực tế: ánh sáng ngược, góc nghiêng, mũ, khẩu trang, người đi nhanh ở giờ cao điểm.
- Ở chế độ 1:N, khả năng nhận nhầm người lạ **tăng theo số người trong danh sách**: P ≈ 1 − (1 − FAR)<sup>N</sup> (B3 mục B.3). Danh sách càng lớn càng phải đo.

### Khi nào đo

| Thời điểm | Bắt buộc theo bộ khung |
|---|---|
| Trước khi dùng kết quả nhận diện chính thức (nghiệm thu, bàn giao) | Có |
| Số người trên một cổng tăng vượt số đã đo hoặc vượt quy mô khuyến nghị của B3 | Có |
| Đổi ngưỡng, chế độ so khớp, phiên bản mô hình, phần mềm nhận diện | Có |
| Dời vị trí đầu đọc, thay đổi lớn về ánh sáng | Có |
| Rà soát định kỳ thấy tỷ lệ không nhận diện được hoặc nhận nhầm tăng (K12 mục 6) | Có |

### Cách đo

1. **Chốt tiêu chí chấp nhận trước khi đo** (mục VI): tỷ lệ từ chối nhầm tối đa; tỷ lệ nhận nhầm người lạ tối đa; giả mạo bị chấp nhận. Không chỉnh tiêu chí sau khi thấy kết quả.
2. **Người đã đăng ký:** chỉ dùng người đã có phiếu đồng ý. Mỗi người đi qua cổng như bình thường, ít nhất {{SO_LUOT_MOI_NGUOI}} lượt, ở cả giờ bình thường và giờ cao điểm.
3. **Người thử vai "người lạ":** người **chưa đăng ký** tại cổng đó (nhân viên nhà cung cấp, người lao động ở khu vực khác…). Thông báo và xin đồng ý cho việc đo thử (mục III); ảnh sự kiện của họ xóa ngay sau đo, chỉ giữ số liệu.
4. **Nhiều lượt của cùng một người không phải là các lượt độc lập.** Ghi cả số người và số lượt; kết quả dựa trên ít người chỉ là sơ bộ.
5. **Không có lỗi không có nghĩa là tỷ lệ lỗi bằng 0.** Nếu 0 lỗi trong n lượt độc lập, cận trên tin cậy 95% của tỷ lệ lỗi xấp xỉ **3/n** (quy tắc "số 3"). Ví dụ: muốn khẳng định tỷ lệ nhận nhầm người lạ dưới 1% cần ít nhất 300 lượt người lạ không bị khớp nhầm.
6. **Thử giả mạo:** ảnh in, ảnh trên màn hình điện thoại, phát lại video của người đã đăng ký (người đó đồng ý cho dùng ảnh để thử).
7. **Kết quả đo tại một địa điểm không phải là độ chính xác của sản phẩm.** Không dùng để quảng cáo; không thay số liệu tại B3 mục B.5.

---

<p align="center"><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br/><b>Độc lập - Tự do - Hạnh phúc</b></p>

<p align="center"><b>BIÊN BẢN ĐO THỬ ĐỘ CHÍNH XÁC NHẬN DIỆN KHUÔN MẶT TẠI HIỆN TRƯỜNG</b><br/><i>Số: {{SO_BIEN_BAN_DO_THU}}</i></p>

Hôm nay, ngày ... tháng ... năm ..., tại {{DIA_DIEM_LAP_DAT}}, chúng tôi gồm:

**BÊN A (Bên kiểm soát dữ liệu): {{TEN_KHACH_HANG_IN_HOA}}** — Đại diện: {{NHAN_SU_BVDLCN_KH}}; người phụ trách vận hành: ......................................

**BÊN B (Nhà cung cấp hệ thống): {{TEN_NHA_CUNG_CAP_IN_HOA}}** — Đại diện: {{NHAN_SU_BVDLCN_NCC}}; kỹ thuật viên đo thử: ......................................

Cùng tiến hành đo thử độ chính xác của hệ thống {{TEN_SAN_PHAM}} với nội dung sau:

### I. Lý do đo

☐ Nghiệm thu, bàn giao ☐ Số người trên cổng tăng ☐ Đổi ngưỡng, chế độ so khớp ☐ Đổi phiên bản mô hình, phần mềm ☐ Dời đầu đọc, thay đổi ánh sáng ☐ Rà soát định kỳ phát hiện bất thường ☐ Khác: ......

### II. Cấu hình khi đo

| Nội dung | Giá trị |
|---|---|
| Phiên bản phần mềm, mô hình nhận diện | {{PHIEN_BAN_SAN_PHAM}} |
| Chế độ so khớp | ☐ 1:N ☐ 1:N chia danh sách theo cổng ☐ 1:1 (thẻ, mã QR kết hợp khuôn mặt) |
| Ngưỡng chấp nhận / ngưỡng "cần xác minh" | ...... / ...... |
| Chống giả mạo | ☐ Bật — ngưỡng: ...... ☐ Tắt |
| Số lần thử lại trước khi chuyển phương thức thay thế | ...... |
| Quy mô danh sách khuyến nghị của nhà cung cấp ở ngưỡng này (B3 mục B.3) | ...... người/cổng |

### III. Người tham gia và dữ liệu đo thử

| Nhóm | Số người | Số lượt | Cơ sở xử lý | Xử lý dữ liệu sau đo |
|---|---|---|---|---|
| Người đã đăng ký (thử đúng người) | ...... | ...... | Phiếu đồng ý đã ký | Ảnh sự kiện theo chính sách lưu trữ |
| Người thử vai người lạ (chưa đăng ký tại cổng) | ...... | ...... | Đồng ý tham gia đo thử (danh sách ký tại Phụ lục) | Xóa ảnh sự kiện ngay sau đo; chỉ giữ số liệu |
| Người cho dùng ảnh để thử giả mạo | ...... | — | Đồng ý tham gia đo thử | Xóa ảnh, video dùng để thử ngay sau đo |

### IV. Kết quả theo từng cổng

**IV.1. Thử đúng người (người đã đăng ký)**

| Cổng | Điều kiện (ánh sáng, giờ, trang phục) | Số người trong danh sách (N) | Lượt thử | Từ chối ở lần đầu | Không qua sau số lần thử lại | Tỷ lệ không qua | Nhận nhầm sang người khác |
|---|---|---|---|---|---|---|---|
| | | | | | | ......% | |
| | | | | | | ......% | |

**IV.2. Thử người lạ (người chưa đăng ký tại cổng)**

| Cổng | Số người trong danh sách (N) | Số người thử | Lượt thử | Lượt bị khớp nhầm | Tỷ lệ nhận nhầm người lạ *(0 lỗi: ghi "< 3/n")* |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |

### V. Thử chống giả mạo

| Loại tấn công | Số lượt thử | Số lượt bị chấp nhận | Ghi chú |
|---|---|---|---|
| Ảnh in | | | |
| Ảnh trên màn hình điện thoại | | | |
| Phát lại video | | | |
| Khác: ...... | | | |

### VI. Tiêu chí chấp nhận (chốt trước khi đo) và đánh giá

| Tiêu chí | Mức chấp nhận | Kết quả | Đạt |
|---|---|---|---|
| Tỷ lệ không qua sau số lần thử lại, ở giờ cao điểm | ≤ {{MUC_FRR_CHAP_NHAN}} | ......% | ☐ Đạt ☐ Không |
| Tỷ lệ nhận nhầm người lạ (hoặc cận trên 3/n khi 0 lỗi) | ≤ {{MUC_NHAN_NHAM_CHAP_NHAN}} | ...... | ☐ Đạt ☐ Không |
| Nhận nhầm sang người khác trong danh sách | 0 lượt | ...... | ☐ Đạt ☐ Không |
| Giả mạo bị chấp nhận | 0 lượt | ...... | ☐ Đạt ☐ Không |

### VII. Kết luận và cấu hình chốt

| Cổng | Chế độ so khớp | Ngưỡng | Số người tối đa trên cổng | Biện pháp bổ sung |
|---|---|---|---|---|
| | | | | ☐ Chia danh sách theo cổng ☐ Chuyển 1:1 ☐ Tăng ngưỡng kèm phương thức thay thế ☐ Chỉnh vị trí, ánh sáng ☐ Không cần |
| | | | | ☐ Chia danh sách theo cổng ☐ Chuyển 1:1 ☐ Tăng ngưỡng kèm phương thức thay thế ☐ Chỉnh vị trí, ánh sáng ☐ Không cần |

☐ **Đạt** — đưa kết quả nhận diện vào sử dụng chính thức từ ngày ....../....../......

☐ **Không đạt** — chưa dùng kết quả nhận diện làm căn cứ; ra vào bằng phương thức thay thế cho đến khi đo lại đạt. Hạn khắc phục: ....../....../......

Đo lại khi: số người trên một cổng vượt số tại mục VII; đổi ngưỡng, chế độ so khớp, phiên bản mô hình; dời đầu đọc; rà soát định kỳ phát hiện bất thường.

Biên bản lập thành {{SO_BAN}} bản, mỗi bên giữ {{SO_BAN_MOI_BEN}} bản.

| **ĐẠI DIỆN BÊN A**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/>**{{NHAN_SU_BVDLCN_KH}}** | **ĐẠI DIỆN BÊN B**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/>**{{NHAN_SU_BVDLCN_NCC}}** |
|:---:|:---:|

---

<p align="center"><b>PHỤ LỤC</b><br/><b>DANH SÁCH NGƯỜI THAM GIA ĐO THỬ (NGƯỜI THỬ VAI NGƯỜI LẠ, NGƯỜI CHO DÙNG ẢNH ĐỂ THỬ GIẢ MẠO)</b></p>

Tôi được thông báo: việc đo thử nhằm kiểm tra độ chính xác của hệ thống nhận diện khuôn mặt tại {{DIA_DIEM_LAP_DAT}}; hệ thống chụp ảnh khuôn mặt của tôi khi đi qua cổng, ảnh khuôn mặt là **dữ liệu cá nhân nhạy cảm**; khuôn mặt của tôi **không** được đăng ký vào danh sách; ảnh, video được xóa ngay sau khi đo, chỉ giữ số liệu tổng hợp không gắn tên. Tôi tự nguyện tham gia và có thể dừng bất cứ lúc nào.

| STT | Họ và tên | Đơn vị | Vai trò *(người lạ / cho dùng ảnh thử giả mạo)* | Chữ ký |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |

Xác nhận đã xóa ảnh, video của người tham gia đo thử: ngày ....../....../...... · Người thực hiện: ...................................... · Mã nhật ký xóa: ......................

## Hướng dẫn điền

1. **Số lượt tối thiểu** do hai bên thống nhất theo quy mô: gợi ý ít nhất {{SO_NGUOI_DO_THU}} người đã đăng ký, mỗi người {{SO_LUOT_MOI_NGUOI}} lượt; ít nhất {{SO_LUOT_THU_NGUOI_LA}} lượt người lạ. Ghi lý do nếu thấp hơn.
2. **Mục IV:** đo riêng từng cổng vì ánh sáng, góc lắp khác nhau. Ghi N thực tế của cổng tại thời điểm đo.
3. **Mức chấp nhận tại mục VI:** khách hàng quyết định dựa trên hệ quả. Tỷ lệ từ chối nhầm cao gây ùn tắc giờ cao điểm và phải có người xử lý; tỷ lệ nhận nhầm người lạ cao làm giảm an ninh và tạo nhật ký sai về người khác. Nếu kết quả nhận nhầm người lạ không đạt ở chế độ 1:N, chuyển sang 1:1 hoặc chia danh sách theo cổng thay vì chỉ tăng ngưỡng.
4. **Không ghi số liệu kiểm thử của nhà cung cấp vào biên bản này**; biên bản chỉ ghi số đo tại hiện trường.
5. **Lưu:** đính kèm hồ sơ đánh giá tác động (K6) và biên bản bàn giao (K8); bản cập nhật mỗi lần đo lại.

## Bằng chứng cần lưu

Biên bản đã ký; bảng số liệu thô theo từng lượt (không kèm ảnh); danh sách người tham gia đo thử đã ký và xác nhận xóa ảnh; ảnh chụp màn hình cấu hình khi đo; các biên bản đo lại.
