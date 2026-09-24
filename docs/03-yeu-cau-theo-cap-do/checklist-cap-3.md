# Checklist tự đánh giá — HTTT cấp độ 3

> **Căn cứ:** TCVN 14423:2026 mục 5; NĐ 331/2026/NĐ-CP Đ28.4, Đ29.1, Đ30.1 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

> **Bản quyền:** Tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI). Cột "Yêu cầu" là diễn giải ngắn bằng lời của người soạn, không phải nguyên văn tiêu chuẩn.

Cấp độ 3 gồm **18 nhóm** (mục 5.1–5.18): thêm Giám sát và phòng thủ ANM (5.13), Phát triển ứng dụng an toàn (5.17), Quản lý kiểm tra ANM (5.18). Bắt đầu yêu cầu SIEM, EDR, sao lưu 3-2-1, dự phòng nóng, DBF, NAC, chống DDoS, lưu log ≥ 3 tháng, quản lý bản vá tập trung.

## Cách dùng

1. Điền `{{TEN_HE_THONG}}`, `{{TEN_TO_CHUC}}`, người đánh giá, ngày `{{NGAY}}` ở bảng dưới.
2. Cột **Kết quả** ghi một trong: `Đạt` · `Một phần` · `Chưa` · `N/A`. Mọi `N/A` phải có lý do ở cột Ghi chú (vd "không có mạng không dây") và được nêu trong phương án bảo đảm ANM của hồ sơ đề xuất cấp độ (NĐ 331 Đ22.6, Đ29).
3. Nhiều dòng TCVN cho phép "phương án tương đương" — nếu dùng, mô tả biện pháp thay thế ở cột Ghi chú và lưu lập luận trong hồ sơ.
4. Các chỉ số ghi "gợi ý" (thời gian khóa phiên, độ dài mật khẩu…) là cấu hình mẫu TCVN nêu kèm "dựa trên đánh giá rủi ro"; nên áp dụng, nếu chọn khác phải có lập luận.
5. Chu kỳ, thời hạn tổng hợp tại [ma trận yêu cầu theo cấp độ](ma-tran-yeu-cau-theo-cap-do.md#2-các-ngưỡng-định-lượng-theo-cấp); ánh xạ sang NĐ 331 tại [anh-xa-nd331-d30-tcvn.md](anh-xa-nd331-d30-tcvn.md). An ninh vật lý (không thuộc yêu cầu cơ bản của NĐ 331 — Đ30.2) xem [an-ninh-vat-ly-phu-luc-a.md](an-ninh-vat-ly-phu-luc-a.md) mục A.3.

> Cột Ghi chú đã điền sẵn **Mới/khác so với cấp 2** cho dòng mới xuất hiện hoặc thay đổi mức yêu cầu (đối chiếu theo nội dung, không theo số mục).


| Thông tin | Giá trị |
|---|---|
| Hệ thống | `{{TEN_HE_THONG}}` |
| Chủ quản | `{{TEN_TO_CHUC}}` |
| Cấp độ đề xuất/được phê duyệt | 3 |
| Người đánh giá | `{{NGUOI_DANH_GIA}}` |
| Ngày đánh giá | `{{NGAY}}` |

## 5.1 Quản lý rủi ro an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.1.2.1 a) | Ban hành quy định/quy trình quản lý rủi ro đủ 4 bước: nhận diện, phân tích, đánh giá, xử lý | | Quy trình QLRR đã ký ban hành |  |
| 5.1.2.1 b) | Rà soát quy trình QLRR và tài liệu kèm theo ≥ 1 lần/năm hoặc khi tổ chức thay đổi | | Biên bản rà soát, lịch sử phiên bản |  |
| 5.1.2.2 a) | Nhận diện rủi ro dựa trên tài sản, lỗ hổng, hạ tầng mạng, nhận thức, tài khoản–quyền… | | Sổ đăng ký rủi ro (risk register) | **Mới/khác so với cấp 2** |
| 5.1.2.2 b) | Nhận diện riêng rủi ro đến từ bên thứ ba, nhà cung cấp | | Mục rủi ro bên thứ ba trong risk register | **Mới/khác so với cấp 2** |
| 5.1.2.2 c) | Lặp lại nhận diện rủi ro ≥ 1 lần/năm hoặc khi hệ thống thay đổi, có lỗ hổng/sự kiện mới | | Risk register có ngày cập nhật | **Mới/khác so với cấp 2** |
| 5.1.2.3 a) | Phân tích mức tác động để quyết định chấp nhận hay giảm thiểu từng rủi ro | | Bảng đánh giá rủi ro, quyết định xử lý | **Mới/khác so với cấp 2** |
| 5.1.2.3 b) | Đánh giá ngay sau khi nhận diện; đánh giá lại khi hệ thống, tổ chức thay đổi hoặc có sự kiện ANM | | Lịch sử đánh giá lại | **Mới/khác so với cấp 2** |
| 5.1.2.4 a) | Triển khai biện pháp xử lý và lập phương án ứng phó cho rủi ro tồn dư | | Kế hoạch xử lý rủi ro, phương án rủi ro tồn dư | **Mới/khác so với cấp 2** |
| 5.1.2.4 b) | Đánh giá, cải thiện hiệu quả biện pháp kiểm soát ≥ 1 lần/năm | | Báo cáo đánh giá hiệu quả kiểm soát | **Mới/khác so với cấp 2** |
| 5.1.2.5 | Theo dõi biến động rủi ro: khả năng xảy ra, tác động, mức rủi ro, tài sản liên quan, biện pháp đã áp dụng | | Các cột tương ứng trong risk register | **Mới/khác so với cấp 2** |
| 5.1.2.6 | Thông báo kịp thời cho bên liên quan khi rủi ro có thay đổi quan trọng | | Thông báo, kênh truyền thông rủi ro | **Mới/khác so với cấp 2** |

