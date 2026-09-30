# Nhà cung cấp giải pháp AI vision — bộ tài liệu tuân thủ BVDLCN và phương án hỗ trợ khách hàng

> **Căn cứ:** Luật 91/2025/QH15 Đ2, Đ8, Đ9, Đ11, Đ14, Đ17, Đ19–Đ25, Đ30–Đ33, Đ37–Đ39; NĐ 356/2025/NĐ-CP Đ3–Đ7, Đ10, Đ12, Đ13, Đ15, Đ16, Đ19–Đ23, Đ28, Đ29, Đ41; NĐ 330/2026/NĐ-CP Đ7, Đ39, Đ43, Đ52, Đ55, Đ58, Đ59, Đ61, Đ67, Đ69–Đ71; NĐ 331/2026/NĐ-CP Đ12.2.b, Đ13.2; Luật 134/2025/QH15 Đ3, Đ7, Đ9–Đ15, Đ35; NĐ 142/2026/NĐ-CP Đ6, Đ12, Đ19; QĐ 33/2026/QĐ-TTg · **Đối chiếu văn bản gốc:** 29/09/2026 · **Trạng thái:** Bản thảo luận v0.1 — chưa phải mẫu ban hành

Tài liệu này dành cho **nhà cung cấp giải pháp AI vision**: camera giám sát, phần mềm quản lý video (VMS), nhận diện khuôn mặt, nhận diện biển số (LPR), dùng cho kiểm soát ra vào, chấm công, điểm danh, bãi xe. Tài liệu trả lời ba câu hỏi:

1. Nhà cung cấp **cần có những tài liệu gì** để chính mình tuân thủ Luật 91/2025 (mục 2, 4)?
2. Khách hàng dùng sản phẩm **phải làm gì** theo từng tình huống sử dụng (mục 3)?
3. Nhà cung cấp **hỗ trợ khách hàng** bằng tài liệu, tính năng và dịch vụ nào, và dịch vụ nào cần điều kiện riêng (mục 5–7)?

Các mẫu khai triển từ bản thảo luận này (A1–A8, B1–B7, C1–C5, K1–K11, P1) đã được soạn thành file riêng — danh mục tại [README.md](README.md). Phần nghĩa vụ chung (DPIA, chuyển xuyên biên giới, nhân sự BVDLCN, thông báo 72 giờ) đã có tại [`../05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md`](../05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md). Tài liệu này chỉ trình bày phần **riêng của AI vision**.

Mức phạt nêu trong tài liệu là mức **cho tổ chức**; cá nhân bị phạt bằng một nửa (NĐ 330 Đ7.1).

---

## 1. Giải pháp AI vision chạm vào loại dữ liệu nào

| Dữ liệu | Loại | Căn cứ | Ghi chú |
|---|---|---|---|
| Hình ảnh, video camera có người | **Cơ bản** ("hình ảnh của cá nhân") | NĐ 356 Đ3.6 | Camera giám sát thông thường, chưa bật nhận diện |
| Biển số xe | **Cơ bản** ("số biển số xe") | NĐ 356 Đ3.7 | Trở thành dữ liệu gắn với người cụ thể khi đối chiếu danh sách xe đăng ký (cư dân, nhân viên) |
| **Đặc trưng khuôn mặt** (template, vector nhúng) và ảnh đăng ký dùng để so khớp | **Nhạy cảm — sinh trắc học** | Luật 91 Đ31.2; NĐ 356 Đ4.1.đ | Luật định nghĩa: dữ liệu về thuộc tính vật lý, đặc điểm sinh học cá biệt và ổn định **để xác định người đó**. Chính mục đích nhận dạng làm dữ liệu trở thành sinh trắc học |
| Kết quả nhận diện ("ai, ở đâu, lúc nào"): nhật ký ra vào, chấm công, điểm danh | Cơ bản; là **kết quả suy luận của AI** xác định được con người, nên phải áp dụng biện pháp bảo vệ | NĐ 356 Đ10.2; phạt NĐ 330 Đ67.2.đ | Tích lũy lâu dài có thể thành hồ sơ đời sống riêng tư (Đ4.1.c) |
| Hành trình phương tiện hoặc người qua nhiều camera | **[CẦN ĐỐI CHIẾU]** có phải "dữ liệu vị trí cá nhân" không | Luật 91 Đ31.1; NĐ 356 Đ4.1.h | Đ4.1.h nói vị trí xác định "qua dịch vụ định vị", Luật Đ31.1 nói "công nghệ định vị". Camera không phải định vị theo nghĩa thông thường. Cách thận trọng: coi là nhạy cảm khi hệ thống **dựng hành trình** của một người, một xe |
| Ảnh CCCD khi khách đăng ký tại kiosk | **Nhạy cảm** | NĐ 356 Đ4.1.i | Nhiều hệ thống quản lý khách chụp hoặc quét CCCD. Chỉ nên đọc thông tin cần thiết, không lưu ảnh thẻ |
| Thuộc tính suy luận: tuổi, giới tính, cảm xúc, hành vi | Tùy loại; phân tích hành vi là dịch vụ tại NĐ 356 Đ21.6, nhận diện cảm xúc trong giáo dục là dịch vụ tại Đ21.5 | NĐ 356 Đ21.5, Đ21.6 | Tính năng rủi ro cao, nên tắt mặc định |
| Dữ liệu trẻ em (camera trường học, điểm danh học sinh) | Chủ thể được bảo vệ đặc biệt | Luật 91 Đ24 | Người đại diện theo pháp luật thực hiện quyền thay |

**Hệ quả quan trọng nhất:** khi khách hàng **bật nhận diện khuôn mặt**, họ đang "trực tiếp xử lý DLCN nhạy cảm". Khi đó:

- Khách hàng **mất miễn trừ** dành cho doanh nghiệp nhỏ, khởi nghiệp, siêu nhỏ, hộ kinh doanh. Họ phải lập DPIA, cập nhật hồ sơ và chỉ định nhân sự BVDLCN, bất kể quy mô (Luật 91 Đ38.2–38.3; NĐ 356 Đ41).
- Khi xin đồng ý, phải **thông báo rõ dữ liệu là nhạy cảm** (NĐ 356 Đ6.4; phạt 30–50 triệu theo NĐ 330 Đ43.1.h).
- Phải có **bảo mật vật lý** thiết bị lưu và truyền, **hạn chế truy cập**, **hệ thống theo dõi** phát hiện xâm phạm (Luật 91 Đ31.4.a; phạt 50–70 triệu theo NĐ 330 Đ70.1.c–d).
- Khi có sự cố, phải **thông báo cho cả chủ thể dữ liệu trong 72 giờ**, không chỉ cơ quan chuyên trách, và lưu hồ sơ vi phạm tối thiểu 05 năm (NĐ 356 Đ29).
- Dùng dữ liệu sinh trắc học **vượt mục đích ban đầu** mà chưa có đồng ý bị phạt **70–150 triệu**, có thể bị tịch thu máy chủ lưu sinh trắc học (NĐ 330 Đ70.2.b, Đ70.3.a).

