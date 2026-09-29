# Mẫu Checklist triển khai và nghiệm thu tuân thủ khi bàn giao (K8)

> **Căn cứ:** Luật 91/2025/QH15 Đ3.2, Đ9.2, Đ14.1.b, Đ15.2.a, Đ20.1–20.2, Đ21.1, Đ24.2, Đ25.2.c, Đ25.3.a, Đ30.3–30.4, Đ31.4.a, Đ32.2, Đ32.4, Đ33.2, Đ37.2, Đ38; NĐ 356/2025/NĐ-CP Đ4.1.c, Đ4.1.i, Đ4.2, Đ6.1–6.2, Đ10.3, Đ10.5.a, Đ10.5.c, Đ12.4, Đ13, Đ19, Đ23.7, Đ41; NĐ 330/2026/NĐ-CP Đ39.1.c, Đ43.1.a, Đ43.1.g, Đ60.1, Đ61.2.b–d, Đ67.2.b, Đ67.2.e, Đ67.2.g, Đ67.3.b, Đ69.2.b, Đ70.1.c–d, Đ71.1.a–b, Đ71.2.a–b · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Ai dùng:** kỹ thuật viên của nhà cung cấp {{TEN_NHA_CUNG_CAP}} hoặc của đại lý, nhà tích hợp lắp đặt điền khi nghiệm thu; **đại diện khách hàng** cùng kiểm tra và ký biên bản bàn giao. Đây là tài liệu thuộc bộ công cụ K giao cho khách hàng; khách hàng lưu làm bằng chứng tuân thủ.

**Khi nào:** trước khi bàn giao đưa vào vận hành; sau mỗi lần mở rộng (thêm camera, thêm đầu đọc, bật tính năng mới); khi chuyển mô hình (ví dụ từ tại chỗ lên cloud).

**Mô hình:** mọi mô hình. Các dòng đánh dấu *(M2)*, *(M3/M4)* chỉ kiểm khi áp dụng; không áp dụng thì chọn N/A và ghi lý do.

**Phân vai khi kiểm tra:**

- Nhóm **A (Trước lắp đặt)** phần lớn là **việc của khách hàng** (DPIA, nhân sự BVDLCN, nội quy, biển báo). Kỹ thuật viên chỉ **kiểm tra có hay chưa** và ghi nhận; không đánh giá pháp lý thay khách hàng, không soạn hồ sơ thay (trừ khi khách mua dịch vụ Mức 1, Mức 2 — xem phiếu P1).
- Nhóm **B, C** là việc kỹ thuật viên **thực hiện và chứng minh** (ảnh chụp màn hình cấu hình).
- Nhóm **D** là việc chung của hai bên.

**Mục "Không đạt":** ghi rõ tồn tại, người chịu trách nhiệm, hạn khắc phục vào biên bản. Không bàn giao khi còn "Không đạt" ở các mục có đánh dấu **(chặn)** — những mục này nếu bỏ qua sẽ dẫn đến xử lý dữ liệu nhạy cảm không có căn cứ hoặc lộ dữ liệu.

### Rủi ro phạt chính mà checklist phòng ngừa (mức cho tổ chức — NĐ 330 Đ7.1)

| Thiếu sót | Mức phạt | Căn cứ |
|---|---|---|
| Không biển báo; không đầu mối liên hệ | 10–20 triệu đồng mỗi hành vi | NĐ 330 Đ71.1.a–b |
| Nhận diện khuôn mặt trên camera công cộng không có đồng ý | 30–50 triệu đồng | NĐ 330 Đ71.2.a |
| Đăng ký khuôn mặt khi chưa có đồng ý; không lưu nhật ký đồng ý | 30–50 triệu đồng | NĐ 330 Đ43.1.a, g |
| Thiếu bảo mật vật lý, hạn chế truy cập, theo dõi xâm phạm với sinh trắc học | 50–70 triệu đồng | NĐ 330 Đ70.1.c–d |
| Không có cơ chế từ chối xử lý tự động (không có phương thức thay thế) | 50–70 triệu đồng | NĐ 330 Đ67.2.b |
| Hệ thống AI không đáp ứng tiêu chuẩn ANM, bảo vệ dữ liệu; không xác thực, phân quyền phù hợp | 50–70 triệu đồng | NĐ 330 Đ67.2.e, g |
| *(M3/M4)* Không mã hóa dữ liệu trên cloud khi lưu và truyền | 50–70 triệu đồng | NĐ 330 Đ69.2.b |
| Lưu quá thời gian cần thiết | 20–40 triệu đồng | NĐ 330 Đ39.1.c |

