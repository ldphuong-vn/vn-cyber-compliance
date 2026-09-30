# Mẫu Quy trình vận hành điểm kiểm soát ra vào bằng nhận diện khuôn mặt (K12)

> **Căn cứ:** Luật 91/2025/QH15 Đ3.3, Đ9, Đ10, Đ17.1, Đ31.4.a; NĐ 356/2025/NĐ-CP Đ5.2, Đ6.2, Đ7.2, Đ10.3, Đ10.6; NĐ 330/2026/NĐ-CP Đ39.1.b, Đ43.1, Đ48.2, Đ52.3, Đ67.2.b, Đ67.3.b, Đ70.1.c–d; Luật 134/2025/QH15 Đ4.2 · **Đối chiếu văn bản gốc:** 30/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Mã tài liệu:** K12. **Ai ban hành:** khách hàng (bên kiểm soát dữ liệu), bằng quyết định của người có thẩm quyền, trước khi mở bàn đăng ký. **Dùng khi:** địa điểm có cổng kiểm soát ra vào bằng khuôn mặt, người được đăng ký gồm nhân viên, người lao động của đơn vị đối tác và khách. Tình huống đầy đủ tại [`s1-ho-so-tinh-huong-dia-diem-nhieu-don-vi.md`](s1-ho-so-tinh-huong-dia-diem-nhieu-don-vi.md).

K12 là phần **việc hằng ngày** tại địa điểm. Các văn bản khác quy định **điều gì** phải làm; K12 quy định **ai làm, lúc nào, ghi vào đâu**:

| Việc | Văn bản gốc | K12 |
|---|---|---|
| Xin đồng ý, cho rút lại | K2 | Mục 3, mục 5 |
| Nhận danh sách, ảnh từ đơn vị đối tác | K11 | Mục 3.2, mục 3.3 |
| Thời hạn xóa | K4 | Mục 5 |
| Yêu cầu của người lao động, khách | K5 | Mục 5.3 |
| Độ chính xác, chế độ so khớp | B3, K13 | Mục 4, mục 6 |
| Sự cố | K7 | Mục 9 |

### Rủi ro phạt (mức cho tổ chức)

| Hành vi | Mức phạt | Căn cứ |
|---|---|---|
| Đăng ký khuôn mặt khi chưa có đồng ý; không chứng minh được đồng ý | 30–50 triệu | NĐ 330 Đ43.1 |
| Không cho từ chối xử lý tự động (không có phương thức thay thế dùng được) | 50–70 triệu | NĐ 330 Đ67.2.b |
| Kết quả tự động bất lợi không cho người xem xét lại | 70–100 triệu | NĐ 330 Đ67.3.b |
| Không bảo đảm tính chính xác; không chỉnh sửa kịp thời khi phát hiện sai | 20–40 triệu | NĐ 330 Đ39.1.b |
| Không hạn chế quyền truy cập, không có hệ thống theo dõi phòng ngừa xâm phạm dữ liệu sinh trắc học | 50–70 triệu | NĐ 330 Đ70.1.d |
| Nhận ảnh qua kênh không mã hóa | 50–80 triệu | NĐ 330 Đ52.3 |

---

