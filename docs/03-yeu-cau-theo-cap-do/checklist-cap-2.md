# Checklist tự đánh giá — HTTT cấp độ 2

> **Căn cứ:** TCVN 14423:2026 mục 4; NĐ 331/2026/NĐ-CP Đ28.4, Đ29.1, Đ30.1 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

> **Bản quyền:** Tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI). Cột "Yêu cầu" là diễn giải ngắn bằng lời của người soạn, không phải nguyên văn tiêu chuẩn.

Cấp độ 2 gồm **15 nhóm** (mục 4.1–4.15). So với cấp 1 bổ sung: phân loại mức nhạy cảm dữ liệu, mã hóa dữ liệu không công khai khi lưu, lưu log ≥ 1 tháng, WAF, phân vùng mạng tối thiểu, hạ tầng sao lưu tách biệt, quản lý phần mềm thuê khoán, đầu mối với cơ quan quản lý và Liên minh ứng phó sự cố quốc gia.

## Cách dùng

1. Điền `{{TEN_HE_THONG}}`, `{{TEN_TO_CHUC}}`, người đánh giá, ngày `{{NGAY}}` ở bảng dưới.
2. Cột **Kết quả** ghi một trong: `Đạt` · `Một phần` · `Chưa` · `N/A`. Mọi `N/A` phải có lý do ở cột Ghi chú (vd "không có mạng không dây") và được nêu trong phương án bảo đảm ANM của hồ sơ đề xuất cấp độ (NĐ 331 Đ22.6, Đ29).
3. Nhiều dòng TCVN cho phép "phương án tương đương" — nếu dùng, mô tả biện pháp thay thế ở cột Ghi chú và lưu lập luận trong hồ sơ.
4. Các chỉ số ghi "gợi ý" (thời gian khóa phiên, độ dài mật khẩu…) là cấu hình mẫu TCVN nêu kèm "dựa trên đánh giá rủi ro"; nên áp dụng, nếu chọn khác phải có lập luận.
5. Chu kỳ, thời hạn tổng hợp tại [ma trận yêu cầu theo cấp độ](ma-tran-yeu-cau-theo-cap-do.md#2-các-ngưỡng-định-lượng-theo-cấp); ánh xạ sang NĐ 331 tại [anh-xa-nd331-d30-tcvn.md](anh-xa-nd331-d30-tcvn.md). An ninh vật lý (không thuộc yêu cầu cơ bản của NĐ 331 — Đ30.2) xem [an-ninh-vat-ly-phu-luc-a.md](an-ninh-vat-ly-phu-luc-a.md) mục A.2.

> Cột Ghi chú đã điền sẵn **Mới/khác so với cấp 1** cho dòng mới xuất hiện hoặc thay đổi mức yêu cầu (đối chiếu theo nội dung, không theo số mục).


| Thông tin | Giá trị |
|---|---|
| Hệ thống | `{{TEN_HE_THONG}}` |
| Chủ quản | `{{TEN_TO_CHUC}}` |
| Cấp độ đề xuất/được phê duyệt | 2 |
| Người đánh giá | `{{NGUOI_DANH_GIA}}` |
| Ngày đánh giá | `{{NGAY}}` |

## 4.1 Quản lý rủi ro an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.1 a) | Ban hành quy định/quy trình quản lý rủi ro đủ 4 bước: nhận diện, phân tích, đánh giá, xử lý | | Quy trình QLRR đã ký ban hành |  |
| 4.1 b) | Rà soát quy trình QLRR và tài liệu kèm theo ≥ 1 lần/năm hoặc khi tổ chức thay đổi | | Biên bản rà soát, lịch sử phiên bản |  |