### Lưu ý vùng xám

- **V1** — camera có chức năng nhận diện nhưng tắt: ghi trạng thái tắt vào mục B6 và biên bản.
- **V2** — tài khoản hỗ trợ từ xa của nhà cung cấp *(M2)*: mặc định vô hiệu; chỉ bật theo phiên có phê duyệt và nhật ký (mục D5).
- **V6** — máy chủ cloud ở nước ngoài: mục A9 đánh "Không đạt" nếu chưa có hồ sơ chuyển dữ liệu xuyên biên giới hoặc căn cứ miễn.
- Các hạng mục kỹ thuật như NTP, phân vùng mạng **không có điều khoản riêng** trong `sources/`; cột căn cứ ghi "Thực hành tốt" và nguyên tắc chung.

---

<p align="center"><b>CHECKLIST TRIỂN KHAI VÀ NGHIỆM THU TUÂN THỦ</b><br/><b>Hệ thống camera, nhận diện khuôn mặt, nhận diện biển số</b></p>

| Thông tin | Nội dung |
|---|---|
| Khách hàng | {{TEN_KHACH_HANG}} — {{DIA_CHI_KHACH_HANG}} |
| Địa điểm lắp đặt | {{DIA_DIEM_LAP_DAT}} |
| Sản phẩm, phiên bản | {{TEN_SAN_PHAM}} {{PHIEN_BAN_SAN_PHAM}}; firmware {{PHIEN_BAN_FIRMWARE}} |
| Quy mô | {{SO_LUONG_CAMERA}} camera; {{SO_LUONG_DAU_DOC}} đầu đọc khuôn mặt; {{SO_LUONG_CAMERA_LPR}} camera biển số |
| Mô hình triển khai | ☐ M1 tại chỗ, khách tự vận hành ☐ M2 tại chỗ, nhà cung cấp hỗ trợ ☐ M3 cloud ☐ M4 vận hành hộ |
| Hợp đồng | Số {{SO_HOP_DONG}} ngày {{NGAY_HOP_DONG}} |
| Đơn vị lắp đặt | {{TEN_NHA_CUNG_CAP}}; đại lý lắp đặt (nếu có): {{TEN_DAI_LY_LAP_DAT}} — kỹ thuật viên {{KY_THUAT_VIEN_NCC}} |
| Ngày nghiệm thu | {{NGAY_NGHIEM_THU}} |

## A. Trước lắp đặt

