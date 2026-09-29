# Mẫu Tài liệu giải thích nguyên tắc hoạt động của thuật toán nhận diện khuôn mặt

> **Căn cứ:** Luật 91/2025/QH15 Đ4.1, Đ9.2, Đ14.1.a, Đ24.2, Đ25.3, Đ31.2; NĐ 356/2025/NĐ-CP Đ4.1.đ, Đ5.4, Đ6.4, Đ10.3, Đ10.5.a, Đ10.6, Đ23.7, Đ29; NĐ 330/2026/NĐ-CP Đ34.2.c, Đ43.1.h, Đ67.2.a, Đ67.2.b, Đ67.2.c, Đ67.3.b, Đ67.4.b, Đ67.5; Luật 134/2025/QH15 Đ3.4, Đ4.2, Đ4.3, Đ7.4, Đ11.1, Đ14.1.d–e, Đ14.2.b, Đ14.2.đ, Đ15.1.b, Đ15.2, Đ31.1; NĐ 142/2026/NĐ-CP Đ3.1, Đ3.5, Đ3.6, Đ8.2.b, Đ11.5, Đ12.3, Đ12.4, Đ15.2.b–c, Đ16.2–16.4, Đ16.6; QĐ 33/2026/QĐ-TTg Phụ lục mục VI.6 · **Đối chiếu văn bản gốc:** 29/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Mã tài liệu:** B3. Gồm hai phần:

| Phần | Người đọc | Ai ban hành | Cách dùng |
|---|---|---|---|
| **A — Bản phổ thông (1 trang)** | Nhân viên, khách, phụ huynh — người bị nhận diện | **Khách hàng** (bên kiểm soát) | Dán tại cửa, kiosk; đính kèm mẫu đồng ý (K2); đăng trên trang nội bộ |
| **B — Bản kỹ thuật** | Nhân sự BVDLCN, bộ phận CNTT, pháp chế của khách hàng; cơ quan kiểm tra | **Nhà cung cấp** | Căn cứ để khách hàng trả lời câu hỏi của chủ thể, lập hồ sơ đánh giá tác động, cấu hình ngưỡng |

Nghĩa vụ thông báo và giải thích thuộc **bên kiểm soát** (NĐ 356 Đ10.3), tức là khách hàng. Nhà cung cấp soạn sẵn để khách hàng có nội dung chính xác về kỹ thuật. Với M3, M4, nhà cung cấp nên ghi thêm tên mình là tổ chức cung cấp dịch vụ xử lý trong phần A (NĐ 356 Đ23.7).

**Áp dụng mô hình:** M1–M5, cho mọi tính năng mức BV-Cao, BV-Trung bình có quyết định tự động theo B2 (kiểm soát ra vào, chấm công, điểm danh, danh sách đen, nhận diện khách). Với nhận diện biển số, dùng mục B.11.

| Yêu cầu | Căn cứ |
|---|---|
| Bên kiểm soát thông báo cho chủ thể về việc xử lý tự động, **giải thích nguyên tắc hoạt động của thuật toán** và **ảnh hưởng** đối với quyền, lợi ích; đưa ra **lựa chọn để không tham gia** | NĐ 356 Đ10.3 |
| Chủ thể có quyền chỉnh sửa, ẩn danh, xóa hồ sơ nhận dạng | NĐ 356 Đ10.6 |
| Khi xin đồng ý xử lý dữ liệu nhạy cảm phải thông báo dữ liệu là nhạy cảm | NĐ 356 Đ6.4 |
| Đồng ý chỉ có hiệu lực khi tự nguyện và biết rõ loại dữ liệu, mục đích, bên kiểm soát, quyền của chủ thể | Luật 91 Đ9.2 |
| Không giải thích thuật toán và ảnh hưởng: **50–70 triệu đồng** | NĐ 330 Đ67.2.a |
| Không có cơ chế từ chối tham gia xử lý tự động: **50–70 triệu đồng** | NĐ 330 Đ67.2.b |
| Không bảo đảm quyền chỉnh sửa, ẩn danh, xóa hồ sơ nhận dạng: **50–70 triệu đồng** | NĐ 330 Đ67.2.c |
| Quyết định tự động ảnh hưởng quyền lợi, không cho yêu cầu đánh giá lại bởi con người: **70–100 triệu đồng**, đình chỉ 03–06 tháng | NĐ 330 Đ67.3.b, Đ67.4.b |
| Hệ thống AI tương tác trực tiếp với con người phải được thiết kế để người sử dụng **nhận biết đang tương tác với hệ thống AI** (mọi mức rủi ro). Phần A đáp ứng một phần; nên thêm dòng chữ, biểu tượng trên màn hình thiết bị, kiosk | Luật 134 Đ11.1 |
| Hệ thống rủi ro cao theo Luật 134: cung cấp cho người sử dụng và người bị ảnh hưởng thông tin ở mức mô tả chức năng, cách thức vận hành và cảnh báo rủi ro | Luật 134 Đ14.1.e, Đ14.2.đ |
| Giải trình với cơ quan nhà nước ở mức mô tả chức năng; không bắt buộc tiết lộ mã nguồn, thuật toán chi tiết, dữ liệu huấn luyện, bộ tham số, bí mật kinh doanh | Luật 134 Đ14.1.e, Đ15.1.b, Đ15.2; NĐ 142 Đ16.3, Đ16.4 |
| Duy trì khả năng giám sát, can thiệp của con người đối với mọi quyết định của hệ thống AI; cản trở, vô hiệu hóa cơ chế này là hành vi bị nghiêm cấm | Luật 134 Đ4.2, Đ7.4, Đ14.1.d |

