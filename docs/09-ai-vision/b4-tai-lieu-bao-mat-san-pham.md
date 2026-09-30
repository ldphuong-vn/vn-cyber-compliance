# Mẫu Tài liệu bảo mật sản phẩm AI vision

> **Căn cứ:** Luật 91/2025/QH15 Đ12.1, Đ14.3, Đ14.4, Đ30.3, Đ31.4.a, Đ34; NĐ 356/2025/NĐ-CP Đ4.2, Đ6.3, Đ7.2, Đ10.5.a, Đ10.5.c, Đ12.4, Đ19.3.đ, Mẫu số 10 mục II.11; NĐ 330/2026/NĐ-CP Đ34.2.c, Đ51.1.b–c, Đ52.3, Đ55.2, Đ67.2.e, Đ67.2.g, Đ69.2.b, Đ70.1.c–d; NĐ 331/2026/NĐ-CP Đ13.2.c; Luật 134/2025/QH15 Đ7.4, Đ12, Đ13.1, Đ14.1.c, Đ14.2.c, Đ28.3, Đ29.4, Đ29.5; NĐ 142/2026/NĐ-CP Đ5.5, Đ5.6, Đ11.5, Đ19, Đ36.3.c, Mẫu AI01a; TCVN 14423:2026 (chỉ dẫn chiếu tên); TT 48/2026/TT-BCA (QCVN 11:2026/BCA), TT 125/2026/TT-BCA (chỉ dẫn chiếu tên — chưa có toàn văn trong `sources/`) · **Đối chiếu văn bản gốc:** 29/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Mã tài liệu:** B4 (security whitepaper). **Ai lập:** trưởng nhóm bảo mật sản phẩm của nhà cung cấp; nhân sự BVDLCN rà soát. **Ai dùng:** khách hàng (bộ phận CNTT, nhân sự BVDLCN) để chứng minh biện pháp bảo vệ trong hồ sơ đánh giá tác động; hồ sơ thầu; đại lý khi lắp đặt.

**Áp dụng mô hình:** M1–M5. Mục 9 có phần riêng cho nền tảng cloud (M3, M4). Mỗi mục gồm ba phần: **Cam kết của sản phẩm** (nhà cung cấp chịu trách nhiệm), **Bằng chứng** (tài liệu chứng minh — placeholder), **Khách hàng cần cấu hình** (trách nhiệm của bên kiểm soát khi vận hành).

| Yêu cầu | Căn cứ | Mức phạt tổ chức nếu vi phạm |
|---|---|---|
| Bảo mật vật lý thiết bị lưu, truyền sinh trắc học; hạn chế truy cập; hệ thống theo dõi phát hiện xâm phạm | Luật 91 Đ31.4.a | 50–70 triệu (NĐ 330 Đ70.1.c, Đ70.1.d) |
| Hệ thống AI tích hợp biện pháp bảo mật; xác thực, định danh, phân quyền truy cập | Luật 91 Đ30.3 | 50–70 triệu (NĐ 330 Đ67.2.g) |
| Hệ thống AI đáp ứng tiêu chuẩn ANM, bảo vệ dữ liệu toàn diện; hệ thống giám sát, cảnh báo sớm | NĐ 356 Đ10.5.a, Đ10.5.c | 50–70 triệu (NĐ 330 Đ67.2.e) |
| Chuyển giao dữ liệu nhạy cảm phải bảo mật vật lý, mã hóa, ẩn danh | NĐ 356 Đ7.2 | 50–80 triệu (NĐ 330 Đ52.3) |
| Dữ liệu trên cloud mã hóa khi lưu và truyền, phân quyền nghiêm ngặt | NĐ 356 Đ12.4 | 50–70 triệu (NĐ 330 Đ69.2.b, Đ69.2.c) |
| Xóa, hủy bằng biện pháp an toàn; ngăn khôi phục trái phép | Luật 91 Đ14.3 | 10–30 triệu (NĐ 330 Đ51.1.b, Đ51.1.c) |
| Thiết lập mặc định phải bảo đảm nguyên tắc bảo vệ dữ liệu | NĐ 356 Đ6.3 *(quy định cho việc xin đồng ý; áp dụng theo tinh thần cho cấu hình mặc định của sản phẩm)* | — |
| Dữ liệu nhạy cảm: phân quyền giới hạn truy cập, quy trình, biện pháp bảo mật | NĐ 356 Đ4.2 | — |
| Hệ thống AI rủi ro cao: lập, lưu giữ **nhật ký hoạt động**; cung cấp hồ sơ kỹ thuật, nhật ký lưu vết cho cơ quan khi thanh tra, kiểm tra | Luật 134 Đ14.1.c, Đ28.3 | Chưa có nghị định xử phạt riêng về AI (Luật 134 Đ29.5) — **[CẦN ĐỐI CHIẾU]** |
| Sự cố AI nghiêm trọng: khắc phục, tạm dừng hoặc thu hồi; báo cáo sơ bộ qua Cổng một cửa (Mẫu AI01a) 72 giờ hoặc 05 ngày làm việc kể từ thời điểm xác nhận; lưu nhật ký liên quan; báo cáo chính thức trong 15 ngày | Luật 134 Đ12.2; NĐ 142 Đ19.3, Đ19.4 | Như trên |
| Không cản trở, vô hiệu hóa cơ chế giám sát, can thiệp của con người (hành vi bị nghiêm cấm) | Luật 134 Đ7.4 | Như trên |
| Hệ thống bị bên thứ ba xâm nhập, chiếm quyền điều khiển: nhà cung cấp, bên triển khai có lỗi để hệ thống bị xâm nhập phải liên đới bồi thường | Luật 134 Đ29.4 | Bồi thường dân sự |
| Camera IP, camera nhận dạng đưa ra thị trường từ 01/7/2026: công bố hợp quy QCVN 11:2026/BCA, gắn dấu CR | TT 48/2026/TT-BCA; TT 125/2026/TT-BCA — **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** | **[CẦN ĐỐI CHIẾU]** |

**Tiêu chuẩn:** TCVN 14423:2026 *An ninh mạng – Hệ thống thông tin – Yêu cầu cơ bản* áp dụng cho **hệ thống thông tin** theo cấp độ (của khách hàng; của nền tảng cloud của nhà cung cấp), không phải chứng nhận cho một thiết bị. Tài liệu này chỉ dẫn chiếu tên tiêu chuẩn; không chép nội dung (tiêu chuẩn có bản quyền). TCVN 14423:2026 không thay cho hợp quy thiết bị.

