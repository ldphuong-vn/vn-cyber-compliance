# Mẫu Phân loại hệ thống AI theo mức độ rủi ro

> **Căn cứ:** Luật 91/2025/QH15 Đ2.1, Đ3.2, Đ3.3, Đ9.2, Đ19.1.a, Đ19.2, Đ24, Đ25.3, Đ30.1, Đ30.3, Đ30.4, Đ30.5, Đ31.2, Đ31.4.a, Đ32.2, Đ32.4, Đ37.1.b; NĐ 356/2025/NĐ-CP Đ4.1, Đ6.3, Đ6.4, Đ10.2, Đ10.3, Đ10.5, Đ10.6, Đ19.3.g, Đ21.5, Đ21.6; NĐ 330/2026/NĐ-CP Đ67.1, Đ67.2.a–d, Đ67.3.b, Đ67.4.b, Đ70.1.c–d, Đ70.2.b, Đ71.1.a, Đ71.2.a · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Mã tài liệu:** B2. **Ai lập:** nhóm sản phẩm của nhà cung cấp, nhân sự BVDLCN thẩm tra, lãnh đạo phụ trách sản phẩm phê duyệt. **Khi nào:** lập lần đầu cho toàn bộ tính năng AI hiện có; phân loại lại khi thêm tính năng, đổi mô hình AI, đổi mục đích sử dụng được quảng bá, hoặc theo chu kỳ tại mục 6.

**Áp dụng mô hình:** M1–M5. Nhà cung cấp là tổ chức **phát triển** hệ thống AI ở mọi mô hình, nên cần phân loại ngay cả khi chỉ bán thiết bị (M1). Khách hàng dùng B2 làm đầu vào cho phần đánh giá rủi ro của hồ sơ đánh giá tác động (NĐ 356 Đ19.3.g).

| Yêu cầu | Căn cứ |
|---|---|
| Xử lý DLCN bằng trí tuệ nhân tạo phải **phân loại theo mức độ rủi ro** để có biện pháp bảo vệ phù hợp | Luật 91 Đ30.4 |
| DLCN trong môi trường AI xử lý đúng mục đích, giới hạn trong phạm vi cần thiết | Luật 91 Đ30.1 |
| Không sử dụng, phát triển hệ thống AI dùng DLCN để gây tổn hại quốc phòng, an ninh, trật tự, hoặc xâm phạm tính mạng, sức khỏe, danh dự, nhân phẩm, tài sản của người khác | Luật 91 Đ30.5 |
| Thông báo xử lý tự động, giải thích thuật toán, cho chủ thể lựa chọn không tham gia | NĐ 356 Đ10.3 |
| Biện pháp bảo vệ trong hệ thống AI (tiêu chuẩn ANM, giám sát, đánh giá tuân thủ hằng năm) | NĐ 356 Đ10.5 |
| Không phân loại hệ thống AI theo mức độ rủi ro: **phạt 50–70 triệu đồng** | NĐ 330 Đ67.2.d |
| Quyết định tự động ảnh hưởng quyền, lợi ích mà không có cơ chế giám sát hoặc không cho yêu cầu đánh giá lại bởi con người: **70–100 triệu đồng**; đình chỉ hệ thống 03–06 tháng | NĐ 330 Đ67.3.b, Đ67.4.b |

Mức phạt là mức cho tổ chức; cá nhân bằng một nửa (NĐ 330 Đ7.1).

> **[CẦN ĐỐI CHIẾU] — thang phân loại là thang tự đặt.** Luật 91 Đ30.4 bắt buộc phân loại nhưng Luật 91, NĐ 356 và NĐ 330 **không định nghĩa** các mức rủi ro hay tiêu chí. Pháp luật chuyên ngành về trí tuệ nhân tạo **chưa có trong `sources/`** (V9) nên tài liệu này không dẫn số hiệu. Thang bốn mức tại mục 2 do nhà cung cấp tự xây dựng dựa trên các quy định về dữ liệu nhạy cảm, trẻ em, người lao động, camera công cộng và quyết định tự động. Khi có văn bản quy định mức rủi ro AI, phải lập bảng ánh xạ và phân loại lại.

**Vùng xám liên quan:** V3 (chấm công dựa vào hợp đồng lao động hay đồng ý), V4 (dựng hành trình là dữ liệu vị trí), V5 (nơi công cộng và nơi làm việc), V7 (danh sách đen dựa vào Luật 91 Đ19.1.a).

