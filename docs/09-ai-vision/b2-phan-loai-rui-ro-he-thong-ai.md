# Mẫu Phân loại hệ thống AI theo mức độ rủi ro

> **Căn cứ:** Luật 91/2025/QH15 Đ2.1, Đ3.2, Đ3.3, Đ9.2, Đ19.1.a, Đ19.2, Đ24, Đ25.3, Đ30.1, Đ30.3, Đ30.4, Đ30.5, Đ31.2, Đ31.4.a, Đ32.2, Đ32.4, Đ37.1.b; NĐ 356/2025/NĐ-CP Đ4.1, Đ6.3, Đ6.4, Đ10.2, Đ10.3, Đ10.5, Đ10.6, Đ19.3.g, Đ21.5, Đ21.6; NĐ 330/2026/NĐ-CP Đ67.1, Đ67.2.a–d, Đ67.3.b, Đ67.4.b, Đ70.1.c–d, Đ70.2.b, Đ71.1.a, Đ71.2.a; Luật 134/2025/QH15 Đ3.3–3.5, Đ4.2, Đ7, Đ9, Đ10, Đ11.1, Đ12.2, Đ13, Đ14, Đ29.5, Đ35; NĐ 142/2026/NĐ-CP Đ5.8, Đ6, Đ8, Đ9, Đ10, Đ11, Đ12, Đ13, Đ14, Đ15, Đ19; QĐ 33/2026/QĐ-TTg Đ4, Phụ lục mục I.2, I.3, V.1, VI.6, VI.22, VI.23 · **Đối chiếu văn bản gốc:** 29/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Mã tài liệu:** B2. **Ai lập:** nhóm sản phẩm của nhà cung cấp, nhân sự BVDLCN thẩm tra, lãnh đạo phụ trách sản phẩm phê duyệt. **Khi nào:** lập lần đầu cho toàn bộ tính năng AI hiện có, trước khi đưa hệ thống vào sử dụng; phân loại lại khi thêm tính năng, đổi mô hình AI, đổi mục đích sử dụng được quảng bá, đổi bối cảnh triển khai, hoặc theo chu kỳ tại mục 6.

**Áp dụng mô hình:** M1–M5. Nhà cung cấp là tổ chức **phát triển** hệ thống AI ở mọi mô hình, nên cần phân loại ngay cả khi chỉ bán thiết bị (M1). Theo Luật 134 Đ3, nhà cung cấp đưa hệ thống ra thị trường dưới tên, thương hiệu của mình là **nhà cung cấp** (Đ3.4), kể cả khi mô hình do bên thứ ba phát triển; nếu tự huấn luyện, tinh chỉnh mô hình thì đồng thời là **nhà phát triển** (Đ3.3). Khách hàng là **bên triển khai** (Đ3.5). Khách hàng dùng B2 làm đầu vào cho phần đánh giá rủi ro của hồ sơ đánh giá tác động (NĐ 356 Đ19.3.g).

| Yêu cầu | Căn cứ |
|---|---|
| Xử lý DLCN bằng trí tuệ nhân tạo phải **phân loại theo mức độ rủi ro** để có biện pháp bảo vệ phù hợp | Luật 91 Đ30.4 |
| DLCN trong môi trường AI xử lý đúng mục đích, giới hạn trong phạm vi cần thiết | Luật 91 Đ30.1 |
| Không sử dụng, phát triển hệ thống AI dùng DLCN để gây tổn hại quốc phòng, an ninh, trật tự, hoặc xâm phạm tính mạng, sức khỏe, danh dự, nhân phẩm, tài sản của người khác | Luật 91 Đ30.5 |
| Thông báo xử lý tự động, giải thích thuật toán, cho chủ thể lựa chọn không tham gia | NĐ 356 Đ10.3 |
| Biện pháp bảo vệ trong hệ thống AI (tiêu chuẩn ANM, giám sát, đánh giá tuân thủ hằng năm) | NĐ 356 Đ10.5 |
| Nhà cung cấp **tự phân loại** hệ thống AI theo 3 mức (cao, trung bình, thấp) trước khi đưa vào sử dụng; mức trung bình, cao phải có hồ sơ phân loại | Luật 134 Đ9.1, Đ10.1; NĐ 142 Đ6.1, Đ12.1 |
| Mức **cao** chỉ gồm hệ thống thuộc Danh mục do Thủ tướng Chính phủ ban hành | NĐ 142 Đ6.3.a; QĐ 33 |
| Mức trung bình, cao: thông báo kết quả phân loại qua Cổng thông tin điện tử một cửa về trí tuệ nhân tạo **trước khi** đưa vào sử dụng | Luật 134 Đ10.3; NĐ 142 Đ14.1 |
| Mức cao: đánh giá sự phù hợp trước khi đưa vào sử dụng và khi có thay đổi đáng kể | Luật 134 Đ13.1, Đ13.3; NĐ 142 Đ13.1 |
| Bên triển khai kế thừa kết quả phân loại; sửa đổi, tích hợp, đổi chức năng, mục đích làm phát sinh rủi ro mới hoặc cao hơn thì phối hợp nhà cung cấp phân loại lại | Luật 134 Đ10.2; NĐ 142 Đ6.4 |
| Hệ thống AI tương tác trực tiếp với con người: người sử dụng phải nhận biết đang tương tác với hệ thống AI (mọi mức) | Luật 134 Đ11.1 |
| Không phân loại hệ thống AI theo mức độ rủi ro: **phạt 50–70 triệu đồng** | NĐ 330 Đ67.2.d |
| Quyết định tự động ảnh hưởng quyền, lợi ích mà không có cơ chế giám sát hoặc không cho yêu cầu đánh giá lại bởi con người: **70–100 triệu đồng**; đình chỉ hệ thống 03–06 tháng | NĐ 330 Đ67.3.b, Đ67.4.b |

Mức phạt là mức cho tổ chức; cá nhân bằng một nửa (NĐ 330 Đ7.1). Nghị định xử phạt vi phạm hành chính riêng về trí tuệ nhân tạo theo Luật 134 Đ29.5 **chưa thấy ban hành** tại 29/09/2026 — **[CẦN ĐỐI CHIẾU]**. Mức phạt nêu trên là chế tài về bảo vệ DLCN trong hệ thống AI.

> **Hai thang phân loại, hai mục đích.**
>
> 1. **Thang theo Luật Trí tuệ nhân tạo** (mục 2.3): 3 mức cao, trung bình, thấp (Luật 134 Đ9.1; NĐ 142 Đ6.3). Mức cao xác định **duy nhất** theo Danh mục tại QĐ 33; không tự suy ra từ tiêu chí chung tại Luật 134 Đ9.2. Mức trung bình theo NĐ 142 Đ9. Còn lại là mức thấp.
> 2. **Thang bảo vệ DLCN nội bộ** (mục 2.2): BV-Thấp, BV-Trung bình, BV-Cao, BV-Không chấp nhận. Thang này đáp ứng Luật 91 Đ30.4 (chế tài NĐ 330 Đ67.2.d). Luật 91, NĐ 356, NĐ 330 không định nghĩa mức rủi ro, nên nhà cung cấp tự xây dựng dựa trên các quy định về dữ liệu nhạy cảm, trẻ em, người lao động, camera công cộng và quyết định tự động.
>
> Mỗi tính năng ghi **cả hai mức**. Hai thang độc lập với nhau. Ví dụ chấm công bằng khuôn mặt là **BV-Cao** nhưng chỉ là mức **thấp** theo Luật 134, vì Danh mục không có lĩnh vực lao động. Khi trao đổi với khách hàng, không gọi mức BV-Cao là "rủi ro cao", để khách hàng không hiểu nhầm là hệ thống phải đánh giá sự phù hợp.