## 4.2 Quản lý tài sản phần cứng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.2.1 a) | Danh mục toàn bộ phần cứng của HTTT, kể cả thiết bị bên ngoài có kết nối vào; xác định tài sản cần giám sát | | Danh mục tài sản phần cứng |  |
| 4.2.1 b) | Phát hiện tài sản vô chủ/trái phép để loại bỏ hoặc đưa vào quản lý | | Báo cáo rà soát tài sản |  |
| 4.2.1 c) | Kiểm kê, cập nhật danh mục tài sản ≥ 1 lần/năm | | Biên bản kiểm kê | **Mới/khác so với cấp 1** |
| 4.2.2.1 a) | Danh mục phủ mọi thiết bị lưu trữ/xử lý dữ liệu: đầu cuối, di động, lưu trữ ngoài, văn phòng, mạng, OT/IoT, máy chủ vật lý/ảo/cloud | | Danh mục tài sản (CMDB/bảng tính) |  |
| 4.2.2.1 b) | Trường tối thiểu: tên, IP tĩnh, MAC/serial, hạn hỗ trợ của hãng, vị trí địa lý và trong mạng, mục đích, tình trạng; gán người chịu trách nhiệm | | Danh mục có đủ trường, cột người phụ trách |  |
| 4.2.2.1 c) | Đăng ký thiết bị di động được phép kết nối; quy định trách nhiệm cá nhân khi dùng cho công việc | | Sổ đăng ký thiết bị di động, quy định sử dụng |  |
| 4.2.2.2 a) | Quy trình phát hiện, xử lý thiết bị lạ kết nối trái phép, thực hiện ≥ 1 lần/năm | | Quy trình + kết quả các lần rà soát |  |
| 4.2.2.2 b) | Xử lý thiết bị trái phép bằng cách gỡ bỏ, từ chối kết nối hoặc cách ly | | Nhật ký xử lý |  |
| 4.2.2.3 | Có phương án xóa sạch dữ liệu khi chuyển giao hoặc đổi mục đích sử dụng phần cứng | | Quy trình xóa dữ liệu, biên bản xóa | **Mới/khác so với cấp 1** |

## 4.3 Quản lý tài sản phần mềm

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.3.1 a) | Quản lý danh mục phần mềm; chỉ phần mềm đã phê duyệt mới được cài và dùng | | Danh mục phần mềm, quy trình phê duyệt |  |
| 4.3.1 b) | Kiểm kê, cập nhật danh mục phần mềm ≥ 1 lần/năm | | Biên bản kiểm kê phần mềm |  |
| 4.3.2.1 a) | Lập danh mục phần mềm đang cài trên các thiết bị thuộc HTTT | | Danh mục phần mềm (xuất từ công cụ inventory) |  |
| 4.3.2.1 b) | Trường tối thiểu: tên, mục đích, hạn hỗ trợ, phạm vi, chủ quản, bản quyền, phiên bản, hệ thống thành phần; gán trách nhiệm | | Danh mục có đủ trường |  |
| 4.3.2.2 a) | Quy trình phát hiện, xử lý phần mềm trái phép ≥ 1 lần/năm | | Quy trình + kết quả rà soát |  |
| 4.3.2.2 b) | Phần mềm trái phép nhưng cần thiết đưa vào danh sách ngoại lệ, kèm biện pháp giảm thiểu | | Danh sách ngoại lệ có biện pháp kiểm soát |  |
| 4.3.2.2 c) | Lập kế hoạch gỡ sớm phần mềm trái phép ngoài danh sách ngoại lệ | | Kế hoạch gỡ bỏ, bằng chứng đã gỡ |  |
| 4.3.2.3 a) | Phần mềm thuê khoán: có hợp đồng, cam kết bảo mật với bên phát triển | | Hợp đồng, NDA | **Mới/khác so với cấp 1** |
| 4.3.2.3 b) | Yêu cầu bàn giao mã nguồn; nếu không được thì có chứng chỉ đánh giá độc lập hoặc kiểm thử xâm nhập + cam kết trách nhiệm pháp lý | | Biên bản bàn giao mã nguồn/chứng chỉ/cam kết | **Mới/khác so với cấp 1** |

