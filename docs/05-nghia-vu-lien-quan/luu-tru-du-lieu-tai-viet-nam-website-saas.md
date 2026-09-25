# Lưu trữ dữ liệu tại Việt Nam: website, ứng dụng, TMĐT, SaaS và cloud nước ngoài

> **Căn cứ:** Luật An ninh mạng 116/2025/QH15 (Đ25, Đ41); NĐ 333/2026/NĐ-CP (Đ3, Đ15, Đ16, Đ18–20); NĐ 330/2026/NĐ-CP (Đ29, Đ33, Đ34, Đ56, Đ69); Luật Viễn thông 24/2023/QH15 (Đ3, Đ20, Đ29); NĐ 163/2024/NĐ-CP (Đ5, Đ26–30); Luật BVDLCN 91/2025/QH15 (Đ20, Đ38); NĐ 356/2025/NĐ-CP (Đ12, Đ17–18, Đ20).
> **Trạng thái:** phân tích tại thời điểm 25/9/2026. **Chưa có văn bản hướng dẫn chính thức** giải thích phạm vi "dịch vụ trên mạng viễn thông, mạng Internet, dịch vụ gia tăng" đối với website/SaaS. Mọi kết luận có nhãn **[CẦN ĐỐI CHIẾU]** là cách hiểu của bộ khung, không phải ý kiến pháp lý.

Tài liệu này trả lời câu hỏi thường gặp nhất khi triển khai NĐ 333: *một doanh nghiệp Việt Nam có website, ứng dụng, sàn TMĐT hoặc sản phẩm SaaS — có thể đang chạy trên AWS/Azure/GCP ở nước ngoài — có phải lưu dữ liệu tại Việt Nam không?* Tóm tắt nghĩa vụ chung xem [`nd-333-nghia-vu-doanh-nghiep.md`](nd-333-nghia-vu-doanh-nghiep.md) (vùng 3.2, 3.5).

## 1. Kết luận ngắn

| # | Câu hỏi | Trả lời | Mức chắc chắn |
|---|---|---|---|
| 1 | DN trong nước thuộc diện có phải chờ cơ quan yêu cầu mới lưu tại VN? | **Không chờ.** NĐ 333 Đ19.2 đặt nghĩa vụ không kèm điều kiện; NĐ 330 Đ33.1.a phạt "không lưu trữ" tách riêng với Đ33.1.b "không thực hiện quyết định yêu cầu". Các hãng luật (Duane Morris, DFDL) đều đọc là **tự động** | Cao (thực tiễn) — câu chữ Đ20.1 vẫn mâu thuẫn, xem mục 4.3 |
| 2 | Mọi website/SaaS của DN Việt Nam đều thuộc diện? | **Chưa rõ.** Phụ thuộc cách hiểu "dịch vụ ứng dụng viễn thông" (Luật 24/2023 Đ3.12). Cách đọc rộng: gần như mọi dịch vụ trực tuyến có tài khoản người dùng. Cách đọc hẹp: nhà mạng, ISP, hosting, data center, cloud, OTT, nội dung trên mạng di động và nền tảng trung gian | Thấp — vùng xám thật sự |
| 3 | Dịch vụ có tài khoản người dùng, TMĐT, thanh toán, mạng xã hội, game, lưu trữ/chia sẻ dữ liệu? | **Nên coi là thuộc diện.** Các lĩnh vực này nằm trong danh sách 11 lĩnh vực của NĐ 333 Đ19.3.a (áp cho DN nước ngoài) — khó lập luận DN trong nước cùng lĩnh vực nằm ngoài Đ19.2 | Trung bình–cao |
| 4 | Host trên cloud nước ngoài có vi phạm không? | Nếu **chỉ** có bản ở nước ngoài và DN thuộc diện → **không đáp ứng** Đ19.2. Được phép có bản ở nước ngoài song song với một bản truy xuất được tại VN (Đ19.5 "hình thức… do doanh nghiệp tự quyết định"; không có chữ "chỉ" như NĐ 163 Đ30.1) | Trung bình — chưa có hướng dẫn nói rõ bản sao/replica có đủ |
| 5 | Dữ liệu nào phải có tại VN? | NĐ 333 Đ19.1: (a) thông tin cá nhân của người dùng tại VN; (b) tên tài khoản, thời gian sử dụng, thông tin thẻ tín dụng, email, IP đăng nhập/đăng xuất gần nhất, số điện thoại gắn với tài khoản. **Không bắt buộc** mọi dữ liệu nghiệp vụ, mã nguồn, dữ liệu phân tích ẩn danh | Trung bình (cụm cuối "hoặc dữ liệu" mơ hồ, xem 4.4) |
| 6 | Bao lâu? | Tối thiểu **24 tháng** (Đ20.1). Với DN trong nước, cách an toàn: lưu liên tục suốt thời gian cung cấp dịch vụ và giữ ≥ 24 tháng sau khi người dùng ngừng dùng | Trung bình |
| 7 | Dùng cloud nước ngoài còn kéo theo nghĩa vụ gì **chắc chắn**? | **Chuyển DLCN xuyên biên giới** (Luật 91 Đ20.1.c; NĐ 356 Đ17.1.a nêu đích danh "dịch vụ điện toán đám mây của nhà cung cấp dịch vụ ở nước ngoài") → lập và nộp hồ sơ đánh giá tác động trong **60 ngày**. Không phụ thuộc vùng xám ANM ở trên; DN nhỏ/khởi nghiệp **không** được miễn Đ20 | Cao |

