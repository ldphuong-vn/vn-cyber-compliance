# Giao thoa An ninh mạng – Bảo vệ dữ liệu cá nhân

> **Căn cứ:** Luật 91/2025/QH15 Đ2, Đ20–Đ23, Đ33, Đ37, Đ38, Đ39; NĐ 356/2025/NĐ-CP Đ3, Đ4, Đ13, Đ14, Đ17–Đ29, Đ31, Đ41; NQ 22/2026/NQ-CP Đ6, Phụ lục I.7; Luật 116/2025/QH15 Đ26.2, Đ41.4; NĐ 331/2026/NĐ-CP Đ9.1, Đ10.3.b, Đ12.2.b, Đ13.2.c; NĐ 333/2026/NĐ-CP Đ15.3, Đ24.3.a; NĐ 330/2026/NĐ-CP Đ54–Đ57, Đ59, Đ61, Đ69 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

Tài liệu này **chỉ trình bày phần giao thoa** giữa tuân thủ ANM và BVDLCN — những nghĩa vụ DLCN mà người làm tuân thủ ANM gặp khi xác định cấp độ, lập phương án ANM, xử lý sự cố. Không thay thế một chương trình tuân thủ DLCN đầy đủ (quyền chủ thể, sự đồng ý, các lĩnh vực đặc thù tại Luật 91 Đ24–Đ32).

---

## 1. Vì sao hai lĩnh vực gắn với nhau

| Điểm giao | Nội dung | Căn cứ |
|---|---|---|
| Cấp độ HTTT phụ thuộc số chủ thể DLCN | Dịch vụ trực tuyến xử lý thông tin riêng, thông tin cá nhân của **< 100.000** chủ thể DLCN cơ bản hoặc **< 10.000** chủ thể DLCN nhạy cảm → cấp 2; **từ 100.000 / từ 10.000** trở lên → cấp 3 | NĐ 331 Đ12.2.b, Đ13.2.c |
| Đánh giá rủi ro ANM phải xác định loại thông tin | Gồm thông tin công cộng, thông tin riêng, **thông tin cá nhân**, bí mật nhà nước | NĐ 331 Đ9.1, Đ10.3.b |
| DN cung cấp dịch vụ phải bảo vệ dữ liệu khi xử lý DLCN | Áp dụng biện pháp kỹ thuật bảo đảm ANM cho hoạt động xử lý DLCN theo Luật 116, pháp luật dữ liệu và BVDLCN | Luật 116 Đ41.4; NĐ 333 Đ15.3 |
| An ninh dữ liệu | Kiểm soát nhân sự xử lý dữ liệu; đánh giá rủi ro định kỳ; kiểm tra chuyển dữ liệu xuyên biên giới | Luật 116 Đ26.2.d–e |
| Cùng một nghị định xử phạt, cùng cơ quan quản lý | NĐ 330 xử phạt cả ANM và DLCN; Bộ Công an là cơ quan đầu mối cả hai lĩnh vực | NĐ 330 Đ1.1; Luật 116 Đ39.2; Luật 91 Đ36.2 |
| Tập huấn ANM có nội dung BVDLCN | Khối kiến thức nền tảng gồm quy định về BVDLCN | NĐ 333 Đ24.3.a |

## 2. Phân loại DLCN — tra nhanh để đếm chủ thể

| Loại | Ví dụ dễ bỏ sót trong HTTT | Căn cứ |
|---|---|---|
| DLCN cơ bản | Họ tên, ngày sinh, số điện thoại, số định danh, hình ảnh cá nhân, **thông tin tài khoản số** | NĐ 356 Đ3.1–3.11 |
| DLCN nhạy cảm | **Vị trí qua dịch vụ định vị**; **tên đăng nhập, mật khẩu tài khoản định danh điện tử; ảnh thẻ căn cước/CCCD/CMND** (eKYC); **tên đăng nhập, mật khẩu tài khoản ngân hàng, thông tin thẻ, lịch sử giao dịch**; **dữ liệu theo dõi hành vi sử dụng dịch vụ viễn thông, mạng xã hội, truyền thông trực tuyến và dịch vụ khác trên không gian mạng**; sức khỏe; sinh trắc học | NĐ 356 Đ4.1.d, đ, h, i, k, l |