| **{{TEN_KHACH_HANG_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>QUY TRÌNH</b><br/><b>Vận hành điểm kiểm soát ra vào bằng nhận diện khuôn mặt tại {{DIA_DIEM_LAP_DAT}}</b><br/><i>(Ban hành kèm theo Quyết định số {{SO_VB}}/QĐ-{{VIET_TAT_KH}} ngày ... tháng ... năm ... của {{CHUC_DANH_NGUOI_KY}})</i></p>

Mã quy trình: **QT-KSRV** · Đầu mối: {{NHAN_SU_BVDLCN_KH}} · Phối hợp: bộ phận quản lý ra vào, bảo vệ, quản trị hệ thống, đầu mối các đơn vị đối tác; *(khi hỗ trợ kỹ thuật)* {{TEN_NHA_CUNG_CAP}}.

**1. Phạm vi**

1.1. Quy trình áp dụng tại các điểm kiểm soát ra vào của {{DIA_DIEM_LAP_DAT}} dùng hệ thống {{TEN_SAN_PHAM}} (sau đây gọi là Hệ thống), máy chủ đặt tại {{VI_TRI_MAY_CHU}}.

1.2. Người được đăng ký gồm: nhân viên của Công ty; người lao động của các đơn vị đối tác làm việc tại địa điểm; khách.

1.3. Mục đích xử lý: kiểm soát ra vào; tổng hợp ngày có mặt để đối chiếu với đơn vị đối tác. Không dùng Hệ thống cho mục đích khác.

**2. Phân công**

| Vai trò | Người, bộ phận | Việc chính |
|---|---|---|
| Đầu mối bảo vệ dữ liệu cá nhân | {{NHAN_SU_BVDLCN_KH}} | Duyệt danh sách người được cấp tài khoản; tiếp nhận yêu cầu, rút lại đồng ý; theo dõi thời hạn xóa; báo cáo sự cố |
| Bàn đăng ký | {{BO_PHAN_DANG_KY}} | Đối chiếu danh sách, phát và thu phiếu đồng ý, chụp ảnh, cấp thẻ hoặc mã QR, ghi Sổ theo dõi |
| Bảo vệ tại cổng | {{BO_PHAN_BAO_VE}} | Xử lý trường hợp không nhận diện được, nhận nhầm, người bị khóa quyền; ghi lượt ra vào thủ công |
| Quản trị hệ thống | {{QUAN_TRI_HE_THONG_KH}} | Tài khoản, phân quyền, ngưỡng, danh sách theo cổng; khóa quyền, xóa dữ liệu; thống kê từ chối nhầm; mở phiên hỗ trợ cho nhà cung cấp |
| Đầu mối đơn vị đối tác | Theo thỏa thuận chuyển giao với từng đơn vị | Gửi danh sách đăng ký, thông báo biến động; nhận bảng tổng hợp |
| Nhà cung cấp | {{TEN_NHA_CUNG_CAP}} | Hỗ trợ kỹ thuật theo phiếu hỗ trợ; đo thử độ chính xác |

Người được giao việc tại bàn đăng ký, quản trị hệ thống dùng **tài khoản riêng**, có cam kết bảo mật dữ liệu cá nhân, chỉ có quyền đủ cho việc được giao.

**3. Đăng ký**

3.1. **Nguyên tắc chung**

a) Mọi người có tên trong danh sách được cấp **{{thẻ/mã QR}}** để ra vào, không phụ thuộc việc có đăng ký khuôn mặt hay không.

b) Chỉ đăng ký khuôn mặt khi đã có phiếu đồng ý hợp lệ, đúng mục đích, đã ký. Không đăng ký trước rồi xin đồng ý sau. Im lặng không phải là đồng ý.

c) Không chụp, không lưu giấy tờ tùy thân cho mục đích kiểm soát ra vào; xem để đối chiếu khi cần rồi trả lại.

d) Mỗi lần đăng ký, thay đổi, khóa, xóa đều ghi vào Sổ theo dõi (Phụ lục 1).

3.2. **Người lao động của đơn vị đối tác**

| Bước | Việc | Người thực hiện |
|---|---|---|
| B1 | Kiểm tra đơn vị đối tác đã ký thỏa thuận chuyển giao dữ liệu. Chưa ký thì chưa nhận danh sách | Đầu mối bảo vệ dữ liệu cá nhân |
| B2 | Nhận danh sách đăng ký qua kênh đã thỏa thuận; kiểm tra chỉ có các trường đã thỏa thuận, không kèm giấy tờ tùy thân | Bàn đăng ký |
| B3 | Người lao động đến bàn đăng ký; đối chiếu với danh sách; phát phiếu thông báo và đồng ý, giải thích; người lao động tự chọn và ký, **nộp trực tiếp** cho bàn đăng ký | Bàn đăng ký |
| B4 | Cấp {{thẻ/mã QR}}; gán quyền theo cổng, khu vực và **ngày hết hạn** bằng ngày dự kiến kết thúc trong danh sách | Bàn đăng ký |
| B5 | Nếu đồng ý mục đích kiểm soát ra vào bằng khuôn mặt: chụp ảnh tại chỗ theo tiêu chuẩn; kiểm tra chất lượng; tạo đặc trưng khuôn mặt; xử lý ảnh gốc theo chính sách lưu trữ | Bàn đăng ký |
| B6 | Ghi lựa chọn về bảng tổng hợp có tên vào Hệ thống | Bàn đăng ký |
| B7 | Lưu phiếu đã ký (giấy: tủ có khóa; điện tử: thư mục có phân quyền); ghi Sổ theo dõi | Bàn đăng ký |

