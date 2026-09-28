# Mẫu Sổ đăng ký hoạt động xử lý dữ liệu cá nhân của nhà cung cấp giải pháp AI vision

> **Căn cứ:** Luật 91/2025/QH15 Đ2.7–2.9, Đ3, Đ17.1, Đ19.1, Đ20.1, Đ25, Đ31.2, Đ32.1, Đ37.2; NĐ 356/2025/NĐ-CP Đ3, Đ4, Đ10.2, Đ12.4, Đ19.3.c, Đ20.1, Đ41, Phụ lục Mẫu số 10 mục I–II; NĐ 331/2026/NĐ-CP Đ13.2.c · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

Sổ liệt kê **mọi hoạt động xử lý dữ liệu cá nhân (DLCN)** của nhà cung cấp, mỗi hoạt động một dòng. Mã **A3** trong [bản thảo luận](thao-luan-tai-lieu-va-phuong-an-ho-tro.md) (mục 4). Nhân sự BVDLCN (A1) lập và giữ sổ; trưởng các bộ phận có hoạt động xử lý cung cấp thông tin và xác nhận.

**Tính chất pháp lý:** Luật 91 và NĐ 356 **không gọi tên** "sổ đăng ký hoạt động xử lý". Sổ là công cụ nội bộ để điền đúng các mục bắt buộc của hồ sơ DPIA: mô tả mục đích, loại dữ liệu, hoạt động xử lý (NĐ 356 Đ19.3.c); vai trò và số lượng chủ thể theo từng vai trò (Mẫu số 10 mục II.1); luồng xử lý theo vai trò (mục II.2); loại dữ liệu cơ bản, nhạy cảm (mục II.3); chuyển giao, kinh doanh dịch vụ xử lý DLCN, chuyển xuyên biên giới (mục II.7, II.9, II.10). Không có sổ thì hồ sơ DPIA (A4), hồ sơ chuyển xuyên biên giới (A5), Chính sách (A2) dễ mâu thuẫn nhau.

### Khi nào cập nhật

| Sự kiện | Việc với sổ | Hệ quả với hồ sơ DPIA |
|---|---|---|
| Ra sản phẩm, tính năng mới có xử lý DLCN (ví dụ bật nhận diện cảm xúc, dựng hành trình biển số) | Thêm dòng hoặc sửa cột mục đích, loại dữ liệu | Mục đích mới: cập nhật định kỳ 06 tháng (NĐ 356 Đ20.1.a) |
| Thêm, đổi bên xử lý phụ (hạ tầng cloud, đại lý lắp đặt, dịch vụ hỗ trợ) | Sửa bảng 2 cột "Bên nhận, bên xử lý" | NĐ 356 Đ20.1.b |
| Bắt đầu kinh doanh dịch vụ xử lý DLCN (chuyển sang M3, M4) | Thêm dòng D06 | Cập nhật trong **10 ngày** (NĐ 356 Đ20.2.c) |
| Đổi vị trí máy chủ ra nước ngoài, dùng API nhận diện ở nước ngoài | Sửa cột "Nơi lưu" | Lập hồ sơ A5 trong 60 ngày (Luật 91 Đ20.2) |
| Số chủ thể vượt ngưỡng | Sửa cột "Số lượng" | Xem mục "Đếm chủ thể" dưới đây |
| Định kỳ | Rà soát toàn bộ tối thiểu {{CHU_KY_RA_SOAT_SO_DANG_KY}}/lần | — |

### Đếm chủ thể — vì sao cột "Số lượng" quan trọng

