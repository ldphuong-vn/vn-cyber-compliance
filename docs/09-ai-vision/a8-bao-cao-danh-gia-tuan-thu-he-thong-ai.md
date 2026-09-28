# Mẫu Báo cáo đánh giá tuân thủ bảo vệ dữ liệu cá nhân hằng năm cho hệ thống AI vision

> **Căn cứ:** Luật 91/2025/QH15 Đ3, Đ9, Đ14, Đ19.2, Đ20–Đ23, Đ25, Đ30.1–30.5, Đ31.4, Đ32, Đ33.2, Đ37.2; NĐ 356/2025/NĐ-CP Đ4.2, Đ5, Đ6, Đ10.1–10.3, Đ10.5.a–đ, Đ10.6, Đ12, Đ13, Đ14.1.c, Đ19.3.e, Đ22, Đ23, Đ28, Đ29, Mẫu số 10 mục II.12; NĐ 330/2026/NĐ-CP Đ47.1.b, Đ59.2.c, Đ67, Đ69, Đ70 · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

Báo cáo đánh giá tuân thủ quy định bảo vệ dữ liệu cá nhân (DLCN) **01 năm/lần** cho hệ thống AI vision của nhà cung cấp. Mã **A8** trong [bản thảo luận](thao-luan-tai-lieu-va-phuong-an-ho-tro.md). Một báo cáo đáp ứng đồng thời ba nghĩa vụ đánh giá định kỳ, mỗi nghĩa vụ có kết luận riêng ở mục V:

| Nghĩa vụ | Áp dụng khi | Căn cứ | Phạt nếu không đánh giá (tổ chức) |
|---|---|---|---|
| Đánh giá tuân thủ đối với **hệ thống trí tuệ nhân tạo** | Nhà cung cấp xử lý DLCN trong hệ thống AI: vận hành nhận diện trên cloud (M3, M4), đăng ký khuôn mặt hộ (M2), huấn luyện, kiểm thử mô hình bằng dữ liệu có người (M5, cả bộ dữ liệu tự thu thập hoặc mua) | NĐ 356 Đ10.5.đ | 20–50 triệu (NĐ 330 Đ67.1) |
| Đánh giá tuân thủ của **tổ chức cung cấp dịch vụ điện toán đám mây** | M3, M4 | NĐ 356 Đ12.3.d | 20–50 triệu (NĐ 330 Đ69.1.đ) |
| Đánh giá **hiện trạng tuân thủ và mức độ tín nhiệm** của tổ chức kinh doanh dịch vụ xử lý DLCN | Đã được cấp Giấy chứng nhận (A6) | NĐ 356 Đ23.3 | 30–50 triệu (NĐ 330 Đ59.2.c) |

Kết quả báo cáo còn dùng cho: mục II.12 Mẫu số 10 và NĐ 356 Đ19.3.e (kết quả đánh giá tuân thủ trong hồ sơ DPIA); nhiệm vụ đánh giá định kỳ của bộ phận BVDLCN (NĐ 356 Đ14.1.c); nghĩa vụ kiểm tra, đánh giá định kỳ khi xử lý DLCN không cần đồng ý (Luật 91 Đ19.2.c; phạt 10–20 triệu theo NĐ 330 Đ47.1.b); chuẩn bị cho kiểm tra của cơ quan chuyên trách (NĐ 356 Đ31.3.a).

**M1 thuần** (không chạm dữ liệu khách hàng, không huấn luyện bằng dữ liệu có người): nghĩa vụ Đ10.5.đ khó áp. Vẫn nên dùng phần B, C, G, P của bảng tiêu chí làm bằng chứng "phát triển hệ thống đáp ứng tiêu chuẩn an ninh mạng và bảo vệ dữ liệu toàn diện" (NĐ 356 Đ10.5.a; NĐ 330 Đ67.2.e).

### Ai đánh giá