---

<p align="center"><b>PHÂN LOẠI HỆ THỐNG TRÍ TUỆ NHÂN TẠO THEO MỨC ĐỘ RỦI RO</b><br/><b>{{TEN_SAN_PHAM}} — phiên bản {{PHIEN_BAN_SAN_PHAM}}</b></p>

| Thông tin tài liệu | |
|---|---|
| Mã tài liệu | {{MA_TAI_LIEU}} |
| Nhà cung cấp | {{TEN_NHA_CUNG_CAP}} |
| Ngày phân loại | {{NGAY_BAN_HANH_TAI_LIEU}} |
| Nhóm xét duyệt | {{NHOM_XET_DUYET_RUI_RO_AI}} |
| Người phê duyệt | {{HO_TEN_NGUOI_KY}} — {{CHUC_DANH_NGUOI_KY}} |

## 1. Mục đích và phạm vi

Tài liệu này phân loại từng tính năng xử lý dữ liệu cá nhân bằng trí tuệ nhân tạo của {{TEN_SAN_PHAM}} theo mức độ rủi ro đối với quyền, lợi ích của chủ thể dữ liệu, và xác định biện pháp bắt buộc cho từng mức, theo khoản 4 Điều 30 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15.

Đơn vị phân loại là **tính năng trong một bối cảnh sử dụng**. Cùng một thuật toán (ví dụ nhận diện khuôn mặt) có thể ở mức khác nhau tùy nơi lắp đặt, đối tượng bị nhận diện và hậu quả của kết quả.

Thang phân loại tại mục 2 là thang nội bộ của {{TEN_NHA_CUNG_CAP}}. Pháp luật hiện hành chưa quy định các mức rủi ro cụ thể; thang này sẽ được điều chỉnh khi có quy định.

## 2. Thang phân loại

### 2.1. Các yếu tố đánh giá

| Mã | Yếu tố | Câu hỏi | Căn cứ tham chiếu |
|---|---|---|---|
| Y1 | Nhận dạng | Tính năng có xác định danh tính một người cụ thể không? | Luật 91 Đ2.1; NĐ 356 Đ10.2 |
| Y2 | Loại dữ liệu | Có xử lý dữ liệu sinh trắc học, dữ liệu vị trí, ảnh thẻ căn cước, hoặc suy luận dữ liệu nhạy cảm khác không? | Luật 91 Đ31; NĐ 356 Đ4.1 |
| Y3 | Đối tượng | Chủ thể có phải trẻ em, người lao động (quan hệ phụ thuộc), hoặc người qua đường chưa biết mình bị nhận diện? | Luật 91 Đ24, Đ25.3, Đ32 |
| Y4 | Quyết định tự động | Kết quả có tự động dẫn tới hệ quả cho cá nhân (từ chối ra vào, trừ công, kỷ luật, cảnh báo an ninh) không? | NĐ 356 Đ10.3; NĐ 330 Đ67.3.b |
| Y5 | Bối cảnh | Nơi lắp đặt là khu vực công cộng, khu vực cung cấp dịch vụ cho khách, nơi làm việc hay trường học? | Luật 91 Đ32; NĐ 330 Đ71.2.a |
| Y6 | Tích lũy | Hệ thống có tổng hợp dữ liệu thành hồ sơ, hành trình, thói quen của một người không? | NĐ 356 Đ4.1.c, Đ4.1.h |
| Y7 | Lựa chọn của chủ thể | Chủ thể có thể từ chối mà vẫn được phục vụ bằng cách khác không? | Luật 91 Đ9.2; NĐ 356 Đ10.3 |

### 2.2. Các mức rủi ro

