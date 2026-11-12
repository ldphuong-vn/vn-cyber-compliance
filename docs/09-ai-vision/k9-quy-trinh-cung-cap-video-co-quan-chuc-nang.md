# Mẫu Quy trình cung cấp video, hình ảnh, dữ liệu nhận diện cho cơ quan nhà nước có thẩm quyền (K9)

> **Căn cứ:** Luật 91/2025/QH15 Đ3.2, Đ15.2.b, Đ17.1.đ, Đ17.2, Đ19.1.a–c, Đ32.3, Đ37.1.i; NĐ 356/2025/NĐ-CP Đ4.1.đ, Đ7.1–7.2; NĐ 330/2026/NĐ-CP Đ7.1, Đ49.2–49.3, Đ52.3, Đ71.2.b, Đ71.3 · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Ai dùng:** khách hàng (bên kiểm soát) khi công an, cơ quan điều tra, viện kiểm sát, tòa án, thanh tra hoặc cơ quan nhà nước khác đề nghị cung cấp đoạn video, hình ảnh, nhật ký ra vào, dữ liệu biển số, dữ liệu khuôn mặt. Tình huống thường gặp: trộm cắp, tai nạn giao thông trước cổng, xô xát, tìm người mất tích. Nhà cung cấp {{TEN_NHA_CUNG_CAP}} hỗ trợ trích xuất theo yêu cầu của khách hàng *(M2–M4)*; **không** tự cung cấp dữ liệu của khách hàng cho cơ quan khi chưa báo khách hàng, trừ khi pháp luật hoặc cơ quan yêu cầu khác.

**Khi nào:** ban hành trước khi vận hành; đào tạo bảo vệ, lễ tân, quản trị hệ thống — người thường gặp yêu cầu đầu tiên.

**Mô hình:** mọi mô hình. *(M3/M4)* dữ liệu trên cloud: khách hàng yêu cầu nhà cung cấp trích xuất; nhà cung cấp ghi nhật ký và bàn giao cho khách hàng hoặc giao trực tiếp cho cơ quan theo chỉ định bằng văn bản của khách hàng.

### Phân biệt ba loại người yêu cầu

| Người yêu cầu | Cơ sở cung cấp | Dùng quy trình |
|---|---|---|
| **Cơ quan nhà nước có thẩm quyền** | Chuyển giao theo yêu cầu của cơ quan nhà nước có thẩm quyền (Luật 91 Đ17.1.đ); xử lý không cần đồng ý để phòng, chống tội phạm, phục vụ hoạt động của cơ quan nhà nước (Luật 91 Đ19.1.b–c). NĐ 330 Đ71.2.b chỉ miễn trừ khi có **yêu cầu bằng văn bản** | **K9 (mẫu này)** |
| **Chính người có trong video** (hoặc người đại diện) | Quyền xem, được cung cấp dữ liệu của mình (Luật 91 Đ4.1.c–d, Đ15.2.a) | K5 (`k5-quy-trinh-yeu-cau-chu-the.md`) |
| **Bên thứ ba khác**: đối tác, chủ tòa nhà, công ty bảo hiểm, luật sư, báo chí, người bị hại không có trong video | **Không** có cơ sở mặc định. Cần: đồng ý của người trong video (Luật 91 Đ15.2.b), hoặc chứng minh được trường hợp bảo vệ quyền, lợi ích chính đáng trước hành vi xâm phạm (Luật 91 Đ19.1.a) — **[CẦN ĐỐI CHIẾU]** từng vụ việc; hoặc làm mờ để không còn xác định được người | Không dùng K9. Hướng người yêu cầu đề nghị cơ quan có thẩm quyền yêu cầu bằng văn bản, hoặc xin ý kiến pháp chế |

### Quan hệ với quy trình tiếp nhận yêu cầu của cơ quan chức năng về an ninh mạng

Khách hàng đã áp dụng bộ khung an ninh mạng có sẵn [`../04-chinh-sach-quy-trinh/quy-trinh-tiep-nhan-yeu-cau-co-quan-chuc-nang.md`](../04-chinh-sach-quy-trinh/quy-trinh-tiep-nhan-yeu-cau-co-quan-chuc-nang.md) (QT-YC). K9 **không thay thế** QT-YC:

| | QT-YC | K9 |
|---|---|---|
| Phạm vi | Yêu cầu theo Luật An ninh mạng (cung cấp thông tin người dùng dịch vụ, gỡ bỏ, kiểm tra, giám sát ANM) | Video, hình ảnh, dữ liệu nhận diện từ hệ thống camera |
| Thời hạn | Có mốc pháp định 24 giờ / 06 giờ / 03 giờ cho doanh nghiệp cung cấp dịch vụ trên mạng | **Không có** mốc pháp định riêng trong `sources/`; thực hiện theo thời hạn ghi trong văn bản yêu cầu |
| Dùng chung | Bước tiếp nhận, xác thực (QT-YC mục 3 B1–B2), đầu mối, danh bạ cơ quan chức năng đã xác minh | Thêm bước riêng: giữ nguyên dữ liệu, phạm vi tối thiểu, giá trị băm, làm mờ, biên bản giao nhận |

Nếu khách hàng có QT-YC: ghi yêu cầu camera vào cùng Sổ theo dõi với mã loại "CAM", áp dụng các bước riêng của K9.

### Yêu cầu nguồn

| Yêu cầu | Căn cứ |
|---|---|
| Không trích xuất, chia sẻ, công khai trái phép dữ liệu ghi hình, **trừ** khi cung cấp theo yêu cầu bằng văn bản của cơ quan có thẩm quyền | NĐ 330 Đ71.2.b |
| Chuyển giao dữ liệu theo yêu cầu của cơ quan nhà nước có thẩm quyền; không bị coi là mua, bán dữ liệu | Luật 91 Đ17.1.đ, Đ17.2 |
| Phối hợp với Bộ Công an, cơ quan nhà nước có thẩm quyền, cung cấp thông tin phục vụ điều tra | Luật 91 Đ37.1.i |
| Dữ liệu ghi hình chỉ dùng đúng mục đích | Luật 91 Đ32.3 |
| Chỉ cung cấp đúng phạm vi cần thiết | Luật 91 Đ3.2 |
| Chuyển giao dữ liệu nhạy cảm (dữ liệu khuôn mặt) phải có bảo mật vật lý, mã hóa, biện pháp bảo mật khác | NĐ 356 Đ7.2; NĐ 330 Đ52.3 |

Thỏa thuận chuyển giao theo NĐ 356 Đ7.1 chỉ bắt buộc với chuyển giao theo Luật 91 Đ17.1.a, c, d — **không** áp dụng cho chuyển giao theo yêu cầu của cơ quan nhà nước (Đ17.1.đ). Biên bản giao nhận là đủ.

### Rủi ro phạt (mức cho tổ chức — NĐ 330 Đ7.1)

| Hành vi | Mức phạt | Căn cứ |
|---|---|---|
| Trích xuất, chia sẻ video không có yêu cầu bằng văn bản của cơ quan có thẩm quyền (ví dụ gửi qua ứng dụng nhắn tin theo cuộc gọi) | 30–50 triệu đồng; tịch thu tang vật, phương tiện | NĐ 330 Đ71.2.b, Đ71.3 |
| Cung cấp cho tổ chức, cá nhân khác (bảo hiểm, đối tác) khi chưa có đồng ý | 20–30 triệu đồng; gấp đôi với dữ liệu nhạy cảm | NĐ 330 Đ49.2–49.3 |
| Chuyển giao dữ liệu khuôn mặt không mã hóa, không bảo mật | 50–80 triệu đồng | NĐ 330 Đ52.3 |

### Lưu ý vùng xám

- **Yêu cầu bằng lời, qua điện thoại, tin nhắn:** NĐ 330 Đ71.2.b chỉ miễn khi có văn bản. Mẫu cho phép **giữ nguyên dữ liệu ngay** và **cho xem tại chỗ** có lập biên bản trong tình huống khẩn cấp đe dọa tính mạng (Luật 91 Đ19.1.a–b); **chỉ giao bản sao khi có văn bản**. **[CẦN ĐỐI CHIẾU]** việc cho xem tại chỗ có phải "trích xuất, chia sẻ" không.
- **Thẩm quyền yêu cầu** của từng cơ quan (tố tụng hình sự, xử lý vi phạm hành chính, thanh tra) quy định ở luật khác, **không có trong `sources/`** — **[CẦN ĐỐI CHIẾU]**. Mẫu chỉ kiểm tra hình thức: văn bản của cơ quan nhà nước, có số, ký, đóng dấu, nêu phạm vi, mục đích.
- **Làm mờ người không liên quan:** chỉ khi không ảnh hưởng mục đích của cơ quan. Cơ quan yêu cầu bản gốc thì giao bản gốc, ghi vào biên bản.

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>QUY TRÌNH</b><br/><b>Cung cấp video, hình ảnh, dữ liệu nhận diện cho cơ quan nhà nước có thẩm quyền</b><br/><i>(Ban hành kèm theo Quyết định số {{SO_VB}}/QĐ-{{VIET_TAT_KH}} ngày ... tháng ... năm ... của {{CHUC_DANH_NGUOI_KY}} {{TEN_KHACH_HANG}})</i></p>

