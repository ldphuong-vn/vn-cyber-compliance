# Checklist tự đánh giá — HTTT cấp độ 4

> **Căn cứ:** TCVN 14423:2026 mục 6; NĐ 331/2026/NĐ-CP Đ28.4, Đ29.1, Đ30.1 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

> **Bản quyền:** Tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI). Cột "Yêu cầu" là diễn giải ngắn bằng lời của người soạn, không phải nguyên văn tiêu chuẩn.

Cấp độ 4 gồm **18 nhóm** (mục 6.1–6.18); **lưu ý thứ tự nhóm đổi**: 6.16 là Phát triển ứng dụng an toàn, 6.17 là Ứng phó sự cố. Bổ sung đáng kể: giám sát 24/7, PAM, DLP, mã hóa 2 lớp khi truyền, log bất biến lưu ≥ 6 tháng, pentest ngoài và trong ≥ 1 lần/năm, phân đoạn vi mô, ZTNA/MFA cho truy cập từ xa, 2 hướng Internet quốc tế.

> **Vì sao không ghi "kế thừa cấp 3"?** Đối chiếu văn bản cho thấy cấp 4 **không** là tập cha thuần túy của cấp 3: một số ý của cấp 3 được viết lại hoặc dời chỗ (vd yêu cầu xóa dữ liệu khi chuyển giao ở 5.2.2.3 chuyển thành 6.2.2.5; DLP chuyển từ hạ tầng mạng 5.12.2.2 sang 6.4.2.8), và có ý không còn xuất hiện ở cấp 4 (đầu mối với cơ quan quản lý nhà nước/Liên minh ứng phó sự cố ở 5.16.2.1 b không có trong 6.17.2.1). Vì vậy checklist này liệt kê **đầy đủ** — không cần mở checklist cấp 3.

## Cách dùng

1. Điền `{{TEN_HE_THONG}}`, `{{TEN_TO_CHUC}}`, người đánh giá, ngày `{{NGAY}}` ở bảng dưới.
2. Cột **Kết quả** ghi một trong: `Đạt` · `Một phần` · `Chưa` · `N/A`. Mọi `N/A` phải có lý do ở cột Ghi chú (vd "không có mạng không dây") và được nêu trong phương án bảo đảm ANM của hồ sơ đề xuất cấp độ (NĐ 331 Đ22.6, Đ29).
3. Nhiều dòng TCVN cho phép "phương án tương đương" — nếu dùng, mô tả biện pháp thay thế ở cột Ghi chú và lưu lập luận trong hồ sơ.
4. Các chỉ số ghi "gợi ý" (thời gian khóa phiên, độ dài mật khẩu…) là cấu hình mẫu TCVN nêu kèm "dựa trên đánh giá rủi ro"; nên áp dụng, nếu chọn khác phải có lập luận.
5. Chu kỳ, thời hạn tổng hợp tại [ma trận yêu cầu theo cấp độ](ma-tran-yeu-cau-theo-cap-do.md#2-các-ngưỡng-định-lượng-theo-cấp); ánh xạ sang NĐ 331 tại [anh-xa-nd331-d30-tcvn.md](anh-xa-nd331-d30-tcvn.md). An ninh vật lý (không thuộc yêu cầu cơ bản của NĐ 331 — Đ30.2) xem [an-ninh-vat-ly-phu-luc-a.md](an-ninh-vat-ly-phu-luc-a.md) mục A.4.

> Cột Ghi chú đã điền sẵn **Mới/khác so với cấp 3** cho dòng mới xuất hiện hoặc thay đổi mức yêu cầu (đối chiếu theo nội dung, không theo số mục).


| Thông tin | Giá trị |
|---|---|
| Hệ thống | `{{TEN_HE_THONG}}` |
| Chủ quản | `{{TEN_TO_CHUC}}` |
| Cấp độ đề xuất/được phê duyệt | 4 |
| Người đánh giá | `{{NGUOI_DANH_GIA}}` |
| Ngày đánh giá | `{{NGAY}}` |

## 6.1 Quản lý rủi ro an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.1.2.1 a) | Ban hành quy định/quy trình quản lý rủi ro đủ 4 bước: nhận diện, phân tích, đánh giá, xử lý | | Quy trình QLRR đã ký ban hành |  |
| 6.1.2.1 b) | Rà soát quy trình QLRR và tài liệu kèm theo ≥ 1 lần/năm hoặc khi tổ chức thay đổi | | Biên bản rà soát, lịch sử phiên bản |  |
| 6.1.2.2 a) | Nhận diện rủi ro dựa trên tài sản, lỗ hổng, hạ tầng mạng, nhận thức, tài khoản–quyền… | | Sổ đăng ký rủi ro (risk register) |  |
| 6.1.2.2 b) | Nhận diện riêng rủi ro đến từ bên thứ ba, nhà cung cấp | | Mục rủi ro bên thứ ba trong risk register |  |
| 6.1.2.2 c) | Lặp lại nhận diện rủi ro ≥ 1 lần/6 tháng hoặc khi hệ thống thay đổi, có lỗ hổng/sự kiện mới | | Risk register có ngày cập nhật | **Mới/khác so với cấp 3** |
| 6.1.2.3 a) | Phân tích mức tác động để quyết định chấp nhận hay giảm thiểu từng rủi ro | | Bảng đánh giá rủi ro, quyết định xử lý |  |
| 6.1.2.3 b) | Đánh giá ngay sau khi nhận diện; đánh giá lại khi hệ thống, tổ chức thay đổi hoặc có sự kiện ANM | | Lịch sử đánh giá lại |  |
| 6.1.2.4 a) | Triển khai biện pháp xử lý và lập phương án ứng phó cho rủi ro tồn dư | | Kế hoạch xử lý rủi ro, phương án rủi ro tồn dư |  |
| 6.1.2.4 b) | Đánh giá, cải thiện hiệu quả biện pháp kiểm soát ≥ 1 lần/6 tháng | | Báo cáo đánh giá hiệu quả kiểm soát | **Mới/khác so với cấp 3** |
| 6.1.2.5 | Theo dõi biến động rủi ro: khả năng xảy ra, tác động, mức rủi ro, tài sản liên quan, biện pháp đã áp dụng | | Các cột tương ứng trong risk register |  |
| 6.1.2.6 a) | Gửi kết quả đánh giá rủi ro tới những bên có liên quan | | Email/biên bản chia sẻ kết quả | **Mới/khác so với cấp 3** |
| 6.1.2.6 b) | Thông báo kịp thời cho bên liên quan khi rủi ro có thay đổi quan trọng | | Thông báo, kênh truyền thông rủi ro |  |