**Quy chuẩn kỹ thuật cho thiết bị camera — [CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]:**

- QCVN 135:2024/BTTTT (ban hành kèm Thông tư 21/2024/TT-BTTTT) **hết hiệu lực từ 01/7/2026**.
- Thay bằng **QCVN 11:2026/BCA** *Thiết bị camera giám sát sử dụng giao thức Internet – Các yêu cầu an ninh mạng cơ bản*, ban hành kèm Thông tư 48/2026/TT-BCA ngày 12/5/2026, hiệu lực 01/7/2026. Cơ quan quản lý: **Bộ Công an**.
- Theo nguồn thứ cấp, Thông tư 125/2026/TT-BCA xếp **camera giám sát, camera nhận dạng** vào nhóm sản phẩm phải **công bố hợp quy, gắn dấu CR** trước khi lưu hành. Chưa xác định được: đầu đọc khuôn mặt kiểm soát ra vào, camera nhận diện biển số, thiết bị AI box, đầu ghi có thuộc phạm vi không; phương thức (tự đánh giá hay chứng nhận); chuyển tiếp cho hàng đã nhập trước 01/7/2026.
- Theo nguồn thứ cấp, QCVN 11 giữ các nhóm yêu cầu của QCVN 135 (mật khẩu duy nhất, quản lý lỗ hổng, cập nhật an toàn, kênh giao tiếp an toàn, bảo vệ dữ liệu, xóa dữ liệu…) và **bổ sung**: cho phép cấu hình **lưu dữ liệu tại Việt Nam**; thiết lập và **bảo vệ nhật ký hệ thống**; nhà sản xuất **công bố chính sách xử lý lỗ hổng** (đầu mối tiếp nhận, thời hạn xác nhận, cập nhật trạng thái). Số mục cụ thể chưa đối chiếu.
- **Mô hình AI, phần mềm** (VMS, ứng dụng nhận diện) **không có** quy chuẩn hợp quy tương ứng. Firmware chạy trên camera vẫn thuộc yêu cầu của quy chuẩn thiết bị.
- Tiêu chuẩn, quy chuẩn kỹ thuật về trí tuệ nhân tạo (Luật 134 Đ13.1 câu thứ hai, Đ14.2.c) **chưa thấy ban hành** tại 29/09/2026 (chưa xác minh). Khi hệ thống AI tích hợp trong sản phẩm thuộc phạm vi quy chuẩn kỹ thuật, phải tuân thủ quy chuẩn đó và các yêu cầu riêng của thành phần AI (NĐ 142 Đ5.5); kết quả hợp quy còn hiệu lực được dùng để chứng minh phần yêu cầu tương ứng (NĐ 142 Đ5.6).

**Nguyên tắc viết:** chỉ ghi cam kết sản phẩm đang đáp ứng. Tính năng đang phát triển ghi ở cột "Lộ trình" (mục 10), không ghi vào cam kết. Mô tả sai biện pháp bảo mật trong hồ sơ của khách hàng có thể bị coi là cung cấp thông tin sai lệch trong hồ sơ đánh giá tác động (NĐ 330 Đ55.2).

---

<p align="center"><b>TÀI LIỆU BẢO MẬT SẢN PHẨM</b><br/><b>{{TEN_SAN_PHAM}} — phiên bản {{PHIEN_BAN_SAN_PHAM}}</b></p>

| Thông tin tài liệu | |
|---|---|
| Mã tài liệu | {{MA_TAI_LIEU}} |
| Nhà cung cấp | {{TEN_NHA_CUNG_CAP}} |
| Ngày ban hành | {{NGAY_BAN_HANH_TAI_LIEU}} |
| Đầu mối bảo mật sản phẩm | {{DAU_MOI_BAO_MAT_SAN_PHAM}} |
| Tiếp nhận báo cáo lỗ hổng | {{EMAIL_BAO_CAO_LO_HONG}} |
| Tài liệu liên quan | Mô tả luồng dữ liệu và kiến trúc (B1); Phân loại rủi ro hệ thống AI (B2); Giải thích thuật toán (B3) |

## Tổng quan

{{TEN_SAN_PHAM}} xử lý dữ liệu sinh trắc học (ảnh đăng ký, đặc trưng khuôn mặt) là dữ liệu cá nhân nhạy cảm theo điểm đ khoản 1 Điều 4 Nghị định số 356/2025/NĐ-CP. Tài liệu này mô tả các biện pháp bảo mật được tích hợp trong sản phẩm theo khoản 3 Điều 30 và điểm a khoản 4 Điều 31 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15, và phần việc khách hàng phải cấu hình khi vận hành.

Bảo mật là trách nhiệm chung: nhà cung cấp bảo đảm sản phẩm có khả năng bảo vệ; khách hàng — bên kiểm soát dữ liệu — quyết định cấu hình, phân quyền, thời hạn lưu và vận hành hằng ngày.

## 1. Bảo mật vật lý thiết bị lưu và truyền dữ liệu sinh trắc học

**Cam kết của sản phẩm**

- Thiết bị đầu cuối nhận diện khuôn mặt: vỏ {{TIEU_CHUAN_VO_THIET_BI}}; cảm biến tháo vỏ phát cảnh báo về máy chủ và {{xóa khóa phiên/khóa thiết bị}} khi bị mở trái phép.
- Thiết bị đầu cuối **không lưu ảnh đăng ký**; chỉ lưu template đã mã hóa bằng khóa riêng của thiết bị (mục 2).
- Cổng gỡ lỗi (UART, JTAG), cổng USB dịch vụ: vô hiệu hóa ở bản xuất xưởng.
- Khởi động an toàn: firmware được ký số; thiết bị từ chối chạy firmware không có chữ ký hợp lệ của nhà cung cấp.
- Máy chủ, đầu ghi: hỗ trợ mã hóa toàn bộ ổ đĩa lưu dữ liệu.

**Bằng chứng**

☐ Bản thông số kỹ thuật thiết bị {{MA_TAI_LIEU_THONG_SO}}.

☐ Kết quả kiểm tra tháo vỏ, kiểm tra cổng gỡ lỗi trong báo cáo kiểm thử bảo mật phần cứng {{SO_BAO_CAO_KIEM_THU_PHAN_CUNG}}.

