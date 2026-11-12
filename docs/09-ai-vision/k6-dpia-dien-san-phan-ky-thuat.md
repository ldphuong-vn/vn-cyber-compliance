# Mẫu Hồ sơ đánh giá tác động xử lý dữ liệu cá nhân (Mẫu 10 NĐ 356) — điền sẵn phần kỹ thuật cho hệ thống AI vision

> **Căn cứ:** Luật 91/2025/QH15 Đ21, Đ22, Đ25.3, Đ30, Đ31, Đ32, Đ38; NĐ 356/2025/NĐ-CP Đ3, Đ4, Đ10, Đ19, Đ20, Đ41, Phụ lục Mẫu 10; NQ 22/2026/NQ-CP Phụ lục I.7 Phần B mục II; NĐ 330/2026/NĐ-CP Đ55 · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

Mẫu này dựng lại **cấu trúc Báo cáo đánh giá tác động xử lý dữ liệu cá nhân — Mẫu số 10** Phụ lục NĐ 356 (Phần A mục I–IV, Phần B) cho khách hàng triển khai camera, nhận diện khuôn mặt, nhận diện biển số. Nhà cung cấp **điền sẵn phần kỹ thuật** (luồng dữ liệu, loại dữ liệu, biện pháp bảo vệ, rủi ro an toàn hệ thống); khách hàng **điền phần nghiệp vụ** (mục đích, số chủ thể, đồng ý, lưu trữ, nhân sự BVDLCN, đánh giá tác động tới chủ thể) và **tự chịu trách nhiệm** về nội dung khi nộp.

| Ký hiệu trong mẫu | Ý nghĩa |
|---|---|
| **[NCC]** | Nhà cung cấp đã điền sẵn từ tài liệu sản phẩm. Khách hàng rà lại cho khớp cấu hình thực tế |
| **[KH]** | Khách hàng điền |
| **[KH+NCC]** | Khách hàng điền, nhà cung cấp hỗ trợ kỹ thuật |

### Ai phải lập, khi nào, nộp ở đâu

| Nội dung | Quy định | Căn cứ |
|---|---|---|
| Ai lập | Bên kiểm soát, bên kiểm soát và xử lý: lập, lưu, nộp. Bên xử lý: Luật chỉ buộc lập, lưu theo thỏa thuận; NĐ 356 buộc cả bên xử lý lập và nộp (vùng xám C13) | Luật 91 Đ21.1, Đ21.3; NĐ 356 Đ19.1, Đ19.4 |
| Doanh nghiệp nhỏ, siêu nhỏ, khởi nghiệp có được miễn? | **Không được miễn** nếu trực tiếp xử lý DLCN nhạy cảm — **bật nhận diện khuôn mặt là xử lý dữ liệu sinh trắc học** | Luật 91 Đ38.2–38.3; NĐ 356 Đ41 |
| Thành phần hồ sơ | (a) Báo cáo theo Mẫu 10; (b) bản sao hợp đồng, thỏa thuận xử lý dữ liệu (phụ lục DPA với nhà cung cấp); (c) chính sách, quy trình, biểu mẫu BVDLCN | NĐ 356 Đ19.2 |
| Thời hạn | Lập từ khi bắt đầu xử lý; nộp **01 bản chính trong 60 ngày** kể từ ngày bắt đầu xử lý, kèm Mẫu 02a (tổ chức) | Luật 91 Đ21.1; NĐ 356 Đ19.1, Đ19.4 |
| Nơi nộp | Trực tuyến qua Cổng Dịch vụ công quốc gia, trực tiếp hoặc bưu chính về Bộ Công an; Bộ Công an phân loại, chuyển Công an tỉnh, thành phố xử lý | NQ 22 Phụ lục I.7 Phần B mục II |
| Kết quả | Cơ quan chuyên trách trả kết quả đạt/không đạt trong 15 ngày; yêu cầu hoàn thiện trong 30 ngày nếu chưa đạt | NĐ 356 Đ19.5–19.6 |
| Cập nhật | Định kỳ 06 tháng khi có mục đích mới, bên mới; trong 10 ngày khi tổ chức lại, thay đổi nhà cung cấp dịch vụ BVDLCN, thay đổi ngành nghề liên quan (Mẫu 03a) | Luật 91 Đ22; NĐ 356 Đ20 |
| Phạt | Không lập, không nộp, không cập nhật: 20–30 triệu, có thể **buộc dừng xử lý**; khai sai: 50–100 triệu | NĐ 330 Đ55 |

### Hồ sơ đã có trước 01/01/2026

Hồ sơ đánh giá tác động theo NĐ 13/2023 đã được tiếp nhận trước 01/01/2026 tiếp tục được dùng; việc cập nhật sau ngày này theo Luật 91 (Luật 91 Đ39.2).