## 4.4 Quản lý tài sản thông tin

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.4.2.1 a) | Quy định quản lý tài sản thông tin: danh mục, mức nhạy cảm, chủ sở hữu, cách xử lý, thời hạn lưu, yêu cầu tiêu hủy | | Quy định quản lý tài sản thông tin |  |
| 4.4.2.1 b) | Phân loại mức nhạy cảm (gợi ý 3 mức: công khai, nội bộ, hạn chế truy cập) | | Bảng phân loại, nhãn dữ liệu | **Mới/khác so với cấp 1** |
| 4.4.2.1 c) | Quy trình yêu cầu truy cập, thêm, sửa, xóa dữ liệu | | Quy trình + phiếu yêu cầu |  |
| 4.4.2.1 d) | Kiểm tra phân quyền dữ liệu ≥ 1 lần/năm | | Biên bản rà soát phân quyền |  |
| 4.4.2.1 e) | Rà soát quy trình quản lý tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản quy trình |  |
| 4.4.2.2 a) | Lập danh mục tài sản thông tin theo quy trình đã ban hành | | Danh mục tài sản thông tin |  |
| 4.4.2.2 b) | Cập nhật danh mục tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | | Ngày cập nhật danh mục |  |
| 4.4.2.3 | Ma trận quyền truy cập của từng tài khoản/người dùng với từng loại tài sản thông tin | | Ma trận phân quyền (ACL) |  |
| 4.4.2.4 | Mã hóa thông tin xác thực và dữ liệu không công khai khi lưu (hệ thống truy xuất lớn được dùng biện pháp tương đương) | | Cấu hình mã hóa (DB/đĩa/hash mật khẩu) | **Mới/khác so với cấp 1** |

## 4.5 Cấu hình an toàn phần cứng, phần mềm

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.5.2.1 a) | Ban hành quy định/quy trình cấu hình an toàn cho phần cứng và phần mềm | | Quy trình cấu hình an toàn |  |
| 4.5.2.1 b) | Có tài liệu cấu hình chuẩn/hardening; giao thức an toàn; tường lửa host; chống tự động đăng nhập trên tài sản xử lý dữ liệu quan trọng | | Baseline cấu hình (vd theo CIS), ảnh chụp cấu hình | **Mới/khác so với cấp 1** |
| 4.5.2.1 c) | Tắt giao thức mạng không an toàn và dịch vụ không dùng | | Kết quả quét cổng/dịch vụ | **Mới/khác so với cấp 1** |
| 4.5.2.1 d) | Rà soát quy định và tài liệu cấu hình ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 4.5.2.2 a) | Tự khóa phiên theo đánh giá rủi ro — gợi ý: máy người dùng ≤ 15'; phiên quản trị, di động ≤ 5'; phần mềm nghiệp vụ dữ liệu quan trọng ≤ 15' | | GPO/MDM/cấu hình timeout | **Mới/khác so với cấp 1** |
| 4.5.2.2 a) | Khóa khi đăng nhập sai — gợi ý: laptop, điện thoại ≤ 10 lần; phần mềm nghiệp vụ dữ liệu quan trọng ≤ 5 lần; khóa 12 giờ–30 ngày | | Cấu hình lockout | **Mới/khác so với cấp 1** |
| 4.5.2.2 b) | Có cơ chế mở khóa khẩn cấp cho quản trị viên/tài khoản đặc quyền | | Quy trình break-glass |  |