- Người đánh giá phải **độc lập** với bộ phận vận hành nền tảng và nhóm phát triển mô hình. Phương án: bộ phận BVDLCN (A1) chủ trì, hoặc thuê đơn vị bên ngoài.
- Nhà cung cấp dùng mẫu này để **đánh giá hộ khách hàng** có thể bị coi là cung cấp dịch vụ BVDLCN (vùng xám **V8**; NĐ 356 Đ16). Mẫu này chỉ dành cho hệ thống của chính nhà cung cấp.
- Luật không quy định phương pháp, biểu mẫu, tiêu chí "mức độ tín nhiệm" — **[CẦN ĐỐI CHIẾU]**. Mục IV đề xuất chỉ số nội bộ.

### Cách chấm

| Kết quả | Nghĩa |
|---|---|
| **Đạt** | Có quy định và có bằng chứng thực hiện trong kỳ |
| **Một phần** | Có quy định nhưng chưa thực hiện đủ, hoặc thực hiện nhưng chưa có văn bản, hoặc chỉ áp dụng cho một phần hệ thống |
| **Chưa** | Không có, hoặc có nhưng không thực hiện |
| **N/A** | Không áp dụng; ghi lý do ở cột Ghi chú (ví dụ "không có cloud — M1") |

Bằng chứng kỹ thuật lấy từ hồ sơ sản phẩm: [B1](b1-mo-ta-luong-du-lieu-kien-truc.md), [B2](b2-phan-loai-rui-ro-he-thong-ai.md), [B3](b3-giai-thich-thuat-toan.md), [B4](b4-tai-lieu-bao-mat-san-pham.md), [B7](b7-tuyen-bo-du-lieu-huan-luyen.md).

Mọi tiêu chí "Một phần" hoặc "Chưa" phải có dòng tương ứng trong kế hoạch khắc phục (mục VI). Tiêu chí có ký hiệu **[M3/M4]** chỉ chấm khi có cloud hoặc vận hành thay; **[GCN]** chỉ chấm khi đã có Giấy chứng nhận; **[M5]** chỉ chấm khi có huấn luyện.

---

| **{{TEN_NHA_CUNG_CAP_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_VB}}/BC-{{VIET_TAT_NCC}} | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>BÁO CÁO</b><br/><b>Đánh giá tuân thủ quy định về bảo vệ dữ liệu cá nhân năm {{NAM_DANH_GIA}}</b><br/><b>đối với hệ thống {{TEN_SAN_PHAM}} {{PHIEN_BAN_SAN_PHAM}}</b></p>

<p align="center">Kính gửi: {{CHUC_DANH_NGUOI_KY}} {{TEN_NHA_CUNG_CAP}}</p>

*Viết tắt trong báo cáo: "Luật 91" là Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15; "NĐ 356" là Nghị định số 356/2025/NĐ-CP ngày 31 tháng 12 năm 2025 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật Bảo vệ dữ liệu cá nhân; "NĐ 330" là Nghị định số 330/2026/NĐ-CP của Chính phủ quy định xử phạt vi phạm hành chính trong lĩnh vực an ninh mạng, bảo vệ dữ liệu cá nhân; DLCN là dữ liệu cá nhân.*

### I. Thông tin chung

| Nội dung | Thông tin |
|---|---|
| Hệ thống được đánh giá | {{TEN_SAN_PHAM}} {{PHIEN_BAN_SAN_PHAM}}; nền tảng {{TEN_NEN_TANG_CLOUD}} *(nếu có)*; vị trí máy chủ {{VI_TRI_MAY_CHU}} |
| Chức năng AI trong phạm vi | ☐ Nhận diện khuôn mặt ☐ Chống giả mạo (liveness) ☐ Nhận diện biển số ☐ Đếm người, luồng khách ☐ Phân tích thuộc tính, hành vi ☐ Khác: ... |
| Mô hình kinh doanh trong kỳ | ☐ M1 ☐ M2 ☐ M3 ☐ M4 ☐ M5 |
| Nghĩa vụ đánh giá được đáp ứng | ☐ Hệ thống AI (điểm đ khoản 5 Điều 10 NĐ 356) ☐ Dịch vụ điện toán đám mây (điểm d khoản 3 Điều 12) ☐ Hiện trạng tuân thủ và mức độ tín nhiệm (khoản 3 Điều 23) |
| Kỳ đánh giá | Từ {{TU_NGAY_KY_DANH_GIA}} đến {{DEN_NGAY_KY_DANH_GIA}} |
| Kỳ đánh giá trước | Báo cáo số {{SO_BAO_CAO_KY_TRUOC}} |
| Người, đơn vị đánh giá | {{NGUOI_DANH_GIA}} — {{DON_VI_DANH_GIA}} |
| Tính độc lập | {{Bộ phận BVDLCN, không tham gia vận hành, phát triển/Đơn vị bên ngoài theo hợp đồng số ...}} |
| Phương pháp | Rà soát tài liệu; phỏng vấn; kiểm tra cấu hình, nhật ký; lấy mẫu {{SO_MAU_KIEM_TRA}} yêu cầu của chủ thể, {{SO_MAU_XOA}} lệnh xóa, {{SO_MAU_TAI_KHOAN}} tài khoản; kiểm thử kỹ thuật |
| Số liệu quy mô tại ngày chốt | {{SO_CHU_THE_NHAY_CAM_NEN_TANG}} chủ thể có dữ liệu sinh trắc học; {{SO_CHU_THE_CO_BAN_NEN_TANG}} chủ thể DLCN cơ bản; {{SO_KHACH_HANG_NEN_TANG}} khách hàng |