> **Thông điệp cho bán hàng:** gần như **mọi khách hàng dùng nhận diện khuôn mặt đều phải lập DPIA và chỉ định nhân sự BVDLCN**, kể cả doanh nghiệp rất nhỏ. Đây vừa là rủi ro khách hàng cần được cảnh báo, vừa là lý do để nhà cung cấp đưa ra bộ công cụ tuân thủ đi kèm sản phẩm.

## 2. Vai trò của nhà cung cấp theo mô hình triển khai

Luật 91 phân vai theo **ai quyết định mục đích, phương tiện** và **ai trực tiếp xử lý** (Đ2.7–2.9). Cùng một nhà cung cấp có thể giữ vai trò khác nhau với từng hợp đồng.

| Mô hình | Nhà cung cấp có chạm dữ liệu? | Vai trò với dữ liệu người dùng cuối | Có phải **kinh doanh dịch vụ xử lý DLCN** (NĐ 356 Đ21)? | Hệ quả chính |
|---|---|---|---|---|
| **M1.** Bán thiết bị và phần mềm cài tại chỗ (on-premise); khách tự vận hành; nhà cung cấp **không** truy cập | Không | Không phải bên xử lý. Vẫn là tổ chức **phát triển** hệ thống AI | Không | NĐ 330 Đ67.2.e phạt 50–70 triệu hành vi "**phát triển**, triển khai hệ thống AI nhưng không xây dựng hệ thống đáp ứng tiêu chuẩn ANM và bảo vệ dữ liệu toàn diện". Hồ sơ sản phẩm (mục 4 nhóm B) là bằng chứng |
| **M2.** On-premise, nhà cung cấp **lắp đặt, cấu hình, đăng ký khuôn mặt hộ, bảo hành, hỗ trợ từ xa** | Có, không thường xuyên | **Bên xử lý** trong phạm vi hỗ trợ (Đ2.8). Chỉ được tiếp nhận dữ liệu **sau khi có thỏa thuận, hợp đồng** về xử lý DLCN (Đ37.2.a) | **[CẦN ĐỐI CHIẾU]**: hỗ trợ kỹ thuật có phải "vận hành hệ thống … thay mặt bên kiểm soát" (Đ21.1) không? Cách hiểu hợp lý: **không**, nếu chỉ can thiệp theo yêu cầu, có kiểm soát và ghi nhật ký; **có**, nếu nhận vận hành hằng ngày | Phụ lục xử lý dữ liệu (DPA), quy trình truy cập từ xa, nhật ký, cam kết bảo mật của kỹ thuật viên và đại lý lắp đặt |
| **M1b.** Kết hợp thiết bị biên (edge) và cloud đặt tại Việt Nam, **cloud do khách hàng tự thuê, tự quản trị**; nhà cung cấp chỉ hỗ trợ tại chỗ hoặc trực tuyến theo yêu cầu | Chỉ khi hỗ trợ | Như M1 khi không hỗ trợ; như M2 khi hỗ trợ | Không, nếu nhà cung cấp không vận hành phần cloud | Hợp đồng thuê cloud giữa khách hàng và nhà cung cấp hạ tầng phải có nội dung NĐ 356 Đ12.2; nhà cung cấp giải pháp hỗ trợ theo C3 |
| **M3.** Cloud/SaaS: VMS cloud, chấm công cloud, LPR cloud, **kể cả phần cloud của mô hình edge–cloud khi nhà cung cấp giải pháp cung cấp, quản trị** | Có, liên tục | **Bên xử lý** với dữ liệu người dùng cuối; **bên kiểm soát** với dữ liệu tài khoản của chính khách hàng | **Có** — Đ21.1 (vận hành thay), Đ21.8 (xử lý tự động bằng AI); thêm Đ21.5 nếu có khách hàng giáo dục, Đ21.6 nếu có phân tích hành vi | Phải có **Giấy chứng nhận đủ điều kiện** trước khi cung cấp; DPIA đạt yêu cầu; tối thiểu 03 nhân sự; đánh giá tín nhiệm hằng năm (NĐ 356 Đ22–Đ25). Chưa có Giấy chứng nhận: phạt 50–80 triệu (NĐ 330 Đ59.3.a). Chi tiết: [`../05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md`](../05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md) |
| **M4.** Dịch vụ quản lý trọn gói: trực trung tâm giám sát, vận hành hệ thống hộ khách | Có | Bên xử lý | **Có** (Đ21.1) | Như M3 |
| **M5a.** **Tinh chỉnh tại chỗ** trên dữ liệu của khách hàng, theo chỉ dẫn của khách hàng, chỉ cho hệ thống của khách hàng đó; dữ liệu không rời hệ thống | Có | Bên xử lý | — | Đồng ý riêng của chủ thể cho mục đích cải thiện độ chính xác; C1 Điều 11 khoản 4; B7 phương án C. Mang kết quả sang khách hàng khác thì thành M5 |
| **M5.** Dùng dữ liệu của khách hàng để **huấn luyện, cải tiến mô hình** | Có | **Bên kiểm soát** cho phần này, vì nhà cung cấp tự quyết định mục đích | — | NĐ 356 Đ10.1 cho phép dùng DLCN để phát triển AI **nhưng phải tuân thủ** quy định BVDLCN, tức là cần cơ sở pháp lý riêng cho mục đích huấn luyện. Nếu dùng sinh trắc học vượt mục đích ban đầu: 70–150 triệu (NĐ 330 Đ70.2.b). **Khuyến nghị: không làm mặc định**; chỉ dùng dữ liệu đã khử nhận dạng hoặc dữ liệu có đồng ý riêng |

**Câu hỏi quyết định giữa M1b và M3:** ai là bên thuê, quản trị phần cloud. Cùng một kiến trúc edge–cloud, nếu nhà cung cấp giải pháp cung cấp và quản trị cloud cho khách hàng thì là kinh doanh dịch vụ xử lý DLCN (NĐ 356 Đ21.1, Đ21.8) và cần Giấy chứng nhận; nếu khách hàng tự thuê cloud tại Việt Nam và tự quản trị thì không. Hợp đồng nên ghi rõ bên quản trị cloud.

**Mô hình AI mua hoặc nhập từ nước ngoài:** nhận tệp mô hình vào Việt Nam tự nó không phải chuyển DLCN xuyên biên giới, nhưng phát sinh nghĩa vụ nếu suy luận chạy trên API ở nước ngoài, dữ liệu chẩn đoán gửi về bên nước ngoài, bên nước ngoài truy cập từ xa, hoặc gửi dữ liệu sang để tinh chỉnh. Cần thẩm định nguồn dữ liệu huấn luyện và kiểm thử lại độ chính xác trên người dùng tại Việt Nam — xem [`b7-tuyen-bo-du-lieu-huan-luyen.md`](b7-tuyen-bo-du-lieu-huan-luyen.md) mục 1.1.