## 5.2 Quản lý tài sản phần cứng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.2.1 a) | Danh mục toàn bộ phần cứng của HTTT, kể cả thiết bị bên ngoài có kết nối vào; xác định tài sản cần giám sát | | Danh mục tài sản phần cứng |  |
| 5.2.1 b) | Phát hiện tài sản vô chủ/trái phép để loại bỏ hoặc đưa vào quản lý | | Báo cáo rà soát tài sản |  |
| 5.2.1 c) | Kiểm kê, cập nhật danh mục tài sản ≥ 1 lần/năm | | Biên bản kiểm kê |  |
| 5.2.2.1 a) | Danh mục phủ mọi thiết bị lưu trữ/xử lý dữ liệu: đầu cuối, di động, lưu trữ ngoài, văn phòng, mạng, OT/IoT, máy chủ vật lý/ảo/cloud | | Danh mục tài sản (CMDB/bảng tính) |  |
| 5.2.2.1 b) | Trường tối thiểu: tên, IP tĩnh, MAC/serial, hạn hỗ trợ của hãng, vị trí địa lý và trong mạng, mục đích, tình trạng; gán người chịu trách nhiệm | | Danh mục có đủ trường, cột người phụ trách |  |
| 5.2.2.1 c) | Đăng ký thiết bị di động được phép kết nối; quy định trách nhiệm cá nhân khi dùng cho công việc | | Sổ đăng ký thiết bị di động, quy định sử dụng |  |
| 5.2.2.2 a) | Quy trình phát hiện, xử lý thiết bị lạ kết nối trái phép, thực hiện ≥ 1 lần/6 tháng | | Quy trình + kết quả các lần rà soát | **Mới/khác so với cấp 2** |
| 5.2.2.2 b) | Xử lý thiết bị trái phép bằng cách gỡ bỏ, từ chối kết nối hoặc cách ly | | Nhật ký xử lý |  |
| 5.2.2.3 | Có phương án xóa sạch dữ liệu khi chuyển giao hoặc đổi mục đích sử dụng phần cứng | | Quy trình xóa dữ liệu, biên bản xóa |  |
| 5.2.2.4 a) | Bật ghi log DHCP trên mọi máy chủ DHCP/công cụ quản lý IP (nếu có) | | Cấu hình log DHCP/IPAM | **Mới/khác so với cấp 2** |
| 5.2.2.4 b) | Rà soát log DHCP để cập nhật danh mục ≥ 1 lần/6 tháng | | Biên bản rà soát log DHCP | **Mới/khác so với cấp 2** |

## 5.3 Quản lý tài sản phần mềm

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.3.1 a) | Quản lý danh mục phần mềm; chỉ phần mềm đã phê duyệt mới được cài và dùng | | Danh mục phần mềm, quy trình phê duyệt |  |
| 5.3.1 b) | Kiểm kê, cập nhật danh mục phần mềm ≥ 1 lần/năm | | Biên bản kiểm kê phần mềm |  |
| 5.3.2.1 a) | Lập danh mục phần mềm đang cài trên các thiết bị thuộc HTTT | | Danh mục phần mềm (xuất từ công cụ inventory) |  |
| 5.3.2.1 b) | Trường tối thiểu: tên, mục đích, hạn hỗ trợ, phạm vi, chủ quản, bản quyền, phiên bản, hệ thống thành phần; gán trách nhiệm | | Danh mục có đủ trường |  |
| 5.3.2.2 a) | Lập danh sách phần mềm được phép sử dụng (whitelist) | | Danh sách phần mềm được phép | **Mới/khác so với cấp 2** |
| 5.3.2.2 b) | Whitelist gồm cả phần mềm do nhà cung cấp dịch vụ đưa vào và môi trường thực thi của ứng dụng | | Whitelist có mục runtime/phần mềm NCC | **Mới/khác so với cấp 2** |
| 5.3.2.2 c) | Kiểm soát cài đặt: đặc quyền tối thiểu, chặn cài/gỡ/thực thi trái phép, theo dõi hoạt động cài đặt | | Chính sách GPO/MDM/app control, log cài đặt | **Mới/khác so với cấp 2** |
| 5.3.2.2 d) | Rà soát whitelist ≥ 1 lần/năm hoặc khi tổ chức thay đổi | | Biên bản rà soát whitelist | **Mới/khác so với cấp 2** |
| 5.3.2.3 a) | Quy trình phát hiện, xử lý phần mềm trái phép ≥ 1 lần/năm | | Quy trình + kết quả rà soát |  |
| 5.3.2.3 b) | Phần mềm trái phép nhưng cần thiết đưa vào danh sách ngoại lệ, kèm biện pháp giảm thiểu | | Danh sách ngoại lệ có biện pháp kiểm soát |  |
| 5.3.2.3 c) | Lập kế hoạch gỡ sớm phần mềm trái phép ngoài danh sách ngoại lệ | | Kế hoạch gỡ bỏ, bằng chứng đã gỡ |  |

