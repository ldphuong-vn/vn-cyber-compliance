# Checklist tự đánh giá — HTTT cấp độ 1

> **Căn cứ:** TCVN 14423:2026 mục 3; NĐ 331/2026/NĐ-CP Đ28.4, Đ29.1, Đ30.1 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

> **Bản quyền:** Tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI). Cột "Yêu cầu" là diễn giải ngắn bằng lời của người soạn, không phải nguyên văn tiêu chuẩn.

Cấp độ 1 gồm **15 nhóm** yêu cầu (mục 3.1–3.15). Đây là mức nền tối thiểu: có quy trình, danh mục, rà soát chủ yếu 1 lần/năm; chưa yêu cầu SIEM, EDR, kiểm thử xâm nhập.

## Cách dùng

1. Điền `{{TEN_HE_THONG}}`, `{{TEN_TO_CHUC}}`, người đánh giá, ngày `{{NGAY}}` ở bảng dưới.
2. Cột **Kết quả** ghi một trong: `Đạt` · `Một phần` · `Chưa` · `N/A`. Mọi `N/A` phải có lý do ở cột Ghi chú (vd "không có mạng không dây") và được nêu trong phương án bảo đảm ANM của hồ sơ đề xuất cấp độ (NĐ 331 Đ22.6, Đ29).
3. Nhiều dòng TCVN cho phép "phương án tương đương" — nếu dùng, mô tả biện pháp thay thế ở cột Ghi chú và lưu lập luận trong hồ sơ.
4. Các chỉ số ghi "gợi ý" (thời gian khóa phiên, độ dài mật khẩu…) là cấu hình mẫu TCVN nêu kèm "dựa trên đánh giá rủi ro"; nên áp dụng, nếu chọn khác phải có lập luận.
5. Chu kỳ, thời hạn tổng hợp tại [ma trận yêu cầu theo cấp độ](ma-tran-yeu-cau-theo-cap-do.md#2-các-ngưỡng-định-lượng-theo-cấp); ánh xạ sang NĐ 331 tại [anh-xa-nd331-d30-tcvn.md](anh-xa-nd331-d30-tcvn.md). An ninh vật lý (không thuộc yêu cầu cơ bản của NĐ 331 — Đ30.2) xem [an-ninh-vat-ly-phu-luc-a.md](an-ninh-vat-ly-phu-luc-a.md) mục A.1.

| Thông tin | Giá trị |
|---|---|
| Hệ thống | `{{TEN_HE_THONG}}` |
| Chủ quản | `{{TEN_TO_CHUC}}` |
| Cấp độ đề xuất/được phê duyệt | 1 |
| Người đánh giá | `{{NGUOI_DANH_GIA}}` |
| Ngày đánh giá | `{{NGAY}}` |

## 3.1 Quản lý rủi ro an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.1 a) | Ban hành quy định/quy trình quản lý rủi ro đủ 4 bước: nhận diện, phân tích, đánh giá, xử lý | | Quy trình QLRR đã ký ban hành |  |
| 3.1 b) | Rà soát quy trình QLRR và tài liệu kèm theo ≥ 1 lần/năm hoặc khi tổ chức thay đổi | | Biên bản rà soát, lịch sử phiên bản |  |

## 3.2 Quản lý tài sản phần cứng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.2.1 a) | Danh mục toàn bộ phần cứng của HTTT, kể cả thiết bị bên ngoài có kết nối vào; xác định tài sản cần giám sát | | Danh mục tài sản phần cứng |  |
| 3.2.1 b) | Phát hiện tài sản vô chủ/trái phép để loại bỏ hoặc đưa vào quản lý | | Báo cáo rà soát tài sản |  |
| 3.2.1 c) | Kiểm kê, cập nhật danh mục phần cứng ≥ 1 lần/năm | | Biên bản kiểm kê |  |
| 3.2.2.1 a) | Danh mục phủ mọi thiết bị lưu trữ/xử lý dữ liệu: đầu cuối, di động, lưu trữ ngoài, văn phòng, mạng, OT/IoT, máy chủ vật lý/ảo/cloud | | Danh mục tài sản (CMDB/bảng tính) |  |
| 3.2.2.1 b) | Trường tối thiểu: tên, IP tĩnh, MAC/serial, hạn hỗ trợ của hãng, vị trí địa lý và trong mạng, mục đích, tình trạng; gán người chịu trách nhiệm | | Danh mục có đủ trường, cột người phụ trách |  |
| 3.2.2.1 c) | Đăng ký thiết bị di động được phép kết nối; quy định trách nhiệm cá nhân khi dùng cho công việc | | Sổ đăng ký thiết bị di động, quy định sử dụng |  |
| 3.2.2.2 a) | Quy trình phát hiện, xử lý thiết bị lạ kết nối trái phép, thực hiện ≥ 1 lần/năm | | Quy trình + kết quả các lần rà soát |  |
| 3.2.2.2 b) | Xử lý thiết bị trái phép bằng cách gỡ bỏ, từ chối kết nối hoặc cách ly | | Nhật ký xử lý |  |