**Khuyến nghị tạm thời của bộ khung:** DN có tài khoản người dùng tại Việt Nam nên (i) có một bản dữ liệu Đ19.1 đầy đủ, truy xuất được tại Việt Nam; (ii) lập hồ sơ chuyển DLCN xuyên biên giới cho mọi luồng ra cloud/nhà cung cấp nước ngoài; (iii) ghi rõ trong hồ sơ nội bộ cách đọc mình chọn và căn cứ, để giải trình khi được kiểm tra.

## 2. Văn bản nói gì

### 2.1. Luật 116/2025 Đ25.3 — nghĩa vụ gốc

"Doanh nghiệp trong nước và ngoài nước cung cấp dịch vụ trên mạng viễn thông, mạng Internet, các dịch vụ gia tăng trên không gian mạng tại Việt Nam **có hoạt động thu thập, khai thác, phân tích, xử lý** dữ liệu về thông tin cá nhân, dữ liệu về mối quan hệ của người sử dụng dịch vụ, dữ liệu do người sử dụng dịch vụ tại Việt Nam tạo ra phải áp dụng các biện pháp bảo vệ dữ liệu theo quy định của pháp luật và **lưu trữ dữ liệu này tại Việt Nam trong thời gian theo quy định của Chính phủ**." Đ25.4 giao Chính phủ quy định chi tiết.

Hai điều kiện cộng dồn: (1) là DN cung cấp một trong ba loại dịch vụ; (2) có xử lý dữ liệu người dùng. Luật không định nghĩa ba loại dịch vụ.

Đ41.7 Luật 116 dùng lại đúng cụm ba loại dịch vụ, trong khi tên Điều 41 dùng cụm rộng hơn "doanh nghiệp cung cấp dịch vụ trên không gian mạng" — gợi ý Đ25.3 chỉ nhắm **một tập con** các DN có dịch vụ trên không gian mạng.

### 2.2. NĐ 333/2026 — định nghĩa và nghĩa vụ chi tiết

**Định nghĩa (Đ3):**

| Khoản | Thuật ngữ | Định nghĩa | Dẫn về |
|---|---|---|---|
| 3.1 | Người sử dụng dịch vụ | **Tổ chức, cá nhân** tham gia sử dụng dịch vụ trên không gian mạng | → khách hàng B2B cũng là "người sử dụng" |
| 3.2 | Người sử dụng tại VN | Sử dụng dịch vụ **trên lãnh thổ** VN | Tiêu chí vị trí sử dụng |
| 3.3 | Dịch vụ trên mạng viễn thông | Dịch vụ viễn thông, **dịch vụ ứng dụng viễn thông** | Luật 24/2023 Đ3.7, Đ3.12 |
| 3.4 | Dịch vụ trên mạng Internet | Dịch vụ Internet và dịch vụ nội dung thông tin trên mạng viễn thông di động | Pháp luật viễn thông/thông tin |
| 3.5 | Dịch vụ gia tăng trên không gian mạng | Dịch vụ viễn thông giá trị gia tăng | Luật 24/2023 Đ3.7.b; NĐ 163 Đ5.2 |

**Nghĩa vụ lưu trữ (Đ19–20):**

- Đ19.1 — dữ liệu phải lưu tại VN: (a) thông tin cá nhân của người dùng tại VN; (b) dữ liệu do người dùng tại VN tạo ra: tên tài khoản, thời gian sử dụng, thông tin thẻ tín dụng, email, IP đăng nhập/đăng xuất gần nhất, số điện thoại đăng ký gắn với tài khoản hoặc dữ liệu.
- Đ19.2 — "**Doanh nghiệp trong nước lưu trữ dữ liệu quy định tại khoản 1 Điều này tại Việt Nam.**" Không kèm điều kiện, không cần quyết định.
- Đ19.3 + Đ19.6 — DN nước ngoài thuộc 11 lĩnh vực (viễn thông; lưu trữ, chia sẻ dữ liệu; tên miền; TMĐT; thanh toán trực tuyến; trung gian thanh toán; kết nối vận chuyển; mạng xã hội; game trực tuyến; **ứng dụng trực tuyến**; tin nhắn/thoại/video/email/chat) chỉ phải lưu khi dịch vụ bị dùng vi phạm, đã được yêu cầu bằng văn bản **sau 03 lần và tối đa 06 tháng** mà không khắc phục, **và** có quyết định của Bộ trưởng BCA; có **12 tháng** để hoàn thành.
- Đ19.4 — dữ liệu thực tế thu thập ít hơn danh mục Đ19.1 → phối hợp lực lượng chuyên trách để xác nhận và lưu loại đang thu thập; thu thập bổ sung → thông báo công khai cho người dùng, cập nhật danh sách.
- Đ19.5 — "**Hình thức lưu trữ dữ liệu tại Việt Nam do doanh nghiệp tự quyết định**, đảm bảo khả năng truy xuất, cung cấp kịp thời khi có yêu cầu của cơ quan có thẩm quyền và đảm bảo an toàn thông tin theo tiêu chuẩn, quy chuẩn kỹ thuật quốc gia."
- Đ20.1 — thời gian lưu "bắt đầu từ khi doanh nghiệp nhận được yêu cầu lưu trữ dữ liệu đến khi kết thúc yêu cầu. Thời gian lưu trữ tối thiểu là 24 tháng."
- Đ20.3 — nhật ký hệ thống (Luật 116 Đ25.2.b) lưu tối thiểu 12 tháng. Đ16.6 **không** đòi nhật ký phải nằm tại VN.