**Lớp chuyển dữ liệu xuyên biên giới** áp lên M2–M5 khi: máy chủ cloud đặt ở nước ngoài; đội hỗ trợ hoặc công ty mẹ ở nước ngoài truy cập dữ liệu; hoặc gọi API nhận diện, mô hình AI đặt ở nước ngoài (Luật 91 Đ20.1.a–c). Phải lập hồ sơ đánh giá tác động chuyển xuyên biên giới và nộp trong 60 ngày. Mức phạt tối đa đến **5% doanh thu năm trước** (Luật 91 Đ8.4). Miễn trừ "lưu DLCN của người lao động trên cloud" (Đ20.6.b) chỉ áp cho **khách hàng tự lưu dữ liệu nhân viên của mình**; không nên dựa vào miễn trừ này cho nền tảng của nhà cung cấp (xem V6 mục 8).

## 2a. Luật Trí tuệ nhân tạo — nhà cung cấp camera AI chịu thêm nghĩa vụ gì

Luật Trí tuệ nhân tạo số 134/2025/QH15 có hiệu lực từ 01/3/2026; chi tiết tại NĐ 142/2026/NĐ-CP; Danh mục hệ thống rủi ro cao tại QĐ 33/2026/QĐ-TTg (hiệu lực 15/8/2026).

| Nội dung | Áp dụng cho giải pháp AI vision | Căn cứ |
|---|---|---|
| **Vai trò** | Công ty bán hệ thống dưới thương hiệu của mình là **nhà cung cấp**, kể cả khi mô hình do bên thứ ba (trong hoặc ngoài nước) phát triển; thường đồng thời là **nhà phát triển**. Khách hàng là **bên triển khai** | Luật 134 Đ3.3–3.5 |
| **Mức rủi ro** | Ba mức. Mức **cao** chỉ khi thuộc Danh mục QĐ 33. Kiểm soát ra vào, chấm công tại văn phòng, nhà máy, nhận diện biển số bãi xe: **rủi ro thấp** (Danh mục không có lĩnh vực lao động). Lên **cao** khi: giám sát, phân tích hành vi người học bằng khuôn mặt, cảm xúc (mục I.3; điểm danh xác nhận có mặt, không theo dõi liên tục, không phân tích chú ý, cảm xúc có thể lập luận là mức thấp — B2 F8a, F8b); nhận diện sinh trắc học theo thời gian thực tại đầu mối giao thông, công trình công cộng quan trọng mà kết quả thực thi **không qua xác minh độc lập của con người** (mục VI.6) | Luật 134 Đ9; NĐ 142 Đ6.3; QĐ 33 Phụ lục |
| **Nghĩa vụ ở mọi mức** | Tự phân loại trước khi đưa vào sử dụng; người dùng nhận biết đang tương tác với hệ thống AI; khắc phục, thông báo **sự cố nghiêm trọng** (báo cáo sơ bộ 72 giờ hoặc 05 ngày làm việc kể từ khi xác nhận sự cố, báo cáo chính thức sau 15 ngày); giải trình khi được yêu cầu | Luật 134 Đ10.1, Đ11.1, Đ12, Đ15; NĐ 142 Đ19 |
| **Thêm khi rủi ro cao** | Hồ sơ phân loại (được dùng hồ sơ DPIA), thông báo qua Cổng một cửa, đánh giá sự phù hợp, hồ sơ kỹ thuật, quản lý rủi ro, dữ liệu huấn luyện có tính đại diện, nhật ký hoạt động, cơ chế con người giám sát, can thiệp | Luật 134 Đ10.3, Đ13, Đ14; NĐ 142 Đ12.7, Đ15 |
| **Hành vi cấm liên quan** | Dùng dữ liệu trái pháp luật về bảo vệ DLCN để huấn luyện, **vận hành** hệ thống AI; vô hiệu hóa cơ chế giám sát của con người | Luật 134 Đ7.3, Đ7.4 |
| **Chuyển tiếp** | Hệ thống đã hoạt động trước 01/3/2026: hoàn thành nghĩa vụ trước **01/3/2027**; y tế, giáo dục, tài chính: trước **01/9/2027** | Luật 134 Đ35.1 |

Luật 134 **không cấm riêng** nhận diện khuôn mặt hay nhận diện cảm xúc. Giới hạn cứng với nhận diện khuôn mặt ở nơi công cộng vẫn nằm ở Luật 91 và NĐ 330 (Đ71.2.a). Thiết kế "xác minh của con người trước khi thực thi" vừa đáp ứng NĐ 330 Đ67.3.b, vừa giúp cấu hình triển khai không rơi vào mục VI.6 của Danh mục. Phân loại chi tiết từng tính năng: [`b2-phan-loai-rui-ro-he-thong-ai.md`](b2-phan-loai-rui-ro-he-thong-ai.md).

## 3. Nghĩa vụ của khách hàng theo tình huống sử dụng

Trong phần lớn tình huống, **khách hàng là bên kiểm soát** (hoặc bên kiểm soát và xử lý): họ quyết định lắp camera ở đâu, nhận diện ai, để làm gì. Nhà cung cấp cần hiểu nghĩa vụ của khách để thiết kế tài liệu, tính năng hỗ trợ.