### Mẹo điền để hồ sơ "đạt"

- **Mục II.2 và II.3 phải khớp nhau và khớp phụ lục DPA** (Phụ lục 1 của [`c1-phu-luc-xu-ly-du-lieu-ca-nhan.md`](c1-phu-luc-xu-ly-du-lieu-ca-nhan.md)).
- **Mục II.4 phải đính kèm biểu mẫu đồng ý** thực tế đã dùng ([`k2-thong-bao-va-dong-y-sinh-trac-hoc.md`](k2-thong-bao-va-dong-y-sinh-trac-hoc.md)); mục II.5–II.6 đính kèm chính sách lưu trữ, xóa ([`k4-chinh-sach-luu-tru-xoa.md`](k4-chinh-sach-luu-tru-xoa.md)).
- **Mục II.9 "Kinh doanh dịch vụ xử lý DLCN"**: khách hàng dùng camera cho chính mình thường chọn **Không**. Nhà cung cấp vận hành cloud (M3/M4) khi tự lập hồ sơ của mình thường chọn **Có** — xem vùng xám C15 về tự khai vai trò.
- **Mục III.2.3** (tác động an ninh quốc gia, trật tự an toàn xã hội) **bắt buộc** khi xử lý DLCN nhạy cảm của **trên 10.000** chủ thể hoặc DLCN cơ bản của **trên 100.000** chủ thể. Hệ thống nhận diện khuôn mặt tại nhà máy lớn, khu công nghiệp, trường học, tòa nhà văn phòng lớn dễ vượt ngưỡng 10.000.
- Không chép nguyên phần [NCC] nếu cấu hình thực tế khác (ví dụ khách bật lưu ảnh gốc, lưu trên cloud nước ngoài). Khai sai bị phạt nặng hơn không khai.

---

<p align="center"><b>HỒ SƠ</b><br/><b>ĐÁNH GIÁ TÁC ĐỘNG XỬ LÝ DỮ LIỆU CÁ NHÂN</b><br/><i>(Theo Mẫu số 10 Phụ lục Nghị định số 356/2025/NĐ-CP)</i><br/><i>Hoạt động: vận hành hệ thống camera giám sát, nhận diện khuôn mặt, nhận diện biển số tại {{DIA_DIEM_LAP_DAT}}</i></p>

## PHẦN A. HỒ SƠ ĐÁNH GIÁ TÁC ĐỘNG XỬ LÝ DỮ LIỆU CÁ NHÂN CỦA BÊN NỘP HỒ SƠ

### I. THÔNG TIN CƠ BẢN CỦA BÊN NỘP HỒ SƠ [KH]

| Mục | Nội dung | Thông tin |
|---|---|---|
| 1 | Tên tổ chức (tiếng Việt) | {{TEN_KHACH_HANG}} |
| 1a | Tên tổ chức (nước ngoài) | {{TEN_KH_TIENG_NUOC_NGOAI}} |
| 1b | Tên viết tắt | {{VIET_TAT_KH}} |
| 1c | Mã số thuế | {{MST_KHACH_HANG}} |
| 2 | Địa chỉ trụ sở chính | {{DIA_CHI_KHACH_HANG}} |
| 3 | Điện thoại | {{DIEN_THOAI_KH}} |
| 4 | Lĩnh vực kinh doanh có xử lý dữ liệu cá nhân (kèm mã ngành) | {{LINH_VUC_KINH_DOANH_KH}} |
| 5 | Số lượng chi nhánh, văn phòng đại diện | {{SO_CHI_NHANH}} |
| 6 | Email | {{EMAIL_KH}} |
| 7 | Website | {{WEBSITE_KH}} |
| 8.1 | Tổ chức cung cấp dịch vụ bảo vệ dữ liệu cá nhân (nếu có, kèm hợp đồng) | {{TEN_TO_CHUC_DICH_VU_BVDLCN hoặc "Không"}} |
| 8.2 | Cá nhân cung cấp dịch vụ bảo vệ dữ liệu cá nhân (nếu có, kèm hợp đồng) | {{... hoặc "Không"}} |
| 8.3 | Bộ phận, nhân sự bảo vệ dữ liệu cá nhân nội bộ (kèm quyết định chỉ định) | {{NHAN_SU_BVDLCN_KH}} — {{DIEN_THOAI_BVDLCN_KH}} — {{EMAIL_BVDLCN_KH}} |

### II. HOẠT ĐỘNG XỬ LÝ DỮ LIỆU CÁ NHÂN

#### 1. Vai trò xử lý dữ liệu cá nhân của bên kê khai [KH]

☒ **1.1. Bên kiểm soát dữ liệu cá nhân / Bên kiểm soát và xử lý dữ liệu cá nhân**