Đ18.2 xếp "doanh nghiệp cung cấp dịch vụ ứng dụng viễn thông" cùng nhóm với DN viễn thông, ISP, hosting, data center — một dấu hiệu cho thấy nhà soạn thảo hiểu nhóm này như nhà cung cấp trung gian.

Đ15.2 yêu cầu biện pháp "phù hợp với tính chất, quy mô, phạm vi hoạt động của dịch vụ… và mức độ rủi ro" — căn cứ để áp dụng tương xứng.

### 2.3. Luật Viễn thông 24/2023 và NĐ 163/2024 — mắt xích quyết định

- Luật 24 Đ3.12: "Dịch vụ ứng dụng viễn thông là dịch vụ sử dụng mạng viễn thông để cung cấp dịch vụ ứng dụng trong lĩnh vực công nghệ thông tin, phát thanh, truyền hình, thương mại, tài chính, ngân hàng, văn hóa, thông tin, y tế, giáo dục và lĩnh vực khác." Đây là định nghĩa **rất rộng**; không văn bản nào trong bộ tài liệu thu hẹp hay loại trừ website thông thường.
- Luật 24 Đ3.14 tách "dịch vụ ứng dụng viễn thông" khỏi "dịch vụ viễn thông"; Đ3.29: nhà cung cấp dịch vụ ứng dụng viễn thông **không** phải "doanh nghiệp viễn thông".
- Luật 24 Đ20.2: dịch vụ ứng dụng viễn thông chỉ phải tuân thủ quy định về "kết nối, quản lý tài nguyên viễn thông, tiêu chuẩn, quy chuẩn kỹ thuật viễn thông" — gợi ý khái niệm gắn với dịch vụ **dùng tài nguyên viễn thông** (đầu số, kết nối), nhưng không phải định nghĩa loại trừ.
- Luật 24 Đ3.9, Đ3.11: dịch vụ trung tâm dữ liệu và điện toán đám mây **là dịch vụ viễn thông**. NĐ 163 Đ5.2 liệt kê dịch vụ viễn thông giá trị gia tăng: thư điện tử, thư thoại, fax gia tăng, truy nhập Internet, trung tâm dữ liệu, điện toán đám mây, dịch vụ viễn thông cơ bản trên Internet (OTT), dịch vụ khác do Bộ quy định. **Website, TMĐT, SaaS không có trong danh mục** → không thuộc "dịch vụ gia tăng trên không gian mạng" (NĐ 333 Đ3.5), nhưng vẫn có thể thuộc "dịch vụ ứng dụng viễn thông" (Đ3.3).
- NĐ 163 Đ30.1: dữ liệu **cơ quan nhà nước** dùng data center/cloud "**chỉ được** lưu trữ tại Việt Nam" — đối chứng: khi muốn lưu độc quyền, nhà làm luật dùng chữ "chỉ"; NĐ 333 Đ19 không dùng.
- NĐ 163 Đ27, Đ29: tổ chức nước ngoài được cung cấp OTT, data center, cloud **qua biên giới** (thông báo theo Đ45) — không đòi đặt hạ tầng tại VN.

### 2.4. NĐ 330/2026 — chế tài (mức cho tổ chức = 2 lần mức ghi trong mục 1–5, Đ7.1)

| Điều | Hành vi | Mức phạt tổ chức | Biện pháp khắc phục |
|---|---|---|---|
| Đ29.2.c | Không áp dụng biện pháp bảo vệ **và** lưu trữ tại VN dữ liệu theo Luật 116 Đ25.3 (chép gần nguyên văn luật, có cả "dữ liệu về mối quan hệ") | 100–140 triệu | Buộc thực hiện biện pháp bảo đảm (Đ29.3) |
| Đ33.1.a | Không lưu trữ dữ liệu, hoặc lưu "dữ liệu nhạy cảm về an ninh quốc gia" không đầy đủ theo NĐ quy định chi tiết Luật ANM | 60–100 triệu | Buộc lưu trữ; **buộc ngừng cung cấp dịch vụ viễn thông, Internet** hoặc ngừng kết nối tại VN (Đ33.3) |
| Đ33.1.b | Không thực hiện **quyết định yêu cầu** lưu trữ, đặt chi nhánh/VPĐD | 60–100 triệu | Như trên |
| Đ33.1.c | Không bảo đảm thời gian lưu nhật ký hệ thống | 60–100 triệu | Như trên |
| Đ34.1.c | Không lưu thông tin thiết bị, IP, thời gian đăng nhập của tài khoản số tối thiểu 90 ngày (không gắn địa điểm) | Theo khung Đ34.1 ×2 | — |
| Đ56.1–56.4 | Chuyển DLCN xuyên biên giới không lập/không nộp hồ sơ… | 30–100 triệu; **1–5% doanh thu** tại VN (Đ56.3, hai nhánh: không lập/che giấu/khai sai dẫn đến lộ, mất từ 10.000 chủ thể; hoặc tiếp tục chuyển sau quyết định ngừng) | Đình chỉ chuyển 06–12 tháng |
| Đ69.1.b, 69.2.b–c | Dùng cloud: không mã hóa khi lưu/truyền; hợp đồng không xác định luồng dữ liệu, vai trò | Theo khung Đ69 | — |

