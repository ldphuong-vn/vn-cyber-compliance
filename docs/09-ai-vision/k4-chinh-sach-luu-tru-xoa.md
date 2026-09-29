# Mẫu Chính sách lưu trữ, xóa, hủy dữ liệu hệ thống camera và nhận diện (K4)

> **Căn cứ:** Luật 91/2025/QH15 Đ3.2–3.3, Đ14.1–14.5, Đ19.1, Đ25.2.b–c, Đ31.4.a, Đ32.4, Đ37.2; NĐ 356/2025/NĐ-CP Đ4.1.c, Đ4.1.i, Đ6.2, Đ12.2.đ, Đ19.3.d, Đ29.1.c; NĐ 333/2026/NĐ-CP Đ16.1, Đ16.6.c; NĐ 330/2026/NĐ-CP Đ7.1, Đ39.1.c, Đ39.4.a, Đ51.1–51.3, Đ61.2.a–b, Đ69.1.d; Luật Kế toán 88/2015/QH13 Đ41.5; NĐ 174/2016/NĐ-CP Đ12–Đ13; BLLĐ 2019 Đ190; BLDS 2015 Đ588; văn bản chuyên ngành tại bảng "Thời hạn tối thiểu theo ngành" **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** · **Đối chiếu văn bản gốc:** 29/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Ai dùng:** khách hàng (bên kiểm soát) quyết định thời hạn lưu và ban hành. Nhà cung cấp {{TEN_NHA_CUNG_CAP}} **gợi ý giá trị mặc định** (bảng dưới) và cấu hình hệ thống theo giá trị khách hàng chọn. Chính sách là tài liệu bắt buộc trong hồ sơ DPIA (NĐ 356 Đ19.3.d) — đính kèm K6 (`k6-dpia-dien-san-phan-ky-thuat.md`).

**Khi nào:** trước khi vận hành; khi thêm loại dữ liệu, mục đích mới; rà soát tối thiểu hằng năm.

**Mô hình:**

| Mô hình | Ai thực hiện xóa | Việc cần thêm |
|---|---|---|
| M1 | Khách hàng tự cấu hình đầu ghi, VMS, đầu đọc | — |
| M2 | Khách hàng; kỹ thuật viên nhà cung cấp cấu hình ban đầu | Biên bản bàn giao ghi rõ giá trị đã cấu hình (K8) |
| M3, M4 | Nhà cung cấp thực hiện trên nền tảng theo chỉ thị của khách hàng | Hợp đồng xử lý dữ liệu ghi thời hạn xóa, xác nhận xóa bằng văn bản, xóa hoặc trả dữ liệu khi kết thúc hợp đồng (NĐ 356 Đ12.2.đ; NĐ 330 Đ51.2.c). Chính sách lưu trữ, xóa cho dữ liệu trên cloud là nghĩa vụ riêng (NĐ 330 Đ69.1.d) |
| M5 | Dữ liệu nhà cung cấp dùng để huấn luyện mô hình **không** thuộc Chính sách này | Cần cơ sở pháp lý, chính sách riêng của nhà cung cấp |

### Nguyên tắc xác định thời hạn

| Giới hạn | Nội dung | Căn cứ |
|---|---|---|
| **Tối đa** | Chỉ lưu trong thời gian **phù hợp với mục đích**; video ghi hình nơi công cộng chỉ lưu trong thời gian **cần thiết** cho mục đích thu thập, hết hạn phải xóa, hủy | Luật 91 Đ3.3, Đ32.4; phạt lưu quá thời gian cần thiết: NĐ 330 Đ39.1.c |
| **Tối thiểu** | Khi luật khác buộc lưu lâu hơn thì theo luật đó ("trừ trường hợp pháp luật có quy định khác"). Chỉ áp cho nhóm camera, loại dữ liệu thuộc phạm vi văn bản đó — xem bảng "Thời hạn tối thiểu theo ngành" | Luật 91 Đ3.3, Đ32.4 |
| **Không có thời hạn chung** | Không có quy định chung về thời hạn lưu video camera tại doanh nghiệp, văn phòng, nhà máy, tòa nhà, cửa hàng. Thời hạn do bên kiểm soát tự quyết theo mục đích. Luật 116/2025 và NĐ 333/2026 (có toàn văn trong `sources/`) không có quy định thời hạn lưu camera; thông tin "luật giới hạn lưu tối đa 30 ngày" là không có căn cứ | Luật 91 Đ3.3, Đ32.4 |
| Dữ liệu người lao động | Lưu theo thời hạn luật định hoặc thỏa thuận; xóa khi chấm dứt HĐLĐ, trừ khi thỏa thuận hoặc luật khác quy định | Luật 91 Đ25.2.b–c |
| Xóa an toàn | Biện pháp an toàn; ngăn khôi phục trái phép; không được cố ý khôi phục | Luật 91 Đ14.3–14.4 |
| Không xóa được | Phải thông báo lý do cho chủ thể đã yêu cầu xóa | Luật 91 Đ14.5; NĐ 330 Đ51.1.a |