| Đối tượng chủ thể | Số lượng tính đến thời điểm nộp |
|---|---|
| Người lao động được đăng ký khuôn mặt (kiểm soát ra vào, chấm công) | {{SO_NHAN_VIEN}} |
| Khách đến làm việc được đăng ký khuôn mặt tạm thời | {{SO_KHACH_LUY_KE}} (lũy kế) |
| Chủ phương tiện đăng ký vé tháng, xe ra vào có nhận diện biển số | {{SO_XE_DANG_KY}} |
| Người xuất hiện trong vùng quan sát của camera (không nhận dạng) | Không xác định được |

☐ 1.2. Bên xử lý dữ liệu cá nhân · ☐ 1.3. Bên thứ ba

#### 2. Luồng xử lý dữ liệu cá nhân theo vai trò [NCC — KH rà lại]

**Sơ đồ hệ thống và luồng dữ liệu:** xem Phụ lục kèm theo ({{Sơ đồ kiến trúc hệ thống TEN_SAN_PHAM — theo tài liệu B1 của nhà cung cấp}}).

| Bước | Hoạt động xử lý | Dữ liệu | Thành phần hệ thống | Mục đích |
|---|---|---|---|---|
| 1 | **Thu thập:** camera ghi hình liên tục hoặc theo sự kiện | Hình ảnh, video | Camera IP tại {{DIA_DIEM_LAP_DAT}} | An ninh, bảo vệ tài sản |
| 2 | **Thu thập (có đồng ý):** chụp ảnh đăng ký khuôn mặt tại {{máy đăng ký/kiosk/phần mềm nhân sự}} | Ảnh khuôn mặt, họ tên, mã nhân viên | Thiết bị đăng ký; máy chủ {{TEN_SAN_PHAM}} | Kiểm soát ra vào; chấm công |
| 3 | **Phân tích:** trích xuất đặc trưng khuôn mặt (template) từ ảnh đăng ký; {{xóa/giữ}} ảnh gốc | Template khuôn mặt | Mô-đun AI trên {{thiết bị biên/máy chủ}} | Như bước 2 |
| 4 | **Phân tích, đối chiếu:** tại cửa, máy chấm công — phát hiện khuôn mặt, kiểm tra người thật, trích xuất template, so khớp với danh sách đăng ký | Ảnh chụp sự kiện, template, kết quả so khớp | Thiết bị kiểm soát ra vào; máy chủ | Mở cửa; ghi nhận chấm công |
| 5 | **Nhận diện biển số** tại cổng bãi xe, đối chiếu danh sách xe đăng ký | Ảnh phương tiện, biển số, thời điểm | Camera LPR; máy chủ bãi xe | Quản lý bãi xe |
| 6 | **Lưu trữ** video, ảnh sự kiện, nhật ký ra vào, chấm công | Như trên | {{VI_TRI_MAY_CHU}} | Như trên |
| 7 | **Cung cấp:** chuyển nhật ký chấm công sang phần mềm tính lương (không chuyển template) | Mã nhân viên, thời điểm | Tích hợp {{phần mềm nhân sự}} | Tính lương |
| 8 | **Cung cấp theo yêu cầu:** trích xuất video cho cơ quan có thẩm quyền khi có yêu cầu bằng văn bản; cho chủ thể khi có yêu cầu (làm mờ người khác) | Video, hình ảnh | Chức năng xuất có làm mờ | Thực hiện nghĩa vụ pháp lý; quyền chủ thể |
| 9 | **Xóa, hủy:** tự động theo thời hạn; xóa template khi nghỉ việc hoặc rút đồng ý | Tất cả | Chức năng xóa tự động | Giới hạn lưu trữ |

Bên xử lý: **{{TEN_NHA_CUNG_CAP}}** — {{lắp đặt, bảo hành, hỗ trợ kỹ thuật từ xa theo phiếu yêu cầu/vận hành nền tảng cloud TEN_NEN_TANG_CLOUD}}, theo Phụ lục thỏa thuận xử lý dữ liệu cá nhân số {{SO_PHU_LUC}} kèm Hợp đồng số {{SO_HOP_DONG}}.

#### 3. Loại dữ liệu cá nhân được xử lý [NCC — KH rà lại]

Tổng số loại dữ liệu cá nhân cơ bản: {{SO_LOAI_CO_BAN}} · Tổng số loại dữ liệu cá nhân nhạy cảm: {{SO_LOAI_NHAY_CAM}}

**3.1. Dữ liệu cá nhân cơ bản** (Điều 3 NĐ 356)