**Vùng xám liên quan:** V3 (chấm công dựa vào hợp đồng lao động hay đồng ý), V4 (dựng hành trình là dữ liệu vị trí), V5 (nơi công cộng và nơi làm việc), V7 (danh sách đen dựa vào Luật 91 Đ19.1.a). Thêm hai điểm theo pháp luật AI: điểm danh học sinh có thuộc QĐ 33 Phụ lục mục I.3 không; phạm vi "đầu mối giao thông, công trình công cộng quan trọng" tại QĐ 33 Phụ lục mục VI.6 (mục 2.3).

---

<p align="center"><b>PHÂN LOẠI HỆ THỐNG TRÍ TUỆ NHÂN TẠO THEO MỨC ĐỘ RỦI RO</b><br/><b>{{TEN_SAN_PHAM}} — phiên bản {{PHIEN_BAN_SAN_PHAM}}</b></p>

| Thông tin tài liệu | |
|---|---|
| Mã tài liệu | {{MA_TAI_LIEU}} |
| Nhà cung cấp | {{TEN_NHA_CUNG_CAP}} |
| Ngày phân loại | {{NGAY_BAN_HANH_TAI_LIEU}} |
| Nhóm xét duyệt | {{NHOM_XET_DUYET_RUI_RO_AI}} |
| Mã định danh hệ thống AI trên Cổng một cửa (nếu đã thông báo) | {{MA_DINH_DANH_HE_THONG_AI}} |
| Người phê duyệt | {{HO_TEN_NGUOI_KY}} — {{CHUC_DANH_NGUOI_KY}} |

## 1. Mục đích và phạm vi

Tài liệu này phân loại từng tính năng xử lý dữ liệu cá nhân bằng trí tuệ nhân tạo của {{TEN_SAN_PHAM}} theo mức độ rủi ro đối với quyền, lợi ích của chủ thể dữ liệu, và xác định biện pháp bắt buộc cho từng mức, theo khoản 4 Điều 30 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15.

Tài liệu này đồng thời ghi kết quả tự phân loại mức độ rủi ro của hệ thống trí tuệ nhân tạo theo khoản 1 Điều 10 Luật Trí tuệ nhân tạo số 134/2025/QH15 và khoản 1 Điều 6 Nghị định số 142/2026/NĐ-CP, đối với cấu hình cung cấp chuẩn. {{TEN_NHA_CUNG_CAP}} là nhà cung cấp theo khoản 4 Điều 3 Luật Trí tuệ nhân tạo số 134/2025/QH15. Khách hàng sử dụng hệ thống trong hoạt động của mình là bên triển khai theo khoản 5 Điều 3 Luật này.

Đơn vị phân loại là **tính năng trong một bối cảnh sử dụng**. Cùng một thuật toán (ví dụ nhận diện khuôn mặt) có thể ở mức khác nhau tùy nơi lắp đặt, đối tượng bị nhận diện và hậu quả của kết quả.

Thang tại mục 2.2 là thang nội bộ về bảo vệ dữ liệu cá nhân của {{TEN_NHA_CUNG_CAP}}, vì pháp luật về bảo vệ dữ liệu cá nhân không quy định các mức rủi ro cụ thể. Mức rủi ro của hệ thống trí tuệ nhân tạo theo Điều 9 Luật Trí tuệ nhân tạo số 134/2025/QH15, khoản 3 Điều 6 Nghị định số 142/2026/NĐ-CP và Danh mục ban hành kèm theo Quyết định số 33/2026/QĐ-TTg được xác định riêng tại mục 2.3.

## 2. Thang phân loại

### 2.1. Các yếu tố đánh giá

| Mã | Yếu tố | Câu hỏi | Căn cứ tham chiếu |
|---|---|---|---|
| Y1 | Nhận dạng | Tính năng có xác định danh tính một người cụ thể không? | Luật 91 Đ2.1; NĐ 356 Đ10.2 |
| Y2 | Loại dữ liệu | Có xử lý dữ liệu sinh trắc học, dữ liệu vị trí, ảnh thẻ căn cước, hoặc suy luận dữ liệu nhạy cảm khác không? | Luật 91 Đ31; NĐ 356 Đ4.1 |
| Y3 | Đối tượng | Chủ thể có phải trẻ em, người lao động (quan hệ phụ thuộc), hoặc người qua đường chưa biết mình bị nhận diện? | Luật 91 Đ24, Đ25.3, Đ32 |
| Y4 | Quyết định tự động | Kết quả có tự động dẫn tới hệ quả cho cá nhân (từ chối ra vào, trừ công, kỷ luật, cảnh báo an ninh) không? | NĐ 356 Đ10.3; NĐ 330 Đ67.3.b |
| Y5 | Bối cảnh | Nơi lắp đặt là khu vực công cộng, khu vực cung cấp dịch vụ cho khách, nơi làm việc, trường học, hay đầu mối giao thông, công trình công cộng quan trọng? | Luật 91 Đ32; NĐ 330 Đ71.2.a; QĐ 33 Phụ lục mục I, VI.6 |
| Y6 | Tích lũy | Hệ thống có tổng hợp dữ liệu thành hồ sơ, hành trình, thói quen của một người không? | NĐ 356 Đ4.1.c, Đ4.1.h |
| Y7 | Lựa chọn của chủ thể | Chủ thể có thể từ chối mà vẫn được phục vụ bằng cách khác không? | Luật 91 Đ9.2; NĐ 356 Đ10.3 |
| Y8 | Xác minh của con người | Kết quả có hiệu lực ngay, hay phải qua người có thẩm quyền xem xét độc lập trước khi có hiệu lực? | Luật 134 Đ4.2; NĐ 142 Đ8.1.a, Đ8.2.b |

### 2.2. Các mức bảo vệ dữ liệu cá nhân (thang nội bộ)

