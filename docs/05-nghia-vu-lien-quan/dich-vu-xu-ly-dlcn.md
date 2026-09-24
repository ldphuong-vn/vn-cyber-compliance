# Kinh doanh dịch vụ xử lý dữ liệu cá nhân — phạm vi, điều kiện, thủ tục

> **Căn cứ:** Luật 91/2025/QH15 Đ2.7–2.9, Đ20–Đ22, Đ33.2, Đ38.2–38.3; NĐ 356/2025/NĐ-CP Đ13, Đ17–Đ27, Đ41; NQ 22/2026/NQ-CP Phụ lục I.7 Phần A mục III–IV, Phần B; NĐ 330/2026/NĐ-CP Đ55–Đ57, Đ59; NĐ 331/2026/NĐ-CP Đ13.2.a · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

Tài liệu này khai triển dòng 6 và mục 3.1 của [`dlcn-giao-thoa-anm.md`](dlcn-giao-thoa-anm.md). Câu hỏi "tổ chức của tôi có đang **kinh doanh dịch vụ xử lý dữ liệu cá nhân** không" là câu hỏi bản lề: trả lời sai một chiều thì thừa thủ tục, sai chiều kia thì kinh doanh không phép.

---

## 1. Vì sao câu hỏi này là bản lề

Một câu trả lời "có" kéo theo ba hệ quả **cùng lúc**:

| # | Hệ quả | Căn cứ |
|---|---|---|
| 1 | **Mất quyền miễn trừ** dành cho doanh nghiệp nhỏ, khởi nghiệp, siêu nhỏ và hộ kinh doanh. Phải lập DPIA (Đ21), cập nhật hồ sơ (Đ22) và chỉ định bộ phận, nhân sự BVDLCN hoặc thuê dịch vụ (Đ33.2) — bất kể quy mô | Luật 91 Đ38.2, Đ38.3; NĐ 356 Đ41 |
| 2 | Phải có **Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ xử lý DLCN** do Bộ Công an cấp trước khi cung cấp dịch vụ | NĐ 356 Đ22, Đ24, Đ25 |
| 3 | Có **khả năng** bị coi là cung cấp dịch vụ thuộc **ngành, nghề đầu tư kinh doanh có điều kiện** (do hoạt động này phải có Giấy chứng nhận). Nếu đúng vậy, hệ thống thông tin phục vụ dịch vụ rơi vào **cấp độ 3** thay vì cấp độ 2. Lưu ý: NĐ 331 Đ13.2.a dẫn chiếu *danh mục* ngành, nghề đầu tư kinh doanh có điều kiện; việc phải xin giấy phép **không tự động** có nghĩa là hoạt động nằm trong danh mục đó — phải tra danh mục của luật đầu tư đang có hiệu lực | NĐ 331 Đ13.2.a — **[CẦN ĐỐI CHIẾU]** xem mục 8 dòng 7 |

Hai hệ quả đầu **khóa vào nhau**: điều kiện cấp Giấy chứng nhận là hồ sơ DPIA (và hồ sơ chuyển xuyên biên giới, nếu có chuyển) **có kết quả đạt yêu cầu** (NĐ 356 Đ22.4). Nghĩa là không thể vừa xin Giấy chứng nhận vừa viện dẫn miễn trừ DPIA.

## 2. Chín loại dịch vụ theo NĐ 356 Đ21

Danh sách là **liệt kê đóng** — không có khoản quét "các dịch vụ khác".

