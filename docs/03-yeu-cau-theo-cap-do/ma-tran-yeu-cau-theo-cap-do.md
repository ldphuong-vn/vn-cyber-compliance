# Ma trận yêu cầu TCVN 14423:2026 theo 5 cấp độ

> **Căn cứ:** TCVN 14423:2026 mục 3–7; NĐ 331/2026/NĐ-CP Đ30; NĐ 333/2026/NĐ-CP Đ16.6, Đ20.3 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

> **Bản quyền:** Tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI). Nội dung dưới đây là diễn giải ngắn của người soạn kèm số mục, không phải nguyên văn.

Cách đọc: mỗi hàng là một nhóm yêu cầu, tiêu đề hàng ghi số mục ở từng cấp (vd *Ứng phó sự cố 3.15 / 4.15 / 5.16 / 6.17 / 7.17*). Mỗi ô chỉ ghi **điểm mới hoặc mức tăng so với cấp liền trước** (ô cấp 1 ghi mức nền). "—" = cấp đó không có nhóm riêng. Chi tiết từng dòng: [checklist-cap-1](checklist-cap-1.md) · [2](checklist-cap-2.md) · [3](checklist-cap-3.md) · [4](checklist-cap-4.md) · [5](checklist-cap-5.md).

## 1. Ma trận 18 nhóm × 5 cấp