## 6.2 Quản lý tài sản phần cứng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.2.1 a) | Danh mục toàn bộ phần cứng của HTTT, kể cả thiết bị bên ngoài có kết nối vào; xác định tài sản cần giám sát | | Danh mục tài sản phần cứng |  |
| 6.2.1 b) | Phát hiện tài sản vô chủ/trái phép để loại bỏ hoặc đưa vào quản lý | | Báo cáo rà soát tài sản |  |
| 6.2.1 c) | Kiểm kê, cập nhật danh mục tài sản ≥ 1 lần/năm | | Biên bản kiểm kê |  |
| 6.2.2.1 a) | Danh mục phủ mọi thiết bị lưu trữ/xử lý dữ liệu: đầu cuối, di động, lưu trữ ngoài, văn phòng, mạng, OT/IoT, máy chủ vật lý/ảo/cloud | | Danh mục tài sản (CMDB/bảng tính) |  |
| 6.2.2.1 b) | Kiểm tra an ninh tài sản vật lý trước khi đưa vào sử dụng (theo điều kiện thực tế) | | Phiếu kiểm tra thiết bị trước khi sử dụng | **Mới/khác so với cấp 3** |
| 6.2.2.1 c) | Trường tối thiểu: tên, IP tĩnh, MAC/serial, hạn hỗ trợ của hãng, vị trí địa lý và trong mạng, mục đích, tình trạng; gán người chịu trách nhiệm | | Danh mục có đủ trường, cột người phụ trách |  |
| 6.2.2.1 d) | Đăng ký thiết bị di động được phép kết nối; quy định trách nhiệm cá nhân khi dùng cho công việc | | Sổ đăng ký thiết bị di động, quy định sử dụng |  |
| 6.2.2.2 a) | Quy trình phát hiện, xử lý thiết bị lạ kết nối trái phép, thực hiện ≥ 1 lần/quý | | Quy trình + kết quả các lần rà soát | **Mới/khác so với cấp 3** |
| 6.2.2.2 b) | Xử lý thiết bị trái phép bằng cách gỡ bỏ, từ chối kết nối hoặc cách ly | | Nhật ký xử lý |  |
| 6.2.2.3 a) | Quy định rà quét phát hiện tài sản kết nối vào HTTT ≥ 1 lần/quý | | Quy định + kết quả quét mạng | **Mới/khác so với cấp 3** |
| 6.2.2.3 b) | Cập nhật danh mục tài sản theo kết quả rà quét | | Lịch sử cập nhật danh mục | **Mới/khác so với cấp 3** |
| 6.2.2.4 a) | Bật ghi log DHCP trên mọi máy chủ DHCP/công cụ quản lý IP (nếu có) | | Cấu hình log DHCP/IPAM |  |
| 6.2.2.4 b) | Rà soát log DHCP để cập nhật danh mục ≥ 1 lần/quý | | Biên bản rà soát log DHCP | **Mới/khác so với cấp 3** |
| 6.2.2.5 a) | Có quy trình thanh lý/tiêu hủy tài sản CNTT | | Quy trình thanh lý | **Mới/khác so với cấp 3** |
| 6.2.2.5 b) | Dùng biện pháp chuyên dụng xóa sạch dữ liệu máy chủ khi chuyển giao/đổi mục đích | | Công cụ/biên bản xóa chuyên dụng | **Mới/khác so với cấp 3** |

## 6.3 Quản lý tài sản phần mềm

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.3.1 a) | Quản lý danh mục phần mềm; chỉ phần mềm đã phê duyệt mới được cài và dùng | | Danh mục phần mềm, quy trình phê duyệt |  |
| 6.3.1 b) | Kiểm kê, cập nhật danh mục phần mềm ≥ 1 lần/năm | | Biên bản kiểm kê phần mềm |  |
| 6.3.2.1 a) | Lập danh mục phần mềm đang cài trên các thiết bị thuộc HTTT | | Danh mục phần mềm (xuất từ công cụ inventory) |  |
| 6.3.2.1 b) | Trường tối thiểu: tên, mục đích, hạn hỗ trợ, phạm vi, chủ quản, bản quyền, phiên bản, hệ thống thành phần; gán trách nhiệm | | Danh mục có đủ trường |  |
| 6.3.2.2 a) | Lập danh sách phần mềm được phép sử dụng (whitelist) | | Danh sách phần mềm được phép |  |
| 6.3.2.2 b) | Whitelist gồm cả phần mềm do nhà cung cấp dịch vụ đưa vào và môi trường thực thi của ứng dụng | | Whitelist có mục runtime/phần mềm NCC |  |
| 6.3.2.2 c) | Kiểm soát cài đặt: đặc quyền tối thiểu, chặn cài/gỡ/thực thi trái phép, theo dõi hoạt động cài đặt | | Chính sách GPO/MDM/app control, log cài đặt |  |
| 6.3.2.2 d) | Rà soát whitelist ≥ 1 lần/năm hoặc khi tổ chức thay đổi | | Biên bản rà soát whitelist |  |
| 6.3.2.3 | Đối chiếu whitelist với phần mềm đã cài để bảo đảm còn được hãng hỗ trợ ≥ 1 lần/năm | | Báo cáo rà soát EOL | **Mới/khác so với cấp 3** |
| 6.3.2.4 a) | Quy trình phát hiện, xử lý phần mềm trái phép ≥ 1 lần/6 tháng | | Quy trình + kết quả rà soát | **Mới/khác so với cấp 3** |
| 6.3.2.4 b) | Phần mềm trái phép nhưng cần thiết đưa vào danh sách ngoại lệ, kèm biện pháp giảm thiểu | | Danh sách ngoại lệ có biện pháp kiểm soát |  |
| 6.3.2.4 c) | Lập kế hoạch gỡ sớm phần mềm trái phép ngoài danh sách ngoại lệ | | Kế hoạch gỡ bỏ, bằng chứng đã gỡ |  |