| Mức | Tiêu chí (chỉ cần một tiêu chí là xếp vào mức đó) | Nguyên tắc cung cấp |
|---|---|---|
| **T — Thấp** | Không xác định danh tính (Y1 = không); xử lý ẩn danh tại thiết bị; không lưu ảnh có thể nhận ra người; chỉ xuất số liệu tổng hợp; không quyết định tự động về cá nhân | Được bật mặc định nếu đã cấu hình ẩn danh |
| **TB — Trung bình** | Xác định cá nhân qua dữ liệu cơ bản (biển số, hình ảnh) đối với người đã đăng ký hoặc đã được thông báo; không dùng sinh trắc học; quyết định tự động có hệ quả nhỏ và có người trực xử lý ngay | Được cung cấp; khách hàng bật có chủ đích |
| **C — Cao** | Có một trong các yếu tố: xử lý sinh trắc học để nhận dạng hoặc xác thực (Y2); chủ thể là trẻ em (Y3); quyết định tự động ảnh hưởng quyền, lợi ích như tiền lương, kỷ luật, từ chối tiếp cận (Y4); dựng hành trình, hồ sơ của một người (Y6); danh sách theo dõi (danh sách đen) | **Tắt mặc định**; chỉ bật sau khi khách hàng xác nhận bằng văn bản đã đáp ứng các biện pháp mức C tại mục 4 |
| **KCN — Không chấp nhận** | Nhận diện khuôn mặt tự động trên camera công cộng để lập hồ sơ, phân tích hành vi, mục đích thương mại với người **chưa đồng ý**; suy luận nguồn gốc chủng tộc, dân tộc, quan điểm chính trị, tôn giáo, sức khỏe, xu hướng tình dục từ hình ảnh; chấm điểm cảm xúc, thái độ của từng người lao động, học sinh để đánh giá; mọi mục đích thuộc khoản 5 Điều 30 Luật 91 | **Không phát triển, không cung cấp, không hỗ trợ cấu hình**, trừ khi có căn cứ pháp luật riêng được pháp chế xác nhận bằng văn bản |

Quy tắc áp dụng:

1. Mức của tính năng là **mức cao nhất** mà bất kỳ yếu tố nào chạm tới.
2. Bối cảnh triển khai của khách hàng chỉ có thể **nâng** mức, không hạ mức.
3. Tính năng xếp mức KCN được ghi vào danh sách tính năng cấm trong tài liệu bán hàng và tài liệu đối tác.

## 3. Bảng phân loại tính năng

| # | Tính năng | Dữ liệu xử lý | Quyết định tự động | Mức | Lý do chính | Cấu hình mặc định, điều kiện |
|---|---|---|---|---|---|---|
| F1 | Đếm người, bản đồ nhiệt ẩn danh | Hình ảnh tạm thời tại thiết bị; đầu ra là số đếm | Không | **T** | Không nhận dạng; không lưu ảnh (Luật 91 Đ2.1) | Bật được mặc định nếu xử lý tại thiết bị, không lưu ảnh, không nhận diện lại người qua các camera. Nếu theo dấu từng người qua nhiều camera: xếp lại theo F9 |
| F2 | Nhận diện biển số bãi xe | Biển số, ảnh biển số (NĐ 356 Đ3.7) | Có — mở/không mở barie | **TB** | Dữ liệu cơ bản; hệ quả nhỏ, có nhân viên bãi xe xử lý | Thời hạn lưu xe vãng lai ngắn; không dựng hành trình. Tra biển số qua nhiều bãi, nhiều điểm: nâng lên **C** (V4) |
| F3 | Kiểm soát ra vào bằng khuôn mặt | Ảnh đăng ký, template (Luật 91 Đ31.2; NĐ 356 Đ4.1.đ) | Có — mở/không mở cửa | **C** | Sinh trắc học; người lao động là bên yếu thế (Luật 91 Đ25.3) | Tắt mặc định; phương thức thay thế (thẻ, PIN, QR) bắt buộc chạy song song; liveness bật |
| F4 | Chấm công bằng khuôn mặt | Như F3; nhật ký chấm công | Có — ghi công, đi muộn, vắng | **C** | Sinh trắc học + quyết định ảnh hưởng tiền lương, kỷ luật (NĐ 330 Đ67.3.b) | Như F3; kết quả bất lợi phải qua người xem xét lại trước khi dùng để trừ lương, kỷ luật (V3) |
| F5 | Danh sách đen (cảnh báo người trong danh sách theo dõi) | Template của người trong danh sách; ảnh mọi người đi qua camera để so khớp | Có — cảnh báo an ninh | **C** (có thể **KCN** — xem lý do) | Nhận diện người chưa đồng ý; chỉ có thể dựa vào Luật 91 Đ19.1.a và bên xử lý phải tự chứng minh (V7) | Tắt mặc định; chỉ bật khi khách hàng có quy chế lập, gỡ danh sách, căn cứ cụ thể cho từng người (biên bản, trình báo), cơ chế giám sát theo Luật 91 Đ19.2. Không có các điều kiện này: **KCN** |
| F6 | Nhận diện khách VIP, khách quay lại trên camera tại cửa hàng, khu vực công cộng | Template khách hàng; ảnh mọi người đi qua | Có — thông báo cho nhân viên | **C** nếu chỉ nhận diện người **đã đăng ký và đồng ý**; **KCN** nếu nhận diện mọi người để lập hồ sơ | NĐ 330 Đ71.2.a phạt dùng camera công cộng nhận diện khuôn mặt tự động để lập hồ sơ, mục đích thương mại khi không có đồng ý | Chỉ hỗ trợ chế độ "danh sách người đã đồng ý"; ảnh người không có trong danh sách bị hủy ngay sau so khớp, không lưu template |
| F7 | Nhận diện cảm xúc, thái độ | Hình ảnh khuôn mặt; kết quả suy luận | Tùy cách dùng | **KCN** khi gắn với từng người để đánh giá, chấm điểm; **C** khi chỉ ra số liệu tổng hợp ẩn danh | Suy luận về đời sống riêng tư (NĐ 356 Đ4.1.c); dịch vụ nêu tại NĐ 356 Đ21.5 (giáo dục), Đ21.6 (phân tích hành vi) | Không cung cấp ở dạng gắn với cá nhân. Dạng tổng hợp: tắt mặc định, không lưu ảnh, cần hồ sơ đánh giá tác động riêng |
| F8 | Điểm danh học sinh bằng khuôn mặt | Template của trẻ em; nhật ký điểm danh | Có — ghi vắng mặt, thông báo phụ huynh | **C** | Trẻ em (Luật 91 Đ24); dịch vụ giáo dục có yếu tố giám sát (NĐ 356 Đ21.5) | Đồng ý của người đại diện theo pháp luật; phương án thay thế; không kết hợp nhận diện cảm xúc, chấm điểm hành vi; vắng mặt do không nhận diện được phải được giáo viên xác nhận |
| F9 | Dựng hành trình một người, một xe qua nhiều camera | Template hoặc đặc điểm nhận dạng lại; thời gian, vị trí camera | Không trực tiếp | **C**; **KCN** khi theo dõi hàng loạt không có căn cứ | Có thể là dữ liệu vị trí nhạy cảm (NĐ 356 Đ4.1.h — V4) và thông tin đời sống riêng tư (Đ4.1.c) | Tắt mặc định; chỉ dùng tra cứu theo vụ việc, có phê duyệt của người được khách hàng ủy quyền, ghi nhật ký từng lần tra cứu; không chạy liên tục |