| STT | Hạng mục | Căn cứ | Kết quả | Ghi chú |
|---|---|---|---|---|
| A1 | *(M2–M4)* Hợp đồng, phụ lục xử lý dữ liệu giữa khách hàng và nhà cung cấp (và đại lý, nếu đại lý chạm dữ liệu) đã ký **trước** khi nhà cung cấp tiếp nhận dữ liệu **(chặn)** | Luật 91 Đ37.2.a | ☐ Đạt ☐ Không ☐ N/A | |
| A2 | Khách hàng đã lập hồ sơ đánh giá tác động (DPIA) hoặc có kế hoạch nộp trong 60 ngày kể từ ngày đầu xử lý; hoặc đã ghi căn cứ miễn (chỉ khi **không** dùng nhận diện khuôn mặt và thuộc diện miễn) | Luật 91 Đ21.1, Đ38.2–38.3; NĐ 356 Đ19, Đ41 | ☐ Đạt ☐ Không ☐ N/A | Dùng K6 |
| A3 | Khách hàng dùng nhận diện khuôn mặt đã chỉ định nhân sự, bộ phận bảo vệ dữ liệu cá nhân hoặc thuê dịch vụ | Luật 91 Đ33.2, Đ38; NĐ 356 Đ13, Đ41 | ☐ Đạt ☐ Không ☐ N/A | Họ tên: {{NHAN_SU_BVDLCN_KH}} |
| A4 | Sơ đồ vị trí, góc quay camera được khách hàng duyệt; **không** camera nào hướng vào nhà vệ sinh, phòng tắm, phòng thay đồ, phòng nghỉ, khu vực riêng tư; đã đặt vùng che (privacy mask) với phần nhà dân, khu vực ngoài phạm vi quản lý **(chặn)** | Luật 91 Đ25.3.a; NĐ 356 Đ4.1.c; NĐ 330 Đ61.2.d | ☐ Đạt ☐ Không ☐ N/A | Đính kèm sơ đồ |
| A5 | Đầu đọc khuôn mặt chỉ lắp tại điểm kiểm soát ra vào, chấm công đã nêu trong DPIA, K3; vùng quét gần, không hướng ra khu vực công cộng | Luật 91 Đ3.2; NĐ 330 Đ71.2.a | ☐ Đạt ☐ Không ☐ N/A | |
| A6 | Biển báo K1 đã lắp tại mọi lối vào, trước vùng ghi hình; biển (c) cạnh đầu đọc; biển (d) tại làn xe; đã chụp ảnh | Luật 91 Đ32.2; NĐ 330 Đ71.1.a | ☐ Đạt ☐ Không ☐ N/A | |
| A7 | Đầu mối liên hệ yêu cầu xem hình ảnh được công bố trên biển, website; đã gọi thử | NĐ 330 Đ71.1.b | ☐ Đạt ☐ Không ☐ N/A | |
| A8 | Camera tại nơi làm việc: khách hàng đã ban hành K3 và phổ biến cho người lao động **(chặn)** | Luật 91 Đ25.3.a; NĐ 330 Đ61.2.c | ☐ Đạt ☐ Không ☐ N/A | |
| A9 | Nơi lưu dữ liệu đã xác định: ☐ tại chỗ ☐ cloud tại Việt Nam ☐ cloud ở nước ngoài. Nếu ở nước ngoài hoặc hỗ trợ từ nước ngoài: đã có hồ sơ chuyển dữ liệu xuyên biên giới hoặc căn cứ miễn | Luật 91 Đ20.1–20.2, Đ20.6 | ☐ Đạt ☐ Không ☐ N/A | Vị trí: {{VI_TRI_MAY_CHU}} |
| A10 | Đầu ghi, máy chủ, thiết bị lưu dữ liệu khuôn mặt đặt trong phòng, tủ có khóa; danh sách người được vào | Luật 91 Đ31.4.a; NĐ 330 Đ70.1.c | ☐ Đạt ☐ Không ☐ N/A | |

## B. Cấu hình