| Mức | Tiêu chí (chỉ cần một tiêu chí là xếp vào mức đó) | Nguyên tắc cung cấp |
|---|---|---|
| **BV-Thấp** | Không xác định danh tính (Y1 = không); xử lý ẩn danh tại thiết bị; không lưu ảnh có thể nhận ra người; chỉ xuất số liệu tổng hợp; không quyết định tự động về cá nhân | Được bật mặc định nếu đã cấu hình ẩn danh |
| **BV-Trung bình** | Xác định cá nhân qua dữ liệu cơ bản (biển số, hình ảnh) đối với người đã đăng ký hoặc đã được thông báo; không dùng sinh trắc học; quyết định tự động có hệ quả nhỏ và có người trực xử lý ngay | Được cung cấp; khách hàng bật có chủ đích |
| **BV-Cao** | Có một trong các yếu tố: xử lý sinh trắc học để nhận dạng hoặc xác thực (Y2); chủ thể là trẻ em (Y3); quyết định tự động ảnh hưởng quyền, lợi ích như tiền lương, kỷ luật, từ chối tiếp cận (Y4); dựng hành trình, hồ sơ của một người (Y6); danh sách theo dõi (danh sách đen) | **Tắt mặc định**; chỉ bật sau khi khách hàng xác nhận bằng văn bản đã đáp ứng các biện pháp mức BV-Cao tại mục 4 |
| **BV-Không chấp nhận** | Nhận diện khuôn mặt tự động trên camera công cộng để lập hồ sơ, phân tích hành vi, mục đích thương mại với người **chưa đồng ý**; suy luận nguồn gốc chủng tộc, dân tộc, quan điểm chính trị, tôn giáo, sức khỏe, xu hướng tình dục từ hình ảnh; chấm điểm cảm xúc, thái độ của từng người lao động, học sinh để đánh giá; mọi mục đích thuộc khoản 5 Điều 30 Luật 91 | **Không phát triển, không cung cấp, không hỗ trợ cấu hình**, trừ khi có căn cứ pháp luật riêng được pháp chế xác nhận bằng văn bản |

Quy tắc áp dụng:

1. Mức của tính năng là **mức cao nhất** mà bất kỳ yếu tố nào chạm tới.
2. Bối cảnh triển khai của khách hàng chỉ có thể **nâng** mức, không hạ mức.
3. Tính năng xếp mức BV-Không chấp nhận được ghi vào danh sách tính năng cấm trong tài liệu bán hàng và tài liệu đối tác.
4. Mức BV-Không chấp nhận là **quyết định nội bộ** của {{TEN_NHA_CUNG_CAP}} dựa trên Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Nghị định số 330/2026/NĐ-CP. Điều 7 Luật Trí tuệ nhân tạo số 134/2025/QH15 không cấm riêng nhận diện khuôn mặt hay nhận diện cảm xúc. Tuy vậy, việc phát triển, cung cấp, triển khai hệ thống nhằm lợi dụng điểm yếu của trẻ em và nhóm người dễ bị tổn thương khác để gây tổn hại (điểm c khoản 2 Điều 7), hoặc thu thập, xử lý, sử dụng dữ liệu trái pháp luật về bảo vệ dữ liệu cá nhân để huấn luyện, vận hành hệ thống (khoản 3 Điều 7) là hành vi bị nghiêm cấm.

### 2.3. Mức theo Luật Trí tuệ nhân tạo

| Mức | Cách xác định | Căn cứ |
|---|---|---|
| **Cao** | Hệ thống thuộc Danh mục hệ thống trí tuệ nhân tạo có rủi ro cao ban hành kèm theo Quyết định số 33/2026/QĐ-TTg (hiệu lực 15/8/2026) | Luật 134 Đ9.1.a, Đ13.4; NĐ 142 Đ6.3.a |
| **Trung bình** | Không thuộc Danh mục **và** có khả năng gây nhầm lẫn, tác động hoặc thao túng người sử dụng do người sử dụng không nhận biết được chủ thể tương tác là hệ thống AI hoặc nội dung do hệ thống tạo ra | Luật 134 Đ9.1.b; NĐ 142 Đ6.3.b, Đ9.1 |
| **Thấp** | Không thuộc hai trường hợp trên | Luật 134 Đ9.1.c; NĐ 142 Đ6.3.c |

**Cách tra Danh mục.** Đọc cả cột mô tả điều kiện của từng dòng. Hầu hết các dòng chỉ áp dụng khi đủ các điều kiện "chỉ áp dụng khi…", trong đó thường có điều kiện hệ thống thực thi mà không qua xác minh độc lập của con người. Các dòng liên quan đến camera AI:

| Dòng Danh mục | Hệ thống | Điều kiện áp dụng (tóm tắt) | Đánh giá sự phù hợp |
|---|---|---|---|
| I.2 | Tự động kiểm tra, đánh giá kết quả, xếp hạng người học | Kết quả do hệ thống tạo ra được dùng làm căn cứ chính thức để đánh giá kết quả học tập, năng lực hoặc xếp hạng người học; trong hệ thống giáo dục quốc dân | Nhà cung cấp tự đánh giá hoặc thuê tổ chức đánh giá (Luật 134 Đ13.2.b) |
| I.3 | Giám sát, phân tích hành vi người học | Sử dụng dữ liệu sinh trắc học (nhận diện khuôn mặt, ánh mắt, hành vi, cảm xúc cá nhân) hoặc cơ chế phản hồi, cảnh báo tự động tần suất cao về trạng thái chú ý, biểu cảm cá nhân, kết quả học tập, đánh giá người học gây căng thẳng tâm lý hoặc xâm phạm quyền riêng tư của người học | Như I.2 |
| V.1 | Nhận dạng sinh trắc học diện rộng phục vụ giải quyết vụ án dân sự công ích | Áp dụng diện rộng tại nơi xảy ra hành vi vi phạm hoặc nơi xảy ra hậu quả thiệt hại | **Phải chứng nhận** trước khi đưa vào sử dụng (Luật 134 Đ13.2.a) |
| VI.6 | Tự động phát hiện vi phạm hoặc nhận diện sinh trắc học theo thời gian thực để phục vụ kiểm soát, xử lý | Tại đầu mối giao thông, công trình công cộng quan trọng; kết quả dùng trực tiếp để xử lý vi phạm, cưỡng chế, kiểm soát an ninh, trật tự, hạn chế tiếp cận hoặc áp dụng biện pháp quản lý; thực thi không qua xác minh độc lập của cán bộ có thẩm quyền | Như I.2 |
| VI.22 | Phân tích hành vi hành khách qua camera tại khu vực kiểm soát an ninh (hàng không) | Tự động xác định hành vi nghi vấn, kích hoạt cảnh báo an ninh hoặc biện pháp can thiệp; thực thi không có xác nhận ban đầu của nhân viên an ninh | Như I.2 |
| VI.23 | Quản lý an ninh hàng không, tự động xác định đối tượng nguy cơ, từ chối vận chuyển | Tự động từ chối vận chuyển hoặc kích hoạt biện pháp an ninh; thực thi không có xác minh của nhân viên an ninh hàng không có thẩm quyền | Như I.2 |

**Nguyên tắc áp dụng:**