> **Hệ quả cho cấp độ:** một dịch vụ trực tuyến có eKYC (lưu ảnh CCCD) hoặc ghi nhận hành vi người dùng (analytics theo người dùng) thường đã xử lý **DLCN nhạy cảm** → ngưỡng 10.000 chủ thể (NĐ 331 Đ13.2.c) đến rất sớm. Xử lý DLCN nhạy cảm cũng phải có phân quyền, quy trình, biện pháp bảo mật (NĐ 356 Đ4.2). Tiêu chí chi tiết: [`../01-xac-dinh-cap-do/tieu-chi-cap-do.md`](../01-xac-dinh-cap-do/tieu-chi-cap-do.md).

## 3. Nghĩa vụ DLCN chính (phần giao thoa)

| # | Nghĩa vụ | Ai | Thời hạn | Căn cứ | Thủ tục (sau NQ 22) | Bằng chứng cần lưu | Phạt (tổ chức) |
|---|---|---|---|---|---|---|---|
| 1 | **Đánh giá tác động xử lý DLCN (DPIA)**: lập và lưu hồ sơ từ thời điểm bắt đầu xử lý; hồ sơ gồm báo cáo theo **Mẫu 10**, bản sao hợp đồng/thỏa thuận xử lý, chính sách, quy trình, biểu mẫu BVDLCN. Báo cáo phải có: thông tin các bên, đầu mối BVDLCN, mục đích, loại dữ liệu, sơ đồ luồng dữ liệu, cơ chế đồng ý, chính sách lưu trữ–xóa–hủy, **phương án bảo đảm an toàn, sơ đồ thiết kế hệ thống, tiêu chuẩn áp dụng**, kết quả đánh giá tuân thủ, đánh giá rủi ro | Bên kiểm soát, bên kiểm soát và xử lý (nộp); bên xử lý lập, lưu theo thỏa thuận. Cơ quan nhà nước có thẩm quyền được miễn | Nộp **01 bản chính trong 60 ngày** kể từ ngày đầu xử lý; hồ sơ luôn sẵn sàng phục vụ kiểm tra; cơ quan trả kết quả đạt/không đạt trong **15 ngày**; hoàn thiện trong **30 ngày** nếu chưa đạt. Lập **01 lần** cho suốt thời gian hoạt động, sau đó cập nhật | Luật 91 Đ21; NĐ 356 Đ19 | Nộp qua **Cổng Dịch vụ công quốc gia**, trực tiếp hoặc bưu chính **về Bộ Công an** (kèm Mẫu 02a/02b); BCA phân loại, **chuyển Công an tỉnh, thành phố** xử lý theo địa bàn, quy mô, lĩnh vực (NQ 22 Phụ lục I.7 mục B.II) | Hồ sơ DPIA, biên nhận nộp, văn bản kết quả | 20–30 tr (NĐ 330 Đ55.1); **buộc dừng xử lý** nếu không lập (Đ55.3.b); khai sai 50–100 tr (Đ55.2) |
| 2 | **Cập nhật hồ sơ** DPIA và hồ sơ chuyển xuyên biên giới | Như trên | **Định kỳ 06 tháng** kể từ lần nộp đầu khi phát sinh mục đích mới hoặc thay đổi các bên; **trong 10 ngày** khi tổ chức lại, giải thể, phá sản, thay đổi nhà cung cấp dịch vụ BVDLCN, thay đổi ngành nghề liên quan xử lý DLCN | Luật 91 Đ22; NĐ 356 Đ20 | Mẫu 03a/03b; nộp qua Cổng DVCQG hoặc trực tiếp, bưu chính về BCA; BCA chuyển Công an tỉnh (NQ 22 Phụ lục I.7 mục B.III) | Biên nhận cập nhật | 20–30 tr (NĐ 330 Đ55.1.d–đ) |
| 3 | **Chuyển DLCN xuyên biên giới** — 3 trường hợp: (a) chuyển dữ liệu lưu tại VN ra hệ thống **ngoài lãnh thổ hoặc cloud của nhà cung cấp ở nước ngoài**; (b) chuyển cho tổ chức, cá nhân ở nước ngoài; (c) dùng nền tảng ngoài lãnh thổ để xử lý DLCN thu thập tại VN. Lập hồ sơ đánh giá tác động (Mẫu 09 + hợp đồng chuyển giao + chính sách, quy trình) | Bên chuyển dữ liệu | Nộp **01 bản chính trong 60 ngày** kể từ ngày chuyển; kết quả 15 ngày; hoàn thiện 30 ngày; lập 01 lần, cập nhật theo dòng 2 | Luật 91 Đ20.1–20.3; NĐ 356 Đ17.1, Đ18 | Nộp qua Cổng DVCQG, trực tiếp, bưu chính về BCA (kèm Mẫu 01a/01b); BCA chuyển Công an tỉnh (NQ 22 Phụ lục I.7 mục B.I) | Hồ sơ, hợp đồng với bên nhận, bằng chứng thông báo chủ thể | 30–50 tr (NĐ 330 Đ56.1); 50–100 tr (Đ56.2); **1–5% doanh thu tại VN** nếu dẫn đến lộ lọt (Đ56.3) |
| 3a | **Miễn** đánh giá tác động chuyển xuyên biên giới | Cơ quan nhà nước có thẩm quyền; **lưu DLCN của người lao động của chính tổ chức trên cloud**; chủ thể tự chuyển; báo chí; dữ liệu đã công khai theo luật; tình huống khẩn cấp; **quản lý nhân sự xuyên biên giới theo quy chế lao động, thỏa ước**; ký hợp đồng, vận chuyển, thanh toán, khách sạn, thị thực, học bổng | — | Luật 91 Đ20.6; NĐ 356 Đ17.3 | — | Ghi lại căn cứ miễn trong hồ sơ | — |
| 4 | **Chỉ định bộ phận, nhân sự BVDLCN** đủ điều kiện hoặc thuê tổ chức, cá nhân cung cấp dịch vụ BVDLCN. Nhân sự: **cao đẳng trở lên**; **≥ 02 năm kinh nghiệm** (từ khi tốt nghiệp) về pháp chế, CNTT, ANM, an ninh dữ liệu, quản trị rủi ro, kiểm soát tuân thủ, quản lý nhân sự, tổ chức cán bộ; **đã được đào tạo** BVDLCN. Chỉ định bằng văn bản chính thức nêu chức năng, nhiệm vụ, quyền hạn; ký **thỏa thuận trách nhiệm bảo mật**; tổ chức đào tạo | Cơ quan, tổ chức | Trước khi xử lý DLCN (khuyến nghị) | Luật 91 Đ33.2; NĐ 356 Đ13, Đ14 | Không có thủ tục nộp | Quyết định chỉ định, hồ sơ năng lực, thỏa thuận bảo mật, chứng nhận đào tạo | Cảnh cáo hoặc 10–20 tr (NĐ 330 Đ57.1); 20–30 tr (Đ57.2) |
| 5 | **Thông báo vi phạm** quy định BVDLCN có thể gây tổn hại QP-AN, TTATXH hoặc tính mạng, sức khỏe, danh dự, nhân phẩm, tài sản của chủ thể → thông báo cơ quan chuyên trách BVDLCN; bên xử lý phát hiện thì thông báo kịp thời cho bên kiểm soát; lập **biên bản xác nhận** vi phạm; nội dung thông báo theo **Mẫu 08 NĐ 356** (tính chất, thời gian, loại và số lượng dữ liệu, đầu mối BVDLCN, hậu quả, biện pháp) | Bên kiểm soát, bên kiểm soát và xử lý, bên thứ ba; bên xử lý | **≤ 72 giờ** kể từ khi phát hiện | Luật 91 Đ23; NĐ 356 Đ28 | Gửi cơ quan chuyên trách hoặc qua Cổng thông tin quốc gia về BVDLCN (NĐ 356 Đ28.2) | Biên bản xác nhận, thông báo đã gửi, nhật ký xử lý | 10–80 tr theo hành vi (NĐ 330 Đ54); chậm > 72 giờ: 40–60 tr (Đ54.3) |
| 5a | Sự cố liên quan **dữ liệu vị trí, sinh trắc học**: thêm nghĩa vụ **thông báo chủ thể bị ảnh hưởng ≤ 72 giờ** (nội dung tối thiểu 6 mục); không thông báo được hết → thông báo công khai trên kênh điện tử chính thức; **lưu hồ sơ vi phạm tối thiểu 05 năm** kể từ ngày khắc phục xong | Bên kiểm soát, bên kiểm soát và xử lý | 72 giờ; lưu 05 năm | NĐ 356 Đ29 | — | Hồ sơ vi phạm | Như dòng 5 |
| 6 | **Kinh doanh dịch vụ xử lý DLCN** (9 loại dịch vụ tại NĐ 356 Đ21, ví dụ: vận hành hệ thống xử lý thay bên kiểm soát; phân tích, khai thác DLCN; mã hóa DLCN; xử lý tự động bằng AI, dữ liệu lớn) phải có **Giấy chứng nhận đủ điều kiện**: người phụ trách chuyên môn là công dân VN thường trú tại VN; ≥ 03 nhân sự đủ điều kiện; hạ tầng phù hợp; hồ sơ DPIA (và chuyển xuyên biên giới nếu có) **đạt yêu cầu**. Trách nhiệm: khung quản trị rủi ro BVDLCN, **đánh giá hiện trạng tuân thủ và mức độ tín nhiệm 01 năm/lần** | Tổ chức kinh doanh dịch vụ | Cơ quan chuyên trách đánh giá hồ sơ trong 10 ngày; thẩm định, cấp trong 30 ngày; cấp lại/cấp đổi 05 ngày làm việc | NĐ 356 Đ21–Đ27 | Hồ sơ cấp: đơn, văn bản chỉ định bộ phận BVDLCN hoặc hợp đồng dịch vụ BVDLCN, đề án, giấy tờ chứng minh (NQ 22 Phụ lục I.7 mục A.IV); **gộp cấp lại, cấp đổi thành 01 thủ tục** (mục A.III) | Giấy chứng nhận, báo cáo đánh giá năm | 50–80 tr nếu chưa có chứng nhận (NĐ 330 Đ59.3.a); 80–100 tr nếu tiếp tục sau khi bị thu hồi (Đ59.4) |