### II. Tóm tắt kết quả

| Nhóm tiêu chí | Số tiêu chí | Đạt | Một phần | Chưa | N/A |
|---|:---:|:---:|:---:|:---:|:---:|
| A. Mục đích, phạm vi xử lý | 3 | | | | |
| B. Bảo mật, xác thực, phân quyền | 4 | | | | |
| C. Phân loại rủi ro, giám sát hệ thống AI | 4 | | | | |
| D. Dữ liệu sinh trắc học | 4 | | | | |
| E. Minh bạch, xử lý tự động, quyền với hồ sơ nhận dạng | 5 | | | | |
| F. Sự đồng ý | 4 | | | | |
| G. Quyền của chủ thể | 3 | | | | |
| H. Lưu trữ, xóa | 4 | | | | |
| I. Sự cố, vi phạm | 3 | | | | |
| K. Nhân sự, đào tạo, hồ sơ | 6 | | | | |
| L. Điện toán đám mây [M3/M4] | 5 | | | | |
| M. Dịch vụ xử lý DLCN [GCN] | 5 | | | | |
| N. Dữ liệu huấn luyện [M5] | 3 | | | | |
| **Tổng** | **53** | | | | |

### III. Bảng tiêu chí đánh giá

| Mã | Tiêu chí | Căn cứ | Bằng chứng cần xem | Kết quả | Ghi chú |
|---|---|---|---|---|---|
| **A** | **Mục đích, phạm vi xử lý** | | | | |
| A.1 | DLCN trong hệ thống AI chỉ được xử lý đúng mục đích đã xác định, giới hạn trong phạm vi cần thiết; mỗi chức năng AI có mục đích ghi trong Sổ đăng ký | Luật 91 Đ30.1, Đ3.2 | Sổ đăng ký hoạt động xử lý (A3); danh sách chức năng AI đang bật | | |
| A.2 | Xử lý tuân thủ pháp luật, phù hợp chuẩn mực đạo đức, thuần phong mỹ tục; không có chức năng nhận diện cảm xúc, suy đoán thuộc tính nhạy cảm bật mặc định | Luật 91 Đ30.2 | Cấu hình mặc định; tài liệu sản phẩm | | |
| A.3 | Không sử dụng, phát triển hệ thống để gây tổn hại quốc phòng, an ninh, trật tự, an toàn xã hội hoặc xâm phạm tính mạng, sức khỏe, danh dự, nhân phẩm, tài sản; có cơ chế kiểm soát, ngăn chặn lợi dụng AI (ví dụ từ chối khách hàng dùng để theo dõi trái phép) | Luật 91 Đ30.5; NĐ 356 Đ10.5.d | Điều khoản sử dụng chấp nhận được; quy trình thẩm định khách hàng; hồ sơ các trường hợp từ chối | | |
| **B** | **Bảo mật, xác thực, phân quyền** | | | | |
| B.1 | Hệ thống tích hợp biện pháp bảo mật DLCN phù hợp; dùng phương thức xác thực, định danh phù hợp; phân quyền truy cập | Luật 91 Đ30.3; NĐ 330 Đ67.2.g | Ma trận phân quyền; cấu hình xác thực đa yếu tố cho quản trị viên, nhân viên hỗ trợ | | |
| B.2 | Hệ thống đáp ứng tiêu chuẩn an ninh mạng, bảo vệ dữ liệu toàn diện: bảo mật thông tin, độ tin cậy thuật toán, ổn định, phòng chống tấn công mạng | NĐ 356 Đ10.5.a; NĐ 330 Đ67.2.e | Hồ sơ cấp độ hệ thống thông tin; kết quả kiểm thử xâm nhập; tài liệu bảo mật sản phẩm (B4) | | |
| B.3 | Có hệ thống giám sát, cảnh báo sớm nguy cơ an ninh mạng | NĐ 356 Đ10.5.c; NĐ 330 Đ67.2.e | Cấu hình giám sát; mẫu cảnh báo trong kỳ | | |
| B.4 | Có quy định phân quyền giới hạn truy cập, quy trình xử lý và biện pháp bảo mật đối với dữ liệu nhạy cảm | NĐ 356 Đ4.2 | Quy định nội bộ; danh sách người có quyền truy cập dữ liệu sinh trắc học | | |
| **C** | **Phân loại rủi ro, giám sát hệ thống AI** | | | | |
| C.1 | Xử lý DLCN bằng AI đã được phân loại theo mức độ rủi ro, có biện pháp tương ứng từng mức | Luật 91 Đ30.4; NĐ 330 Đ67.2.d | Tài liệu phân loại rủi ro (B2), ngày cập nhật | | |
| C.2 | Kết quả suy luận của AI xác định được người (kết quả nhận diện, nhật ký ai-ở đâu-lúc nào) được bảo vệ như DLCN | NĐ 356 Đ10.2; NĐ 330 Đ67.2.đ | Phân quyền, thời hạn lưu, mã hóa của bảng kết quả nhận diện | | |
| C.3 | Có cơ chế giám sát hoạt động hệ thống AI và trách nhiệm giải trình với chủ thể: theo dõi FAR, FRR, độ lệch theo nhóm; nhật ký phiên bản mô hình, ngưỡng | NĐ 356 Đ10.5.b | Báo cáo đo độ chính xác trong kỳ; nhật ký thay đổi mô hình | | |
| C.4 | Quyết định tự động ảnh hưởng quyền lợi (từ chối ra vào, ghi đi muộn) có cơ chế giám sát và cho phép yêu cầu con người đánh giá lại | NĐ 330 Đ67.3.b | Chức năng xem xét lại; số yêu cầu xem xét lại trong kỳ và kết quả | | |
| **D** | **Dữ liệu sinh trắc học** | | | | |
| D.1 | Bảo mật vật lý thiết bị lưu và truyền dữ liệu sinh trắc học (máy chủ, đầu thu, thiết bị biên, máy chấm công) | Luật 91 Đ31.4.a; NĐ 330 Đ70.1.c | Biên bản kiểm tra phòng máy, tủ rack; niêm phong thiết bị biên | | |
| D.2 | Hạn chế quyền truy cập dữ liệu sinh trắc học; có hệ thống theo dõi phòng ngừa, phát hiện xâm phạm | Luật 91 Đ31.4.a; NĐ 330 Đ70.1.d | Danh sách quyền; cảnh báo truy xuất hàng loạt template | | |
| D.3 | Template mã hóa, khóa quản lý tách biệt; mặc định không lưu ảnh gốc sau khi đăng ký hoặc có thời hạn | Luật 91 Đ3.2, Đ31.4.a | Cấu hình mã hóa; chính sách khóa; kiểm tra mẫu cơ sở dữ liệu | | |
| D.4 | Không khai thác dữ liệu sinh trắc học vượt mục đích ban đầu khi chưa có đồng ý | NĐ 330 Đ70.2.b | Nhật ký truy cập nhóm phát triển; đối chiếu mục đích | | |
| **E** | **Minh bạch, xử lý tự động, quyền với hồ sơ nhận dạng** | | | | |
| E.1 | Có tài liệu thông báo việc xử lý tự động, giải thích nguyên tắc thuật toán và ảnh hưởng tới quyền lợi, cung cấp cho khách hàng để thông báo chủ thể | NĐ 356 Đ10.3; NĐ 330 Đ67.2.a | Tài liệu giải thích thuật toán (B3) | | |
| E.2 | Có phương thức để chủ thể không tham gia xử lý tự động (thẻ, mã PIN, mã QR) | NĐ 356 Đ10.3; NĐ 330 Đ67.2.b | Chức năng phương thức thay thế; hướng dẫn cấu hình | | |
| E.3 | Chủ thể có thể chỉnh sửa, ẩn danh, xóa hồ sơ nhận dạng, kể cả khi nền tảng lưu lịch sử | NĐ 356 Đ10.6; NĐ 330 Đ67.2.c | Kiểm thử chức năng xóa template, ẩn danh lịch sử nhận diện | | |
| E.4 | Nhận diện khuôn mặt tắt mặc định trên camera hướng ra khu vực công cộng; bật phải xác nhận có cảnh báo | Luật 91 Đ32.3; NĐ 330 Đ71.2.a | Cấu hình mặc định; nhật ký bật tính năng | | |
| E.5 | Có chức năng làm mờ người không liên quan khi xuất video; nhật ký xuất video | NĐ 330 Đ71.2.b | Kiểm thử chức năng; mẫu nhật ký | | |
| **F** | **Sự đồng ý** | | | | |
| F.1 | Dữ liệu nhà cung cấp là bên kiểm soát (nhân viên chấm công khuôn mặt, ứng viên, người liên hệ) có đồng ý hợp lệ: tự nguyện, biết rõ, theo từng mục đích, không mặc định | Luật 91 Đ9.2, Đ9.4; NĐ 356 Đ6.3 | Mẫu đồng ý; lấy mẫu hồ sơ | | |
| F.2 | Khi xin đồng ý xử lý dữ liệu nhạy cảm có thông báo dữ liệu là nhạy cảm | NĐ 356 Đ6.4; NĐ 330 Đ43.1.h | Nội dung mẫu đồng ý | | |
| F.3 | Lưu trữ, chứng minh được sự đồng ý (ai, lúc nào, nội dung gì) | NĐ 356 Đ6.1–6.2; NĐ 330 Đ43.1.g | Nhật ký đồng ý trên sản phẩm và nội bộ | | |
| F.4 | Sản phẩm hỗ trợ khách hàng lưu nhật ký đồng ý, rút lại đồng ý của người dùng cuối | NĐ 356 Đ6.2 | Chức năng nhật ký đồng ý | | |
| **G** | **Quyền của chủ thể** | | | | |
| G.1 | Có quy trình, biểu mẫu, phân công thực hiện quyền; chủ thể được biết thủ tục | NĐ 356 Đ5.1; NĐ 330 Đ44.1.a–c | Chính sách (A2); quy trình; sổ yêu cầu | | |
| G.2 | Yêu cầu được phản hồi trong 02 ngày làm việc và thực hiện đúng thời hạn 10, 15, 20 ngày (bên kiểm soát) | NĐ 356 Đ5.2–5.5 | Sổ yêu cầu; lấy mẫu | | |
| G.3 | Với vai trò bên xử lý: chuyển yêu cầu của người dùng cuối cho khách hàng; thực hiện chỉ dẫn của khách hàng đúng hạn | Luật 91 Đ37.2.b; NĐ 330 Đ44.2 | Nhật ký chuyển yêu cầu; phiếu thực hiện | | |
| **H** | **Lưu trữ, xóa** | | | | |
| H.1 | Có chính sách lưu trữ, xóa, hủy; thời hạn từng loại dữ liệu có lý do | Luật 91 Đ3.3; NĐ 330 Đ39.1.c, Đ69.1.d | Chính sách; cấu hình tự xóa | | |
| H.2 | Xóa template khi nhân viên nghỉ việc (dữ liệu của nhà cung cấp); sản phẩm hỗ trợ khách hàng xóa nhanh | Luật 91 Đ25.2.c; NĐ 330 Đ61.2.b | Đối chiếu danh sách nghỉ việc với cơ sở dữ liệu khuôn mặt | | |
| H.3 | Xóa, hủy bằng biện pháp an toàn, ngăn khôi phục trái phép; có nhật ký xóa | Luật 91 Đ14.3; NĐ 330 Đ51.1.b–c | Quy trình xóa; nhật ký | | |
| H.4 | Khi kết thúc hợp đồng với khách hàng: trả lại hoặc xóa toàn bộ dữ liệu, có xác nhận | NĐ 356 Đ12.2.đ; NĐ 330 Đ51.2.c | Biên bản xác nhận xóa các hợp đồng kết thúc trong kỳ | | |
| **I** | **Sự cố, vi phạm** | | | | |
| I.1 | Có quy trình sự cố DLCN có nhánh bên xử lý, bên kiểm soát, sinh trắc học (A7); đã diễn tập trong kỳ | Luật 91 Đ23; NĐ 356 Đ28, Đ29 | Quy trình; biên bản diễn tập | | |
| I.2 | Các sự cố trong kỳ được báo khách hàng kịp thời, thông báo cơ quan chuyên trách trong 72 giờ khi là bên kiểm soát, có biên bản xác nhận | Luật 91 Đ23.1–23.2; NĐ 330 Đ54 | Sổ sự cố; Mẫu số 08; thời điểm gửi | | |
| I.3 | Sự cố sinh trắc học, vị trí: thông báo chủ thể trong 72 giờ đủ 06 nội dung; hồ sơ lưu 05 năm | Luật 91 Đ31.4.b; NĐ 356 Đ29; NĐ 330 Đ70.1.đ–h | Bản thông báo; hồ sơ lưu | | |
| **K** | **Nhân sự, đào tạo, hồ sơ** | | | | |
| K.1 | Có văn bản chỉ định bộ phận, nhân sự BVDLCN đủ điều kiện năng lực; thỏa thuận bảo mật | Luật 91 Đ33.2; NĐ 356 Đ13; NĐ 330 Đ57 | Quyết định (A1); hồ sơ năng lực; thỏa thuận | | |
| K.2 | Đào tạo BVDLCN cho nhân sự BVDLCN, kỹ thuật viên, hỗ trợ khách hàng, nhóm phát triển mô hình trong kỳ | NĐ 356 Đ13.6, Đ14.1.đ | Danh sách tham dự; nội dung | | |
| K.3 | Cam kết bảo mật với kỹ thuật viên, đại lý, nhà thầu lắp đặt có tiếp cận dữ liệu | Luật 91 Đ37.2.c; NĐ 356 Đ7.4 | Cam kết (C4); hợp đồng đại lý (C5) | | |
| K.4 | Hồ sơ DPIA đã nộp, được cập nhật 06 tháng và trong 10 ngày khi có thay đổi | Luật 91 Đ21–Đ22; NĐ 356 Đ20; NĐ 330 Đ55 | Hồ sơ; giấy tiếp nhận; lịch sử cập nhật | | |
| K.5 | Nếu có chuyển xuyên biên giới (máy chủ, hỗ trợ, API ở nước ngoài): hồ sơ đánh giá tác động đã lập, nộp trong 60 ngày | Luật 91 Đ20; NĐ 330 Đ56 | Hồ sơ A5; sơ đồ luồng dữ liệu | | |
| K.6 | Đánh giá tuân thủ kỳ trước đã thực hiện đúng chu kỳ 01 năm; các mục khắc phục kỳ trước đã đóng hoặc có lý do gia hạn | NĐ 356 Đ10.5.đ; NĐ 330 Đ67.1 | Báo cáo kỳ trước; bảng theo dõi khắc phục | | |
| **L** | **Điện toán đám mây [M3/M4]** | | | | |
| L.1 | Biện pháp kỹ thuật, tổ chức ngăn truy cập trái phép; tách dữ liệu từng khách hàng | NĐ 356 Đ12.1; NĐ 330 Đ69.2.a | Kiến trúc; kiểm thử tách khách hàng | | |
| L.2 | DLCN mã hóa khi nghỉ và khi truyền, phân quyền truy cập nghiêm ngặt | NĐ 356 Đ12.4; NĐ 330 Đ69.2.b–c | Cấu hình mã hóa; ma trận quyền | | |
| L.3 | Cung cấp thông tin bộ phận, nhân sự BVDLCN cho khách hàng, đối tác | NĐ 356 Đ12.3.a; NĐ 330 Đ69.1.a | Hợp đồng; trang chính sách | | |
| L.4 | Ràng buộc nhà thầu phụ thực hiện nghĩa vụ BVDLCN | NĐ 356 Đ12.3.b; NĐ 330 Đ69.1.c | Danh sách bên xử lý phụ; hợp đồng | | |
| L.5 | Hợp đồng với khách hàng xác định luồng dữ liệu, vai trò, yêu cầu bảo mật; thông báo ngay thay đổi ảnh hưởng dữ liệu | NĐ 356 Đ12.2.b–d | Phụ lục xử lý dữ liệu (C1), điều khoản cloud (C2); thông báo thay đổi trong kỳ | | |
| **M** | **Dịch vụ xử lý DLCN [GCN]** | | | | |
| M.1 | Duy trì điều kiện: người đứng đầu chuyên môn là công dân Việt Nam thường trú tại Việt Nam; tối thiểu 03 nhân sự đủ năng lực; hạ tầng phù hợp | NĐ 356 Đ22.2–22.3; NĐ 330 Đ59.3.b–c | Danh sách nhân sự hiện tại; hồ sơ năng lực | | |
| M.2 | Có khung quản trị rủi ro BVDLCN, được rà soát trong kỳ | NĐ 356 Đ23.2; NĐ 330 Đ59.1.a | Sổ đăng ký rủi ro; biên bản rà soát | | |
| M.3 | Có quy định trách nhiệm, quyền hạn trong xử lý DLCN; áp dụng tiêu chuẩn, quy chuẩn đã cam kết | NĐ 356 Đ23.4–23.5; NĐ 330 Đ59.1.b–c | Quy định; bằng chứng áp dụng tiêu chuẩn | | |
| M.4 | Mọi hợp đồng trong kỳ có yêu cầu khách hàng xin đồng ý và nêu tên nhà cung cấp dịch vụ xử lý | NĐ 356 Đ23.7; NĐ 330 Đ59.2.a | Lấy mẫu hợp đồng; mẫu thông báo của khách hàng | | |
| M.5 | Xác thực danh tính tổ chức theo pháp luật về định danh và xác thực điện tử | NĐ 356 Đ23.8; NĐ 330 Đ59.1.d | Tài khoản định danh tổ chức | | |
| **N** | **Dữ liệu huấn luyện [M5]** | | | | |
| N.1 | Dữ liệu dùng để phát triển mô hình có cơ sở pháp lý (đồng ý riêng, khử nhận dạng, giấy phép bộ dữ liệu) | NĐ 356 Đ10.1 | Danh mục bộ dữ liệu, nguồn, cơ sở; tuyên bố B7 | | |
| N.2 | Không dùng dữ liệu khách hàng cho huấn luyện khi chưa có thỏa thuận và cơ sở hợp lệ | NĐ 330 Đ70.2.b | Nhật ký truy cập; đối chiếu hợp đồng | | |
| N.3 | Khử nhận dạng được kiểm soát; không tái nhận dạng | Luật 91 Đ14.6; NĐ 330 Đ51.1.d–đ, Đ51.3.b | Quy trình khử nhận dạng; kiểm tra mẫu | | |

