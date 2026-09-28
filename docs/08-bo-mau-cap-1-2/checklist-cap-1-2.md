# Bảng tính quản lý ANM cho HTTT cấp độ 1–2 (nguồn Excel)

> **Căn cứ:** TCVN 14423:2026 mục 3, 4; NĐ 331/2026/NĐ-CP Đ10.2, Đ11, Đ12, Đ22.4.a, Đ28.5.a, Đ31.2.c–d, Đ31.3, Đ35, Đ36; Mẫu số 08 NĐ 331; NĐ 333/2026/NĐ-CP Đ16.6.c; Luật 91/2025/QH15 Đ19, Đ20, Đ25, Đ32, Đ38; NĐ 356/2025/NĐ-CP Đ3, Đ4 · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

> **Bản quyền:** Cột "Yêu cầu" là diễn giải ngắn bằng lời của người soạn, không phải nguyên văn TCVN 14423:2026; khi lập hồ sơ phải đối chiếu bản chính thức (mua tại VSQI).

File này là **nguồn dữ liệu cho một file Excel** gồm 6 sheet (A–F), không xuất sang Word. Mỗi mục `## A. …` là một sheet; dòng đầu bảng là tiêu đề cột. Dữ liệu mẫu theo kịch bản Công ty cổ phần Giải pháp Công nghệ TURBO (4 HTTT nội bộ, 3 hệ thống cấp 2 và 1 hệ thống cấp 1) — thay bằng dữ liệu của tổ chức.

**Cách dùng:**

1. **Sheet A** — danh mục HTTT: một dòng cho mỗi hệ thống trong cùng một hồ sơ đề xuất cấp độ (NĐ 331 Đ22.4.a). Cột "Tình trạng phê duyệt" dùng đúng giá trị chuẩn của Mẫu 08 cột (6).
2. **Sheet B** — checklist hợp nhất TCVN mục 3 (cấp 1) và mục 4 (cấp 2): hệ thống cấp 1 chỉ đánh giá dòng có "C1+C2" hoặc "chỉ C1…"; hệ thống cấp 2 đánh giá dòng "C1+C2" và "chỉ C2". Dòng ghi "(C2: …)" là yêu cầu chung nhưng cấp 2 chặt hơn. Hai dòng "chỉ C1 (khuyến nghị giữ ở C2)" là yêu cầu cấp 1 mà mục 4 không nhắc lại — nên giữ như thực hành tốt. Khi xuất Excel nên thêm cột Kết quả (Đạt/Một phần/Chưa/N/A) cho từng HTTT. Bản checklist riêng từng cấp: [checklist-cap-1.md](../03-yeu-cau-theo-cap-do/checklist-cap-1.md), [checklist-cap-2.md](../03-yeu-cau-theo-cap-do/checklist-cap-2.md).
3. **Sheet C** — lịch định kỳ: tần suất tối thiểu theo TCVN/NĐ; lịch cụ thể trong năm lập ở `09-ke-hoach-anm-nam.md`.
4. **Sheet D** — sổ sự cố: ghi mọi sự cố và sự kiện, kể cả đã chặn; nguồn số liệu cho báo cáo năm. Quy trình: `08-quy-trinh-su-co-rut-gon.md`.
5. **Sheet E** — kế hoạch khắc phục: mỗi dòng "Chưa/Một phần" ở sheet B thành một dòng. Hai cột cuối tổng hợp lên Mẫu 08 NĐ 331: cột (10) "Đã triển khai đầy đủ PA BĐANM" chỉ ghi "Đã triển khai đầy đủ" khi mọi dòng của HTTT đó đã hoàn thành; cột (11) ghi hạn muộn nhất còn mở. Đây cũng là "kế hoạch hoặc lộ trình hoàn thiện tiêu chí, yêu cầu chưa đáp ứng" mà báo cáo năm phải nêu (NĐ 331 Đ36.10).
6. **Sheet F** — kiểm kê dữ liệu cá nhân: một dòng cho mỗi quy trình/HTTT có xử lý DLCN. Dùng làm đầu vào cho thông báo xử lý DLCN, phụ lục hợp đồng với bên xử lý, hồ sơ DPIA, hồ sơ chuyển DLCN xuyên biên giới, và để kết luận doanh nghiệp nhỏ còn được miễn trừ hay không (Luật 91 Đ38.2–38.3). Phân tích: [bao-ve-du-lieu-ca-nhan-cap-1-2.md](bao-ve-du-lieu-ca-nhan-cap-1-2.md).

## A. Danh mục hệ thống thông tin

| Mã | Tên HTTT | Phạm vi, thông tin xử lý | Đơn vị vận hành | Cấp độ | Tiêu chí (NĐ 331) | Tình trạng phê duyệt (Mẫu 08 cột 6) | QĐ phê duyệt |
|---|---|---|---|---|---|---|---|
| HT-02-INTRANET | Cổng thông tin nội bộ (Intranet) – văn phòng điện tử, thư điện tử nội bộ | Nội bộ; văn bản điều hành, thông tin cá nhân nhân viên; thư điện tử trên dịch vụ đám mây | Phòng Vận hành hệ thống | 2 | Đ12.1 | Đã được phê duyệt | 03/2026/QĐ-PANM ngày 26/10/2026 |
| HT-03-ERP | Hệ thống kế toán – nhân sự nội bộ (ERP) | Nội bộ; dữ liệu kế toán, tiền lương, hồ sơ nhân sự | Phòng Vận hành hệ thống | 2 | Đ12.1 | Đã được phê duyệt | 03/2026/QĐ-PANM ngày 26/10/2026 |
| HT-04-LAN | Hạ tầng mạng nội bộ trụ sở (LAN, Wi-Fi, Active Directory) | Hạ tầng phục vụ một tổ chức; tài khoản nhân viên | Phòng Vận hành hệ thống | 2 | Đ12.3 | Đã được phê duyệt | 03/2026/QĐ-PANM ngày 26/10/2026 |
| HT-05-BANGTIN | Hệ thống màn hình bảng tin điện tử tại sảnh | Chỉ hiển thị thông tin công khai; không có tài khoản người dùng | Phòng Vận hành hệ thống | 1 | Đ11.1 | Đã được phê duyệt | 03/2026/QĐ-PANM ngày 26/10/2026 |

## B. Checklist TCVN 14423:2026 mục 3 (cấp 1) và mục 4 (cấp 2)