## 5.4 Quản lý tài sản thông tin

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.4.2.1 a) | Quy định quản lý tài sản thông tin: danh mục, mức nhạy cảm, chủ sở hữu, cách xử lý, thời hạn lưu, yêu cầu tiêu hủy | | Quy định quản lý tài sản thông tin |  |
| 5.4.2.1 b) | Phân loại mức nhạy cảm (gợi ý 4 mức: công khai, nội bộ, hạn chế, bí mật nhà nước) | | Bảng phân loại, nhãn dữ liệu | **Mới/khác so với cấp 2** |
| 5.4.2.1 c) | Quy trình yêu cầu truy cập, thêm, sửa, xóa dữ liệu | | Quy trình + phiếu yêu cầu |  |
| 5.4.2.1 d) | Kiểm tra phân quyền dữ liệu ≥ 1 lần/6 tháng | | Biên bản rà soát phân quyền | **Mới/khác so với cấp 2** |
| 5.4.2.1 e) | Rà soát quy trình quản lý tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản quy trình |  |
| 5.4.2.2 a) | Lập danh mục tài sản thông tin theo quy trình đã ban hành | | Danh mục tài sản thông tin |  |
| 5.4.2.2 b) | Cập nhật danh mục tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | | Ngày cập nhật danh mục |  |
| 5.4.2.3 | Ma trận quyền truy cập của từng tài khoản/người dùng với từng loại tài sản thông tin | | Ma trận phân quyền (ACL) |  |
| 5.4.2.4 a) | Mã hóa (hoặc tương đương) thông tin xác thực, dữ liệu nhạy cảm cao, dữ liệu quan trọng khi lưu | | Cấu hình mã hóa (DB/đĩa/hash mật khẩu) | **Mới/khác so với cấp 2** |
| 5.4.2.4 b) | Bảo vệ thông tin xác thực, dữ liệu quan trọng khi truyền (mã hóa hoặc tương đương) | | Cấu hình TLS/VPN, kết quả kiểm tra | **Mới/khác so với cấp 2** |
| 5.4.2.4 c) | Bảo vệ và quản lý vòng đời khóa mã hóa | | Quy trình quản lý khóa, KMS | **Mới/khác so với cấp 2** |
| 5.4.2.5 | Lưu dữ liệu quan trọng kèm mã kiểm tra toàn vẹn (checksum/hash/chữ ký) | | Thiết kế kiểm tra toàn vẹn | **Mới/khác so với cấp 2** |
| 5.4.2.6 a) | Tài liệu hóa các luồng dữ liệu quan trọng trong HTTT | | Sơ đồ luồng dữ liệu | **Mới/khác so với cấp 2** |
| 5.4.2.6 b) | Áp dụng quy định quản lý phiên bản tài liệu | | Quy định quản lý tài liệu | **Mới/khác so với cấp 2** |
| 5.4.2.6 c) | Cập nhật tài liệu luồng dữ liệu ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản | **Mới/khác so với cấp 2** |
| 5.4.2.7 a) | Có quy định về xử lý dữ liệu quan trọng | | Quy định xử lý dữ liệu | **Mới/khác so với cấp 2** |
| 5.4.2.7 b) | Tách môi trường xử lý/lưu dữ liệu nhạy cảm cao, quan trọng khỏi dữ liệu nhạy cảm thấp (logic/vật lý hoặc tương đương) | | Sơ đồ phân tách môi trường | **Mới/khác so với cấp 2** |
| 5.4.2.8 | Dùng chữ ký số khi trao đổi dữ liệu nhạy cảm cao, dữ liệu quan trọng | | Quy định + mẫu văn bản đã ký số | **Mới/khác so với cấp 2** |

## 5.5 Cấu hình an toàn phần cứng, phần mềm

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.5.2.1 a) | Ban hành quy định/quy trình cấu hình an toàn cho phần cứng và phần mềm | | Quy trình cấu hình an toàn |  |
| 5.5.2.1 b) | Có tài liệu cấu hình chuẩn/hardening; giao thức an toàn; tường lửa host; chống tự động đăng nhập trên tài sản xử lý dữ liệu quan trọng | | Baseline cấu hình (vd theo CIS), ảnh chụp cấu hình |  |
| 5.5.2.1 c) | Tắt giao thức mạng không an toàn và dịch vụ không dùng | | Kết quả quét cổng/dịch vụ |  |
| 5.5.2.1 d) | Hardening thiết bị trước khi đưa vào vận hành | | Checklist hardening trước go-live | **Mới/khác so với cấp 2** |
| 5.5.2.1 e) | Rà soát quy định và tài liệu cấu hình ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 5.5.2.2 a) | Tự khóa phiên theo đánh giá rủi ro — gợi ý: máy người dùng ≤ 15'; phiên quản trị, di động ≤ 5'; phần mềm nghiệp vụ dữ liệu quan trọng ≤ 15' | | GPO/MDM/cấu hình timeout |  |
| 5.5.2.2 a) | Khóa khi đăng nhập sai — gợi ý: laptop, điện thoại ≤ 10 lần; phần mềm nghiệp vụ dữ liệu quan trọng ≤ 5 lần; khóa 12 giờ–30 ngày | | Cấu hình lockout |  |
| 5.5.2.2 b) | Có cơ chế mở khóa khẩn cấp cho quản trị viên/tài khoản đặc quyền | | Quy trình break-glass |  |