☐ Mô tả cơ chế khởi động an toàn {{TAI_LIEU_KHOI_DONG_AN_TOAN}}.

**Khách hàng cần cấu hình**

- Đặt máy chủ, đầu ghi trong phòng có khóa và kiểm soát người ra vào; lập sổ theo dõi ra vào phòng máy chủ.
- Lắp thiết bị đầu cuối ở độ cao, vị trí khó tháo; bật cảnh báo tháo vỏ.
- Bật mã hóa ổ đĩa trên máy chủ, đầu ghi.
- Khi thay thế, bảo hành thiết bị có lưu dữ liệu: thực hiện xóa an toàn theo mục 8 trước khi mang ra khỏi cơ sở.

## 2. Mã hóa khi lưu, khi truyền và quản lý khóa

**Cam kết của sản phẩm**

| Dữ liệu | Mã hóa khi lưu | Mã hóa khi truyền |
|---|---|---|
| Template khuôn mặt | {{THUAT_TOAN_MA_HOA_LUU}}, khóa riêng cho kho template | {{PHIEN_BAN_TLS}}; template đồng bộ xuống thiết bị được mã hóa thêm một lớp bằng khóa của thiết bị |
| Ảnh đăng ký (khi khách hàng bật lưu), ảnh sự kiện | {{THUAT_TOAN_MA_HOA_LUU}} | {{PHIEN_BAN_TLS}} |
| Cơ sở dữ liệu người đăng ký, nhật ký sự kiện | {{THUAT_TOAN_MA_HOA_LUU}} | {{PHIEN_BAN_TLS}} |
| Video | Mã hóa ổ đĩa ({{có/không}} mặc định) | {{GIAO_THUC_TRUYEN_VIDEO}} |
| Mật khẩu tài khoản | Băm {{THUAT_TOAN_BAM_MAT_KHAU}}, có muối | Không truyền bản rõ |
| Tệp video, ảnh xuất ra | Tùy chọn đặt mật khẩu tệp {{THUAT_TOAN_MA_HOA_TEP_XUAT}}; gắn dấu thời gian và mã người xuất | Theo kênh khách hàng chọn |

Quản lý khóa:

- Khóa mã hóa dữ liệu được lưu **tách khỏi dữ liệu**, trong {{NOI_LUU_KHOA}} *(ví dụ: mô-đun bảo mật phần cứng (HSM), chip bảo mật TPM của máy chủ, kho khóa của hệ điều hành)*.
- Mỗi khách hàng, mỗi thiết bị có khóa riêng; nhà cung cấp **không giữ** khóa của hệ thống on-premise.
- Hỗ trợ xoay vòng khóa định kỳ {{CHU_KY_XOAY_KHOA}} và khi nghi ngờ lộ khóa.
- Trên cloud: khóa quản lý bởi {{dịch vụ quản lý khóa của nền tảng/khách hàng tự giữ khóa}}; nhân viên vận hành không đọc được khóa.

Dữ liệu sau khi mã hóa vẫn là dữ liệu cá nhân (khoản 1 Điều 12 Luật Bảo vệ dữ liệu cá nhân); mã hóa là biện pháp bảo vệ, không làm thay đổi nghĩa vụ.

**Bằng chứng**

☐ Mô tả kiến trúc mã hóa và quản lý khóa {{TAI_LIEU_QUAN_LY_KHOA}}.

☐ Kết quả quét cấu hình giao thức mã hóa (không còn phiên bản, bộ mã yếu) ngày {{NGAY_QUET_CAU_HINH_MA_HOA}}.

**Khách hàng cần cấu hình**

- Bật mã hóa ổ đĩa video; chọn nơi lưu khóa; lưu bản sao khóa khôi phục ở nơi an toàn, tách khỏi máy chủ.
- Cài chứng thư số cho giao diện quản trị (không dùng chứng thư tự ký trên môi trường chính thức).
- Khi chuyển giao dữ liệu cho bên khác (ví dụ trích video cho cơ quan có thẩm quyền, gửi dữ liệu cho đơn vị tính lương): dùng tệp xuất có mật khẩu, gửi mật khẩu qua kênh riêng (khoản 2 Điều 7 Nghị định số 356/2025/NĐ-CP).

## 3. Xác thực, phân quyền và xác thực đa yếu tố

**Cam kết của sản phẩm**

- Tài khoản cá nhân cho từng người dùng; không có tài khoản dùng chung ẩn; không có tài khoản cài sẵn không đổi được mật khẩu.
- Xác thực đa yếu tố ({{PHUONG_THUC_MFA}}) cho vai trò quản trị, đăng ký khuôn mặt, xuất dữ liệu; bật được cho mọi vai trò.
- Phân quyền theo vai trò, tách các quyền: xem trực tiếp; xem lại; xử lý sự kiện; đăng ký, xóa khuôn mặt; quản lý danh sách đen; xuất dữ liệu; thay đổi thời hạn lưu; quản trị hệ thống; xem nhật ký hệ thống.
- Phân quyền theo phạm vi (khu vực, camera, nhóm người).
- Chính sách mật khẩu cấu hình được; khóa tài khoản sau {{SO_LAN_DANG_NHAP_SAI}} lần đăng nhập sai; phiên tự hết hạn sau {{THOI_GIAN_HET_PHIEN}} phút không thao tác.
- Hỗ trợ đăng nhập một lần qua {{GIAO_THUC_SSO}} với hệ thống định danh của khách hàng.
- Giao diện lập trình (API) dùng khóa riêng cho từng hệ thống kết nối, giới hạn phạm vi dữ liệu.

**Bằng chứng**

☐ Ma trận vai trò – quyền mặc định {{TAI_LIEU_MA_TRAN_QUYEN}}.

☐ Kết quả kiểm thử xâm nhập phần xác thực, phân quyền (mục 6).

**Khách hàng cần cấu hình**

- Bật xác thực đa yếu tố cho mọi tài khoản quản trị, đăng ký khuôn mặt, xuất dữ liệu.
- Phân quyền theo nguyên tắc tối thiểu; người xem video trực tiếp không cần quyền xuất.
- Rà soát danh sách tài khoản {{CHU_KY_RA_SOAT_TAI_KHOAN}}; khóa ngay tài khoản của người nghỉ việc.
- Tài khoản cấp cho nhà cung cấp, đại lý: chỉ tạo khi hỗ trợ, có thời hạn (Thỏa thuận hỗ trợ từ xa).