| Mã | Nhóm | Yêu cầu (diễn giải ngắn) | Mục TCVN cấp 1 | Mục TCVN cấp 2 | Áp dụng | Bằng chứng gợi ý |
|---|---|---|---|---|---|---|
| C12-01-01 | 1. Rủi ro | Ban hành quy định/quy trình quản lý rủi ro đủ 4 bước: nhận diện, phân tích, đánh giá, xử lý | 3.1 a) | 4.1 a) | C1+C2 | Quy trình QLRR đã ký ban hành |
| C12-01-02 | 1. Rủi ro | Rà soát quy trình QLRR và tài liệu kèm theo ≥ 1 lần/năm hoặc khi tổ chức thay đổi | 3.1 b) | 4.1 b) | C1+C2 | Biên bản rà soát, lịch sử phiên bản |
| C12-02-01 | 2. Tài sản phần cứng | Danh mục toàn bộ phần cứng của HTTT, kể cả thiết bị bên ngoài có kết nối vào; xác định tài sản cần giám sát | 3.2.1 a) | 4.2.1 a) | C1+C2 | Danh mục tài sản phần cứng |
| C12-02-02 | 2. Tài sản phần cứng | Phát hiện tài sản vô chủ/trái phép để loại bỏ hoặc đưa vào quản lý | 3.2.1 b) | 4.2.1 b) | C1+C2 | Báo cáo rà soát tài sản |
| C12-02-03 | 2. Tài sản phần cứng | Kiểm kê, cập nhật danh mục ≥ 1 lần/năm (C1: phần cứng; C2: mọi tài sản của HTTT) | 3.2.1 c) | 4.2.1 c) | C1+C2 | Biên bản kiểm kê |
| C12-02-04 | 2. Tài sản phần cứng | Danh mục phủ mọi thiết bị lưu trữ/xử lý dữ liệu: đầu cuối, di động, lưu trữ ngoài, văn phòng, mạng, OT/IoT, máy chủ vật lý/ảo/cloud | 3.2.2.1 a) | 4.2.2.1 a) | C1+C2 | Danh mục tài sản (CMDB/bảng tính) |
| C12-02-05 | 2. Tài sản phần cứng | Trường tối thiểu: tên, IP tĩnh, MAC/serial, hạn hỗ trợ của hãng, vị trí địa lý và trong mạng, mục đích, tình trạng; gán người chịu trách nhiệm | 3.2.2.1 b) | 4.2.2.1 b) | C1+C2 | Danh mục có đủ trường, cột người phụ trách |
| C12-02-06 | 2. Tài sản phần cứng | Đăng ký thiết bị di động được phép kết nối; quy định trách nhiệm cá nhân khi dùng cho công việc | 3.2.2.1 c) | 4.2.2.1 c) | C1+C2 | Sổ đăng ký thiết bị di động, quy định sử dụng |
| C12-02-07 | 2. Tài sản phần cứng | Quy trình phát hiện, xử lý thiết bị lạ kết nối trái phép, thực hiện ≥ 1 lần/năm | 3.2.2.2 a) | 4.2.2.2 a) | C1+C2 | Quy trình + kết quả các lần rà soát |
| C12-02-08 | 2. Tài sản phần cứng | Xử lý thiết bị trái phép bằng cách gỡ bỏ, từ chối kết nối hoặc cách ly | 3.2.2.2 b) | 4.2.2.2 b) | C1+C2 | Nhật ký xử lý |
| C12-02-09 | 2. Tài sản phần cứng | Có phương án xóa sạch dữ liệu khi chuyển giao hoặc đổi mục đích sử dụng phần cứng | — | 4.2.2.3 | chỉ C2 | Quy trình xóa dữ liệu, biên bản xóa |
| C12-03-01 | 3. Tài sản phần mềm | Quản lý danh mục phần mềm; chỉ phần mềm đã phê duyệt mới được cài và dùng | 3.3.1 a) | 4.3.1 a) | C1+C2 | Danh mục phần mềm, quy trình phê duyệt |
| C12-03-02 | 3. Tài sản phần mềm | Kiểm kê, cập nhật danh mục phần mềm ≥ 1 lần/năm | 3.3.1 b) | 4.3.1 b) | C1+C2 | Biên bản kiểm kê phần mềm |
| C12-03-03 | 3. Tài sản phần mềm | Lập danh mục phần mềm đang cài trên các thiết bị thuộc HTTT | 3.3.2.1 a) | 4.3.2.1 a) | C1+C2 | Danh mục phần mềm (xuất từ công cụ inventory) |
| C12-03-04 | 3. Tài sản phần mềm | Trường tối thiểu: tên, mục đích, hạn hỗ trợ, phạm vi, chủ quản, bản quyền, phiên bản, hệ thống thành phần; gán trách nhiệm | 3.3.2.1 b) | 4.3.2.1 b) | C1+C2 | Danh mục có đủ trường |
| C12-03-05 | 3. Tài sản phần mềm | Quy trình phát hiện, xử lý phần mềm trái phép ≥ 1 lần/năm | 3.3.2.2 a) | 4.3.2.2 a) | C1+C2 | Quy trình + kết quả rà soát |
| C12-03-06 | 3. Tài sản phần mềm | Phần mềm trái phép nhưng cần thiết đưa vào danh sách ngoại lệ, kèm biện pháp giảm thiểu | 3.3.2.2 b) | 4.3.2.2 b) | C1+C2 | Danh sách ngoại lệ có biện pháp kiểm soát |
| C12-03-07 | 3. Tài sản phần mềm | Lập kế hoạch gỡ sớm phần mềm trái phép ngoài danh sách ngoại lệ | 3.3.2.2 c) | 4.3.2.2 c) | C1+C2 | Kế hoạch gỡ bỏ, bằng chứng đã gỡ |
| C12-03-08 | 3. Tài sản phần mềm | Phần mềm thuê khoán: có hợp đồng, cam kết bảo mật với bên phát triển | — | 4.3.2.3 a) | chỉ C2 | Hợp đồng, NDA |
| C12-03-09 | 3. Tài sản phần mềm | Yêu cầu bàn giao mã nguồn; nếu không được thì có chứng chỉ đánh giá độc lập hoặc kiểm thử xâm nhập + cam kết trách nhiệm pháp lý | — | 4.3.2.3 b) | chỉ C2 | Biên bản bàn giao mã nguồn/chứng chỉ/cam kết |
| C12-04-01 | 4. Tài sản thông tin | Quy định quản lý tài sản thông tin: danh mục, mức nhạy cảm, chủ sở hữu, cách xử lý, thời hạn lưu, yêu cầu tiêu hủy | 3.4.2.1 a) | 4.4.2.1 a) | C1+C2 | Quy định quản lý tài sản thông tin |
| C12-04-02 | 4. Tài sản thông tin | Phân loại mức nhạy cảm (gợi ý 3 mức: công khai, nội bộ, hạn chế truy cập) | — | 4.4.2.1 b) | chỉ C2 | Bảng phân loại, nhãn dữ liệu |
| C12-04-03 | 4. Tài sản thông tin | Quy trình yêu cầu truy cập, thêm, sửa, xóa dữ liệu | 3.4.2.1 b) | 4.4.2.1 c) | C1+C2 | Quy trình + phiếu yêu cầu |
| C12-04-04 | 4. Tài sản thông tin | Kiểm tra phân quyền dữ liệu ≥ 1 lần/năm | 3.4.2.1 c) | 4.4.2.1 d) | C1+C2 | Biên bản rà soát phân quyền |
| C12-04-05 | 4. Tài sản thông tin | Rà soát quy trình quản lý tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | 3.4.2.1 d) | 4.4.2.1 e) | C1+C2 | Lịch sử phiên bản quy trình |
| C12-04-06 | 4. Tài sản thông tin | Lập danh mục tài sản thông tin theo quy trình đã ban hành | 3.4.2.2 a) | 4.4.2.2 a) | C1+C2 | Danh mục tài sản thông tin |
| C12-04-07 | 4. Tài sản thông tin | Cập nhật danh mục tài sản thông tin ≥ 1 lần/năm hoặc khi thay đổi | 3.4.2.2 b) | 4.4.2.2 b) | C1+C2 | Ngày cập nhật danh mục |
| C12-04-08 | 4. Tài sản thông tin | Ma trận quyền truy cập của từng tài khoản/người dùng với từng loại tài sản thông tin | 3.4.2.3 | 4.4.2.3 | C1+C2 | Ma trận phân quyền (ACL) |
| C12-04-09 | 4. Tài sản thông tin | Mã hóa khi lưu: C1 thông tin xác thực; C2 thêm dữ liệu không công khai (hệ thống truy xuất lớn được dùng biện pháp tương đương) | 3.4.2.4 | 4.4.2.4 | C1+C2 | Cấu hình mã hóa (DB/đĩa/hash mật khẩu) |
| C12-05-01 | 5. Cấu hình an toàn | Ban hành quy định/quy trình cấu hình an toàn cho phần cứng và phần mềm | 3.5.2.1 a) | 4.5.2.1 a) | C1+C2 | Quy trình cấu hình an toàn |
| C12-05-02 | 5. Cấu hình an toàn | Tài liệu cấu hình chuẩn/hardening; giao thức an toàn; tường lửa host (C2: thêm chống tự động đăng nhập trên tài sản xử lý dữ liệu quan trọng) | 3.5.2.1 b) | 4.5.2.1 b) | C1+C2 | Baseline cấu hình (vd theo CIS), ảnh chụp cấu hình |
| C12-05-03 | 5. Cấu hình an toàn | Tắt giao thức mạng không an toàn và dịch vụ không dùng | — | 4.5.2.1 c) | chỉ C2 | Kết quả quét cổng/dịch vụ |
| C12-05-04 | 5. Cấu hình an toàn | Rà soát quy định và tài liệu cấu hình ≥ 1 lần/năm hoặc khi thay đổi | 3.5.2.1 c) | 4.5.2.1 d) | C1+C2 | Lịch sử phiên bản |
| C12-05-05 | 5. Cấu hình an toàn | Tự khóa phiên theo đánh giá rủi ro — gợi ý: máy người dùng ≤ 15'; phiên quản trị, di động ≤ 5' (C2: thêm phần mềm nghiệp vụ dữ liệu quan trọng ≤ 15') | 3.5.2.2 a) | 4.5.2.2 a) | C1+C2 | GPO/MDM/cấu hình timeout |
| C12-05-06 | 5. Cấu hình an toàn | Khóa khi đăng nhập sai — gợi ý: laptop, điện thoại ≤ 10 lần; khóa 12 giờ–30 ngày (C2: thêm phần mềm nghiệp vụ dữ liệu quan trọng ≤ 5 lần) | 3.5.2.2 a) | 4.5.2.2 a) | C1+C2 | Cấu hình lockout |
| C12-05-07 | 5. Cấu hình an toàn | Có cơ chế mở khóa khẩn cấp cho quản trị viên/tài khoản đặc quyền | 3.5.2.2 b) | 4.5.2.2 b) | C1+C2 | Quy trình break-glass |
| C12-06-01 | 6. Tài khoản, quyền truy cập | Có quy trình, công cụ phân quyền và quản lý quyền truy cập cho 4 loại tài khoản (quản trị, tác nghiệp, kỹ thuật, dịch vụ) | 3.6.1 a) | 4.6.1 a) | C1+C2 | Quy trình quản lý tài khoản, công cụ quản lý tập trung |
| C12-06-02 | 6. Tài khoản, quyền truy cập | Quy trình tạo, gán, quản lý, thu hồi đặc quyền và quyền truy cập; quyền nhất quán theo vai trò, chỉ đủ cho dữ liệu, tài sản cần thiết | 3.6.1 b) | 4.6.1 b) | C1+C2 | Quy trình cấp/thu hồi quyền, phiếu yêu cầu đã duyệt |
| C12-06-03 | 6. Tài khoản, quyền truy cập | Ghi log và giám sát hoạt động của tài khoản người dùng | 3.6.1 c) | 4.6.1 c) | C1+C2 | Cấu hình audit log đăng nhập |
| C12-06-04 | 6. Tài khoản, quyền truy cập | Danh sách mọi tài khoản trên phần cứng và phần mềm | 3.6.2.1 a) | 4.6.2.1 a) | C1+C2 | Danh sách tài khoản |
| C12-06-05 | 6. Tài khoản, quyền truy cập | Danh sách phân loại tài khoản (C1: đủ 4 loại; C2: tối thiểu quản trị, tác nghiệp, kỹ thuật) | 3.6.2.1 b) | 4.6.2.1 b) | C1+C2 | Danh sách tài khoản phân loại |
| C12-06-06 | 6. Tài khoản, quyền truy cập | Trường tối thiểu: loại, tên, trạng thái, hệ thống, người quản lý, phòng ban, ngày kích hoạt/vô hiệu; không còn tài khoản không hợp lệ | 3.6.2.1 c) | 4.6.2.1 c) | C1+C2 | Danh sách có đủ trường |
| C12-06-07 | 6. Tài khoản, quyền truy cập | Rà soát danh sách tài khoản ≥ 1 lần/năm | 3.6.2.1 d) | 4.6.2.1 d) | C1+C2 | Biên bản rà soát |
| C12-06-08 | 6. Tài khoản, quyền truy cập | Cấu hình bắt đổi mật khẩu mặc định; quy tắc độ dài, loại ký tự (C2: thêm thời hạn đổi và thời hạn hiệu lực mật khẩu) | 3.6.2.2 a) | 4.6.2.2 a) | C1+C2 | Chính sách mật khẩu (GPO/IdP) |
| C12-06-09 | 6. Tài khoản, quyền truy cập | Gợi ý: mật khẩu riêng cho từng tài sản hoặc xác thực tập trung; bắt đổi ở lần đăng nhập đầu | 3.6.2.2 b) | 4.6.2.2 b) | C1+C2 | Cấu hình IdP/SSO |
| C12-06-10 | 6. Tài khoản, quyền truy cập | Gợi ý độ dài: ≥ 8 ký tự nếu có MFA; ≥ 14 ký tự gồm đủ 4 loại ký tự nếu không có MFA | 3.6.2.2 b) | 4.6.2.2 b) | C1+C2 | Chính sách mật khẩu |
| C12-06-11 | 6. Tài khoản, quyền truy cập | Tài khoản quản trị đổi mật khẩu ít nhất 2 tháng/lần | 3.6.2.2 b) | 4.6.2.2 b) | C1+C2 | Chính sách hết hạn mật khẩu tài khoản quản trị |
| C12-06-12 | 6. Tài khoản, quyền truy cập | Đổi hoặc vô hiệu hóa tài khoản mặc định (root, administrator, tài khoản cài sẵn của hãng) | 3.6.2.3 | 4.6.2.3 | C1+C2 | Danh sách tài khoản mặc định đã xử lý |
| C12-06-13 | 6. Tài khoản, quyền truy cập | Tách biệt quản lý 4 loại tài khoản | 3.6.2.3 | 4.6.2.3 | C1+C2 | Quy định + danh sách phân loại |
| C12-06-14 | 6. Tài khoản, quyền truy cập | Mỗi tài khoản gắn một người; dùng chung phải được phê duyệt và truy vết được người dùng từng thời điểm | 3.6.2.3 | 4.6.2.3 | C1+C2 | Phê duyệt tài khoản dùng chung, sổ theo dõi |
| C12-06-15 | 6. Tài khoản, quyền truy cập | Xóa/vô hiệu hóa tài khoản không hoạt động quá 45 ngày hoặc ngay khi đổi nhân sự | 3.6.2.3 | 4.6.2.3 | C1+C2 | Báo cáo tài khoản inactive |
| C12-06-16 | 6. Tài khoản, quyền truy cập | Rà soát quy định quản lý tài khoản ≥ 1 lần/năm hoặc khi thay đổi | 3.6.2.3 | 4.6.2.3 | C1+C2 | Lịch sử phiên bản |
| C12-06-17 | 6. Tài khoản, quyền truy cập | Áp dụng đặc quyền tối thiểu và phân tách nhiệm vụ cho mọi loại tài khoản | 3.6.2.4 | 4.6.2.4 | C1+C2 | Ma trận vai trò – quyền |
| C12-06-18 | 6. Tài khoản, quyền truy cập | Tài liệu hóa quyền cần thiết theo chức danh, bộ phận | 3.6.2.4 | 4.6.2.4 | C1+C2 | Ma trận quyền theo chức danh |
| C12-06-19 | 6. Tài khoản, quyền truy cập | MFA cho truy cập từ ngoài tổ chức, từ đối tác/bên thứ ba, từ Internet và cho tài khoản quản trị | 3.6.2.4 | 4.6.2.4 | C1+C2 | Cấu hình MFA |
| C12-06-20 | 6. Tài khoản, quyền truy cập | Rà soát quy định quản lý truy cập ≥ 1 lần/năm hoặc khi thay đổi | 3.6.2.4 | 4.6.2.4 | C1+C2 | Lịch sử phiên bản |
| C12-07-01 | 7. Lỗ hổng bảo mật | Có kế hoạch đánh giá, theo dõi lỗ hổng thường xuyên để khắc phục và giảm nguy cơ bị tấn công | 3.7.1 a) | 4.7.1 a) | C1+C2 | Kế hoạch đánh giá lỗ hổng (phạm vi, lịch rà quét) |
| C12-07-02 | 7. Lỗ hổng bảo mật | Theo dõi thông tin mối đe dọa, lỗ hổng mới từ nhiều nguồn | 3.7.1 b) | 4.7.1 b) | C1+C2 | Nguồn tin đăng ký (NCSC, CVE, hãng…) |
| C12-07-03 | 7. Lỗ hổng bảo mật | Quy trình quản lý lỗ hổng: rà quét phát hiện, chấm mức nghiêm trọng, chia sẻ/tiếp nhận báo cáo, khắc phục theo ưu tiên và kiểm tra lại | 3.7.2.1 a) | 4.7.2.1 a) | C1+C2 | Quy trình quản lý lỗ hổng |
| C12-07-04 | 7. Lỗ hổng bảo mật | Rà soát quy trình và thực hiện rà quét lỗ hổng ≥ 1 lần/năm hoặc khi thay đổi | 3.7.2.1 b) | 4.7.2.1 b) | C1+C2 | Báo cáo rà quét, biên bản rà soát |
| C12-07-05 | 7. Lỗ hổng bảo mật | Có phương án vá cho toàn bộ phần cứng, phần mềm của HTTT | — | 4.7.2.2 | chỉ C2 | Kế hoạch vá |
| C12-07-06 | 7. Lỗ hổng bảo mật | Trước khi vá hệ thống có dữ liệu quan trọng: đánh giá tác động, thử nghiệm, có phương án khôi phục | — | 4.7.2.2 | chỉ C2 | Biên bản thử nghiệm bản vá |
| C12-07-07 | 7. Lỗ hổng bảo mật | Kiểm tra, cập nhật bản vá HĐH và ứng dụng cho máy tính, di động cấp cho người dùng ≥ 1 lần/tháng | 3.7.2.2 | 4.7.2.2 | C1+C2 | Báo cáo tuân thủ bản vá hằng tháng |
| C12-07-08 | 7. Lỗ hổng bảo mật | Giám sát để phát hiện lỗ hổng mới và vá kịp thời | 3.7.2.2 | 4.7.2.2 | C1+C2 | Nhật ký vá |
| C12-08-01 | 8. Nhật ký ANM | Quy định quản lý log: cách ghi, thu thập, kiểm tra, lưu trữ | 3.8.2.1 a) | 4.8.2.1 a) | C1+C2 | Quy định quản lý nhật ký |
| C12-08-02 | 8. Nhật ký ANM | Nguồn log tối thiểu — C1: truy cập phần cứng, truy cập phần mềm, cảnh báo thiết bị bảo mật; C2: truy cập hệ thống, ứng dụng, cảnh báo thiết bị bảo mật | 3.8.2.1 a) | 4.8.2.1 a) | C1+C2 | Danh sách nguồn log |
| C12-08-03 | 8. Nhật ký ANM | Log truy cập có nguồn, đích, tài khoản, thời điểm, hành vi; log cảnh báo có tên, thiết bị, mức độ, nguồn, loại, thời điểm | — | 4.8.2.1 a) | chỉ C2 | Mẫu bản ghi log |
| C12-08-04 | 8. Nhật ký ANM | Đồng bộ thời gian qua máy chủ thời gian (NTP) cho mọi thành phần tham gia giám sát | 3.8.2.1 a) | 4.8.2.1 a) | C1+C2 | Cấu hình NTP |
| C12-08-05 | 8. Nhật ký ANM | Bảo đảm dung lượng lưu log tối thiểu 1 tháng | — | 4.8.2.1 a) | chỉ C2 | Cấu hình retention, ảnh chụp dung lượng |
| C12-08-06 | 8. Nhật ký ANM | Rà soát log ANM ≥ 1 lần/năm | 3.8.2.1 a) | 4.8.2.1 a) | C1+C2 | Biên bản rà soát log |
| C12-08-07 | 8. Nhật ký ANM | Kiểm tra, cập nhật quy trình quản lý log ≥ 1 lần/năm hoặc khi thay đổi | 3.8.2.1 b) | 4.8.2.1 b) | C1+C2 | Lịch sử phiên bản |
| C12-09-01 | 9. Trình duyệt, thư điện tử | Danh sách trình duyệt và dịch vụ email được phép | 3.9.2.1 a) | 4.9.2.1 a) | C1+C2 | Danh sách được phép |
| C12-09-02 | 9. Trình duyệt, thư điện tử | Chỉ dùng phiên bản còn được hãng hỗ trợ | 3.9.2.1 b) | 4.9.2.1 b) | C1+C2 | Báo cáo phiên bản |
| C12-09-03 | 9. Trình duyệt, thư điện tử | Cập nhật bản vá trình duyệt, email thường xuyên (hoặc biện pháp tương đương) | 3.9.2.1 c) | 4.9.2.1 c) | C1+C2 | Báo cáo bản vá |
| C12-09-04 | 9. Trình duyệt, thư điện tử | Dùng dịch vụ lọc tên miền (DNS filtering) chặn tên miền giả mạo, độc hại | 3.9.2.2 | 4.9.2.2 | C1+C2 | Cấu hình DNS filtering |
| C12-10-01 | 10. Phòng chống mã độc | Quy định phòng, chống, khắc phục mã độc | 3.10.1 a) | 4.10.1 a) | C1+C2 | Quy định phòng chống mã độc |
| C12-10-02 | 10. Phòng chống mã độc | Chống mã độc cho mọi tài sản và điểm kết nối (trong và ngoài); tự quét, chặn, cập nhật mẫu, gắn với quy trình lỗ hổng/sự cố | 3.10.1 b) | 4.10.1 b) | C1+C2 | Kiến trúc giải pháp |
| C12-10-03 | 10. Phòng chống mã độc | Cài và duy trì phần mềm chống mã độc (hoặc tương đương) trên máy chủ, máy người dùng | 3.10.2.1 a) | 4.10.2.1 a) | C1+C2 | Báo cáo độ phủ agent |
| C12-10-04 | 10. Phòng chống mã độc | Tính năng tối thiểu: bảo vệ thời gian thực, tự cập nhật mẫu nhận diện | 3.10.2.1 b) | 4.10.2.1 b) | C1+C2 | Cấu hình sản phẩm |
| C12-10-05 | 10. Phòng chống mã độc | Quét mã độc và tắt autorun/autoplay với USB, ổ cứng, thẻ nhớ | 3.10.2.2 | 4.10.2.2 | C1+C2 | GPO tắt autorun, chính sách quét |
| C12-11-01 | 11. Sao lưu, khôi phục | Quy định sao lưu/khôi phục: loại dữ liệu (cấu hình, bản dự phòng HĐH máy chủ, CSDL, dữ liệu nghiệp vụ), tần suất, phương pháp, vùng lưu, khôi phục thử định kỳ | 3.11.2.1 a) | 4.11.2.1 a) | C1+C2 | Quy định sao lưu |
| C12-11-02 | 11. Sao lưu, khôi phục | Rà soát quy định sao lưu ≥ 1 lần/năm hoặc khi thay đổi | 3.11.2.1 b) | 4.11.2.1 b) | C1+C2 | Lịch sử phiên bản |
| C12-11-03 | 11. Sao lưu, khôi phục | Danh sách dữ liệu cần sao lưu và tần suất theo ngày/tuần/tháng… | 3.11.2.2 | 4.11.2.2 | C1+C2 | Bảng lịch sao lưu |
| C12-11-04 | 11. Sao lưu, khôi phục | Bảo vệ bản sao lưu: toàn vẹn, sẵn sàng, khôi phục được | 3.11.2.3 | 4.11.2.3 | C1+C2 | Cấu hình bảo vệ |
| C12-11-05 | 11. Sao lưu, khôi phục | Định danh, quản lý phiên bản bản sao lưu; lưu trên hạ tầng tách biệt môi trường vận hành | — | 4.11.2.4 | chỉ C2 | Sơ đồ hạ tầng backup |
| C12-12-01 | 12. Hạ tầng mạng | Sơ đồ kiến trúc mạng và hồ sơ mạng (C1: có phương án lập, duy trì; C2: thiết lập, duy trì thực tế) | 3.12.2.1 a) | 4.12.2.1 a) | C1+C2 | Phương án (C1); sơ đồ mạng hiện hành (C2) |
| C12-12-02 | 12. Hạ tầng mạng | Kiến trúc mạng an toàn theo 3 nguyên tắc: phân vùng, đặc quyền tối thiểu, sẵn sàng (C1: có phương án; C2: triển khai thực tế) | 3.12.2.1 b) | 4.12.2.1 b) | C1+C2 | Phương án kiến trúc (C1); cấu hình phân vùng (C2) |
| C12-12-03 | 12. Hạ tầng mạng | Hồ sơ mạng gồm: tổng quan kiến trúc, sơ đồ chi tiết, tài liệu kỹ thuật, mô tả phương án ANM | 3.12.2.1 c) | 4.12.2.1 c) | C1+C2 | Bộ hồ sơ mạng |
| C12-12-04 | 12. Hạ tầng mạng | Khi đổi thiết kế, đánh giá lại sự phù hợp với yêu cầu an toàn | — | 4.12.2.1 d) | chỉ C2 | Biên bản đánh giá thay đổi |
| C12-12-05 | 12. Hạ tầng mạng | Cập nhật sơ đồ mạng 1 lần/năm hoặc khi thay đổi | 3.12.2.1 d) | 4.12.2.1 e) | C1+C2 | Lịch sử phiên bản sơ đồ |
| C12-12-06 | 12. Hạ tầng mạng | Có phương án dự phòng cho thiết bị mạng chính | 3.12.2.2 | 4.12.2.2 a) | C1+C2 | Sơ đồ HA, hợp đồng kênh truyền |
| C12-12-07 | 12. Hạ tầng mạng | Tường lửa có IPS (hoặc tương đương) kiểm soát truy cập, chống xâm nhập giữa các vùng mạng | 3.12.2.2 | 4.12.2.2 a) | C1+C2 | Cấu hình NGFW/IPS |
| C12-12-08 | 12. Hạ tầng mạng | Kiểm soát truy cập của thiết bị đầu cuối, máy tính người dùng khi kết nối vào mạng | 3.12.2.2 | — | chỉ C1 (khuyến nghị giữ ở C2) | Cấu hình NAC/802.1X hoặc danh sách MAC |
| C12-12-09 | 12. Hạ tầng mạng | WAF (hoặc tương đương) cho ứng dụng web (nếu có) | — | 4.12.2.2 a) | chỉ C2 | Cấu hình WAF |
| C12-12-10 | 12. Hạ tầng mạng | Cập nhật định kỳ CSDL nhận diện tấn công cho các giải pháp ANM | 3.12.2.2 | 4.12.2.2 a) | C1+C2 | Nhật ký cập nhật signature |
| C12-12-11 | 12. Hạ tầng mạng | Quản lý thay đổi | 3.12.2.2 | 4.12.2.2 a) | C1+C2 | Phiếu thay đổi (change request) |
| C12-12-12 | 12. Hạ tầng mạng | Theo dõi hiệu năng (CPU, RAM…) để bảo đảm hoạt động bình thường | 3.12.2.2 | 4.12.2.2 a) | C1+C2 | Dashboard giám sát |
| C12-12-13 | 12. Hạ tầng mạng | Phân vùng tối thiểu: máy chủ, DMZ, không dây (nếu có), nội bộ, biên | — | 4.12.2.2 b) | chỉ C2 | Sơ đồ phân vùng, ACL giữa vùng |
| C12-12-14 | 12. Hạ tầng mạng | Lập kế hoạch và quy trình kiểm thử, nghiệm thu (nêu rõ nội dung cần thử) | 3.12.2.3 a) | 4.12.2.3 a) | C1+C2 | Kế hoạch thử nghiệm |
| C12-12-15 | 12. Hạ tầng mạng | Kiểm thử hệ thống trước khi đưa vào vận hành | 3.12.2.3 b) | 4.12.2.3 b) | C1+C2 | Báo cáo kiểm thử |
| C12-12-16 | 12. Hạ tầng mạng | Có nhân sự phụ trách thử nghiệm, nghiệm thu | 3.12.2.3 c) | 4.12.2.3 c) | C1+C2 | Quyết định phân công |
| C12-12-17 | 12. Hạ tầng mạng | Chỉ cho phép kết nối an toàn (nếu hỗ trợ) khi truy cập nội bộ hoặc quản trị từ xa | 3.12.2.4 a) | 4.12.2.4 a) | C1+C2 | Cấu hình SSH/TLS, tắt Telnet/HTTP |
| C12-12-18 | 12. Hạ tầng mạng | Thiết bị phải yêu cầu đăng nhập khi quản trị tại chỗ cũng như từ xa | 3.12.2.4 b) | — | chỉ C1 (khuyến nghị giữ ở C2) | Cấu hình xác thực thiết bị |
| C12-12-19 | 12. Hạ tầng mạng | Kiểm soát truy cập từ ngoài vào theo từng dịch vụ; chặn mọi truy cập không được phép | 3.12.2.4 c) | 4.12.2.4 b) | C1+C2 | Rule firewall |
| C12-12-20 | 12. Hạ tầng mạng | Giới hạn dải địa chỉ/thiết bị được phép quản trị từ xa | — | 4.12.2.4 c) | chỉ C2 | ACL quản trị |
| C12-12-21 | 12. Hạ tầng mạng | Đặt timeout tự đóng phiên kết nối không hoạt động | 3.12.2.4 d) | 4.12.2.4 d) | C1+C2 | Cấu hình timeout |
| C12-12-22 | 12. Hạ tầng mạng | Truy cập từ xa của quản trị viên, người dùng tác nghiệp qua VPN (hoặc tương đương) có xác thực | 3.12.2.5 | 4.12.2.5 | C1+C2 | Cấu hình VPN/ZTNA |
| C12-12-23 | 12. Hạ tầng mạng | Xác thực khi kết nối từ xa và xác thực bổ sung trước khi vào hệ thống | — | 4.12.2.5 | chỉ C2 | Cấu hình MFA VPN |
| C12-12-24 | 12. Hạ tầng mạng | Thiết bị truy cập từ xa phải có chống mã độc và cấu hình theo chính sách của tổ chức | — | 4.12.2.5 | chỉ C2 | Chính sách posture check |
| C12-12-25 | 12. Hạ tầng mạng | Chỉ cho phép một số địa chỉ được quản trị thiết bị từ xa (nếu hỗ trợ) | — | 4.12.2.5 | chỉ C2 | ACL quản trị |
| C12-13-01 | 13. Nhân sự | Các bộ phận vận hành, quản trị, bảo vệ ANM độc lập về chuyên môn | — | 4.13.1 a) | chỉ C2 | Quy chế phân định nhiệm vụ |
| C12-13-02 | 13. Nhân sự | Có người phụ trách vận hành, quản trị và bảo vệ ANM (C1: nhân sự; C2: bộ phận phụ trách, có nhân sự cụ thể) | 3.13.2.1 a) | 4.13.2.1 a) | C1+C2 | Quyết định phân công (C1); quyết định giao nhiệm vụ cho bộ phận (C2) |
| C12-13-03 | 13. Nhân sự | Nhân sự có trình độ ANM/CNTT; ký cam kết bảo mật trong và sau khi nghỉ việc | 3.13.2.1 b) | 4.13.2.1 b) | C1+C2 | Hồ sơ năng lực, cam kết bảo mật |
| C12-13-04 | 13. Nhân sự | Chương trình nâng cao nhận thức ANM cho mọi người dùng HTTT | 3.13.2.2 a) | 4.13.2.2 a) | C1+C2 | Tài liệu, danh sách tham dự |
| C12-13-05 | 13. Nhân sự | Đào tạo nhận thức ≥ 1 lần/năm | 3.13.2.2 b) | 4.13.2.2 b) | C1+C2 | Danh sách, bài kiểm tra |
| C12-13-06 | 13. Nhân sự | Thu hồi thẻ, dữ liệu, thiết bị, tài sản khi nghỉ hoặc chuyển việc | 3.13.2.2 c) | 4.13.2.2 c) | C1+C2 | Biên bản bàn giao |
| C12-13-07 | 13. Nhân sự | Quy trình vô hiệu hóa mọi quyền ra vào, truy cập, quản trị khi thôi việc | — | 4.13.2.2 d) | chỉ C2 | Quy trình offboarding, log vô hiệu |
| C12-14-01 | 14. Nhà cung cấp | Quy trình đánh giá nhà cung cấp dịch vụ ANM, lưu trữ/xử lý dữ liệu nhạy cảm, nền tảng quan trọng | 3.14.1 | 4.14.1 | C1+C2 | Quy trình đánh giá NCC |
| C12-14-02 | 14. Nhà cung cấp | Danh sách nhà cung cấp, theo dõi trạng thái | 3.14.2 | 4.14.2 | C1+C2 | Danh sách NCC |
| C12-14-03 | 14. Nhà cung cấp | Phân loại nhà cung cấp | 3.14.2 | 4.14.2 | C1+C2 | Tiêu chí phân loại |
| C12-14-04 | 14. Nhà cung cấp | Văn bản phân định phạm vi trách nhiệm giữa nhà cung cấp và tổ chức | 3.14.2 | 4.14.2 | C1+C2 | Hợp đồng/SLA/ma trận RACI |
| C12-14-05 | 14. Nhà cung cấp | Cập nhật danh sách nhà cung cấp ≥ 1 lần/năm hoặc khi thay đổi | 3.14.2 | 4.14.2 | C1+C2 | Ngày cập nhật |
| C12-15-01 | 15. Ứng phó sự cố | Chính sách/quy trình sự cố gồm: phân nhóm; tiếp nhận–phân loại–xử lý ban đầu; kế hoạch ứng phó; giám sát cảnh báo; quy trình sự cố thường và nghiêm trọng; cơ chế phối hợp | — | 4.15.1 | chỉ C2 | Kế hoạch/quy trình ứng phó sự cố |
| C12-15-02 | 15. Ứng phó sự cố | Chỉ định người chủ chốt và ít nhất một người dự phòng quản lý ứng phó sự cố | 3.15.2.1 a) | 4.15.2.1 a) | C1+C2 | Quyết định phân công |
| C12-15-03 | 15. Ứng phó sự cố | Đầu mối phối hợp với cơ quan quản lý nhà nước về ANM và cơ quan điều hành Liên minh ứng phó sự cố quốc gia | — | 4.15.2.1 b) | chỉ C2 | Danh bạ đầu mối, văn bản đăng ký |
| C12-15-04 | 15. Ứng phó sự cố | Đầu mối tiếp nhận báo cáo sự cố; xác minh thông tin liên hệ hằng năm | 3.15.2.1 b) | 4.15.2.1 c) | C1+C2 | Danh bạ có ngày xác minh |
| C12-15-05 | 15. Ứng phó sự cố | Phân công vai trò, trách nhiệm từng thành viên đội ứng phó | 3.15.2.1 c) | 4.15.2.1 d) | C1+C2 | Bảng RACI đội ứng phó |
| C12-15-06 | 15. Ứng phó sự cố | Quy định trách nhiệm phối hợp của các phòng ban với đội ứng phó | 3.15.2.1 d) | 4.15.2.1 e) | C1+C2 | Quy chế phối hợp |
| C12-15-07 | 15. Ứng phó sự cố | Quy trình báo cáo sự cố nội bộ | 3.15.2.2 a) | 4.15.2.2 a) | C1+C2 | Quy trình, mẫu báo cáo |
| C12-15-08 | 15. Ứng phó sự cố | Phân nhóm sự cố ANM | 3.15.2.2 b) | 4.15.2.2 b) | C1+C2 | Bảng phân loại sự cố |
| C12-15-09 | 15. Ứng phó sự cố | Cập nhật quy trình báo cáo ≥ 1 lần/năm hoặc khi thay đổi | 3.15.2.2 c) | 4.15.2.2 c) | C1+C2 | Lịch sử phiên bản |
| C12-15-10 | 15. Ứng phó sự cố | Quy trình ứng phó có cơ chế phối hợp với cơ quan chức năng, chuyên gia, nhà cung cấp dịch vụ | 3.15.2.3 a) | 4.15.2.3 a) | C1+C2 | Quy trình ứng phó |
| C12-15-11 | 15. Ứng phó sự cố | Cập nhật quy trình ứng phó ≥ 1 lần/năm hoặc khi thay đổi | 3.15.2.3 b) | 4.15.2.3 b) | C1+C2 | Lịch sử phiên bản |