**Nhật ký hệ thống — mức tối thiểu 12 tháng:** NĐ 333 Đ16.6.c buộc lưu nhật ký hệ thống truy xuất được ít nhất 12 tháng, nhưng chỉ áp cho **doanh nghiệp cung cấp dịch vụ trên mạng viễn thông, Internet, dịch vụ gia tăng trên không gian mạng** (NĐ 333 Đ16.1) — xem [`../05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md`](../05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md) mục 4. Với khách hàng tự vận hành camera tại chỗ (M1, M2), đây là **khuyến nghị**; với nền tảng cloud M3, M4, nhà cung cấp thuộc diện áp dụng. **[CẦN ĐỐI CHIẾU]** khách hàng có thuộc Đ16.1 hay không.

### Thời hạn tối thiểu theo ngành

**[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** — áp cho cả bảng. Nội dung lấy từ kết quả tìm kiếm ngày 29/09/2026 (đoạn trích trên trang văn bản pháp luật, nguồn thứ cấp), chưa đối chiếu Công báo; số điều, khoản có thể lệch. Cột "Độ chắc" là mức tin cậy của nguồn tra cứu. Đối chiếu văn bản gốc trước khi báo giá, cấu hình.

| Ngành, đối tượng | Camera thuộc phạm vi | Thời hạn lưu tối thiểu | Nghĩa vụ kèm theo | Căn cứ | Độ chắc |
|---|---|---|---|---|---|
| Doanh nghiệp chế xuất | Cổng, cửa ra vào; vị trí lưu giữ hàng hóa; ghi 24/24 giờ kể cả ngày nghỉ, ngày lễ | **12 tháng**, lưu tại doanh nghiệp | Kết nối trực tuyến với cơ quan hải quan quản lý | NĐ 134/2016/NĐ-CP Đ28a (bổ sung bởi NĐ 18/2021/NĐ-CP); QĐ 247/QĐ-TCHQ (cách kết nối) | Trung bình – cao |
| Kho ngoại quan | Camera giám sát kho 24/24 giờ | **12 tháng** | Kết nối với cơ quan hải quan | NĐ 68/2016/NĐ-CP, sửa bởi NĐ 67/2020/NĐ-CP | Trung bình |
| Địa điểm thu gom hàng lẻ (CFS) | Camera giám sát địa điểm 24/24 giờ | **06 tháng** | Kết nối với cơ quan hải quan | NĐ 68/2016/NĐ-CP, sửa bởi NĐ 67/2020/NĐ-CP | Trung bình |
| Ngân hàng — máy ATM | Camera giám sát máy ATM | **100 ngày**; lâu hơn khi có tra soát, khiếu nại hoặc phục vụ điều tra | — | TT 36/2012/TT-NHNN, sửa bởi TT 20/2016/TT-NHNN | Trung bình |
| Ngân hàng — kho tiền | Cửa kho, gian đệm, hành lang bảo vệ kho | Không ấn định — theo quy định nội bộ của tổ chức tín dụng | — | TT 23/2023/TT-NHNN | Trung bình |
| Casino | Cửa ra vào, khu máy và bàn trò chơi, thu ngân, kho quỹ | **06 tháng** kể từ ngày ghi hình; kéo dài khi cơ quan có thẩm quyền yêu cầu | — | NĐ 03/2017/NĐ-CP; TT 102/2017/TT-BTC | Trung bình |
| Trò chơi điện tử có thưởng | Toàn bộ điểm kinh doanh, 24/24 giờ | 180 ngày — **chưa xác minh** điều khoản | — | NĐ 121/2021/NĐ-CP; TT 39/2022/TT-BTC | Thấp – trung bình |
| Trạm thu phí đường bộ | Camera toàn cảnh; camera làn; camera chụp, nhận dạng phương tiện | Video toàn cảnh **01 năm**; video làn, ảnh chụp phương tiện **05 năm** | — | TT 34/2024/TT-BGTVT | Trung bình |
| Xe ô tô kinh doanh vận tải (hiện hành) | Thiết bị giám sát hành trình; camera ghi hình người lái xe | Trên thiết bị: 24 giờ (cự ly đến 500 km), 72 giờ (trên 500 km) — chưa xác minh mốc này thuộc NĐ 151/2024 hay QCVN 06:2024/BCA | Truyền dữ liệu về hệ thống của Cục Cảnh sát giao thông; thiết bị hợp quy QCVN 06:2024/BCA | Luật 36/2024/QH15 Đ35.2; NĐ 151/2024/NĐ-CP; QCVN 06:2024/BCA; TT 71/2024/TT-BCA | Trung bình |
| Xe ô tô kinh doanh vận tải (từ 01/07/2027) | Như trên, thêm camera khoang chở khách theo lộ trình | Trên thiết bị: hình người lái xe 03 ngày, khoang chở khách 10 ngày; máy chủ dịch vụ: dữ liệu vi phạm 03 tháng | Như trên | NĐ 319/2026/NĐ-CP | Trung bình |

- **Không tìm thấy** thời hạn luật định ở cấp trung ương cho: văn phòng, nhà máy thông thường, tòa nhà, chung cư, bãi đỗ xe thương mại, trường học, cơ sở lưu trú, karaoke, cầm đồ (độ chắc trung bình — chưa đọc toàn văn NĐ 96/2016 hợp nhất). Nhắc khách hàng kiểm tra quy định của địa phương.
- Chung cư: TT 31/2026/TT-BXD (hiệu lực 15/12/2026) buộc khu để xe điện có camera kết nối phòng trực 24/24 giờ; không thấy thời hạn lưu.
- Thời hạn ngành chỉ áp cho **camera thuộc phạm vi văn bản** (ví dụ camera cổng, kho của doanh nghiệp chế xuất). Camera khác của cùng khách hàng (văn phòng, căng tin) vẫn theo nguyên tắc "cần thiết". Vì vậy mục 3 tách dòng 1a và 1b.
- Chia sẻ dữ liệu camera với Công an cấp xã theo QĐ 502/QĐ-TTg là theo thỏa thuận, không phải nghĩa vụ chung. Nghĩa vụ kết nối bắt buộc chỉ thấy ở ngành hải quan (doanh nghiệp chế xuất, kho ngoại quan, CFS) và xe kinh doanh vận tải.

### Giá trị gợi ý mặc định của nhà cung cấp

Đây là **gợi ý vận hành**, không phải quy định pháp luật. Khách hàng tự quyết định theo mục đích và ghi lý do vào cột "Căn cứ, lý do". Giá trị nào dài hơn gợi ý cần lý do cụ thể.

| Placeholder | Gợi ý | Ghi chú |
|---|---|---|
| `{{THOI_HAN_LUU_VIDEO}}` | 30 ngày | **Chỉ dùng khi camera không thuộc phạm vi bảng "Thời hạn tối thiểu theo ngành".** Đây là gợi ý vận hành, không phải con số luật định. Đủ để phát hiện, xác minh phần lớn sự cố, khiếu nại. Khu vực rủi ro cao (kho giá trị lớn, két tiền) có thể dài hơn — ghi lý do |
| `{{THOI_HAN_LUU_VIDEO_NGANH}}` | Mức sàn của ngành | Dòng 1a. Lấy từ bảng "Thời hạn tối thiểu theo ngành", ví dụ doanh nghiệp chế xuất: 12 tháng. Tính dung lượng lưu trữ theo thời hạn này **trước khi báo giá** **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** |
| `{{THOI_HAN_LUU_ANH_SU_KIEN}}` | 30 ngày | Ảnh chụp khi có cảnh báo, xâm nhập vùng cấm, nhận diện |
| `{{THOI_HAN_XOA_TEMPLATE_NV}}` | 05 ngày làm việc kể từ ngày chấm dứt HĐLĐ hoặc ngày rút lại đồng ý | Gồm cả bản trên đầu đọc, máy chủ, cloud; bản sao lưu xóa theo vòng quay |
| `{{THOI_HAN_LUU_ANH_DANG_KY}}` | Không lưu ảnh gốc sau khi tạo template | Nếu cần đăng ký lại, chụp lại |
| `{{THOI_HAN_LUU_TEMPLATE_KHACH}}` | Hết ngày của lượt thăm | Khách đăng ký dài hạn có đồng ý riêng: xóa khi hết thời hạn đồng ý hoặc sau 06 tháng không đến |
| `{{THOI_HAN_LUU_NHAT_KY_RA_VAO}}` | 12 tháng | Nhật ký tích lũy lâu có thể thành hồ sơ đời sống riêng tư (NĐ 356 Đ4.1.c) — không lưu dài hơn nhu cầu |
| `{{THOI_HAN_LUU_BANG_CHAM_CONG}}` | Tối thiểu 05 năm; khuyến nghị 10 năm, kể từ ngày kết thúc kỳ kế toán năm | Dòng 6a. Bảng chấm công tổng hợp tháng là tài liệu kế toán: tối thiểu 05 năm với tài liệu dùng cho quản lý, không trực tiếp ghi sổ (Luật Kế toán 88/2015/QH13 Đ41.5.a; NĐ 174/2016/NĐ-CP Đ12); 10 năm khi lưu kèm bộ chứng từ lương, là căn cứ trực tiếp tính lương (Đ41.5.b; NĐ 174 Đ13.1). Không chứa ảnh, template, điểm so khớp **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** |
| `{{THOI_HAN_LUU_NHAT_KY_CHAM_CONG}}` | 24 tháng kể từ ngày kết thúc kỳ trả lương | Dòng 6b — nhật ký thô từng lượt vào, ra. **Giá trị nội bộ**, không phải con số luật định. Lý do: thời hiệu tranh chấp lao động cá nhân tính từ ngày phát hiện hành vi vi phạm, không từ ngày trả lương (BLLĐ 2019 Đ190). Ghi vào Nội quy và phụ lục HĐLĐ (K3) để thành thời hạn đã thỏa thuận (Luật 91 Đ25.2.b–c). Nếu tính lương thẳng từ nhật ký, không lập bảng tổng hợp, thì nhật ký là chứng từ kế toán — áp thời hạn của dòng 6a **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** |
| `{{THOI_HAN_LUU_BIEN_SO_VANG_LAI}}` | 30 ngày | Tính từ lượt xe ra. Khách hàng là trạm thu phí đường bộ: ảnh chụp phương tiện tối thiểu 05 năm (TT 34/2024/TT-BGTVT) — dùng dòng 1a, không dùng 30 ngày **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** |
| `{{THOI_HAN_LUU_BIEN_SO_DANG_KY}}` | 30 ngày sau khi kết thúc hợp đồng gửi xe | Hóa đơn, chứng từ thu phí gửi xe là chứng từ kế toán, lưu 10 năm (Luật Kế toán Đ41.5.b) **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]**. Chứng từ chỉ chứa thông tin cần cho hóa đơn; không kèm ảnh xe, lịch sử ra vào |
| `{{THOI_HAN_LUU_ANH_CCCD}}` | Không lưu | Chỉ đọc thông tin cần thiết; nếu buộc phải chụp, xóa ngay sau khi đối chiếu (NĐ 356 Đ4.1.i: ảnh thẻ căn cước là dữ liệu nhạy cảm) |
| `{{THOI_HAN_LUU_BAN_TRICH_XUAT}}` | Đến khi vụ việc kết thúc và được thông báo, rà soát mỗi 06 tháng | Bản gốc đoạn video đã trích xuất cho cơ quan chức năng, kèm giá trị băm |
| `{{THOI_HAN_LUU_NHAT_KY_HE_THONG}}` | 12 tháng | Đăng nhập, xem lại, trích xuất, thay đổi cấu hình, xóa |
| `{{THOI_HAN_LUU_NHAT_KY_DONG_Y}}` | Suốt thời gian xử lý và 03 năm sau khi rút đồng ý hoặc kết thúc | Bên kiểm soát chịu trách nhiệm chứng minh sự đồng ý khi có tranh chấp (NĐ 356 Đ6.2). Mức 03 năm khớp thời hiệu khởi kiện yêu cầu bồi thường thiệt hại: 03 năm kể từ ngày người có quyền yêu cầu biết hoặc phải biết quyền, lợi ích hợp pháp bị xâm phạm (BLDS 2015 Đ588) **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]** |
| `{{THOI_HAN_LUU_BAN_SAO_LUU}}` | Không quá thời hạn của dữ liệu gốc cộng một chu kỳ sao lưu | Dữ liệu đã xóa ở hệ thống chính phải hết trong bản sao lưu sau tối đa một chu kỳ |
| `{{THOI_HAN_LUU_BIEN_BAN_XOA}}` | 05 năm | Bằng chứng tuân thủ |