Cấu trúc Đ33.1.a (không cần quyết định) tách khỏi Đ33.1.b (không thực hiện quyết định) chỉ có nghĩa nếu tồn tại một nghĩa vụ lưu trữ **không cần quyết định** — tức Đ19.2 cho DN trong nước. Cụm "dữ liệu nhạy cảm về an ninh quốc gia" không xuất hiện trong Luật 116 hay NĐ 333 — một điểm mơ hồ mới. Tham chiếu chi tiết mức phạt: [`nd-330-muc-phat.md`](nd-330-muc-phat.md).

### 2.5. Luật 91/2025 và NĐ 356/2025 — lớp nghĩa vụ độc lập khi dùng cloud nước ngoài

- Luật 91 Đ20.1.c: "Cơ quan, tổ chức, cá nhân tại Việt Nam hoặc ở nước ngoài **sử dụng nền tảng ở ngoài lãnh thổ** Việt Nam để xử lý dữ liệu cá nhân được thu thập tại Việt Nam" là chuyển DLCN xuyên biên giới.
- NĐ 356 Đ17.1.a: lưu DLCN có chuyển giao "đến hệ thống máy chủ đặt ngoài lãnh thổ… **hoặc trên dịch vụ điện toán đám mây của nhà cung cấp dịch vụ ở nước ngoài**".
- Luật 91 Đ20.2: lập hồ sơ đánh giá tác động chuyển DLCN xuyên biên giới, gửi 01 bản chính trong **60 ngày** kể từ ngày đầu tiên chuyển. NĐ 356 Đ18: thành phần hồ sơ (Mẫu 09…), trả kết quả trong 15 ngày, hoàn thiện trong 30 ngày. NĐ 356 Đ20: cập nhật định kỳ 06 tháng khi có thay đổi; trong 10 ngày khi tổ chức lại.
- Miễn hồ sơ (Luật 91 Đ20.6; NĐ 356 Đ17.3): cơ quan nhà nước; **tổ chức lưu DLCN của chính người lao động của mình trên cloud**; chủ thể tự chuyển; báo chí; khẩn cấp; quản lý nhân sự xuyên biên giới; chuyển để ký hợp đồng/thực hiện thủ tục vận chuyển, hậu cần, chuyển tiền, thanh toán, khách sạn, thị thực, học bổng. Các miễn trừ này **không** che việc host toàn bộ cơ sở dữ liệu khách hàng ở nước ngoài.
- Luật 91 Đ38: miễn trừ cho DN nhỏ/khởi nghiệp chỉ bao gồm Đ21, Đ22 và Đ33.2 — **không** bao gồm Đ20.
- NĐ 356 Đ12.4: DLCN trên cloud phải được **mã hóa khi lưu và khi truyền**, phân quyền truy cập nghiêm ngặt; Đ12.2: nội dung bắt buộc của hợp đồng với nhà cung cấp cloud.
- Chi tiết: [`dlcn-giao-thoa-anm.md`](dlcn-giao-thoa-anm.md), [`dich-vu-xu-ly-dlcn.md`](dich-vu-xu-ly-dlcn.md).

## 3. Bảng quyết định theo tình huống

Ký hiệu: **Áp dụng** = văn bản nói rõ; **Nên coi là áp dụng** = vùng xám nhưng lập luận nghiêng về áp dụng; **Xám** = hai cách đọc cân bằng; **Không/thấp** = không áp dụng hoặc rủi ro rất thấp.