| Ngưỡng | Hệ quả | Căn cứ |
|---|---|---|
| Từ **100.000** chủ thể (tích lũy) | Doanh nghiệp nhỏ, khởi nghiệp, siêu nhỏ mất miễn trừ DPIA và nhân sự BVDLCN | NĐ 356 Đ41 |
| Trên **100.000** chủ thể DLCN cơ bản hoặc trên **10.000** chủ thể DLCN nhạy cảm | DPIA phải có phần đánh giá tác động đến an ninh quốc gia, trật tự an toàn xã hội | Mẫu số 10 mục III.2.3 |
| Từ **10.000** chủ thể DLCN nhạy cảm (dịch vụ trực tuyến) | Hệ thống thông tin của nền tảng cloud thuộc tiêu chí cấp độ 3 | NĐ 331 Đ13.2.c |

Nền tảng nhận diện khuôn mặt cloud (D06) đạt 10.000 chủ thể sinh trắc học rất nhanh: 20 khách hàng, mỗi khách 500 nhân viên. Cách đếm khi là bên xử lý cho nhiều khách hàng (gộp hay tách, tích lũy hay đang hoạt động) chưa rõ: xem điểm A2 tại [`../00-tong-quan/diem-can-doi-chieu.md`](../00-tong-quan/diem-can-doi-chieu.md). Mẫu này ghi **cả hai số**: tổng tích lũy và số đang hoạt động.

### Lưu ý phân loại dữ liệu

- **Đặc trưng khuôn mặt, ảnh đăng ký dùng để so khớp** là sinh trắc học, nhạy cảm (Luật 91 Đ31.2; NĐ 356 Đ4.1.đ). **Video camera không bật nhận diện** là DLCN cơ bản ("hình ảnh của cá nhân", NĐ 356 Đ3.6) — vùng xám **V1**.
- **Biển số xe** là DLCN cơ bản (NĐ 356 Đ3.7). Chuỗi nhận diện biển số qua nhiều điểm có thể là dữ liệu vị trí (nhạy cảm) — vùng xám **V4**; ghi rõ trong cột "Nhạy cảm" nếu hệ thống dựng hành trình.
- **Ảnh chụp thẻ căn cước** tại kiosk khách là nhạy cảm (NĐ 356 Đ4.1.i).
- **Kết quả nhận diện** (ai, ở đâu, lúc nào) là kết quả suy luận của AI xác định được người, phải bảo vệ như DLCN (NĐ 356 Đ10.2).
- Tên đăng nhập, mật khẩu tài khoản nền tảng: NĐ 356 Đ4.1.i chỉ nêu tài khoản **định danh điện tử**. Mẫu ghi là cơ bản nhưng áp biện pháp bảo vệ như dữ liệu nhạy cảm (băm mật khẩu, xác thực đa yếu tố).

### Cách dùng hai bảng

Sổ tách thành **Bảng 1** (ai, cái gì, để làm gì, dựa trên cơ sở nào) và **Bảng 2** (lưu ở đâu, bao lâu, ai nhận, bảo vệ thế nào), nối với nhau bằng **Mã**. Mỗi bảng 9 cột nên tự in khổ ngang. Có thể chuyển sang bảng tính và gộp lại. Các dòng D01–D10 là **dòng mẫu điển hình** của nhà cung cấp AI vision: xóa dòng không áp dụng, sửa theo thực tế, thêm dòng mới. Cột "Mô hình" ghi M1–M5 để biết dòng nào chỉ phát sinh khi chọn mô hình đó.

---

<p align="center"><b>SỔ ĐĂNG KÝ HOẠT ĐỘNG XỬ LÝ DỮ LIỆU CÁ NHÂN</b><br/><b>{{TEN_NHA_CUNG_CAP_IN_HOA}}</b></p>

## I. Thông tin chung