## 6.4 Quản lý tài sản thông tin

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.4.2.1 a) | Quy định quản lý tài sản thông tin: danh mục, mức nhạy cảm, chủ sở hữu, cách xử lý, thời hạn lưu, yêu cầu tiêu hủy | | Quy định quản lý tài sản thông tin |  |
| 6.4.2.1 b) | Phân loại mức nhạy cảm (gợi ý 4 mức: công khai, nội bộ, hạn chế, bí mật nhà nước) | | Bảng phân loại, nhãn dữ liệu |  |
| 6.4.2.1 c) | Quy trình yêu cầu truy cập, thêm, sửa, xóa dữ liệu | | Quy trình + phiếu yêu cầu |  |
| 6.4.2.1 d) | Kiểm tra phân quyền dữ liệu ≥ 1 lần/quý | | Biên bản rà soát phân quyền | **Mới/khác so với cấp 3** |
| 6.4.2.1 e) | Rà soát quy trình quản lý tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản quy trình |  |
| 6.4.2.2 a) | Lập danh mục tài sản thông tin theo quy trình đã ban hành | | Danh mục tài sản thông tin |  |
| 6.4.2.2 b) | Cập nhật danh mục tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | | Ngày cập nhật danh mục |  |
| 6.4.2.3 | Ma trận quyền truy cập của từng tài khoản/người dùng với từng loại tài sản thông tin | | Ma trận phân quyền (ACL) |  |
| 6.4.2.4 a) | Mã hóa (hoặc tương đương) thông tin xác thực, dữ liệu nhạy cảm cao, dữ liệu quan trọng khi lưu | | Cấu hình mã hóa (DB/đĩa/hash mật khẩu) |  |
| 6.4.2.4 b) | Bảo vệ thông tin xác thực, dữ liệu nhạy cảm cao/quan trọng khi truyền (mã hóa hoặc tương đương) | | Cấu hình TLS/VPN, kết quả kiểm tra | **Mới/khác so với cấp 3** |
| 6.4.2.4 c) | Dữ liệu quan trọng được mã hóa ít nhất 2 lớp khi truyền qua mạng (kênh an toàn + mã hóa nội dung) | | Sơ đồ luồng mã hóa 2 lớp | **Mới/khác so với cấp 3** |
| 6.4.2.4 d) | Có phương án chuyên dụng quản lý, bảo vệ dữ liệu mã hóa và khóa giải mã | | Thiết kế KMS/quy trình quản lý khóa | **Mới/khác so với cấp 3** |
| 6.4.2.4 e) | Chỉ dùng thuật toán mã hóa mạnh, chưa bị tổ chức quốc tế công bố điểm yếu | | Danh mục thuật toán được phép | **Mới/khác so với cấp 3** |
| 6.4.2.5 a) | Lưu dữ liệu quan trọng kèm mã kiểm tra toàn vẹn (checksum/hash/chữ ký) | | Thiết kế kiểm tra toàn vẹn |  |
| 6.4.2.5 b) | Giám sát, cảnh báo khi dữ liệu trên hệ thống/phương tiện lưu trữ bị thay đổi | | Cấu hình FIM, cảnh báo | **Mới/khác so với cấp 3** |
| 6.4.2.5 c) | Có phương án khôi phục tính toàn vẹn của dữ liệu | | Phương án khôi phục | **Mới/khác so với cấp 3** |
| 6.4.2.6 a) | Tài liệu hóa toàn bộ luồng dữ liệu trong HTTT | | Sơ đồ luồng dữ liệu | **Mới/khác so với cấp 3** |
| 6.4.2.6 b) | Áp dụng quy định quản lý phiên bản tài liệu | | Quy định quản lý tài liệu |  |
| 6.4.2.6 c) | Cập nhật tài liệu luồng dữ liệu ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.4.2.7 a) | Có quy định về xử lý dữ liệu nhạy cảm | | Quy định xử lý dữ liệu | **Mới/khác so với cấp 3** |
| 6.4.2.7 b) | Tách môi trường xử lý/lưu dữ liệu nhạy cảm cao, quan trọng khỏi dữ liệu nhạy cảm thấp (logic/vật lý hoặc tương đương) | | Sơ đồ phân tách môi trường |  |
| 6.4.2.7 c) | Dùng kênh vật lý riêng hoặc tương đương khi truyền dữ liệu quan trọng/nhạy cảm cao qua mạng | | Thiết kế kênh truyền riêng | **Mới/khác so với cấp 3** |
| 6.4.2.8 | Triển khai giải pháp chống thất thoát dữ liệu (DLP) cho dữ liệu nhạy cảm cao/quan trọng | | Hồ sơ giải pháp DLP, chính sách | **Mới/khác so với cấp 3** |
| 6.4.2.9 a) | Ghi log mọi thao tác trên dữ liệu nhạy cảm cao/quan trọng | | Cấu hình audit log dữ liệu | **Mới/khác so với cấp 3** |
| 6.4.2.9 b) | Rà soát log truy cập dữ liệu quan trọng ≥ 1 lần/quý | | Biên bản rà soát | **Mới/khác so với cấp 3** |
| 6.4.2.10 a) | Dùng chữ ký số khi trao đổi dữ liệu nhạy cảm cao/quan trọng | | Quy định ký số, mẫu đã ký | **Mới/khác so với cấp 3** |
| 6.4.2.10 b) | Chữ ký số do cơ quan có thẩm quyền hoặc tổ chức cung cấp dịch vụ được cấp phép cung cấp | | Chứng thư số, hợp đồng CA | **Mới/khác so với cấp 3** |
| 6.4.2.10 c) | Có phương án bảo đảm an ninh khi quản lý và sử dụng chữ ký số | | Quy định quản lý token/chứng thư | **Mới/khác so với cấp 3** |

## 6.5 Cấu hình an toàn phần cứng, phần mềm

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.5.2.1 a) | Ban hành quy định/quy trình cấu hình an toàn cho phần cứng và phần mềm | | Quy trình cấu hình an toàn |  |
| 6.5.2.1 b) | Có tài liệu cấu hình chuẩn/hardening; giao thức an toàn; tường lửa host; chống tự động đăng nhập trên tài sản xử lý dữ liệu quan trọng | | Baseline cấu hình (vd theo CIS), ảnh chụp cấu hình |  |
| 6.5.2.1 c) | Tắt giao thức mạng không an toàn và dịch vụ không dùng | | Kết quả quét cổng/dịch vụ |  |
| 6.5.2.1 d) | Hardening thiết bị trước khi đưa vào vận hành | | Checklist hardening trước go-live |  |
| 6.5.2.1 e) | Rà soát quy định và tài liệu cấu hình ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.5.2.2 a) | Tự khóa phiên theo đánh giá rủi ro — gợi ý: máy người dùng ≤ 15'; phiên quản trị, di động ≤ 5'; phần mềm nghiệp vụ dữ liệu quan trọng ≤ 15' | | GPO/MDM/cấu hình timeout |  |
| 6.5.2.2 a) | Khóa khi đăng nhập sai — gợi ý: laptop, điện thoại ≤ 10 lần; phần mềm nghiệp vụ dữ liệu quan trọng ≤ 5 lần; khóa 12 giờ–30 ngày | | Cấu hình lockout |  |
| 6.5.2.2 b) | Có cơ chế mở khóa khẩn cấp cho quản trị viên/tài khoản đặc quyền | | Quy trình break-glass |  |
| 6.5.2.3 | Quy định gỡ bỏ/tắt tính năng, dịch vụ không cần thiết | | Quy định + checklist | **Mới/khác so với cấp 3** |
| 6.5.2.4 | Cấu hình máy chủ DNS tin cậy trên thiết bị (nếu có) | | Cấu hình DNS | **Mới/khác so với cấp 3** |
| 6.5.2.5 | Xóa được dữ liệu từ xa trên điện thoại, máy tính bảng do tổ chức cấp | | Hồ sơ MDM (remote wipe) | **Mới/khác so với cấp 3** |
| 6.5.2.6 | Quy định tách không gian làm việc riêng trên thiết bị di động cấp phát | | Quy định, cấu hình work profile | **Mới/khác so với cấp 3** |