## C. Lịch định kỳ

| Hoạt động | Tần suất cấp 1 | Tần suất cấp 2 | Căn cứ |
|---|---|---|---|
| Rà soát quy trình quản lý rủi ro; đánh giá lại rủi ro | ≥ 1 lần/năm; và khi thay đổi | ≥ 1 lần/năm; và khi thay đổi | TCVN 3.1 b, 4.1 b; NĐ 331 Đ10.2 |
| Kiểm kê, cập nhật danh mục tài sản | Phần cứng, phần mềm ≥ 1 lần/năm | Mọi tài sản ≥ 1 lần/năm | TCVN 3.2.1 c, 3.3.1 b; 4.2.1 c, 4.3.1 b |
| Rà thiết bị lạ, phần mềm trái phép | ≥ 1 lần/năm | ≥ 1 lần/năm | TCVN 3.2.2.2, 3.3.2.2; 4.2.2.2, 4.3.2.2 |
| Kiểm tra phân quyền dữ liệu; cập nhật danh mục tài sản thông tin | ≥ 1 lần/năm | ≥ 1 lần/năm | TCVN 3.4.2.1 c, 3.4.2.2 b; 4.4.2.1 d, 4.4.2.2 b |
| Rà soát danh sách tài khoản | ≥ 1 lần/năm | ≥ 1 lần/năm | TCVN 3.6.2.1 d, 4.6.2.1 d |
| Vô hiệu hóa tài khoản không hoạt động | Sau 45 ngày hoặc ngay khi đổi nhân sự | Sau 45 ngày hoặc ngay khi đổi nhân sự | TCVN 3.6.2.3, 4.6.2.3 |
| Đổi mật khẩu tài khoản quản trị (gợi ý) | ≥ 1 lần/2 tháng | ≥ 1 lần/2 tháng | TCVN 3.6.2.2 b, 4.6.2.2 b |
| Rà quét lỗ hổng; rà soát quy trình quản lý lỗ hổng | ≥ 1 lần/năm hoặc khi thay đổi | ≥ 1 lần/năm hoặc khi thay đổi | TCVN 3.7.2.1 b, 4.7.2.1 b |
| Cập nhật bản vá máy tính, thiết bị di động của người dùng | ≥ 1 lần/tháng | ≥ 1 lần/tháng | TCVN 3.7.2.2, 4.7.2.2 |
| Rà soát nhật ký ANM | ≥ 1 lần/năm | ≥ 1 lần/năm | TCVN 3.8.2.1 a, 4.8.2.1 a |
| Thời gian lưu nhật ký | Không quy định (theo Quy chế) | ≥ 1 tháng; ≥ 12 tháng nếu là hệ thống cung cấp dịch vụ trên mạng thuộc diện NĐ 333 Đ16 | TCVN 4.8.2.1 a; NĐ 333 Đ16.6.c |
| Khôi phục thử bản sao lưu | Định kỳ (tự đặt trong Quy chế) | Định kỳ (tự đặt trong Quy chế) | TCVN 3.11.2.1 a, 4.11.2.1 a |
| Cập nhật sơ đồ mạng | 1 lần/năm hoặc khi thay đổi | 1 lần/năm hoặc khi thay đổi | TCVN 3.12.2.1 d, 4.12.2.1 e |
| Đào tạo nâng cao nhận thức ANM | ≥ 1 lần/năm | ≥ 1 lần/năm | TCVN 3.13.2.2 b, 4.13.2.2 b; NĐ 331 Đ31.3 |
| Tuyên truyền, phổ biến ANM | Thường xuyên (không định kỳ cố định) | Thường xuyên (không định kỳ cố định) | NĐ 331 Đ31.3; Luật 116 Đ10.1.e |
| Diễn tập ANM trong tổ chức | Không quy định chu kỳ (gợi ý 1 lần/năm) | Không quy định chu kỳ (gợi ý 1 lần/năm) | NĐ 331 Đ31.3 |
| Cập nhật danh sách nhà cung cấp | ≥ 1 lần/năm hoặc khi thay đổi | ≥ 1 lần/năm hoặc khi thay đổi | TCVN 3.14.2, 4.14.2 |
| Xác minh danh bạ ứng phó sự cố; cập nhật quy trình báo cáo, ứng phó sự cố | ≥ 1 lần/năm | ≥ 1 lần/năm | TCVN 3.15.2, 4.15.2 |
| Rà soát các quy định, quy trình khác (cấu hình, tài khoản, truy cập, nhật ký, sao lưu, tài sản thông tin) | ≥ 1 lần/năm hoặc khi thay đổi | ≥ 1 lần/năm hoặc khi thay đổi | TCVN mục 3, 4 (các điểm "rà soát, cập nhật") |
| Kiểm tra, đánh giá (tự đánh giá độc lập với đơn vị vận hành) | Định kỳ theo cấp độ và rủi ro (gợi ý 1 lần/năm) | Định kỳ theo cấp độ và rủi ro (gợi ý 1 lần/năm) | NĐ 331 Đ28.5.a, Đ31.2.c, Đ33.3 |
| Báo cáo năm (Mẫu 08) | Nội bộ trước 20/12; gửi BCA trước 25/12 | Nội bộ trước 20/12; gửi BCA trước 25/12 | NĐ 331 Đ35.3–35.4, Đ36 |
| Xác định lại cấp độ | Khi thay đổi chức năng, phạm vi, dữ liệu, công nghệ, kết nối; sau sự cố nghiêm trọng | Như cấp 1 | NĐ 331 Đ10.2.b–đ, Đ25 |