| STT | Hạng mục | Căn cứ | Kết quả | Ghi chú |
|---|---|---|---|---|
| B1 | Thời hạn lưu từng loại dữ liệu (video, ảnh sự kiện, nhật ký ra vào, dữ liệu khách, biển số) được cấu hình **đúng K4**; ghi giá trị thực tế vào ghi chú | Luật 91 Đ32.4; NĐ 330 Đ39.1.c | ☐ Đạt ☐ Không ☐ N/A | Video: ...... ngày |
| B2 | Mã hóa khi lưu: dữ liệu khuôn mặt, video, bản sao lưu. Mã hóa khi truyền: giữa camera, đầu đọc, đầu ghi, máy chủ, cloud, ứng dụng xem | Luật 91 Đ31.4.a; NĐ 356 Đ12.4; NĐ 330 Đ69.2.b | ☐ Đạt ☐ Không ☐ N/A | *(M3/M4)* bắt buộc với cloud |
| B3 | Đổi **toàn bộ** mật khẩu mặc định (camera, đầu ghi, đầu đọc, VMS, bộ chuyển mạch, bộ định tuyến); mỗi thiết bị một mật khẩu mạnh **(chặn)** | Luật 91 Đ30.3; NĐ 356 Đ10.5.a; NĐ 330 Đ67.2.e, g | ☐ Đạt ☐ Không ☐ N/A | |
| B4 | Xác thực nhiều yếu tố cho tài khoản quản trị VMS, nền tảng cloud, truy cập từ xa | Luật 91 Đ30.3; NĐ 330 Đ67.2.g | ☐ Đạt ☐ Không ☐ N/A | |
| B5 | Phân quyền theo vai trò khớp K3 Điều 8 (xem trực tiếp / xem lại / trích xuất / quản trị / xóa khuôn mặt); không dùng chung tài khoản | Luật 91 Đ31.4.a; NĐ 356 Đ4.2; NĐ 330 Đ70.1.d | ☐ Đạt ☐ Không ☐ N/A | Đính kèm danh sách tài khoản |
| B6 | Nhận diện khuôn mặt **TẮT** trên mọi camera giám sát hướng khu vực công cộng, khu vực khách hàng; phân tích hành vi, cảm xúc, thuộc tính (tuổi, giới tính) **TẮT** trừ khi DPIA cho phép **(chặn)** | NĐ 330 Đ71.2.a; Luật 91 Đ30.4 | ☐ Đạt ☐ Không ☐ N/A | |
| B7 | Đầu đọc **không lưu** ảnh, template của người không khớp; chỉ lưu ảnh sự kiện theo K4 | Luật 91 Đ3.2 | ☐ Đạt ☐ Không ☐ N/A | |
| B8 | Nhật ký hệ thống bật: đăng nhập, xem lại, trích xuất, xóa, thay đổi cấu hình, đăng ký và xóa khuôn mặt; lưu theo K4; có cảnh báo đăng nhập bất thường | Luật 91 Đ31.4.a; NĐ 356 Đ10.5.c; NĐ 330 Đ70.1.d | ☐ Đạt ☐ Không ☐ N/A | |
| B9 | Phương thức thay thế ({{PHUONG_THUC_THAY_THE}}) được cấu hình tại mọi điểm có đầu đọc và đã thử **(chặn)** | Luật 91 Đ9.2; NĐ 356 Đ10.3; NĐ 330 Đ67.2.b | ☐ Đạt ☐ Không ☐ N/A | |
| B10 | Chống giả mạo khuôn mặt (liveness) bật; ngưỡng so khớp theo khuyến nghị tài liệu B3; kết quả điểm thấp gắn cờ "cần xác minh", không tự động kết luận | NĐ 356 Đ10.5.a; NĐ 330 Đ67.3.b | ☐ Đạt ☐ Không ☐ N/A | Ngưỡng: ...... |
| B10a | Chế độ 1:N: số người đăng ký trên mỗi đầu đọc, camera không vượt quy mô tối đa khuyến nghị tại B3 mục B.3 ở ngưỡng đang đặt; nếu vượt: đã chia danh sách theo cửa, chuyển 1:1 (thẻ + khuôn mặt) hoặc tăng ngưỡng kèm phương thức thay thế | Luật 91 Đ3.3; NĐ 330 Đ39.1.b | ☐ Đạt ☐ Không ☐ N/A | Lớn nhất: ...... người/đầu đọc |
| B10b | Đo thử tại hiện trường: tỷ lệ từ chối nhầm với ít nhất {{SO_NGUOI_DO_THU}} người đã đăng ký; thử người **chưa đăng ký** đi qua ít nhất {{SO_LUOT_THU_NGUOI_LA}} lượt; ghi kết quả vào biên bản | NĐ 356 Đ10.5.a | ☐ Đạt ☐ Không ☐ N/A | Từ chối nhầm: ......; nhận nhầm người lạ: ...... |
| B11 | Bảng công, báo cáo ra vào cho phép người có thẩm quyền xem xét lại và sửa kết quả, có ghi vết | NĐ 330 Đ67.3.b | ☐ Đạt ☐ Không ☐ N/A | |
| B12 | Chức năng làm mờ khuôn mặt, biển số khi xuất video hoạt động; quản trị viên biết dùng | Luật 91 Đ15.2.a; NĐ 330 Đ71.2.b | ☐ Đạt ☐ Không ☐ N/A | |
| B13 | Xóa dữ liệu khuôn mặt khi nghỉ việc: ☐ đồng bộ tự động với hệ thống nhân sự ☐ thao tác một bước; đã thử xóa và **đồng bộ xóa trên mọi đầu đọc** | Luật 91 Đ25.2.c; NĐ 330 Đ61.2.b | ☐ Đạt ☐ Không ☐ N/A | |
| B14 | Kiosk khách: không lưu ảnh thẻ căn cước (chỉ đọc thông tin cần thiết) hoặc xóa ngay sau đối chiếu | NĐ 356 Đ4.1.i; Luật 91 Đ3.2 | ☐ Đạt ☐ Không ☐ N/A | |
| B15 | Firmware, phần mềm là bản mới nhất nhà cung cấp phát hành; không còn lỗ hổng nghiêm trọng đã công bố | NĐ 356 Đ10.5.a; NĐ 330 Đ67.2.e | ☐ Đạt ☐ Không ☐ N/A | Phiên bản: {{PHIEN_BAN_FIRMWARE}} |
| B16 | Tắt dịch vụ không dùng (Telnet, FTP, UPnP, P2P cloud của hãng, HTTP không mã hóa); không mở cổng đầu ghi, camera trực tiếp ra Internet | NĐ 356 Đ10.5.a; NĐ 330 Đ67.2.e | ☐ Đạt ☐ Không ☐ N/A | |
| B17 | Mạng camera tách khỏi mạng người dùng (VLAN, tường lửa) | Thực hành tốt; NĐ 356 Đ10.5.a | ☐ Đạt ☐ Không ☐ N/A | |
| B18 | Mọi thiết bị đồng bộ thời gian (NTP) cùng một nguồn — thời điểm trên video, nhật ký chính xác để làm chứng cứ và tính mốc 72 giờ khi có sự cố | Thực hành tốt | ☐ Đạt ☐ Không ☐ N/A | Nguồn NTP: ...... |
| B19 | Sao lưu cấu hình; bản sao lưu dữ liệu mã hóa, có vòng quay theo K4 | Luật 91 Đ31.4.a | ☐ Đạt ☐ Không ☐ N/A | |
| B20 | *(M3/M4)* Thông báo cho chủ thể (K1, K2) có tên tổ chức cung cấp dịch vụ xử lý | NĐ 356 Đ23.7 | ☐ Đạt ☐ Không ☐ N/A | |