| # | Tình huống | Cơ sở xử lý đề xuất | Việc khách hàng phải làm | Rủi ro phạt nếu thiếu |
|---|---|---|---|---|
| 3.1 | **Camera an ninh không nhận diện** tại cửa hàng, tòa nhà, nhà máy | Luật 91 Đ32.1.a: ghi hình tại nơi công cộng để bảo đảm an ninh, bảo vệ quyền, lợi ích hợp pháp của tổ chức, **không cần đồng ý** | Biển báo hoặc thông báo điện tử ở vị trí dễ thấy (Đ32.2); chỉ lưu trong thời gian cần thiết rồi xóa (Đ32.4); công khai đầu mối liên hệ để người dân yêu cầu xem hình ảnh của mình; không trích xuất, chia sẻ trái phép, trừ khi cơ quan có thẩm quyền yêu cầu bằng văn bản | Không biển báo: 10–20 tr (NĐ 330 Đ71.1.a); không cung cấp đầu mối: 10–20 tr (Đ71.1.b); trích xuất, chia sẻ trái phép: 30–50 tr (Đ71.2.b) |
| 3.2 | Camera tại **nơi làm việc** (xưởng, văn phòng) | Luật 91 Đ25.3: biện pháp công nghệ quản lý người lao động phải phù hợp pháp luật, **người lao động biết rõ** | Ghi vào nội quy lao động hoặc thông báo bằng văn bản; người lao động ký xác nhận; không lắp ở khu vực riêng tư | Lắp camera không thông báo: 50–70 tr (NĐ 330 Đ61.2.c); dùng dữ liệu thu trái phép: 70–100 tr (Đ61.3) |
| 3.3 | **Nhận diện khuôn mặt trên camera công cộng, cửa hàng** (khách VIP, khách quay lại, danh sách đen) | Mục đích thương mại, phân tích hành vi: **cần đồng ý hợp lệ** của từng người. Danh sách đối tượng trộm cắp: có thể viện dẫn Đ19.1.a (bảo vệ quyền, lợi ích chính đáng trước hành vi xâm phạm), nhưng bên xử lý **phải tự chứng minh** — **[CẦN ĐỐI CHIẾU]** | Tách rõ hai mục đích; với mục đích thương mại chỉ nhận diện người đã đăng ký và đồng ý; DPIA; quy chế lập và gỡ danh sách đen | Dùng camera công cộng để nhận diện khuôn mặt tự động, lập hồ sơ cá nhân, phân tích hành vi mà không có đồng ý: 30–50 tr (NĐ 330 Đ71.2.a); dùng sinh trắc học vượt mục đích: 70–150 tr (Đ70.2.b) |
| 3.4 | **Kiểm soát ra vào bằng khuôn mặt cho nhân viên** | **Đồng ý** (Luật 91 Đ9, Đ11.1), nêu rõ là dữ liệu nhạy cảm (NĐ 356 Đ6.4); người lao động biết rõ biện pháp (Đ25.3) | Mẫu đồng ý riêng cho sinh trắc học; **phương án thay thế** (thẻ, mã PIN, QR) để đồng ý thật sự tự nguyện (Đ9.2) và để chủ thể có thể **không tham gia xử lý tự động** (NĐ 356 Đ10.3); xóa template khi nghỉ việc (Đ25.2.c); DPIA | Không có cơ chế từ chối xử lý tự động: 50–70 tr (NĐ 330 Đ67.2.b); không xóa khi chấm dứt HĐLĐ: 50–70 tr (Đ61.2.b); xử lý khi chưa có đồng ý: 30–50 tr (Đ43.1.a) |
| 3.5 | **Chấm công bằng khuôn mặt** | Như 3.4. Có thể lập luận chấm công là thực hiện hợp đồng lao động (Đ19.1.d), nhưng **phương thức sinh trắc học** không phải là cách duy nhất → cách thận trọng vẫn xin đồng ý — **[CẦN ĐỐI CHIẾU]** | Như 3.4. Tách **nhật ký chấm công** (lưu theo thời hạn pháp luật lao động, kế toán — **[CẦN ĐỐI CHIẾU]** văn bản chưa có trong `sources/`) khỏi **template khuôn mặt** (xóa khi nghỉ việc). Quyết định tự động bất lợi (trừ lương, kỷ luật do "không nhận diện được") phải cho phép **người xem xét lại** | Quyết định tự động ảnh hưởng quyền lợi mà không cho yêu cầu đánh giá lại bởi con người: 70–100 tr, có thể đình chỉ hệ thống 03–06 tháng (NĐ 330 Đ67.3.b, Đ67.4.b) |
| 3.6 | **Kiểm soát khách ra vào** (visitor) | Đồng ý tại thời điểm đăng ký | Thông báo ngắn ngay tại kiosk; không lưu ảnh CCCD nếu không cần (NĐ 356 Đ4.1.i); thời hạn lưu ngắn; không dùng lại ảnh khách cho mục đích khác | Như 3.4; xử lý vượt mục đích: 20–40 tr (NĐ 330 Đ39.1.a) |
| 3.7 | **Điểm danh học sinh, sinh viên; camera lớp học** | Trẻ em: người đại diện theo pháp luật đồng ý, thực hiện quyền thay (Luật 91 Đ24.2); trẻ **từ đủ 07 tuổi** cần **đồng thời** đồng ý của trẻ và người đại diện, phải xác minh tuổi (NĐ 330 Đ60.1.a–c, 30–50 tr) | Mẫu đồng ý cho phụ huynh; phương án thay thế; không dùng nhận diện cảm xúc, chấm điểm hành vi nếu không thật cần | Với **nhà cung cấp**: phần mềm giáo dục có điểm danh, ghi hình, nhận diện cảm xúc là dịch vụ tại **NĐ 356 Đ21.5** → cần Giấy chứng nhận nếu nhà cung cấp vận hành (M3, M4) |
| 3.8 | **Bãi xe, LPR** | Xe đăng ký (cư dân, nhân viên, vé tháng): thực hiện thỏa thuận (Đ19.1.d). Xe vãng lai: ghi hình vì an ninh (Đ32.1.a) kèm biển báo | Biển báo tại lối vào; thời hạn lưu cho xe vãng lai ngắn; không dựng hành trình xe khi không cần; cung cấp dữ liệu cho cơ quan chức năng khi có yêu cầu bằng văn bản (Luật 91 Đ17.1.đ) | Như 3.1 |
| 3.9 | **Đếm người, bản đồ nhiệt, phân tích luồng khách** | Nếu xử lý **ẩn danh tại thiết bị** (không nhận dạng, chỉ xuất số đếm): rủi ro thấp. Nếu theo dấu từng người: như 3.3 | Cấu hình không lưu ảnh, chỉ lưu số liệu tổng hợp; ghi lại trong DPIA | Như 3.3; với nhà cung cấp vận hành phân tích: dịch vụ NĐ 356 Đ21.6 |
| 3.10 | **Người lao động của đơn vị đối tác** làm việc tại địa điểm do khách hàng quản lý; kiểm soát ra vào bằng khuôn mặt, tổng hợp ngày có mặt gửi đơn vị đối tác | Khách hàng không có hợp đồng lao động với họ → không dùng nội quy (K3). Khuôn mặt: **đồng ý** của từng người (Luật 91 Đ9, Đ11.1). Danh sách cấp thẻ: thực hiện thỏa thuận (Đ19.1.d) — **[CẦN ĐỐI CHIẾU]**. Đơn vị đối tác chuyển danh sách, ảnh; khách hàng gửi bảng tổng hợp có tên: chuyển giao (Đ17.1) | Thỏa thuận chuyển giao đủ 7 nội dung (NĐ 356 Đ7.1) với từng đơn vị đối tác (K11); phiếu đồng ý nộp trực tiếp cho khách hàng (K2 Mẫu E); ưu tiên chụp ảnh tại chỗ; ảnh do đơn vị đối tác gửi phải qua kênh mã hóa (NĐ 356 Đ7.2); bảng tổng hợp không gắn tên nếu người lao động không đồng ý; xóa đặc trưng khi người lao động rời địa điểm | Thỏa thuận thiếu trách nhiệm các bên: 20–30 tr (NĐ 330 Đ52.1.a); chuyển ảnh không mã hóa: 50–80 tr (Đ52.3); dùng dữ liệu chuyển giao cho mục đích khác: 50–80 tr (Đ48.2) |

**Ghi chú về chuyển tiếp:** hệ thống đã triển khai và đã có đồng ý theo NĐ 13/2023 trước 01/01/2026 thì **không phải xin đồng ý lại** (Luật 91 Đ39.1). Hồ sơ DPIA đã được tiếp nhận theo NĐ 13/2023 tiếp tục dùng, việc cập nhật theo luật mới (Đ39.2). Nên rà soát xem đồng ý cũ có nêu rõ là dữ liệu sinh trắc học hay không.