| Khoản | Dịch vụ (rút gọn theo nguyên văn) | Dấu hiệu nhận biết thường gặp |
|---|---|---|
| Đ21.1 | Cung cấp và **vận hành hệ thống, phần mềm tự động để thay mặt bên kiểm soát** tiến hành xử lý DLCN | SaaS đa khách hàng mà nhà cung cấp vận hành hệ thống, khách hàng là bên kiểm soát dữ liệu của người dùng cuối |
| Đ21.2 | **Chấm điểm, xếp hạng, đánh giá mức độ tín nhiệm** chủ thể dữ liệu | Scoring tín dụng, chấm điểm rủi ro, xếp hạng người bán, người thuê |
| Đ21.3 | **Thu thập, xử lý DLCN trực tuyến từ trang web, ứng dụng, phần mềm và mạng xã hội** | Form thu thập lead, chatbot trên website khách hàng, công cụ lắng nghe mạng xã hội |
| Đ21.4 | Thu thập, xử lý DLCN qua **trang web, ứng dụng chăm sóc sức khỏe, theo dõi sức khỏe, dịch vụ y tế** | Nền tảng đặt lịch khám, theo dõi chỉ số sức khỏe, hồ sơ bệnh án điện tử |
| Đ21.5 | Thu thập, xử lý DLCN qua **ứng dụng giáo dục có yếu tố giám sát**: điểm danh, ghi hình, chấm điểm hành vi, nhận diện cảm xúc | LMS có điểm danh khuôn mặt, camera lớp học, chấm điểm chuyên cần tự động |
| Đ21.6 | **Phân tích và khai thác DLCN**: tìm kiếm thông tin, xu hướng, mẫu; trích xuất giá trị, **dự đoán hành vi người dùng** hoặc tối ưu hóa dịch vụ | Analytics theo người dùng, phân khúc khách hàng, gợi ý cá nhân hóa, dự đoán rời bỏ |
| Đ21.7 | **Mã hóa DLCN** trong quá trình truyền tải và lưu trữ | Dịch vụ mã hóa, quản lý khóa, tokenization bán cho bên khác |
| Đ21.8 | Xử lý DLCN **tự động dựa trên dữ liệu lớn, trí tuệ nhân tạo, chuỗi khối, vũ trụ ảo** | Bất kỳ tính năng AI nào chạm vào DLCN của khách hàng của khách hàng |
| Đ21.9 | **Nền tảng ứng dụng cung cấp dữ liệu vị trí cá nhân** | Bản đồ, giao vận, theo dõi phương tiện, chấm công theo vị trí |

> **Chú ý cho nền tảng SaaS, cloud, chatbot, CRM:** rất dễ khớp **nhiều khoản cùng lúc** — Đ21.1 (vận hành thay bên kiểm soát), Đ21.3 (thu thập trực tuyến từ website, ứng dụng), Đ21.6 (phân tích hành vi) và Đ21.8 (có tính năng AI). Chỉ cần khớp **một** khoản là thuộc phạm vi.

## 3. Ranh giới "xử lý cho chính mình" và "kinh doanh dịch vụ"

Nghị định không định nghĩa "kinh doanh dịch vụ xử lý dữ liệu cá nhân". Cách phân biệt hợp lý nhất theo cấu trúc Luật 91:

| Tình huống | Vai trò theo Luật 91 Đ2 | Có phải kinh doanh dịch vụ xử lý DLCN? |
|---|---|---|
| Xử lý DLCN của nhân sự, khách hàng **của chính tổ chức**, cho mục đích của chính mình | Bên kiểm soát (Đ2.7) | **Không** — dù có dùng phần mềm tự động, AI |
| Xử lý DLCN **thay mặt tổ chức khác**, theo hợp đồng, theo chỉ dẫn của họ, có thu tiền | Bên xử lý (Đ2.8) và đồng thời cung cấp một trong 9 dịch vụ Đ21 | **Có** — khả năng cao |
| Vừa xử lý cho mình vừa cung cấp dịch vụ cho tổ chức khác | Bên kiểm soát và xử lý (Đ2.9) cho phần của mình; bên xử lý cho phần dịch vụ | **Có**, xét theo phần dịch vụ |
| Cung cấp hạ tầng thuần túy (IaaS, hosting, đường truyền), không can thiệp nội dung dữ liệu | Không rõ ràng | **[CẦN ĐỐI CHIẾU]** — Đ21.1 nói "vận hành hệ thống, phần mềm tự động để **thay mặt** bên kiểm soát… tiến hành xử lý", hàm ý có hành vi xử lý, không chỉ chứa dữ liệu |

> Cả bảng trên là **suy luận từ cấu trúc văn bản**, chưa có hướng dẫn chính thức hay án lệ. NĐ 356 mới có hiệu lực 01/01/2026. Tổ chức ở vùng xám nên **xin ý kiến bằng văn bản của cơ quan chuyên trách BVDLCN** trước khi tự kết luận, và giữ lại văn bản trả lời làm bằng chứng cho tính ngay tình.

## 4. Điều kiện và trách nhiệm

**Điều kiện (NĐ 356 Đ22):**