Mức phạt cho tổ chức; cá nhân bằng một nửa (NĐ 330 Đ7.1). Luật 134 chưa có nghị định xử phạt riêng (Đ29.5) tại 29/09/2026 — **[CẦN ĐỐI CHIẾU]**.

**Phần B dùng cho hồ sơ theo Luật 134.** Phần B có thể dùng làm **thẻ hệ thống** (NĐ 142 Đ3.6) hoặc một phần **hồ sơ kỹ thuật** (NĐ 142 Đ3.1) khi cấu hình triển khai là rủi ro cao theo B2 mục 2.3. Mục B.0 ghi nguồn gốc mô hình và thẻ mô hình (NĐ 142 Đ3.5).

**Không được bịa số liệu.** Mọi chỉ số FAR, FRR, APCER, BPCER, sai lệch theo nhóm là **placeholder**; chỉ điền khi có báo cáo kiểm thử thật, ghi rõ bộ dữ liệu, điều kiện và ngày kiểm thử. Không dùng số liệu quảng cáo của nhà cung cấp linh kiện nếu chưa kiểm thử lại trên sản phẩm.

---

<p align="center"><b>PHẦN A. THÔNG TIN VỀ HỆ THỐNG NHẬN DIỆN KHUÔN MẶT</b><br/><b>tại {{TEN_KHACH_HANG}} — {{DIA_DIEM_LAP_DAT}}</b></p>

**1. Hệ thống làm gì?**

{{TEN_KHACH_HANG}} dùng hệ thống nhận diện khuôn mặt {{TEN_SAN_PHAM}} để {{mở cửa ra vào/chấm công/điểm danh/nhận diện khách đã đăng ký}}. Camera tại {{VI_TRI_CAMERA_NHAN_DIEN}} chụp ảnh khuôn mặt của bạn khi bạn đi qua và so với khuôn mặt bạn đã đăng ký. Nếu giống, hệ thống {{mở cửa/ghi giờ công/ghi có mặt}}. Đây là **hệ thống trí tuệ nhân tạo (AI)**: máy tự so khớp khuôn mặt, không có người trực tiếp nhận diện tại thời điểm bạn đi qua.

**2. Hệ thống dùng dữ liệu gì của bạn?**

- Ảnh bạn chụp lúc đăng ký. Ảnh này được **xóa ngay** sau khi hệ thống tạo ra một dãy số đặc trưng của khuôn mặt (gọi là "mẫu khuôn mặt"). *(Sửa nếu khách hàng bật lưu ảnh đăng ký.)*
- Mẫu khuôn mặt: dãy số được mã hóa, không xem được như một bức ảnh.
- Ảnh chụp mỗi lần bạn đi qua, thời điểm và vị trí cửa. Lưu {{THOI_HAN_LUU_ANH_SU_KIEN}}.
- Họ tên, {{mã nhân viên/lớp}}.

Ảnh đăng ký và mẫu khuôn mặt là **dữ liệu sinh trắc học — dữ liệu cá nhân nhạy cảm**.

**3. Hệ thống so khớp thế nào?**

Hệ thống tính mức độ giống nhau giữa khuôn mặt vừa chụp và các mẫu đã đăng ký. Chỉ khi mức giống **vượt ngưỡng** do {{TEN_KHACH_HANG}} cài đặt thì mới coi là cùng một người. Hệ thống cũng kiểm tra đó là người thật, không phải ảnh in hay video phát trên điện thoại. Hệ thống **không** đoán tuổi, cảm xúc, dân tộc, sức khỏe của bạn.

**4. Hệ thống có thể nhầm không?**

Có. Hệ thống có thể **không nhận ra bạn** (ví dụ khi thiếu sáng, đeo khẩu trang, đổi kiểu tóc, kính) hoặc, rất hiếm khi, **nhận nhầm** bạn với người khác. Khi không nhận ra, bạn dùng {{PHUONG_THUC_THAY_THE}} hoặc báo {{BO_PHAN_XU_LY_TAI_CHO}}.

**5. Ai xem lại khi có kết quả bất lợi cho bạn?**

Không có quyết định bất lợi nào (trừ công, ghi đi muộn, ghi vắng, kỷ luật) chỉ dựa vào máy. {{BO_PHAN_XEM_XET_LAI}} kiểm tra lại trước khi quyết định. Bạn có quyền yêu cầu người xem lại bất kỳ kết quả nào của hệ thống.

**6. Bạn không muốn dùng khuôn mặt?**

Bạn có quyền **không tham gia**. Hãy dùng {{PHUONG_THUC_THAY_THE}}. Việc từ chối **không ảnh hưởng** đến quyền lợi, đánh giá hay công việc của bạn. Bạn có thể rút lại đồng ý bất cứ lúc nào; mẫu khuôn mặt của bạn sẽ bị xóa.

**7. Muốn xem, sửa hoặc xóa dữ liệu của bạn?**

Gửi yêu cầu bằng văn bản (giấy hoặc thư điện tử) tới đầu mối dưới đây. Bạn nhận phản hồi trong **02 ngày làm việc**. Yêu cầu xóa được thực hiện trong **20 ngày** kể từ khi nhận yêu cầu hợp lệ.

**Đầu mối:** {{NHAN_SU_BVDLCN_KH}} — {{EMAIL_BVDLCN_KH}} — {{DIEN_THOAI_BVDLCN_KH}}.