## 6.6 Quản lý tài khoản và quyền truy cập

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.6.1 a) | Quy trình, công cụ cấp/thu hồi quyền cho 4 loại tài khoản (quản trị, tác nghiệp, kỹ thuật, dịch vụ) theo vai trò | | Quy trình quản lý tài khoản |  |
| 6.6.1 c) | Ghi log và giám sát hoạt động của tài khoản người dùng | | Cấu hình audit log đăng nhập |  |
| 6.6.2.1 a) | Danh sách mọi tài khoản trên phần cứng và phần mềm | | Danh sách tài khoản |  |
| 6.6.2.1 b) | Danh sách gồm tối thiểu: tài khoản quản trị, tác nghiệp, kỹ thuật | | Danh sách tài khoản phân loại |  |
| 6.6.2.1 c) | Trường tối thiểu: loại, tên, trạng thái, hệ thống, người quản lý, phòng ban, ngày kích hoạt/vô hiệu; không còn tài khoản không hợp lệ | | Danh sách có đủ trường |  |
| 6.6.2.1 d) | Rà soát danh sách tài khoản 1 lần/quý | | Biên bản rà soát | **Mới/khác so với cấp 3** |
| 6.6.2.2 a) | Cấu hình bắt đổi mật khẩu mặc định; quy tắc độ dài, loại ký tự; thời hạn đổi và thời hạn hiệu lực mật khẩu | | Chính sách mật khẩu (GPO/IdP) |  |
| 6.6.2.2 b) | Gợi ý: mật khẩu riêng cho từng tài sản hoặc xác thực tập trung; bắt đổi ở lần đăng nhập đầu | | Cấu hình IdP/SSO |  |
| 6.6.2.2 b) | Gợi ý độ dài: ≥ 8 ký tự nếu có MFA; ≥ 14 ký tự gồm đủ 4 loại ký tự nếu không có MFA | | Chính sách mật khẩu |  |
| 6.6.2.2 b) | Tài khoản quản trị: bật MFA, đổi mật khẩu 2 tháng/lần, không dùng lại 10 mật khẩu gần nhất | | Cấu hình MFA/lịch sử mật khẩu |  |
| 6.6.2.3 | Dùng giải pháp PAM (hoặc tương đương) quản lý tài khoản đặc quyền | | Hồ sơ PAM | **Mới/khác so với cấp 3** |
| 6.6.2.3 | Quản lý tài khoản tập trung | | Hồ sơ IdP/AD/LDAP |  |
| 6.6.2.3 | Đổi hoặc vô hiệu hóa tài khoản mặc định (root, administrator, tài khoản cài sẵn của hãng) | | Danh sách tài khoản mặc định đã xử lý |  |
| 6.6.2.3 | Tách biệt quản lý 4 loại tài khoản | | Quy định + danh sách phân loại |  |
| 6.6.2.3 | Mỗi tài khoản gắn một người; dùng chung phải được phê duyệt và truy vết được người dùng từng thời điểm | | Phê duyệt tài khoản dùng chung, sổ theo dõi |  |
| 6.6.2.3 | Quy định quản lý thiết bị lưu khóa bí mật (token) và khóa bí mật | | Quy định quản lý token | **Mới/khác so với cấp 3** |
| 6.6.2.3 | Xóa/vô hiệu hóa tài khoản không hoạt động quá 45 ngày hoặc ngay khi đổi nhân sự | | Báo cáo tài khoản inactive |  |
| 6.6.2.3 | Rà soát quy định quản lý tài khoản ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.6.2.4 | Áp dụng đặc quyền tối thiểu và phân tách nhiệm vụ cho mọi loại tài khoản | | Ma trận vai trò – quyền |  |
| 6.6.2.4 | Tài liệu hóa quyền cần thiết theo chức danh, bộ phận | | Ma trận quyền theo chức danh |  |
| 6.6.2.4 | MFA cho truy cập từ ngoài tổ chức, từ đối tác/bên thứ ba, từ Internet và cho tài khoản quản trị | | Cấu hình MFA |  |
| 6.6.2.4 | Rà soát quy định quản lý truy cập ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.6.2.5 a) | Quy trình cấp mới, thay đổi, thu hồi quyền truy cập tài sản CNTT | | Quy trình + phiếu yêu cầu | **Mới/khác so với cấp 3** |
| 6.6.2.5 b) | Rà soát quy trình và việc cấp quyền ≥ 1 lần/năm | | Biên bản rà soát | **Mới/khác so với cấp 3** |

## 6.7 Quản lý lỗ hổng bảo mật

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.7.1 b) | Theo dõi thông tin mối đe dọa, lỗ hổng mới từ nhiều nguồn | | Nguồn tin đăng ký (NCSC, CVE, hãng…) |  |
| 6.7.2.1 a) | Quy trình quản lý lỗ hổng: rà quét phát hiện, chấm mức nghiêm trọng, chia sẻ/tiếp nhận báo cáo, khắc phục theo ưu tiên và kiểm tra lại | | Quy trình quản lý lỗ hổng |  |
| 6.7.2.1 a) | Rà quét tổng thể ≥ 1 lần/6 tháng; tài sản quan trọng ≥ 1 lần/quý | | Báo cáo rà quét theo kỳ | **Mới/khác so với cấp 3** |
| 6.7.2.1 b) | Rà soát quy trình và thực hiện rà quét lỗ hổng ≥ 1 lần/6 tháng hoặc khi thay đổi | | Báo cáo rà quét, biên bản rà soát |  |
| 6.7.2.2 | Có máy chủ quản lý bản vá tập trung cho toàn bộ tài sản | | Hồ sơ WSUS/SCCM/tương đương |  |
| 6.7.2.2 | Trước khi vá hệ thống có dữ liệu quan trọng: đánh giá tác động, thử nghiệm, có phương án khôi phục | | Biên bản thử nghiệm bản vá |  |
| 6.7.2.2 | Kiểm tra, cập nhật bản vá HĐH và ứng dụng cho máy tính, di động cấp cho người dùng ≥ 1 lần/tháng | | Báo cáo tuân thủ bản vá hằng tháng |  |
| 6.7.2.2 | Giám sát để phát hiện lỗ hổng mới và vá kịp thời | | Nhật ký vá |  |

## 6.8 Quản lý nhật ký an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.8.2.1 a) | Quy định quản lý log: cách ghi, thu thập, kiểm tra, lưu trữ | | Quy định quản lý nhật ký |  |
| 6.8.2.1 a) | Thu thập tối thiểu: log truy cập hệ thống, tiến trình, ứng dụng, truy cập dữ liệu, cảnh báo | | Danh sách nguồn log | **Mới/khác so với cấp 3** |
| 6.8.2.1 a) | Log truy cập có nguồn/đích (kèm MAC), tài khoản, thời điểm, hành vi; log cảnh báo đủ trường tối thiểu | | Mẫu bản ghi log |  |
| 6.8.2.1 a) | Log tiến trình có: thiết bị, tên/mã/tiến trình cha/lệnh khởi tạo, tài khoản, thời điểm | | Mẫu log tiến trình (vd Sysmon/auditd) |  |
| 6.8.2.1 a) | Log truy cập dữ liệu ghi hành động đọc/thêm/sửa/xóa/sao chép; log ứng dụng có truy cập, đăng nhập quản trị, lỗi, đổi cấu hình | | Mẫu log ứng dụng, log dữ liệu | **Mới/khác so với cấp 3** |
| 6.8.2.1 a) | Thu thập log trên toàn bộ tài sản CNTT | | Bảng độ phủ nguồn log | **Mới/khác so với cấp 3** |
| 6.8.2.1 a) | Đồng bộ thời gian qua máy chủ thời gian (NTP) cho mọi thành phần tham gia giám sát | | Cấu hình NTP |  |
| 6.8.2.1 a) | SIEM (hoặc tương đương) để quản lý, phân tích sự kiện tập trung | | Hồ sơ SIEM |  |
| 6.8.2.1 a) | Mọi đối tượng giám sát phải đẩy log về nền tảng giám sát tập trung | | Danh sách nguồn đã kết nối | **Mới/khác so với cấp 3** |
| 6.8.2.1 a) | Bảo đảm dung lượng lưu log tối thiểu 6 tháng; có cảnh báo sắp đầy dung lượng | | Cấu hình retention, ảnh chụp dung lượng | **Mới/khác so với cấp 3** |
| 6.8.2.1 a) | Rà soát log ANM ≥ 1 lần/tháng | | Biên bản rà soát log | **Mới/khác so với cấp 3** |
| 6.8.2.1 b) | Kiểm tra, cập nhật quy trình quản lý log ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.8.2.2 | Thu thập log ANM từ nhà cung cấp dịch vụ (cloud, SaaS…) mà hệ thống/tổ chức sử dụng | | Hợp đồng/cấu hình chia sẻ log | **Mới/khác so với cấp 3** |
| 6.8.2.3 a) | Kiểm soát và ghi vết truy cập vào log | | Cấu hình phân quyền kho log | **Mới/khác so với cấp 3** |
| 6.8.2.3 b) | Bảo đảm log không bị sửa, xóa (bất biến) | | Cấu hình WORM/immutable | **Mới/khác so với cấp 3** |
| 6.8.2.3 c) | Lưu log trên hệ thống riêng, khác vùng mạng với nguồn phát sinh; mã hóa log quan trọng | | Sơ đồ kiến trúc lưu log | **Mới/khác so với cấp 3** |