## 4. Nhật ký, giám sát và phát hiện xâm phạm

**Cam kết của sản phẩm**

- Ghi nhật ký: đăng nhập thành công, thất bại; xem lại video; tra cứu người; đăng ký, sửa, xóa khuôn mặt; thêm, gỡ danh sách đen; xuất dữ liệu (kèm lý do); thay đổi ngưỡng, thời hạn lưu, cấu hình; thay đổi quyền; xóa dữ liệu.
- Nhật ký chỉ ghi thêm, có cơ chế phát hiện sửa đổi ({{CO_CHE_CHONG_SUA_NHAT_KY}}); người quản trị hệ thống không xóa được nhật ký.
- Cảnh báo bất thường: đăng nhập sai nhiều lần; đăng nhập từ địa chỉ lạ; xuất dữ liệu số lượng lớn; tra cứu nhiều người trong thời gian ngắn; truy cập ngoài giờ; thiết bị mất kết nối, bị tháo vỏ; thay đổi thời hạn lưu hoặc tắt nhật ký.
- Gửi nhật ký tới hệ thống giám sát an ninh của khách hàng qua {{GIAO_THUC_GUI_NHAT_KY}}.
- Đồng bộ thời gian với máy chủ thời gian do khách hàng chỉ định.
- Nhật ký hệ thống trên thiết bị camera được bảo vệ chống sửa, xóa trái phép.

**Nhật ký hoạt động của hệ thống AI** (tách khỏi nhật ký truy cập):

- Phiên bản mô hình nhận diện, mô hình chống giả mạo và các ngưỡng đang áp dụng tại từng thời điểm; lịch sử thay đổi mô hình, ngưỡng (người thay đổi, thời điểm, lý do).
- Từng quyết định tự động: thời điểm, thiết bị, kết quả (chấp nhận, cần xác minh, từ chối), điểm tương đồng, kết quả chống giả mạo, phiên bản mô hình. Không lưu template trong nhật ký.
- Từng lần con người xác minh, can thiệp, bác bỏ hoặc thay đổi kết quả của hệ thống (người thực hiện, thời điểm, kết luận, lý do).
- Mọi lần bật, tắt chế độ "xác minh trước khi thực thi" và các cơ chế giám sát của con người (B3 mục B.8).
- Thời hạn lưu mặc định {{THOI_HAN_LUU_NHAT_KY_AI}}; nhật ký liên quan đến một sự cố được giữ đến khi hoàn tất xác minh, khắc phục.

Căn cứ: nhà cung cấp hệ thống trí tuệ nhân tạo có rủi ro cao lập, cập nhật, lưu giữ hồ sơ kỹ thuật và nhật ký hoạt động (điểm c khoản 1 Điều 14 Luật Trí tuệ nhân tạo số 134/2025/QH15); trong thời gian chuyển tiếp khi Danh mục sửa đổi, lưu đầy đủ nhật ký vận hành và các quyết định can thiệp (khoản 5 Điều 11 Nghị định số 142/2026/NĐ-CP); lưu giữ nhật ký hệ thống liên quan đến sự cố nghiêm trọng (khoản 4 Điều 19 Nghị định số 142/2026/NĐ-CP). Khi thanh tra, kiểm tra, tổ chức, cá nhân liên quan có nghĩa vụ cung cấp hồ sơ kỹ thuật, nhật ký lưu vết (khoản 3 Điều 28 Luật Trí tuệ nhân tạo số 134/2025/QH15). Với hệ thống mức thấp, nhật ký này là bằng chứng để giải trình khi có yêu cầu.

**Bằng chứng**

☐ Danh mục sự kiện được ghi nhật ký và danh mục cảnh báo {{TAI_LIEU_DANH_MUC_NHAT_KY}}.

☐ Mẫu nhật ký hoạt động của hệ thống AI xuất từ sản phẩm.

☐ Mẫu báo cáo nhật ký xuất từ sản phẩm.

**Khách hàng cần cấu hình**

- Bật đầy đủ nhật ký; đặt thời hạn lưu nhật ký {{THOI_HAN_LUU_NHAT_KY_HE_THONG}} hoặc theo quy chế của khách hàng.
- Chỉ định người nhận cảnh báo; kết nối với hệ thống giám sát an ninh nếu có.
- Nhân sự BVDLCN rà soát nhật ký xuất dữ liệu, tra cứu người {{CHU_KY_RA_SOAT_NHAT_KY}}.
- Không tắt nhật ký hoạt động của hệ thống AI; khi có sự cố, khóa, sao lưu nhật ký liên quan trước khi khôi phục hệ thống.

## 5. Cấu hình mặc định bảo vệ dữ liệu

**Cam kết của sản phẩm** — trạng thái khi xuất xưởng:

| Hạng mục | Mặc định | Căn cứ tham chiếu |
|---|---|---|
| Nhận diện khuôn mặt trên camera | **Tắt**; bật phải qua bước xác nhận có cảnh báo pháp lý; không bật được trên camera được đánh dấu "khu vực công cộng" nếu chưa xác nhận danh sách người đồng ý | NĐ 330 Đ71.2.a |
| Lưu ảnh đăng ký sau khi tạo template | **Tắt** | Luật 91 Đ3.2 |
| Lưu ảnh thẻ căn cước tại kiosk | **Tắt** | NĐ 356 Đ4.1.i |
| Nhận diện cảm xúc, dựng hành trình, danh sách đen | **Tắt** (mức BV-Cao, BV-Không chấp nhận theo B2) | Luật 91 Đ30.4 |
| Chế độ "xác minh trước khi thực thi" (B3 mục B.8) | **Bật** cho danh sách đen; không có tùy chọn tắt với cấu hình rủi ro cao theo Luật 134 | Luật 134 Đ7.4, Đ14.1.d |
| Thời hạn lưu | Đặt sẵn giá trị gợi ý; tự động xóa khi hết hạn | Luật 91 Đ32.4 |
| Mật khẩu | Không có mật khẩu mặc định dùng chung; mật khẩu duy nhất cho mỗi thiết bị hoặc do người dùng đặt khi khởi tạo; khóa tạm khi đoán sai nhiều lần | Luật 91 Đ30.3; QCVN 11:2026/BCA **[CẦN ĐỐI CHIẾU]** |
| Dịch vụ không cần thiết (Telnet, UPnP, P2P ra Internet) | **Tắt** | NĐ 356 Đ10.5.a |
| Đồng bộ cloud, truy cập từ xa của nhà cung cấp | **Tắt** | Luật 91 Đ20.1 |
| Nơi lưu dữ liệu khi dùng cloud, P2P | Cấu hình được lưu tại Việt Nam; mặc định lưu tại chỗ hoặc cloud đặt tại Việt Nam | Luật 91 Đ20.1; QCVN 11:2026/BCA **[CẦN ĐỐI CHIẾU]** |
| Xuất video | Yêu cầu ghi lý do; tùy chọn làm mờ khuôn mặt, biển số người không liên quan bật sẵn | NĐ 330 Đ71.2.b |
| Phương thức thay thế (thẻ, PIN, QR) | Bật sẵn song song với khuôn mặt | NĐ 356 Đ10.3 |