### 3.1. Miễn trừ cho doanh nghiệp nhỏ và ngoại lệ

| Đối tượng | Được miễn gì | Thời hạn | Ngoại lệ — **không được miễn** nếu | Căn cứ |
|---|---|---|---|---|
| **Doanh nghiệp nhỏ, doanh nghiệp khởi nghiệp** | **Được lựa chọn** thực hiện hoặc không: DPIA (Luật 91 Đ21), cập nhật hồ sơ (Đ22), chỉ định bộ phận/nhân sự BVDLCN (Đ33.2) | **05 năm** kể từ 01/01/2026 | Kinh doanh dịch vụ xử lý DLCN; **trực tiếp xử lý DLCN nhạy cảm**; hoặc xử lý DLCN **từ khi quy mô đạt ≥ 100.000 chủ thể** (tích lũy tổng lượng đã xử lý) | Luật 91 Đ38.2; NĐ 356 Đ41.1 |
| **Hộ kinh doanh, doanh nghiệp siêu nhỏ** | **Không phải** thực hiện Đ21, Đ22, Đ33.2 (không giới hạn thời gian) | Không nêu thời hạn | Như trên | Luật 91 Đ38.3; NĐ 356 Đ41.2 |

> **Không thuộc diện miễn:** miễn trừ **không** bao gồm hồ sơ **chuyển DLCN xuyên biên giới** (Luật 91 Đ20) và **thông báo vi phạm 72 giờ** (Luật 91 Đ23). Doanh nghiệp nhỏ dùng cloud/SaaS đặt ở nước ngoài để xử lý dữ liệu khách hàng vẫn phải lập hồ sơ chuyển xuyên biên giới, trừ khi thuộc trường hợp miễn tại dòng 3a. Tiêu chí "doanh nghiệp nhỏ, siêu nhỏ, khởi nghiệp": **[CẦN ĐỐI CHIẾU]** pháp luật về hỗ trợ doanh nghiệp nhỏ và vừa (không có trong bộ nguồn).