| Loại dữ liệu | Chọn | Ghi chú |
|---|---|---|
| Họ, chữ đệm và tên khai sinh | ☒ | Người lao động, khách, chủ xe đăng ký |
| Hình ảnh của cá nhân | ☒ | Video camera; ảnh chụp sự kiện |
| Số điện thoại | ☐ | {{Chọn nếu thu của khách, chủ xe}} |
| Số biển số xe | ☒ | Nhận diện biển số |
| Các thông tin khác gắn liền với một con người cụ thể (mã nhân viên, phòng ban, thời điểm ra vào, chấm công) | ☒ | |
| {{Các loại khác trong Điều 3 nếu có}} | ☐ | |

**3.2. Dữ liệu cá nhân nhạy cảm** (khoản 1 Điều 4 NĐ 356)

| Loại dữ liệu | Chọn | Ghi chú |
|---|---|---|
| Dữ liệu sinh trắc học, đặc điểm di truyền | ☒ | Ảnh đăng ký và template khuôn mặt dùng để nhận dạng |
| Hình ảnh thẻ căn cước, thẻ căn cước công dân, chứng minh nhân dân | ☐ | **Chỉ chọn nếu** kiosk chụp hoặc lưu ảnh thẻ của khách. Khuyến nghị không lưu |
| Vị trí của cá nhân được xác định qua dịch vụ định vị | ☐ | Hệ thống không dùng dịch vụ định vị. Nếu dựng hành trình người, xe qua nhiều camera — xem vùng xám V4, cân nhắc chọn |
| Thông tin về đời sống riêng tư, bí mật cá nhân | ☐ | {{Cân nhắc nếu camera quan sát khu vực có thể lộ đời sống riêng tư}} |

#### 4. Sự đồng ý của chủ thể dữ liệu cá nhân [KH]

| Đối tượng | Nội dung, hình thức, quy trình xin đồng ý | Biểu mẫu kèm theo |
|---|---|---|
| Người lao động | Phát Mẫu A trước khi đăng ký; đồng ý riêng cho kiểm soát ra vào và chấm công; nêu rõ dữ liệu nhạy cảm; có phương thức thay thế; lưu phiếu ký hoặc nhật ký điện tử | Mẫu A — Thông báo và đồng ý xử lý dữ liệu sinh trắc học |
| Khách | Hiển thị Mẫu B tại kiosk, ô tích để trống; không đồng ý vẫn được vào bằng thẻ khách | Mẫu B |
| Người xuất hiện trong vùng camera | Không xin đồng ý — ghi hình để bảo đảm an ninh, bảo vệ quyền, lợi ích hợp pháp của tổ chức (điểm a khoản 1 Điều 32 Luật Bảo vệ dữ liệu cá nhân); thông báo bằng biển báo tại lối vào (khoản 2 Điều 32) | Mẫu biển báo camera |
| Chủ xe đăng ký | Thực hiện thỏa thuận gửi xe (điểm d khoản 1 Điều 19 Luật Bảo vệ dữ liệu cá nhân); thông báo tại hợp đồng, vé tháng và biển báo | Điều khoản trong hợp đồng gửi xe |
| {{Học sinh}} | {{Phụ huynh đồng ý theo Mẫu C (khoản 2 Điều 24 Luật Bảo vệ dữ liệu cá nhân)}} | {{Mẫu C}} |

#### 5. Quy định về lưu trữ dữ liệu cá nhân [KH+NCC]

Theo Chính sách lưu trữ, xóa, hủy dữ liệu hệ thống camera số {{SO_VB_CHINH_SACH_LUU_TRU}} (đính kèm). Tóm tắt:

| Dữ liệu | Thời hạn lưu | Nơi lưu | Mã hóa khi lưu |
|---|---|---|---|
| Video an ninh | {{THOI_HAN_LUU_VIDEO}} | {{VI_TRI_MAY_CHU}} | {{Có — THUAT_TOAN_MA_HOA_LUU}} |
| Ảnh đăng ký, template khuôn mặt người lao động | Đến khi nghỉ việc hoặc rút đồng ý | {{VI_TRI_MAY_CHU}} | Có |
| Template khuôn mặt khách | {{THOI_HAN_LUU_TEMPLATE_KHACH}} | {{VI_TRI_MAY_CHU}} | Có |
| Nhật ký ra vào, chấm công | {{THOI_HAN_LUU_NHAT_KY_CHAM_CONG}} | {{VI_TRI_MAY_CHU}} | {{Có/Không}} |
| Biển số, ảnh phương tiện | {{THOI_HAN_LUU_BIEN_SO}} | {{VI_TRI_MAY_CHU}} | {{Có/Không}} |

#### 6. Quy định về xóa, hủy dữ liệu cá nhân [KH+NCC]

Hệ thống tự động xóa dữ liệu khi hết thời hạn tại mục 5; xóa template khuôn mặt trong {{SO_NGAY_XOA_KHI_NGHI_VIEC}} ngày kể từ khi người lao động nghỉ việc hoặc rút đồng ý (điểm c khoản 2 Điều 25 Luật Bảo vệ dữ liệu cá nhân); ghi nhật ký xóa. Ổ cứng, thẻ nhớ thay thế được hủy an toàn, lập biên bản. Nhà cung cấp trả lại và xóa dữ liệu khi kết thúc hợp đồng, gửi biên bản xác nhận xóa (Điều 13 Phụ lục DPA).