**Bằng chứng**

☐ Báo cáo cấu hình xuất xưởng tự động sinh từ sản phẩm {{TAI_LIEU_CAU_HINH_XUAT_XUONG}}.

**Khách hàng cần cấu hình**

- Chỉ bật tính năng mức BV-Cao sau khi đáp ứng điều kiện tại B2 mục 5.3.
- Không đổi các mặc định trên theo hướng giảm bảo vệ nếu chưa ghi lý do vào hồ sơ đánh giá tác động.
- Xuất và lưu báo cáo cấu hình khi bàn giao và sau mỗi lần thay đổi lớn.

## 6. Vòng đời firmware, vá lỗi và quản lý lỗ hổng

**Cam kết của sản phẩm**

- Phát triển theo quy trình có kiểm tra bảo mật: rà soát mã nguồn, quét thư viện bên thứ ba, quản lý danh mục thành phần phần mềm (SBOM).
- Kiểm thử xâm nhập độc lập {{CHU_KY_KIEM_THU_XAM_NHAP}}; lần gần nhất ngày {{NGAY_KIEM_THU_XAM_NHAP}} do {{DON_VI_KIEM_THU_XAM_NHAP}} thực hiện.
- Thời gian hỗ trợ bảo mật: mỗi phiên bản firmware, phần mềm được vá lỗi bảo mật tối thiểu {{THOI_GIAN_HO_TRO_BAO_MAT}} kể từ ngày phát hành; ngày ngừng hỗ trợ được thông báo trước {{THOI_GIAN_BAO_TRUOC_NGUNG_HO_TRO}}.
- Thời hạn phát hành bản vá kể từ khi xác nhận lỗ hổng:

| Mức nghiêm trọng | Thời hạn phát hành bản vá hoặc biện pháp giảm thiểu |
|---|---|
| Nghiêm trọng | {{SLA_VA_NGHIEM_TRONG}} |
| Cao | {{SLA_VA_CAO}} |
| Trung bình | {{SLA_VA_TRUNG_BINH}} |
| Thấp | Bản phát hành định kỳ kế tiếp |

- Bản cập nhật được ký số; thiết bị kiểm tra chữ ký trước khi cài; hỗ trợ cập nhật tập trung từ máy chủ, không bắt buộc kết nối Internet.
- **Chính sách công bố lỗ hổng, đăng công khai** tại {{URL_CHINH_SACH_LO_HONG}}: tiếp nhận báo cáo lỗ hổng tại {{EMAIL_BAO_CAO_LO_HONG}}; xác nhận đã nhận trong {{THOI_HAN_XAC_NHAN_BAO_CAO_LO_HONG}}; cập nhật trạng thái xử lý cho người báo cáo {{CHU_KY_CAP_NHAT_TRANG_THAI_LO_HONG}} đến khi xử lý xong; không truy cứu người báo cáo thiện chí; công bố thông báo bảo mật cho khách hàng kèm mức nghiêm trọng, phiên bản bị ảnh hưởng, biện pháp khắc phục. Với thiết bị camera, theo nguồn thứ cấp đây là yêu cầu của QCVN 11:2026/BCA — **[CẦN ĐỐI CHIẾU]**.
- Lỗ hổng có thể dẫn tới lộ dữ liệu sinh trắc học được thông báo cho khách hàng **ngay** khi xác nhận, để khách hàng đánh giá nghĩa vụ thông báo 72 giờ (Điều 29 Nghị định số 356/2025/NĐ-CP).

**Bằng chứng**

☐ Chính sách quản lý lỗ hổng và công bố lỗ hổng {{TAI_LIEU_CHINH_SACH_LO_HONG}}.

☐ Tóm tắt báo cáo kiểm thử xâm nhập gần nhất (bản cho khách hàng).

☐ Danh sách thông báo bảo mật đã phát hành trong 12 tháng.

**Khách hàng cần cấu hình**

- Đăng ký nhận thông báo bảo mật; chỉ định người chịu trách nhiệm cập nhật.
- Cài bản vá trong thời hạn nội bộ của khách hàng; lập danh mục thiết bị và phiên bản firmware.
- Thay thế thiết bị hết thời gian hỗ trợ bảo mật hoặc cách ly khỏi mạng.

## 7. Chống giả mạo khuôn mặt, tấn công mô hình và nội dung do AI tạo

**Cam kết của sản phẩm**

- Kiểm tra người thật (liveness) bật mặc định trên thiết bị đầu cuối kiểm soát ra vào, chấm công. Phương pháp và kết quả kiểm thử: B3 mục B.4.
- Phát hiện các dạng tấn công: {{LOAI_TAN_CONG_DA_KIEM_THU}}.
- Ảnh đăng ký tải lên từ tệp (không chụp trực tiếp) được kiểm tra dấu hiệu chỉnh sửa, ảnh tổng hợp bằng AI ở mức {{MUC_KIEM_TRA_ANH_DANG_KY}}; có tùy chọn bắt buộc đăng ký trực tiếp tại thiết bị.
- Ghi nhật ký các lần phát hiện giả mạo; cảnh báo khi một thiết bị có nhiều lần giả mạo liên tiếp.

Biện pháp chống tấn công mô hình:

| Nguy cơ | Biện pháp của sản phẩm |
|---|---|
| Tấn công đối nghịch (mẫu nhiễu, miếng dán, kính, mặt nạ in hoa văn để né hoặc giả danh) | {{BIEN_PHAP_CHONG_TAN_CONG_DOI_NGHICH}} |
| Đầu độc dữ liệu (ảnh đăng ký sai lệch, dữ liệu tinh chỉnh bị cài mẫu độc) | Đăng ký trực tiếp tại thiết bị; kiểm tra chất lượng ảnh đăng ký; tập dữ liệu tinh chỉnh tại chỗ được duyệt và lưu vết (B7 phương án C) |
| Thay thế, sửa đổi tệp mô hình (đầu độc mô hình) | Tệp mô hình được ký số; thiết bị kiểm tra chữ ký, giá trị băm trước khi nạp; chỉ nhận mô hình qua kênh cập nhật an toàn (mục 6) |
| Trích xuất mô hình, dò ngưỡng qua giao diện lập trình | Giới hạn tần suất truy vấn; API không trả điểm tương đồng thô cho hệ thống bên ngoài; ghi nhật ký truy vấn bất thường |
| Suy ngược template thành ảnh; tái nhận dạng dữ liệu đã khử nhận dạng | Mã hóa template (mục 2); không xuất template ra ngoài; dữ liệu thống kê chỉ xuất ở dạng tổng hợp |

Bối cảnh pháp lý: hành vi dùng AI, deepfake để giả mạo dữ liệu sinh trắc học (khuôn mặt) nhằm xác thực trái phép bị xử phạt tại điểm c khoản 2 Điều 34 Nghị định số 330/2026/NĐ-CP. Biện pháp chống giả mạo giúp bên kiểm soát phòng ngừa hành vi này trên hệ thống của mình. Pháp luật về trí tuệ nhân tạo yêu cầu phòng ngừa, kiểm soát rủi ro đặc thù của hệ thống trí tuệ nhân tạo, gồm nguy cơ tấn công, khai thác điểm yếu của mô hình và nguy cơ tái nhận dạng dữ liệu cá nhân đã khử nhận dạng (điểm c khoản 3 Điều 36 Nghị định số 142/2026/NĐ-CP — quy định cho tổ chức vận hành hạ tầng, cơ sở dữ liệu phục vụ phát triển trí tuệ nhân tạo; {{TEN_NHA_CUNG_CAP}} áp dụng theo tinh thần cho sản phẩm). Trường hợp hệ thống bị bên thứ ba xâm nhập, chiếm quyền điều khiển, nhà cung cấp, bên triển khai có lỗi để hệ thống bị xâm nhập phải liên đới bồi thường thiệt hại (khoản 4 Điều 29 Luật Trí tuệ nhân tạo số 134/2025/QH15).

**Bằng chứng**

☐ Báo cáo kiểm thử chống giả mạo {{SO_BAO_CAO_KIEM_THU_LIVENESS}} (B3 mục B.4).

☐ Mô tả cơ chế ký số, kiểm tra toàn vẹn tệp mô hình; kết quả kiểm thử tấn công đối nghịch (nếu có).

**Khách hàng cần cấu hình**

- Không tắt liveness trên cửa ra vào; với khu vực quan trọng, bật xác thực hai yếu tố (khuôn mặt + thẻ hoặc PIN).
- Bật tùy chọn chỉ cho đăng ký trực tiếp tại thiết bị nếu không có nhu cầu tải ảnh.

## 8. Xóa an toàn

**Cam kết của sản phẩm**

- Xóa theo thời hạn: tác vụ tự động xóa video, ảnh sự kiện, nhật ký, ảnh khách khi hết hạn cấu hình; ghi nhật ký xóa (loại dữ liệu, số lượng, thời điểm).
- Xóa theo người: một thao tác xóa template, ảnh đăng ký, ảnh sự kiện của một người trên máy chủ và mọi thiết bị đã đồng bộ; thiết bị xác nhận đã xóa; xuất biên bản xóa.
- Xóa khi hủy, trả thiết bị: chức năng "xóa toàn bộ" ghi đè vùng lưu trữ hoặc hủy khóa mã hóa (xóa bằng mật mã) để dữ liệu không khôi phục được; khôi phục cấu hình gốc.
- Bản sao lưu: dữ liệu đã xóa sẽ không còn trong bản sao lưu sau {{THOI_HAN_VONG_SAO_LUU}}; không khôi phục bản sao lưu cũ vào hệ thống đang vận hành mà không xóa lại dữ liệu đã có yêu cầu xóa.
- Nhà cung cấp không có chức năng khôi phục dữ liệu đã xóa cho khách hàng hoặc bên thứ ba.

Căn cứ: khoản 3, khoản 4 Điều 14 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 (xóa bằng biện pháp an toàn, ngăn khôi phục trái phép; không cố ý khôi phục).

**Bằng chứng**

☐ Mô tả kỹ thuật cơ chế xóa {{TAI_LIEU_CO_CHE_XOA}}; mẫu biên bản xóa xuất từ sản phẩm.

**Khách hàng cần cấu hình**

- Đặt thời hạn lưu cho từng loại dữ liệu theo chính sách lưu trữ (K4).
- Xóa template ngay khi người lao động nghỉ việc (khoản 2 Điều 25 Luật Bảo vệ dữ liệu cá nhân) — nên kết nối với hệ thống nhân sự.
- Thực hiện "xóa toàn bộ" và lập biên bản trước khi thanh lý, bảo hành, chuyển thiết bị.

## 9. Đáp ứng tiêu chuẩn an ninh mạng và bảo vệ dữ liệu

**Cam kết của sản phẩm**