| # | Điều kiện | Căn cứ |
|---|---|---|
| 1 | Là tổ chức, doanh nghiệp thành lập và hoạt động theo pháp luật Việt Nam | Đ22.1 |
| 2 | Người đứng đầu phụ trách chuyên môn về xử lý DLCN là **công dân Việt Nam, thường trú tại Việt Nam** | Đ22.2.a |
| 3 | Đội ngũ quản lý, điều hành đáp ứng yêu cầu chuyên môn | Đ22.2.b |
| 4 | **Tối thiểu 03 nhân sự** đủ điều kiện năng lực theo Đ13.2: cao đẳng trở lên; **≥ 02 năm kinh nghiệm** kể từ khi tốt nghiệp trong pháp chế, CNTT, ANM, an ninh dữ liệu, quản trị rủi ro, kiểm soát tuân thủ, quản lý nhân sự, tổ chức cán bộ; đã được đào tạo về BVDLCN | Đ22.2.c; Đ13.2 |
| 5 | Hạ tầng, trang thiết bị, cơ sở vật chất, công nghệ phù hợp với dịch vụ | Đ22.3 |
| 6 | Hồ sơ **DPIA đạt yêu cầu**, và hồ sơ **chuyển DLCN xuyên biên giới đạt yêu cầu** nếu có chuyển | Đ22.4 |

**Trách nhiệm thường xuyên sau khi được cấp (NĐ 356 Đ23):** tuân thủ đầy đủ nghĩa vụ của bên kiểm soát và xử lý, bên xử lý · xây dựng **khung quản trị rủi ro BVDLCN** phù hợp với dịch vụ · **đánh giá hiện trạng tuân thủ và mức độ tín nhiệm 01 năm/lần** · áp dụng tiêu chuẩn, quy chuẩn về an ninh dữ liệu, BVDLCN, ANM · ban hành quy định trách nhiệm, quyền hạn trong xử lý DLCN · bảo đảm xử lý đúng mục đích, giới hạn thu thập, chuyển giao, lưu trữ · khi là bên xử lý thì **yêu cầu bên kiểm soát xin sự đồng ý của chủ thể trước khi cung cấp dịch vụ**, bảo đảm chủ thể biết loại dữ liệu, mục đích và biết cả tên tổ chức cung cấp dịch vụ xử lý · **xác thực danh tính tổ chức** theo pháp luật về định danh và xác thực điện tử.

> Nghĩa vụ "bên kiểm soát phải xin đồng ý, trong đó nêu tên bên cung cấp dịch vụ xử lý" (Đ23.7) cần được đưa thẳng vào **hợp đồng hoặc phụ lục xử lý dữ liệu (DPA)** với từng khách hàng, kèm nghĩa vụ hiển thị tên nhà cung cấp trong thông báo, chính sách quyền riêng tư của khách hàng.

## 5. Thủ tục

| Việc | Hồ sơ | Thời hạn | Căn cứ |
|---|---|---|---|
| **Cấp mới** | Đơn (Mẫu 04 NĐ 356) · **văn bản chỉ định bộ phận BVDLCN hoặc hợp đồng sử dụng dịch vụ BVDLCN** · đề án (10 nội dung tại Đ25.2) · giấy tờ chứng minh năng lực nhân sự. Bản sao Giấy chứng nhận ĐKDN không phải nộp nếu cơ quan nhà nước khai thác được trên cơ sở dữ liệu | Đánh giá hồ sơ **10 ngày**; bổ sung, hoàn thiện **15 ngày**; thẩm định và cấp **30 ngày** kể từ ngày nhận đủ hồ sơ hợp lệ (Mẫu 05) | NĐ 356 Đ25; NQ 22 Phụ lục I.7 Phần A mục IV |
| **Cấp lại** (mất, hỏng bản giấy) | Đơn đề nghị | **05 ngày làm việc** | NĐ 356 Đ26.1 |
| **Cấp đổi** (sai thông tin, thay đổi nội dung) | Đơn (Mẫu 06) + tài liệu chứng minh | **05 ngày làm việc**. NQ 22 **gộp cấp lại và cấp đổi thành một thủ tục**, hồ sơ chỉ còn đơn đề nghị | NĐ 356 Đ26.2; NQ 22 Phụ lục I.7 Phần A mục III |
| **Thu hồi** | — | Không bảo đảm điều kiện · **không kinh doanh dịch vụ từ 12 tháng trở lên** · giải thể, phá sản · không khắc phục vi phạm theo yêu cầu · tự đề nghị. Nộp lại giấy trong **05 ngày làm việc**; công bố trên cổng thông tin quốc gia về BVDLCN | NĐ 356 Đ27 |

Nội dung **đề án** (Đ25.2) trùng nhiều với tài liệu tuân thủ ANM đã có: khung quản trị rủi ro, kế hoạch đánh giá định kỳ, việc áp dụng tiêu chuẩn về an ninh dữ liệu và ANM, phương án định danh và xác thực điện tử, nhân sự. Nên soạn **một lần, dùng cho cả hai hồ sơ** — xem [`../04-chinh-sach-quy-trinh/README.md`](../04-chinh-sach-quy-trinh/README.md).