## 4. Bộ tài liệu nhà cung cấp cần có

### Nhóm A — Tổ chức và pháp lý (áp cho chính nhà cung cấp)

| # | Tài liệu | Bắt buộc khi | Căn cứ |
|---|---|---|---|
| A1 | Quyết định chỉ định **bộ phận, nhân sự BVDLCN** (hoặc hợp đồng thuê dịch vụ BVDLCN); thỏa thuận bảo mật với nhân sự đó | Luôn cần với M2–M5. Doanh nghiệp nhỏ bán thuần M1 có thể được miễn, nhưng nên có | Luật 91 Đ33.2, Đ38; NĐ 356 Đ13 |
| A2 | **Chính sách BVDLCN** và **quy trình tiếp nhận yêu cầu của chủ thể** (thời hạn phản hồi 02 ngày làm việc; thực hiện 10–20 ngày tùy loại yêu cầu) | Luôn cần | NĐ 356 Đ5 |
| A3 | **Sổ đăng ký hoạt động xử lý** (dữ liệu nhân viên, khách hàng, dữ liệu trên nền tảng cloud, dữ liệu huấn luyện) | Luôn nên có. Là đầu vào cho A4, A5 | NĐ 356 Đ19.3.c |
| A4 | **Hồ sơ DPIA** của nhà cung cấp (Mẫu 10), nộp trong 60 ngày; cập nhật 06 tháng, 10 ngày | Khi xử lý DLCN, trừ trường hợp được miễn | Luật 91 Đ21–Đ22; NĐ 356 Đ19–Đ20 |
| A5 | **Hồ sơ chuyển DLCN xuyên biên giới** (Mẫu 09) | Cloud, hỗ trợ, API AI, công ty mẹ ở nước ngoài | Luật 91 Đ20; NĐ 356 Đ17–Đ18 |
| A6 | **Hồ sơ xin Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ xử lý DLCN** (đơn, văn bản chỉ định bộ phận BVDLCN, đề án, giấy tờ năng lực) | M3, M4; M2 nếu nhận vận hành | NĐ 356 Đ22–Đ25; NQ 22 Phụ lục I.7 |
| A7 | **Quy trình sự cố DLCN** có nhánh sinh trắc học: báo khách hàng ngay (khi là bên xử lý), hỗ trợ khách báo cơ quan chuyên trách và chủ thể trong 72 giờ | M2–M5 | Luật 91 Đ23.1; NĐ 356 Đ28, Đ29 |
| A8 | **Báo cáo đánh giá tuân thủ BVDLCN hằng năm** cho hệ thống AI (và cho dịch vụ cloud, nếu có) | Mọi mô hình có xử lý DLCN trong hệ thống AI | NĐ 356 Đ10.5.đ, Đ12.3.d; phạt 20–50 tr (NĐ 330 Đ67.1, Đ69.1.đ) |
| A9 | **Hồ sơ cấp độ HTTT** cho nền tảng cloud. Ngưỡng cấp 3 với dịch vụ trực tuyến là **10.000 chủ thể DLCN nhạy cảm** — nền tảng nhận diện khuôn mặt đạt ngưỡng này rất sớm | M3, M4 | NĐ 331 Đ12.2.b, Đ13.2.c; [`../01-xac-dinh-cap-do/tieu-chi-cap-do.md`](../01-xac-dinh-cap-do/tieu-chi-cap-do.md) |

### Nhóm B — Hồ sơ sản phẩm (cho từng dòng sản phẩm)

| # | Tài liệu | Dùng để | Căn cứ |
|---|---|---|---|
| B1 | **Mô tả luồng dữ liệu và kiến trúc**: camera → thiết bị biên → máy chủ → cloud; dữ liệu nào lưu ở đâu, dạng gì (ảnh hay template), mã hóa thế nào, ai truy cập | Khách hàng chép thẳng vào mục c, đ của DPIA | NĐ 356 Đ19.3.c, Đ19.3.đ |
| B2 | **Phân loại rủi ro hệ thống AI** và biện pháp tương ứng từng mức | Chứng minh đã phân loại | Luật 91 Đ30.4; phạt 50–70 tr (NĐ 330 Đ67.2.d) |
| B3 | **Giải thích thuật toán bằng ngôn ngữ phổ thông** cho chủ thể: cách hoạt động, ngưỡng so khớp, tỷ lệ nhận nhầm và từ chối nhầm, ảnh hưởng tới quyền lợi, cách từ chối tham gia | Khách hàng đưa vào thông báo cho nhân viên, khách | NĐ 356 Đ10.3; phạt 50–70 tr (NĐ 330 Đ67.2.a) |
| B4 | **Tài liệu bảo mật thiết bị và hệ thống**: bảo mật vật lý, mã hóa khi lưu và truyền, quản lý khóa, tăng cường cấu hình mặc định, chính sách cập nhật firmware, quản lý lỗ hổng, chống giả mạo khuôn mặt (liveness) | Bằng chứng "đáp ứng tiêu chuẩn ANM và bảo vệ dữ liệu toàn diện" | Luật 91 Đ30.3, Đ31.4.a; NĐ 356 Đ10.5.a; NĐ 330 Đ67.2.e, Đ70.1.c |
| B5 | **Ma trận tính năng ↔ điều khoản** (mục 5) | Bán hàng, hồ sơ thầu, trả lời câu hỏi khách hàng | — |
| B6 | **Hướng dẫn cấu hình tuân thủ** và **checklist nghiệm thu** khi bàn giao | Kỹ thuật viên, đại lý lắp đặt | — |
| B7 | **Tuyên bố về dữ liệu huấn luyện**: mô hình được huấn luyện từ nguồn nào; có dùng dữ liệu khách hàng không | Trả lời câu hỏi thường gặp nhất của khách hàng lớn | NĐ 356 Đ10.1; NĐ 330 Đ70.2.b |

### Nhóm C — Hợp đồng