- Sản phẩm được thiết kế để hỗ trợ khách hàng đáp ứng yêu cầu của hệ thống thông tin theo cấp độ, gồm TCVN 14423:2026 *An ninh mạng – Hệ thống thông tin – Yêu cầu cơ bản*, ở các nhóm yêu cầu về quản lý truy cập, nhật ký, mã hóa, cập nhật bản vá, sao lưu. Bảng đối chiếu chi tiết: {{TAI_LIEU_DOI_CHIEU_TIEU_CHUAN}}.
- Chứng nhận, đánh giá độc lập đang có: {{CHUNG_NHAN_DANH_GIA_DOC_LAP}} *(ghi tên, phạm vi, ngày hết hạn; ghi "Chưa có" nếu chưa có)*.
- Hợp quy thiết bị camera **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]**: thiết bị {{DANH_SACH_MODEL_CAMERA}} đã công bố hợp quy QCVN 11:2026/BCA, số công bố {{SO_CONG_BO_HOP_QUY}}, tổ chức thử nghiệm, chứng nhận {{TO_CHUC_THU_NGHIEM_HOP_QUY}}, ngày {{NGAY_CONG_BO_HOP_QUY}}; thiết bị mang dấu CR. Phần mềm, mô hình AI không thuộc phạm vi hợp quy này.
- Đánh giá tuân thủ bảo vệ dữ liệu cá nhân của hệ thống AI định kỳ 01 năm/lần (điểm đ khoản 5 Điều 10 Nghị định số 356/2025/NĐ-CP); kết quả gần nhất ngày {{NGAY_DANH_GIA_TUAN_THU}}.
- *(Chỉ M3, M4)* Nền tảng cloud {{TEN_NEN_TANG_CLOUD}} đặt tại {{VI_TRI_MAY_CHU}}: tách dữ liệu từng khách hàng ({{lô-gic/vật lý}}); mã hóa khi lưu và truyền, phân quyền nghiêm ngặt (khoản 4 Điều 12 Nghị định số 356/2025/NĐ-CP); nền tảng xử lý dữ liệu nhạy cảm của từ 10.000 chủ thể trở lên được xác định cấp độ theo tiêu chí cấp độ 3 (điểm c khoản 2 Điều 13 Nghị định số 331/2026/NĐ-CP) — cấp độ được phê duyệt: {{CAP_DO_NEN_TANG_CLOUD}}.

**Bằng chứng**

☐ Bảng đối chiếu yêu cầu tiêu chuẩn ↔ tính năng sản phẩm.

☐ Chứng nhận, báo cáo đánh giá độc lập.

☐ Bản công bố hợp quy, giấy chứng nhận hoặc kết quả thử nghiệm theo QCVN 11:2026/BCA của từng dòng thiết bị camera **[CẦN ĐỐI CHIẾU]**.

☐ Báo cáo đánh giá tuân thủ bảo vệ dữ liệu cá nhân hằng năm.

☐ *(M3, M4)* Quyết định phê duyệt cấp độ và phương án bảo đảm an ninh mạng của nền tảng.

**Khách hàng cần cấu hình**

- Xác định cấp độ hệ thống thông tin của mình (nếu thuộc diện) và dùng bảng đối chiếu để lập phương án.
- Đưa sản phẩm vào phạm vi đánh giá tuân thủ hằng năm của khách hàng.

## 10. Lộ trình bảo mật

| Hạng mục | Tình trạng | Dự kiến |
|---|---|---|
| {{HANG_MUC_LO_TRINH_1}} | Đang phát triển | {{THOI_DIEM_LO_TRINH_1}} |
| {{HANG_MUC_LO_TRINH_2}} | Đang phát triển | {{THOI_DIEM_LO_TRINH_2}} |

Hạng mục trong lộ trình **không** được ghi vào hồ sơ đánh giá tác động như biện pháp đã áp dụng.

## 11. Trích sẵn cho mục II.11 Mẫu số 10 của khách hàng

> Khách hàng chép và sửa theo cấu hình thực tế. Chỉ giữ biện pháp đã thực sự bật. Phần sơ đồ thiết kế hệ thống lấy từ tài liệu Mô tả luồng dữ liệu và kiến trúc (B1, mục 7.4).

**11.1. Phương án bảo đảm an toàn dữ liệu cá nhân.** Hệ thống {{TEN_SAN_PHAM}} được triển khai tại {{DIA_DIEM_LAP_DAT}} theo mô hình {{on-premise/hybrid/cloud}}. Dữ liệu sinh trắc học (ảnh đăng ký, đặc trưng khuôn mặt) được lưu trên máy chủ đặt tại phòng máy chủ có kiểm soát ra vào của {{TEN_KHACH_HANG}}, được mã hóa bằng {{THUAT_TOAN_MA_HOA_LUU}}; ảnh đăng ký bị xóa sau khi tạo đặc trưng. Truy cập được giới hạn theo vai trò, có xác thực đa yếu tố cho quản trị viên. Mọi thao tác xem, xuất, xóa được ghi nhật ký và rà soát {{CHU_KY_RA_SOAT_NHAT_KY}}. Dữ liệu được tự động xóa khi hết thời hạn lưu theo Chính sách lưu trữ, xóa dữ liệu của {{TEN_KHACH_HANG}}. Khi xảy ra sự cố liên quan dữ liệu sinh trắc học, {{TEN_KHACH_HANG}} thực hiện thông báo cho chủ thể và cơ quan chuyên trách trong 72 giờ theo Điều 29 Nghị định số 356/2025/NĐ-CP. Nếu sự cố đồng thời là sự cố nghiêm trọng của hệ thống trí tuệ nhân tạo theo khoản 1 Điều 19 Nghị định số 142/2026/NĐ-CP, {{TEN_KHACH_HANG}} phối hợp với {{TEN_NHA_CUNG_CAP}} báo cáo sơ bộ qua Cổng thông tin điện tử một cửa về trí tuệ nhân tạo theo Mẫu AI01a trong 72 giờ hoặc 05 ngày làm việc kể từ thời điểm xác nhận sự cố, và gửi báo cáo chính thức về kết quả khắc phục trong 15 ngày kể từ ngày nộp báo cáo sơ bộ. Trường hợp sự cố đồng thời phải báo cáo theo pháp luật về bảo vệ dữ liệu cá nhân, an ninh mạng thì thực hiện theo pháp luật đó (khoản 5 Điều 19 Nghị định số 142/2026/NĐ-CP).

**11.2. Biện pháp bảo vệ dữ liệu cá nhân.**

a) *Biện pháp kỹ thuật:* bảo mật vật lý thiết bị (vỏ chống tháo, cảnh báo tháo vỏ, vô hiệu hóa cổng gỡ lỗi, khởi động an toàn); mã hóa khi lưu ({{THUAT_TOAN_MA_HOA_LUU}}) và khi truyền ({{PHIEN_BAN_TLS}}); khóa mã hóa lưu tách khỏi dữ liệu; phân quyền theo vai trò và phạm vi; xác thực đa yếu tố; nhật ký chống sửa đổi và cảnh báo truy cập bất thường; kiểm tra người thật chống giả mạo khuôn mặt; mạng camera tách riêng; làm mờ người không liên quan khi xuất video; tự động xóa theo thời hạn; xóa an toàn khi thanh lý thiết bị; cập nhật bản vá theo thông báo bảo mật của nhà cung cấp.