| Nội dung | Thông tin |
|---|---|
| Tổ chức | {{TEN_NHA_CUNG_CAP}} — mã số thuế {{MST_NHA_CUNG_CAP}} |
| Địa chỉ | {{DIA_CHI_NHA_CUNG_CAP}} |
| Lĩnh vực kinh doanh có xử lý DLCN (mã ngành) | {{NGANH_NGHE_XU_LY_DLCN}} |
| Bộ phận, nhân sự bảo vệ DLCN | {{NHAN_SU_BVDLCN_NCC}} — {{EMAIL_BVDLCN_NCC}} — {{DIEN_THOAI_BVDLCN_NCC}} |
| Mô hình kinh doanh đang áp dụng | ☐ M1 ☐ M2 ☐ M3 ☐ M4 ☐ M5 |
| Kinh doanh dịch vụ xử lý DLCN (Mẫu số 10 mục II.9) | ☐ Có — khoản {{KHOAN_DIEU_21_AP_DUNG}} Điều 21 Nghị định số 356/2025/NĐ-CP ☐ Không |
| Chuyển DLCN xuyên biên giới (Mẫu số 10 mục II.10) | ☐ Có — dòng {{MA_DONG_CO_CHUYEN_XBG}} ☐ Không |
| Phiên bản sổ, ngày cập nhật | {{PHIEN_BAN_SO_DANG_KY}} — {{NGAY_CAP_NHAT_SO_DANG_KY}} |
| Người lập / người phê duyệt | {{NHAN_SU_BVDLCN_NCC}} / {{HO_TEN_NGUOI_KY}} |

## II. Bảng 1 — Hoạt động, chủ thể, mục đích, loại dữ liệu, cơ sở xử lý

*Viết tắt trong sổ: "Luật 91" là Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15; "NĐ 356" là Nghị định số 356/2025/NĐ-CP ngày 31 tháng 12 năm 2025 của Chính phủ; DLCN là dữ liệu cá nhân; FAR, FRR là tỷ lệ chấp nhận nhầm, từ chối nhầm.*