| # | Tài liệu | Nội dung chính | Căn cứ |
|---|---|---|---|
| C1 | **Phụ lục xử lý dữ liệu (DPA)** mẫu | Mục đích; loại dữ liệu và chủ thể; thời hạn xử lý, xóa, trả dữ liệu khi kết thúc; cơ sở pháp lý; trách nhiệm bảo vệ; trách nhiệm hỗ trợ quyền chủ thể; phối hợp khi có vi phạm; nhà thầu phụ; vị trí lưu dữ liệu. Với M3, M4: khách hàng cam kết nêu **tên nhà cung cấp dịch vụ xử lý** trong thông báo cho chủ thể | Luật 91 Đ37; NĐ 356 Đ7.1, Đ23.7; phạt thiếu nội dung 20–30 tr (NĐ 330 Đ52.1.a) |
| C2 | **Điều khoản điện toán đám mây** (M3, M4) | Luồng dữ liệu, vai trò; yêu cầu bảo mật; thông báo thay đổi; thời hạn xóa; quyền chủ thể; phân quyền; mã hóa khi lưu và truyền | NĐ 356 Đ12.2, Đ12.4; phạt NĐ 330 Đ69 |
| C3 | **Thỏa thuận hỗ trợ từ xa, bảo hành** (M2) | Chỉ truy cập theo yêu cầu có ticket; khách hàng phê duyệt phiên; ghi nhật ký; không sao chép dữ liệu ra ngoài | Luật 91 Đ37.2 |
| C4 | **Cam kết bảo mật** với nhân viên kỹ thuật, đại lý, nhà thầu lắp đặt | Họ chạm vào dữ liệu khi lắp đặt, đăng ký khuôn mặt, xử lý sự cố | Luật 91 Đ37.2.c; NĐ 356 Đ7.4 |
| C5 | **Hợp đồng đại lý, nhà tích hợp hệ thống** | Phân vai; chuyển tiếp nghĩa vụ DPA xuống đại lý; quy định ai ký DPA với khách | NĐ 356 Đ12.3.b (nhà thầu phụ) |

## 5. Tính năng sản phẩm hỗ trợ tuân thủ

Nguyên tắc: **cấu hình mặc định phải bảo vệ dữ liệu** (NĐ 356 Đ6.3). Tính năng dưới đây vừa giảm rủi ro cho khách hàng, vừa là điểm khác biệt khi bán hàng.

| Tính năng | Đáp ứng | Căn cứ |
|---|---|---|
| Chỉ lưu **template**, không lưu ảnh gốc sau khi đăng ký (hoặc lưu ảnh gốc có thời hạn) | Giới hạn dữ liệu nhạy cảm ở mức cần thiết | Luật 91 Đ3.2; NĐ 330 Đ39.1.a |
| **Mã hóa** template, video khi lưu và khi truyền; khóa quản lý tách biệt | Bảo mật sinh trắc học; chuyển giao dữ liệu nhạy cảm; cloud | Luật 91 Đ31.4.a; NĐ 356 Đ7.2, Đ12.4; NĐ 330 Đ52.3 (50–80 tr), Đ69.2.b |
| **Phân quyền** theo vai trò; xác thực đa yếu tố cho quản trị viên; **nhật ký truy cập** và xuất video | Hạn chế truy cập, theo dõi xâm phạm | Luật 91 Đ30.3, Đ31.4.a; NĐ 330 Đ67.2.g, Đ70.1.d |
| **Tự động xóa** theo thời hạn cấu hình cho từng loại dữ liệu (video, nhật ký, template, ảnh khách) | Lưu trữ đúng thời hạn | Luật 91 Đ32.4, Đ14.1.b; NĐ 330 Đ39.1.c |
| **Xóa template khi nhân viên nghỉ việc** (đồng bộ với hệ thống nhân sự hoặc thao tác một bước) | Xóa dữ liệu người lao động | Luật 91 Đ25.2.c; NĐ 330 Đ61.2.b |
| **Nhật ký đồng ý**: ai đồng ý, lúc nào, với mục đích nào, phiên bản thông báo nào; rút lại đồng ý | Chứng minh đồng ý | NĐ 356 Đ6.1–6.2; NĐ 330 Đ43.1.g |
| **Phương thức thay thế** (thẻ, PIN, QR) chạy song song với khuôn mặt | Đồng ý tự nguyện; quyền không tham gia xử lý tự động | Luật 91 Đ9.2; NĐ 356 Đ10.3; NĐ 330 Đ67.2.b |
| **Xem xét lại bởi con người** với kết quả bất lợi (đi muộn, từ chối ra vào); đánh dấu "cần xác minh" khi điểm so khớp thấp | Quyết định tự động có giám sát | NĐ 330 Đ67.3.b |
| **Làm mờ** khuôn mặt, biển số của người không liên quan khi xuất video | Hạn chế chia sẻ trái phép khi trích xuất | NĐ 330 Đ71.2.b |
| **Tắt nhận diện khuôn mặt mặc định** trên camera hướng ra khu vực công cộng; bật phải qua bước xác nhận có cảnh báo pháp lý | Tránh vô tình nhận diện người chưa đồng ý | NĐ 330 Đ71.2.a |
| **Xử lý ẩn danh tại thiết bị** cho đếm người, bản đồ nhiệt (chỉ xuất số liệu) | Giảm phạm vi dữ liệu cá nhân | Luật 91 Đ2.1 (dữ liệu đã khử nhận dạng không còn là DLCN) |
| **Chống giả mạo** (liveness), phát hiện deepfake | Chống giả mạo sinh trắc học | NĐ 330 Đ34.2.c (phạt người giả mạo — nhà cung cấp nên có biện pháp chống) |
| Lựa chọn **lưu trữ tại Việt Nam** (on-premise hoặc cloud đặt tại VN) | Tránh hoặc giảm nghĩa vụ chuyển xuyên biên giới | Luật 91 Đ20.1 |
| **Xuất báo cáo bằng chứng** (cấu hình thời hạn lưu, danh sách quyền truy cập, nhật ký xóa, nhật ký đồng ý) | Hồ sơ DPIA, kiểm tra của cơ quan chuyên trách | NĐ 356 Đ19.3.e, Đ31 |

## 6. Bộ công cụ tuân thủ giao cho khách hàng

Bộ công cụ đi kèm sản phẩm, khách hàng tự điền và ban hành. Nhà cung cấp **không ký thay** và không chịu trách nhiệm thay bên kiểm soát.