b) *Biện pháp quản lý:* quy định phân quyền truy cập dữ liệu nhạy cảm; quy trình đăng ký, xóa khuôn mặt; quy trình xem xét lại kết quả nhận diện bất lợi; quy trình cung cấp video cho cơ quan có thẩm quyền; kiểm soát truy cập hỗ trợ từ xa của nhà cung cấp theo phiếu và phê duyệt từng phiên; cam kết bảo mật của nhân viên kỹ thuật, đại lý.

c) *Đào tạo:* quản trị viên và người vận hành được đào tạo về sử dụng an toàn hệ thống và bảo vệ dữ liệu cá nhân {{CHU_KY_DAO_TAO}}.

d) *Tiêu chuẩn áp dụng:* {{TIEU_CHUAN_AP_DUNG_KH}} *(ví dụ: TCVN 14423:2026 theo cấp độ được phê duyệt của hệ thống; QCVN 11:2026/BCA đối với thiết bị camera; chứng nhận của nhà cung cấp tại mục 9)*.

**11.3. Kiểm tra, đánh giá an ninh mạng, an toàn hệ thống thông tin, phương tiện, thiết bị.**

| Nội dung | Đối tượng | Tần suất | Mục đích |
|---|---|---|---|
| Rà soát tài khoản, quyền truy cập | Máy chủ, ứng dụng quản trị | {{CHU_KY_RA_SOAT_TAI_KHOAN}} | Thu hồi quyền thừa |
| Rà soát nhật ký xuất dữ liệu, tra cứu người | Nhật ký hệ thống | {{CHU_KY_RA_SOAT_NHAT_KY}} | Phát hiện truy cập trái phép |
| Kiểm tra phiên bản firmware, cài bản vá | Camera, thiết bị đầu cuối, máy chủ | Khi có thông báo bảo mật; tối thiểu {{CHU_KY_KIEM_TRA_BAN_VA}} | Khắc phục lỗ hổng |
| Kiểm tra cấu hình so với báo cáo bàn giao | Toàn hệ thống | {{CHU_KY_KIEM_TRA_CAU_HINH}} | Phát hiện thay đổi cấu hình trái phép |
| Kiểm tra vật lý thiết bị, phòng máy chủ | Thiết bị hiện trường, phòng máy chủ | {{CHU_KY_KIEM_TRA_VAT_LY}} | Phát hiện tháo lắp trái phép |
| Đánh giá tuân thủ bảo vệ dữ liệu cá nhân của hệ thống AI | Toàn hệ thống | 01 năm/lần | Điểm đ khoản 5 Điều 10 Nghị định số 356/2025/NĐ-CP |

## Hướng dẫn điền

- Placeholder trong mục 1–10 do **nhà cung cấp** điền theo sản phẩm thật; mục 11 do **khách hàng** điền theo cấu hình thật.
- Thông số trùng với B1 (thuật toán mã hóa, TLS, thời hạn lưu) phải **khớp** B1. Dùng chung dữ liệu mẫu.
- Các giá trị SLA vá lỗi, thời gian hỗ trợ bảo mật: nhà cung cấp tự cam kết; không có quy định pháp luật ấn định các con số này trong `sources/`. Theo nguồn thứ cấp, QCVN 11:2026/BCA buộc nhà sản xuất thiết bị camera **công bố** chính sách lỗ hổng có đầu mối tiếp nhận và mốc thời gian xác nhận, cập nhật trạng thái — **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]**.
- Mục 11.1, câu về sự cố AI nghiêm trọng: NĐ 142 Đ19.5 có thể hiểu là khi sự cố đồng thời phải báo cáo theo pháp luật bảo vệ DLCN, an ninh mạng thì báo theo kênh đó **thay cho** kênh AI. Cách hiểu này chưa chắc chắn — **[CẦN ĐỐI CHIẾU]**. Bộ khung khuyến nghị **báo cả hai kênh**: Mẫu 08 (NĐ 356) hoặc báo cáo ANM, và Mẫu AI01a qua Cổng một cửa (quy trình tại A7).
- {{THOI_HAN_LUU_NHAT_KY_AI}}: nhà cung cấp tự đặt theo nhu cầu giải trình, xác minh sự cố; pháp luật không ấn định số ngày. Nên không ngắn hơn thời hạn khiếu nại kết quả (B3 mục B.8).
- {{BIEN_PHAP_CHONG_TAN_CONG_DOI_NGHICH}}: chỉ ghi biện pháp đã có và đã kiểm thử; chưa có thì ghi "Chưa hỗ trợ" và đưa vào mục 10.
- Mục 9, dòng hợp quy: chỉ ghi khi đã có bản công bố hợp quy. Chưa xác định được thiết bị có thuộc danh mục phải hợp quy không thì ghi "Đang xác định phạm vi áp dụng QCVN 11:2026/BCA" — không ghi là đã hợp quy.
- {{CHUNG_NHAN_DANH_GIA_DOC_LAP}}: chỉ ghi chứng nhận còn hiệu lực và nêu phạm vi (ví dụ chứng nhận chỉ cho nền tảng cloud, không cho thiết bị).
- Nếu sản phẩm chưa có một biện pháp, ghi rõ "Chưa hỗ trợ" và đưa vào mục 10; không xóa dòng, để khách hàng biết cần biện pháp bù.

## Bằng chứng cần lưu

- Bản B4 đã phê duyệt theo từng phiên bản; lịch sử thay đổi.
- Các tài liệu được liệt kê ở phần "Bằng chứng" của từng mục (lưu nội bộ; bản tóm tắt cung cấp cho khách hàng khi được yêu cầu).
- Hồ sơ thông báo bảo mật đã gửi khách hàng; hồ sơ tiếp nhận, xử lý báo cáo lỗ hổng.
- Báo cáo đánh giá tuân thủ bảo vệ dữ liệu cá nhân hằng năm của hệ thống AI.
- Nhật ký hoạt động của hệ thống AI; hồ sơ báo cáo sự cố AI nghiêm trọng (Mẫu AI01a, báo cáo chính thức) nếu có.
- Hồ sơ hợp quy thiết bị camera (bản công bố, giấy chứng nhận, kết quả thử nghiệm) **[CẦN ĐỐI CHIẾU]**.