| Mã | Hoạt động xử lý | Vai trò của {{VIET_TAT_NCC}} | Đối tượng chủ thể | Số lượng (tích lũy / đang hoạt động) | Mục đích | DLCN cơ bản | DLCN nhạy cảm | Cơ sở xử lý |
|---|---|---|---|---|---|---|---|---|
| D01 | Quản lý nhân sự, tiền lương, bảo hiểm | Bên kiểm soát và xử lý | Người lao động | {{SO_NGUOI_LAO_DONG}} | Quản lý lao động; trả lương; thực hiện nghĩa vụ thuế, bảo hiểm | Họ tên; ngày sinh; giới tính; địa chỉ; số định danh; số điện thoại; hình ảnh; tài khoản ngân hàng nhận lương; quan hệ gia đình (người phụ thuộc) | Tình trạng sức khỏe (hồ sơ khám sức khỏe) — nếu có | Thực hiện hợp đồng lao động (điểm d khoản 1 Điều 19 Luật 91); nghĩa vụ theo luật (điểm đ khoản 1 Điều 19) |
| D02 | Chấm công, ra vào văn phòng bằng khuôn mặt *(nếu có)* | Bên kiểm soát và xử lý | Người lao động | {{SO_NHAN_VIEN_DANG_KY_KHUON_MAT}} | Chấm công; kiểm soát ra vào | Họ tên; mã nhân viên; nhật ký chấm công, ra vào | **Sinh trắc học**: ảnh đăng ký, template khuôn mặt | **Đồng ý riêng**, nêu rõ dữ liệu nhạy cảm; có phương thức thay thế (thẻ, mã PIN) — vùng xám V3; người lao động biết rõ biện pháp (khoản 3 Điều 25 Luật 91) |
| D03 | Tuyển dụng | Bên kiểm soát và xử lý | Ứng viên | {{SO_UNG_VIEN_NAM}}/năm | Đánh giá, tuyển chọn | Họ tên; ngày sinh; liên hệ; học vấn; kinh nghiệm; hình ảnh (nếu có trong hồ sơ) | Không thu thập | Đồng ý của người dự tuyển (điểm b khoản 1 Điều 25 Luật 91) |
| D04 | Quản lý khách hàng, đầu mối liên hệ, bán hàng, bảo hành | Bên kiểm soát và xử lý | Khách hàng cá nhân; người liên hệ của khách hàng doanh nghiệp, đại lý | {{SO_DAU_MOI_LIEN_HE}} | Báo giá; ký, thực hiện hợp đồng; hỗ trợ; tiếp thị (nếu đồng ý) | Họ tên; chức danh; số điện thoại; thư điện tử; nội dung trao đổi | Không | Thực hiện thỏa thuận với khách hàng cá nhân; đồng ý của người liên hệ; đồng ý riêng cho tiếp thị |
| D05 | Tài khoản người dùng nền tảng, nhật ký đăng nhập, nhật ký thao tác *(M3)* | Bên kiểm soát và xử lý | Quản trị viên, người vận hành của khách hàng | {{SO_TAI_KHOAN_NEN_TANG}} | Xác thực; phân quyền; phát hiện truy cập bất thường; truy vết thao tác (ai xem, ai xuất video) | Họ tên; thư điện tử; số điện thoại (xác thực đa yếu tố); tên đăng nhập; địa chỉ IP; nhật ký | Không (mật khẩu lưu dạng băm) | Đồng ý khi kích hoạt tài khoản; bảo vệ quyền, lợi ích hợp pháp trước hành vi xâm phạm (điểm a khoản 1 Điều 19 Luật 91) — [CẦN ĐỐI CHIẾU] |
| D06 | Xử lý hình ảnh, video, nhận diện khuôn mặt, biển số trên nền tảng {{TEN_NEN_TANG_CLOUD}} *(M3)* hoặc vận hành thay khách hàng *(M4)* | **Bên xử lý** | Người dùng cuối của khách hàng: nhân viên, khách ra vào, cư dân, chủ xe, học sinh | {{SO_CHU_THE_NHAY_CAM_NEN_TANG}} sinh trắc học; {{SO_CHU_THE_CO_BAN_NEN_TANG}} cơ bản | Theo chỉ dẫn của khách hàng: kiểm soát ra vào, chấm công, điểm danh, quản lý bãi xe, an ninh | Hình ảnh, video; họ tên; mã nhân viên, mã cư dân; biển số xe; nhật ký ra vào, chấm công; kết quả nhận diện | **Sinh trắc học** (ảnh đăng ký, template); ảnh thẻ căn cước (kiosk khách, nếu bật); vị trí (nếu dựng hành trình — V4); dữ liệu trẻ em (khách hàng giáo dục) | Của khách hàng (bên kiểm soát): đồng ý của chủ thể; ghi hình an ninh (khoản 1 Điều 32 Luật 91). Của {{VIET_TAT_NCC}}: hợp đồng và phụ lục xử lý dữ liệu (điểm d khoản 1 Điều 17, điểm a khoản 2 Điều 37 Luật 91) |
| D07 | Lắp đặt, cấu hình, đăng ký khuôn mặt hộ, bảo hành, hỗ trợ từ xa *(M2)* | **Bên xử lý** | Người dùng cuối của khách hàng | Theo từng hợp đồng | Thực hiện dịch vụ kỹ thuật theo yêu cầu có phiếu hỗ trợ | Hình ảnh, video, nhật ký trên hệ thống của khách hàng; ảnh chụp màn hình, tệp nhật ký gửi kèm phiếu hỗ trợ | **Sinh trắc học** khi đăng ký khuôn mặt hộ hoặc xử lý lỗi cơ sở dữ liệu khuôn mặt | Hợp đồng, phụ lục xử lý dữ liệu, thỏa thuận hỗ trợ từ xa (C1, C3) |
| D08 | Huấn luyện, kiểm thử, đánh giá mô hình nhận diện *(M5)* | Bên kiểm soát và xử lý | Người có hình ảnh trong bộ dữ liệu | {{SO_CHU_THE_BO_DU_LIEU_HUAN_LUYEN}} | Phát triển, cải tiến độ chính xác; đo FAR, FRR; kiểm tra sai lệch theo nhóm | Hình ảnh; nhãn gán | **Sinh trắc học** nếu lưu đặc trưng gắn với danh tính; không nếu đã khử nhận dạng | {{Dữ liệu đã khử nhận dạng (khoản 1 Điều 2 Luật 91)/Đồng ý riêng cho mục đích huấn luyện/Bộ dữ liệu có giấy phép và cơ sở pháp lý hợp lệ}} — xem B7 |
| D09 | Camera an ninh tại trụ sở, văn phòng, kho của {{VIET_TAT_NCC}} | Bên kiểm soát và xử lý | Người lao động; khách đến; người qua lại | Không xác định | An ninh, bảo vệ tài sản | Hình ảnh, video | Không (nhận diện khuôn mặt tắt) | Ghi hình bảo đảm an ninh, bảo vệ quyền, lợi ích hợp pháp (điểm a khoản 1 Điều 32 Luật 91), có biển báo; người lao động biết rõ (khoản 3 Điều 25) |
| D10 | Đăng ký khách đến văn phòng *(nếu có)* | Bên kiểm soát và xử lý | Khách đến | {{SO_KHACH_DEN_NAM}}/năm | Kiểm soát an ninh trụ sở | Họ tên; số điện thoại; đơn vị; hình ảnh chụp tại quầy | Không lưu ảnh thẻ căn cước | Đồng ý khi đăng ký |