*Bên kiểm soát dữ liệu: {{TEN_KHACH_HANG}}. Hệ thống do {{TEN_NHA_CUNG_CAP}} cung cấp. (Chỉ ghi khi dùng cloud:) Dữ liệu được lưu trên nền tảng {{TEN_NEN_TANG_CLOUD}} đặt tại {{VI_TRI_MAY_CHU}}; {{TEN_NHA_CUNG_CAP}} là tổ chức cung cấp dịch vụ xử lý dữ liệu cá nhân. Ngày cập nhật: {{NGAY_HIEU_LUC}}.*

---

<p align="center"><b>PHẦN B. TÀI LIỆU KỸ THUẬT VỀ NGUYÊN TẮC HOẠT ĐỘNG CỦA THUẬT TOÁN</b><br/><b>{{TEN_SAN_PHAM}} — phiên bản {{PHIEN_BAN_SAN_PHAM}}</b></p>

| Thông tin tài liệu | |
|---|---|
| Mã tài liệu | {{MA_TAI_LIEU}} |
| Nhà cung cấp | {{TEN_NHA_CUNG_CAP}} |
| Phiên bản mô hình nhận diện | {{PHIEN_BAN_MO_HINH}} |
| Phiên bản mô hình chống giả mạo | {{PHIEN_BAN_MO_HINH_LIVENESS}} |
| Ngày ban hành | {{NGAY_BAN_HANH_TAI_LIEU}} |
| Đầu mối kỹ thuật | {{NHAN_SU_BVDLCN_NCC}} — {{EMAIL_BVDLCN_NCC}} |

## B.0. Mô hình sử dụng

| Mô hình | Chức năng | Phiên bản | Nguồn gốc (tự phát triển / mua / mã nguồn mở; quốc gia của bên cung cấp) | Thẻ mô hình (tên tài liệu, ngày) |
|---|---|---|---|---|
| Trích xuất đặc trưng, so khớp | Nhận diện khuôn mặt | {{PHIEN_BAN_MO_HINH}} | {{NGUON_GOC_MO_HINH_DAC_TRUNG}} | {{THE_MO_HINH_DAC_TRUNG}} |
| Chống giả mạo | Kiểm tra người thật | {{PHIEN_BAN_MO_HINH_LIVENESS}} | {{NGUON_GOC_MO_HINH_LIVENESS}} | {{THE_MO_HINH_LIVENESS}} |

{{TEN_NHA_CUNG_CAP}} đưa hệ thống ra thị trường dưới tên, thương hiệu của mình nên là nhà cung cấp hệ thống, kể cả khi mô hình do bên thứ ba phát triển (khoản 4 Điều 3 Luật Trí tuệ nhân tạo số 134/2025/QH15). Thẻ mô hình là tài liệu mô tả đặc tính, mục đích sử dụng, phạm vi áp dụng, hạn chế, rủi ro tiềm ẩn, dữ liệu huấn luyện, điều kiện huấn luyện và kết quả đánh giá hiệu năng của mô hình (khoản 5 Điều 3 Nghị định số 142/2026/NĐ-CP).

Với mô hình của bên thứ ba: {{TEN_NHA_CUNG_CAP}} đã thỏa thuận với bên cung cấp mô hình về việc phối hợp cung cấp thông tin kỹ thuật cần thiết cho trách nhiệm minh bạch và giải trình (khoản 6 Điều 16 Nghị định số 142/2026/NĐ-CP): {{THOA_THUAN_THONG_TIN_MO_HINH}}. Thông tin kỹ thuật và dữ liệu trong tài liệu này được cung cấp trong phạm vi quyền tiếp cận và kiểm soát hợp pháp của {{TEN_NHA_CUNG_CAP}} (khoản 3 Điều 12 Nghị định số 142/2026/NĐ-CP). Dữ liệu huấn luyện: xem Tuyên bố về dữ liệu huấn luyện (B7).

## B.1. Phạm vi

Tài liệu giải thích cách {{TEN_SAN_PHAM}} nhận diện khuôn mặt, mức độ tin cậy, các giới hạn đã biết và các cơ chế để con người kiểm soát kết quả. Tài liệu giúp bên kiểm soát dữ liệu thực hiện nghĩa vụ thông báo, giải thích nguyên tắc hoạt động của thuật toán và ảnh hưởng đối với quyền, lợi ích của chủ thể theo khoản 3 Điều 10 Nghị định số 356/2025/NĐ-CP.

## B.2. Các bước xử lý