## 5.6 Quản lý tài khoản và quyền truy cập

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.6.1 a) | Quy trình, công cụ cấp/thu hồi quyền cho 4 loại tài khoản (quản trị, tác nghiệp, kỹ thuật, dịch vụ) theo vai trò | | Quy trình quản lý tài khoản |  |
| 5.6.1 c) | Ghi log và giám sát hoạt động của tài khoản người dùng | | Cấu hình audit log đăng nhập |  |
| 5.6.2.1 a) | Danh sách mọi tài khoản trên phần cứng và phần mềm | | Danh sách tài khoản |  |
| 5.6.2.1 b) | Danh sách gồm tối thiểu: tài khoản quản trị, tác nghiệp, kỹ thuật | | Danh sách tài khoản phân loại |  |
| 5.6.2.1 c) | Trường tối thiểu: loại, tên, trạng thái, hệ thống, người quản lý, phòng ban, ngày kích hoạt/vô hiệu; không còn tài khoản không hợp lệ | | Danh sách có đủ trường |  |
| 5.6.2.1 d) | Rà soát danh sách tài khoản ≥ 1 lần/6 tháng | | Biên bản rà soát | **Mới/khác so với cấp 2** |
| 5.6.2.2 a) | Cấu hình bắt đổi mật khẩu mặc định; quy tắc độ dài, loại ký tự; thời hạn đổi và thời hạn hiệu lực mật khẩu | | Chính sách mật khẩu (GPO/IdP) |  |
| 5.6.2.2 b) | Gợi ý: mật khẩu riêng cho từng tài sản hoặc xác thực tập trung; bắt đổi ở lần đăng nhập đầu | | Cấu hình IdP/SSO |  |
| 5.6.2.2 b) | Gợi ý độ dài: ≥ 8 ký tự nếu có MFA; ≥ 14 ký tự gồm đủ 4 loại ký tự nếu không có MFA | | Chính sách mật khẩu |  |
| 5.6.2.2 b) | Tài khoản quản trị: bật MFA, đổi mật khẩu 2 tháng/lần, không dùng lại 10 mật khẩu gần nhất | | Cấu hình MFA/lịch sử mật khẩu | **Mới/khác so với cấp 2** |
| 5.6.2.3 | Quản lý tài khoản tập trung | | Hồ sơ IdP/AD/LDAP | **Mới/khác so với cấp 2** |
| 5.6.2.3 | Đổi hoặc vô hiệu hóa tài khoản mặc định (root, administrator, tài khoản cài sẵn của hãng) | | Danh sách tài khoản mặc định đã xử lý |  |
| 5.6.2.3 | Tách biệt quản lý 4 loại tài khoản | | Quy định + danh sách phân loại |  |
| 5.6.2.3 | Mỗi tài khoản gắn một người; dùng chung phải được phê duyệt và truy vết được người dùng từng thời điểm | | Phê duyệt tài khoản dùng chung, sổ theo dõi |  |
| 5.6.2.3 | Xóa/vô hiệu hóa tài khoản không hoạt động quá 45 ngày hoặc ngay khi đổi nhân sự | | Báo cáo tài khoản inactive |  |
| 5.6.2.3 | Rà soát quy định quản lý tài khoản ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 5.6.2.4 | Áp dụng đặc quyền tối thiểu và phân tách nhiệm vụ cho mọi loại tài khoản | | Ma trận vai trò – quyền |  |
| 5.6.2.4 | Tài liệu hóa quyền cần thiết theo chức danh, bộ phận | | Ma trận quyền theo chức danh |  |
| 5.6.2.4 | MFA cho truy cập từ ngoài tổ chức, từ đối tác/bên thứ ba, từ Internet và cho tài khoản quản trị | | Cấu hình MFA |  |
| 5.6.2.4 | Rà soát quy định quản lý truy cập ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |

## 5.7 Quản lý lỗ hổng bảo mật

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.7.1 b) | Theo dõi thông tin mối đe dọa, lỗ hổng mới từ nhiều nguồn | | Nguồn tin đăng ký (NCSC, CVE, hãng…) |  |
| 5.7.2.1 a) | Quy trình quản lý lỗ hổng: rà quét phát hiện, chấm mức nghiêm trọng, chia sẻ/tiếp nhận báo cáo, khắc phục theo ưu tiên và kiểm tra lại | | Quy trình quản lý lỗ hổng |  |
| 5.7.2.1 b) | Rà soát quy trình và thực hiện rà quét lỗ hổng ≥ 1 lần/6 tháng hoặc khi thay đổi | | Báo cáo rà quét, biên bản rà soát | **Mới/khác so với cấp 2** |
| 5.7.2.2 | Có máy chủ quản lý bản vá tập trung cho toàn bộ tài sản | | Hồ sơ WSUS/SCCM/tương đương | **Mới/khác so với cấp 2** |
| 5.7.2.2 | Trước khi vá hệ thống có dữ liệu quan trọng: đánh giá tác động, thử nghiệm, có phương án khôi phục | | Biên bản thử nghiệm bản vá |  |
| 5.7.2.2 | Kiểm tra, cập nhật bản vá HĐH và ứng dụng cho máy tính, di động cấp cho người dùng ≥ 1 lần/tháng | | Báo cáo tuân thủ bản vá hằng tháng |  |
| 5.7.2.2 | Giám sát để phát hiện lỗ hổng mới và vá kịp thời | | Nhật ký vá |  |

## 5.8 Quản lý nhật ký an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.8.2.1 a) | Quy định quản lý log: cách ghi, thu thập, kiểm tra, lưu trữ | | Quy định quản lý nhật ký |  |
| 5.8.2.1 a) | Thu thập tối thiểu: log truy cập hệ thống, log tiến trình, log ứng dụng, log cảnh báo | | Danh sách nguồn log | **Mới/khác so với cấp 2** |
| 5.8.2.1 a) | Log truy cập có nguồn/đích (kèm MAC), tài khoản, thời điểm, hành vi; log cảnh báo đủ trường tối thiểu | | Mẫu bản ghi log | **Mới/khác so với cấp 2** |
| 5.8.2.1 a) | Log tiến trình có: thiết bị, tên/mã/tiến trình cha/lệnh khởi tạo, tài khoản, thời điểm | | Mẫu log tiến trình (vd Sysmon/auditd) | **Mới/khác so với cấp 2** |
| 5.8.2.1 a) | Đồng bộ thời gian qua máy chủ thời gian (NTP) cho mọi thành phần tham gia giám sát | | Cấu hình NTP |  |
| 5.8.2.1 a) | SIEM (hoặc tương đương) để quản lý, phân tích sự kiện tập trung | | Hồ sơ SIEM | **Mới/khác so với cấp 2** |
| 5.8.2.1 a) | Lưu trữ, quản lý tập trung log từ các thiết bị | | Kiến trúc thu thập log | **Mới/khác so với cấp 2** |
| 5.8.2.1 a) | Bảo đảm dung lượng lưu log tối thiểu 3 tháng; có cảnh báo sắp đầy dung lượng | | Cấu hình retention, ảnh chụp dung lượng | **Mới/khác so với cấp 2** |
| 5.8.2.1 a) | Rà soát log ANM ≥ 1 lần/6 tháng | | Biên bản rà soát log | **Mới/khác so với cấp 2** |
| 5.8.2.1 b) | Kiểm tra, cập nhật quy trình quản lý log ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |

## 5.9 Bảo vệ trình duyệt web, thư điện tử

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.9.2.1 a) | Danh sách trình duyệt và dịch vụ email được phép | | Danh sách được phép |  |
| 5.9.2.1 b) | Chỉ dùng phiên bản còn được hãng hỗ trợ | | Báo cáo phiên bản |  |
| 5.9.2.1 c) | Có giải pháp bảo vệ an ninh cho hệ thống email (hoặc tương đương) | | Hồ sơ email security gateway | **Mới/khác so với cấp 2** |
| 5.9.2.1 d) | Cập nhật bản vá trình duyệt, email thường xuyên (hoặc biện pháp tương đương) | | Báo cáo bản vá |  |
| 5.9.2.2 | Dùng dịch vụ lọc tên miền (DNS filtering) chặn tên miền giả mạo, độc hại | | Cấu hình DNS filtering |  |

## 5.10 Phòng chống phần mềm độc hại

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.10.1 a) | Quy định phòng, chống, khắc phục mã độc | | Quy định phòng chống mã độc |  |
| 5.10.1 b) | Chống mã độc cho mọi tài sản và điểm kết nối (trong và ngoài); tự quét, chặn, cập nhật mẫu, gắn với quy trình lỗ hổng/sự cố | | Kiến trúc giải pháp |  |
| 5.10.2.1 a) | Cài và duy trì phần mềm chống mã độc (hoặc tương đương) trên máy chủ, máy người dùng | | Báo cáo độ phủ agent |  |
| 5.10.2.1 b) | Tính năng tối thiểu: bảo vệ thời gian thực, tự cập nhật mẫu nhận diện | | Cấu hình sản phẩm |  |
| 5.10.2.2 | Quét mã độc và tắt autorun/autoplay với USB, ổ cứng, thẻ nhớ | | GPO tắt autorun, chính sách quét |  |
| 5.10.2.3 | Bật tính năng chống khai thác lỗ hổng (exploit protection) nếu có | | Cấu hình | **Mới/khác so với cấp 2** |
| 5.10.2.4 a) | Triển khai EDR (hoặc tương đương) phát hiện theo hành vi trên máy chủ, máy người dùng | | Hồ sơ EDR, độ phủ | **Mới/khác so với cấp 2** |
| 5.10.2.4 b) | Kết nối EDR về SIEM để giám sát, cảnh báo thời gian thực | | Cấu hình tích hợp | **Mới/khác so với cấp 2** |

## 5.11 Sao lưu và khôi phục dữ liệu

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.11.2.1 a) | Quy định sao lưu/khôi phục: loại dữ liệu (cấu hình, bản dự phòng HĐH máy chủ, CSDL, dữ liệu nghiệp vụ), tần suất, phương pháp, vùng lưu, khôi phục thử định kỳ | | Quy định sao lưu |  |
| 5.11.2.1 b) | Giải pháp lưu trữ/sao lưu tập trung bảo đảm sẵn sàng, khôi phục được khi một thành phần hỏng | | Kiến trúc sao lưu | **Mới/khác so với cấp 2** |
| 5.11.2.1 c) | Rà soát quy định sao lưu ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 5.11.2.2 a) | Danh sách dữ liệu cần sao lưu và tần suất theo ngày/tuần/tháng… | | Bảng lịch sao lưu |  |
| 5.11.2.2 b) | Sao lưu tự động (giải pháp hoặc tương đương) | | Cấu hình job sao lưu | **Mới/khác so với cấp 2** |
| 5.11.2.3 a) | Áp dụng quy tắc 3-2-1 (hoặc tương đương) cho bản sao lưu | | Sơ đồ 3-2-1 | **Mới/khác so với cấp 2** |
| 5.11.2.3 b) | Mã hóa bản sao lưu dữ liệu quan trọng | | Cấu hình mã hóa backup | **Mới/khác so với cấp 2** |
| 5.11.2.4 | Định danh, quản lý phiên bản bản sao lưu; lưu trên hạ tầng tách biệt môi trường vận hành | | Sơ đồ hạ tầng backup |  |