## C. Dữ liệu

| STT | Hạng mục | Căn cứ | Kết quả | Ghi chú |
|---|---|---|---|---|
| C1 | Chỉ đăng ký khuôn mặt cho người **đã ký đồng ý** theo K2; nhật ký đồng ý ghi ai, lúc nào, mục đích, phiên bản thông báo **(chặn)** | NĐ 356 Đ6.1–6.2; NĐ 330 Đ43.1.a, g | ☐ Đạt ☐ Không ☐ N/A | |
| C2 | Đối chiếu danh sách khuôn mặt đã đăng ký với danh sách đồng ý: số lượng khớp, không có người thừa | NĐ 330 Đ43.1.a | ☐ Đạt ☐ Không ☐ N/A | Đăng ký: ...... / Đồng ý: ...... |
| C3 | Trẻ em (trường học, điểm danh): có đồng ý của người đại diện theo pháp luật; trẻ từ đủ 07 tuổi có thêm đồng ý của trẻ | Luật 91 Đ24.2; NĐ 330 Đ60.1.b–c | ☐ Đạt ☐ Không ☐ N/A | |
| C4 | Đã xóa **dữ liệu thử nghiệm** trên mọi thiết bị: khuôn mặt của kỹ thuật viên, ảnh mẫu, video, biển số thử | Luật 91 Đ14.1.b; NĐ 330 Đ39.1.c | ☐ Đạt ☐ Không ☐ N/A | |
| C5 | Kỹ thuật viên, đại lý không giữ bản sao dữ liệu (máy tính, USB, điện thoại, ổ đĩa cá nhân); ký cam kết bảo mật (C4) | Luật 91 Đ37.2.b–c | ☐ Đạt ☐ Không ☐ N/A | |
| C6 | Dữ liệu nhập từ hệ thống cũ (ảnh nhân viên, danh sách xe) chỉ gồm người còn hiệu lực; căn cứ đồng ý cũ đã được khách hàng rà soát (Luật 91 Đ39.1) | Luật 91 Đ39.1; NĐ 356 Đ6.4 | ☐ Đạt ☐ Không ☐ N/A | |