### Rủi ro phạt (mức cho tổ chức — NĐ 330 Đ7.1)

| Hành vi | Mức phạt | Căn cứ |
|---|---|---|
| Lưu quá thời gian cần thiết cho mục đích | 20–40 triệu đồng; buộc hủy, xóa không khôi phục được | NĐ 330 Đ39.1.c, Đ39.4.a |
| Lưu dữ liệu người lao động quá thời hạn; không xóa khi chấm dứt HĐLĐ | 50–70 triệu đồng | NĐ 330 Đ61.2.a–b |
| Xóa không bằng biện pháp an toàn; không ngăn khôi phục trái phép; không báo lý do khi không xóa được | 10–30 triệu đồng | NĐ 330 Đ51.1.a–c |
| Không xóa khi luật buộc xóa; không yêu cầu bên xử lý xóa | 30–50 triệu đồng | NĐ 330 Đ51.2.a–b |
| Cố ý khôi phục trái phép dữ liệu đã xóa | 50–60 triệu đồng | NĐ 330 Đ51.3.a |
| *(M3/M4)* Không có chính sách lưu trữ, xóa, hủy phù hợp khi dùng cloud | 20–50 triệu đồng | NĐ 330 Đ69.1.d |

### Lưu ý vùng xám

- **Giữ lại vì tranh chấp nội bộ, khiếu nại** (legal hold): Luật 91 Đ32.4 và Đ3.3 chỉ cho lưu lâu hơn khi "pháp luật có quy định khác". Giữ lại để bảo vệ quyền lợi chính đáng của tổ chức có thể dựa vào Luật 91 Đ19.1.a, nhưng tổ chức **phải tự chứng minh**. **[CẦN ĐỐI CHIẾU]** — mẫu giới hạn phạm vi giữ lại ở đoạn video liên quan, có quyết định bằng văn bản, rà soát định kỳ.
- **V9** — thời hạn lưu chấm công, chứng từ thu phí và thời hạn lưu hình ảnh theo ngành đã tra cứu (các bảng trên) nhưng chưa có toàn văn: **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]**. Còn mở: chọn 05 hay 10 năm cho bảng chấm công (hỏi kế toán trưởng, kiểm toán viên; mặc định khuyến nghị 10 năm); nhật ký chấm công thô không có con số luật định; số điều, khoản của văn bản ngành.

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>CHÍNH SÁCH</b><br/><b>Lưu trữ, xóa, hủy dữ liệu hệ thống camera và nhận diện</b><br/><i>(Ban hành kèm theo Quyết định số {{SO_VB}}/QĐ-{{VIET_TAT_KH}} ngày ... tháng ... năm ... của {{CHUC_DANH_NGUOI_KY}} {{TEN_KHACH_HANG}})</i></p>