| Tình huống | Lưu tại VN (NĐ 333 Đ19.2) | Nghĩa vụ Chương III khác (Đ16: xác thực, 24h/03h, gỡ 24h/06h, log 12 tháng) | Chuyển DLCN xuyên biên giới nếu host ngoài VN (Luật 91 Đ20) |
|---|---|---|---|
| (i) Website giới thiệu, không có tài khoản (có form liên hệ, analytics) | **Không/thấp** — gần như không có dữ liệu Đ19.1.b; form liên hệ có DLCN → xám nhẹ | **Không/thấp** (không có tài khoản số). Luật 116 Đ25.1 (cấm đăng nội dung vi phạm) vẫn **áp dụng** | **Áp dụng** nếu form/analytics thu DLCN và máy chủ/công cụ ở nước ngoài; trang tĩnh không thu DLCN → không |
| (ii) App, website TMĐT có tài khoản người dùng | **Nên coi là áp dụng** — "thương mại" nằm trong Luật 24 Đ3.12; "TMĐT" nằm trong 11 lĩnh vực Đ19.3.a | **Nên coi là áp dụng** | **Áp dụng** |
| (iii) Nền tảng có nội dung người dùng, mạng xã hội, chat | **Áp dụng** (lập luận rất mạnh; nếu là OTT nhắn tin/gọi thì là dịch vụ viễn thông GTGT — NĐ 163 Đ5.2.g) | **Áp dụng** — Đ16.2.d, Đ16.4 viết cho loại dịch vụ này | **Áp dụng**, thêm Luật 91 Đ29 |
| (iv) SaaS B2B (khách hàng là doanh nghiệp) | **Xám** — khách B2B vẫn là "người sử dụng dịch vụ" (Đ3.1); "lưu trữ, chia sẻ dữ liệu" và "ứng dụng trực tuyến" nằm trong 11 lĩnh vực. Chưa rõ **nội dung** khách đưa lên có phải "dữ liệu do người dùng tạo ra" — danh mục Đ19.1.b chủ yếu là metadata tài khoản | **Xám** | **Áp dụng**. Nhà cung cấp SaaS thường là **bên xử lý**; khách hàng (bên kiểm soát) cũng phải lập hồ sơ nếu SaaS host ở nước ngoài. Dữ liệu nhân sự của chính khách hàng trên cloud được miễn (Luật 91 Đ20.6.b) |
| (v) Thanh toán, ví, fintech, ngân hàng | **Nên coi là áp dụng** — thanh toán trực tuyến, trung gian thanh toán trong 11 lĩnh vực; "thông tin thẻ tín dụng" trong Đ19.1.b. Quy định chuyên ngành NHNN (TT 09/2020/TT-NHNN về cloud) cần đối chiếu riêng **[CẦN ĐỐI CHIẾU]** | **Áp dụng**, thêm NĐ 330 Đ34 (tài khoản giao dịch tài chính) | **Áp dụng**, thêm Luật 91 Đ27, NĐ 356 Đ8; miễn một phần cho luồng "chuyển tiền, thanh toán" (NĐ 356 Đ17.3.đ) |
| (vi) Hosting, data center, cloud | **Áp dụng** với thông tin khách hàng/tài khoản (dịch vụ viễn thông GTGT — NĐ 163 Đ5.2.đ–e; nêu đích danh tại NĐ 333 Đ18.2). **Xám** với nội dung của khách thuê (nhà cung cấp không được truy nhập — Luật 24 Đ29.2.đ) | **Áp dụng** (NĐ 333 Đ18.2: gỡ 24h, từ chối dịch vụ) | **Áp dụng** (NĐ 356 Đ12; NĐ 330 Đ69) |
| (vii) DN nước ngoài (không có pháp nhân tại VN) phục vụ người dùng VN | Chỉ khi bị kích hoạt theo Đ19.3.a và có quyết định của Bộ trưởng (12 tháng thực hiện). **Mâu thuẫn:** Luật 116 Đ25.3 đoạn 2 và NĐ 330 Đ29.2.d buộc đặt chi nhánh/VPĐD không điều kiện | **Áp dụng** (Đ16.1 nêu "doanh nghiệp nước ngoài") | **Áp dụng** (Luật 91 Đ1.2, Đ20.1.c "hoặc ở nước ngoài") |
| DN FDI thành lập tại VN; công ty con VN của tập đoàn nước ngoài | Được xem là **DN trong nước** → như các dòng (ii)–(vi), không hưởng cơ chế kích hoạt của Đ19.3 (suy luận từ Luật 24 Đ3.35; Duane Morris cùng cách hiểu) | Như trên | Chia sẻ dữ liệu với công ty mẹ ở nước ngoài → Luật 91 Đ20.1.b |

## 4. Các điểm mơ hồ và cách đọc

### 4.1. "Dịch vụ trên mạng viễn thông, mạng Internet, các dịch vụ gia tăng trên không gian mạng"

| | Cách đọc rộng | Cách đọc hẹp |
|---|---|---|
| Phạm vi | Mọi website/app/TMĐT/SaaS có xử lý dữ liệu người dùng | Nhà mạng, ISP, hosting, data center, cloud, OTT, nội dung trên mạng di động, nền tảng trung gian |
| Lập luận | NĐ 333 Đ3.3 kéo "dịch vụ ứng dụng viễn thông" vào, mà Luật 24 Đ3.12 định nghĩa gồm cả CNTT, thương mại, tài chính "và lĩnh vực khác"; mọi website đều chạy trên Internet — tức trên mạng viễn thông. Danh sách 11 lĩnh vực (Đ19.3.a) cho thấy TMĐT, ứng dụng trực tuyến, game được coi là "dịch vụ" thuộc Điều 19. NĐ 163 không loại trừ website thông thường | NĐ 333 Đ3.4 định nghĩa "dịch vụ trên mạng Internet" hẹp — nếu mọi website đã là "dịch vụ ứng dụng viễn thông" thì Đ3.4 thừa. Đ3.5 gắn với danh mục GTGT đóng của NĐ 163 Đ5.2. Đ18.2 xếp ứng dụng viễn thông cùng nhóm hạ tầng. Luật 116 Đ41.7 tách nhóm hẹp khỏi tên điều rộng. Đ15.2 yêu cầu tương xứng. Nghị định chỉ được chi tiết hóa Luật Đ25.3, không mở rộng chủ thể |
| Ai ủng hộ | Thực tiễn thị trường, nhiều bình luận từ thời NĐ 53/2022 (vietnam-business-law.info); Duane Morris, DFDL (2026) nói DN trong nước "áp dụng tự động" mà không bàn giới hạn này | Tilleke & Gibbins, Freshfields (về NĐ 53/2022: văn phong "không thật rõ", có thể lập luận chỉ áp cho nhóm DN cung cấp 3 loại dịch vụ). Tài liệu hỏi đáp trên cổng BCA (theo trích đoạn): quy định "không áp dụng với tất cả doanh nghiệp" |