## 6.9 Bảo vệ trình duyệt web, thư điện tử

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.9.2.1 a) | Danh sách trình duyệt và dịch vụ email được phép | | Danh sách được phép |  |
| 6.9.2.1 b) | Chỉ dùng phiên bản còn được hãng hỗ trợ | | Báo cáo phiên bản |  |
| 6.9.2.1 c) | Có giải pháp bảo vệ an ninh cho hệ thống email (hoặc tương đương) | | Hồ sơ email security gateway |  |
| 6.9.2.1 d) | Cập nhật bản vá trình duyệt, email thường xuyên (hoặc biện pháp tương đương) | | Báo cáo bản vá |  |
| 6.9.2.2 | Dùng dịch vụ lọc tên miền (DNS filtering) chặn tên miền giả mạo, độc hại | | Cấu hình DNS filtering |  |
| 6.9.2.3 | Triển khai và cập nhật định kỳ bộ lọc URL chặn trang web độc hại/không được chấp thuận | | Chính sách web filter | **Mới/khác so với cấp 3** |
| 6.9.2.4 a) | Danh sách tiện ích mở rộng được phép trên trình duyệt, email | | Danh sách extension | **Mới/khác so với cấp 3** |
| 6.9.2.4 b) | Kiểm soát cài đặt, sử dụng tiện ích mở rộng | | GPO/MDM chặn extension | **Mới/khác so với cấp 3** |
| 6.9.2.4 c) | Gỡ/tắt tiện ích mở rộng không được cấp phép | | Báo cáo rà soát | **Mới/khác so với cấp 3** |
| 6.9.2.5 | Triển khai DMARC cho tên miền email của tổ chức | | Bản ghi DNS DMARC/SPF/DKIM | **Mới/khác so với cấp 3** |
| 6.9.2.6 a) | Danh sách loại tệp được phép đính kèm email | | Chính sách đính kèm | **Mới/khác so với cấp 3** |
| 6.9.2.6 b) | Chặn tệp ngoài danh sách; kiểm soát email có đính kèm | | Cấu hình gateway | **Mới/khác so với cấp 3** |

## 6.10 Phòng chống phần mềm độc hại

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.10.1 a) | Quy định phòng, chống, khắc phục mã độc | | Quy định phòng chống mã độc |  |
| 6.10.1 b) | Chống mã độc cho mọi tài sản và điểm kết nối (trong và ngoài); tự quét, chặn, cập nhật mẫu, gắn với quy trình lỗ hổng/sự cố | | Kiến trúc giải pháp |  |
| 6.10.2.1 a) | Cài và duy trì phần mềm chống mã độc (hoặc tương đương) trên máy chủ, máy người dùng | | Báo cáo độ phủ agent |  |
| 6.10.2.1 b) | Tính năng tối thiểu: bảo vệ thời gian thực, phát hiện theo hành vi, tự cập nhật mẫu | | Cấu hình sản phẩm | **Mới/khác so với cấp 3** |
| 6.10.2.2 a) | Quét mã độc và tắt autorun/autoplay với USB, ổ cứng, thẻ nhớ | | GPO tắt autorun, chính sách quét |  |
| 6.10.2.3 | Quản lý tập trung phần mềm chống mã độc (cập nhật, cảnh báo, quản lý) | | Console quản lý tập trung | **Mới/khác so với cấp 3** |
| 6.10.2.4 | Bật tính năng chống khai thác lỗ hổng (exploit protection) nếu có | | Cấu hình |  |
| 6.10.2.5 a) | Triển khai EDR (hoặc tương đương) phát hiện theo hành vi trên máy chủ, máy người dùng | | Hồ sơ EDR, độ phủ |  |
| 6.10.2.5 b) | Kết nối EDR về SIEM để giám sát, cảnh báo thời gian thực | | Cấu hình tích hợp |  |

## 6.11 Sao lưu và khôi phục dữ liệu

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.11.2.1 a) | Quy định sao lưu/khôi phục: loại dữ liệu (cấu hình, bản dự phòng HĐH máy chủ, CSDL, dữ liệu nghiệp vụ), tần suất, phương pháp, vùng lưu, khôi phục thử định kỳ | | Quy định sao lưu |  |
| 6.11.2.1 b) | Giải pháp lưu trữ/sao lưu tập trung sẵn sàng cao, khôi phục nóng khi một thành phần hỏng | | Kiến trúc sao lưu | **Mới/khác so với cấp 3** |
| 6.11.2.1 c) | Rà soát quy định sao lưu ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.11.2.2 a) | Danh sách dữ liệu cần sao lưu và tần suất theo ngày/tuần/tháng… | | Bảng lịch sao lưu |  |
| 6.11.2.2 b) | Sao lưu tự động (giải pháp hoặc tương đương) | | Cấu hình job sao lưu |  |
| 6.11.2.3 a) | Áp dụng quy tắc 3-2-1 (hoặc tương đương) cho bản sao lưu | | Sơ đồ 3-2-1 |  |
| 6.11.2.3 b) | Mã hóa bản sao lưu dữ liệu nhạy cảm cao, dữ liệu quan trọng | | Cấu hình mã hóa backup | **Mới/khác so với cấp 3** |
| 6.11.2.4 | Định danh, quản lý phiên bản bản sao lưu; lưu trên hạ tầng độc lập, tách biệt môi trường vận hành | | Sơ đồ hạ tầng backup | **Mới/khác so với cấp 3** |
| 6.11.2.5 | Có phương án khôi phục toàn vẹn; thử khôi phục bản sao lưu ≥ 1 lần/6 tháng | | Biên bản khôi phục thử | **Mới/khác so với cấp 3** |