## D. Sổ sự cố

| Mã sự cố | HTTT | T0 (phát hiện) | Nhóm | Mức | Mô tả tóm tắt | DLCN bị ảnh hưởng | Báo cáo BCA (loại, thời điểm gửi) | Thông báo DLCN (thời điểm) | Biện pháp đã làm | Ngày đóng | Người xử lý | Bài học, việc tiếp theo |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SC-2027-001 | HT-02-INTRANET | 10/03/2027 09:15 | Lừa đảo, giả mạo | Thông thường | 01 nhân viên nhập mật khẩu vào trang đăng nhập giả mạo và chấp nhận nhầm yêu cầu xác thực MFA; hộp thư bị đăng nhập từ địa chỉ 192.0.2.77 | Không (đã rà hộp thư, không có dữ liệu nhân sự bị chuyển ra ngoài) | Báo cáo 72 giờ, gửi 12/03/2027 15:00 | Không thuộc diện | Khóa tài khoản, thu hồi phiên đăng nhập, đổi mật khẩu, đăng ký lại MFA, chặn tên miền giả mạo trên bộ lọc | 11/03/2027 | Đỗ Văn Giang | Bổ sung nhận diện thư giả mạo vào đào tạo tháng 4; chuyển MFA sang hình thức đối chiếu số |