| Nhóm (số mục cấp 1/2/3/4/5) | Cấp 1 | Cấp 2 | Cấp 3 | Cấp 4 | Cấp 5 |
|---|---|---|---|---|---|
| **Quản lý rủi ro** (3.1 / 4.1 / 5.1 / 6.1 / 7.1) | Có quy trình 4 bước (nhận diện–phân tích–đánh giá–xử lý), rà soát 1 lần/năm (3.1) | Như cấp 1 (4.1) | Tách thành 6 hoạt động: nhận diện (cả rủi ro bên thứ ba), đánh giá, xử lý + phương án rủi ro tồn dư, giám sát, truyền thông; nhận diện lại 1 lần/năm (5.1.2.2–5.1.2.6) | Nhận diện lại và đánh giá hiệu quả kiểm soát 1 lần/6 tháng; chia sẻ kết quả đánh giá rủi ro (6.1.2.2 c, 6.1.2.4 b, 6.1.2.6 a) | Rà soát cả quy trình QLRR 1 lần/6 tháng (7.1.2.1 b) |
| **Tài sản phần cứng** (x.2) | Danh mục có trường tối thiểu; kiểm kê và dò thiết bị trái phép 1 lần/năm (3.2) | Xóa sạch dữ liệu khi chuyển giao/đổi mục đích (4.2.2.3) | Dò thiết bị trái phép 1 lần/6 tháng; bật log DHCP, rà 1 lần/6 tháng (5.2.2.2, 5.2.2.4) | Kiểm tra an ninh thiết bị trước khi dùng; rà quét mạng phát hiện tài sản 1 lần/quý; quy trình thanh lý, xóa chuyên dụng cho máy chủ (6.2.2.1 b, 6.2.2.3, 6.2.2.5) | Chu kỳ rút về **tháng**; kiểm kê 1 lần/6 tháng; sao lưu trước khi xóa và kiểm chứng không khôi phục được (7.2.1 c, 7.2.2.2–7.2.2.5) |
| **Tài sản phần mềm** (x.3) | Danh mục phần mềm; chỉ dùng phần mềm được duyệt; dò phần mềm trái phép 1 lần/năm, có danh sách ngoại lệ (3.3) | Quản lý phần mềm thuê khoán: hợp đồng bảo mật, mã nguồn hoặc chứng chỉ/pentest thay thế (4.3.2.3) | Whitelist gồm cả runtime; kiểm soát cài đặt theo đặc quyền tối thiểu; theo dõi hoạt động cài đặt (5.3.2.2). Thuê khoán chuyển sang nhóm 5.17 | Rà soát phần mềm hết hỗ trợ 1 lần/năm; dò phần mềm trái phép 1 lần/6 tháng (6.3.2.3, 6.3.2.4) | Kiểm kê, whitelist, EOL 1 lần/6 tháng; dò trái phép 1 lần/tháng (7.3.1 b, 7.3.2.2–7.3.2.4) |
| **Tài sản thông tin** (x.4) | Quy định quản lý, danh mục, ma trận quyền; kiểm tra phân quyền 1 lần/năm; mã hóa thông tin xác thực khi lưu (3.4) | Phân loại mức nhạy cảm (3 mức gợi ý); mã hóa cả dữ liệu không công khai khi lưu (4.4.2.1 b, 4.4.2.4) | Thêm mức "bí mật nhà nước"; mã hóa khi lưu và khi truyền dữ liệu quan trọng; quản lý vòng đời khóa; mã kiểm tra toàn vẹn; sơ đồ luồng dữ liệu; tách môi trường theo độ nhạy cảm; ký số; phân quyền rà 1 lần/6 tháng (5.4.2.1–5.4.2.8) | **Mã hóa 2 lớp** khi truyền dữ liệu quan trọng; thuật toán mạnh; giám sát thay đổi dữ liệu; kênh vật lý riêng; **DLP**; log truy cập dữ liệu rà 1 lần/quý; chữ ký số từ tổ chức được cấp phép (6.4.2.4–6.4.2.10) | Thiết bị phần cứng chuyên dụng mã hóa/ký số; phân quyền và log dữ liệu rà 1 lần/tháng (7.4.2.4 f, 7.4.2.9 b, 7.4.2.10 d) |
| **Cấu hình an toàn** (x.5) | Baseline/hardening, giao thức an toàn, tường lửa host; khóa phiên gợi ý 15/5/5 phút; khóa sau 10 lần sai (3.5) | Tắt giao thức, dịch vụ không an toàn; chống tự đăng nhập; khóa phiên phần mềm nghiệp vụ 15 phút, 5 lần sai (4.5.2.1, 4.5.2.2) | Hardening trước khi vận hành (5.5.2.1 d) | Gỡ tính năng thừa; DNS tin cậy; xóa từ xa và tách không gian làm việc trên di động (6.5.2.3–6.5.2.6) | Giải pháp quản lý thiết bị di động (MDM) (7.5.2.6 b) |
| **Tài khoản, truy cập** (x.6) | **MFA cho truy cập từ ngoài, bên thứ ba, Internet và tài khoản quản trị ngay từ cấp 1**; vô hiệu hóa tài khoản không dùng 45 ngày; rà danh sách 1 lần/năm (3.6.2.3, 3.6.2.4) | Thời hạn đổi và hiệu lực mật khẩu (4.6.2.2 a) | Quản lý tài khoản tập trung; quản trị viên bắt buộc MFA, không dùng lại 10 mật khẩu; rà danh sách 1 lần/6 tháng (5.6.2.1–5.6.2.3) | **PAM**; quản lý token/khóa bí mật; quy trình cấp–thu hồi quyền rà 1 lần/năm; rà danh sách 1 lần/quý (6.6.2.3, 6.6.2.5) | Rà danh sách 1 lần/tháng; rà quy trình cấp quyền 1 lần/6 tháng (7.6.2.1 d, 7.6.2.5 b) |
| **Lỗ hổng bảo mật** (x.7) | Quy trình quản lý lỗ hổng; rà quét 1 lần/năm; vá máy người dùng 1 lần/tháng (3.7) | Phương án vá toàn bộ tài sản; thử nghiệm trước khi vá hệ thống có dữ liệu quan trọng (4.7.2.2) | Rà quét 1 lần/6 tháng; **máy chủ quản lý bản vá tập trung** (5.7.2.1 b, 5.7.2.2) | Rà quét toàn hệ thống 1 lần/6 tháng và **tài sản quan trọng 1 lần/quý** (6.7.2.1 a) | Toàn hệ thống 1 lần/quý, tài sản quan trọng 1 lần/tháng (7.7.2.1) |
| **Nhật ký ANM** (x.8) | Quy định log; 3 loại log tối thiểu; NTP; rà log 1 lần/năm; **không nêu thời gian lưu** (3.8) | Trường tối thiểu của log; **lưu ≥ 1 tháng** (4.8.2.1) | Thêm log tiến trình; **SIEM**; lưu tập trung **≥ 3 tháng**; rà log 1 lần/6 tháng (5.8.2.1) | Thêm log truy cập dữ liệu; phủ toàn bộ tài sản; **≥ 6 tháng**; rà log **1 lần/tháng**; thu log của nhà cung cấp; log bất biến, lưu tách vùng mạng (6.8.2.1–6.8.2.3) | **≥ 12 tháng** (7.8.2.1) |
| **Trình duyệt, email** (x.9) | Danh sách được phép, còn hỗ trợ, vá thường xuyên; lọc tên miền (3.9) | Như cấp 1 (4.9) | Giải pháp bảo vệ email (5.9.2.1 c) | Lọc URL; kiểm soát tiện ích mở rộng; **DMARC**; kiểm soát loại tệp đính kèm (6.9.2.3–6.9.2.6) | Chống mã độc cho máy chủ email (7.9.2.7) |
| **Mã độc** (x.10) | Phần mềm chống mã độc thời gian thực trên máy chủ, máy trạm; tắt autorun (3.10) | Như cấp 1 (4.10) | Chống khai thác lỗ hổng; **EDR** kết nối SIEM (5.10.2.3, 5.10.2.4) | Quản lý tập trung; phát hiện theo hành vi là tính năng tối thiểu (6.10.2.1 b, 6.10.2.3) | Như cấp 4 (7.10) |
| **Sao lưu, khôi phục** (x.11) | Quy định sao lưu, danh sách dữ liệu và tần suất, bảo vệ bản sao lưu, khôi phục thử "định kỳ" (3.11) | Hạ tầng lưu bản sao lưu tách biệt môi trường vận hành (4.11.2.4) | **Quy tắc 3-2-1**; sao lưu tự động, tập trung; mã hóa bản sao dữ liệu quan trọng (5.11.2.1–5.11.2.3) | Sẵn sàng cao/khôi phục nóng; **thử khôi phục 1 lần/6 tháng** (6.11.2.1 b, 6.11.2.5) | Bản dự phòng ở vị trí địa lý khác; ≥ 2 kết nối giữa hệ sao lưu chính–phụ; thử khôi phục **1 lần/quý** (7.11.2.4, 7.11.2.5) |
| **Hạ tầng mạng** (x.12) | Sơ đồ mạng; 3 nguyên tắc kiến trúc; dự phòng thiết bị mạng chính; tường lửa có IPS; VPN cho truy cập từ xa; kiểm thử trước vận hành (3.12) | **WAF**; phân vùng tối thiểu 5 vùng (máy chủ, DMZ, không dây, nội bộ, biên); giới hạn nguồn quản trị từ xa (4.12.2.2, 4.12.2.4 c) | **Dự phòng nóng + cân bằng tải**; DBF; NAC; chống DDoS; tường lửa chống mã độc; 7 vùng (thêm CSDL, quản trị); kiểm soát cả chiều ra; giám sát/nghiệm thu độc lập (5.12.2.2–5.12.2.4) | Thẩm tra thiết kế trước triển khai; **phân đoạn vi mô**; ≥ 2 hướng Internet quốc tế; data diode/cổng một chiều cho vùng lõi, OT; **ZTNA, MFA** cho truy cập từ xa; jump host; mạng quản trị riêng không nối Internet (6.12.2.1–6.12.2.6) | **Zero Trust**; **dự phòng ở vị trí cách ≥ 30 km**; AAA; QoS; cập nhật sơ đồ 1 lần/quý (7.12.2.1–7.12.2.5) |
| **Giám sát, phòng thủ** (— / — / 5.13 / 6.13 / 7.13) | — | — | Giám sát thiết bị, máy chủ, ứng dụng; **SIEM** tương quan sự kiện; thu flow mạng; tinh chỉnh ngưỡng 1 lần/6 tháng (5.13) | **Giám sát 24/7**; tinh chỉnh ngưỡng 1 lần/quý (6.13.2.1 c, 6.13.2.5) | Thiết bị chuyên dụng lọc gói/lọc ứng dụng/IPS; tinh chỉnh 1 lần/tháng (7.13.2.3, 7.13.2.6) |
| **Nhân sự** (3.13 / 4.13 / 5.14 / 6.14 / 7.14) | Có nhân sự phụ trách, cam kết bảo mật; đào tạo nhận thức 1 lần/năm; thu hồi tài sản khi nghỉ (3.13) | Các bộ phận độc lập về chuyên môn; vô hiệu hóa mọi quyền khi thôi việc (4.13.1 a, 4.13.2.2 d) | **Bộ phận riêng** cho vận hành, quản trị, bảo vệ ANM (5.14.2.1) | Đào tạo chuyên môn theo vai trò (kèm pháp luật) 1 lần/năm (6.14.2.3) | Khung năng lực, đánh giá trình độ theo vị trí (7.14.2.4) |
| **Nhà cung cấp** (3.14 / 4.14 / 5.15 / 6.15 / 7.15) | Danh sách, phân loại, phân định trách nhiệm; cập nhật 1 lần/năm (3.14) | Như cấp 1 (4.14) | Như cấp 1 (5.15) | NCC dịch vụ ANM phải đủ điều kiện kinh doanh; quy định quản lý NCC; điều khoản bảo mật trong hợp đồng; giám sát NCC; rà soát khi kết thúc hợp đồng (6.15.2.1–6.15.2.5) | Như cấp 4 (7.15) |
| **Ứng phó sự cố** (3.15 / 4.15 / **5.16** / **6.17** / **7.17**) | Người chủ chốt + người dự phòng; đầu mối báo cáo; quy trình báo cáo nội bộ và ứng phó, cập nhật 1 lần/năm (3.15) | Nội dung tối thiểu của kế hoạch ứng phó; đầu mối với cơ quan quản lý nhà nước về ANM và Liên minh ứng phó sự cố quốc gia (4.15.1, 4.15.2.1 b) | Thêm "diễn tập định kỳ" (không nêu tần suất) (5.16.1) | Kênh liên lạc chính + dự phòng; đánh giá sau sự cố; **diễn tập ≥ 1 lần/năm**; ngưỡng sự cố (6.17.2.4–6.17.2.7) | Rà ngưỡng sự cố 1 lần/6 tháng (7.17.2.7 b) |
| **Phát triển ứng dụng an toàn** (— / — / **5.17** / **6.16** / **7.16**) | — (cấp 1 không có) | — (thuê khoán nằm ở 4.3.2.3) | Quy trình SDLC an toàn; kênh tiếp nhận báo cáo lỗ hổng từ bên ngoài; nguyên tắc thiết kế an toàn; kiểm tra lỗ hổng mã nguồn, thư viện trước khi vận hành (5.17) | Phân tích nguyên nhân gốc; **SBOM** cập nhật 1 lần/quý; tách môi trường dev/test/prod; đào tạo lập trình an toàn 1 lần/năm; **pentest trước khi vận hành chính thức** (6.16.2.3–6.16.2.9) | Chỉ số thời gian khắc phục lỗ hổng; SBOM 1 lần/tháng (7.16.2.2 b, 7.16.2.4 c) |
| **Kiểm tra ANM – pentest** (— / — / 5.18 / 6.18 / 7.18) | — | — | Có chương trình pentest (tự chọn tần suất quý/nửa năm/năm/đột xuất); khắc phục và đánh giá lại sau pentest (5.18) — **không ấn định tần suất tối thiểu** | **Pentest ngoài và trong, mỗi loại ≥ 1 lần/năm** (6.18.2.2, 6.18.2.5) | **≥ 1 lần/6 tháng** mỗi loại (7.18.2.2, 7.18.2.5) |