1. Mức cao chỉ phát sinh khi cấu hình triển khai khớp một dòng Danh mục. Tiêu chí tại khoản 2 Điều 9 Luật Trí tuệ nhân tạo và khoản 1 Điều 8 Nghị định số 142/2026/NĐ-CP là căn cứ để cơ quan có thẩm quyền lập Danh mục, không phải để nhà cung cấp tự xếp thêm hệ thống vào mức cao.
2. Chế độ "xác minh trước khi thực thi" (B3 mục B.8) làm cho điều kiện "thực thi mà không qua xác minh độc lập" của các dòng VI.6, VI.22, VI.23 không còn thỏa mãn, nếu việc xác minh là thực chất: người có thẩm quyền có đủ thông tin, thẩm quyền để xem xét độc lập, can thiệp, từ chối hoặc thay đổi kết quả trước khi kết quả có hiệu lực (tinh thần điểm b khoản 2 Điều 8 Nghị định số 142/2026/NĐ-CP). Khoản 2 Điều 8 là tiêu chí để cơ quan có thẩm quyền không đề xuất đưa hệ thống vào Danh mục, không phải quyền tự miễn của doanh nghiệp.
3. Các tính năng nhận diện của {{TEN_SAN_PHAM}} không tạo nội dung và không mô phỏng con người khi tương tác, nên thông thường không thuộc mức trung bình — **[CẦN ĐỐI CHIẾU]**: đây là cách hiểu của bộ khung; thiết bị, kiosk nhận diện tương tác trực tiếp với người, nên vẫn phải cho người dùng biết đang tương tác với hệ thống AI (khoản 1 Điều 11 Luật Trí tuệ nhân tạo) để không phát sinh khả năng nhầm lẫn. Nếu sản phẩm có trợ lý ảo, giọng nói tổng hợp, kiosk hội thoại, hoặc chức năng tạo, tái tạo hình ảnh bằng AI thì xét lại theo khoản 1 và khoản 3 Điều 9 Nghị định số 142/2026/NĐ-CP.
4. Trường hợp chưa xác định được mức độ rủi ro, {{TEN_NHA_CUNG_CAP}} đề nghị Bộ Khoa học và Công nghệ hướng dẫn phân loại trên cơ sở hồ sơ kỹ thuật (khoản 4 Điều 10 Luật Trí tuệ nhân tạo; khoản 4 Điều 10 Nghị định số 142/2026/NĐ-CP). Công cụ hỗ trợ phân loại rủi ro tự động trên Cổng thông tin điện tử một cửa về trí tuệ nhân tạo có tính chất hỗ trợ, không bắt buộc (khoản 2 Điều 10 Nghị định số 142/2026/NĐ-CP).
5. Hồ sơ phân loại cho mức trung bình, cao gồm: thông tin nhận diện hệ thống; mô tả hệ thống và bối cảnh sử dụng; thông tin về dữ liệu đầu vào chủ yếu; tóm tắt biện pháp quản lý rủi ro (khoản 2 Điều 12 Nghị định số 142/2026/NĐ-CP). Hệ thống có sử dụng dữ liệu cá nhân được dùng hồ sơ đánh giá tác động xử lý dữ liệu cá nhân để thay thế hoặc tích hợp làm thành phần của hồ sơ phân loại rủi ro (khoản 7 Điều 12). Hồ sơ phân loại được lưu trong suốt thời gian hệ thống hoạt động (khoản 6 Điều 12).
6. Mức theo Luật Trí tuệ nhân tạo phụ thuộc bối cảnh lắp đặt của bên triển khai. Bên triển khai kế thừa kết quả phân loại của nhà cung cấp; khi sửa đổi, tích hợp, thay đổi chức năng hoặc mục đích sử dụng làm phát sinh rủi ro mới hoặc cao hơn thì phối hợp với nhà cung cấp phân loại lại (khoản 2 Điều 10 Luật Trí tuệ nhân tạo; khoản 4 Điều 6 Nghị định số 142/2026/NĐ-CP). Xác nhận bối cảnh lắp đặt tại mục 5.3.
7. Thời hạn chuyển tiếp: hệ thống đã đưa vào hoạt động trước 01/3/2026 hoàn thành nghĩa vụ theo Luật Trí tuệ nhân tạo trong 12 tháng, hoặc 18 tháng với hệ thống trong lĩnh vực y tế, giáo dục, tài chính (khoản 1 Điều 35 Luật Trí tuệ nhân tạo). Hệ thống thuộc Danh mục đã hoạt động trước 15/8/2026 hoàn thành nghĩa vụ trước 01/3/2027, hoặc trước 01/9/2027 với lĩnh vực y tế, giáo dục, tài chính; hệ thống đưa vào hoạt động trong 06 tháng kể từ 15/8/2026 hoàn thành trước 01/3/2027 (Điều 4 Quyết định số 33/2026/QĐ-TTg).

## 3. Bảng phân loại tính năng