| Bước | Việc hệ thống làm | Đầu ra | Có lưu lại không | Nơi chạy |
|---|---|---|---|---|
| 1. Phát hiện | Tìm vùng có khuôn mặt trong khung hình | Tọa độ khung khuôn mặt | Không | Camera AI hoặc thiết bị đầu cuối |
| 2. Kiểm tra chất lượng | Loại ảnh quá mờ, quá nghiêng, quá nhỏ, thiếu sáng | Đạt / không đạt | Không | Như bước 1 |
| 3. Chống giả mạo (liveness) | Kiểm tra là người thật, không phải ảnh in, màn hình, mặt nạ | Điểm liveness; đạt / không đạt | Chỉ lưu kết quả vào nhật ký sự kiện | Thiết bị đầu cuối |
| 4. Căn chỉnh | Xoay, cắt, chuẩn hóa kích thước theo các điểm mốc (mắt, mũi, miệng) | Ảnh khuôn mặt chuẩn hóa | Không | Như bước 1 |
| 5. Trích xuất đặc trưng | Mạng nơ-ron chuyển ảnh chuẩn hóa thành vector {{SO_CHIEU_TEMPLATE}} chiều (template) | Template | Chỉ lưu template **khi đăng ký**; khi nhận diện thì template tạm bị hủy sau so khớp | Thiết bị đầu cuối hoặc máy chủ |
| 6. So khớp | Tính độ tương đồng giữa template vừa tạo và template đã đăng ký: 1:1 (xác thực, khi người dùng đã quẹt thẻ hoặc nhập mã) hoặc 1:N (nhận diện trong danh sách) | Điểm tương đồng; người có điểm cao nhất | Không | Như bước 5 |
| 7. Quyết định theo ngưỡng | So điểm với ngưỡng chấp nhận và ngưỡng "cần xác minh" | Chấp nhận / cần xác minh / từ chối | Nhật ký sự kiện (không lưu template) | Như bước 5 |
| 8. Hành động | Mở cửa, ghi giờ công, ghi có mặt, gửi cảnh báo | Sự kiện | Nhật ký sự kiện, ảnh sự kiện | Máy chủ |

Template là biểu diễn toán học dùng để so khớp. Sản phẩm không có chức năng dựng lại ảnh khuôn mặt từ template. Tuy vậy, template vẫn là **dữ liệu sinh trắc học** (khoản 2 Điều 31 Luật Bảo vệ dữ liệu cá nhân) và được bảo vệ như dữ liệu nhạy cảm. Template của sản phẩm này {{có/không}} dùng được với sản phẩm của nhà cung cấp khác.

## B.3. Ngưỡng và cách đưa ra quyết định

| Tham số | Giá trị mặc định | Khách hàng thay đổi được? | Ảnh hưởng khi tăng |
|---|---|---|---|
| Ngưỡng chấp nhận | {{NGUONG_SO_KHOP_MAC_DINH}} | Có — chỉ quản trị viên cấp cao; mọi thay đổi ghi nhật ký | Giảm nhận nhầm (FAR), tăng từ chối nhầm (FRR) |
| Ngưỡng "cần xác minh" (vùng xám) | {{NGUONG_CAN_XAC_MINH}} | Có | Nhiều trường hợp chuyển cho người xác minh hơn |
| Ngưỡng chống giả mạo | {{NGUONG_LIVENESS_MAC_DINH}} | Có, trong giới hạn {{GIOI_HAN_NGUONG_LIVENESS}} | Chặn giả mạo tốt hơn, tăng số lần người thật phải thử lại |
| Chế độ so khớp | {{1:1/1:N}} | Có | 1:1 giảm nhận nhầm đáng kể so với 1:N khi danh sách lớn |
| Số lần thử lại trước khi chuyển phương thức thay thế | {{SO_LAN_THU_LAI}} | Có | |

### Nhận nhầm người lạ khi so khớp 1:N với danh sách lớn

FAR là tỷ lệ nhận nhầm trên **một cặp** so khớp. Ở chế độ 1:N, mỗi khuôn mặt đi qua camera được so với **toàn bộ N người** trong danh sách. Với một người **chưa đăng ký** đi qua, xác suất hệ thống khớp nhầm với ít nhất một người trong danh sách xấp xỉ:

**P(nhận nhầm người lạ) ≈ 1 − (1 − FAR)<sup>N</sup> ≈ N × FAR** (khi N × FAR nhỏ)

Ví dụ minh họa (không phải số đo của {{TEN_SAN_PHAM}}):

| FAR mỗi cặp | N = 50 | N = 500 | N = 5.000 |
|---|---|---|---|
| 0,1% | ≈ 4,9% | ≈ 39% | ≈ 99% |
| 0,01% | ≈ 0,5% | ≈ 4,9% | ≈ 39% |
| 0,001% | ≈ 0,05% | ≈ 0,5% | ≈ 4,9% |

Hệ quả:

1. Cùng một ngưỡng, **danh sách càng lớn thì càng dễ nhận nhầm người lạ** thành người có quyền ra vào. Tăng ngưỡng giảm nhận nhầm nhưng tăng từ chối nhầm (FRR): người thật bị từ chối nhiều hơn và phải dùng phương thức thay thế.
2. {{TEN_NHA_CUNG_CAP}} công bố **quy mô danh sách tối đa khuyến nghị cho mỗi điểm nhận diện** ở từng ngưỡng: {{QUY_MO_DANH_SACH_TOI_DA}} người ở ngưỡng mặc định. Hệ thống cảnh báo khi danh sách gán cho một đầu đọc, camera vượt mức này.
3. Khi vượt quy mô khuyến nghị, chọn một hoặc kết hợp: chia danh sách theo cửa, khu vực (mỗi đầu đọc chỉ nạp người có quyền qua cửa đó); dùng **1:1** (thẻ hoặc mã nhân viên kết hợp khuôn mặt); tăng ngưỡng kèm phương thức thay thế; không dùng kết quả nhận diện để tự động kết luận bất lợi.
4. Số đo trên ảnh đăng ký chất lượng tốt thường **tốt hơn** thực tế lắp đặt (ánh sáng, góc nghiêng, chuyển động). Kỹ thuật viên đo thử tại hiện trường khi bàn giao (K8).