3.3. **Ảnh do đơn vị đối tác gửi** *(chỉ khi người lao động chọn cách này trên phiếu)*

a) Chỉ nhận qua kênh đã thỏa thuận, tệp được mã hóa; không nhận qua ứng dụng nhắn tin, mạng xã hội, thư điện tử không mã hóa. Nhận qua kênh khác thì không dùng, xóa và báo đơn vị đối tác gửi lại.

b) Đối chiếu từng ảnh với phiếu đã ký của đúng người đó; ảnh của người chưa có phiếu thì không đăng ký và xóa.

c) Sau khi đăng ký, xác nhận với đơn vị đối tác và xóa tệp khỏi nơi trung chuyển trong thời hạn đã thỏa thuận; ghi Sổ theo dõi.

3.4. **Nhân viên của Công ty:** đăng ký theo phiếu dành cho người lao động và quy định giám sát tại nơi làm việc của Công ty; các bước như 3.2 B3–B7.

3.5. **Khách:** đăng ký tại {{kiosk/quầy lễ tân}} theo phiếu dành cho khách; đặc trưng khuôn mặt tự động xóa sau {{THOI_HAN_LUU_TEMPLATE_KHACH}}. Khách không đồng ý được cấp thẻ khách.

**4. Tại cổng ra vào**

| Trường hợp | Xử lý | Ghi nhận |
|---|---|---|
| Nhận diện thành công | Cổng mở | Tự động |
| Không nhận diện được sau {{SO_LAN_THU_LAI}} lần thử | Người đó dùng {{thẻ/mã QR}}; bảo vệ đối chiếu với ảnh đăng ký hoặc danh sách. Không coi là vắng mặt, không lập biên bản vi phạm | Lượt ra vào vẫn được ghi (thẻ, mã QR hoặc bảo vệ nhập) để bảng tổng hợp không thiếu |
| Người đó thường xuyên không được nhận diện | Mời đăng ký lại ảnh; nếu vẫn lỗi, dùng thẻ, mã QR | Sổ theo dõi |
| Hệ thống ghi nhận nhầm sang người khác | Bảo vệ báo quản trị hệ thống; sửa nhật ký; kiểm tra ngưỡng, chế độ so khớp; nếu lặp lại, đo thử lại | Sổ theo dõi; phiếu sai sót |
| Nghi dùng ảnh, video giả để qua cổng | Không cho qua; xử lý theo nội quy an ninh của địa điểm | Ảnh sự kiện lưu theo chính sách lưu trữ |
| Người không có trong danh sách | Hướng dẫn liên hệ bàn đăng ký hoặc đầu mối đơn vị đối tác | Không lưu thêm ảnh ngoài ảnh sự kiện; không đưa vào danh sách theo dõi riêng |
| Người đã bị khóa quyền (thôi làm việc, hết hạn) | Không mở lại tại cổng; liên hệ đơn vị đối tác. Chỉ mở lại khi có danh sách bổ sung | Sổ theo dõi |

Kết quả nhận diện không tự động dẫn tới xử phạt, trừ công. Mọi kết quả bất lợi được người có thẩm quyền xem xét lại khi người liên quan yêu cầu.

**5. Thay đổi, khóa quyền, xóa dữ liệu**

5.1. **Người lao động đơn vị đối tác thôi, tạm ngừng làm việc:** khi nhận thông báo biến động, quản trị hệ thống **khóa quyền ngay** và xóa đặc trưng khuôn mặt trong {{SO_NGAY_XOA_KHI_ROI_DIA_DIEM}} ngày. Hệ thống báo người không ra vào liên tục {{SO_NGAY_KHONG_RA_VAO}} ngày; bàn đăng ký xác nhận với đơn vị đối tác rồi xóa.

5.2. **Hết hạn quyền:** đến ngày hết hạn tại bước B4 mà không có gia hạn thì quyền tự khóa; xử lý như 5.1.