| # | Tính năng | Dữ liệu xử lý | Quyết định tự động | Mức BV (mục 2.2) | Lý do chính | Cấu hình mặc định, điều kiện | Mức theo Luật 134 / QĐ 33 (cấu hình chuẩn) | Dòng Danh mục; điều kiện làm nâng mức |
|---|---|---|---|---|---|---|---|---|
| F1 | Đếm người, bản đồ nhiệt ẩn danh | Hình ảnh tạm thời tại thiết bị; đầu ra là số đếm | Không | **BV-Thấp** | Không nhận dạng; không lưu ảnh (Luật 91 Đ2.1) | Bật được mặc định nếu xử lý tại thiết bị, không lưu ảnh, không nhận diện lại người qua các camera. Nếu theo dấu từng người qua nhiều camera: xếp lại theo F9 | **Thấp** | Không thuộc Danh mục; không thuộc NĐ 142 Đ9.1 |
| F2 | Nhận diện biển số bãi xe | Biển số, ảnh biển số (NĐ 356 Đ3.7) | Có — mở/không mở barie | **BV-Trung bình** | Dữ liệu cơ bản; hệ quả nhỏ, có nhân viên bãi xe xử lý | Thời hạn lưu xe vãng lai ngắn; không dựng hành trình. Tra biển số qua nhiều bãi, nhiều điểm: nâng lên **BV-Cao** (V4) | **Thấp** | **Cao** theo VI.6 nếu lắp tại đầu mối giao thông, công trình công cộng quan trọng (bến xe, nhà ga, cảng…), kết quả dùng trực tiếp để xử lý vi phạm, cưỡng chế, hạn chế tiếp cận, và không qua xác minh độc lập của cán bộ có thẩm quyền |
| F3 | Kiểm soát ra vào bằng khuôn mặt | Ảnh đăng ký, template (Luật 91 Đ31.2; NĐ 356 Đ4.1.đ) | Có — mở/không mở cửa | **BV-Cao** | Sinh trắc học; người lao động là bên yếu thế (Luật 91 Đ25.3) | Tắt mặc định; phương thức thay thế (thẻ, PIN, QR) bắt buộc chạy song song; liveness bật | **Thấp** (văn phòng, nhà máy, chung cư) | **Cao** theo VI.6 như F2, ví dụ cổng soát vé, cổng an ninh tự động từ chối tại nhà ga, cảng hàng không. Khu vực kiểm soát an ninh hàng không: xem thêm VI.22, VI.23 |
| F4 | Chấm công bằng khuôn mặt | Như F3; nhật ký chấm công | Có — ghi công, đi muộn, vắng | **BV-Cao** | Sinh trắc học + quyết định ảnh hưởng tiền lương, kỷ luật (NĐ 330 Đ67.3.b) | Như F3; kết quả bất lợi phải qua người xem xét lại trước khi dùng để trừ lương, kỷ luật (V3) | **Thấp** | Danh mục không có lĩnh vực lao động, việc làm. Vẫn là dữ liệu sinh trắc học nhạy cảm theo Luật 91 |
| F5 | Danh sách đen (cảnh báo người trong danh sách theo dõi) | Template của người trong danh sách; ảnh mọi người đi qua camera để so khớp | Có — cảnh báo an ninh | **BV-Cao** (có thể **BV-Không chấp nhận** — xem lý do) | Nhận diện người chưa đồng ý; chỉ có thể dựa vào Luật 91 Đ19.1.a và bên xử lý phải tự chứng minh (V7) | Tắt mặc định; chỉ bật khi khách hàng có quy chế lập, gỡ danh sách, căn cứ cụ thể cho từng người (biên bản, trình báo), cơ chế giám sát theo Luật 91 Đ19.2. Không có các điều kiện này: **BV-Không chấp nhận** | **Thấp**, trừ các bối cảnh ở cột bên | **Cao** theo VI.6 khi tự động kiểm soát an ninh, hạn chế tiếp cận tại đầu mối giao thông, công trình công cộng quan trọng mà không qua xác minh. **Cao, phải chứng nhận** theo V.1 nếu cung cấp để nhận dạng sinh trắc học diện rộng phục vụ giải quyết vụ án dân sự công ích |
| F6 | Nhận diện khách VIP, khách quay lại trên camera tại cửa hàng, khu vực công cộng | Template khách hàng; ảnh mọi người đi qua | Có — thông báo cho nhân viên | **BV-Cao** nếu chỉ nhận diện người **đã đăng ký và đồng ý**; **BV-Không chấp nhận** nếu nhận diện mọi người để lập hồ sơ | NĐ 330 Đ71.2.a phạt dùng camera công cộng nhận diện khuôn mặt tự động để lập hồ sơ, mục đích thương mại khi không có đồng ý | Chỉ hỗ trợ chế độ "danh sách người đã đồng ý"; ảnh người không có trong danh sách bị hủy ngay sau so khớp, không lưu template | **Thấp** | Dùng để thao túng nhận thức, hành vi khách hàng có chủ đích, có hệ thống, gây tổn hại nghiêm trọng: hành vi bị nghiêm cấm (Luật 134 Đ7.2.b). Rào cản chính vẫn là NĐ 330 Đ71.2.a |
| F7 | Nhận diện cảm xúc, thái độ | Hình ảnh khuôn mặt; kết quả suy luận | Tùy cách dùng | **BV-Không chấp nhận** khi gắn với từng người để đánh giá, chấm điểm; **BV-Cao** khi chỉ ra số liệu tổng hợp ẩn danh | Suy luận về đời sống riêng tư (NĐ 356 Đ4.1.c); dịch vụ nêu tại NĐ 356 Đ21.5 (giáo dục), Đ21.6 (phân tích hành vi) | Không cung cấp ở dạng gắn với cá nhân. Dạng tổng hợp: tắt mặc định, không lưu ảnh, cần hồ sơ đánh giá tác động riêng | **Cao** nếu áp dụng cho người học; **Thấp** trong bối cảnh khác | I.3 nêu đích danh "cảm xúc cá nhân", "biểu cảm cá nhân" của người học. Nhằm lợi dụng điểm yếu của trẻ em để gây tổn hại: hành vi bị nghiêm cấm (Luật 134 Đ7.2.c) |
| F8 | Điểm danh học sinh bằng khuôn mặt | Template của trẻ em; nhật ký điểm danh | Có — ghi vắng mặt, thông báo phụ huynh | **BV-Cao** | Trẻ em (Luật 91 Đ24); dịch vụ giáo dục có yếu tố giám sát (NĐ 356 Đ21.5) | Đồng ý của người đại diện theo pháp luật; phương án thay thế; không kết hợp nhận diện cảm xúc, chấm điểm hành vi; vắng mặt do không nhận diện được phải được giáo viên xác nhận | **Vùng xám. Khuyến nghị coi là Cao** (I.3) — **[CẦN ĐỐI CHIẾU]** | I.3 bao trùm hệ thống giám sát người học có sử dụng dữ liệu sinh trắc học (nhận diện khuôn mặt). Điểm danh 1:1 tại cổng có thể lập luận là không "phân tích hành vi"; điểm danh liên tục trong lớp, cảnh báo chuyên cần tự động cho phụ huynh sát với "cảnh báo tự động tần suất cao". Kết quả chuyên cần dùng làm căn cứ chính thức đánh giá, xếp hạng học sinh: thêm I.2. Có thể đề nghị Bộ KH&CN hướng dẫn (Luật 134 Đ10.4) |
| F9 | Dựng hành trình một người, một xe qua nhiều camera | Template hoặc đặc điểm nhận dạng lại; thời gian, vị trí camera | Không trực tiếp | **BV-Cao**; **BV-Không chấp nhận** khi theo dõi hàng loạt không có căn cứ | Có thể là dữ liệu vị trí nhạy cảm (NĐ 356 Đ4.1.h — V4) và thông tin đời sống riêng tư (Đ4.1.c) | Tắt mặc định; chỉ dùng tra cứu theo vụ việc, có phê duyệt của người được khách hàng ủy quyền, ghi nhật ký từng lần tra cứu; không chạy liên tục | **Thấp** | **Cao** theo VI.6 nếu kết quả dùng trực tiếp để kiểm soát, xử lý tại đầu mối giao thông, công trình công cộng quan trọng mà không qua xác minh độc lập |

Tính năng mới được thêm vào bảng theo quy trình tại mục 5. Không tính năng nào trong bảng bị cấm theo Điều 7 Luật Trí tuệ nhân tạo số 134/2025/QH15 ở cấu hình chuẩn; các giới hạn đối với nhận diện khuôn mặt nơi công cộng nằm ở pháp luật về bảo vệ dữ liệu cá nhân.

## 4. Biện pháp bắt buộc theo từng mức

Cột "Rủi ro cao theo Luật 134" áp dụng thêm khi cấu hình triển khai thuộc Danh mục (mục 2.3), bất kể mức BV. Dòng đánh dấu ở cả bốn cột áp dụng cho mọi hệ thống AI.