**1. Phạm vi**

1.1. Chính sách áp dụng cho mọi dữ liệu cá nhân do hệ thống camera giám sát, nhận diện khuôn mặt, nhận diện biển số của {{TEN_KHACH_HANG}} (sau đây gọi là Công ty) tạo ra hoặc lưu trữ tại {{DIA_DIEM_LAP_DAT}}, gồm dữ liệu trên camera, đầu ghi, máy chủ quản lý video, đầu đọc khuôn mặt, máy tính quản trị, bản sao lưu và *(M3/M4)* nền tảng {{TEN_NEN_TANG_CLOUD}}.

1.2. Áp dụng cho người lao động của Công ty và tổ chức xử lý dữ liệu thay Công ty theo hợp đồng.

**2. Nguyên tắc**

2.1. **Không lưu quá mục đích.** Mỗi loại dữ liệu có một thời hạn lưu tối đa tại mục 3, xác định theo mục đích thu thập (khoản 3 Điều 3, khoản 4 Điều 32 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15).

2.2. **Tôn trọng thời hạn tối thiểu luật định.** Khi pháp luật khác buộc lưu lâu hơn, Công ty lưu theo quy định đó cho đúng nhóm camera, loại dữ liệu thuộc phạm vi quy định và ghi rõ căn cứ.