## 6.12 Quản lý hạ tầng mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.12.2.1 a) | Lập, duy trì sơ đồ mạng; hồ sơ thiết kế và biện pháp ANM được chuyên gia/bộ phận chuyên môn thẩm tra trước khi triển khai | | Sơ đồ mạng; biên bản thẩm tra thiết kế (cấp 4–5) | **Mới/khác so với cấp 3** |
| 6.12.2.1 b) | Kiến trúc lấy dữ liệu/tài nguyên làm trung tâm; phân đoạn vi mô (hoặc tương đương) cách ly máy chủ, ứng dụng quan trọng | | Thiết kế microsegmentation | **Mới/khác so với cấp 3** |
| 6.12.2.1 c) | Kiến trúc mạng an toàn theo 3 nguyên tắc: phân vùng, đặc quyền tối thiểu, sẵn sàng | | Tài liệu kiến trúc |  |
| 6.12.2.1 d) | Kết nối mạng an toàn từ khâu thiết lập kênh đến trao đổi dữ liệu | | Cấu hình kênh (TLS/IPsec) | **Mới/khác so với cấp 3** |
| 6.12.2.1 e) | Hồ sơ mạng gồm: tổng quan kiến trúc, sơ đồ chi tiết, tài liệu kỹ thuật, mô tả phương án ANM | | Bộ hồ sơ mạng |  |
| 6.12.2.1 f) | Quản lý, bảo vệ tài liệu và hồ sơ thiết kế | | Quy định lưu trữ hồ sơ thiết kế | **Mới/khác so với cấp 3** |
| 6.12.2.1 g) | Cập nhật sơ đồ mạng 1 lần/6 tháng hoặc khi thay đổi | | Lịch sử phiên bản sơ đồ | **Mới/khác so với cấp 3** |
| 6.12.2.2 a) | Cân bằng tải, dự phòng nóng thiết bị mạng chính; nếu buộc nối Internet: ≥ 2 hướng Internet quốc tế từ nhà mạng trong nước khác hạ tầng | | Sơ đồ HA, hợp đồng kênh truyền | **Mới/khác so với cấp 3** |
| 6.12.2.2 a) | Bảo đảm an toàn mạng không dây (nếu có) | | Cấu hình WPA2/3-Enterprise, tách SSID |  |
| 6.12.2.2 a) | Dự phòng kết nối mạng cho máy chủ cung cấp dịch vụ | | Sơ đồ kết nối kép |  |
| 6.12.2.2 a) | Tường lửa có IPS (hoặc tương đương) kiểm soát truy cập, chống xâm nhập giữa các vùng mạng | | Cấu hình NGFW/IPS |  |
| 6.12.2.2 a) | Tường lửa có chống mã độc trên đường mạng (hoặc tương đương) | | Cấu hình AV gateway |  |
| 6.12.2.2 a) | Tường lửa CSDL (DBF) hoặc tương đương cho CSDL tập trung | | Hồ sơ DBF |  |
| 6.12.2.2 a) | NAC (hoặc tương đương) kiểm soát thiết bị đầu cuối kết nối vào mạng | | Hồ sơ NAC/802.1X |  |
| 6.12.2.2 a) | Giám sát HTTT tập trung (tài nguyên, trạng thái) | | Hồ sơ NMS |  |
| 6.12.2.2 a) | WAF (hoặc tương đương) cho ứng dụng web (nếu có) | | Cấu hình WAF |  |
| 6.12.2.2 a) | Chống tấn công từ chối dịch vụ (dịch vụ, sản phẩm hoặc tương đương) | | Hợp đồng/cấu hình anti-DDoS |  |
| 6.12.2.2 a) | Data diode/cổng bảo mật một chiều, hai chiều (hoặc tương đương) giữa vùng lõi, OT và vùng tin cậy thấp | | Sơ đồ phân vùng, hồ sơ thiết bị | **Mới/khác so với cấp 3** |
| 6.12.2.2 a) | Cập nhật định kỳ CSDL nhận diện tấn công cho các giải pháp ANM | | Nhật ký cập nhật signature |  |
| 6.12.2.2 a) | Quản lý thay đổi; quy định việc kết nối/gỡ máy chủ, dịch vụ, thiết bị khỏi hệ thống | | Phiếu thay đổi (change request) | **Mới/khác so với cấp 3** |
| 6.12.2.2 a) | Theo dõi hiệu năng (CPU, RAM…) để bảo đảm hoạt động bình thường | | Dashboard giám sát |  |
| 6.12.2.2 b) | Phân vùng tối thiểu: như cấp 3 + WAN (nếu có) + vùng quản trị thiết bị hệ thống | | Sơ đồ phân vùng, ACL giữa vùng | **Mới/khác so với cấp 3** |
| 6.12.2.3 | Chỉ dùng giao thức truyền thông, quản trị an toàn, chưa bị công bố điểm yếu | | Kết quả quét giao thức yếu | **Mới/khác so với cấp 3** |
| 6.12.2.4 a) | Chỉ cho phép kết nối an toàn khi truy cập nội bộ hoặc quản trị từ xa | | Cấu hình SSH/TLS, tắt Telnet/HTTP |  |
| 6.12.2.4 b) | Thiết bị phải yêu cầu đăng nhập khi quản trị tại chỗ cũng như từ xa | | Cấu hình xác thực thiết bị |  |
| 6.12.2.4 c) | Kiểm soát truy cập cả chiều vào và chiều ra theo từng dịch vụ; chặn mọi truy cập không được phép | | Rule firewall |  |
| 6.12.2.4 d) | Đặt timeout tự đóng phiên kết nối không hoạt động | | Cấu hình timeout |  |
| 6.12.2.4 e) | Giới hạn số kết nối đồng thời theo nguồn và theo dịch vụ (linh hoạt nếu có biện pháp tương đương) | | Cấu hình rate/conn limit |  |
| 6.12.2.4 f) | Kiểm soát truy cập của người dùng vào dịch vụ, máy chủ nội bộ theo chính sách | | Chính sách truy cập |  |
| 6.12.2.4 g) | Chặn hoặc hạn chế máy chủ truy cập ra mạng ngoài theo chức năng | | Rule egress | **Mới/khác so với cấp 3** |
| 6.12.2.5 | Truy cập từ xa của quản trị viên, người dùng tác nghiệp qua VPN, ZTNA (hoặc tương đương) có xác thực | | Cấu hình VPN/ZTNA | **Mới/khác so với cấp 3** |
| 6.12.2.5 | Kết nối từ xa phải xác thực MFA và xác thực bổ sung trước khi vào hệ thống | | Cấu hình MFA VPN | **Mới/khác so với cấp 3** |
| 6.12.2.5 | Thiết bị truy cập từ xa phải có chống mã độc và cấu hình theo chính sách của tổ chức | | Chính sách posture check | **Mới/khác so với cấp 3** |
| 6.12.2.5 | Giới hạn dải địa chỉ/thiết bị được phép quản trị từ xa | | ACL quản trị | **Mới/khác so với cấp 3** |
| 6.12.2.5 | Cấm quản trị trực tiếp từ mạng ngoài; bắt buộc qua máy quản trị nội bộ (jump host) bằng kết nối an toàn | | Sơ đồ jump host | **Mới/khác so với cấp 3** |
| 6.12.2.6 | Tài nguyên dành riêng cho quản trị, tách vật lý/logic khỏi mạng chính, không nối Internet | | Sơ đồ mạng quản trị (OOB) | **Mới/khác so với cấp 3** |
| 6.12.2.7 a) | Thử nghiệm, nghiệm thu trước khi bàn giao và đưa vào sử dụng | | Hồ sơ nghiệm thu | **Mới/khác so với cấp 3** |
| 6.12.2.7 b) | Lập kế hoạch và quy trình kiểm thử, nghiệm thu (nêu rõ nội dung cần thử) | | Kế hoạch thử nghiệm |  |
| 6.12.2.7 c) | Đơn vị/bộ phận độc lập tư vấn, giám sát quá trình thử nghiệm, nghiệm thu | | Hợp đồng/quyết định giám sát độc lập |  |
| 6.12.2.7 d) | Kiểm thử hệ thống trước khi đưa vào vận hành | | Báo cáo kiểm thử |  |
| 6.12.2.7 e) | Biên bản nghiệm thu được bộ phận chuyên trách xác nhận, chủ quản phê duyệt rồi mới đưa vào dùng | | Báo cáo nghiệm thu đã phê duyệt |  |

## 6.13 Giám sát và phòng thủ an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.13.2.1 a) | Giám sát ANM tối thiểu với thiết bị hệ thống, máy chủ, ứng dụng, dịch vụ | | Danh sách đối tượng giám sát |  |
| 6.13.2.1 b) | SIEM tương quan sự kiện, phân tích theo hướng dẫn của cơ quan có thẩm quyền | | Use case/rule SIEM |  |
| 6.13.2.1 c) | Bố trí nguồn lực giám sát ANM 24/7 | | Lịch trực, hợp đồng SOC | **Mới/khác so với cấp 3** |
| 6.13.2.2 | Bật tường lửa, phát hiện/ngăn chặn xâm nhập của HĐH và hệ thống (nếu có) | | Cấu hình host firewall/HIPS |  |
| 6.13.2.3 a) | Kiểm soát truy cập cổng kết nối trên thiết bị mạng (nếu hỗ trợ) | | Cấu hình port security |  |
| 6.13.2.3 b) | Tách cổng quản trị ứng dụng khỏi cổng cung cấp dịch vụ | | Cấu hình cổng |  |
| 6.13.2.4 | Thu thập flow/lưu lượng mạng để rà soát, cảnh báo | | Cấu hình NetFlow/NDR |  |
| 6.13.2.5 | Tinh chỉnh ngưỡng cảnh báo ≥ 1 lần/quý | | Nhật ký tinh chỉnh rule | **Mới/khác so với cấp 3** |