## 4.6 Quản lý tài khoản và quyền truy cập

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.6.1 a) | Quy trình, công cụ cấp/thu hồi quyền cho 4 loại tài khoản (quản trị, tác nghiệp, kỹ thuật, dịch vụ) theo vai trò | | Quy trình quản lý tài khoản |  |
| 4.6.1 c) | Ghi log và giám sát hoạt động của tài khoản người dùng | | Cấu hình audit log đăng nhập |  |
| 4.6.2.1 a) | Danh sách mọi tài khoản trên phần cứng và phần mềm | | Danh sách tài khoản |  |
| 4.6.2.1 b) | Danh sách gồm tối thiểu: tài khoản quản trị, tác nghiệp, kỹ thuật | | Danh sách tài khoản phân loại | **Mới/khác so với cấp 1** |
| 4.6.2.1 c) | Trường tối thiểu: loại, tên, trạng thái, hệ thống, người quản lý, phòng ban, ngày kích hoạt/vô hiệu; không còn tài khoản không hợp lệ | | Danh sách có đủ trường |  |
| 4.6.2.1 d) | Rà soát danh sách tài khoản ≥ 1 lần/năm | | Biên bản rà soát |  |
| 4.6.2.2 a) | Cấu hình bắt đổi mật khẩu mặc định; quy tắc độ dài, loại ký tự; thời hạn đổi và thời hạn hiệu lực mật khẩu | | Chính sách mật khẩu (GPO/IdP) | **Mới/khác so với cấp 1** |
| 4.6.2.2 b) | Gợi ý: mật khẩu riêng cho từng tài sản hoặc xác thực tập trung; bắt đổi ở lần đăng nhập đầu | | Cấu hình IdP/SSO |  |
| 4.6.2.2 b) | Gợi ý độ dài: ≥ 8 ký tự nếu có MFA; ≥ 14 ký tự gồm đủ 4 loại ký tự nếu không có MFA | | Chính sách mật khẩu |  |
| 4.6.2.2 b) | Tài khoản quản trị đổi mật khẩu ít nhất 2 tháng/lần | | Chính sách hết hạn mật khẩu tài khoản quản trị |  |
| 4.6.2.3 | Đổi hoặc vô hiệu hóa tài khoản mặc định (root, administrator, tài khoản cài sẵn của hãng) | | Danh sách tài khoản mặc định đã xử lý |  |
| 4.6.2.3 | Tách biệt quản lý 4 loại tài khoản | | Quy định + danh sách phân loại |  |
| 4.6.2.3 | Mỗi tài khoản gắn một người; dùng chung phải được phê duyệt và truy vết được người dùng từng thời điểm | | Phê duyệt tài khoản dùng chung, sổ theo dõi |  |
| 4.6.2.3 | Xóa/vô hiệu hóa tài khoản không hoạt động quá 45 ngày hoặc ngay khi đổi nhân sự | | Báo cáo tài khoản inactive |  |
| 4.6.2.3 | Rà soát quy định quản lý tài khoản ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 4.6.2.4 | Áp dụng đặc quyền tối thiểu và phân tách nhiệm vụ cho mọi loại tài khoản | | Ma trận vai trò – quyền |  |
| 4.6.2.4 | Tài liệu hóa quyền cần thiết theo chức danh, bộ phận | | Ma trận quyền theo chức danh |  |
| 4.6.2.4 | MFA cho truy cập từ ngoài tổ chức, từ đối tác/bên thứ ba, từ Internet và cho tài khoản quản trị | | Cấu hình MFA |  |
| 4.6.2.4 | Rà soát quy định quản lý truy cập ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |

## 4.7 Quản lý lỗ hổng bảo mật

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.7.1 b) | Theo dõi thông tin mối đe dọa, lỗ hổng mới từ nhiều nguồn | | Nguồn tin đăng ký (NCSC, CVE, hãng…) |  |
| 4.7.2.1 a) | Quy trình quản lý lỗ hổng: rà quét phát hiện, chấm mức nghiêm trọng, chia sẻ/tiếp nhận báo cáo, khắc phục theo ưu tiên và kiểm tra lại | | Quy trình quản lý lỗ hổng |  |
| 4.7.2.1 b) | Rà soát quy trình và thực hiện rà quét lỗ hổng ≥ 1 lần/năm hoặc khi thay đổi | | Báo cáo rà quét, biên bản rà soát |  |
| 4.7.2.2 | Có phương án vá cho toàn bộ phần cứng, phần mềm của HTTT | | Kế hoạch vá | **Mới/khác so với cấp 1** |
| 4.7.2.2 | Trước khi vá hệ thống có dữ liệu quan trọng: đánh giá tác động, thử nghiệm, có phương án khôi phục | | Biên bản thử nghiệm bản vá | **Mới/khác so với cấp 1** |
| 4.7.2.2 | Kiểm tra, cập nhật bản vá HĐH và ứng dụng cho máy tính, di động cấp cho người dùng ≥ 1 lần/tháng | | Báo cáo tuân thủ bản vá hằng tháng |  |
| 4.7.2.2 | Giám sát để phát hiện lỗ hổng mới và vá kịp thời | | Nhật ký vá |  |

## 4.8 Quản lý nhật ký an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.8.2.1 a) | Quy định quản lý log: cách ghi, thu thập, kiểm tra, lưu trữ | | Quy định quản lý nhật ký |  |
| 4.8.2.1 a) | Thu thập tối thiểu: log truy cập hệ thống, log ứng dụng, log cảnh báo thiết bị bảo mật | | Danh sách nguồn log | **Mới/khác so với cấp 1** |
| 4.8.2.1 a) | Log truy cập có nguồn, đích, tài khoản, thời điểm, hành vi; log cảnh báo có tên, thiết bị, mức độ, nguồn, loại, thời điểm | | Mẫu bản ghi log | **Mới/khác so với cấp 1** |
| 4.8.2.1 a) | Đồng bộ thời gian qua máy chủ thời gian (NTP) cho mọi thành phần tham gia giám sát | | Cấu hình NTP |  |
| 4.8.2.1 a) | Bảo đảm dung lượng lưu log tối thiểu 1 tháng | | Cấu hình retention, ảnh chụp dung lượng | **Mới/khác so với cấp 1** |
| 4.8.2.1 a) | Rà soát log ANM ≥ 1 lần/năm | | Biên bản rà soát log |  |
| 4.8.2.1 b) | Kiểm tra, cập nhật quy trình quản lý log ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |

## 4.9 Bảo vệ trình duyệt web, thư điện tử

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.9.2.1 a) | Danh sách trình duyệt và dịch vụ email được phép | | Danh sách được phép |  |
| 4.9.2.1 b) | Chỉ dùng phiên bản còn được hãng hỗ trợ | | Báo cáo phiên bản |  |
| 4.9.2.1 c) | Cập nhật bản vá trình duyệt, email thường xuyên (hoặc biện pháp tương đương) | | Báo cáo bản vá |  |
| 4.9.2.2 | Dùng dịch vụ lọc tên miền (DNS filtering) chặn tên miền giả mạo, độc hại | | Cấu hình DNS filtering |  |

## 4.10 Phòng chống phần mềm độc hại

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.10.1 a) | Quy định phòng, chống, khắc phục mã độc | | Quy định phòng chống mã độc |  |
| 4.10.1 b) | Chống mã độc cho mọi tài sản và điểm kết nối (trong và ngoài); tự quét, chặn, cập nhật mẫu, gắn với quy trình lỗ hổng/sự cố | | Kiến trúc giải pháp |  |
| 4.10.2.1 a) | Cài và duy trì phần mềm chống mã độc (hoặc tương đương) trên máy chủ, máy người dùng | | Báo cáo độ phủ agent |  |
| 4.10.2.1 b) | Tính năng tối thiểu: bảo vệ thời gian thực, tự cập nhật mẫu nhận diện | | Cấu hình sản phẩm |  |
| 4.10.2.2 | Quét mã độc và tắt autorun/autoplay với USB, ổ cứng, thẻ nhớ | | GPO tắt autorun, chính sách quét |  |