## 3.3 Quản lý tài sản phần mềm

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.3.1 a) | Quản lý danh mục phần mềm; chỉ phần mềm đã phê duyệt mới được cài và dùng | | Danh mục phần mềm, quy trình phê duyệt |  |
| 3.3.1 b) | Kiểm kê, cập nhật danh mục phần mềm ≥ 1 lần/năm | | Biên bản kiểm kê phần mềm |  |
| 3.3.2.1 a) | Lập danh mục phần mềm đang cài trên các thiết bị thuộc HTTT | | Danh mục phần mềm (xuất từ công cụ inventory) |  |
| 3.3.2.1 b) | Trường tối thiểu: tên, mục đích, hạn hỗ trợ, phạm vi, chủ quản, bản quyền, phiên bản, hệ thống thành phần; gán trách nhiệm | | Danh mục có đủ trường |  |
| 3.3.2.2 a) | Quy trình phát hiện, xử lý phần mềm trái phép ≥ 1 lần/năm | | Quy trình + kết quả rà soát |  |
| 3.3.2.2 b) | Phần mềm trái phép nhưng cần thiết đưa vào danh sách ngoại lệ, kèm biện pháp giảm thiểu | | Danh sách ngoại lệ có biện pháp kiểm soát |  |
| 3.3.2.2 c) | Lập kế hoạch gỡ sớm phần mềm trái phép ngoài danh sách ngoại lệ | | Kế hoạch gỡ bỏ, bằng chứng đã gỡ |  |

## 3.4 Quản lý tài sản thông tin

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.4.2.1 a) | Quy định quản lý tài sản thông tin: danh mục, mức nhạy cảm, chủ sở hữu, cách xử lý, thời hạn lưu, yêu cầu tiêu hủy | | Quy định quản lý tài sản thông tin |  |
| 3.4.2.1 b) | Quy trình yêu cầu truy cập, thêm, sửa, xóa dữ liệu | | Quy trình + phiếu yêu cầu |  |
| 3.4.2.1 c) | Kiểm tra phân quyền dữ liệu ≥ 1 lần/năm | | Biên bản rà soát phân quyền |  |
| 3.4.2.1 d) | Rà soát quy trình quản lý tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản quy trình |  |
| 3.4.2.2 a) | Lập danh mục tài sản thông tin theo quy trình đã ban hành | | Danh mục tài sản thông tin |  |
| 3.4.2.2 b) | Cập nhật danh mục tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | | Ngày cập nhật danh mục |  |
| 3.4.2.3 | Ma trận quyền truy cập của từng tài khoản/người dùng với từng loại tài sản thông tin | | Ma trận phân quyền (ACL) |  |
| 3.4.2.4 | Mã hóa thông tin xác thực (mật khẩu, khóa…) khi lưu trữ | | Cấu hình mã hóa (DB/đĩa/hash mật khẩu) |  |