**Nhận định của bộ khung:** DN có **tài khoản người dùng** tại VN nên áp dụng như thuộc diện (rủi ro thấp nhất). Website không có tài khoản, chỉ có form liên hệ: có thể lập luận không thuộc diện, nhưng vẫn phải xử lý lớp DLCN. **[CẦN ĐỐI CHIẾU]**

### 4.2. "Doanh nghiệp trong nước" (Đ19.2)

Không văn bản nào trong bộ tài liệu định nghĩa. Tham chiếu Luật 24 Đ3.35 ("tổ chức nước ngoài là tổ chức được thành lập ở nước ngoài theo pháp luật nước ngoài") → DN thành lập theo pháp luật VN, kể cả 100% vốn nước ngoài, là DN trong nước. Chi nhánh/VPĐD của DN nước ngoài **không** phải DN trong nước — đó là hình thức tuân thủ của DN nước ngoài.

Câu hỏi còn lại: Đ19.2 áp cho **mọi** DN trong nước, hay chỉ DN trong nước thuộc chủ thể của Luật Đ25.3? Cách đọc hẹp có căn cứ hơn về kỹ thuật lập pháp (Đ25.4 Luật chỉ giao chi tiết hóa), nhưng quay về vấn đề 4.1.

### 4.3. Mốc bắt đầu và thời hạn (Đ20.1)

- **Cách đọc "cần có yêu cầu":** Đ20.1 dẫn chiếu "Điều 19" nói chung (gồm cả khoản 2); Luật Đ25.3 chỉ đòi lưu "trong thời gian theo quy định của Chính phủ", mà quy định duy nhất về thời gian bắt đầu "từ khi… nhận được yêu cầu".
- **Cách đọc "tự động":** Đ19.2 tách riêng, không điều kiện, đối lập rõ với Đ19.3; Đ19.6 (quyết định của Bộ trưởng) chỉ nói DN nước ngoài; NĐ 330 Đ33.1.a/b tách hai hành vi; NĐ 330 Đ29.2.c phạt không cần yêu cầu.
- **Tiền lệ NĐ 53/2022:** tại hội nghị phổ biến NĐ 53 ngày 22/12/2022, lực lượng chuyên trách BCA (A05) được ghi nhận là hướng dẫn DN trong nước thuộc diện phải lưu **từ ngày nghị định có hiệu lực đến khi chấm dứt hoạt động**; khi DN đề nghị, BCA có thể xem xét ấn định thời hạn cụ thể **không dưới 24 tháng**; có nêu 12 tháng chuyển tiếp cho DN trong nước (không có trong văn bản). Nguồn thứ cấp: Nishimura & Asahi (06/01/2023), Baker McKenzie. NĐ 333 Đ19–20 giữ gần nguyên cấu trúc Đ26–27 NĐ 53, nên nhiều khả năng cách áp dụng tương tự. **[CẦN ĐỐI CHIẾU]** — chưa có hướng dẫn tương tự cho NĐ 333.

**Khuyến nghị:** lưu liên tục tại VN suốt thời gian cung cấp dịch vụ; với người dùng đã ngừng dịch vụ, giữ tối thiểu 24 tháng (đồng thời đáp ứng Luật 116 Đ25.2.d — xem vùng 3.8 trong [`nd-333-nghia-vu-doanh-nghiep.md`](nd-333-nghia-vu-doanh-nghiep.md)); cân đối với nguyên tắc tối thiểu hóa và thời hạn lưu DLCN theo Luật 91.

### 4.4. Loại dữ liệu

- "Thông tin cá nhân của người sử dụng dịch vụ" (Đ19.1.a): không định nghĩa, khác thuật ngữ "dữ liệu cá nhân" của Luật 91. Tiền lệ A05 (2022): hiểu theo pháp luật về BVDLCN → cách đọc rộng: toàn bộ DLCN của người dùng; cách đọc hẹp: thông tin định danh tài khoản cùng loại với điểm b.
- Cụm cuối Đ19.1.b "…số điện thoại đăng ký được gắn với tài khoản hoặc dữ liệu": có thể đọc là danh mục **đóng** (chỉ metadata) hoặc "hoặc [các] dữ liệu" khác do người dùng tạo ra (kể cả nội dung).
- "Dữ liệu về mối quan hệ" (bạn bè, nhóm): có trong Luật 116 Đ25.3 và NĐ 330 Đ29.2.c, nhưng **không** còn trong NĐ 333 Đ19.1 (NĐ 53 Đ26.1.c trước đây có). Mạng xã hội nên lưu cả nhóm này tại VN.
- "Dữ liệu nhạy cảm về an ninh quốc gia" (NĐ 330 Đ33.1.a–b): không được định nghĩa ở văn bản nào.