## 6. Mức phạt (NĐ 330 Đ59)

Mức phạt tại Đ59 quy định **cho tổ chức** (lĩnh vực bảo vệ DLCN; cá nhân vi phạm bị phạt bằng một nửa — NĐ 330 Đ7).

| Hành vi | Mức phạt tổ chức |
|---|---|
| Đã có Giấy chứng nhận nhưng không có khung quản trị rủi ro, không có quy định trách nhiệm, không áp dụng tiêu chuẩn, không xác thực danh tính tổ chức | 20–30 triệu (Đ59.1) |
| Không yêu cầu bên kiểm soát xin đồng ý trước khi cung cấp dịch vụ · xử lý sai mục đích, không giới hạn thu thập, chuyển giao, lưu trữ · **không đánh giá tuân thủ và mức độ tín nhiệm 01 năm/lần** | 30–50 triệu (Đ59.2) |
| **Kinh doanh khi chưa được cấp Giấy chứng nhận** · bố trí nhân sự BVDLCN không đủ điều kiện · **không có tối thiểu 03 nhân sự** đủ năng lực | 50–80 triệu (Đ59.3) |
| Tiếp tục kinh doanh sau khi Giấy chứng nhận **đã bị thu hồi** | 80–100 triệu (Đ59.4) |

Khắc phục hậu quả: buộc ban hành và thực hiện khung quản trị rủi ro, quy định, tiêu chuẩn, cơ chế xác thực (Đ59.5.a); **buộc hủy, xóa tới mức không thể khôi phục toàn bộ DLCN đã thu thập, xử lý trái phép** (Đ59.5.b); **buộc nộp lại khoản thu có được từ hành vi vi phạm** tại khoản 3 (Đ59.5.c).

Kèm theo đó là các mức phạt độc lập về DPIA (Đ55), chuyển xuyên biên giới (Đ56, có mức **1–5% doanh thu** khi để lộ lọt) và nhân sự BVDLCN (Đ57) — xem [`nd-330-muc-phat.md`](nd-330-muc-phat.md).

## 7. Checklist tự rà

1. Có cung cấp cho tổ chức khác một trong **9 loại dịch vụ** tại Đ21 không? Ghi rõ khớp khoản nào, bằng chứng là tính năng nào của sản phẩm.
2. Trong quan hệ đó, tổ chức là **bên xử lý** hay **bên kiểm soát**? Hợp đồng, DPA hiện có ghi vai trò thế nào?
3. Nếu khớp Đ21: đã có **Giấy chứng nhận** chưa? Nếu chưa, đã chuẩn bị đủ **03 nhân sự** đáp ứng Đ13.2 chưa?
4. Đã lập và nộp **DPIA** chưa? Kết quả đã "đạt yêu cầu" chưa — đây là điều kiện cấp Giấy chứng nhận, không phải thủ tục song song.
5. Có chuyển DLCN ra ngoài lãnh thổ, kể cả dùng cloud hoặc mô hình AI đặt ở nước ngoài, không? Nếu có: đã lập hồ sơ chuyển xuyên biên giới chưa?
6. Đã ghi vào hợp đồng với khách hàng nghĩa vụ **bên kiểm soát xin đồng ý và nêu tên nhà cung cấp dịch vụ xử lý** (Đ23.7) chưa?
7. Đã lên lịch **đánh giá tuân thủ và mức độ tín nhiệm hằng năm** (Đ23.3) chưa, ai chịu trách nhiệm?
8. Hệ thống thông tin phục vụ dịch vụ này đã được xác định cấp độ theo NĐ 331 chưa, và lập luận cấp độ có tính đến yếu tố ngành nghề có điều kiện chưa?

## 8. Điểm cần đối chiếu