5.3. **Rút lại sự đồng ý, yêu cầu của người được đăng ký:** tiếp nhận theo quy trình tiếp nhận yêu cầu của chủ thể dữ liệu. Rút lại sự đồng ý: phản hồi trong 02 ngày làm việc; ngừng nhận diện, xóa đặc trưng khuôn mặt trong 15 ngày; chuyển sang {{thẻ/mã QR}}; rút lại đồng ý bảng tổng hợp có tên thì bỏ tên khỏi bảng từ kỳ tiếp theo.

5.4. **Nhân viên của Công ty nghỉ việc:** xóa đặc trưng khuôn mặt trong {{SO_NGAY_XOA_KHI_NGHI_VIEC}} ngày kể từ ngày chấm dứt hợp đồng lao động.

5.5. **Chấm dứt hợp đồng với một đơn vị đối tác:** xóa toàn bộ đặc trưng khuôn mặt của người lao động đơn vị đó trong thời hạn đã thỏa thuận; lập biên bản xóa gửi đơn vị đối tác.

5.6. Xóa phải tới mức không khôi phục được trên máy chủ, đầu đọc và bản sao lưu (khi hết vòng sao lưu).

**6. Đối chiếu, rà soát định kỳ**

Mỗi {{CHU_KY_DOI_CHIEU_DANH_SACH}}:

a) Đối chiếu danh sách đang có quyền trong Hệ thống với danh sách đang làm việc do từng đơn vị đối tác xác nhận; khóa người không còn làm việc.

b) Đối chiếu số người đã đăng ký khuôn mặt với số phiếu đồng ý; không có người đăng ký mà thiếu phiếu.

c) Thống kê theo từng cổng: tỷ lệ không nhận diện được, số lần nhận nhầm, số yêu cầu xem xét lại. Tỷ lệ bất thường tại một cổng: kiểm tra lắp đặt, ánh sáng. Số người trên một cổng vượt quy mô khuyến nghị của nhà cung cấp hoặc tỷ lệ lỗi tăng: đo thử lại độ chính xác.

d) Rà tài khoản quản trị, tài khoản bàn đăng ký; thu hồi tài khoản không còn dùng.

Kết quả ghi vào Biên bản rà soát (Phụ lục 2).

**7. Bảng tổng hợp ngày có mặt**

7.1. Lập theo {{CHU_KY_GUI_BANG_TONG_HOP}} cho từng đơn vị đối tác, gồm cả lượt ghi bằng thẻ, mã QR và lượt bảo vệ nhập thủ công.

7.2. Mặc định gửi bảng không gắn tên (số người, số lượt theo ngày, theo tổ, nhóm; tổ, nhóm quá nhỏ được gộp). Bảng có tên chỉ gồm người đã đồng ý.

7.3. Trước khi gửi làm căn cứ đối chiếu, thanh toán: công bố cho người lao động tra cứu ngày có mặt của mình trong {{THOI_HAN_KHIEU_NAI_KET_QUA}}; điều chỉnh các trường hợp được xem xét lại.

7.4. Gửi qua kênh đã thỏa thuận, chỉ tới đầu mối của đơn vị đối tác.

**8. Tài khoản và hỗ trợ kỹ thuật**

8.1. Không xuất ảnh, đặc trưng khuôn mặt ra khỏi Hệ thống; không dùng thiết bị cá nhân để chụp, lưu ảnh đăng ký.

8.2. Thay đổi ngưỡng, chế độ so khớp, danh sách theo cổng chỉ do quản trị hệ thống thực hiện, có ghi nhật ký và lý do.

8.3. Nhà cung cấp chỉ truy cập theo phiếu hỗ trợ đã được phê duyệt; quản trị hệ thống mở, đóng phiên và theo dõi.

**9. Sự cố**

Phát hiện lộ, mất, truy cập trái phép dữ liệu khuôn mặt: báo ngay đầu mối bảo vệ dữ liệu cá nhân; giữ nguyên nhật ký; thực hiện quy trình thông báo sự cố (thông báo cơ quan chuyên trách và người bị ảnh hưởng trong 72 giờ); báo các đơn vị đối tác có người lao động bị ảnh hưởng.