### 4.5. "Lưu trữ tại Việt Nam" — vị trí, độc quyền, bản sao

- **Vị trí:** Luật 91 Đ20.1.a ("hệ thống lưu trữ dữ liệu **đặt** ngoài lãnh thổ") và NĐ 356 Đ17.1.a ("hệ thống máy chủ **đặt** ngoài lãnh thổ") dùng tiêu chí vị trí vật lý. Region cloud đặt ngoài VN → không phải lưu tại VN.
- **Độc quyền hay chỉ cần có bản tại VN:** Đ19.5 để DN tự quyết hình thức, trọng tâm là truy xuất và cung cấp kịp thời; không có chữ "chỉ" (so với NĐ 163 Đ30.1); Luật 91 Đ20 cho phép chuyển DLCN ra nước ngoài nếu có hồ sơ → **có lập luận văn bản vững** rằng một bản đầy đủ, truy xuất được tại VN là đáp ứng, dữ liệu vẫn có thể được xử lý song song ở nước ngoài. Bình luận thị trường (VNG Cloud, lsvn.vn thời NĐ 53) nói "phải có bản gốc tại VN"; góp ý của Global Data Alliance cho dự thảo NĐ 333 đề nghị làm rõ cho phép bản sao ở nước ngoài. **Chưa có hướng dẫn chính thức** nói bản replica/backup có đủ. **[CẦN ĐỐI CHIẾU]**
- **Region của nhà cung cấp cloud nước ngoài đặt tại VN** (nếu có): theo tiêu chí vị trí thì đáp ứng yêu cầu ANM; nhưng vế "hoặc trên dịch vụ điện toán đám mây của nhà cung cấp dịch vụ ở nước ngoài" (NĐ 356 Đ17.1.a) có thể bị đọc là vẫn kích hoạt hồ sơ chuyển DLCN xuyên biên giới. **[CẦN ĐỐI CHIẾU]**
- **Ai có nghĩa vụ:** DN cung cấp dịch vụ cho người dùng — không phải nhà cung cấp hạ tầng. Nhà cung cấp cloud không chịu trách nhiệm về nội dung (Luật 24 Đ29.1.c), không được truy nhập dữ liệu khách hàng khi chưa được đồng ý (Đ29.2.đ), và là **bên xử lý** trong quan hệ DLCN. Dùng AWS/Azure/GCP không chuyển nghĩa vụ đi.

### 4.6. DN nước ngoài: luật và nghị định vênh nhau

Luật 116 Đ25.3 đoạn 2 và NĐ 330 Đ29.2.d buộc đặt chi nhánh/VPĐD không điều kiện; NĐ 333 Đ19.3, Đ19.6 chỉ buộc khi bị kích hoạt, có quyết định và 12 tháng thực hiện. Thực tế thi hành nhiều khả năng theo NĐ 333; Đ29.2.d tạo rủi ro độc lập. Xem vùng 3.3 trong [`nd-333-nghia-vu-doanh-nghiep.md`](nd-333-nghia-vu-doanh-nghiep.md).

## 5. Quy định chuyên ngành cần kiểm tra thêm

Các quy định sau có thể đặt yêu cầu **cao hơn** NĐ 333 cho một số loại dịch vụ. Chưa có toàn văn trong `sources/`, thông tin lấy từ tóm tắt thứ cấp — **[CẦN ĐỐI CHIẾU]** trước khi dùng.

| Lĩnh vực | Văn bản | Điểm cần lưu ý (theo tóm tắt) |
|---|---|---|
| Mạng xã hội, trang thông tin điện tử tổng hợp | NĐ 147/2024/NĐ-CP | Điều kiện cấp phép gồm có ít nhất 01 hệ thống máy chủ đặt tại VN; trang dùng tên miền .vn phải lưu dữ liệu trên máy chủ có IP tại VN |
| Ngân hàng | TT 09/2020/TT-NHNN | Cho phép đưa hệ thống cấp độ 3 trở lên lên cloud nếu đáp ứng điều kiện; hợp đồng cloud phải nêu địa điểm đặt trung tâm dữ liệu ngoài lãnh thổ; báo cáo NHNN trong một số trường hợp thuê ngoài |
| Thương mại điện tử | Luật Thương mại điện tử 2025 (hiệu lực 01/7/2026) | Nghĩa vụ lưu dữ liệu giao dịch, dữ liệu livestream; sàn nước ngoài phải lập pháp nhân tại VN khi đáp ứng điều kiện. Chưa thấy yêu cầu riêng về máy chủ tại VN |
| Khu vực nhà nước | NĐ 163/2024 Đ30.1; bộ tiêu chí cloud phục vụ Chính phủ điện tử | Dữ liệu cơ quan nhà nước trên data center/cloud **chỉ được** lưu tại VN → SaaS bán cho khu vực công thực tế phải chạy tại VN |