## 4.11 Sao lưu và khôi phục dữ liệu

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.11.2.1 a) | Quy định sao lưu/khôi phục: loại dữ liệu (cấu hình, bản dự phòng HĐH máy chủ, CSDL, dữ liệu nghiệp vụ), tần suất, phương pháp, vùng lưu, khôi phục thử định kỳ | | Quy định sao lưu |  |
| 4.11.2.1 b) | Rà soát quy định sao lưu ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 4.11.2.2 | Danh sách dữ liệu cần sao lưu và tần suất theo ngày/tuần/tháng… | | Bảng lịch sao lưu |  |
| 4.11.2.3 | Bảo vệ bản sao lưu: toàn vẹn, sẵn sàng, khôi phục được | | Cấu hình bảo vệ |  |
| 4.11.2.4 | Định danh, quản lý phiên bản bản sao lưu; lưu trên hạ tầng tách biệt môi trường vận hành | | Sơ đồ hạ tầng backup | **Mới/khác so với cấp 1** |

## 4.12 Quản lý hạ tầng mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.12.2.1 a) | Lập, duy trì sơ đồ kiến trúc mạng và hồ sơ mạng | | Sơ đồ mạng; biên bản thẩm tra thiết kế (cấp 4–5) |  |
| 4.12.2.1 b) | Kiến trúc mạng an toàn theo 3 nguyên tắc: phân vùng, đặc quyền tối thiểu, sẵn sàng | | Tài liệu kiến trúc |  |
| 4.12.2.1 c) | Hồ sơ mạng gồm: tổng quan kiến trúc, sơ đồ chi tiết, tài liệu kỹ thuật, mô tả phương án ANM | | Bộ hồ sơ mạng |  |
| 4.12.2.1 d) | Khi đổi thiết kế, đánh giá lại sự phù hợp với yêu cầu an toàn | | Biên bản đánh giá thay đổi | **Mới/khác so với cấp 1** |
| 4.12.2.1 e) | Cập nhật sơ đồ mạng 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản sơ đồ |  |
| 4.12.2.2 a) | Có phương án dự phòng cho thiết bị mạng chính | | Sơ đồ HA, hợp đồng kênh truyền |  |
| 4.12.2.2 a) | Tường lửa có IPS (hoặc tương đương) kiểm soát truy cập, chống xâm nhập giữa các vùng mạng | | Cấu hình NGFW/IPS | **Mới/khác so với cấp 1** |
| 4.12.2.2 a) | WAF (hoặc tương đương) cho ứng dụng web (nếu có) | | Cấu hình WAF | **Mới/khác so với cấp 1** |
| 4.12.2.2 a) | Cập nhật định kỳ CSDL nhận diện tấn công cho các giải pháp ANM | | Nhật ký cập nhật signature |  |
| 4.12.2.2 a) | Quản lý thay đổi | | Phiếu thay đổi (change request) |  |
| 4.12.2.2 a) | Theo dõi hiệu năng (CPU, RAM…) để bảo đảm hoạt động bình thường | | Dashboard giám sát |  |
| 4.12.2.2 b) | Phân vùng tối thiểu: máy chủ, DMZ, không dây (nếu có), nội bộ, biên | | Sơ đồ phân vùng, ACL giữa vùng | **Mới/khác so với cấp 1** |
| 4.12.2.3 a) | Lập kế hoạch và quy trình kiểm thử, nghiệm thu (nêu rõ nội dung cần thử) | | Kế hoạch thử nghiệm |  |
| 4.12.2.3 b) | Kiểm thử hệ thống trước khi đưa vào vận hành | | Báo cáo kiểm thử |  |
| 4.12.2.3 c) | Có nhân sự phụ trách thử nghiệm, nghiệm thu | | Quyết định phân công |  |
| 4.12.2.4 a) | Chỉ cho phép kết nối an toàn (nếu hỗ trợ) khi truy cập nội bộ hoặc quản trị từ xa | | Cấu hình SSH/TLS, tắt Telnet/HTTP |  |
| 4.12.2.4 b) | Kiểm soát truy cập từ ngoài vào theo từng dịch vụ; chặn mọi truy cập không được phép | | Rule firewall |  |
| 4.12.2.4 c) | Giới hạn dải địa chỉ/thiết bị được phép quản trị từ xa | | ACL quản trị | **Mới/khác so với cấp 1** |
| 4.12.2.4 d) | Đặt timeout tự đóng phiên kết nối không hoạt động | | Cấu hình timeout |  |
| 4.12.2.5 | Truy cập từ xa của quản trị viên, người dùng tác nghiệp qua VPN (hoặc tương đương) có xác thực | | Cấu hình VPN/ZTNA |  |
| 4.12.2.5 | Xác thực khi kết nối từ xa và xác thực bổ sung trước khi vào hệ thống | | Cấu hình MFA VPN | **Mới/khác so với cấp 1** |
| 4.12.2.5 | Thiết bị truy cập từ xa phải có chống mã độc và cấu hình theo chính sách của tổ chức | | Chính sách posture check | **Mới/khác so với cấp 1** |
| 4.12.2.5 | Chỉ cho phép một số địa chỉ được quản trị thiết bị từ xa (nếu hỗ trợ) | | ACL quản trị | **Mới/khác so với cấp 1** |