| **Nơi nhận:**<br/>- Bàn đăng ký, bảo vệ, quản trị hệ thống;<br/>- {{NHAN_SU_BVDLCN_KH}};<br/>- Các đơn vị đối tác (mục 3, mục 7);<br/>- {{TEN_NHA_CUNG_CAP}} (mục 8);<br/>- Lưu: VT. | **{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

---

<p align="center"><b>PHỤ LỤC 1</b><br/><b>SỔ THEO DÕI ĐĂNG KÝ, KHÓA QUYỀN, XÓA DỮ LIỆU KHUÔN MẶT</b></p>

| STT | Ngày | Mã số tại địa điểm | Nhóm *(NV/ĐT/K)* | Đơn vị | Việc *(đăng ký/đăng ký lại/khóa/xóa)* | Lý do *(mới/thôi việc/hết hạn/rút đồng ý/không ra vào/kết thúc HĐ)* | Mã phiếu đồng ý | Cách đăng ký *(tại chỗ/ảnh đơn vị gửi)* | Người thực hiện |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |

*NV: nhân viên của Công ty; ĐT: người lao động của đơn vị đối tác; K: khách.*

<p align="center"><b>PHỤ LỤC 2</b><br/><b>BIÊN BẢN RÀ SOÁT ĐỊNH KỲ</b></p>

Kỳ rà soát: từ ....../....../...... đến ....../....../...... · Người rà soát: ......................................

| Nội dung | Kết quả | Việc đã làm |
|---|---|---|
| Số người đang có quyền / số người các đơn vị đối tác xác nhận đang làm việc | ...... / ...... | Đã khóa ...... người |
| Số người đã đăng ký khuôn mặt / số phiếu đồng ý | ...... / ...... | |
| Số người không ra vào liên tục {{SO_NGAY_KHONG_RA_VAO}} ngày | ...... | Đã xóa ...... người |
| Tỷ lệ không nhận diện được theo cổng | Cổng 1: ......% · Cổng 2: ......% | |
| Số lần nhận nhầm được phát hiện | ...... | |
| Số yêu cầu xem xét lại / số kết quả được sửa | ...... / ...... | |
| Tệp ảnh nhận từ đơn vị đối tác còn tồn tại nơi trung chuyển | ☐ Không còn ☐ Còn — đã xóa ngày ...... | |
| Tài khoản không còn dùng | ...... | Đã thu hồi ...... |
| Cần đo thử lại độ chính xác | ☐ Không ☐ Có — lý do: ...... | |

| **NGƯỜI RÀ SOÁT**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/> | **ĐẦU MỐI BẢO VỆ DỮ LIỆU CÁ NHÂN**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/><br/>**{{NHAN_SU_BVDLCN_KH}}** |
|:---:|:---:|

## Hướng dẫn điền

1. **Điểm kiểm soát chưa bố trí được bàn đăng ký:** giữ mục 3.3; nếu toàn bộ đăng ký tại chỗ, xóa mục 3.3.
2. **Không có khách đăng ký khuôn mặt:** xóa mục 3.5, chỉ cấp thẻ khách.
3. **Không gửi bảng tổng hợp cho đơn vị đối tác:** xóa mục 7 và cột liên quan ở phụ lục.
4. **Chu kỳ đối chiếu:** danh sách thay đổi hằng ngày thì đối chiếu hằng tuần; ổn định thì hằng tháng.
5. **Thời hạn tại mục 5** lấy từ chính sách lưu trữ (K4) và thỏa thuận chuyển giao (K11); hai văn bản phải ghi cùng một con số.
6. **Luật Trí tuệ nhân tạo:** mục 4 và câu cuối mục 4 là cơ chế con người giám sát, can thiệp đối với quyết định của hệ thống (Luật 134 Đ4.2), áp dụng cả khi hệ thống ở mức rủi ro thấp.

## Bằng chứng cần lưu

Quyết định ban hành K12; Sổ theo dõi (Phụ lục 1); biên bản rà soát định kỳ (Phụ lục 2); danh sách tài khoản và nhật ký thao tác; nhật ký lượt ra vào ghi thủ công; nhật ký thay đổi ngưỡng, chế độ so khớp; bằng chứng xóa tệp ảnh nhận qua chuyển giao.