## 2. Các ngưỡng định lượng theo cấp

Ký hiệu: *năm* = ≥ 1 lần/năm; *6T* = ≥ 1 lần/6 tháng; *quý* = ≥ 1 lần/quý; *tháng* = ≥ 1 lần/tháng; "—" = TCVN không đặt ngưỡng số ở cấp đó. Nhiều mục có thêm điều kiện "hoặc khi có thay đổi" — không ghi lại ở đây. Mọi con số đã đối chiếu với bản TCVN 14423:2026 ngày 24/09/2026.

### 2.1 Chu kỳ rà soát, kiểm tra

| Hoạt động | Cấp 1 | Cấp 2 | Cấp 3 | Cấp 4 | Cấp 5 | Mục TCVN (cấp 1→5) |
|---|---|---|---|---|---|---|
| Rà soát quy trình quản lý rủi ro | năm | năm | năm | năm | **6T** | 3.1 b · 4.1 b · 5.1.2.1 b · 6.1.2.1 b · 7.1.2.1 b |
| Nhận diện lại rủi ro | — | — | năm | 6T | 6T | 5.1.2.2 c · 6.1.2.2 c · 7.1.2.2 c |
| Đánh giá hiệu quả biện pháp kiểm soát | — | — | năm | 6T | 6T | 5.1.2.4 b · 6.1.2.4 b · 7.1.2.4 b |
| Kiểm kê tài sản phần cứng | năm | năm | năm | năm | 6T | x.2.1 c |
| Phát hiện thiết bị kết nối trái phép | năm | năm | 6T | quý | tháng | x.2.2.2 a |
| Rà quét phát hiện tài sản kết nối | — | — | — | quý | tháng | 6.2.2.3 a · 7.2.2.3 a |
| Rà soát log DHCP cập nhật danh mục | — | — | 6T | quý | tháng | x.2.2.4 b |
| Kiểm kê phần mềm | năm | năm | năm | năm | 6T | x.3.1 b |
| Rà soát danh sách phần mềm được phép | — | — | năm | năm | 6T | x.3.2.2 d |
| Rà soát phần mềm hết hỗ trợ (EOL) | — | — | — | năm | 6T | 6.3.2.3 · 7.3.2.3 |
| Phát hiện phần mềm trái phép | năm | năm | năm | 6T | tháng | 3.3.2.2 a · 4.3.2.2 a · 5.3.2.3 a · 6.3.2.4 a · 7.3.2.4 a |
| Kiểm tra phân quyền dữ liệu | năm | năm | 6T | quý | tháng | 3.4.2.1 c · 4/5/6/7.4.2.1 d |
| Rà soát quy trình và danh mục tài sản thông tin | năm | năm | năm | năm | 6T | x.4.2.1 d/e · x.4.2.2 b |
| Rà soát log truy cập dữ liệu quan trọng | — | — | — | quý | tháng | 6.4.2.9 b · 7.4.2.9 b |
| Rà soát danh sách tài khoản | năm | năm | 6T | quý | tháng | x.6.2.1 d |
| Rà soát quy trình cấp/thu hồi quyền | — | — | — | năm | 6T | 6.6.2.5 b · 7.6.2.5 b |
| Rà quét lỗ hổng — toàn hệ thống | năm | năm | 6T | 6T | quý | x.7.2.1 a–b |
| Rà quét lỗ hổng — tài sản quan trọng | — | — | — | quý | tháng | 6.7.2.1 a · 7.7.2.1 a |
| Cập nhật bản vá máy tính, di động cấp cho người dùng | tháng | tháng | tháng | tháng | tháng | x.7.2.2 |
| Rà soát nhật ký ANM | năm | năm | 6T | tháng | tháng | x.8.2.1 a |
| Tinh chỉnh ngưỡng cảnh báo (SIEM) | — | — | 6T | quý | tháng | 5.13.2.5 · 6.13.2.5 · 7.13.2.6 |
| Thử khôi phục bản sao lưu | định kỳ* | định kỳ* | định kỳ* | 6T | quý | x.11.2.1 a · 6.11.2.5 · 7.11.2.5 |
| Cập nhật sơ đồ mạng | năm | năm | năm | 6T | quý | 3.12.2.1 d · 4/5.12.2.1 e · 6/7.12.2.1 g |
| Đào tạo nhận thức ANM | năm | năm | năm | năm | năm | 3/4.13.2.2 b · 5.14.2.2 d · 6/7.14.2.2 e |
| Đào tạo chuyên môn ANM theo vai trò | — | — | — | năm | năm | x.14.2.3 b |
| Cập nhật danh sách nhà cung cấp | năm | năm | năm | năm | năm | 3/4.14.2 · 5.15.2 · 6/7.15.2.1 |
| Cập nhật quy trình báo cáo, ứng phó sự cố | năm | năm | năm | năm | năm | x.15/16/17.2.2 c, .2.3 b |
| Diễn tập ứng phó sự cố | — | — | định kỳ* | năm | năm | 5.16.1 · 6.17.2.6 · 7.17.2.6 |
| Rà soát ngưỡng sự cố | — | — | — | năm | 6T | 6.17.2.7 b · 7.17.2.7 b |
| Cập nhật danh mục thành phần bên thứ ba (SBOM) | — | — | — | quý | tháng | 6.16.2.4 c · 7.16.2.4 c |
| Đào tạo lập trình an toàn | — | — | — | năm | năm | 6.16.2.6 b · 7.16.2.6 b |
| Kiểm thử xâm nhập từ bên ngoài | — | — | theo chương trình* | năm | 6T | 5.18.2.1 b · 6.18.2.2 a · 7.18.2.2 a |
| Kiểm thử xâm nhập từ bên trong | — | — | theo chương trình* | năm | 6T | 5.18.2.1 b · 6.18.2.5 a · 7.18.2.5 a |