| # | Mẫu | Nội dung | Căn cứ |
|---|---|---|---|
| K1 | **Biển báo camera** và thông báo ngắn | Đang ghi hình; mục đích; bên kiểm soát; đầu mối liên hệ; có nhận diện khuôn mặt hay không | Luật 91 Đ32.2; NĐ 330 Đ71.1 |
| K2 | **Thông báo và mẫu đồng ý xử lý sinh trắc học** (nhân viên, khách, phụ huynh học sinh, người lao động của đơn vị đối tác) | Loại dữ liệu và **nêu rõ là nhạy cảm**; mục đích (đồng ý riêng cho từng mục đích); bên kiểm soát; bên cung cấp dịch vụ xử lý (nếu M3, M4); quyền của chủ thể; cách rút lại; **phương án thay thế** | Luật 91 Đ9.2, Đ9.4, Đ24; NĐ 356 Đ6.4, Đ10.3, Đ23.7 |
| K3 | **Điều khoản bổ sung nội quy lao động** hoặc phụ lục HĐLĐ về giám sát bằng công nghệ | Biện pháp nào, ở đâu, để làm gì, lưu bao lâu, ai xem | Luật 91 Đ25.3; NĐ 330 Đ61.2.c |
| K4 | **Chính sách lưu trữ, xóa** | Bảng thời hạn cho từng loại dữ liệu. Nhà cung cấp **gợi ý giá trị mặc định**; khách hàng tự quyết định theo mục đích và ghi lý do | Luật 91 Đ3.3, Đ32.4; NĐ 330 Đ39.1.c |
| K5 | **Quy trình tiếp nhận yêu cầu của chủ thể** (xem hình ảnh của mình, xóa template, rút đồng ý) | Thời hạn phản hồi, thực hiện; mẫu phiếu yêu cầu; cách xác minh người yêu cầu | NĐ 356 Đ5; NĐ 330 Đ71.1.b |
| K6 | **DPIA Mẫu 10 điền sẵn phần kỹ thuật** | Nhà cung cấp điền sẵn luồng dữ liệu, biện pháp bảo mật, sơ đồ hệ thống, rủi ro kỹ thuật (từ B1, B4). Khách hàng điền mục đích, cơ sở xử lý, đồng ý, nhân sự BVDLCN, rủi ro nghiệp vụ | NĐ 356 Đ19.3 |
| K7 | **Mẫu thông báo sự cố** với dữ liệu sinh trắc học: cho chủ thể (6 nội dung tối thiểu) và cho cơ quan chuyên trách (Mẫu 08) | Kèm hướng dẫn thông báo công khai khi không liên hệ được hết | NĐ 356 Đ28, Đ29 |
| K8 | **Checklist triển khai và bàn giao** | Biển báo đã lắp; thời hạn lưu đã đặt; đổi mật khẩu mặc định; bật xác thực đa yếu tố; nhật ký đã bật; nhận diện khuôn mặt tắt ở camera công cộng; phương án thay thế đã cấu hình | Tổng hợp mục 5 |
| K9 | **Quy trình cung cấp video cho cơ quan chức năng** | Chỉ cung cấp khi có yêu cầu bằng văn bản; ghi biên bản; làm mờ người không liên quan nếu được | Luật 91 Đ17.1.đ; NĐ 330 Đ71.2.b |
| K10 | **Câu hỏi thường gặp** cho khách hàng | "Tôi là doanh nghiệp nhỏ, có phải làm DPIA không?"; "Có phải xin đồng ý khi lắp camera an ninh không?"; "Nhân viên từ chối chấm công khuôn mặt thì sao?"… | Mục 1, 3 |
| K11 | **Thỏa thuận chuyển giao dữ liệu với đơn vị đối tác** có người lao động làm việc tại địa điểm | Mục đích; loại dữ liệu từng luồng (danh sách, ảnh, bảng tổng hợp); cơ sở pháp lý; kênh mã hóa; thời hạn xóa; quyền của người lao động; phối hợp khi sự cố | NĐ 356 Đ7.1, Đ7.2; NĐ 330 Đ52 |

## 7. Phương án hỗ trợ khách hàng — các mức dịch vụ

Cần tách **hỗ trợ kỹ thuật sản phẩm** khỏi **dịch vụ bảo vệ DLCN**. Dịch vụ bảo vệ DLCN là một lực lượng BVDLCN được luật gọi tên (Luật 91 Đ33.1.c) và có **điều kiện riêng**.

| Mức | Nội dung | Điều kiện pháp lý với nhà cung cấp |
|---|---|---|
| **0 — Có sẵn trong sản phẩm** | Tính năng mục 5 bật mặc định; bộ công cụ K1–K11; tài liệu B1–B7 | Không có điều kiện riêng. Đây là phần nên làm trước, chi phí thấp, lợi ích bán hàng lớn |
| **1 — Hỗ trợ kỹ thuật lập hồ sơ** | Điền phần kỹ thuật của DPIA; vẽ sơ đồ luồng dữ liệu cho hệ thống của khách; cấu hình thời hạn lưu, phân quyền; đào tạo quản trị viên của khách | Nên định vị là **hỗ trợ kỹ thuật cho sản phẩm của mình**, không tư vấn pháp lý, không quyết định thay khách. Nếu truy cập dữ liệu của khách → cần DPA (C1, C3) |
| **2 — Dịch vụ bảo vệ DLCN** | Làm nhân sự BVDLCN thuê ngoài cho khách; soạn trọn bộ hồ sơ; nộp DPIA thay; tư vấn tuân thủ | Là "tổ chức cung cấp dịch vụ BVDLCN" (NĐ 356 Đ16): ngành nghề công nghệ hoặc pháp lý; **tối thiểu 03 nhân sự** có cao đẳng trở lên, **≥ 03 năm kinh nghiệm**, **đã đào tạo chuyên sâu** về BVDLCN (Đ15.2); hồ sơ năng lực; hợp đồng dịch vụ và thỏa thuận xử lý dữ liệu **trước khi** cung cấp. Thiếu 03 nhân sự: 30–50 tr, đình chỉ 06–12 tháng (NĐ 330 Đ58.2, Đ58.4.b). **Phương án thay thế:** hợp tác với công ty luật hoặc tư vấn đã đủ điều kiện; nhà cung cấp lo phần kỹ thuật |
| **3 — Đánh giá tuân thủ định kỳ** | Đánh giá hằng năm hệ thống AI của khách (khách phải làm theo NĐ 356 Đ10.5.đ) | **[CẦN ĐỐI CHIẾU]** có bị coi là dịch vụ BVDLCN (mức 2) không. Có xung đột lợi ích khi tự đánh giá sản phẩm của mình → nên dùng bên thứ ba hoặc đối tác |
| **Chương trình đối tác** | Đào tạo, cấp chứng nhận nội bộ cho đại lý, nhà tích hợp về lắp đặt đúng chuẩn (K8), ký cam kết bảo mật (C4) | Đại lý chạm dữ liệu khi lắp đặt → là bên xử lý hoặc nhà thầu phụ; cần chuyển tiếp nghĩa vụ (C5) |

**Công cụ bán hàng đề xuất:** một phiếu **đánh giá nhanh khoảng 15 câu** dùng trước khi báo giá: khách dùng tính năng gì (mục 3), có bật nhận diện khuôn mặt không, đối tượng là ai (nhân viên, khách, học sinh), dữ liệu lưu ở đâu, quy mô chủ thể, khách có nhân sự BVDLCN chưa. Kết quả xếp khách vào một trong ba nhóm: **chỉ cần bộ công cụ (mức 0)**, **cần hỗ trợ kỹ thuật (mức 1)**, **cần dịch vụ BVDLCN (mức 2, qua đối tác)**.

## 8. Vùng xám cần đối chiếu