Căn cứ: nguyên tắc bảo đảm tính chính xác của dữ liệu cá nhân (khoản 3 Điều 3 Luật Bảo vệ dữ liệu cá nhân; không bảo đảm tính chính xác bị phạt 20–40 triệu đồng theo điểm b khoản 1 Điều 39 Nghị định số 330/2026/NĐ-CP); độ tin cậy của thuật toán (điểm a khoản 5 Điều 10 Nghị định số 356/2025/NĐ-CP); quyết định tự động phải có cơ chế để con người đánh giá lại (điểm b khoản 3 Điều 67 Nghị định số 330/2026/NĐ-CP).

## B.4. Chống giả mạo khuôn mặt

| Nội dung | Mô tả |
|---|---|
| Phương pháp | {{PHUONG_PHAP_LIVENESS}} *(ví dụ: thụ động bằng một ảnh RGB; hồng ngoại; cảm biến chiều sâu; kết hợp)* |
| Loại tấn công đã kiểm thử | {{LOAI_TAN_CONG_DA_KIEM_THU}} *(ví dụ: ảnh in, ảnh trên màn hình điện thoại, phát lại video, mặt nạ giấy, mặt nạ 3D, hình ảnh do AI tạo — deepfake)* |
| Kết quả kiểm thử | APCER {{APCER_KIEM_THU}}; BPCER {{BPCER_KIEM_THU}} *(APCER: tỷ lệ tấn công giả mạo bị chấp nhận nhầm; BPCER: tỷ lệ người thật bị coi nhầm là giả mạo)* |
| Tiêu chuẩn, phương pháp kiểm thử | {{PHUONG_PHAP_KIEM_THU_LIVENESS}} |
| Đơn vị kiểm thử, ngày | {{DON_VI_KIEM_THU}}, {{NGAY_KIEM_THU}} |
| Giới hạn đã biết | {{GIOI_HAN_LIVENESS}} |

Luồng video từ camera thường (không có cảm biến hồng ngoại, chiều sâu) có khả năng chống giả mạo thấp hơn thiết bị đầu cuối chuyên dụng. Không dùng camera thường cho quyết định ra vào khu vực nhạy cảm nếu không có yếu tố xác thực thứ hai.

## B.5. Chỉ số độ chính xác

**FAR** (tỷ lệ nhận nhầm): tỷ lệ lần so khớp giữa hai người khác nhau bị hệ thống coi là cùng một người. **FRR** (tỷ lệ từ chối nhầm): tỷ lệ lần so khớp đúng người nhưng hệ thống không nhận ra.

| Ngưỡng | FAR (mỗi cặp) | FRR | Nhận nhầm người lạ ước tính với N = {{QUY_MO_DANH_SACH_THAM_CHIEU}} | Chế độ | Bộ dữ liệu kiểm thử | Điều kiện |
|---|---|---|---|---|---|---|
| {{NGUONG_SO_KHOP_MAC_DINH}} (mặc định) | {{FAR_KIEM_THU}} | {{FRR_KIEM_THU}} | {{NHAN_NHAM_NGUOI_LA_MAC_DINH}} | {{1:1/1:N với N = ...}} | {{BO_DU_LIEU_KIEM_THU}} | {{DIEU_KIEN_KIEM_THU}} |
| {{NGUONG_THAY_THE_1}} | {{FAR_NGUONG_1}} | {{FRR_NGUONG_1}} | {{NHAN_NHAM_NGUOI_LA_1}} | | | |
| {{NGUONG_THAY_THE_2}} | {{FAR_NGUONG_2}} | {{FRR_NGUONG_2}} | {{NHAN_NHAM_NGUOI_LA_2}} | | | |

Cột "nhận nhầm người lạ" tính theo công thức tại mục B.3. Ghi rõ số người, số mẫu của bộ kiểm thử; bộ kiểm thử nhỏ (vài trăm người) chỉ cho kết quả sơ bộ, chưa đủ để công bố là độ chính xác của sản phẩm.

Nguồn số liệu: báo cáo kiểm thử số {{SO_BAO_CAO_KIEM_THU}} ngày {{NGAY_KIEM_THU}} do {{DON_VI_KIEM_THU}} thực hiện. Số liệu trong phòng thí nghiệm thường tốt hơn thực tế lắp đặt; khách hàng nên theo dõi tỷ lệ từ chối nhầm thực tế theo mục B.8.

## B.6. Điều kiện ảnh hưởng đến độ chính xác

| Điều kiện | Ảnh hưởng | Khuyến nghị lắp đặt, vận hành |
|---|---|---|
| Ánh sáng: ngược sáng, quá tối, đèn nhấp nháy | Tăng từ chối nhầm | Tránh lắp đối diện cửa kính, nắng chiếu; bổ sung đèn |
| Góc nghiêng, chiều cao lắp đặt | Tăng từ chối nhầm | Lắp theo hướng dẫn {{TAI_LIEU_HUONG_DAN_LAP_DAT}}; góc nghiêng không quá {{GOC_NGHIENG_TOI_DA}} |
| Khẩu trang, kính râm, mũ | Tăng từ chối nhầm; một số mẫu tăng nhận nhầm | Bật chế độ đeo khẩu trang nếu có; yêu cầu bỏ kính râm |
| Chất lượng ảnh đăng ký kém | Tăng cả hai loại lỗi | Đăng ký trực tiếp tại thiết bị, đủ sáng, nhìn thẳng; không dùng ảnh thẻ cũ |
| Thay đổi ngoại hình theo thời gian (trẻ em lớn lên, râu, phẫu thuật) | Tăng từ chối nhầm | Cho phép đăng ký lại; với học sinh, đăng ký lại {{CHU_KY_DANG_KY_LAI_HOC_SINH}} |
| Người có ngoại hình rất giống nhau (sinh đôi, người thân) | Tăng nhận nhầm | Dùng 1:1 hoặc thêm yếu tố thứ hai cho khu vực quan trọng |
| Danh sách đăng ký lớn (1:N) | Tăng nhận nhầm | Xem mục B.3 |
| Đông người, chuyển động nhanh | Bỏ sót, nhận nhầm | Lắp tại vị trí có lối đi một người |