Tính năng mới được thêm vào bảng theo quy trình tại mục 5.

## 4. Biện pháp bắt buộc theo từng mức

| Biện pháp | T | TB | C | Căn cứ |
|---|:---:|:---:|:---:|---|
| Ghi tính năng và mức rủi ro vào B1, hồ sơ đánh giá tác động | ● | ● | ● | Luật 91 Đ30.4; NĐ 356 Đ19.3 |
| Hướng dẫn khách hàng đặt biển báo, thông báo cho người bị ghi hình | ● | ● | ● | Luật 91 Đ32.2; NĐ 330 Đ71.1.a |
| Cấu hình ẩn danh, không lưu ảnh được kiểm tra trước khi phát hành | ● | | | Luật 91 Đ2.1 |
| Thời hạn lưu cấu hình được, tự động xóa | | ● | ● | Luật 91 Đ3.3, Đ32.4 |
| Phân quyền theo vai trò; nhật ký truy cập, xuất dữ liệu | | ● | ● | Luật 91 Đ30.3 |
| Tắt mặc định; bật phải qua bước xác nhận có cảnh báo pháp lý | | | ● | NĐ 356 Đ6.3 (tinh thần thiết lập mặc định bảo vệ dữ liệu) |
| Khách hàng xác nhận bằng văn bản trước khi bật (mẫu tại mục 5.3) | | | ● | Luật 91 Đ37.1.b |
| Mẫu thông báo, đồng ý nêu rõ dữ liệu nhạy cảm (K2) | | | ● | NĐ 356 Đ6.4 |
| Phương thức thay thế chạy song song; cơ chế từ chối xử lý tự động | | ● *(nếu có quyết định tự động)* | ● | NĐ 356 Đ10.3; NĐ 330 Đ67.2.b |
| Tài liệu giải thích thuật toán (B3) | | ● | ● | NĐ 356 Đ10.3; NĐ 330 Đ67.2.a |
| Người xem xét lại kết quả bất lợi; ngưỡng "cần xác minh" | | ● | ● | NĐ 330 Đ67.3.b |
| Công cụ chỉnh sửa, ẩn danh, xóa hồ sơ nhận dạng | | ● | ● | NĐ 356 Đ10.6; NĐ 330 Đ67.2.c |
| Mã hóa template và dữ liệu nhạy cảm khi lưu, truyền; bảo mật vật lý thiết bị; xác thực đa yếu tố cho quản trị | | | ● | Luật 91 Đ31.4.a; NĐ 330 Đ70.1.c–d |
| Kiểm thử độ chính xác, sai lệch theo nhóm người, chống giả mạo trước mỗi phiên bản mô hình | | | ● | NĐ 356 Đ10.5.a (độ tin cậy của thuật toán) |
| Nhận diện 1:N: công bố quy mô danh sách tối đa cho mỗi điểm nhận diện theo ngưỡng; cảnh báo khi vượt; hỗ trợ chế độ 1:1 và chia danh sách theo cửa (B3 mục B.3) | | | ● | Luật 91 Đ3.3; NĐ 330 Đ39.1.b |
| Giám sát sau triển khai: thống kê tỷ lệ từ chối nhầm, số khiếu nại, số lần xem xét lại | | | ● | NĐ 356 Đ10.5.b |
| Đánh giá tuân thủ bảo vệ dữ liệu cá nhân định kỳ 01 năm/lần | ● | ● | ● | NĐ 356 Đ10.5.đ; NĐ 330 Đ67.1 |