## 6.14 Nhân sự vận hành, quản trị, bảo vệ an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.14.1 c) | Trình độ chuyên môn phù hợp với từng bộ phận | | Hồ sơ năng lực | **Mới/khác so với cấp 3** |
| 6.14.2.1 a) | Thành lập bộ phận riêng cho vận hành, quản trị hệ thống và bảo vệ ANM | | Quyết định thành lập, sơ đồ tổ chức |  |
| 6.14.2.1 b) | Các bộ phận vận hành, quản trị, bảo vệ ANM độc lập về chuyên môn | | Quy chế phân định nhiệm vụ |  |
| 6.14.2.2 a) | Chương trình nâng cao nhận thức ANM cho mọi người dùng HTTT | | Tài liệu, danh sách tham dự |  |
| 6.14.2.2 b) | Thu hồi thẻ, dữ liệu, thiết bị, tài sản khi nghỉ hoặc chuyển việc | | Biên bản bàn giao |  |
| 6.14.2.2 c) | Quy trình vô hiệu hóa mọi quyền ra vào, truy cập, quản trị khi thôi việc | | Quy trình offboarding, log vô hiệu |  |
| 6.14.2.2 d) | Cam kết giữ bí mật thông tin của tổ chức sau khi nghỉ việc | | Cam kết đã ký | **Mới/khác so với cấp 3** |
| 6.14.2.2 e) | Đào tạo nhận thức ≥ 1 lần/năm | | Danh sách, bài kiểm tra |  |
| 6.14.2.3 a) | Đào tạo chuyên môn ANM theo vị trí; kèm pháp luật và trách nhiệm pháp lý | | Chương trình đào tạo theo vai trò | **Mới/khác so với cấp 3** |
| 6.14.2.3 b) | Đào tạo chuyên môn ≥ 1 lần/năm hoặc khi thay đổi nhân sự | | Chứng nhận/danh sách | **Mới/khác so với cấp 3** |

## 6.15 Quản lý nhà cung cấp sản phẩm, dịch vụ

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.15.1 | Quy trình đánh giá nhà cung cấp dịch vụ ANM, lưu trữ/xử lý dữ liệu nhạy cảm, nền tảng quan trọng | | Quy trình đánh giá NCC |  |
| 6.15.2.1 | Danh sách nhà cung cấp, theo dõi trạng thái | | Danh sách NCC |  |
| 6.15.2.1 | Phân loại nhà cung cấp | | Tiêu chí phân loại |  |
| 6.15.2.1 | Nhà cung cấp SP/DV ANM phải đủ điều kiện kinh doanh theo quy định | | Giấy phép kinh doanh SP/DV ANM của NCC | **Mới/khác so với cấp 3** |
| 6.15.2.1 | Văn bản phân định phạm vi trách nhiệm giữa nhà cung cấp và tổ chức | | Hợp đồng/SLA/ma trận RACI |  |
| 6.15.2.1 | Cập nhật danh sách nhà cung cấp ≥ 1 lần/năm hoặc khi thay đổi | | Ngày cập nhật |  |
| 6.15.2.2 a) | Quy định quản lý nhà cung cấp dịch vụ | | Quy định | **Mới/khác so với cấp 3** |
| 6.15.2.2 b) | Cập nhật quy định ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản | **Mới/khác so với cấp 3** |
| 6.15.2.3 a) | Hợp đồng dịch vụ ANM có đủ điều khoản bảo mật | | Hợp đồng | **Mới/khác so với cấp 3** |
| 6.15.2.3 b) | Rà soát điều khoản bảo mật khi gia hạn hợp đồng | | Biên bản rà soát | **Mới/khác so với cấp 3** |
| 6.15.2.4 | Giám sát nhà cung cấp tuân thủ quy định của tổ chức | | Báo cáo đánh giá NCC | **Mới/khác so với cấp 3** |
| 6.15.2.5 | Rà soát vấn đề bảo mật khi kết thúc hợp đồng (thu hồi quyền, dữ liệu) | | Biên bản kết thúc | **Mới/khác so với cấp 3** |

## 6.16 Phát triển ứng dụng an toàn

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.16.2.1 a) | Quy trình phát triển ứng dụng an toàn (SDLC) | | Quy trình SSDLC |  |
| 6.16.2.1 b) | Cập nhật quy trình ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.16.2.1 c) | Thuê khoán: hợp đồng, cam kết bảo mật với bên phát triển | | Hợp đồng, NDA |  |
| 6.16.2.1 c) | Thuê khoán: nhận mã nguồn; nếu không có thì chứng chỉ đánh giá độc lập hoặc pentest/giám sát thay thế + cam kết pháp lý | | Biên bản bàn giao/cam kết |  |
| 6.16.2.1 c) | Thuê khoán: kiểm thử trên môi trường thử nghiệm; đánh giá ANM trước khi dùng và mỗi khi đổi mã nguồn/kiến trúc | | Báo cáo kiểm thử, đánh giá | **Mới/khác so với cấp 3** |
| 6.16.2.1 c) | Thuê khoán: cam kết của bên phát triển về bảo mật và bản quyền phần mềm | | Cam kết | **Mới/khác so với cấp 3** |
| 6.16.2.2 a) | Quy trình tiếp nhận, xử lý báo cáo lỗ hổng phần mềm, có kênh cho bên ngoài báo cáo | | Trang/địa chỉ tiếp nhận (security.txt) |  |
| 6.16.2.2 b) | Cập nhật quy trình ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.16.2.3 | Phân tích nguyên nhân gốc của lỗ hổng | | Báo cáo RCA | **Mới/khác so với cấp 3** |
| 6.16.2.4 a) | Danh mục thành phần bên thứ ba (thư viện, mô-đun) đang/sẽ dùng (SBOM) | | SBOM | **Mới/khác so với cấp 3** |
| 6.16.2.4 b) | Ghi rủi ro ANM của từng thành phần bên thứ ba | | SBOM kèm đánh giá | **Mới/khác so với cấp 3** |
| 6.16.2.4 c) | Cập nhật danh mục thành phần ≥ 1 lần/quý | | Lịch sử SBOM | **Mới/khác so với cấp 3** |
| 6.16.2.5 | Tách môi trường phát triển, kiểm thử, vận hành; không để bí mật trong mã nguồn | | Sơ đồ môi trường, kết quả quét secret | **Mới/khác so với cấp 3** |
| 6.16.2.6 a) | Đào tạo lập trình an toàn cho toàn bộ lập trình viên | | Danh sách đào tạo | **Mới/khác so với cấp 3** |
| 6.16.2.6 b) | Đào tạo lập trình an toàn ≥ 1 lần/năm | | Danh sách đào tạo | **Mới/khác so với cấp 3** |
| 6.16.2.7 | Thiết kế: kiểm tra dữ liệu vào/ra, chống tấn công phổ biến, kiểm soát thông báo lỗi | | Tài liệu thiết kế, checklist review |  |
| 6.16.2.7 | Không lưu thông tin xác thực, bí mật trong mã nguồn | | Kết quả quét secret |  |
| 6.16.2.7 | Quản lý phiên làm việc an toàn | | Tài liệu thiết kế | **Mới/khác so với cấp 3** |
| 6.16.2.8 a) | Dùng mô-đun/dịch vụ bảo mật đã được kiểm chứng | | Danh sách thư viện | **Mới/khác so với cấp 3** |
| 6.16.2.8 b) | Chỉ dùng thuật toán mã hóa mạnh, đã chuẩn hóa | | Danh sách thuật toán | **Mới/khác so với cấp 3** |
| 6.16.2.8 c) | Ghi nhật ký kiểm toán hành vi người dùng trong sản phẩm | | Mẫu audit log | **Mới/khác so với cấp 3** |
| 6.16.2.9 a) | Kiểm tra lỗ hổng mã nguồn tự viết và thư viện, thành phần bên thứ ba | | Báo cáo SAST/SCA | **Mới/khác so với cấp 3** |
| 6.16.2.9 b) | Kiểm thử xâm nhập và khắc phục trước khi vận hành chính thức | | Báo cáo pentest trước go-live | **Mới/khác so với cấp 3** |