> **Ngoại lệ quan trọng nhất là "kinh doanh dịch vụ xử lý DLCN".** Một tổ chức siêu nhỏ nhưng cung cấp một trong 9 dịch vụ tại NĐ 356 Đ21 thì mất toàn bộ miễn trừ, đồng thời phải xin Giấy chứng nhận đủ điều kiện. Phạm vi 9 dịch vụ, ranh giới với việc xử lý cho chính mình, điều kiện, thủ tục và mức phạt: [`dich-vu-xu-ly-dlcn.md`](dich-vu-xu-ly-dlcn.md).

### 3.2. Hiệu lực của thủ tục theo NQ 22

- NQ 22 có hiệu lực **từ 29/4/2026 đến hết 01/3/2027**; trong thời gian này, thủ tục trong NQ khác văn bản khác thì áp dụng NQ (NQ 22 Đ6.1–6.2). Bộ Công an phải trình văn bản/ban hành thông tư thay thế có hiệu lực trước 01/3/2027 (NQ 22 Đ4.1.b–c).
- Thay đổi chính so với NĐ 356: **nơi nhận hồ sơ** là Bộ Công an qua Cổng DVCQG, sau đó **phân cấp cho Công an tỉnh** xử lý; thời hạn 60/15/30 ngày giữ nguyên (NQ 22 Phụ lục I.7 mục B.I–B.III).
- **[CẦN ĐỐI CHIẾU]**: (1) mục B.II của Phụ lục I.7 (thủ tục DPIA) có câu "hoàn thiện hồ sơ đánh giá tác động **chuyển dữ liệu cá nhân xuyên biên giới**" — có vẻ là lỗi sao chép từ mục B.I; (2) NĐ 330 Đ55.1.b vẫn ghi nơi nhận là "Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (Bộ Công an)"; (3) sau 01/3/2027 cần kiểm tra văn bản thay thế.