| # | Vấn đề | Căn cứ | Cách hiểu thận trọng tạm thời |
|---|---|---|---|
| V1 | Ảnh camera có khuôn mặt nhưng **chưa trích xuất template** có phải dữ liệu sinh trắc học không | Luật 91 Đ31.2; NĐ 356 Đ3.6, Đ4.1.đ | Ảnh thô là DLCN cơ bản. Khi hệ thống trích xuất đặc trưng **để xác định người** thì là sinh trắc học. Camera có sẵn chức năng nhận diện nhưng đang tắt: vẫn là cơ bản, nhưng nên ghi rõ trạng thái tắt trong hồ sơ |
| V2 | Hỗ trợ từ xa, bảo hành (M2) có phải "vận hành hệ thống thay mặt bên kiểm soát" (NĐ 356 Đ21.1) không | NĐ 356 Đ21.1 | Không, nếu chỉ theo yêu cầu, có phê duyệt, ghi nhật ký. Nên xin ý kiến bằng văn bản của cơ quan chuyên trách nếu có hợp đồng vận hành dài hạn |
| V3 | Chấm công khuôn mặt dựa vào **thực hiện hợp đồng lao động** (Đ19.1.d) hay phải xin **đồng ý** | Luật 91 Đ9, Đ19.1.d, Đ25.3 | Xin đồng ý riêng và có phương án thay thế. Quan hệ lao động làm giảm tính tự nguyện nếu không có lựa chọn khác |
| V4 | Chuỗi nhận diện biển số qua nhiều điểm có phải **dữ liệu vị trí** (nhạy cảm) không | Luật 91 Đ31.1; NĐ 356 Đ4.1.h | Coi là nhạy cảm khi hệ thống dựng hành trình của một xe hoặc một người |
| V5 | "Nơi công cộng" (Đ32) có bao gồm nhà xưởng, văn phòng, sảnh tòa nhà không; NĐ 330 Đ71 dùng thêm cụm "khu vực cung cấp dịch vụ cho khách hàng" | Luật 91 Đ25.3, Đ32; NĐ 330 Đ61, Đ71 | Khu vực khách ra vào: áp Đ32. Khu vực chỉ nhân viên: áp Đ25.3 (người lao động phải biết rõ). Áp cả hai khi khu vực dùng chung |
| V6 | Miễn hồ sơ chuyển xuyên biên giới "lưu DLCN của người lao động trên cloud" (Đ20.6.b) có áp cho **dữ liệu chấm công khuôn mặt** trên cloud nước ngoài của nhà cung cấp không | Luật 91 Đ20.6.b; NĐ 356 Đ17.3 | Câu chữ nói "cơ quan, tổ chức **lưu trữ**" dữ liệu nhân viên của mình. Nền tảng có xử lý AI, không chỉ lưu. Không nên dựa vào miễn trừ; ưu tiên lưu tại VN |
| V7 | Danh sách đen chống trộm cắp dựa vào Đ19.1.a có vượt được NĐ 330 Đ71.2.a không | Luật 91 Đ19.1.a, Đ19.2; NĐ 330 Đ71.2.a | Chỉ dùng khi có căn cứ cụ thể (biên bản, trình báo); có quy chế lập, gỡ; có cơ chế giám sát theo Đ19.2; ghi trong DPIA |
| V8 | Tự đánh giá tuân thủ hằng năm (NĐ 356 Đ10.5.đ) cho khách có bị coi là **dịch vụ BVDLCN** không | NĐ 356 Đ10.5.đ, Đ16 | Làm qua đối tác đủ điều kiện hoặc chỉ cung cấp công cụ tự đánh giá |
| V10 | Trọng số mô hình sau khi tinh chỉnh trên ảnh khuôn mặt của khách hàng có phải dữ liệu cá nhân không; rút lại sự đồng ý áp dụng thế nào với mô hình đã tinh chỉnh | NĐ 356 Đ10.2; Luật 91 Đ10.4 | Chỉ dùng mô hình tinh chỉnh cho chính khách hàng đó; giữ khả năng quay về mô hình gốc; lần tinh chỉnh sau loại dữ liệu của người đã rút đồng ý |
| V11 | Độ chính xác của nhận diện 1:N giảm khi danh sách lớn: nhận nhầm người lạ có phải vi phạm nguyên tắc chính xác (Luật 91 Đ3.3) không, và ở mức nào | Luật 91 Đ3.3; NĐ 330 Đ39.1.b, Đ67.3.b | Công bố quy mô danh sách tối đa theo ngưỡng (B3 mục B.3); dùng 1:1 hoặc chia danh sách khi vượt; không tự động kết luận bất lợi |
| V9 | Văn bản đã tra cứu ngày 29/09/2026 nhưng **chưa có toàn văn** trong `sources/`: pháp luật kế toán (thời hạn lưu bảng chấm công), NĐ 145/2020 và văn bản về thẩm quyền đăng ký nội quy sau sắp xếp bộ máy (Bộ luật Lao động đã có toàn văn và đã đối chiếu); QCVN 11:2026/BCA về camera giám sát và danh mục sản phẩm phải công bố hợp quy; quy định ngành về thời hạn lưu hình ảnh. Pháp luật về trí tuệ nhân tạo (Luật 134/2025, NĐ 142/2026, QĐ 33/2026) **đã có toàn văn** — xem mục 2a | — | Nội dung liên quan trong K3, K4, K8, B4 gắn nhãn **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]**; lưu toàn văn và bỏ nhãn khi tải được văn bản gốc |

## 9. Lộ trình đề xuất và câu hỏi cần quyết định

**Lộ trình ba giai đoạn:**

| Giai đoạn | Việc | Sản phẩm |
|---|---|---|
| **1. Nền móng** (2–4 tuần) | Xác định mô hình kinh doanh thực tế (M1–M5) và doanh thu từng mô hình; quyết định có xin Giấy chứng nhận không; chỉ định nhân sự BVDLCN; ra DPA mẫu | A1, A2, A3, C1, C3, C4; quyết định về A6 |
| **2. Hồ sơ sản phẩm và bộ công cụ** (4–8 tuần) | Soạn hồ sơ sản phẩm cho từng dòng; rà khoảng trống tính năng so với mục 5; soạn bộ công cụ cho khách | B1–B7, K1–K11; danh sách tính năng cần bổ sung vào lộ trình sản phẩm |
| **3. Dịch vụ và đối tác** | Chọn tự làm hay hợp tác cho mức 2; đào tạo đại lý; lịch đánh giá hằng năm | Phiếu đánh giá nhanh; hợp đồng đối tác; A8 |

**Câu hỏi cần anh quyết định trước khi soạn mẫu:**

1. Hiện nay công ty đang bán theo mô hình nào trong M1–M5, mô hình nào là chủ lực, và có kế hoạch chuyển sang cloud không?
2. Máy chủ cloud, đội hỗ trợ, API hoặc mô hình AI có đặt ở nước ngoài không?
3. Công ty có đang (hoặc muốn) dùng dữ liệu khách hàng để huấn luyện mô hình không?
4. Có khách hàng giáo dục (trường học, trung tâm) không? Nếu có, nhóm này kéo theo NĐ 356 Đ21.5 và Luật 91 Đ24.
5. Mức 2 (dịch vụ BVDLCN): tự xây đội 03 nhân sự đủ điều kiện hay hợp tác với đối tác?
6. Anh muốn em soạn mẫu nào trước? Đề xuất thứ tự: **C1 (DPA)** → **K2 (đồng ý sinh trắc học)** → **K6 (DPIA điền sẵn phần kỹ thuật)** → **K1, K3, K4** → **B1–B4**.