| Biện pháp | BV-Thấp | BV-Trung bình | BV-Cao | Rủi ro cao theo Luật 134 | Căn cứ |
|---|:---:|:---:|:---:|:---:|---|
| Ghi tính năng và mức rủi ro vào B1, hồ sơ đánh giá tác động | ● | ● | ● | ● | Luật 91 Đ30.4; NĐ 356 Đ19.3 |
| Tự phân loại theo Luật 134 trước khi đưa vào sử dụng; ghi kết quả vào mục 3 | ● | ● | ● | ● | Luật 134 Đ10.1; NĐ 142 Đ6.1 |
| Thiết bị, kiosk, ứng dụng nhận diện tương tác trực tiếp với người: cho người sử dụng biết đang tương tác với hệ thống AI (dòng chữ, biểu tượng trên màn hình; B3 Phần A) | ● | ● | ● | ● | Luật 134 Đ11.1 |
| Báo cáo sự cố AI nghiêm trọng qua Cổng một cửa (A7) | ● | ● | ● | ● | Luật 134 Đ12.2; NĐ 142 Đ19 |
| Rà soát, phân loại lại khi có sự kiện tại mục 5.1 | ● | ● | ● | ● | NĐ 142 Đ11 |
| Hướng dẫn khách hàng đặt biển báo, thông báo cho người bị ghi hình | ● | ● | ● | ● | Luật 91 Đ32.2; NĐ 330 Đ71.1.a |
| Cấu hình ẩn danh, không lưu ảnh được kiểm tra trước khi phát hành | ● | | | | Luật 91 Đ2.1 |
| Thời hạn lưu cấu hình được, tự động xóa | | ● | ● | ● | Luật 91 Đ3.3, Đ32.4 |
| Phân quyền theo vai trò; nhật ký truy cập, xuất dữ liệu | | ● | ● | ● | Luật 91 Đ30.3 |
| Tắt mặc định; bật phải qua bước xác nhận có cảnh báo pháp lý | | | ● | | NĐ 356 Đ6.3 (tinh thần thiết lập mặc định bảo vệ dữ liệu) |
| Khách hàng xác nhận bằng văn bản trước khi bật (mẫu tại mục 5.3) | | | ● | ● | Luật 91 Đ37.1.b; Luật 134 Đ10.2 |
| Mẫu thông báo, đồng ý nêu rõ dữ liệu nhạy cảm (K2) | | | ● | | NĐ 356 Đ6.4 |
| Phương thức thay thế chạy song song; cơ chế từ chối xử lý tự động | | ● *(nếu có quyết định tự động)* | ● | | NĐ 356 Đ10.3; NĐ 330 Đ67.2.b |
| Tài liệu giải thích thuật toán (B3) | | ● | ● | ● | NĐ 356 Đ10.3; NĐ 330 Đ67.2.a; Luật 134 Đ14.1.e |
| Người xem xét lại kết quả bất lợi; ngưỡng "cần xác minh" | | ● | ● | ● | NĐ 330 Đ67.3.b; Luật 134 Đ14.1.d |
| Chế độ "xác minh trước khi thực thi"; không có tùy chọn vô hiệu hóa cơ chế giám sát, can thiệp của con người (B3 mục B.8) | | | ● *(danh sách đen)* | ● | Luật 134 Đ7.4, Đ14.1.d; NĐ 142 Đ15.2.c |
| Công cụ chỉnh sửa, ẩn danh, xóa hồ sơ nhận dạng | | ● | ● | ● | NĐ 356 Đ10.6; NĐ 330 Đ67.2.c |
| Mã hóa template và dữ liệu nhạy cảm khi lưu, truyền; bảo mật vật lý thiết bị; xác thực đa yếu tố cho quản trị | | | ● | ● | Luật 91 Đ31.4.a; NĐ 330 Đ70.1.c–d |
| Kiểm thử độ chính xác, sai lệch theo nhóm người, chống giả mạo trước mỗi phiên bản mô hình; dữ liệu kiểm thử có tính đại diện | | | ● | ● | NĐ 356 Đ10.5.a; Luật 134 Đ14.1.b; NĐ 142 Đ15.2.b |
| Nhận diện 1:N: công bố quy mô danh sách tối đa cho mỗi điểm nhận diện theo ngưỡng; cảnh báo khi vượt; hỗ trợ chế độ 1:1 và chia danh sách theo cửa (B3 mục B.3) | | | ● | ● | Luật 91 Đ3.3; NĐ 330 Đ39.1.b |
| Giám sát sau triển khai: thống kê tỷ lệ từ chối nhầm, số khiếu nại, số lần xem xét lại | | | ● | ● | NĐ 356 Đ10.5.b |
| Hồ sơ phân loại rủi ro (được dùng hồ sơ đánh giá tác động xử lý DLCN thay thế hoặc tích hợp — K6) | | | | ● | NĐ 142 Đ12.2, Đ12.7 |
| Thông báo kết quả phân loại qua Cổng một cửa trước khi đưa vào sử dụng; nhận mã định danh hệ thống | | | | ● | Luật 134 Đ10.3; NĐ 142 Đ14 |
| Đánh giá sự phù hợp (tự đánh giá hoặc qua tổ chức; **phải chứng nhận** với dòng V.1); lập hồ sơ kỹ thuật; công khai kết quả trên Cổng | | | | ● | Luật 134 Đ13; NĐ 142 Đ13.2, Đ13.6 |
| Hệ thống quản lý rủi ro (xác định rủi ro; dữ liệu; giám sát của con người; biện pháp kiểm soát; rà soát khi thay đổi) | | | | ● | Luật 134 Đ14.1.a; NĐ 142 Đ15.1, Đ15.2 |
| Nhật ký hoạt động của hệ thống AI (B4 mục 4) | | | | ● | Luật 134 Đ14.1.c |
| Cung cấp cho bên triển khai thông tin về mục đích sử dụng, điều kiện vận hành an toàn, rủi ro đã xác định và biện pháp tương ứng (B3, B4) | | | | ● | NĐ 142 Đ15.3 |
| Cung cấp cho người sử dụng, người bị ảnh hưởng thông tin ở mức mô tả chức năng, cách thức vận hành, cảnh báo rủi ro (B3 Phần A) | | | | ● | Luật 134 Đ14.1.e |
| Nhà cung cấp nước ngoài cung cấp trực tiếp tại Việt Nam: đầu mối liên hệ hợp pháp tại Việt Nam (B7 mục 1.1) | | | | ● | Luật 134 Đ14.6 |
| Đánh giá tuân thủ bảo vệ dữ liệu cá nhân định kỳ 01 năm/lần | ● | ● | ● | ● | NĐ 356 Đ10.5.đ; NĐ 330 Đ67.1 |

Mức **BV-Không chấp nhận**: không có biện pháp nào làm tính năng trở nên chấp nhận được; tính năng không được phát triển, không được bán và đại lý không được cấu hình.

## 5. Quy trình xét duyệt tính năng mới

### 5.1. Khi nào phải xét duyệt