Mã quy trình: **QT-CAM-CQ** · Đầu mối: {{DAU_MOI_CUNG_CAP_CQCN}} · Phê duyệt: {{CHUC_DANH_PHE_DUYET_TRICH_XUAT}} · Phối hợp: nhân sự bảo vệ dữ liệu cá nhân {{NHAN_SU_BVDLCN_KH}}, quản trị hệ thống; *(M2–M4)* {{TEN_NHA_CUNG_CAP}}.

**1. Nguyên tắc**

1.1. {{TEN_KHACH_HANG}} (sau đây gọi là Công ty) chỉ giao bản sao video, hình ảnh, dữ liệu nhận diện cho cơ quan nhà nước có thẩm quyền khi có **yêu cầu bằng văn bản** (điểm b khoản 2 Điều 71 Nghị định số 330/2026/NĐ-CP; điểm đ khoản 1 Điều 17 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15).

1.2. Chỉ cung cấp **đúng phạm vi** được yêu cầu: camera, khoảng thời gian, loại dữ liệu.

1.3. Bảo toàn dữ liệu: bản gốc được giữ nguyên, bản giao có giá trị băm để đối chiếu.

1.4. Mọi bước được ghi Sổ theo dõi; mọi lần giao có Biên bản giao nhận.

1.5. Không tự ý gửi video qua ứng dụng nhắn tin, mạng xã hội, email cá nhân cho bất kỳ ai, kể cả cán bộ cơ quan nhà nước, khi chưa thực hiện Quy trình này.

**2. Các bước**