#### 7. Chuyển giao dữ liệu cá nhân [KH]

Có ☒ / Không ☐ — Chuyển giao cho bên xử lý **{{TEN_NHA_CUNG_CAP}}** (điểm d khoản 1 Điều 17 Luật Bảo vệ dữ liệu cá nhân); chuyển nhật ký chấm công sang {{bộ phận/phần mềm nhân sự}} (chia sẻ nội bộ, điểm b khoản 1 Điều 17); cung cấp cho cơ quan nhà nước có thẩm quyền khi có yêu cầu (điểm đ khoản 1 Điều 17).

Chuyển giao dữ liệu cá nhân có thu phí: Có ☐ / Không ☒

#### 8. Tham gia hoạt động giao dịch trên sàn dữ liệu [KH]

Có ☐ / Không ☒

#### 9. Kinh doanh dịch vụ xử lý dữ liệu cá nhân [KH]

Có ☐ / Không ☒ — {{TEN_KHACH_HANG}} xử lý dữ liệu cho mục đích quản lý của chính mình, không cung cấp dịch vụ xử lý cho tổ chức khác.

#### 10. Chuyển dữ liệu cá nhân xuyên biên giới [KH+NCC]

Có ☐ / Không ☒ — Toàn bộ dữ liệu lưu, xử lý tại {{VI_TRI_MAY_CHU}}; nhà cung cấp cam kết không truy cập, không xử lý từ ngoài lãnh thổ Việt Nam (Điều 7 Phụ lục DPA). *Nếu có dùng cloud, hỗ trợ kỹ thuật hoặc mô hình AI đặt ở nước ngoài: chọn "Có" và lập hồ sơ theo Mẫu 09.*

#### 11. Biện pháp bảo vệ dữ liệu cá nhân

**11.1. Phương án bảo đảm an toàn dữ liệu cá nhân** [NCC — KH rà lại]

Hệ thống {{TEN_SAN_PHAM}} được thiết kế theo nguyên tắc: (i) thu thập tối thiểu — nhận diện khuôn mặt chỉ bật tại {{các cửa, máy chấm công}}, tắt trên camera hướng ra khu vực công cộng; (ii) chỉ đăng ký khuôn mặt người đã đồng ý; (iii) {{không lưu ảnh gốc sau khi tạo template}}; (iv) mã hóa dữ liệu sinh trắc học khi lưu và khi truyền; (v) phân quyền, xác thực đa yếu tố, nhật ký truy cập; (vi) tự động xóa theo thời hạn; (vii) lưu trữ tại Việt Nam.

**11.2. Biện pháp kỹ thuật, quản lý, đào tạo; tiêu chuẩn áp dụng; sơ đồ thiết kế hệ thống** [NCC + KH]

| Nhóm | Biện pháp | Đáp ứng quy định | Người điền |
|---|---|---|---|
| Bảo mật vật lý | Máy chủ, đầu ghi đặt trong {{phòng máy có khóa, kiểm soát ra vào}}; thiết bị đầu cuối có chống tháo, cảnh báo mất kết nối | Điểm a khoản 4 Điều 31 Luật Bảo vệ dữ liệu cá nhân | KH |
| Mã hóa | Template, ảnh đăng ký mã hóa khi lưu ({{THUAT_TOAN_MA_HOA_LUU}}); truyền giữa thiết bị và máy chủ qua {{GIAO_THUC_TRUYEN}}; khóa quản lý tách khỏi dữ liệu | Khoản 2 Điều 7, khoản 4 Điều 12 NĐ 356 | NCC |
| Kiểm soát truy cập | Phân quyền theo vai trò (quản trị, bảo vệ, nhân sự, xem video); xác thực đa yếu tố cho quản trị viên; tài khoản kỹ thuật viên nhà cung cấp chỉ cấp theo phiếu, có thời hạn | Khoản 3 Điều 30, điểm a khoản 4 Điều 31 Luật Bảo vệ dữ liệu cá nhân | NCC + KH |
| Theo dõi, phát hiện xâm phạm | Ghi nhật ký đăng nhập, xem, xuất, xóa; cảnh báo đăng nhập bất thường, xuất dữ liệu hàng loạt | Điểm a khoản 4 Điều 31 Luật Bảo vệ dữ liệu cá nhân | NCC |
| Chống giả mạo | Kiểm tra người thật khi nhận diện | Khoản 3 Điều 30 Luật Bảo vệ dữ liệu cá nhân | NCC |
| Minh bạch thuật toán | Tài liệu giải thích nguyên tắc hoạt động đã cung cấp cho người lao động, khách; có phương thức thay thế; có quy trình người xem xét lại kết quả bất lợi | Khoản 3 Điều 10 NĐ 356 | NCC + KH |
| Phân loại rủi ro AI | Theo tài liệu phân loại rủi ro của nhà cung cấp: kiểm soát ra vào, chấm công khuôn mặt xếp mức {{MUC_RUI_RO}} | Khoản 4 Điều 30 Luật Bảo vệ dữ liệu cá nhân | NCC |
| Mạng | Camera, thiết bị nhận diện đặt trong VLAN riêng; không mở cổng quản trị ra Internet; đổi mật khẩu mặc định | — | KH + NCC |
| Cập nhật, vá lỗi | Cập nhật firmware, phần mềm theo bản tin bảo mật của nhà cung cấp trong {{SO_NGAY_CAP_NHAT}} ngày | — | KH |
| Quản lý | Quy chế sử dụng hệ thống camera; điều khoản nội quy lao động; chính sách lưu trữ, xóa; quy trình tiếp nhận yêu cầu chủ thể; quy trình sự cố | Điều 5 NĐ 356; khoản 3 Điều 25 Luật Bảo vệ dữ liệu cá nhân | KH |
| Đào tạo | Đào tạo người quản trị, người xem video, bộ phận nhân sự {{tần suất}} | — | KH |
| Tiêu chuẩn áp dụng | {{Tiêu chuẩn ANM, bảo vệ dữ liệu áp dụng cho hệ thống; cấp độ HTTT đã được phê duyệt nếu có}} | Điểm đ khoản 3 Điều 19 NĐ 356 | KH + NCC |