- Tính năng mới có xử lý hình ảnh người, biển số hoặc dữ liệu gắn với người.
- Thay đổi mô hình AI làm thay đổi dữ liệu đầu vào, đầu ra, hoặc thay đổi đáng kể độ chính xác; **thay mô hình tự phát triển bằng mô hình mua, nhập từ bên thứ ba** (kể cả bên nước ngoài) hoặc ngược lại — thẩm định theo B7 mục 1.1.
- Cung cấp chức năng **tinh chỉnh mô hình tại chỗ** trên dữ liệu của khách hàng (B7 phương án C).
- Mở rộng tính năng cũ sang bối cảnh mới (ví dụ từ văn phòng sang trường học, từ nội bộ sang khu vực công cộng, đầu mối giao thông).
- Tính năng được yêu cầu riêng cho một khách hàng (dự án tùy biến).
- Các sự kiện phải rà soát, phân loại lại mức độ rủi ro theo khoản 1 Điều 11 Nghị định số 142/2026/NĐ-CP: (a) thay đổi đáng kể về chức năng, mục đích sử dụng hoặc ngữ cảnh triển khai làm ảnh hưởng đến tiêu chí phân loại ban đầu; (b) sự cố nghiêm trọng chứng minh mức độ rủi ro thực tế cao hơn mức đã phân loại; (c) Thủ tướng Chính phủ sửa đổi, bổ sung Danh mục làm thay đổi mức độ rủi ro; (d) yêu cầu bằng văn bản của cơ quan quản lý nhà nước có thẩm quyền.
- Bên triển khai (khách hàng) sửa đổi, tích hợp hoặc thay đổi chức năng làm phát sinh rủi ro mới hoặc cao hơn: phối hợp phân loại lại (khoản 2 Điều 11 Nghị định số 142/2026/NĐ-CP).

Không phải phân loại lại khi nâng cấp, tối ưu hiệu suất, sửa lỗi kỹ thuật thông thường hoặc cập nhật dữ liệu định kỳ mà không làm thay đổi bản chất rủi ro của hệ thống (khoản 4 Điều 11 Nghị định số 142/2026/NĐ-CP).

Khi kết quả phân loại lại **cao hơn** mức đã phân loại: thông báo kết quả cho cơ quan nhà nước có thẩm quyền trong **15 ngày làm việc** kể từ ngày hoàn thành rà soát và áp dụng ngay biện pháp tương ứng với mức mới (điểm a khoản 3 Điều 11 Nghị định số 142/2026/NĐ-CP).

Với cấu hình **rủi ro cao theo Luật 134**, phải đánh giá lại sự phù hợp khi có thay đổi đáng kể (khoản 1 Điều 13 Nghị định số 142/2026/NĐ-CP), đặc biệt: thay đổi kiến trúc hệ thống, **mô hình trí tuệ nhân tạo** hoặc cấu hình kỹ thuật chủ yếu có thể ảnh hưởng đến tính chính xác, độ tin cậy, mức độ an toàn, khả năng kiểm soát (điểm b); thay đổi nguồn dữ liệu, loại dữ liệu đầu vào chủ yếu (điểm c); tích hợp với hệ thống khác hoặc môi trường vận hành mới (điểm d).

### 5.2. Các bước

| Bước | Việc | Người thực hiện | Đầu ra | Thời hạn |
|---|---|---|---|---|
| 1 | Lập phiếu mô tả tính năng (mục 5.4) | Trưởng nhóm sản phẩm | Phiếu | Trước khi lập kế hoạch phát triển |
| 2 | Tự phân loại theo mục 2.2 (mức BV) và mục 2.3 (mức theo Luật 134) | Trưởng nhóm sản phẩm | Hai mức đề xuất | Cùng bước 1 |
| 3 | Thẩm tra dữ liệu, cơ sở pháp lý, biện pháp | {{NHAN_SU_BVDLCN_NCC}}; trưởng nhóm bảo mật | Ý kiến bằng văn bản | {{SO_NGAY_THAM_TRA}} ngày làm việc |
| 4 | Quyết định mức và điều kiện | {{NHOM_XET_DUYET_RUI_RO_AI}} | Biên bản xét duyệt | Trước khi phát triển (BV-Cao hoặc rủi ro cao theo Luật 134), trước khi phát hành (BV-Thấp, BV-Trung bình) |
| 5 | Triển khai biện pháp theo mục 4; kiểm thử | Nhóm phát triển, kiểm thử | Kết quả kiểm thử | Trước khi phát hành |
| 6 | *(Mức trung bình, cao theo Luật 134)* Lập hồ sơ phân loại; *(mức cao)* đánh giá sự phù hợp, hồ sơ kỹ thuật; thông báo kết quả phân loại qua Cổng một cửa, công khai kết quả đánh giá sự phù hợp | Nhóm sản phẩm; {{NHAN_SU_BVDLCN_NCC}} | Hồ sơ phân loại; xác nhận điện tử, mã định danh | Trước khi đưa vào sử dụng |
| 7 | Cập nhật B1, B3, B4, bảng tại mục 3, tài liệu bán hàng | Nhóm sản phẩm | Tài liệu cập nhật | Cùng ngày phát hành |
| 8 | Giám sát sau phát hành; báo cáo | Nhóm hỗ trợ khách hàng | Báo cáo quý | Hằng quý với mức BV-Cao và cấu hình rủi ro cao |

Nhân sự BVDLCN có quyền **phủ quyết** việc phát hành tính năng mức BV-Cao khi biện pháp bắt buộc chưa hoàn thành. Tính năng xếp mức BV-Không chấp nhận dừng ở bước 4.

### 5.3. Xác nhận của khách hàng trước khi bật tính năng mức BV-Cao

Trước khi bật tính năng mức BV-Cao, khách hàng (hoặc đại lý thay mặt khách hàng) xác nhận trong phần mềm hoặc bằng văn bản các nội dung sau:

☐ Đã xác định mục đích và cơ sở xử lý; đã có sự đồng ý của chủ thể hoặc căn cứ pháp luật khác, và đã nêu rõ đây là dữ liệu cá nhân nhạy cảm.

☐ Đã cấu hình phương thức thay thế cho người không đồng ý.

☐ Đã phân công người xem xét lại kết quả bất lợi.

☐ Đã đặt thời hạn lưu và chính sách xóa.

☐ Đã hoặc sẽ lập, cập nhật hồ sơ đánh giá tác động xử lý dữ liệu cá nhân trong 60 ngày kể từ khi bắt đầu xử lý.

☐ Bối cảnh lắp đặt **không** thuộc: đầu mối giao thông, công trình công cộng quan trọng; khu vực kiểm soát an ninh hàng không; cơ sở giáo dục (giám sát, đánh giá người học); hoạt động giải quyết vụ án. Nếu có, đã báo {{TEN_NHA_CUNG_CAP}} để phân loại lại trước khi bật (khoản 2 Điều 10 Luật Trí tuệ nhân tạo số 134/2025/QH15). Bối cảnh lắp đặt: ..............................................

☐ Không sửa đổi, tích hợp hoặc thay đổi chức năng, mục đích sử dụng làm phát sinh rủi ro mới hoặc cao hơn; nếu có sẽ phối hợp với {{TEN_NHA_CUNG_CAP}} phân loại lại (khoản 4 Điều 6 Nghị định số 142/2026/NĐ-CP).

☐ Không tắt, không vô hiệu hóa cơ chế xác minh, giám sát và can thiệp của con người (khoản 4 Điều 7 Luật Trí tuệ nhân tạo số 134/2025/QH15).

Người xác nhận: {{NHAN_SU_BVDLCN_KH}} — {{TEN_KHACH_HANG}} — ngày ... tháng ... năm ...

### 5.4. Phiếu phân loại rủi ro tính năng