| Bước | Việc | Người thực hiện | Bằng chứng |
|---|---|---|---|
| B1 | **Tiếp nhận.** Người nhận yêu cầu (bảo vệ, lễ tân, nhân viên) mời cán bộ gặp đầu mối; ghi Sổ theo dõi: thời điểm, cơ quan, cán bộ, số văn bản, nội dung | Người nhận yêu cầu, đầu mối | Sổ theo dõi |
| B2 | **Giữ nguyên dữ liệu ngay.** Tách đoạn video, nhật ký liên quan ra khỏi vòng ghi đè tự động, kể cả khi chưa đủ thủ tục — tránh mất chứng cứ | Quản trị hệ thống | Nhật ký hệ thống |
| B3 | **Kiểm tra văn bản và người đến nhận:** văn bản của cơ quan nhà nước; có số, ngày, chữ ký, con dấu; nêu vụ việc, phạm vi (camera, địa điểm, thời gian), loại dữ liệu; người nhận có giấy giới thiệu, giấy tờ công tác. Nghi ngờ: gọi lại **số điện thoại chính thức** của cơ quan (không dùng số ghi trên văn bản) | Đầu mối | Bản sao văn bản; ghi chú xác minh |
| B4 | **Chưa có văn bản:** đề nghị cơ quan gửi văn bản; vẫn thực hiện B2. Trường hợp khẩn cấp đe dọa tính mạng, sức khỏe: cho cán bộ **xem tại chỗ** có người của Công ty đi cùng, lập biên bản xem; chỉ giao bản sao khi nhận được văn bản | Đầu mối, {{CHUC_DANH_PHE_DUYET_TRICH_XUAT}} | Biên bản xem tại chỗ |
| B5 | **Xác định phạm vi tối thiểu:** chỉ camera, khoảng thời gian, loại dữ liệu nêu trong văn bản. Yêu cầu quá rộng (ví dụ toàn bộ dữ liệu khuôn mặt nhân viên): trao đổi lại với cơ quan để làm rõ; ghi ý kiến của nhân sự bảo vệ dữ liệu cá nhân | Đầu mối, nhân sự BVDLCN | Ghi chú phạm vi |
| B6 | **Trích xuất:** người được phân quyền trích xuất bằng chức năng xuất của hệ thống (giữ dấu thời gian, tên camera); tính **giá trị băm SHA-256** của từng tệp; ghi nhật ký | Quản trị hệ thống; *(M3/M4)* {{TEN_NHA_CUNG_CAP}} | Nhật ký trích xuất; bảng giá trị băm |
| B7 | **Làm mờ** khuôn mặt, biển số người không liên quan **nếu** không ảnh hưởng mục đích của cơ quan. Cơ quan yêu cầu bản gốc: giao bản gốc, ghi vào biên bản | Quản trị hệ thống | Ghi trong biên bản |
| B8 | **Bảo mật khi giao:** dữ liệu khuôn mặt, nhật ký nhận diện phải được mã hóa; mật khẩu giao riêng. Phương tiện: thiết bị lưu trữ mã hóa, đĩa ghi một lần hoặc kênh điện tử do cơ quan chỉ định | Quản trị hệ thống | — |
| B9 | **Phê duyệt** giao dữ liệu | {{CHUC_DANH_PHE_DUYET_TRICH_XUAT}} | Chữ ký phê duyệt trên phiếu |
| B10 | **Giao nhận:** lập Biên bản giao nhận 02 bản, hai bên ký, mỗi bên giữ 01 bản | Đầu mối | Biên bản |
| B11 | **Lưu:** giữ bản gốc đoạn đã trích xuất và giá trị băm theo Chính sách lưu trữ, xóa (dòng 10); bảo mật thông tin về yêu cầu, không thông báo cho người trong video nếu cơ quan yêu cầu giữ bí mật | Đầu mối | Sổ giữ lại dữ liệu |
| B12 | **Đóng hồ sơ:** khi cơ quan thông báo kết thúc hoặc khi rà soát định kỳ không còn cần, xóa bản gốc đã giữ và lập biên bản xóa | Nhân sự BVDLCN | Biên bản xóa |

**3. Yêu cầu từ bên thứ ba không phải cơ quan nhà nước**

Yêu cầu của công ty bảo hiểm, đối tác, chủ tòa nhà, luật sư, báo chí hoặc người không có trong video **không** thực hiện theo Quy trình này. Đầu mối trả lời: Công ty chỉ cung cấp khi có đồng ý của người có trong hình ảnh, hoặc theo yêu cầu bằng văn bản của cơ quan nhà nước có thẩm quyền; và chuyển nhân sự bảo vệ dữ liệu cá nhân xem xét. Người có trong video tự yêu cầu thì thực hiện theo Quy trình tiếp nhận yêu cầu của chủ thể dữ liệu.

**4. Nhà cung cấp dịch vụ** *(M2–M4)*

4.1. Khi dữ liệu nằm trên nền tảng của {{TEN_NHA_CUNG_CAP}}, đầu mối gửi yêu cầu trích xuất bằng văn bản kèm bản sao văn bản của cơ quan, nêu phạm vi và thời hạn.

4.2. Nhà cung cấp trực tiếp nhận yêu cầu của cơ quan nhà nước đối với dữ liệu của Công ty phải báo ngay cho Công ty, trừ khi pháp luật hoặc cơ quan yêu cầu giữ bí mật.