## E. Kế hoạch khắc phục

| STT | HTTT | Mã yêu cầu (sheet B) | Tồn tại, chưa đáp ứng | Biện pháp khắc phục | Chủ trì | Hạn hoàn thành (→ Mẫu 08 cột 11) | Tình trạng (→ Mẫu 08 cột 10) |
|---|---|---|---|---|---|---|---|
| 1 | HT-03-ERP | C12-11-05 | Bản sao lưu ERP nằm trên NAS cùng phòng máy, chưa tách biệt, chưa quản lý phiên bản | Bổ sung bản sao lưu tách biệt có quản lý phiên bản (ổ lưu trữ luân phiên cất ngoài phòng máy hoặc dịch vụ lưu trữ đặt tại Việt Nam) | Phòng Vận hành hệ thống | 31/12/2026 (theo QĐ 03/2026/QĐ-PANM) | Đã hoàn thành |
| 2 | HT-04-LAN | C12-02-09 | Chưa có quy trình xóa sạch dữ liệu khi thanh lý, chuyển giao máy tính, ổ cứng | Ban hành quy trình xóa dữ liệu, dùng công cụ xóa an toàn, lập biên bản cho từng lần thanh lý | Phòng Vận hành hệ thống | 30/06/2027 | Chưa thực hiện |
| 3 | HT-02-INTRANET | C12-08-05 | Nhật ký Intranet chỉ lưu 7 ngày | Chuyển nhật ký về máy chủ nhật ký tập trung, giữ theo thời hạn của Quy chế | Phòng Vận hành hệ thống | 28/02/2027 | Đã hoàn thành |