## 3.5 Cấu hình an toàn phần cứng, phần mềm

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.5.2.1 a) | Ban hành quy định/quy trình cấu hình an toàn cho phần cứng và phần mềm | | Quy trình cấu hình an toàn |  |
| 3.5.2.1 b) | Có tài liệu cấu hình chuẩn/hardening; dùng giao thức kết nối an toàn; bật tường lửa trên máy chủ, máy trạm | | Baseline cấu hình (vd theo CIS), ảnh chụp cấu hình |  |
| 3.5.2.1 c) | Rà soát quy định và tài liệu cấu hình ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 3.5.2.2 a) | Tự khóa phiên theo đánh giá rủi ro — gợi ý: máy người dùng ≤ 15 phút; phiên quản trị, thiết bị di động ≤ 5 phút | | GPO/MDM/cấu hình timeout |  |
| 3.5.2.2 a) | Khóa khi đăng nhập sai — gợi ý: laptop, điện thoại ≤ 10 lần; thời gian khóa 12 giờ–30 ngày | | Cấu hình lockout |  |
| 3.5.2.2 b) | Có cơ chế mở khóa khẩn cấp cho quản trị viên/tài khoản đặc quyền | | Quy trình break-glass |  |

## 3.6 Quản lý tài khoản và quyền truy cập

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.6.1 a) | Quy trình, công cụ cấp/thu hồi quyền cho 4 loại tài khoản (quản trị, tác nghiệp, kỹ thuật, dịch vụ) theo vai trò | | Quy trình quản lý tài khoản |  |
| 3.6.1 c) | Ghi log và giám sát hoạt động của tài khoản người dùng | | Cấu hình audit log đăng nhập |  |
| 3.6.2.1 a) | Danh sách mọi tài khoản trên phần cứng và phần mềm | | Danh sách tài khoản |  |
| 3.6.2.1 b) | Danh sách gồm đủ loại: quản trị, tác nghiệp, dịch vụ, kỹ thuật | | Danh sách tài khoản phân loại |  |
| 3.6.2.1 c) | Trường tối thiểu: loại, tên, trạng thái, hệ thống, người quản lý, phòng ban, ngày kích hoạt/vô hiệu; không còn tài khoản không hợp lệ | | Danh sách có đủ trường |  |
| 3.6.2.1 d) | Rà soát danh sách tài khoản ≥ 1 lần/năm | | Biên bản rà soát |  |
| 3.6.2.2 a) | Cấu hình bắt đổi mật khẩu mặc định; quy tắc độ dài, loại ký tự | | Chính sách mật khẩu (GPO/IdP) |  |
| 3.6.2.2 b) | Gợi ý: mật khẩu riêng cho từng tài sản hoặc xác thực tập trung; bắt đổi ở lần đăng nhập đầu | | Cấu hình IdP/SSO |  |
| 3.6.2.2 b) | Gợi ý độ dài: ≥ 8 ký tự nếu có MFA; ≥ 14 ký tự gồm đủ 4 loại ký tự nếu không có MFA | | Chính sách mật khẩu |  |
| 3.6.2.2 b) | Tài khoản quản trị đổi mật khẩu ít nhất 2 tháng/lần | | Chính sách hết hạn mật khẩu tài khoản quản trị |  |
| 3.6.2.3 | Đổi hoặc vô hiệu hóa tài khoản mặc định (root, administrator, tài khoản cài sẵn của hãng) | | Danh sách tài khoản mặc định đã xử lý |  |
| 3.6.2.3 | Tách biệt quản lý 4 loại tài khoản | | Quy định + danh sách phân loại |  |
| 3.6.2.3 | Mỗi tài khoản gắn một người; dùng chung phải được phê duyệt và truy vết được người dùng từng thời điểm | | Phê duyệt tài khoản dùng chung, sổ theo dõi |  |
| 3.6.2.3 | Xóa/vô hiệu hóa tài khoản không hoạt động quá 45 ngày hoặc ngay khi đổi nhân sự | | Báo cáo tài khoản inactive |  |
| 3.6.2.3 | Rà soát quy định quản lý tài khoản ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 3.6.2.4 | Áp dụng đặc quyền tối thiểu và phân tách nhiệm vụ cho mọi loại tài khoản | | Ma trận vai trò – quyền |  |
| 3.6.2.4 | Tài liệu hóa quyền cần thiết theo chức danh, bộ phận | | Ma trận quyền theo chức danh |  |
| 3.6.2.4 | MFA cho truy cập từ ngoài tổ chức, từ đối tác/bên thứ ba, từ Internet và cho tài khoản quản trị | | Cấu hình MFA |  |
| 3.6.2.4 | Rà soát quy định quản lý truy cập ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |

## 3.7 Quản lý lỗ hổng bảo mật

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.7.1 b) | Theo dõi thông tin mối đe dọa, lỗ hổng mới từ nhiều nguồn | | Nguồn tin đăng ký (NCSC, CVE, hãng…) |  |
| 3.7.2.1 a) | Quy trình quản lý lỗ hổng: rà quét phát hiện, chấm mức nghiêm trọng, chia sẻ/tiếp nhận báo cáo, khắc phục theo ưu tiên và kiểm tra lại | | Quy trình quản lý lỗ hổng |  |
| 3.7.2.1 b) | Rà soát quy trình và thực hiện rà quét lỗ hổng ≥ 1 lần/năm hoặc khi thay đổi | | Báo cáo rà quét, biên bản rà soát |  |
| 3.7.2.2 | Kiểm tra, cập nhật bản vá HĐH và ứng dụng cho máy tính, di động cấp cho người dùng ≥ 1 lần/tháng | | Báo cáo tuân thủ bản vá hằng tháng |  |
| 3.7.2.2 | Giám sát để phát hiện lỗ hổng mới và vá kịp thời | | Nhật ký vá |  |

## 3.8 Quản lý nhật ký an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.8.2.1 a) | Quy định quản lý log: cách ghi, thu thập, kiểm tra, lưu trữ | | Quy định quản lý nhật ký |  |
| 3.8.2.1 a) | Thu thập tối thiểu: log truy cập phần cứng, log truy cập phần mềm, log cảnh báo của thiết bị bảo mật | | Danh sách nguồn log |  |
| 3.8.2.1 a) | Đồng bộ thời gian qua máy chủ thời gian (NTP) cho mọi thành phần tham gia giám sát | | Cấu hình NTP |  |
| 3.8.2.1 a) | Rà soát log ANM ≥ 1 lần/năm | | Biên bản rà soát log |  |
| 3.8.2.1 b) | Kiểm tra, cập nhật quy trình quản lý log ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |

## 3.9 Bảo vệ trình duyệt web, thư điện tử

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.9.2.1 a) | Danh sách trình duyệt và dịch vụ email được phép | | Danh sách được phép |  |
| 3.9.2.1 b) | Chỉ dùng phiên bản còn được hãng hỗ trợ | | Báo cáo phiên bản |  |
| 3.9.2.1 c) | Cập nhật bản vá trình duyệt, email thường xuyên (hoặc biện pháp tương đương) | | Báo cáo bản vá |  |
| 3.9.2.2 | Dùng dịch vụ lọc tên miền (DNS filtering) chặn tên miền giả mạo, độc hại | | Cấu hình DNS filtering |  |

## 3.10 Phòng chống phần mềm độc hại

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.10.1 a) | Quy định phòng, chống, khắc phục mã độc | | Quy định phòng chống mã độc |  |
| 3.10.1 b) | Chống mã độc cho mọi tài sản và điểm kết nối (trong và ngoài); tự quét, chặn, cập nhật mẫu, gắn với quy trình lỗ hổng/sự cố | | Kiến trúc giải pháp |  |
| 3.10.2.1 a) | Cài và duy trì phần mềm chống mã độc (hoặc tương đương) trên máy chủ, máy người dùng | | Báo cáo độ phủ agent |  |
| 3.10.2.1 b) | Tính năng tối thiểu: bảo vệ thời gian thực, tự cập nhật mẫu nhận diện | | Cấu hình sản phẩm |  |
| 3.10.2.2 | Quét mã độc và tắt autorun/autoplay với USB, ổ cứng, thẻ nhớ | | GPO tắt autorun, chính sách quét |  |

## 3.11 Sao lưu và khôi phục dữ liệu

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.11.2.1 a) | Quy định sao lưu/khôi phục: loại dữ liệu (cấu hình, bản dự phòng HĐH máy chủ, CSDL, dữ liệu nghiệp vụ), tần suất, phương pháp, vùng lưu, khôi phục thử định kỳ | | Quy định sao lưu |  |
| 3.11.2.1 b) | Rà soát quy định sao lưu ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 3.11.2.2 | Danh sách dữ liệu cần sao lưu và tần suất theo ngày/tuần/tháng… | | Bảng lịch sao lưu |  |
| 3.11.2.3 | Bảo vệ bản sao lưu: toàn vẹn, sẵn sàng, khôi phục được | | Cấu hình bảo vệ |  |