## D. Bàn giao

| STT | Hạng mục | Căn cứ | Kết quả | Ghi chú |
|---|---|---|---|---|
| D1 | Bàn giao tài liệu sản phẩm B1 (luồng dữ liệu, kiến trúc), B2 (phân loại rủi ro AI), B3 (giải thích thuật toán), B4 (bảo mật thiết bị) | NĐ 356 Đ10.3, Đ19.3.c, Đ19.3.đ; Luật 91 Đ30.4 | ☐ Đạt ☐ Không ☐ N/A | |
| D2 | Bàn giao bộ công cụ K1–K10 và hướng dẫn điền; giải thích phần khách hàng phải tự ban hành | — | ☐ Đạt ☐ Không ☐ N/A | |
| D3 | Đào tạo quản trị viên của khách hàng: phân quyền, trích xuất và làm mờ, xóa khuôn mặt, giữ nguyên dữ liệu khi có yêu cầu (K5), nhận biết và báo sự cố (K7), cung cấp cho cơ quan chức năng (K9) | Luật 91 Đ3.4 | ☐ Đạt ☐ Không ☐ N/A | Danh sách người dự |
| D4 | Bàn giao mật khẩu quản trị qua kênh an toàn; khách hàng đổi mật khẩu ngay sau bàn giao | Luật 91 Đ30.3 | ☐ Đạt ☐ Không ☐ N/A | |
| D5 | **Thu hồi, vô hiệu hóa** tài khoản của kỹ thuật viên, tài khoản cài đặt tạm; *(M2)* truy cập từ xa tắt hoặc chỉ bật theo phiên có phê duyệt, ghi nhật ký **(chặn)** | Luật 91 Đ37.2.a–b; NĐ 330 Đ67.2.g | ☐ Đạt ☐ Không ☐ N/A | |
| D6 | Ảnh chụp màn hình cấu hình (B1–B19) và danh sách tài khoản được giao cho khách hàng, lưu vào hồ sơ DPIA | NĐ 356 Đ19.3.đ | ☐ Đạt ☐ Không ☐ N/A | |

**Kết luận nghiệm thu:** ☐ Đạt — bàn giao ☐ Đạt có điều kiện — tồn tại tại mục Ghi chú, khắc phục trước ngày ........ ☐ Không đạt — chưa bàn giao

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: ......./BB-{{VIET_TAT_KH}} | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>BIÊN BẢN</b><br/><b>Nghiệm thu tuân thủ và bàn giao hệ thống camera, nhận diện</b></p>

*Căn cứ Hợp đồng số {{SO_HOP_DONG}} ngày {{NGAY_HOP_DONG}} giữa {{TEN_KHACH_HANG}} và {{TEN_NHA_CUNG_CAP}}.*

Hôm nay, ngày {{NGAY_NGHIEM_THU}}, tại {{DIA_DIEM_LAP_DAT}}, chúng tôi gồm:

**Bên giao:** {{TEN_NHA_CUNG_CAP}}; đại lý lắp đặt (nếu có): {{TEN_DAI_LY_LAP_DAT}}

- Ông/bà {{DAI_DIEN_NHA_CUNG_CAP}} — {{CHUC_VU_DAI_DIEN_NCC}}
- Ông/bà {{KY_THUAT_VIEN_NCC}} — kỹ thuật viên

**Bên nhận:** {{TEN_KHACH_HANG}}

- Ông/bà {{DAI_DIEN_KHACH_HANG}} — {{CHUC_VU_DAI_DIEN_KH}}
- Ông/bà {{NHAN_SU_BVDLCN_KH}} — nhân sự bảo vệ dữ liệu cá nhân

Cùng thống nhất:

1. **Hệ thống bàn giao:** {{TEN_SAN_PHAM}} {{PHIEN_BAN_SAN_PHAM}}; {{SO_LUONG_CAMERA}} camera, {{SO_LUONG_DAU_DOC}} đầu đọc khuôn mặt, {{SO_LUONG_CAMERA_LPR}} camera biển số; mô hình triển khai: ........; nơi lưu dữ liệu: {{VI_TRI_MAY_CHU}}.
2. **Kết quả kiểm tra** theo Checklist triển khai và nghiệm thu tuân thủ đính kèm: ...... mục Đạt; ...... mục Không đạt; ...... mục N/A.
3. **Cấu hình đã áp dụng:** thời hạn lưu video ...... ngày; nhật ký ra vào ...... tháng; nhận diện khuôn mặt chỉ bật trên ...... đầu đọc tại ........; nhận diện trên camera giám sát: tắt; phương thức thay thế: {{PHUONG_THUC_THAY_THE}}.
4. **Dữ liệu:** đã đăng ký ...... khuôn mặt, tương ứng ...... phiếu đồng ý; đã xóa dữ liệu thử nghiệm; kỹ thuật viên không giữ bản sao dữ liệu.
5. **Tài liệu đã bàn giao:** ☐ B1 ☐ B2 ☐ B3 ☐ B4 ☐ K1 ☐ K2 ☐ K3 ☐ K4 ☐ K5 ☐ K6 ☐ K7 ☐ K8 ☐ K9 ☐ K10 ☐ Danh sách tài khoản ☐ Ảnh chụp cấu hình.
6. **Tài khoản:** tài khoản kỹ thuật viên đã vô hiệu hóa lúc ........; mật khẩu quản trị đã giao cho ông/bà ........ và đã được đổi.
7. **Tồn tại và hạn khắc phục:** ........................................................................
8. **Trách nhiệm sau bàn giao:** {{TEN_KHACH_HANG}} là bên kiểm soát dữ liệu, tự ban hành và thực hiện các văn bản thuộc bộ công cụ K; {{TEN_NHA_CUNG_CAP}} hỗ trợ kỹ thuật theo hợp đồng {{và thực hiện xử lý dữ liệu theo phụ lục xử lý dữ liệu (M2–M4)}}.

Biên bản lập thành 02 bản, mỗi bên giữ 01 bản.

| **ĐẠI DIỆN BÊN GIAO**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/><br/>**{{DAI_DIEN_NHA_CUNG_CAP}}** | **ĐẠI DIỆN BÊN NHẬN**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/><br/>**{{DAI_DIEN_KHACH_HANG}}** |
|:---:|:---:|

## Hướng dẫn điền

1. Điền bảng thông tin đầu checklist trước khi đến công trình. Mô hình triển khai phải khớp hợp đồng.
2. Mỗi mục "Đạt" ở nhóm B cần ảnh chụp màn hình cấu hình, đặt tên theo mã mục (ví dụ `B1-thoi-han-luu.png`).
3. Mục có đánh dấu **(chặn)** mà "Không đạt": không bàn giao; nếu khách hàng vẫn yêu cầu đưa vào vận hành, ghi rõ vào mục 7 biên bản và để khách hàng ký xác nhận rủi ro.
4. Dòng "đại lý lắp đặt (nếu có)": xóa nếu nhà cung cấp tự lắp đặt. Đại lý chạm dữ liệu khi lắp đặt phải được ràng buộc nghĩa vụ bảo vệ dữ liệu qua hợp đồng đại lý (C5) và cam kết bảo mật (C4).
5. Khách hàng không có tổ chức pháp chế: nhóm A ghi "Chưa có" thay vì tự đánh giá; đề xuất dịch vụ theo kết quả phiếu P1.

## Bằng chứng cần lưu

| Bằng chứng | Người giữ | Mục đích |
|---|---|---|
| Checklist đã điền và biên bản đã ký | Cả hai bên | Chứng minh hệ thống được cấu hình bảo vệ dữ liệu khi bàn giao (NĐ 330 Đ67.2.e, Đ70.1.c–d) |
| Ảnh chụp cấu hình, danh sách tài khoản | Khách hàng | Hồ sơ DPIA (NĐ 356 Đ19.3.đ) |
| Ảnh biển báo, sơ đồ camera | Khách hàng | NĐ 330 Đ71.1.a |
| Danh sách người dự đào tạo | Cả hai bên | Chứng minh chuyển giao năng lực vận hành |