2.3. **Xóa tự động là mặc định.** Thời hạn tại mục 3 được cấu hình trên hệ thống để tự động xóa, ghi đè. Không để "lưu vô thời hạn" hoặc "lưu đến khi đầy ổ".

2.4. **Tách dữ liệu theo mục đích.** Dữ liệu khuôn mặt tách khỏi bảng chấm công và nhật ký chấm công; xóa dữ liệu khuôn mặt khi nghỉ việc không làm mất bảng chấm công phải lưu theo pháp luật về kế toán và nhật ký chấm công lưu theo thỏa thuận với người lao động.

2.5. **Giữ lại có kiểm soát.** Chỉ giữ dữ liệu quá thời hạn theo mục 4.

2.6. **Xóa an toàn, không khôi phục được** (khoản 3, khoản 4 Điều 14 Luật Bảo vệ dữ liệu cá nhân), bao gồm cả bản sao lưu và thiết bị thải bỏ.

**3. Thời hạn lưu và cách xóa**

| # | Loại dữ liệu | Thời hạn lưu | Căn cứ, lý do | Sự kiện kích hoạt xóa | Phương thức xóa |
|---|---|---|---|---|---|
| 1a | Video camera thuộc phạm vi quy định chuyên ngành về thời hạn lưu tối thiểu: {{NHOM_CAMERA_THEO_QUY_DINH_NGANH}} | {{THOI_HAN_LUU_VIDEO_NGANH}} | {{CAN_CU_THOI_HAN_TOI_THIEU_NGANH}}; khoản 3 Điều 3, khoản 4 Điều 32 Luật BVDLCN ("trừ trường hợp pháp luật có quy định khác") | Hết thời hạn tính từ thời điểm ghi | {{Ghi đè tự động theo vòng trên đầu ghi, VMS/Xóa tự động theo vòng đời lưu trữ trên cloud}} |
| 1b | Video camera an ninh khác (không nhận diện) | {{THOI_HAN_LUU_VIDEO}} | Khoản 4 Điều 32 Luật BVDLCN; thời gian cần để phát hiện, xác minh sự cố: {{LY_DO_THOI_HAN_VIDEO}} | Hết thời hạn tính từ thời điểm ghi | {{Ghi đè tự động theo vòng trên đầu ghi, VMS/Xóa tự động theo vòng đời lưu trữ trên cloud}} |
| 2 | Ảnh sự kiện (cảnh báo, xâm nhập, kết quả nhận diện) | {{THOI_HAN_LUU_ANH_SU_KIEN}} | Xác minh cảnh báo | Hết thời hạn | Xóa tự động |
| 3 | Dữ liệu khuôn mặt nhân viên (template {{và ảnh đăng ký}}) | Đến khi rút lại đồng ý hoặc chấm dứt HĐLĐ; xóa trong {{THOI_HAN_XOA_TEMPLATE_NV}} | Điều 9 và điểm c khoản 2 Điều 25 Luật BVDLCN; phiếu đồng ý | Rút lại đồng ý; chấm dứt HĐLĐ; đổi sang phương thức thay thế | Xóa trên máy chủ và **đồng bộ xóa trên mọi đầu đọc**; kiểm tra lại không còn so khớp được |
| 4 | Dữ liệu khuôn mặt, ảnh chụp của khách | {{THOI_HAN_LUU_TEMPLATE_KHACH}} | Đồng ý tại thời điểm đăng ký; mục đích chỉ cho lượt thăm | Kết thúc lượt thăm; hết thời hạn đồng ý | Xóa tự động |
| 5 | Nhật ký ra vào | {{THOI_HAN_LUU_NHAT_KY_RA_VAO}} | An ninh, điều tra sự cố | Hết thời hạn | Xóa tự động theo lô |
| 6a | Bảng chấm công tổng hợp tháng (đã chốt, dùng tính lương; không chứa ảnh, dữ liệu khuôn mặt) | {{THOI_HAN_LUU_BANG_CHAM_CONG}} kể từ ngày kết thúc kỳ kế toán năm | Tài liệu kế toán: {{CAN_CU_LUU_CHAM_CONG}} | Hết thời hạn luật định | Hủy theo lô, lập biên bản |
| 6b | Nhật ký chấm công (từng lượt ghi nhận: mã nhân viên, thời điểm, thiết bị, phương thức xác thực) | {{THOI_HAN_LUU_NHAT_KY_CHAM_CONG}} kể từ ngày kết thúc kỳ trả lương tương ứng, kể cả sau khi chấm dứt HĐLĐ | Thỏa thuận với người lao động tại Nội quy lao động, phụ lục hợp đồng lao động (điểm b, điểm c khoản 2 Điều 25 Luật BVDLCN); giải quyết khiếu nại, tranh chấp về tiền lương theo thời hiệu tại Điều 190 Bộ luật Lao động số 45/2019/QH14 | Hết thời hạn đã thỏa thuận | Xóa theo lô, lập biên bản |
| 7 | Hình ảnh, biển số xe vãng lai | {{THOI_HAN_LUU_BIEN_SO_VANG_LAI}} | Khoản 1, khoản 4 Điều 32 Luật BVDLCN; đối soát phí, khiếu nại | Hết thời hạn tính từ lượt xe ra | Xóa tự động |
| 8 | Biển số, thông tin xe đăng ký (vé tháng) | Thời hạn hợp đồng gửi xe và {{THOI_HAN_LUU_BIEN_SO_DANG_KY}} sau khi kết thúc | Thực hiện thỏa thuận gửi xe | Kết thúc hợp đồng | Xóa khỏi danh sách xe đăng ký; lịch sử ra vào theo dòng 7 |
| 9 | Ảnh thẻ căn cước của khách (nếu có) | {{THOI_HAN_LUU_ANH_CCCD}} | Dữ liệu nhạy cảm (điểm i khoản 1 Điều 4 Nghị định số 356/2025/NĐ-CP); chỉ trích thông tin cần thiết | Ngay sau khi đối chiếu | Không lưu ảnh; nếu đã chụp, xóa ngay |
| 10 | Video, hình ảnh, dữ liệu nhận diện đã trích xuất cho cơ quan nhà nước có thẩm quyền | {{THOI_HAN_LUU_BAN_TRICH_XUAT}} | Theo yêu cầu bằng văn bản; bảo đảm đối chiếu được bản đã giao | Cơ quan thông báo kết thúc, hoặc rà soát định kỳ không còn cần | Xóa bản gốc trích xuất và giá trị băm; lập biên bản |
| 11 | Nhật ký hệ thống (đăng nhập, xem lại, trích xuất, thay đổi cấu hình, xóa) | {{THOI_HAN_LUU_NHAT_KY_HE_THONG}} | Theo dõi, phát hiện xâm phạm dữ liệu sinh trắc học (điểm a khoản 4 Điều 31 Luật BVDLCN); {{điểm c khoản 6 Điều 16 Nghị định số 333/2026/NĐ-CP/khuyến nghị nội bộ}} | Hết thời hạn | Xóa tự động; nhật ký không cho sửa trước khi hết hạn |
| 12 | Nhật ký đồng ý và rút lại đồng ý | {{THOI_HAN_LUU_NHAT_KY_DONG_Y}} | Chứng minh sự đồng ý (khoản 2 Điều 6 Nghị định số 356/2025/NĐ-CP) | Hết thời hạn | Xóa theo lô, lập biên bản |
| 13 | Hồ sơ sự cố lộ, mất dữ liệu khuôn mặt, vị trí | Tối thiểu 05 năm kể từ ngày khắc phục xong sự cố | Điểm c khoản 1 Điều 29 Nghị định số 356/2025/NĐ-CP | Hết thời hạn | Hủy hồ sơ, lập biên bản |
| 14 | Dữ liệu thử nghiệm khi lắp đặt, nghiệm thu | Không lưu sau bàn giao | Không còn mục đích | Bàn giao hệ thống | Xóa trước khi ký biên bản bàn giao |
| 15 | Bản sao lưu của các dữ liệu trên | {{THOI_HAN_LUU_BAN_SAO_LUU}} | Khôi phục khi có sự cố | Hết vòng quay sao lưu | Ghi đè; hủy khóa mã hóa của bản sao lưu hết hạn |