### IV. Mức độ tín nhiệm về bảo vệ dữ liệu cá nhân *[GCN]*

| Chỉ số | Năm trước | Năm nay | Mục tiêu năm sau |
|---|---|---|---|
| Tỷ lệ tiêu chí Đạt (không tính N/A) | | | |
| Số sự cố DLCN; số sự cố có dữ liệu sinh trắc học | | | |
| Thời gian trung bình từ T0 đến khi báo khách hàng (giờ) | | | |
| Tỷ lệ yêu cầu của chủ thể, của khách hàng được xử lý đúng hạn | | | |
| Tỷ lệ hợp đồng có phụ lục xử lý dữ liệu | | | |
| Tỷ lệ nhân sự có tiếp cận dữ liệu đã được đào tạo trong kỳ | | | |
| Số lỗ hổng nghiêm trọng còn mở quá hạn | | | |
| Số khiếu nại, phản ánh về DLCN; số lần bị cơ quan có thẩm quyền yêu cầu khắc phục | | | |

### V. Kết luận

| Phạm vi | Kết luận | Lý do chính |
|---|---|---|
| Hệ thống trí tuệ nhân tạo (điểm đ khoản 5 Điều 10 NĐ 356) | ☐ Đạt ☐ Đạt có điều kiện ☐ Chưa đạt | |
| Dịch vụ điện toán đám mây (điểm d khoản 3 Điều 12 NĐ 356) | ☐ Đạt ☐ Đạt có điều kiện ☐ Chưa đạt ☐ Không áp dụng | |
| Hiện trạng tuân thủ và mức độ tín nhiệm (khoản 3 Điều 23 NĐ 356) | ☐ Đạt ☐ Đạt có điều kiện ☐ Chưa đạt ☐ Không áp dụng | |