**11.3. Kiểm tra, đánh giá an ninh mạng, an toàn hệ thống** [KH]

| Nội dung | Đối tượng | Tần suất | Mục đích |
|---|---|---|---|
| Rà soát tài khoản, quyền truy cập hệ thống camera | Tài khoản quản trị, người xem | {{hằng quý}} | Thu hồi quyền thừa |
| Quét lỗ hổng camera, đầu ghi, máy chủ | Thiết bị trong VLAN camera | {{6 tháng/lần}} | Phát hiện firmware lỗi thời, cấu hình yếu |
| Kiểm tra việc xóa tự động | Dữ liệu quá hạn | {{hằng quý}} | Bảo đảm thời hạn lưu |
| Đánh giá tuân thủ bảo vệ dữ liệu cá nhân của hệ thống trí tuệ nhân tạo | Toàn hệ thống | 01 năm/lần | Điểm đ khoản 5 Điều 10 NĐ 356 |

#### 12. Đánh giá tuân thủ các quy định về bảo vệ dữ liệu cá nhân [KH]

Hình thức: {{tự đánh giá/thuê đơn vị độc lập}} · Thời điểm: {{NGAY_DANH_GIA}} · Kết quả: {{tóm tắt; đính kèm báo cáo}}

### III. ĐÁNH GIÁ TÁC ĐỘNG XỬ LÝ DỮ LIỆU CÁ NHÂN

#### 1. Đánh giá tổng quan [KH]

{{Nêu sự cần thiết: số lượng người lao động, số cửa ra vào, vấn đề cần giải quyết (chấm công hộ, mất trộm, an ninh khu vực sản xuất…); vì sao chọn nhận diện khuôn mặt thay vì thẻ; thuận lợi, khó khăn; rủi ro chính.}}

#### 2. Đánh giá tác động việc xử lý dữ liệu cá nhân

**2.1. Tác động đến chủ thể dữ liệu** [KH — NCC gợi ý các rủi ro điển hình]