**4. Giữ lại dữ liệu quá thời hạn**

4.1. Chỉ giữ lại khi: (a) có yêu cầu bằng văn bản của cơ quan nhà nước có thẩm quyền; (b) đang xử lý sự cố an ninh, tai nạn lao động, mất mát tài sản, sự cố dữ liệu cá nhân; (c) có khiếu nại, tranh chấp đang giải quyết mà dữ liệu là chứng cứ.

4.2. Người đề nghị lập phiếu giữ lại, nêu lý do, phạm vi (camera, khoảng thời gian, người liên quan). {{CHUC_DANH_PHE_DUYET_TRICH_XUAT}} phê duyệt sau khi có ý kiến của nhân sự bảo vệ dữ liệu cá nhân.

4.3. Chỉ giữ **đoạn dữ liệu liên quan**, không giữ toàn bộ ổ lưu trữ. Bản giữ lại được tách khỏi vòng ghi đè, mã hóa, ghi giá trị băm, hạn chế người truy cập.

4.4. Nhân sự bảo vệ dữ liệu cá nhân rà soát Sổ giữ lại dữ liệu mỗi {{CHU_KY_RA_SOAT_GIU_LAI}}. Hết lý do giữ lại thì xóa ngay và lập biên bản.

**5. Xóa an toàn**