## 5.12 Quản lý hạ tầng mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.12.2.1 a) | Lập, duy trì sơ đồ kiến trúc mạng và hồ sơ mạng | | Sơ đồ mạng; biên bản thẩm tra thiết kế (cấp 4–5) |  |
| 5.12.2.1 b) | Kiến trúc mạng an toàn theo 3 nguyên tắc: phân vùng, đặc quyền tối thiểu, sẵn sàng | | Tài liệu kiến trúc |  |
| 5.12.2.1 c) | Hồ sơ mạng gồm: tổng quan kiến trúc, sơ đồ chi tiết, tài liệu kỹ thuật, mô tả phương án ANM | | Bộ hồ sơ mạng |  |
| 5.12.2.1 d) | Khi đổi thiết kế, đánh giá lại sự phù hợp với yêu cầu an toàn | | Biên bản đánh giá thay đổi |  |
| 5.12.2.1 e) | Cập nhật sơ đồ mạng 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản sơ đồ |  |
| 5.12.2.2 a) | Cân bằng tải và dự phòng nóng cho thiết bị mạng chính | | Sơ đồ HA, hợp đồng kênh truyền | **Mới/khác so với cấp 2** |
| 5.12.2.2 a) | Có phương án chống thất thoát dữ liệu (DLP) | | Hồ sơ DLP | **Mới/khác so với cấp 2** |
| 5.12.2.2 a) | Bảo đảm an toàn mạng không dây (nếu có) | | Cấu hình WPA2/3-Enterprise, tách SSID | **Mới/khác so với cấp 2** |
| 5.12.2.2 a) | Dự phòng kết nối mạng cho máy chủ cung cấp dịch vụ | | Sơ đồ kết nối kép | **Mới/khác so với cấp 2** |
| 5.12.2.2 a) | Tường lửa có IPS (hoặc tương đương) kiểm soát truy cập, chống xâm nhập giữa các vùng mạng | | Cấu hình NGFW/IPS |  |
| 5.12.2.2 a) | Tường lửa có chống mã độc trên đường mạng (hoặc tương đương) | | Cấu hình AV gateway | **Mới/khác so với cấp 2** |
| 5.12.2.2 a) | Tường lửa CSDL (DBF) hoặc tương đương cho CSDL tập trung | | Hồ sơ DBF | **Mới/khác so với cấp 2** |
| 5.12.2.2 a) | NAC (hoặc tương đương) kiểm soát thiết bị đầu cuối kết nối vào mạng | | Hồ sơ NAC/802.1X | **Mới/khác so với cấp 2** |
| 5.12.2.2 a) | Giám sát HTTT tập trung (tài nguyên, trạng thái) | | Hồ sơ NMS | **Mới/khác so với cấp 2** |
| 5.12.2.2 a) | WAF (hoặc tương đương) cho ứng dụng web (nếu có) | | Cấu hình WAF |  |
| 5.12.2.2 a) | Chống tấn công từ chối dịch vụ (dịch vụ, sản phẩm hoặc tương đương) | | Hợp đồng/cấu hình anti-DDoS | **Mới/khác so với cấp 2** |
| 5.12.2.2 a) | Cập nhật định kỳ CSDL nhận diện tấn công cho các giải pháp ANM | | Nhật ký cập nhật signature |  |
| 5.12.2.2 a) | Quản lý thay đổi | | Phiếu thay đổi (change request) |  |
| 5.12.2.2 a) | Theo dõi hiệu năng (CPU, RAM…) để bảo đảm hoạt động bình thường | | Dashboard giám sát |  |
| 5.12.2.2 b) | Phân vùng tối thiểu: nội bộ, biên, máy chủ nội bộ, DMZ, máy chủ CSDL, không dây (nếu có), quản trị | | Sơ đồ phân vùng, ACL giữa vùng | **Mới/khác so với cấp 2** |
| 5.12.2.3 a) | Lập kế hoạch và quy trình kiểm thử, nghiệm thu (nêu rõ nội dung cần thử) | | Kế hoạch thử nghiệm |  |
| 5.12.2.3 b) | Kiểm thử hệ thống trước khi đưa vào vận hành | | Báo cáo kiểm thử |  |
| 5.12.2.3 c) | Có bộ phận phụ trách thử nghiệm, nghiệm thu | | Quyết định phân công | **Mới/khác so với cấp 2** |
| 5.12.2.3 d) | Đơn vị/bộ phận độc lập tư vấn, giám sát quá trình thử nghiệm, nghiệm thu | | Hợp đồng/quyết định giám sát độc lập | **Mới/khác so với cấp 2** |
| 5.12.2.3 e) | Biên bản nghiệm thu được bộ phận chuyên trách xác nhận, chủ quản phê duyệt rồi mới đưa vào dùng | | Báo cáo nghiệm thu đã phê duyệt | **Mới/khác so với cấp 2** |
| 5.12.2.4 a) | Chỉ cho phép kết nối an toàn khi truy cập nội bộ hoặc quản trị từ xa | | Cấu hình SSH/TLS, tắt Telnet/HTTP | **Mới/khác so với cấp 2** |
| 5.12.2.4 b) | Thiết bị phải yêu cầu đăng nhập khi quản trị tại chỗ cũng như từ xa | | Cấu hình xác thực thiết bị | **Mới/khác so với cấp 2** |
| 5.12.2.4 c) | Đặt timeout tự đóng phiên kết nối không hoạt động | | Cấu hình timeout |  |
| 5.12.2.4 d) | Kiểm soát truy cập cả chiều vào và chiều ra theo từng dịch vụ; chặn mọi truy cập không được phép | | Rule firewall | **Mới/khác so với cấp 2** |
| 5.12.2.4 e) | Giới hạn số kết nối đồng thời theo nguồn và theo dịch vụ (linh hoạt nếu có biện pháp tương đương) | | Cấu hình rate/conn limit | **Mới/khác so với cấp 2** |
| 5.12.2.4 f) | Kiểm soát truy cập của người dùng vào dịch vụ, máy chủ nội bộ theo chính sách | | Chính sách truy cập | **Mới/khác so với cấp 2** |
| 5.12.2.5 | Truy cập từ xa của quản trị viên, người dùng tác nghiệp qua VPN (hoặc tương đương) có xác thực | | Cấu hình VPN/ZTNA |  |
| 5.12.2.5 | Xác thực khi kết nối từ xa và xác thực bổ sung trước khi vào hệ thống | | Cấu hình MFA VPN |  |
| 5.12.2.5 | Giới hạn dải địa chỉ/thiết bị được phép quản trị từ xa (nếu hỗ trợ) | | ACL quản trị | **Mới/khác so với cấp 2** |