\* TCVN chỉ nêu "định kỳ" hoặc để tổ chức tự chọn (với pentest cấp 3: quý, nửa năm, năm hoặc đột xuất) — tổ chức phải tự ấn định tần suất trong quy chế/phương án. Khuyến nghị tối thiểu 1 lần/năm cho cấp 3.

### 2.2 Thời gian lưu, thời hạn, giới hạn

| Chỉ tiêu | Cấp 1 | Cấp 2 | Cấp 3 | Cấp 4 | Cấp 5 | Mục TCVN |
|---|---|---|---|---|---|---|
| Dung lượng lưu nhật ký tối thiểu | không nêu | 1 tháng | 3 tháng | 6 tháng | 12 tháng | 4.8.2.1 a · 5.8.2.1 a · 6.8.2.1 a · 7.8.2.1 a |
| Lưu dữ liệu camera phòng máy chủ | — | không nêu | 3 tháng | 6 tháng | 12 tháng | Phụ lục A.3.2 b · A.4.2 b · A.5.2 b |
| Vô hiệu hóa tài khoản không hoạt động | 45 ngày | 45 ngày | 45 ngày | 45 ngày | 45 ngày | x.6.2.3 |
| Đổi mật khẩu tài khoản quản trị | 2 tháng | 2 tháng | 2 tháng + không trùng 10 mật khẩu gần nhất | như cấp 3 | như cấp 3 | x.6.2.2 b |
| Độ dài mật khẩu (gợi ý) | ≥ 8 ký tự nếu có MFA; ≥ 14 ký tự, đủ 4 loại nếu không MFA — mọi cấp | | | | | x.6.2.2 b |
| Tự khóa phiên (gợi ý) | máy người dùng 15 phút; phiên quản trị 5 phút; di động 5 phút | + phần mềm nghiệp vụ dữ liệu quan trọng 15 phút | như cấp 2 | như cấp 2 | như cấp 2 | x.5.2.2 a |
| Khóa sau đăng nhập sai (gợi ý) | laptop, điện thoại 10 lần; khóa 12 giờ–30 ngày | + phần mềm nghiệp vụ dữ liệu quan trọng 5 lần | như cấp 2 | như cấp 2 | như cấp 2 | x.5.2.2 a |
| Số lớp mã hóa dữ liệu quan trọng khi truyền | — | — | 1 (mã hóa hoặc tương đương) | ≥ 2 | ≥ 2 | 5.4.2.4 b · 6.4.2.4 c · 7.4.2.4 d |
| Số hướng Internet quốc tế (hệ thống buộc phải nối Internet) | — | — | — | ≥ 2, từ nhà mạng trong nước khác hạ tầng | ≥ 2 | 6.12.2.2 a · 7.12.2.2 a |
| Khoảng cách site dự phòng | — | — | — | — | ≥ 30 km | 7.12.2.2 a |
| Kết nối giữa hệ sao lưu chính–phụ | — | — | — | — | ≥ 2 | 7.11.2.4 c |
| Số yếu tố xác thực vào phòng máy chủ | — | — | — | — | ≥ 2 | Phụ lục A.5.2 a, A.5.3 d |
| Giám sát ANM 24/7 | — | — | — | có | có | 6.13.2.1 c · 7.13.2.1 c |