## 3.12 Quản lý hạ tầng mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.12.2.1 a) | Lập, duy trì sơ đồ kiến trúc mạng và hồ sơ mạng | | Sơ đồ mạng; biên bản thẩm tra thiết kế (cấp 4–5) |  |
| 3.12.2.1 b) | Kiến trúc mạng an toàn theo 3 nguyên tắc: phân vùng, đặc quyền tối thiểu, sẵn sàng | | Tài liệu kiến trúc |  |
| 3.12.2.1 c) | Hồ sơ mạng gồm: tổng quan kiến trúc, sơ đồ chi tiết, tài liệu kỹ thuật, mô tả phương án ANM | | Bộ hồ sơ mạng |  |
| 3.12.2.1 d) | Cập nhật sơ đồ mạng 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản sơ đồ |  |
| 3.12.2.2 | Có phương án dự phòng cho thiết bị mạng chính | | Sơ đồ HA, hợp đồng kênh truyền |  |
| 3.12.2.2 | Tường lửa có IPS (hoặc tương đương) kiểm soát giữa vùng mạng; kiểm soát thiết bị đầu cuối kết nối vào mạng | | Cấu hình NGFW/IPS |  |
| 3.12.2.2 | Cập nhật định kỳ CSDL nhận diện tấn công cho các giải pháp ANM | | Nhật ký cập nhật signature |  |
| 3.12.2.2 | Quản lý thay đổi | | Phiếu thay đổi (change request) |  |
| 3.12.2.2 | Theo dõi hiệu năng (CPU, RAM…) để bảo đảm hoạt động bình thường | | Dashboard giám sát |  |
| 3.12.2.3 a) | Lập kế hoạch và quy trình kiểm thử, nghiệm thu (nêu rõ nội dung cần thử) | | Kế hoạch thử nghiệm |  |
| 3.12.2.3 b) | Kiểm thử hệ thống trước khi đưa vào vận hành | | Báo cáo kiểm thử |  |
| 3.12.2.3 c) | Có nhân sự phụ trách thử nghiệm, nghiệm thu | | Quyết định phân công |  |
| 3.12.2.4 a) | Chỉ cho phép kết nối an toàn (nếu hỗ trợ) khi truy cập nội bộ hoặc quản trị từ xa | | Cấu hình SSH/TLS, tắt Telnet/HTTP |  |
| 3.12.2.4 b) | Thiết bị phải yêu cầu đăng nhập khi quản trị tại chỗ cũng như từ xa | | Cấu hình xác thực thiết bị |  |
| 3.12.2.4 c) | Kiểm soát truy cập từ ngoài vào theo từng dịch vụ; chặn mọi truy cập không được phép | | Rule firewall |  |
| 3.12.2.4 d) | Đặt timeout tự đóng phiên kết nối không hoạt động | | Cấu hình timeout |  |
| 3.12.2.5 | Truy cập từ xa của quản trị viên, người dùng tác nghiệp qua VPN (hoặc tương đương) có xác thực | | Cấu hình VPN/ZTNA |  |

## 3.13 Nhân sự vận hành, quản trị, bảo vệ an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.13.2.1 a) | Phân công người phụ trách vận hành, quản trị và bảo vệ ANM cho hệ thống | | Quyết định phân công |  |
| 3.13.2.1 b) | Nhân sự có trình độ ANM/CNTT; ký cam kết bảo mật trong và sau khi nghỉ việc | | Hồ sơ năng lực, cam kết bảo mật |  |
| 3.13.2.2 a) | Chương trình nâng cao nhận thức ANM cho mọi người dùng HTTT | | Tài liệu, danh sách tham dự |  |
| 3.13.2.2 b) | Đào tạo nhận thức ≥ 1 lần/năm | | Danh sách, bài kiểm tra |  |
| 3.13.2.2 c) | Thu hồi thẻ, dữ liệu, thiết bị, tài sản khi nghỉ hoặc chuyển việc | | Biên bản bàn giao |  |