## 4. Ghép nghĩa vụ ANM và DLCN — dùng chung bằng chứng

| Hoạt động ANM | Nghĩa vụ DLCN tương ứng | Gợi ý làm một lần, dùng hai nơi |
|---|---|---|
| Kiểm kê HTTT, phân loại thông tin (NĐ 331 Đ9.1, Đ10.3.a–b) | Sơ đồ luồng dữ liệu, loại DLCN trong DPIA (NĐ 356 Đ19.3.c) | Một bảng kiểm kê dữ liệu có cột "loại DLCN (cơ bản/nhạy cảm)", "số chủ thể", "vị trí lưu trữ (VN/nước ngoài)" — dùng cho cả phiếu xác định cấp độ, DPIA và NĐ 333 Đ19 |
| Đánh giá rủi ro ANM (NĐ 331 Đ10) | Đánh giá mức độ ảnh hưởng, rủi ro trong DPIA (NĐ 356 Đ19.3.g) | Dùng chung phương pháp và sổ rủi ro; DPIA trích phần rủi ro liên quan DLCN |
| Phương án bảo đảm ANM (NĐ 331 Đ29) | "Phương án bảo đảm an toàn DLCN, sơ đồ thiết kế hệ thống, tiêu chuẩn áp dụng" (NĐ 356 Đ19.3.đ) | Dẫn chiếu phương án ANM đã phê duyệt và mức TCVN 14423:2026 đã áp dụng |
| Quản lý nhà cung cấp, thuê cloud (NĐ 331 Đ5.3.a, Đ30.8–30.9) | Hợp đồng xử lý DLCN; hợp đồng chuyển xuyên biên giới; nghĩa vụ trong hợp đồng cloud (NĐ 356 Đ12; NĐ 330 Đ69.1.b) | Một phụ lục hợp đồng chung: trách nhiệm ANM + xử lý DLCN + vị trí dữ liệu + xóa/trả dữ liệu khi kết thúc |
| Ứng phó sự cố ANM: 24h/72h (NĐ 331 Đ31.2.d) | Thông báo vi phạm DLCN 72h (Luật 91 Đ23.1); thông báo chủ thể 72h (NĐ 356 Đ29) | Một quy trình sự cố có nhánh "có liên quan DLCN?" → kích hoạt thông báo cơ quan chuyên trách BVDLCN. Xem [`../04-chinh-sach-quy-trinh/quy-trinh-ung-pho-su-co.md`](../04-chinh-sach-quy-trinh/quy-trinh-ung-pho-su-co.md) |
| Giám sát ANM, ghi log hành vi người dùng (NĐ 333 Đ7, Đ16.6) | Thu thập DLCN người lao động bằng biện pháp công nghệ phải để người lao động biết (NĐ 330 Đ61.2.c); dữ liệu theo dõi hành vi là DLCN nhạy cảm (NĐ 356 Đ4.1.l) | Nêu rõ trong Quy chế ANM và nội quy lao động việc giám sát (EDR, DLP, camera, log); người lao động ký xác nhận |
| Mã hóa, kiểm soát truy cập (TCVN 14423:2026 nhóm quản lý tài khoản, tài sản thông tin) | Mã hóa DLCN khi lưu và khi truyền trên cloud (NĐ 330 Đ69.2.b); chuyển giao DLCN nhạy cảm phải mã hóa (NĐ 330 Đ52.3) | Một chính sách mã hóa áp dụng cho cả hai |
| Lưu log, lưu dữ liệu tại VN (NĐ 333 Đ16.6, Đ19) | Không lưu DLCN quá thời gian cần thiết (NĐ 330 Đ39.1.c); chính sách lưu trữ, xóa, hủy (NĐ 356 Đ19.3.d) | Chính sách lưu trữ thống nhất: **tối thiểu** theo NĐ 333 (12 tháng log; 24 tháng dữ liệu Đ19), **tối đa** theo mục đích xử lý DLCN |
| Nhân sự: chuyên trách ANM (NĐ 331 Đ31.1) | Nhân sự BVDLCN (Luật 91 Đ33.2) | Có thể giao cùng một đơn vị nhưng phải đáp ứng điều kiện NĐ 356 Đ13 và nêu rõ trong văn bản chỉ định |
| Kiểm tra ANM của BCA (NĐ 331 Đ26) | Kiểm tra BVDLCN: thông báo trước **15 ngày**; đột xuất không cần báo trước; nội dung: hiện trạng tuân thủ, DPIA, chuyển xuyên biên giới, dịch vụ xử lý DLCN (NĐ 356 Đ31.3–31.5) | Một bộ hồ sơ sẵn sàng thanh tra: [../06-kiem-tra-bao-cao/ho-so-luu-tru-bang-chung.md](../06-kiem-tra-bao-cao/ho-so-luu-tru-bang-chung.md) |