## B.7. Sai lệch theo nhóm người

Nhà cung cấp kiểm thử độ chính xác theo từng nhóm để phát hiện sai lệch. Việc gắn nhãn nhóm chỉ thực hiện **trên bộ dữ liệu kiểm thử**; sản phẩm **không** suy luận giới tính, độ tuổi, màu da hay dân tộc của người dùng.

| Nhóm | Số mẫu kiểm thử | FAR | FRR | Chênh lệch so với trung bình |
|---|---|---|---|---|
| Nam | {{SO_MAU_NHOM_1}} | {{FAR_NHOM_1}} | {{FRR_NHOM_1}} | {{CHENH_LECH_NHOM_1}} |
| Nữ | {{SO_MAU_NHOM_2}} | {{FAR_NHOM_2}} | {{FRR_NHOM_2}} | {{CHENH_LECH_NHOM_2}} |
| Dưới 18 tuổi | {{SO_MAU_NHOM_3}} | {{FAR_NHOM_3}} | {{FRR_NHOM_3}} | {{CHENH_LECH_NHOM_3}} |
| 18–60 tuổi | {{SO_MAU_NHOM_4}} | {{FAR_NHOM_4}} | {{FRR_NHOM_4}} | {{CHENH_LECH_NHOM_4}} |
| Trên 60 tuổi | {{SO_MAU_NHOM_5}} | {{FAR_NHOM_5}} | {{FRR_NHOM_5}} | {{CHENH_LECH_NHOM_5}} |
| Theo thang màu da {{THANG_MAU_DA}} | {{SO_MAU_NHOM_6}} | {{FAR_NHOM_6}} | {{FRR_NHOM_6}} | {{CHENH_LECH_NHOM_6}} |

Ngưỡng chênh lệch chấp nhận nội bộ: {{NGUONG_CHENH_LECH_CHAP_NHAN}}. Kết luận: {{KET_LUAN_SAI_LECH}}. Nhóm có sai lệch vượt ngưỡng và biện pháp khắc phục: {{BIEN_PHAP_GIAM_SAI_LECH}}.

Nếu **chưa** kiểm thử theo nhóm, ghi rõ "Chưa kiểm thử sai lệch theo nhóm; dự kiến hoàn thành ngày {{NGAY_DU_KIEN_KIEM_THU_NHOM}}" và khuyến nghị khách hàng áp dụng mục B.8 chặt hơn.

Căn cứ: nguyên tắc bảo đảm công bằng, không thiên lệch, không phân biệt đối xử trong hoạt động trí tuệ nhân tạo (khoản 3 Điều 4 Luật Trí tuệ nhân tạo số 134/2025/QH15). Với cấu hình rủi ro cao, hệ thống quản lý rủi ro của nhà cung cấp phải bảo đảm chất lượng, tính phù hợp và tính đại diện của dữ liệu huấn luyện, dữ liệu kiểm thử và dữ liệu đánh giá (điểm b khoản 2 Điều 15 Nghị định số 142/2026/NĐ-CP).

## B.8. Cơ chế con người xem xét lại

Sản phẩm hỗ trợ cơ chế để con người giám sát và đánh giá lại quyết định tự động, đáp ứng điểm b khoản 3 Điều 67 Nghị định số 330/2026/NĐ-CP và nguyên tắc duy trì sự kiểm soát, khả năng can thiệp của con người đối với mọi quyết định của hệ thống trí tuệ nhân tạo (khoản 2 Điều 4 Luật Trí tuệ nhân tạo số 134/2025/QH15). Với cấu hình rủi ro cao, đây là nghĩa vụ thiết kế của nhà cung cấp (điểm d khoản 1 Điều 14) và nghĩa vụ duy trì của bên triển khai (điểm b khoản 2 Điều 14 Luật này; điểm c khoản 2 Điều 15 Nghị định số 142/2026/NĐ-CP):

1. **Vùng "cần xác minh":** điểm tương đồng nằm giữa ngưỡng "cần xác minh" và ngưỡng chấp nhận thì sự kiện được đánh dấu để người trực xác nhận; không tự động ghi nhận kết quả bất lợi.

2. **Hàng đợi xem xét lại:** mọi sự kiện "không nhận diện được", "đi muộn", "vắng", "cảnh báo danh sách" có thể được chủ thể hoặc quản lý yêu cầu xem lại; người xem xét thấy ảnh sự kiện, điểm tương đồng, kết quả liveness, lịch sử thử lại.

3. **Không tự động hóa hệ quả:** kết quả chấm công, điểm danh chuyển sang hệ thống tiền lương, học vụ ở trạng thái "chờ xác nhận" cho đến khi hết thời hạn khiếu nại {{THOI_HAN_KHIEU_NAI_KET_QUA}} hoặc được người có thẩm quyền xác nhận.

4. **Ghi nhật ký:** mọi lần xem xét lại ghi người xem, thời điểm, kết luận, lý do.