## 6.17 Quản trị ứng phó sự cố an ninh mạng

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.17.2.1 a) | Chỉ định người chủ chốt và ít nhất một người dự phòng quản lý ứng phó sự cố | | Quyết định phân công |  |
| 6.17.2.1 b) | Đầu mối tiếp nhận báo cáo sự cố; xác minh thông tin liên hệ hằng năm | | Danh bạ có ngày xác minh |  |
| 6.17.2.1 c) | Phân công vai trò, trách nhiệm từng thành viên đội ứng phó | | Bảng RACI đội ứng phó |  |
| 6.17.2.1 d) | Quy định trách nhiệm phối hợp của các phòng ban với đội ứng phó | | Quy chế phối hợp |  |
| 6.17.2.2 a) | Quy trình báo cáo sự cố nội bộ | | Quy trình, mẫu báo cáo |  |
| 6.17.2.2 b) | Phân nhóm sự cố ANM | | Bảng phân loại sự cố |  |
| 6.17.2.2 c) | Cập nhật quy trình báo cáo ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.17.2.3 a) | Quy trình ứng phó có cơ chế phối hợp với cơ quan chức năng, chuyên gia, nhà cung cấp dịch vụ | | Quy trình ứng phó |  |
| 6.17.2.3 b) | Cập nhật quy trình ứng phó ≥ 1 lần/năm hoặc khi thay đổi | | Lịch sử phiên bản |  |
| 6.17.2.4 a) | Kênh liên lạc chính và dự phòng khi xử lý sự cố | | Danh sách kênh | **Mới/khác so với cấp 3** |
| 6.17.2.4 b) | Cập nhật cơ chế liên lạc ≥ 1 lần/năm | | Lịch sử cập nhật | **Mới/khác so với cấp 3** |
| 6.17.2.5 | Đánh giá sau sự cố (rút kinh nghiệm) | | Báo cáo post-incident | **Mới/khác so với cấp 3** |
| 6.17.2.6 | Diễn tập kịch bản ứng phó ≥ 1 lần/năm | | Kế hoạch, báo cáo diễn tập | **Mới/khác so với cấp 3** |
| 6.17.2.7 a) | Thiết lập ngưỡng sự cố ANM | | Bảng ngưỡng | **Mới/khác so với cấp 3** |
| 6.17.2.7 b) | Cập nhật ngưỡng sự cố ≥ 1 lần/năm | | Lịch sử cập nhật | **Mới/khác so với cấp 3** |

## 6.18 Quản lý kiểm tra an ninh mạng (kiểm thử xâm nhập)

| Mục TCVN | Yêu cầu (tóm lược) | Kết quả | Bằng chứng cần lưu | Ghi chú |
|---|---|---|---|---|
| 6.18.2.1 a) | Chương trình kiểm thử xâm nhập phù hợp quy mô, độ phức tạp của tổ chức | | Chương trình pentest |  |
| 6.18.2.1 b) | Mỗi đợt được phê duyệt phạm vi, thời gian, phương pháp, đầu mối, xử lý dữ liệu; tránh gián đoạn dịch vụ | | Phê duyệt kế hoạch pentest (RoE) |  |
| 6.18.2.1 b) | Chương trình xác định phạm vi, tần suất (quý/nửa năm/năm/đột xuất), hành vi bị cấm, cách tổ chức phản ứng | | Chương trình pentest |  |
| 6.18.2.2 | Pentest từ bên ngoài ≥ 1 lần/năm cho ứng dụng, dịch vụ công khai Internet | | Báo cáo pentest ngoài | **Mới/khác so với cấp 3** |
| 6.18.2.3 | Khắc phục phát hiện từ pentest theo chính sách ưu tiên | | Kế hoạch khắc phục, retest |  |
| 6.18.2.4 | Đánh giá lại hiệu quả biện pháp bảo mật sau mỗi đợt pentest | | Báo cáo đánh giá |  |
| 6.18.2.5 | Pentest từ bên trong ≥ 1 lần/năm cho tài nguyên nội bộ | | Báo cáo pentest trong | **Mới/khác so với cấp 3** |

## Tổng hợp kết quả

| Nhóm | Tên nhóm | Số dòng | Đạt | Một phần | Chưa | N/A |
|---|---|---|---|---|---|---|
| 6.1 | Quản lý rủi ro an ninh mạng | 12 | | | | |
| 6.2 | Quản lý tài sản phần cứng | 15 | | | | |
| 6.3 | Quản lý tài sản phần mềm | 12 | | | | |
| 6.4 | Quản lý tài sản thông tin | 28 | | | | |
| 6.5 | Cấu hình an toàn phần cứng, phần mềm | 12 | | | | |
| 6.6 | Quản lý tài khoản và quyền truy cập | 24 | | | | |
| 6.7 | Quản lý lỗ hổng bảo mật | 8 | | | | |
| 6.8 | Quản lý nhật ký an ninh mạng | 16 | | | | |
| 6.9 | Bảo vệ trình duyệt web, thư điện tử | 12 | | | | |
| 6.10 | Phòng chống phần mềm độc hại | 9 | | | | |
| 6.11 | Sao lưu và khôi phục dữ liệu | 9 | | | | |
| 6.12 | Quản lý hạ tầng mạng | 41 | | | | |
| 6.13 | Giám sát và phòng thủ an ninh mạng | 8 | | | | |
| 6.14 | Nhân sự vận hành, quản trị, bảo vệ an ninh mạng | 10 | | | | |
| 6.15 | Quản lý nhà cung cấp sản phẩm, dịch vụ | 12 | | | | |
| 6.16 | Phát triển ứng dụng an toàn | 23 | | | | |
| 6.17 | Quản trị ứng phó sự cố an ninh mạng | 15 | | | | |
| 6.18 | Quản lý kiểm tra an ninh mạng (kiểm thử xâm nhập) | 7 | | | | |
| | **Tổng** | **273** | | | | |

## Bước tiếp theo

- Mỗi dòng `Chưa`/`Một phần` → đưa vào kế hoạch khắc phục có người phụ trách và hạn hoàn thành; hệ thống xây mới/nâng cấp phải triển khai đủ phương án đã phê duyệt **trước khi vận hành** (NĐ 331 Đ30.6) và qua đánh giá điều kiện ANM (NĐ 331 Đ28.3).
- Lưu checklist đã điền cùng bằng chứng làm hồ sơ phục vụ kiểm tra, đánh giá (NĐ 331 Đ28.5, Đ27).