## 5. Checklist giao thoa

- [ ] Bảng kiểm kê dữ liệu có đếm số chủ thể DLCN cơ bản và nhạy cảm cho từng HTTT (NĐ 331 Đ12.2.b, Đ13.2.c; NĐ 356 Đ3–Đ4).
- [ ] Xác định vai trò của tổ chức với từng HTTT: bên kiểm soát / bên xử lý / bên kiểm soát và xử lý (Luật 91 Đ2.7–2.9).
- [ ] Đã xác định có thuộc diện miễn trừ DN nhỏ/siêu nhỏ không, và ghi lại căn cứ (Luật 91 Đ38; NĐ 356 Đ41).
- [ ] Có văn bản chỉ định nhân sự/bộ phận BVDLCN đủ điều kiện (NĐ 356 Đ13) hoặc hợp đồng dịch vụ BVDLCN.
- [ ] Hồ sơ DPIA đã nộp trong 60 ngày; lịch cập nhật 06 tháng và cơ chế cập nhật 10 ngày (Luật 91 Đ21–Đ22; NĐ 356 Đ19–Đ20).
- [ ] Liệt kê mọi luồng dữ liệu ra nước ngoài (cloud, SaaS, công ty mẹ) → hồ sơ chuyển xuyên biên giới hoặc căn cứ miễn (Luật 91 Đ20; NĐ 356 Đ17–Đ18).
- [ ] Quy trình sự cố có bước đánh giá DLCN và mốc 72 giờ (Luật 91 Đ23; NĐ 356 Đ28–Đ29).
- [ ] Giám sát người lao động (EDR, DLP, camera, log) đã được thông báo (NĐ 330 Đ61.2.c).
- [ ] Hợp đồng cloud có vai trò, trách nhiệm, yêu cầu bảo mật; DLCN được mã hóa khi lưu và truyền (NĐ 330 Đ69).
- [ ] Nếu cung cấp dịch vụ xử lý DLCN cho khách hàng → đã có Giấy chứng nhận đủ điều kiện (NĐ 356 Đ22–Đ25).