## 6. Việc cần làm

- [ ] Lập **sơ đồ luồng dữ liệu** ghi vị trí vật lý (region) của từng kho dữ liệu, bản sao lưu, công cụ bên thứ ba (analytics, CRM, email marketing, log/SIEM, hỗ trợ khách hàng).
- [ ] Phân loại dịch vụ theo bảng mục 3; ghi rõ cách đọc đã chọn và căn cứ (lưu vào hồ sơ tuân thủ).
- [ ] Nếu thuộc diện: bảo đảm dữ liệu NĐ 333 Đ19.1 có một bản đầy đủ, **truy xuất được tại VN** (DC/cloud trong nước hoặc region tại VN); kiểm thử quy trình trích xuất để đáp ứng yêu cầu 24h/03h (Đ16.3).
- [ ] Thời hạn lưu: liên tục trong thời gian cung cấp dịch vụ; ≥ 24 tháng sau khi người dùng ngừng dịch vụ; nhật ký ≥ 12 tháng.
- [ ] Mọi luồng DLCN ra nước ngoài (kể cả cloud nước ngoài, SaaS bên thứ ba): lập **hồ sơ đánh giá tác động chuyển DLCN xuyên biên giới**, nộp trong 60 ngày, cập nhật khi thay đổi; hợp đồng cloud đủ nội dung NĐ 356 Đ12.2; mã hóa khi lưu và khi truyền (Đ12.4).
- [ ] Theo dõi hướng dẫn của BCA về phạm vi Đ19.2 và mốc Đ20.1 (mục cập nhật định kỳ hằng tháng).

Tờ trình xin kinh phí/phương án: [`../07-to-trinh-lanh-dao/to-trinh-luu-tru-du-lieu-va-nhat-ky-tai-viet-nam.md`](../07-to-trinh-lanh-dao/to-trinh-luu-tru-du-lieu-va-nhat-ky-tai-viet-nam.md).

## 7. Nguồn tham khảo ngoài văn bản gốc

Bình luận, không phải văn bản pháp luật; một số chỉ đọc được qua trích đoạn tìm kiếm (không tải được toàn văn qua proxy). Truy cập ngày 25/9/2026.

**Nguồn nhà nước:**
- Báo Chính phủ, "Quy định về hoạt động bảo đảm an ninh thông tin mạng của doanh nghiệp" (21/8/2026) — https://baochinhphu.vn/quy-dinh-ve-hoat-dong-bao-dam-an-ninh-thong-tin-mang-cua-doanh-nghiep-102260821172801034.htm
- Cổng Xây dựng chính sách, pháp luật, về NĐ 330/2026 (24/8/2026) — https://xaydungchinhsach.chinhphu.vn/nghi-dinh-330-2026-nd-cp-ve-xu-phat-vi-pham-hanh-chinh-trong-linh-vuc-an-ninh-mang-119260824172446407.htm
- Bộ Công an, hỏi đáp về lưu trữ dữ liệu — http://bocongan.gov.vn/hoidap/Pages/hoidap.aspx?ItemID=1914

**Công ty luật, tư vấn:**
- Duane Morris (27/8/2026), về NĐ 333 và DN FDI — https://blogs.duanemorris.com/vietnam/2026/08/27/vietnams-cybersecurity-reset-three-new-decrees-redefine-compliance-for-foreign-investors-and-fies/
- Tilleke & Gibbins, về DN trong nước theo NĐ 53/2022 — https://www.tilleke.com/insights/what-do-vietnams-new-data-localization-requirements-mean-for-domestic-enterprises/
- Freshfields, về NĐ 53/2022 và NĐ 13/2023 — https://technologyquotient.freshfields.com/post/102iulg/data-localisation-in-vietnam-highlights-under-decree-53-and-decree-13
- Nishimura & Asahi (06/01/2023), về hội nghị phổ biến NĐ 53 của A05 — https://www.nishimura.com/en/knowledge/newsletters/20230106-92936
- Vision & Associates, về lưu trữ dữ liệu và chi nhánh/VPĐD — https://vision-associates.com/regulations-on-storing-data-in-cyberspace-and-setting-up-a-branch-or-representative-office-by-applicable-foreign-enterprise-in-vietnam/
- Tilleke & Gibbins, về NĐ 330/2026 — https://www.tilleke.com/insights/vietnam-issues-cybersecurity-and-personal-data-protection-sanctions-decree/

**Báo chí, tổ chức ngành:**
- VietnamNet, "Hiểu đúng Luật An ninh mạng 2025: server có bắt buộc đặt tại Việt Nam?" (20/8/2026) — https://vietnamnet.vn/hieu-dung-luat-an-ninh-mang-2025-server-co-bat-buoc-dat-tai-viet-nam-2547151.html
- Global Data Alliance, góp ý dự thảo NĐ (06/3/2026) — https://globaldataalliance.org/wp-content/uploads/2026/03/vt03062026gdavtcyberdec.pdf