5. **Thống kê:** báo cáo định kỳ tỷ lệ từ chối nhầm, số yêu cầu xem xét lại, số kết quả bị đảo ngược; tỷ lệ bất thường tại một thiết bị là dấu hiệu cần kiểm tra lắp đặt.

6. **Chế độ "xác minh trước khi thực thi":** mọi kết quả nhận diện (kể cả kết quả khớp) chỉ tạo hệ quả — mở cổng, chặn cổng, cảnh báo can thiệp, ghi vi phạm — sau khi người có thẩm quyền do khách hàng chỉ định xem xét và xác nhận. Người xác minh thấy ảnh sự kiện, ảnh đăng ký, điểm tương đồng, kết quả chống giả mạo và có quyền chấp nhận, từ chối hoặc thay đổi kết quả. Chế độ này dùng cho danh sách đen và cho dự án tại đầu mối giao thông, công trình công cộng quan trọng. Khi chế độ được bật và việc xác minh là thực chất, cấu hình triển khai không đáp ứng điều kiện "thực thi mà không qua xác minh độc lập của cán bộ có thẩm quyền" tại mục VI.6 Phụ lục Quyết định số 33/2026/QĐ-TTg (tinh thần điểm b khoản 2 Điều 8 Nghị định số 142/2026/NĐ-CP). Người xác minh phải có đủ thông tin, thẩm quyền để đánh giá độc lập, can thiệp hoặc bác bỏ kết quả của hệ thống (khoản 5 Điều 11 Nghị định số 142/2026/NĐ-CP).

7. **Không có tùy chọn vô hiệu hóa:** với cấu hình rủi ro cao theo Luật Trí tuệ nhân tạo, sản phẩm không cung cấp tùy chọn tắt các cơ chế tại mục này. Cản trở, vô hiệu hóa hoặc làm sai lệch cơ chế giám sát, can thiệp và kiểm soát của con người là hành vi bị nghiêm cấm (khoản 4 Điều 7 Luật Trí tuệ nhân tạo số 134/2025/QH15). Mọi thay đổi cấu hình liên quan được ghi nhật ký (B4 mục 4).

Khách hàng phân công người xem xét lại và thời hạn xử lý {{THOI_HAN_XEM_XET_LAI}} trong quy trình nội bộ.

## B.9. Ảnh hưởng tới quyền, lợi ích của chủ thể và biện pháp giảm thiểu

| Tình huống | Ảnh hưởng có thể xảy ra | Biện pháp của sản phẩm | Việc khách hàng phải làm |
|---|---|---|---|
| Từ chối nhầm tại cửa | Không vào được nơi làm việc, chậm giờ | Phương thức thay thế; thử lại; chuyển người trực | Bố trí người trực hoặc thẻ dự phòng |
| Từ chối nhầm khi chấm công, điểm danh | Bị ghi đi muộn, vắng; ảnh hưởng tiền lương, đánh giá | Vùng "cần xác minh"; trạng thái chờ xác nhận; hàng đợi xem xét lại | Không trừ lương, kỷ luật chỉ dựa trên kết quả máy |
| Nhận nhầm | Người khác vào được khu vực; ghi công sai người | Ngưỡng chấp nhận; liveness; 1:1 cho khu vực quan trọng | Chọn ngưỡng theo mức độ quan trọng của khu vực |
| Nhận nhầm vào danh sách đen | Bị nghi ngờ, bị ngăn cản oan | Cảnh báo chỉ gửi cho người trực, không tự động hành động; hiển thị điểm tương đồng | Quy chế xác minh trước khi can thiệp; quy chế gỡ tên khỏi danh sách |
| Lộ template, ảnh đăng ký | Không thể "đổi" khuôn mặt như đổi mật khẩu | Mã hóa; bảo mật vật lý; phân quyền (B4) | Thông báo cho chủ thể trong 72 giờ nếu có sự cố (NĐ 356 Đ29) |
| Tích lũy nhật ký lâu dài | Lộ thói quen, lịch trình cá nhân | Tự động xóa theo thời hạn; quyền xem nhật ký tách riêng | Đặt thời hạn lưu phù hợp mục đích |

## B.10. Quyền không tham gia, phương thức thay thế và xóa hồ sơ nhận dạng

- **Phương thức thay thế** được hỗ trợ: {{PHUONG_THUC_THAY_THE}}. Phương thức thay thế cho quyền ra vào, ghi công tương đương, không kèm điều kiện bất lợi.
- **Từ chối, rút lại đồng ý:** quản trị viên đánh dấu người dùng "không dùng khuôn mặt"; hệ thống xóa template và ảnh đăng ký, chuyển sang phương thức thay thế trong cùng một thao tác.
- **Chỉnh sửa, ẩn danh, xóa hồ sơ nhận dạng** (khoản 6 Điều 10 Nghị định số 356/2025/NĐ-CP): đăng ký lại ảnh; ẩn danh nhật ký sự kiện cũ (thay họ tên bằng mã ẩn danh) khi không còn cần định danh; xóa template, ảnh đăng ký, ảnh sự kiện của một người. Việc xóa được thực hiện trên máy chủ và mọi thiết bị đầu cuối đã đồng bộ; hệ thống xuất biên bản xóa.
- **Xuất dữ liệu cho chủ thể:** xuất danh sách sự kiện và ảnh sự kiện của một người để đáp ứng yêu cầu xem, cung cấp dữ liệu.

## B.11. Nhận diện biển số (nếu dùng)