## 4.13 Nhân sự vận hành, quản trị, bảo vệ an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.13.1 a) | Các bộ phận vận hành, quản trị, bảo vệ ANM độc lập về chuyên môn | | Quy chế phân định nhiệm vụ | **Mới/khác so với cấp 1** |
| 4.13.2.1 a) | Phân công người phụ trách vận hành, quản trị và bảo vệ ANM cho hệ thống | | Quyết định phân công |  |
| 4.13.2.1 b) | Nhân sự có trình độ ANM/CNTT; ký cam kết bảo mật trong và sau khi nghỉ việc | | Hồ sơ năng lực, cam kết bảo mật |  |
| 4.13.2.2 a) | Chương trình nâng cao nhận thức ANM cho mọi người dùng HTTT | | Tài liệu, danh sách tham dự |  |
| 4.13.2.2 b) | Đào tạo nhận thức ≥ 1 lần/năm | | Danh sách, bài kiểm tra |  |
| 4.13.2.2 c) | Thu hồi thẻ, dữ liệu, thiết bị, tài sản khi nghỉ hoặc chuyển việc | | Biên bản bàn giao |  |
| 4.13.2.2 d) | Quy trình vô hiệu hóa mọi quyền ra vào, truy cập, quản trị khi thôi việc | | Quy trình offboarding, log vô hiệu | **Mới/khác so với cấp 1** |

## 4.14 Quản lý nhà cung cấp sản phẩm, dịch vụ

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.14.1 | Quy trình đánh giá nhà cung cấp dịch vụ ANM, lưu trữ/xử lý dữ liệu nhạy cảm, nền tảng quan trọng | | Quy trình đánh giá NCC |  |
| 4.14.2 | Danh sách nhà cung cấp, theo dõi trạng thái | | Danh sách NCC |  |
| 4.14.2 | Phân loại nhà cung cấp | | Tiêu chí phân loại |  |
| 4.14.2 | Văn bản phân định phạm vi trách nhiệm giữa nhà cung cấp và tổ chức | | Hợp đồng/SLA/ma trận RACI |  |
| 4.14.2 | Cập nhật danh sách nhà cung cấp ≥ 1 lần/năm hoặc khi thay đổi | | Ngày cập nhật |  |