### 2.3 Công nghệ/giải pháp bắt đầu được yêu cầu từ cấp nào

| Giải pháp | Từ cấp | Mục TCVN đầu tiên |
|---|---|---|
| MFA cho truy cập từ ngoài, bên thứ ba, Internet và tài khoản quản trị | 1 | 3.6.2.4 |
| VPN (hoặc tương đương) cho truy cập từ xa | 1 | 3.12.2.5 |
| Tường lửa có IPS; lọc tên miền (DNS filtering) | 1 | 3.12.2.2; 3.9.2.2 |
| WAF (nếu có ứng dụng web) | 2 | 4.12.2.2 a |
| Phân vùng mạng tối thiểu (có DMZ) | 2 | 4.12.2.2 b |
| SIEM, EDR, máy chủ vá tập trung, sao lưu 3-2-1, dự phòng nóng, DBF, NAC, chống DDoS | 3 | 5.8.2.1; 5.10.2.4; 5.7.2.2; 5.11.2.3; 5.12.2.2 |
| Chữ ký số khi trao đổi dữ liệu quan trọng | 3 | 5.4.2.8 |
| Phương án chống thất thoát dữ liệu (DLP) | 3 | 5.12.2.2 a (cấp 4–5 chuyển thành giải pháp DLP riêng ở 6.4.2.8, 7.4.2.8) |
| PAM, giải pháp DLP, DMARC, ZTNA, phân đoạn vi mô, data diode/cổng một chiều, SBOM, giám sát 24/7 | 4 | 6.6.2.3; 6.4.2.8; 6.9.2.5; 6.12.2.5; 6.12.2.1 b; 6.12.2.2 a; 6.16.2.4; 6.13.2.1 c |
| Zero Trust, AAA, QoS, HSM/thiết bị ký số chuyên dụng, MDM, dự phòng địa lý ≥ 30 km | 5 | 7.12.2.1 b; 7.12.2.3; 7.12.2.5 f; 7.4.2.4 f; 7.5.2.6 b; 7.12.2.2 a |