| Mục | Nội dung |
|---|---|
| Tên tính năng, mã | |
| Mô tả ngắn: tính năng làm gì, cho ai dùng | |
| Dữ liệu đầu vào; dữ liệu lưu lại; thời hạn lưu mặc định | |
| Kết quả đầu ra; có dẫn tới quyết định tự động không, hệ quả gì; có xác minh của con người trước khi có hiệu lực không | |
| Đối tượng chủ thể (nhân viên, khách, trẻ em, người qua đường) | |
| Bối cảnh lắp đặt dự kiến | |
| Mô hình sử dụng (tự phát triển, mua, nước ngoài); phiên bản | |
| Đánh giá Y1–Y8 | |
| Mức BV đề xuất; lý do | |
| Mức theo Luật 134; dòng Danh mục QĐ 33 đã đối chiếu; điều kiện làm nâng mức | |
| Biện pháp bắt buộc đã có / còn thiếu | |
| Ý kiến nhân sự BVDLCN | |
| Quyết định của nhóm xét duyệt; ngày | |

## 6. Rà soát định kỳ

Bảng tại mục 3 được rà soát {{CHU_KY_RA_SOAT_PHAN_LOAI}} và khi có một trong các sự kiện: có văn bản pháp luật mới về trí tuệ nhân tạo hoặc bảo vệ dữ liệu cá nhân; Thủ tướng Chính phủ sửa đổi, bổ sung Danh mục hệ thống trí tuệ nhân tạo có rủi ro cao (điểm c khoản 1 Điều 11 Nghị định số 142/2026/NĐ-CP); có sự cố liên quan đến tính năng; cơ quan có thẩm quyền có yêu cầu; tỷ lệ khiếu nại của tính năng tăng bất thường. Kết quả rà soát là một phần của báo cáo đánh giá tuân thủ hằng năm theo điểm đ khoản 5 Điều 10 Nghị định số 356/2025/NĐ-CP.

Khi Danh mục được sửa đổi làm hệ thống trở thành rủi ro cao, thời gian chuyển tiếp tối đa 12 tháng kể từ ngày quyết định sửa đổi, bổ sung Danh mục có hiệu lực để hoàn thiện hồ sơ và đánh giá sự phù hợp. Trong thời gian này, {{TEN_NHA_CUNG_CAP}} và bên triển khai duy trì cơ chế giám sát thực chất của con người, lưu đầy đủ nhật ký vận hành và các quyết định can thiệp (khoản 5 Điều 11 Nghị định số 142/2026/NĐ-CP).

| **Nơi nhận:**<br/>- Nhóm sản phẩm, phát triển;<br/>- Bộ phận bán hàng, đối tác;<br/>- {{NHAN_SU_BVDLCN_NCC}};<br/>- Lưu: hồ sơ sản phẩm. | **{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

## Hướng dẫn điền

- {{NHOM_XET_DUYET_RUI_RO_AI}}: ghi thành phần (ví dụ giám đốc sản phẩm, nhân sự BVDLCN, trưởng nhóm bảo mật, pháp chế). Nên có ít nhất một người không thuộc nhóm phát triển tính năng.
- {{CHU_KY_RA_SOAT_PHAN_LOAI}}: gợi ý 12 tháng, trùng kỳ đánh giá tuân thủ hằng năm.
- {{SO_NGAY_THAM_TRA}}: thời hạn thẩm tra nội bộ, nhà cung cấp tự đặt.
- {{MA_DINH_DANH_HE_THONG_AI}}: mã do Cổng một cửa tự cấp khi thông báo kết quả phân loại (NĐ 142 Đ3.2, Đ14.4). Hệ thống chỉ có mức thấp theo Luật 134 thì không phải thông báo; ghi "Không áp dụng — mức thấp". Luật 134 Đ10.3 khuyến khích công khai thông tin cơ bản của hệ thống mức thấp.
- Cột "Mức BV" tại mục 3 là đề xuất ban đầu. Nhà cung cấp phải rà lại theo sản phẩm thật: tính năng không có thì xóa dòng; tính năng xử lý khác mô tả thì sửa cột dữ liệu và lý do.
- Không hạ mức F3–F9 xuống dưới BV-Cao chỉ vì khách hàng yêu cầu. Nếu thiết kế thực sự khác (ví dụ F1 có nhận diện lại người), xếp lại theo yếu tố Y1–Y8.
- Cột "Mức theo Luật 134 / QĐ 33" ghi kết quả cho **cấu hình cung cấp chuẩn**. Với từng dự án, đối chiếu bối cảnh lắp đặt thực tế bằng ô xác nhận tại mục 5.3; nếu khớp một dòng Danh mục thì lập hồ sơ theo cột "Rủi ro cao theo Luật 134" ở mục 4, hoặc cấu hình chế độ "xác minh trước khi thực thi" (B3 mục B.8) và ghi lập luận vào hồ sơ dự án.
- Cột "Đánh giá sự phù hợp" ở bảng Danh mục mục 2.3 (tự đánh giá hay phải chứng nhận) được đọc từ ảnh trang bản PDF ký số của QĐ 33; bản text trong `sources/` là OCR và không đọc được cột này — **[CẦN ĐỐI CHIẾU]** khi có bản text chính thức.
- F8 (điểm danh học sinh) và phạm vi "đầu mối giao thông, công trình công cộng quan trọng" (VI.6) chưa có hướng dẫn chính thức — **[CẦN ĐỐI CHIẾU]**. Cách an toàn: coi F8 là rủi ro cao (tự đánh giá sự phù hợp) hoặc gửi đề nghị hướng dẫn phân loại theo Luật 134 Đ10.4, NĐ 142 Đ10.4.
- Hồ sơ phân loại theo NĐ 142 Đ12 có thể dùng lại hồ sơ đánh giá tác động xử lý DLCN (K6) theo NĐ 142 Đ12.7: bổ sung phần mô tả bối cảnh sử dụng, nhóm người bị ảnh hưởng và tóm tắt biện pháp quản lý rủi ro nếu hồ sơ đánh giá tác động chưa có.

## Bằng chứng cần lưu

- Bản B2 đã ký; lịch sử phân loại lại.
- Phiếu phân loại (mục 5.4) và biên bản xét duyệt của từng tính năng.
- Kết quả kiểm thử trước phát hành cho tính năng mức BV-Cao (độ chính xác, sai lệch, chống giả mạo).
- Xác nhận của khách hàng trước khi bật tính năng mức BV-Cao (nhật ký trong phần mềm hoặc văn bản), gồm xác nhận bối cảnh lắp đặt.
- *(Mức trung bình, cao theo Luật 134)* Hồ sơ phân loại; xác nhận điện tử và mã định danh từ Cổng một cửa; thông báo phân loại lại (nếu có). *(Mức cao)* Hồ sơ kỹ thuật, kết quả đánh giá sự phù hợp, bản công khai trên Cổng.
- Văn bản đề nghị Bộ KH&CN hướng dẫn phân loại và văn bản trả lời (nếu có).
- Báo cáo giám sát sau phát hành; kết quả rà soát định kỳ.