Mức **KCN**: không có biện pháp nào làm tính năng trở nên chấp nhận được; tính năng không được phát triển, không được bán và đại lý không được cấu hình.

## 5. Quy trình xét duyệt tính năng mới

### 5.1. Khi nào phải xét duyệt

- Tính năng mới có xử lý hình ảnh người, biển số hoặc dữ liệu gắn với người.
- Thay đổi mô hình AI làm thay đổi dữ liệu đầu vào, đầu ra, hoặc thay đổi đáng kể độ chính xác; **thay mô hình tự phát triển bằng mô hình mua, nhập từ bên thứ ba** (kể cả bên nước ngoài) hoặc ngược lại — thẩm định theo B7 mục 1.1.
- Cung cấp chức năng **tinh chỉnh mô hình tại chỗ** trên dữ liệu của khách hàng (B7 phương án C).
- Mở rộng tính năng cũ sang bối cảnh mới (ví dụ từ văn phòng sang trường học, từ nội bộ sang khu vực công cộng).
- Tính năng được yêu cầu riêng cho một khách hàng (dự án tùy biến).

### 5.2. Các bước

| Bước | Việc | Người thực hiện | Đầu ra | Thời hạn |
|---|---|---|---|---|
| 1 | Lập phiếu mô tả tính năng (mục 5.4) | Trưởng nhóm sản phẩm | Phiếu | Trước khi lập kế hoạch phát triển |
| 2 | Tự phân loại theo mục 2 | Trưởng nhóm sản phẩm | Mức đề xuất | Cùng bước 1 |
| 3 | Thẩm tra dữ liệu, cơ sở pháp lý, biện pháp | {{NHAN_SU_BVDLCN_NCC}}; trưởng nhóm bảo mật | Ý kiến bằng văn bản | {{SO_NGAY_THAM_TRA}} ngày làm việc |
| 4 | Quyết định mức và điều kiện | {{NHOM_XET_DUYET_RUI_RO_AI}} | Biên bản xét duyệt | Trước khi phát triển (mức C), trước khi phát hành (mức T, TB) |
| 5 | Triển khai biện pháp theo mục 4; kiểm thử | Nhóm phát triển, kiểm thử | Kết quả kiểm thử | Trước khi phát hành |
| 6 | Cập nhật B1, B3, B4, bảng tại mục 3, tài liệu bán hàng | Nhóm sản phẩm | Tài liệu cập nhật | Cùng ngày phát hành |
| 7 | Giám sát sau phát hành; báo cáo | Nhóm hỗ trợ khách hàng | Báo cáo quý | Hằng quý với mức C |

Nhân sự BVDLCN có quyền **phủ quyết** việc phát hành tính năng mức C khi biện pháp bắt buộc chưa hoàn thành. Tính năng xếp mức KCN dừng ở bước 4.

### 5.3. Xác nhận của khách hàng trước khi bật tính năng mức C

Trước khi bật tính năng mức C, khách hàng (hoặc đại lý thay mặt khách hàng) xác nhận trong phần mềm hoặc bằng văn bản các nội dung sau:

☐ Đã xác định mục đích và cơ sở xử lý; đã có sự đồng ý của chủ thể hoặc căn cứ pháp luật khác, và đã nêu rõ đây là dữ liệu cá nhân nhạy cảm.

☐ Đã cấu hình phương thức thay thế cho người không đồng ý.

☐ Đã phân công người xem xét lại kết quả bất lợi.

☐ Đã đặt thời hạn lưu và chính sách xóa.

☐ Đã hoặc sẽ lập, cập nhật hồ sơ đánh giá tác động xử lý dữ liệu cá nhân trong 60 ngày kể từ khi bắt đầu xử lý.

Người xác nhận: {{NHAN_SU_BVDLCN_KH}} — {{TEN_KHACH_HANG}} — ngày ... tháng ... năm ...

### 5.4. Phiếu phân loại rủi ro tính năng

| Mục | Nội dung |
|---|---|
| Tên tính năng, mã | |
| Mô tả ngắn: tính năng làm gì, cho ai dùng | |
| Dữ liệu đầu vào; dữ liệu lưu lại; thời hạn lưu mặc định | |
| Kết quả đầu ra; có dẫn tới quyết định tự động không, hệ quả gì | |
| Đối tượng chủ thể (nhân viên, khách, trẻ em, người qua đường) | |
| Bối cảnh lắp đặt dự kiến | |
| Đánh giá Y1–Y7 | |
| Mức đề xuất; lý do | |
| Biện pháp bắt buộc đã có / còn thiếu | |
| Ý kiến nhân sự BVDLCN | |
| Quyết định của nhóm xét duyệt; ngày | |

## 6. Rà soát định kỳ

Bảng tại mục 3 được rà soát {{CHU_KY_RA_SOAT_PHAN_LOAI}} và khi có một trong các sự kiện: có văn bản pháp luật mới về trí tuệ nhân tạo hoặc bảo vệ dữ liệu cá nhân; có sự cố liên quan đến tính năng; cơ quan có thẩm quyền có yêu cầu; tỷ lệ khiếu nại của tính năng tăng bất thường. Kết quả rà soát là một phần của báo cáo đánh giá tuân thủ hằng năm theo điểm đ khoản 5 Điều 10 Nghị định số 356/2025/NĐ-CP.

| **Nơi nhận:**<br/>- Nhóm sản phẩm, phát triển;<br/>- Bộ phận bán hàng, đối tác;<br/>- {{NHAN_SU_BVDLCN_NCC}};<br/>- Lưu: hồ sơ sản phẩm. | **{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

## Hướng dẫn điền

- {{NHOM_XET_DUYET_RUI_RO_AI}}: ghi thành phần (ví dụ giám đốc sản phẩm, nhân sự BVDLCN, trưởng nhóm bảo mật, pháp chế). Nên có ít nhất một người không thuộc nhóm phát triển tính năng.
- {{CHU_KY_RA_SOAT_PHAN_LOAI}}: gợi ý 12 tháng, trùng kỳ đánh giá tuân thủ hằng năm.
- {{SO_NGAY_THAM_TRA}}: thời hạn thẩm tra nội bộ, nhà cung cấp tự đặt.
- Cột "Mức" tại mục 3 là đề xuất ban đầu. Nhà cung cấp phải rà lại theo sản phẩm thật: tính năng không có thì xóa dòng; tính năng xử lý khác mô tả thì sửa cột dữ liệu và lý do.
- Không hạ mức F3–F9 xuống dưới C chỉ vì khách hàng yêu cầu. Nếu thiết kế thực sự khác (ví dụ F1 có nhận diện lại người), xếp lại theo yếu tố Y1–Y7.
- Khi pháp luật về trí tuệ nhân tạo có quy định mức rủi ro, thêm cột "Mức theo quy định" vào bảng mục 3 và ghi rõ nguồn.

## Bằng chứng cần lưu

- Bản B2 đã ký; lịch sử phân loại lại.
- Phiếu phân loại (mục 5.4) và biên bản xét duyệt của từng tính năng.
- Kết quả kiểm thử trước phát hành cho tính năng mức C (độ chính xác, sai lệch, chống giả mạo).
- Xác nhận của khách hàng trước khi bật tính năng mức C (nhật ký trong phần mềm hoặc văn bản).
- Báo cáo giám sát sau phát hành; kết quả rà soát định kỳ.