## III. Bảng 2 — Lưu trữ, bên nhận, biện pháp bảo vệ

| Mã | Hệ thống, nơi lưu | Lưu tại Việt Nam / nước ngoài | Thời hạn lưu | Cách xóa, hủy | Bên nhận, bên xử lý phụ | Biện pháp bảo vệ chính | Hồ sơ liên quan | Mô hình |
|---|---|---|---|---|---|---|---|---|
| D01 | Phần mềm nhân sự {{HE_THONG_NHAN_SU}} | ☐ VN ☐ Nước ngoài | Theo pháp luật lao động, kế toán, bảo hiểm — [CẦN ĐỐI CHIẾU] | Xóa, hủy khi chấm dứt hợp đồng, trừ phần phải lưu (điểm c khoản 2 Điều 25 Luật 91) | Cơ quan bảo hiểm xã hội, thuế; ngân hàng trả lương; nhà cung cấp phần mềm nhân sự | Phân quyền phòng nhân sự; mã hóa bản lưu; nhật ký truy cập | DPIA; hợp đồng với nhà cung cấp phần mềm | Mọi mô hình |
| D02 | Hệ thống chấm công tại văn phòng | ☐ VN ☐ Nước ngoài | Template: đến khi nghỉ việc hoặc rút đồng ý, xóa trong {{THOI_HAN_XOA_TEMPLATE_NGHI_VIEC}} ngày. Nhật ký chấm công: {{THOI_HAN_LUU_NHAT_KY_CHAM_CONG}} — [CẦN ĐỐI CHIẾU] | Xóa template tại máy chấm công và máy chủ; lưu nhật ký xóa | Không | Mã hóa template; bảo mật vật lý thiết bị; hạn chế truy cập; nhật ký (điểm a khoản 4 Điều 31 Luật 91) | Mẫu đồng ý; nội quy lao động; DPIA | Mọi mô hình (nếu dùng) |
| D03 | Thư điện tử tuyển dụng; phần mềm tuyển dụng | ☐ VN ☐ Nước ngoài | Xóa khi không tuyển, trừ khi ứng viên đồng ý lưu {{THOI_HAN_LUU_HO_SO_UNG_VIEN}} | Xóa hộp thư, tệp đính kèm | Không | Hộp thư riêng tuyển dụng; phân quyền | Mẫu đồng ý ứng viên | Mọi mô hình |
| D04 | Phần mềm quản lý khách hàng {{HE_THONG_CRM}} | ☐ VN ☐ Nước ngoài | {{THOI_HAN_LUU_DU_LIEU_KHACH_HANG}} sau khi kết thúc hợp đồng | Xóa hoặc khử nhận dạng | Nhà cung cấp phần mềm quản lý khách hàng; dịch vụ thư điện tử | Phân quyền theo vai trò; xác thực đa yếu tố | Chính sách A2 | Mọi mô hình |
| D05 | {{TEN_NEN_TANG_CLOUD}} — phân hệ tài khoản | {{VI_TRI_MAY_CHU}} | {{THOI_HAN_LUU_NHAT_KY_TAI_KHOAN}} | Xóa tự động theo lịch | Nhà cung cấp hạ tầng {{NHA_CUNG_CAP_HA_TANG}} | Mật khẩu băm; xác thực đa yếu tố; nhật ký không sửa được | Điều khoản dịch vụ; A2 | M3, M4 |
| D06 | {{TEN_NEN_TANG_CLOUD}} — kho video, cơ sở dữ liệu khuôn mặt, nhật ký nhận diện | {{VI_TRI_MAY_CHU}} | Theo cấu hình của khách hàng; khi kết thúc hợp đồng trả lại hoặc xóa trong {{THOI_HAN_TRA_XOA_KHI_KET_THUC}} ngày | Tự động xóa theo cấu hình; xóa an toàn, có biên bản xác nhận | Khách hàng (bên kiểm soát); nhà cung cấp hạ tầng {{NHA_CUNG_CAP_HA_TANG}}; đại lý (nếu vận hành M4) | Mã hóa khi lưu và truyền, phân quyền nghiêm ngặt (khoản 4 Điều 12 NĐ 356); tách dữ liệu từng khách hàng; khóa template tách biệt; nhật ký truy cập, xuất video; giám sát phát hiện xâm phạm | DPIA; Giấy chứng nhận dịch vụ xử lý DLCN (A6); phụ lục xử lý dữ liệu C1; điều khoản cloud C2; hồ sơ cấp độ A9 | M3, M4 |
| D07 | Hệ thống của khách hàng (không sao chép về); hệ thống phiếu hỗ trợ {{HE_THONG_TICKET}} | Hệ thống khách: tại cơ sở khách hàng. Phiếu hỗ trợ: ☐ VN ☐ Nước ngoài | Tệp gửi kèm phiếu: {{THOI_HAN_LUU_TEP_HO_TRO}} ngày sau khi đóng phiếu | Tự động xóa tệp đính kèm | Đại lý, nhà thầu lắp đặt; hãng sản xuất thiết bị (khi chuyển cấp hỗ trợ — kiểm tra chuyển xuyên biên giới) | Phiên truy cập có phê duyệt của khách, có thời hạn; ghi nhật ký; cấm sao chép dữ liệu khuôn mặt ra ngoài; cam kết bảo mật kỹ thuật viên (C4) | C1; C3; C4; C5 | M2 |
| D08 | Môi trường huấn luyện tách biệt {{MOI_TRUONG_HUAN_LUYEN}} | ☐ VN ☐ Nước ngoài | {{THOI_HAN_LUU_BO_DU_LIEU_HUAN_LUYEN}} | Xóa bộ dữ liệu gốc sau khi khử nhận dạng; không tái nhận dạng (điểm b khoản 6 Điều 14 Luật 91) | Không; nếu thuê gán nhãn: đơn vị gán nhãn theo hợp đồng | Tách môi trường; không kết nối môi trường sản xuất; phân quyền nhóm phát triển mô hình; nhật ký | B7; DPIA (mục đích riêng) | M5 |
| D09 | Đầu ghi, VMS tại văn phòng | Tại văn phòng | {{THOI_HAN_LUU_VIDEO_VAN_PHONG}} ngày, ghi đè tự động | Ghi đè | Cơ quan có thẩm quyền khi có yêu cầu bằng văn bản | Biển báo; phân quyền xem, xuất; nhật ký xuất video | Biển báo; nội quy | Mọi mô hình |
| D10 | Sổ, phần mềm lễ tân | Tại văn phòng | {{THOI_HAN_LUU_SO_KHACH}} ngày | Xóa, hủy sổ | Không | Chỉ lễ tân, bảo vệ truy cập | Thông báo tại quầy | Mọi mô hình |