5.1. Dữ liệu trên hệ thống đang vận hành: xóa bằng chức năng của phần mềm có ghi nhật ký; với dữ liệu mã hóa, hủy khóa mã hóa tương ứng.

5.2. Thiết bị thải bỏ, bảo hành, thanh lý (ổ cứng đầu ghi, thẻ nhớ camera, đầu đọc khuôn mặt, máy tính quản trị): xóa an toàn hoặc hủy vật lý phương tiện lưu trữ **trước** khi chuyển ra khỏi Công ty; đầu đọc khuôn mặt phải khôi phục cài đặt gốc và xác nhận không còn dữ liệu khuôn mặt.

5.3. *(M3/M4)* Nhà cung cấp {{TEN_NHA_CUNG_CAP}} xóa theo Chính sách này và xác nhận bằng văn bản; khi chấm dứt hợp đồng, trả lại hoặc xóa toàn bộ dữ liệu theo lựa chọn của Công ty.

5.4. Không ai được khôi phục dữ liệu đã xóa, trừ khi pháp luật cho phép.

5.5. Việc xóa theo lô, xóa dữ liệu dòng 6a, 6b, 10, 12, 13 và xóa theo yêu cầu của chủ thể phải lập Biên bản xóa, hủy dữ liệu.

**6. Trách nhiệm**

| Việc | Người thực hiện | Người kiểm tra |
|---|---|---|
| Cấu hình thời hạn lưu trên hệ thống | {{Quản trị hệ thống của Công ty/Kỹ thuật viên của nhà cung cấp}} | Nhân sự bảo vệ dữ liệu cá nhân |
| Gửi danh sách người nghỉ việc, rút đồng ý | {{BO_PHAN_HCNS}} — trong ngày làm việc kế tiếp | Nhân sự bảo vệ dữ liệu cá nhân |
| Xóa dữ liệu khuôn mặt | Quản trị hệ thống | Nhân sự bảo vệ dữ liệu cá nhân — đối chiếu hằng tháng |
| Quyết định giữ lại | {{CHUC_DANH_PHE_DUYET_TRICH_XUAT}} | Nhân sự bảo vệ dữ liệu cá nhân |
| Xóa thiết bị thải bỏ | Quản trị hệ thống | Bộ phận quản lý tài sản |

**7. Kiểm tra và rà soát**

7.1. Mỗi {{CHU_KY_KIEM_TRA_CAU_HINH_LUU}}, nhân sự bảo vệ dữ liệu cá nhân kiểm tra ngẫu nhiên: dữ liệu cũ nhất trên từng hệ thống không vượt thời hạn tại mục 3; người đã nghỉ việc không còn trong danh sách khuôn mặt.

7.2. Chính sách được rà soát ít nhất 01 lần/năm và khi thay đổi hệ thống, mục đích xử lý.