## 3.14 Quản lý nhà cung cấp sản phẩm, dịch vụ

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.14.1 | Quy trình đánh giá nhà cung cấp dịch vụ ANM, lưu trữ/xử lý dữ liệu nhạy cảm, nền tảng quan trọng | | Quy trình đánh giá NCC |  |
| 3.14.2 | Danh sách nhà cung cấp, theo dõi trạng thái | | Danh sách NCC |  |
| 3.14.2 | Phân loại nhà cung cấp | | Tiêu chí phân loại |  |
| 3.14.2 | Văn bản phân định phạm vi trách nhiệm giữa nhà cung cấp và tổ chức | | Hợp đồng/SLA/ma trận RACI |  |
| 3.14.2 | Cập nhật danh sách nhà cung cấp ≥ 1 lần/năm hoặc khi thay đổi | | Ngày cập nhật |  |

## 3.15 Quản trị ứng phó sự cố an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 3.15.2.1 a) | Chỉ định người chủ chốt và ít nhất một người dự phòng quản lý ứng phó sự cố | | Quyết định phân công |  |
| 3.15.2.1 b) | Đầu mối tiếp nhận báo cáo sự cố; xác minh thông tin liên hệ hằng năm | | Danh bạ có ngày xác minh |  |
| 3.15.2.1 c) | Phân công vai trò, trách nhiệm từng thành viên đội ứng phó | | Bảng RACI đội ứng phó |  |
| 3.15.2.1 d) | Quy định trách nhiệm phối hợp của các phòng ban với đội ứng phó | | Quy chế phối hợp |  |
| 3.15.2.2 a) | Quy trình báo cáo sự cố nội bộ | | Quy trình, mẫu báo cáo |  |
| 3.15.2.2 b) | Phân nhóm sự cố ANM | | Bảng phân loại sự cố |  |
| 3.15.2.2 c) | Cập nhật quy trình báo cáo ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 3.15.2.3 a) | Quy trình ứng phó có cơ chế phối hợp với cơ quan chức năng, chuyên gia, nhà cung cấp dịch vụ | | Quy trình ứng phó |  |
| 3.15.2.3 b) | Cập nhật quy trình ứng phó ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |

## Tổng hợp kết quả

| Nhóm | Tên nhóm | Số dòng | Đạt | Một phần | Chưa | N/A |
|---|---|---|---|---|---|---|
| 3.1 | Quản lý rủi ro an ninh mạng | 2 | | | | |
| 3.2 | Quản lý tài sản phần cứng | 8 | | | | |
| 3.3 | Quản lý tài sản phần mềm | 7 | | | | |
| 3.4 | Quản lý tài sản thông tin | 8 | | | | |
| 3.5 | Cấu hình an toàn phần cứng, phần mềm | 6 | | | | |
| 3.6 | Quản lý tài khoản và quyền truy cập | 19 | | | | |
| 3.7 | Quản lý lỗ hổng bảo mật | 5 | | | | |
| 3.8 | Quản lý nhật ký an ninh mạng | 5 | | | | |
| 3.9 | Bảo vệ trình duyệt web, thư điện tử | 4 | | | | |
| 3.10 | Phòng chống phần mềm độc hại | 5 | | | | |
| 3.11 | Sao lưu và khôi phục dữ liệu | 4 | | | | |
| 3.12 | Quản lý hạ tầng mạng | 17 | | | | |
| 3.13 | Nhân sự vận hành, quản trị, bảo vệ an ninh mạng | 5 | | | | |
| 3.14 | Quản lý nhà cung cấp sản phẩm, dịch vụ | 5 | | | | |
| 3.15 | Quản trị ứng phó sự cố an ninh mạng | 9 | | | | |
| | **Tổng** | **109** | | | | |

## Bước tiếp theo

- Mỗi dòng `Chưa`/`Một phần` → đưa vào kế hoạch khắc phục có người phụ trách và hạn hoàn thành; hệ thống xây mới/nâng cấp phải triển khai đủ phương án đã phê duyệt **trước khi vận hành** (NĐ 331 Đ30.6) và qua đánh giá điều kiện ANM (NĐ 331 Đ28.3).
- Lưu checklist đã điền cùng bằng chứng làm hồ sơ phục vụ kiểm tra, đánh giá (NĐ 331 Đ28.5, Đ27).