Hệ thống phát hiện vùng biển số, đọc ký tự và so với danh sách xe đăng ký. Kết quả có thể sai khi biển bẩn, mờ, bị che, góc chụp lệch, trời mưa hoặc ban đêm. Tỷ lệ đọc đúng: {{TY_LE_DOC_DUNG_BIEN_SO}} theo báo cáo {{SO_BAO_CAO_KIEM_THU_LPR}}. Khi đọc sai hoặc không có trong danh sách, barie không tự mở và nhân viên bãi xe xử lý. Hệ thống không dựng hành trình xe qua nhiều điểm trừ khi khách hàng bật tính năng tra cứu theo vụ việc (B2, F9).

## Hướng dẫn điền

**Phần A (khách hàng điền):** giữ độ dài một trang; chọn một phương án trong mỗi ngoặc nhọn; nếu dùng nhiều mục đích (vừa ra vào vừa chấm công) thì ghi đủ. Thời hạn 02 ngày làm việc và 20 ngày ở mục 7 lấy từ khoản 4 Điều 5 Nghị định số 356/2025/NĐ-CP; nếu khách hàng giao nhà cung cấp dịch vụ xóa dữ liệu trên cloud thì thời hạn là 30 ngày. Với học sinh, dùng lời văn dành cho phụ huynh và nêu người đại diện theo pháp luật thay mặt thực hiện quyền (Luật 91 Đ24.2). Placeholder riêng: {{VI_TRI_CAMERA_NHAN_DIEN}}, {{BO_PHAN_XU_LY_TAI_CHO}}, {{BO_PHAN_XEM_XET_LAI}}, {{PHUONG_THUC_THAY_THE}}.

**Phần B (nhà cung cấp điền):**

- Mọi chỉ số (FAR, FRR, APCER, BPCER, số theo nhóm, tỷ lệ đọc biển số) lấy từ báo cáo kiểm thử có số, ngày, đơn vị thực hiện. Không có báo cáo thì ghi "Chưa kiểm thử" — không để trống, không ước lượng.
- {{THANG_MAU_DA}}: tên thang phân loại dùng trong bộ dữ liệu kiểm thử. Nhãn này là thuộc tính của bộ dữ liệu kiểm thử; không dùng trong sản phẩm.
- {{PHIEN_BAN_MO_HINH}}, {{PHIEN_BAN_MO_HINH_LIVENESS}}: cập nhật tài liệu mỗi khi đổi mô hình; thông báo cho khách hàng khi độ chính xác thay đổi đáng kể.
- Mục B.4: nêu cả giới hạn (loại tấn công chưa kiểm thử). Việc chống giả mạo có ý nghĩa vì hành vi dùng AI, deepfake giả mạo sinh trắc học để xác thực trái phép đã bị xử phạt tại NĐ 330 Đ34.2.c.
- Mục B.0: {{THE_MO_HINH_DAC_TRUNG}}, {{THE_MO_HINH_LIVENESS}} ghi tên, ngày của thẻ mô hình (tự lập, hoặc do bên cung cấp mô hình phát hành); chưa có thì ghi "Chưa có" và đưa vào kế hoạch. {{THOA_THUAN_THONG_TIN_MO_HINH}} ghi số, ngày hợp đồng hoặc điều khoản với bên cung cấp mô hình (NĐ 142 Đ16.6); mô hình tự phát triển ghi "Không áp dụng". Giá trị nguồn gốc dùng chung với B7 mục 1.
- Mục B.8 điểm 6: chưa có văn bản định nghĩa "đầu mối giao thông, công trình công cộng quan trọng" (QĐ 33 Phụ lục mục VI.6) — **[CẦN ĐỐI CHIẾU]**. Lập luận "xác minh trước khi thực thi đưa cấu hình ra khỏi dòng VI.6" là cách hiểu theo câu chữ của Danh mục; ghi lập luận vào hồ sơ dự án (B2 mục 2.3).
- Khi nộp Phần B, hồ sơ kỹ thuật cho cơ quan nhà nước: **đánh dấu phần thuộc bí mật kinh doanh, bí mật công nghệ**. Cơ quan nhà nước có trách nhiệm bảo đảm bí mật hồ sơ kỹ thuật, dữ liệu huấn luyện, mã nguồn và thuật toán được cung cấp (Luật 134 Đ31.1); việc giải trình không bắt buộc tiết lộ mã nguồn, thuật toán chi tiết, bộ tham số (Luật 134 Đ14.1.e; NĐ 142 Đ16.4).

## Bằng chứng cần lưu

- Bản Phần A đã ban hành, ảnh chụp nơi niêm yết, ngày niêm yết (khách hàng lưu).
- Bản Phần B theo từng phiên bản mô hình (nhà cung cấp lưu).
- Thẻ mô hình; hợp đồng, điều khoản phối hợp cung cấp thông tin kỹ thuật với bên cung cấp mô hình (NĐ 142 Đ16.6).
- Ảnh chụp màn hình thiết bị, kiosk có thông báo đang tương tác với hệ thống AI (Luật 134 Đ11.1).
- Báo cáo kiểm thử độ chính xác, chống giả mạo, sai lệch theo nhóm (bộ dữ liệu, điều kiện, ngày, đơn vị).
- Nhật ký xem xét lại, thống kê tỷ lệ từ chối nhầm, số kết quả bị đảo ngược (khách hàng lưu).
- Nhật ký từ chối, rút đồng ý và biên bản xóa hồ sơ nhận dạng.