| **Nơi nhận:**<br/>- Các bộ phận liên quan;<br/>- {{NHAN_SU_BVDLCN_KH}};<br/>- {{TEN_NHA_CUNG_CAP}} (M3/M4);<br/>- Lưu: VT, {{BO_PHAN_HCNS}}. | **{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

---

<p align="center"><b>SỔ GIỮ LẠI DỮ LIỆU</b></p>

| Mã | Ngày quyết định | Lý do (mục 4.1) | Dữ liệu giữ lại (camera, thời gian, người liên quan) | Giá trị băm | Người phê duyệt | Hạn rà soát | Ngày xóa | Số biên bản xóa |
|---|---|---|---|---|---|---|---|---|
| GL-{{NAM}}-001 | | | | | | | | |

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: ......./BB-{{VIET_TAT_KH}} | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>BIÊN BẢN</b><br/><b>Xóa, hủy dữ liệu cá nhân của hệ thống camera và nhận diện</b></p>

Hôm nay, hồi ...... giờ ...... ngày ...... tháng ...... năm ......, tại {{DIA_DIEM_LAP_DAT}}, chúng tôi gồm:

**Bên thực hiện xóa:** ............................................ *(quản trị hệ thống của {{TEN_KHACH_HANG}}; hoặc {{TEN_NHA_CUNG_CAP}} với M3/M4)* — ông/bà ............................................, chức vụ ..................................

**Bên kiểm soát dữ liệu:** {{TEN_KHACH_HANG}} — ông/bà {{NHAN_SU_BVDLCN_KH}}, nhân sự bảo vệ dữ liệu cá nhân.

Đã tiến hành xóa, hủy dữ liệu cá nhân như sau:

| # | Loại dữ liệu (theo mục 3 Chính sách) | Phạm vi (khoảng thời gian, số bản ghi, số chủ thể) | Nơi lưu đã xóa (gồm bản sao lưu, thiết bị) | Lý do, căn cứ xóa | Phương thức xóa | Thời điểm hoàn thành |
|---|---|---|---|---|---|---|
| 1 | | | | ☐ Hết thời hạn ☐ Yêu cầu của chủ thể (mã yêu cầu: ......) ☐ Chấm dứt HĐLĐ ☐ Rút đồng ý ☐ Kết thúc giữ lại ☐ Khác: ...... | | |

**Kiểm tra sau khi xóa:** ☐ Tìm kiếm trên hệ thống không còn kết quả ☐ Đầu đọc không còn nhận diện được người đã xóa ☐ Nhật ký hệ thống ghi nhận thao tác xóa ☐ Nhà cung cấp đã xác nhận bằng văn bản *(M3/M4)*.

Dữ liệu còn giữ lại (nếu có) và lý do: .......................................................................

Biên bản lập thành 02 bản, mỗi bên giữ 01 bản.

| **ĐẠI DIỆN BÊN THỰC HIỆN XÓA**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/>........................................ | **ĐẠI DIỆN BÊN KIỂM SOÁT DỮ LIỆU**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/>**{{NHAN_SU_BVDLCN_KH}}** |
|:---:|:---:|

## Hướng dẫn điền

1. **Trước tiên**, xác định khách hàng có thuộc ngành ở bảng "Thời hạn tối thiểu theo ngành" không. Có: điền dòng 1a — `{{NHOM_CAMERA_THEO_QUY_DINH_NGANH}}` (ví dụ "camera cổng ra vào và kho hàng"), `{{THOI_HAN_LUU_VIDEO_NGANH}}`, `{{CAN_CU_THOI_HAN_TOI_THIEU_NGANH}}` (ghi đầy đủ số hiệu, điều khoản sau khi đã đối chiếu văn bản gốc) — và tính dung lượng lưu trữ trước khi báo giá. Không: xóa dòng 1a.
2. Điền cột "Thời hạn lưu" bằng giá trị khách hàng quyết định (xem bảng gợi ý ở phần hướng dẫn). Mỗi giá trị khác gợi ý phải có lý do ở cột "Căn cứ, lý do" — ví dụ `{{LY_DO_THOI_HAN_VIDEO}}`: "Hàng hóa được kiểm kê 15 ngày một lần; cần 30 ngày để đối chiếu hao hụt".
3. `{{CAN_CU_LUU_CHAM_CONG}}`: gợi ý "khoản 5 Điều 41 Luật Kế toán số 88/2015/QH13; Điều 12 (05 năm) hoặc Điều 13 (10 năm) Nghị định số 174/2016/NĐ-CP" — chọn điều tương ứng với thời hạn đã chọn. **[CẦN ĐỐI CHIẾU — chưa có toàn văn trong sources/]**
4. Dòng 11: chọn "điểm c khoản 6 Điều 16 Nghị định số 333/2026/NĐ-CP" chỉ khi khách hàng là doanh nghiệp cung cấp dịch vụ trên mạng thuộc NĐ 333 Đ16.1; còn lại chọn "khuyến nghị nội bộ".
5. Xóa các dòng không áp dụng (ví dụ không có bãi xe, không quét căn cước).
6. Các chỗ đánh dấu *(M3/M4)* và lựa chọn bên thực hiện xóa: giữ phương án đúng với mô hình M1–M4, xóa phần còn lại.
7. Sau khi ban hành, gửi bảng mục 3 cho kỹ thuật viên để cấu hình; đối chiếu lại ở checklist K8 mục Cấu hình.

## Bằng chứng cần lưu

| Bằng chứng | Mục đích |
|---|---|
| Chính sách đã ký; ảnh chụp màn hình cấu hình thời hạn lưu trên đầu ghi, VMS, đầu đọc, cloud | Chứng minh không lưu quá thời gian cần thiết (NĐ 330 Đ39.1.c); hồ sơ DPIA (NĐ 356 Đ19.3.d) |
| Kết quả kiểm tra định kỳ mục 7.1 | Như trên |
| Sổ giữ lại dữ liệu | Chứng minh lý do giữ quá thời hạn |
| Biên bản xóa, hủy; xác nhận xóa của nhà cung cấp *(M3/M4)* | Luật 91 Đ14.3; NĐ 330 Đ51.2.b–c |
| Đối chiếu hằng tháng danh sách nghỉ việc với danh sách khuôn mặt | Luật 91 Đ25.2.c; NĐ 330 Đ61.2.b |