| Khía cạnh bị tác động, vấn đề | Mục tiêu | Biện pháp đã áp dụng, đề xuất | Đánh giá hiệu quả, tác động | Kiến nghị |
|---|---|---|---|---|
| **Lộ dữ liệu sinh trắc học** — khác mật khẩu, khuôn mặt không thể "đổi"; lộ template có thể bị dùng giả mạo | Không để lộ; nếu lộ thì giảm thiểu thiệt hại | Mã hóa; không lưu ảnh gốc; phân quyền; nhật ký; quy trình sự cố có thông báo chủ thể trong 72 giờ | {{Khả năng: …; Tác động: cao}} | {{…}} |
| **Nhận nhầm, không nhận ra** dẫn tới bị từ chối ra vào, ghi nhận sai giờ công | Không để kết quả tự động gây bất lợi | Ngưỡng so khớp {{…}}; phương thức thay thế; người xem xét lại kết quả bất lợi; nhân sự đối chiếu trước khi trừ lương | {{…}} | {{…}} |
| **Sai lệch độ chính xác giữa các nhóm người** (tuổi, giới tính, đặc điểm ngoại hình) | Đối xử công bằng | Kết quả kiểm thử của nhà cung cấp; theo dõi tỷ lệ từ chối nhầm theo khu vực | {{…}} | {{…}} |
| **Dùng dữ liệu vượt mục đích** (giám sát hành vi, đánh giá thi đua, kỷ luật dựa trên dữ liệu ra vào) | Chỉ dùng đúng mục đích đã đồng ý | Phân quyền; quy chế sử dụng; cấm dùng cho mục đích khác; nhà cung cấp cam kết không huấn luyện mô hình | {{…}} | {{…}} |
| **Đồng ý không thật sự tự nguyện** trong quan hệ lao động | Tôn trọng quyền lựa chọn | Phương thức thay thế; cam kết không bất lợi khi từ chối | {{…}} | {{…}} |
| **Cảm giác bị giám sát liên tục**, xâm phạm riêng tư | Giám sát tương xứng | Không đặt camera tại khu vực riêng tư; biển báo; thời hạn lưu ngắn | {{…}} | {{…}} |
| **Khó thực hiện quyền** (xem, xóa hình ảnh của mình) | Đáp ứng đúng thời hạn NĐ 356 Đ5 | Quy trình tiếp nhận yêu cầu; công cụ tìm, xuất có làm mờ, xóa theo từng người | {{…}} | {{…}} |

**2.2. Tác động đến an ninh, an toàn thông tin hệ thống của tổ chức** [NCC — KH rà lại]

| Khía cạnh, vấn đề | Mục tiêu | Biện pháp đã áp dụng, đề xuất | Đánh giá hiệu quả | Kiến nghị |
|---|---|---|---|---|
| Camera, đầu ghi dùng mật khẩu mặc định, firmware lỗi thời bị chiếm quyền, bị dùng làm bàn đạp tấn công mạng nội bộ | Không có thiết bị dễ bị khai thác | Đổi mật khẩu khi lắp đặt; VLAN riêng; cập nhật firmware; tắt dịch vụ không dùng | {{…}} | {{…}} |
| Truy cập trái phép phần mềm quản lý video, xuất video hàng loạt | Chỉ người có thẩm quyền truy cập | Xác thực đa yếu tố; phân quyền; cảnh báo xuất hàng loạt; nhật ký | {{…}} | {{…}} |
| Đánh cắp cơ sở dữ liệu template | Dữ liệu vô dụng nếu bị lấy | Mã hóa khi lưu; khóa tách biệt; hạn chế sao lưu ra ngoài | {{…}} | {{…}} |
| Giả mạo khuôn mặt bằng ảnh, video, mặt nạ, deepfake để qua cửa | Không cho người không có quyền vào | Kiểm tra người thật; kết hợp thẻ tại khu vực quan trọng | {{…}} | {{…}} |
| Kỹ thuật viên nhà cung cấp, đại lý truy cập, sao chép dữ liệu | Truy cập có kiểm soát | Phụ lục DPA; thỏa thuận hỗ trợ từ xa; cam kết bảo mật; phiên có phê duyệt, ghi nhật ký | {{…}} | {{…}} |
| Gián đoạn hệ thống (mất điện, mất mạng) làm kẹt cửa, mất dữ liệu chấm công | Duy trì hoạt động | Nguồn dự phòng; chế độ cửa an toàn khi sự cố; bộ nhớ đệm tại thiết bị | {{…}} | {{…}} |

**2.3. Tác động đến an ninh quốc gia, trật tự an toàn xã hội** [KH — bắt buộc khi xử lý DLCN nhạy cảm của trên 10.000 chủ thể hoặc DLCN cơ bản của trên 100.000 chủ thể]

{{Không áp dụng — số chủ thể dữ liệu sinh trắc học là SO_NHAN_VIEN, dưới 10.000.}} *Hoặc:* {{đánh giá theo 5 nội dung: khía cạnh tác động; mục tiêu; biện pháp; hiệu quả; kiến nghị — tập trung vào rủi ro lộ lọt dữ liệu sinh trắc học quy mô lớn, khả năng bị lợi dụng để theo dõi, giả mạo danh tính.}}

### IV. PHỤ LỤC

| STT | Tài liệu kèm theo |
|---|---|
| 1 | Sơ đồ kiến trúc hệ thống và luồng dữ liệu |
| 2 | Bản sao Hợp đồng số {{SO_HOP_DONG}} và Phụ lục thỏa thuận xử lý dữ liệu cá nhân với {{TEN_NHA_CUNG_CAP}} |
| 3 | Quyết định chỉ định bộ phận, nhân sự bảo vệ dữ liệu cá nhân |
| 4 | Mẫu thông báo và đồng ý xử lý dữ liệu sinh trắc học (Mẫu A, B{{, C}}) |
| 5 | Mẫu biển báo camera và thông báo đầy đủ |
| 6 | Điều khoản nội quy lao động về giám sát bằng công nghệ |
| 7 | Chính sách lưu trữ, xóa, hủy dữ liệu |
| 8 | Quy trình tiếp nhận yêu cầu của chủ thể dữ liệu |
| 9 | Quy trình xử lý sự cố dữ liệu cá nhân |
| 10 | Tài liệu giải thích nguyên tắc hoạt động thuật toán; tài liệu bảo mật sản phẩm |