| # | Vấn đề | Căn cứ |
|---|---|---|
| 1 | **Lệch điều kiện nhân sự giữa hai nghị định:** NĐ 356 Đ13.2.b yêu cầu **≥ 02 năm** kinh nghiệm, nhưng NĐ 330 Đ59.3.b lại phạt khi nhân sự "không có ít nhất **03 năm** kinh nghiệm… hoặc chưa được đào tạo, bồi dưỡng **chuyên sâu**". Danh mục lĩnh vực kinh nghiệm ở hai điều cũng không trùng nhau. Chuẩn an toàn: theo mức cao hơn (03 năm, đào tạo chuyên sâu) cho nhân sự của tổ chức kinh doanh dịch vụ | NĐ 356 Đ13.2; NĐ 330 Đ59.3.b |
| 2 | **Dẫn chiếu sai trong điều kiện thu hồi:** Đ27.1.a viết "không bảo đảm một trong các điều kiện tại khoản 1, khoản 2 **Điều 26**" — nhưng Điều 26 là thủ tục cấp lại, cấp đổi; điều kiện kinh doanh nằm ở **Điều 22**. Về logic phải là Điều 22 | NĐ 356 Đ27.1.a |
| 3 | **Thành phần hồ sơ cấp mới:** NQ 22 Phụ lục I.7 Phần A mục IV rút còn **04 thành phần**, trong khi thân Đ25.1 vẫn liệt kê thêm bản sao Giấy chứng nhận ĐKDN và bằng cấp nhân sự. NQ 22 có hiệu lực đến hết 01/3/2027; sau mốc đó phải kiểm tra văn bản thay thế | NĐ 356 Đ25.1; NQ 22 Đ6, Phụ lục I.7 |
| 4 | **Thuê ngoài dịch vụ BVDLCN và yêu cầu 03 nhân sự:** NQ 22 chấp nhận "hợp đồng sử dụng dịch vụ BVDLCN" thay cho văn bản chỉ định bộ phận nội bộ, nhưng điều kiện "tối thiểu 03 nhân sự đủ điều kiện năng lực" tại Đ22.2.c **không thấy bị bãi bỏ**. Chưa rõ nhân sự của bên cung cấp dịch vụ có được tính vào 03 nhân sự này không | NĐ 356 Đ22.2.c; NQ 22 Phụ lục I.7 Phần A mục IV |
| 5 | **Bên xử lý có phải nộp DPIA không:** Luật 91 Đ21.3 chỉ buộc bên xử lý **lập và lưu trữ** hồ sơ "theo thỏa thuận với bên kiểm soát", trong khi NĐ 356 Đ19.1, Đ19.4 buộc cả ba bên **nộp 01 bản chính trong 60 ngày**, và Mẫu 10 mục II có sẵn ô tích vai trò "bên xử lý". NĐ 330 Đ55.1.b xử phạt không phân biệt vai trò. Theo Luật 64/2025 Đ58.3 thì văn bản có hiệu lực pháp lý cao hơn được áp dụng, nhưng Luật Đ21.7 lại giao Chính phủ quy định trình tự, thủ tục — nên đây là vùng tranh luận, **không nên dựa vào để không nộp**. Thực tế điểm lệch này ít ý nghĩa với tổ chức kinh doanh dịch vụ xử lý DLCN, vì Đ22.4 đằng nào cũng buộc có DPIA đạt yêu cầu | Luật 91 Đ21.3, Đ21.5, Đ21.7; NĐ 356 Đ19; NĐ 330 Đ55.1.b; Luật 64/2025 Đ58.3 |
| 6 | **Miễn trừ Đ22 nhưng không miễn Đ20:** Luật 91 Đ38.2–38.3 miễn Đ21, Đ22 và Đ33.2. Đ22 gồm cả việc **cập nhật** hồ sơ chuyển xuyên biên giới, nhưng Đ20 (lập hồ sơ đó) không nằm trong danh sách miễn. Đọc theo chữ thì vẫn phải lập; tồn tại cách đọc rộng rằng nhà làm luật định miễn cả Đ20 | Luật 91 Đ20, Đ22, Đ38; NĐ 356 Đ41 |
| 7 | **Có nằm trong danh mục ngành, nghề đầu tư kinh doanh có điều kiện không:** NĐ 356 tạo ra cơ chế cấp phép, nhưng cần kiểm tra danh mục của Luật Đầu tư đang có hiệu lực để khẳng định chắc chắn khi lập luận cấp độ 3 theo NĐ 331 Đ13.2.a. Danh mục này chưa có trong `sources/` | NĐ 331 Đ13.2.a; Luật Đầu tư (chưa có trong bộ nguồn) |
| 8 | **Tự khai trong biểu mẫu:** cả **Mẫu 09** (hồ sơ chuyển xuyên biên giới, mục I.8) và **Mẫu 10** (hồ sơ DPIA, mục I.9) đều buộc tự khai "Kinh doanh dịch vụ xử lý dữ liệu cá nhân: Có/Không" kèm danh mục 9 dịch vụ để tích chọn. Nghĩa là **không thể nộp bất kỳ hồ sơ nào trong hai hồ sơ này mà chưa kết luận được câu hỏi ở mục 3**. Tổ chức ở vùng xám nên có ý kiến của cơ quan chuyên trách hoặc luật sư trước khi điền, tránh tự khai sai theo cả hai chiều | NĐ 356 Phụ lục Mẫu 09, Mẫu 10 |