## 3. Chênh lệch với văn bản pháp luật khác

Khi con số TCVN khác nghĩa vụ trong luật/nghị định, **áp dụng mức nghiêm ngặt hơn** nếu tổ chức thuộc đối tượng của văn bản đó.

| Chủ đề | TCVN 14423:2026 | Văn bản pháp luật | Khuyến nghị |
|---|---|---|---|
| Thời gian lưu nhật ký | Cấp 1 không nêu; cấp 2: 1 tháng; cấp 3: 3 tháng; cấp 4: 6 tháng; cấp 5: 12 tháng (mục 4–7 .8.2.1 a) | Doanh nghiệp cung cấp dịch vụ trên mạng viễn thông, Internet, dịch vụ gia tăng trên không gian mạng: nhật ký hệ thống truy xuất được **≥ 12 tháng** (NĐ 333 Đ16.1, Đ16.6.c); nhật ký phục vụ điều tra theo Luật 116 Đ25.2.b lưu **≥ 12 tháng** (NĐ 333 Đ20.3) | Nếu tổ chức cung cấp dịch vụ trực tuyến: lưu log ≥ 12 tháng cho mọi cấp. Các tổ chức khác: vẫn nên cân nhắc 12 tháng cho log truy cập, đăng nhập để phục vụ điều tra |
| Báo cáo sự cố ra bên ngoài | Chỉ yêu cầu quy trình báo cáo nội bộ, đầu mối liên lạc (x.15/16/17.2.1–2.2) | Thông báo ban đầu sự cố nghiêm trọng trong 24 giờ; báo cáo nguyên nhân, phạm vi, khắc phục trong 72 giờ; báo cáo ngay nếu có dấu hiệu xâm phạm an ninh quốc gia (NĐ 331 Đ31.2.d) | Đưa mốc 24h/72h vào quy trình ứng phó của mọi cấp |
| Diễn tập | Cấp 1–2 không yêu cầu; cấp 3 "định kỳ"; cấp 4–5 ≥ 1 lần/năm | Chủ quản chỉ đạo diễn tập trong tổ chức và tham gia diễn tập quốc gia, quốc tế do Bộ Công an tổ chức (NĐ 331 Đ31.3) | Mọi cấp nên có kế hoạch diễn tập, tối thiểu 1 lần/năm |
| An ninh vật lý | Có Phụ lục A theo 5 cấp | Không thuộc yêu cầu cơ bản theo cấp độ (NĐ 331 Đ30.2) | Xem [an-ninh-vat-ly-phu-luc-a.md](an-ninh-vat-ly-phu-luc-a.md) |
| Đánh giá độc lập | Cấp 3 trở lên: có đơn vị/bộ phận độc lập giám sát thử nghiệm, nghiệm thu (5.12.2.3 d) | Tự đánh giá nội bộ phải do bộ phận độc lập với đơn vị vận hành thực hiện; cấp 5, HTTT quan trọng về an ninh quốc gia và một số trường hợp khác (xem dưới bảng) phải do tổ chức chuyên môn được cấp phép/chỉ định (NĐ 331 Đ31.2.c) | Tổ chức bộ phận đánh giá độc lập ở mọi cấp |

Các trường hợp bắt buộc đánh giá bởi tổ chức chuyên môn (NĐ 331 Đ31.2.c): HTTT cấp 5 hoặc HTTT quan trọng về an ninh quốc gia; khi có sự cố nghiêm trọng hoặc nguy cơ cao ảnh hưởng an ninh quốc gia, trật tự, an toàn xã hội; khi thay đổi lớn về chức năng, phạm vi, kiến trúc, công nghệ; khi có dấu hiệu tự đánh giá không trung thực, đầy đủ; khi cơ quan có thẩm quyền yêu cầu hoặc chủ quản tự tổ chức.