## 4.15 Quản trị ứng phó sự cố an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 4.15.1 | Chính sách/quy trình sự cố gồm: phân nhóm; tiếp nhận–phân loại–xử lý ban đầu; kế hoạch ứng phó; giám sát cảnh báo; quy trình sự cố thường và nghiêm trọng; cơ chế phối hợp | | Kế hoạch ứng phó sự cố | **Mới/khác so với cấp 1** |
| 4.15.2.1 a) | Chỉ định người chủ chốt và ít nhất một người dự phòng quản lý ứng phó sự cố | | Quyết định phân công |  |
| 4.15.2.1 b) | Đầu mối phối hợp với cơ quan quản lý nhà nước về ANM và cơ quan điều hành Liên minh ứng phó sự cố quốc gia | | Danh bạ đầu mối, văn bản đăng ký | **Mới/khác so với cấp 1** |
| 4.15.2.1 c) | Đầu mối tiếp nhận báo cáo sự cố; xác minh thông tin liên hệ hằng năm | | Danh bạ có ngày xác minh |  |
| 4.15.2.1 d) | Phân công vai trò, trách nhiệm từng thành viên đội ứng phó | | Bảng RACI đội ứng phó |  |
| 4.15.2.1 e) | Quy định trách nhiệm phối hợp của các phòng ban với đội ứng phó | | Quy chế phối hợp |  |
| 4.15.2.2 a) | Quy trình báo cáo sự cố nội bộ | | Quy trình, mẫu báo cáo |  |
| 4.15.2.2 b) | Phân nhóm sự cố ANM | | Bảng phân loại sự cố |  |
| 4.15.2.2 c) | Cập nhật quy trình báo cáo ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 4.15.2.3 a) | Quy trình ứng phó có cơ chế phối hợp với cơ quan chức năng, chuyên gia, nhà cung cấp dịch vụ | | Quy trình ứng phó |  |
| 4.15.2.3 b) | Cập nhật quy trình ứng phó ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |

## Tổng hợp kết quả

| Nhóm | Tên nhóm | Số dòng | Đạt | Một phần | Chưa | N/A |
|---|---|---|---|---|---|---|
| 4.1 | Quản lý rủi ro an ninh mạng | 2 | | | | |
| 4.2 | Quản lý tài sản phần cứng | 9 | | | | |
| 4.3 | Quản lý tài sản phần mềm | 9 | | | | |
| 4.4 | Quản lý tài sản thông tin | 9 | | | | |
| 4.5 | Cấu hình an toàn phần cứng, phần mềm | 7 | | | | |
| 4.6 | Quản lý tài khoản và quyền truy cập | 19 | | | | |
| 4.7 | Quản lý lỗ hổng bảo mật | 7 | | | | |
| 4.8 | Quản lý nhật ký an ninh mạng | 7 | | | | |
| 4.9 | Bảo vệ trình duyệt web, thư điện tử | 4 | | | | |
| 4.10 | Phòng chống phần mềm độc hại | 5 | | | | |
| 4.11 | Sao lưu và khôi phục dữ liệu | 5 | | | | |
| 4.12 | Quản lý hạ tầng mạng | 23 | | | | |
| 4.13 | Nhân sự vận hành, quản trị, bảo vệ an ninh mạng | 7 | | | | |
| 4.14 | Quản lý nhà cung cấp sản phẩm, dịch vụ | 5 | | | | |
| 4.15 | Quản trị ứng phó sự cố an ninh mạng | 11 | | | | |
| | **Tổng** | **129** | | | | |

## Bước tiếp theo

- Mỗi dòng `Chưa`/`Một phần` → đưa vào kế hoạch khắc phục có người phụ trách và hạn hoàn thành; hệ thống xây mới/nâng cấp phải triển khai đủ phương án đã phê duyệt **trước khi vận hành** (NĐ 331 Đ30.6) và qua đánh giá điều kiện ANM (NĐ 331 Đ28.3).
- Lưu checklist đã điền cùng bằng chứng làm hồ sơ phục vụ kiểm tra, đánh giá (NĐ 331 Đ28.5, Đ27).