## IV. Tổng hợp để điền Mẫu số 10 mục II.1

| Vai trò | Đối tượng chủ thể | Số lượng tại thời điểm nộp | Các dòng |
|---|---|---|---|
| Bên kiểm soát, bên kiểm soát và xử lý | Người lao động | {{SO_NGUOI_LAO_DONG}} | D01, D02, D09 |
| Bên kiểm soát, bên kiểm soát và xử lý | Ứng viên | | D03 |
| Bên kiểm soát, bên kiểm soát và xử lý | Khách hàng, người liên hệ | {{SO_DAU_MOI_LIEN_HE}} | D04 |
| Bên kiểm soát, bên kiểm soát và xử lý | Người dùng tài khoản nền tảng | {{SO_TAI_KHOAN_NEN_TANG}} | D05 |
| Bên kiểm soát, bên kiểm soát và xử lý | Người có hình ảnh trong bộ dữ liệu huấn luyện | | D08 |
| Bên xử lý | Người dùng cuối của khách hàng | {{SO_CHU_THE_NHAY_CAM_NEN_TANG}} (sinh trắc học) / {{SO_CHU_THE_CO_BAN_NEN_TANG}} (cơ bản) | D06, D07 |

Tổng số loại DLCN cơ bản: ....... · Tổng số loại DLCN nhạy cảm: ....... *(Mẫu số 10 mục II.3)*