| **Nơi nhận:**<br/>- Bộ phận bảo vệ, lễ tân, quản trị hệ thống;<br/>- {{NHAN_SU_BVDLCN_KH}};<br/>- {{TEN_NHA_CUNG_CAP}} (M2–M4);<br/>- Lưu: VT. | **{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: ......./BB-{{VIET_TAT_KH}} | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>BIÊN BẢN</b><br/><b>Giao nhận dữ liệu video, hình ảnh, dữ liệu nhận diện</b></p>

*Căn cứ văn bản số ................ ngày ........ của ........................................ về việc đề nghị cung cấp dữ liệu.*

Hôm nay, hồi ...... giờ ...... ngày ...... tháng ...... năm ......, tại {{DIA_DIEM_LAP_DAT}}, chúng tôi gồm:

**Bên giao:** {{TEN_KHACH_HANG}}

- Ông/bà ........................................ — chức vụ ........................ (đầu mối)
- Ông/bà ........................................ — quản trị hệ thống

**Bên nhận:** ........................................ *(tên cơ quan)*

- Ông/bà ........................................ — chức vụ ........................
- Giấy giới thiệu, giấy tờ công tác số ........................

Bên giao đã giao cho Bên nhận dữ liệu sau:

| # | Camera, thiết bị | Vị trí | Từ … đến … (ngày, giờ) | Loại dữ liệu | Tên tệp | Dung lượng | Giá trị băm SHA-256 |
|---|---|---|---|---|---|---|---|
| 1 | | | | ☐ Video ☐ Ảnh ☐ Nhật ký ra vào ☐ Biển số ☐ Dữ liệu khuôn mặt | | | |

- Hình thức: ☐ Bản gốc ☐ Đã làm mờ người không liên quan
- Phương tiện giao: ☐ Thiết bị lưu trữ mã hóa số ........ ☐ Đĩa ghi một lần ☐ Kênh điện tử: ........
- Mã hóa: ☐ Có — mật khẩu giao riêng qua ........ ☐ Không (dữ liệu không chứa dữ liệu khuôn mặt)
- Thời điểm trên dữ liệu: ☐ Đồng bộ NTP ☐ Lệch ........ so với giờ chuẩn
- Bên giao giữ lại bản gốc và giá trị băm để đối chiếu khi cần.

Ý kiến của các bên (nếu có): ...........................................................................

Biên bản lập thành 02 bản có giá trị như nhau, mỗi bên giữ 01 bản.

| **ĐẠI DIỆN BÊN GIAO**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/>........................................ | **ĐẠI DIỆN BÊN NHẬN**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/>........................................ |
|:---:|:---:|

---

<p align="center"><b>SỔ THEO DÕI YÊU CẦU CUNG CẤP DỮ LIỆU CAMERA CỦA CƠ QUAN NHÀ NƯỚC</b></p>

| Mã | Thời điểm nhận | Cơ quan, cán bộ | Số, ngày văn bản | Vụ việc (tóm tắt) | Phạm vi yêu cầu | Đã giữ nguyên dữ liệu (B2) | Xác minh (cách, người) | Phạm vi đã giao | Làm mờ? | Số biên bản giao nhận | Ngày giao | Ngày xóa bản gốc |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CAM-{{NAM}}-001 | | | | | | ☐ | | | ☐ | | | |

## Hướng dẫn điền

| Chỗ cần điền | Cách điền |
|---|---|
| `{{DAU_MOI_CUNG_CAP_CQCN}}` | Chức danh người tiếp nhận, ví dụ "Trưởng bộ phận an ninh" — nên trùng đầu mối QT-YC nếu khách hàng đã có |
| `{{CHUC_DANH_PHE_DUYET_TRICH_XUAT}}` | Giống K3 Điều 8, K4 mục 4 |
| Giá trị băm | Tính trên tệp **sau cùng** đã giao (sau làm mờ, nếu có). Công cụ: chức năng xuất có băm của VMS, hoặc lệnh `sha256sum` / `certutil -hashfile <tệp> SHA256` |
| Sổ theo dõi | Nếu đã có Sổ theo dõi QT-YC: thêm các cột riêng của K9 vào sổ đó, mã loại "CAM" |

Đào tạo bảo vệ, lễ tân: **không** tự cho xem, không tự trích xuất, không gửi video qua điện thoại theo đề nghị bằng lời; mời cán bộ gặp đầu mối; báo quản trị hệ thống giữ nguyên dữ liệu.

## Bằng chứng cần lưu

| Bằng chứng | Mục đích |
|---|---|
| Văn bản yêu cầu của cơ quan (bản sao) | Chứng minh thuộc ngoại lệ NĐ 330 Đ71.2.b |
| Biên bản giao nhận; biên bản xem tại chỗ (nếu có) | Như trên; chứng minh phạm vi đã giao |
| Nhật ký trích xuất, bảng giá trị băm, bản gốc được giữ | Bảo toàn, đối chiếu |
| Sổ theo dõi | Tổng hợp, kiểm tra nội bộ |
| Biên bản xóa bản gốc khi kết thúc | Không lưu quá mục đích (Luật 91 Đ3.3) |