## PHẦN B. THÔNG TIN CÁC BÊN LIÊN QUAN TRONG HOẠT ĐỘNG XỬ LÝ DỮ LIỆU CÁ NHÂN

### I. Thông tin của bên kiểm soát dữ liệu cá nhân

| STT | Tên tổ chức | Mã số thuế | Bộ phận, nhân sự BVDLCN | Hợp đồng, thỏa thuận xử lý (số, ngày) | Dịch vụ hợp tác | Ghi chú |
|---|---|---|---|---|---|---|
| — | Không có (bên nộp hồ sơ là bên kiểm soát) | | | | | |

### II. Thông tin của bên xử lý dữ liệu cá nhân

| STT | Tên tổ chức | Mã số thuế | Bộ phận, nhân sự BVDLCN | Hợp đồng, thỏa thuận xử lý (số, ngày) | Dịch vụ hợp tác | Ghi chú |
|---|---|---|---|---|---|---|
| 1 | {{TEN_NHA_CUNG_CAP}} | {{MST_NHA_CUNG_CAP}} | {{NHAN_SU_BVDLCN_NCC}} — {{EMAIL_BVDLCN_NCC}} | {{SO_HOP_DONG}}, {{NGAY_HOP_DONG}}; Phụ lục {{SO_PHU_LUC}} | {{Cung cấp, lắp đặt, bảo hành, hỗ trợ kỹ thuật/vận hành nền tảng cloud}} hệ thống {{TEN_SAN_PHAM}} | {{Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ xử lý DLCN số … (nếu M3/M4)}} |
| 2 | {{Đại lý lắp đặt, nhà cung cấp hạ tầng — nếu có}} | | | | | |

### III. Thông tin của bên thứ ba

| STT | Tên tổ chức | Mã số thuế | Bộ phận, nhân sự BVDLCN | Hợp đồng, thỏa thuận xử lý (số, ngày) | Dịch vụ hợp tác | Ghi chú |
|---|---|---|---|---|---|---|
| 1 | {{Đơn vị dịch vụ bảo vệ, nếu được xem video}} | | | | | |

## Hướng dẫn điền

1. **Rà từng dòng [NCC]** với cấu hình thực tế tại thời điểm nộp. Nếu khách hàng bật tính năng khác (lưu ảnh gốc, nhận diện trên camera công cộng, phân tích hành vi, lưu cloud nước ngoài) phải sửa mục II.2, II.3, II.10, II.11 và bổ sung rủi ro ở III.2.
2. **Số lượng chủ thể** tại II.1 tính đến thời điểm nộp; để xét miễn trừ doanh nghiệp nhỏ, NĐ 356 Đ41 tính quy mô theo **tích lũy tổng lượng** dữ liệu đã xử lý.
3. **Cột "Đánh giá hiệu quả"** tại III.2 nên dùng thang định tính rõ ràng (ví dụ Khả năng: Thấp/Trung bình/Cao; Tác động: Thấp/Trung bình/Cao) và dùng chung phương pháp với sổ rủi ro ANM ([`../02-ho-so-cap-do/bao-cao-danh-gia-rui-ro.md`](../02-ho-so-cap-do/bao-cao-danh-gia-rui-ro.md)).
4. **Kèm Mẫu 02a** (Thông báo gửi hồ sơ đánh giá tác động xử lý dữ liệu cá nhân đối với tổ chức — Phụ lục NĐ 356) khi nộp. Bộ khung chưa dựng lại Mẫu 02a — lấy từ Phụ lục NĐ 356.
5. **Nhà cung cấp tự lập hồ sơ của mình** (M3/M4, hoặc khi là bên xử lý): dùng cùng khung, tích vai trò **1.2 Bên xử lý**, liệt kê khách hàng tại Phần B mục I, mục II.9 chọn "Có" và tích các dịch vụ tương ứng (thường là "cung cấp và vận hành hệ thống, phần mềm tự động thay mặt bên kiểm soát" và "xử lý dữ liệu cá nhân tự động dựa trên … trí tuệ nhân tạo").

## Bằng chứng cần lưu

Hồ sơ đã nộp và biên nhận; văn bản kết quả đạt/không đạt; các lần cập nhật (Mẫu 03a) và biên nhận; tài liệu kèm theo đúng phiên bản đã nộp.