## Hướng dẫn điền

| Cột | Cách điền |
|---|---|
| Vai trò | Theo Luật 91 Đ2.7–2.9. Không đổi D06, D07 thành "bên kiểm soát" để tiện; nếu {{VIET_TAT_NCC}} tự quyết định mục đích (ví dụ phân tích dữ liệu khách để bán báo cáo) thì phải tách thành dòng riêng với vai trò bên kiểm soát |
| Số lượng | Ghi cả số tích lũy và số đang hoạt động. Ghi ngày chốt số. Với D06, đếm theo từng khách hàng rồi cộng |
| DLCN cơ bản, nhạy cảm | Dùng đúng tên loại dữ liệu trong NĐ 356 Đ3, Đ4 để chép sang Mẫu số 10 mục II.3 |
| Cơ sở xử lý | Một trong: đồng ý (Luật 91 Đ9, Đ11.1); các trường hợp không cần đồng ý (Đ19.1.a–đ, Đ32.1); hợp đồng xử lý dữ liệu (với vai trò bên xử lý) |
| Thời hạn lưu | Giá trị nội bộ, có lý do. Các thời hạn lưu hồ sơ lao động, kế toán, chấm công theo pháp luật chuyên ngành chưa có trong `sources/` — **[CẦN ĐỐI CHIẾU]** trước khi ghi con số (V9) |
| Hồ sơ liên quan | Mã các tài liệu trong bộ A, B, C, K. Mỗi dòng có dữ liệu nhạy cảm phải có ít nhất: căn cứ đồng ý hoặc hợp đồng, và biện pháp bảo vệ theo Luật 91 Đ31.4.a |

## Bằng chứng cần lưu

| Bằng chứng | Mục đích |
|---|---|
| Các phiên bản sổ có ngày cập nhật, người xác nhận | Chứng minh việc theo dõi thay đổi để cập nhật DPIA (NĐ 356 Đ20) |
| Số liệu đếm chủ thể có ngày chốt, cách đếm | Chứng minh ngưỡng NĐ 356 Đ41, Mẫu số 10 mục III.2.3, NĐ 331 Đ13.2.c |
| Sơ đồ luồng dữ liệu cho D06, D07 (từ mẫu B1) | Mẫu số 10 mục II.2 |