Quy ước kết luận: **Đạt** khi không có tiêu chí "Chưa" và không quá {{NGUONG_MOT_PHAN}} tiêu chí "Một phần"; **Đạt có điều kiện** khi có tiêu chí "Chưa" nhưng đều có kế hoạch khắc phục trong {{HAN_KHAC_PHUC_TOI_DA}} ngày và không thuộc nhóm D, I; **Chưa đạt** trong các trường hợp còn lại.

Phát hiện quan trọng nhất:

1. ...
2. ...
3. ...

### VI. Kế hoạch khắc phục

| STT | Mã tiêu chí | Phát hiện | Biện pháp khắc phục | Người chịu trách nhiệm | Hạn hoàn thành | Trạng thái |
|:---:|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

### VII. Kiến nghị

1. Phê duyệt kế hoạch khắc phục tại mục VI và bố trí nguồn lực.
2. Cập nhật hồ sơ đánh giá tác động xử lý dữ liệu cá nhân (mục II.12 Mẫu số 10 NĐ 356) bằng kết quả báo cáo này nếu có thay đổi biện pháp.
3. {{KIEN_NGHI_KHAC}}.

| **Nơi nhận:**<br/>- Như trên;<br/>- Bộ phận vận hành nền tảng, phát triển sản phẩm;<br/>- Lưu: VT, {{TEN_BO_PHAN_BVDLCN}}. | **NGƯỜI ĐÁNH GIÁ**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{NGUOI_DANH_GIA}}**<br/><br/>**PHÊ DUYỆT CỦA {{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

## Hướng dẫn điền

| Mục | Cách điền |
|---|---|
| I | Ghi đúng phiên bản sản phẩm và mô hình trong kỳ. Nếu trong kỳ chuyển từ M1 sang M3, đánh giá theo mô hình ở cuối kỳ và ghi chú thời điểm chuyển |
| II | Đếm sau khi chấm xong mục III. Nếu đổi số tiêu chí trong bảng III, sửa cột "Số tiêu chí" |
| III | Mỗi tiêu chí ghi một trong bốn giá trị Đạt / Một phần / Chưa / N/A. Cột "Bằng chứng cần xem" ghi thêm số hiệu tài liệu, đường dẫn thực tế đã xem |
| IV | Chỉ số đề xuất, không phải tiêu chí pháp định. Giữ cùng bộ chỉ số qua các năm để so sánh |
| V | `{{NGUONG_MOT_PHAN}}`, `{{HAN_KHAC_PHUC_TOI_DA}}`: giá trị nội bộ, gợi ý 5 tiêu chí và 90 ngày |
| VI | Mỗi tiêu chí "Một phần", "Chưa" một dòng. Theo dõi đến khi đóng; kỳ sau đánh giá lại |

## Bằng chứng cần lưu

| Bằng chứng | Mục đích |
|---|---|
| Báo cáo có chữ ký, phê duyệt, theo từng năm | Chứng minh đánh giá định kỳ 01 năm/lần (NĐ 356 Đ10.5.đ, Đ12.3.d, Đ23.3) |
| Hồ sơ bằng chứng đã xem cho từng tiêu chí | Phục vụ kiểm tra của cơ quan chuyên trách (NĐ 356 Đ31.3) |
| Kế hoạch khắc phục và bằng chứng đóng từng mục | Chứng minh biện pháp được rà soát, cập nhật (Luật 91 Đ37.1.c) |