## 5.13 Giám sát và phòng thủ an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.13.2.1 a) | Giám sát ANM tối thiểu với thiết bị hệ thống, máy chủ, ứng dụng, dịch vụ | | Danh sách đối tượng giám sát | **Mới/khác so với cấp 2** |
| 5.13.2.1 b) | SIEM tương quan sự kiện, phân tích theo hướng dẫn của cơ quan có thẩm quyền | | Use case/rule SIEM | **Mới/khác so với cấp 2** |
| 5.13.2.2 | Bật tường lửa, phát hiện/ngăn chặn xâm nhập của HĐH và hệ thống (nếu có) | | Cấu hình host firewall/HIPS | **Mới/khác so với cấp 2** |
| 5.13.2.3 a) | Kiểm soát truy cập cổng kết nối trên thiết bị mạng (nếu hỗ trợ) | | Cấu hình port security | **Mới/khác so với cấp 2** |
| 5.13.2.3 b) | Tách cổng quản trị ứng dụng khỏi cổng cung cấp dịch vụ | | Cấu hình cổng | **Mới/khác so với cấp 2** |
| 5.13.2.4 | Thu thập flow/lưu lượng mạng để rà soát, cảnh báo | | Cấu hình NetFlow/NDR | **Mới/khác so với cấp 2** |
| 5.13.2.5 | Tinh chỉnh ngưỡng cảnh báo ≥ 1 lần/6 tháng | | Nhật ký tinh chỉnh rule | **Mới/khác so với cấp 2** |

## 5.14 Nhân sự vận hành, quản trị, bảo vệ an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.14.2.1 a) | Thành lập bộ phận riêng cho vận hành, quản trị hệ thống và bảo vệ ANM | | Quyết định thành lập, sơ đồ tổ chức | **Mới/khác so với cấp 2** |
| 5.14.2.1 b) | Các bộ phận vận hành, quản trị, bảo vệ ANM độc lập về chuyên môn | | Quy chế phân định nhiệm vụ |  |
| 5.14.2.1 c) | Nhân sự có trình độ ANM/CNTT; ký cam kết bảo mật trong và sau khi nghỉ việc | | Hồ sơ năng lực, cam kết bảo mật |  |
| 5.14.2.2 a) | Chương trình nâng cao nhận thức ANM cho mọi người dùng HTTT | | Tài liệu, danh sách tham dự |  |
| 5.14.2.2 b) | Thu hồi thẻ, dữ liệu, thiết bị, tài sản khi nghỉ hoặc chuyển việc | | Biên bản bàn giao |  |
| 5.14.2.2 c) | Quy trình vô hiệu hóa mọi quyền ra vào, truy cập, quản trị khi thôi việc | | Quy trình offboarding, log vô hiệu |  |
| 5.14.2.2 d) | Đào tạo nhận thức ≥ 1 lần/năm | | Danh sách, bài kiểm tra |  |

## 5.15 Quản lý nhà cung cấp sản phẩm, dịch vụ

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.15.1 | Quy trình đánh giá nhà cung cấp dịch vụ ANM, lưu trữ/xử lý dữ liệu nhạy cảm, nền tảng quan trọng | | Quy trình đánh giá NCC |  |
| 5.15.2 | Danh sách nhà cung cấp, theo dõi trạng thái | | Danh sách NCC |  |
| 5.15.2 | Phân loại nhà cung cấp | | Tiêu chí phân loại |  |
| 5.15.2 | Văn bản phân định phạm vi trách nhiệm giữa nhà cung cấp và tổ chức | | Hợp đồng/SLA/ma trận RACI |  |
| 5.15.2 | Cập nhật danh sách nhà cung cấp ≥ 1 lần/năm hoặc khi thay đổi | | Ngày cập nhật |  |

## 5.16 Quản trị ứng phó sự cố an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.16.1 | Chính sách/quy trình sự cố gồm: phân nhóm; tiếp nhận–xử lý ban đầu; kế hoạch ứng phó; giám sát; quy trình thường/nghiêm trọng; phối hợp; diễn tập định kỳ | | Kế hoạch ứng phó sự cố | **Mới/khác so với cấp 2** |
| 5.16.2.1 a) | Chỉ định người chủ chốt và ít nhất một người dự phòng quản lý ứng phó sự cố | | Quyết định phân công |  |
| 5.16.2.1 b) | Đầu mối phối hợp với cơ quan quản lý nhà nước về ANM và cơ quan điều hành Liên minh ứng phó sự cố quốc gia | | Danh bạ đầu mối, văn bản đăng ký |  |
| 5.16.2.1 c) | Đầu mối tiếp nhận báo cáo sự cố; xác minh thông tin liên hệ hằng năm | | Danh bạ có ngày xác minh |  |
| 5.16.2.1 d) | Phân công vai trò, trách nhiệm từng thành viên đội ứng phó | | Bảng RACI đội ứng phó |  |
| 5.16.2.1 e) | Quy định trách nhiệm phối hợp của các phòng ban với đội ứng phó | | Quy chế phối hợp |  |
| 5.16.2.2 a) | Quy trình báo cáo sự cố nội bộ | | Quy trình, mẫu báo cáo |  |
| 5.16.2.2 b) | Phân nhóm sự cố ANM | | Bảng phân loại sự cố |  |
| 5.16.2.2 c) | Cập nhật quy trình báo cáo ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 5.16.2.3 a) | Quy trình ứng phó có cơ chế phối hợp với cơ quan chức năng, chuyên gia, nhà cung cấp dịch vụ | | Quy trình ứng phó |  |
| 5.16.2.3 b) | Cập nhật quy trình ứng phó ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |

## 5.17 Phát triển ứng dụng an toàn

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.17.2.1 a) | Quy trình phát triển ứng dụng an toàn (SDLC) | | Quy trình SSDLC | **Mới/khác so với cấp 2** |
| 5.17.2.1 b) | Cập nhật quy trình ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản | **Mới/khác so với cấp 2** |
| 5.17.2.1 c) | Thuê khoán: hợp đồng, cam kết bảo mật với bên phát triển | | Hợp đồng, NDA | **Mới/khác so với cấp 2** |
| 5.17.2.1 c) | Thuê khoán: nhận mã nguồn; nếu không có thì chứng chỉ đánh giá độc lập hoặc pentest/giám sát thay thế + cam kết pháp lý | | Biên bản bàn giao/cam kết | **Mới/khác so với cấp 2** |
| 5.17.2.2 a) | Quy trình tiếp nhận, xử lý báo cáo lỗ hổng phần mềm, có kênh cho bên ngoài báo cáo | | Trang/địa chỉ tiếp nhận (security.txt) | **Mới/khác so với cấp 2** |
| 5.17.2.2 b) | Cập nhật quy trình ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản | **Mới/khác so với cấp 2** |
| 5.17.2.3 | Thiết kế: kiểm tra dữ liệu vào/ra, chống tấn công phổ biến, kiểm soát thông báo lỗi | | Tài liệu thiết kế, checklist review | **Mới/khác so với cấp 2** |
| 5.17.2.3 | Không lưu thông tin xác thực, bí mật trong mã nguồn | | Kết quả quét secret | **Mới/khác so với cấp 2** |
| 5.17.2.4 | Kiểm tra, khắc phục lỗ hổng ứng dụng, mã nguồn, thư viện bên thứ ba trước khi vận hành chính thức | | Báo cáo SAST/SCA/DAST | **Mới/khác so với cấp 2** |

## 5.18 Quản lý kiểm tra an ninh mạng (kiểm thử xâm nhập)

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 5.18.2.1 a) | Chương trình kiểm thử xâm nhập phù hợp quy mô, độ phức tạp của tổ chức | | Chương trình pentest | **Mới/khác so với cấp 2** |
| 5.18.2.1 b) | Mỗi đợt được phê duyệt phạm vi, thời gian, phương pháp, đầu mối, xử lý dữ liệu; tránh gián đoạn dịch vụ | | Phê duyệt kế hoạch pentest (RoE) | **Mới/khác so với cấp 2** |
| 5.18.2.1 b) | Chương trình xác định phạm vi, tần suất (quý/nửa năm/năm/đột xuất), hành vi bị cấm, cách tổ chức phản ứng | | Chương trình pentest | **Mới/khác so với cấp 2** |
| 5.18.2.2 | Khắc phục phát hiện từ pentest theo chính sách ưu tiên | | Kế hoạch khắc phục, retest | **Mới/khác so với cấp 2** |
| 5.18.2.3 | Đánh giá lại hiệu quả biện pháp bảo mật sau mỗi đợt pentest | | Báo cáo đánh giá | **Mới/khác so với cấp 2** |

## Tổng hợp kết quả

| Nhóm | Tên nhóm | Số dòng | Đạt | Một phần | Chưa | N/A |
|---|---|---|---|---|---|---|
| 5.1 | Quản lý rủi ro an ninh mạng | 11 | | | | |
| 5.2 | Quản lý tài sản phần cứng | 11 | | | | |
| 5.3 | Quản lý tài sản phần mềm | 11 | | | | |
| 5.4 | Quản lý tài sản thông tin | 18 | | | | |
| 5.5 | Cấu hình an toàn phần cứng, phần mềm | 8 | | | | |
| 5.6 | Quản lý tài khoản và quyền truy cập | 20 | | | | |
| 5.7 | Quản lý lỗ hổng bảo mật | 7 | | | | |
| 5.8 | Quản lý nhật ký an ninh mạng | 10 | | | | |
| 5.9 | Bảo vệ trình duyệt web, thư điện tử | 5 | | | | |
| 5.10 | Phòng chống phần mềm độc hại | 8 | | | | |
| 5.11 | Sao lưu và khôi phục dữ liệu | 8 | | | | |
| 5.12 | Quản lý hạ tầng mạng | 34 | | | | |
| 5.13 | Giám sát và phòng thủ an ninh mạng | 7 | | | | |
| 5.14 | Nhân sự vận hành, quản trị, bảo vệ an ninh mạng | 7 | | | | |
| 5.15 | Quản lý nhà cung cấp sản phẩm, dịch vụ | 5 | | | | |
| 5.16 | Quản trị ứng phó sự cố an ninh mạng | 11 | | | | |
| 5.17 | Phát triển ứng dụng an toàn | 9 | | | | |
| 5.18 | Quản lý kiểm tra an ninh mạng (kiểm thử xâm nhập) | 5 | | | | |
| | **Tổng** | **195** | | | | |

## Bước tiếp theo

- Mỗi dòng `Chưa`/`Một phần` → đưa vào kế hoạch khắc phục có người phụ trách và hạn hoàn thành; hệ thống xây mới/nâng cấp phải triển khai đủ phương án đã phê duyệt **trước khi vận hành** (NĐ 331 Đ30.6) và qua đánh giá điều kiện ANM (NĐ 331 Đ28.3).
- Lưu checklist đã điền cùng bằng chứng làm hồ sơ phục vụ kiểm tra, đánh giá (NĐ 331 Đ28.5, Đ27).