## F. Kiểm kê dữ liệu cá nhân

| HTTT / quy trình | Nhóm chủ thể | Loại DLCN | Cơ bản / Nhạy cảm (NĐ 356 Đ4.1) | Mục đích | Căn cứ xử lý | Số chủ thể (ước tính) | Nơi lưu (VN/nước ngoài, nhà cung cấp) | Bên nhận | Thời hạn lưu | Người phụ trách |
|---|---|---|---|---|---|---|---|---|---|---|
| Tuyển dụng — hộp thư tuyển dụng (HT-02-INTRANET), phân hệ nhân sự (HT-03-ERP) | Ứng viên | Họ tên, ngày sinh, điện thoại, email, CV, bằng cấp, kinh nghiệm, ảnh chân dung | Cơ bản (NĐ 356 Đ3) | Tuyển dụng; nguồn ứng viên nếu ứng viên đồng ý | Đồng ý của ứng viên (Luật 91 Đ25.1.b) — Thông báo ứng viên (mẫu 11) | ~300/năm | VN — ERP tại phòng máy trụ sở; hộp thư trên cloud của Công ty TNHH Dữ liệu Mẫu (máy chủ TP. Hồ Chí Minh) | Không chuyển cho bên ngoài; Công ty TNHH Dữ liệu Mẫu là bên xử lý (phụ lục PL-01) | Không trúng tuyển: xóa sau 30 ngày kể từ khi thông báo kết quả; nguồn ứng viên: 12 tháng (Luật 91 Đ25.1.c) | Phòng Hành chính – Nhân sự |
| Hồ sơ nhân sự — HT-03-ERP (phân hệ nhân sự), tủ hồ sơ giấy | Người lao động; người thân khai để liên hệ, giảm trừ gia cảnh | Họ tên, ngày sinh, **số** CCCD, địa chỉ, quan hệ gia đình, hợp đồng lao động, trình độ; **ảnh thẻ căn cước** chỉ khi hồ sơ bảo hiểm xã hội yêu cầu | Cơ bản; ảnh thẻ căn cước: **nhạy cảm (Đ4.1.i)** — lưu tách riêng, mã hóa | Quản lý lao động | Thực hiện hợp đồng lao động (Luật 91 Đ19.1.d); ảnh thẻ căn cước: đồng ý (mẫu 12) | 120 NLĐ; ~150 người thân | VN — ERP tại phòng máy Tầng 3 | Cơ quan nhà nước khi có yêu cầu bằng văn bản; Công ty TNHH Phần mềm Mẫu (bảo trì ERP — bên xử lý) | Thời gian làm việc + 12 tháng sau nghỉ việc; ảnh thẻ căn cước: xóa ngay khi xong thủ tục bảo hiểm xã hội (Luật 91 Đ25.2) | Phòng Hành chính – Nhân sự |
| Lương, bảo hiểm, thuế — HT-03-ERP (phân hệ kế toán, tiền lương) | Người lao động; người phụ thuộc | Lương, mã số thuế, số sổ bảo hiểm xã hội, số tài khoản nhận lương; giấy khám sức khỏe, nghỉ ốm, thai sản | Cơ bản; sức khỏe: **nhạy cảm (Đ4.1.d)**; số tài khoản ngân hàng: chưa rõ (Đ4.1.k) **[CẦN ĐỐI CHIẾU]** | Trả lương; đóng bảo hiểm; khấu trừ thuế thu nhập cá nhân; chế độ ốm đau, thai sản | Hợp đồng lao động (Đ19.1.d); nghĩa vụ luật định (Đ19.1.đ); sức khỏe: Luật 91 Đ26.1.a — đồng ý hoặc Đ19.1 **[CẦN ĐỐI CHIẾU]** | 120 NLĐ; ~150 người phụ thuộc | VN — ERP tại phòng máy Tầng 3 | Cơ quan bảo hiểm xã hội; cơ quan thuế; ngân hàng chi lương | Theo thời hạn pháp luật kế toán, thuế, bảo hiểm **[CẦN ĐỐI CHIẾU]**; sức khỏe: xóa khi chấm dứt hợp đồng lao động trừ hồ sơ pháp luật buộc lưu | Phòng Tài chính – Kế toán |
| Thư điện tử, văn phòng điện tử — HT-02-INTRANET | Người lao động; khách hàng, đối tác, ứng viên trao đổi thư | Họ tên, email, chức danh, điện thoại, nội dung thư, tệp đính kèm; nhật ký đăng nhập | Cơ bản; tệp đính kèm có thể lẫn dữ liệu nhạy cảm | Điều hành, liên lạc công việc | Hợp đồng lao động (Đ19.1.d); với người bên ngoài: thực hiện giao dịch, hợp đồng (Đ19.1.d) **[CẦN ĐỐI CHIẾU]** | 120 hộp thư; ~2.000 người liên hệ bên ngoài | VN — cloud của Công ty TNHH Dữ liệu Mẫu (TP. Hồ Chí Minh; dự phòng Hà Nội); không chuyển ra nước ngoài | Công ty TNHH Dữ liệu Mẫu (bên xử lý — phụ lục PL-01 kèm HĐ 08/2026/HĐDV/TURBO-DLM) | Hộp thư của người nghỉ việc: 30 ngày để bàn giao rồi xóa; bản sao lưu: 30 ngày | Phòng Vận hành hệ thống |
| Danh bạ khách hàng, đối tác — bảng tính dùng chung trên HT-02-INTRANET | Người liên hệ của khách hàng, đối tác; khách hàng cá nhân | Họ tên, chức danh, nơi công tác, điện thoại, email, lịch sử giao dịch | Cơ bản | Chăm sóc khách hàng, thực hiện hợp đồng | Thực hiện hợp đồng (Đ19.1.d); người liên hệ của doanh nghiệp đối tác không phải bên hợp đồng **[CẦN ĐỐI CHIẾU]** | ~1.500 | VN — cloud của Công ty TNHH Dữ liệu Mẫu | Không | Rà soát hằng năm; xóa người liên hệ không còn giao dịch sau 24 tháng | Phòng Kinh doanh |
| Camera — sảnh lễ tân, cửa ra vào (đầu ghi tại phòng máy) | Người lao động; khách đến làm việc | Hình ảnh (không ghi âm, không nhận diện khuôn mặt) | Cơ bản (hình ảnh — NĐ 356 Đ3.6); bật nhận diện khuôn mặt sẽ thành sinh trắc học **nhạy cảm (Đ4.1.đ)** | An ninh, an toàn người và tài sản | Luật 91 Đ32.1.a; biển báo (Đ32.2 — mẫu 16); thông báo người lao động (Đ25.3 — mẫu 10) | 120 NLĐ; ~50 khách/ngày | VN — đầu ghi tại trụ sở | Cơ quan nhà nước khi có yêu cầu bằng văn bản | 30 ngày, tự ghi đè (Luật 91 Đ32.4) | Phòng Hành chính – Nhân sự |
| Chấm công thẻ từ — máy chấm công tại cửa, đồng bộ vào HT-03-ERP | Người lao động | Mã thẻ, họ tên, giờ vào, giờ ra | Cơ bản (không dùng vân tay, khuôn mặt) | Tính công, tính lương | Hợp đồng lao động (Đ19.1.d); thông báo biện pháp theo dõi (Đ25.3) | 120 | VN — máy chấm công và ERP tại trụ sở | Không | Theo thời hạn lưu chứng từ tiền lương | Phòng Hành chính – Nhân sự |
| Tài khoản, nhật ký hệ thống — HT-04-LAN (Active Directory), tường lửa, nhật ký ERP, Intranet | Người lao động | Tên tài khoản, nhật ký đăng nhập, thao tác, địa chỉ IP, tên miền truy cập Internet | Cơ bản; nhật ký theo dõi hành vi sử dụng dịch vụ trên mạng (tên miền truy cập Internet) có thể thuộc Đ4.1.l — bảo vệ như dữ liệu nhạy cảm (phân quyền — Đ4.2) **[CẦN ĐỐI CHIẾU]** | Bảo đảm an ninh mạng; điều tra sự cố | Nghĩa vụ an ninh mạng theo luật (Đ19.1.đ) **[CẦN ĐỐI CHIẾU]**; thông báo người lao động (Đ25.3) | 120 | VN — máy chủ nhật ký tại phòng máy Tầng 3 | Không | 06 tháng | Phòng Vận hành hệ thống; Phòng An ninh mạng rà soát |
