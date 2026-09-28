# Quy chế bảo đảm an ninh mạng (rút gọn cho hệ thống thông tin cấp độ 1, cấp độ 2)

> **Căn cứ:** Luật 116/2025/QH15 Đ10.1–10.3, Đ40.1.c; NĐ 331/2026/NĐ-CP Đ9.1, Đ10, Đ18.1, Đ18.4, Đ23–Đ25, Đ28, Đ30.2–30.7, Đ31–Đ33, Đ35–Đ36; NĐ 333/2026/NĐ-CP Đ16.6.c; NĐ 330/2026/NĐ-CP Đ7.1, Đ23.1.a; Luật 91/2025/QH15 Đ23.1; TCVN 14423:2026 mục 3, mục 4, Phụ lục A · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

> Dẫn chiếu TCVN 14423:2026 là **diễn giải tóm lược, không chép nguyên văn**; khi áp dụng phải đối chiếu bản chính thức (mua tại VSQI).

## Hướng dẫn sử dụng

**Khi nào dùng.** Tổ chức (điển hình doanh nghiệp vừa và nhỏ) chỉ có HTTT cấp độ 1–2 — ví dụ thư điện tử, intranet, kế toán – nhân sự, LAN/Wi-Fi/AD — và muốn **một** Quy chế chung cho mọi HTTT đó. Có HTTT từ cấp 3 trở lên hoặc cung cấp dịch vụ trên mạng viễn thông, Internet cho người dùng bên ngoài: dùng [Quy chế đầy đủ](../04-chinh-sach-quy-trinh/quy-che-bao-dam-anm.md).

**Vì sao phải ban hành dù là cấp 1–2 (C16).** Luật 116 Đ10.3 cho chủ quản cấp 1–2 lựa chọn biện pháp tại Đ10.2 "theo nhu cầu, khả năng", nhưng vẫn phải làm **đủ 6 nhiệm vụ** tại Đ10.1. NĐ 331 Đ30.7 yêu cầu Quy chế **được phê duyệt, ban hành trước khi Hồ sơ đề xuất cấp độ được phê duyệt** (không phân biệt cấp) và NĐ 330 Đ23.1.a phạt hành vi không ban hành quy định: tổ chức 40–60 triệu đồng (khung 20–30 triệu ghi trong điều là mức cá nhân; tổ chức gấp đôi — Đ7.1). Xem C16 tại [điểm cần đối chiếu](../00-tong-quan/diem-can-doi-chieu.md). Trình tự thời gian mẫu: QĐ phân công 40/2026 (01/10) → **Quy chế 41/2026 (05/10)** → hồ sơ (12/10) → phê duyệt cấp độ (26/10).

**Đã lược so với Quy chế đầy đủ, và vì sao:**

| Nội dung lược bỏ | Lý do |
|---|---|
| Các điều khoản [C3+]/[C4+]: kiểm thử xâm nhập, SIEM/EDR, phát triển ứng dụng an toàn, tách hệ thống theo NĐ 331 Đ30.8–30.9, tập huấn chuyên sâu (Luật 116 Đ34.2; NĐ 333 Đ24) | TCVN mục 3–4 không yêu cầu; Đ30.8–30.9 chỉ cấp 3–5 |
| Xác thực tài khoản người dùng dịch vụ, lưu dữ liệu tại Việt Nam, tiếp nhận yêu cầu gỡ bỏ/cung cấp thông tin (Luật 116 Đ25–Đ26, Đ41; NĐ 333 Đ16, Đ19–Đ20) | Chỉ áp dụng khi cung cấp dịch vụ trên mạng; kịch bản mẫu là HTTT nội bộ. Nếu có: bổ sung từ Quy chế đầy đủ (Điều 25.7, 26.3, 36, 37) |
| Chương BVDLCN riêng, phụ lục quy trình/biểu mẫu, danh sách SLA vá lỗi, RPO/RTO | Gộp thành một khoản; quy trình sự cố dùng [08-quy-trinh-su-co-rut-gon.md](08-quy-trinh-su-co-rut-gon.md) |
| Bảng tham số 5 cấp | Chỉ giữ cột Cấp 1, Cấp 2 (Điều 15) |

Vẫn giữ đủ: 7 nhóm quản lý NĐ 331 Đ30.3.a–g (Điều 9–13, 16, 17), 4 nhóm kỹ thuật Đ30.4.a–d (Điều 14), 6 nhiệm vụ Luật 116 Đ10.1 (Điều 4). An ninh vật lý không thuộc yêu cầu cơ bản (NĐ 331 Đ30.2) → chỉ một điều khuyến nghị (Điều 18).

**Chọn tham số Cấp 1/Cấp 2 (Điều 15).** Mỗi HTTT áp dụng cột tương ứng cấp độ được phê duyệt (Phụ lục). Khi các HTTT dùng chung hạ tầng (LAN, AD, máy chủ), nên áp dụng **cột Cấp 2 cho toàn bộ** — đơn giản và phù hợp nguyên tắc dùng chung giải pháp (NĐ 331 Đ30.5.a). Được chọn chặt hơn; chọn lỏng hơn chỉ với các giá trị TCVN ghi là cấu hình "có thể" theo đánh giá rủi ro (khóa phiên 3.5.2.2/4.5.2.2, mật khẩu 3.6.2.2 b/4.6.2.2 b) và phải có lập luận lưu cùng hồ sơ đánh giá rủi ro.

---

| **{{TEN_TO_CHUC_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{C12_SO_QD_QUY_CHE}} | *{{DIA_DANH}}, ngày {{C12_NGAY_BAN_HANH_QUY_CHE}}* |

<p align="center"><b>QUYẾT ĐỊNH</b><br/><b>Ban hành Quy chế bảo đảm an ninh mạng hệ thống thông tin cấp độ 1, cấp độ 2 của {{TEN_TO_CHUC}}</b></p>

<p align="center"><b>{{CHUC_DANH_NGUOI_KY_IN_HOA}} {{TEN_TO_CHUC_IN_HOA}}</b></p>

*Căn cứ Luật An ninh mạng số 116/2025/QH15;*

*Căn cứ Nghị định số 331/2026/NĐ-CP của Chính phủ về bảo vệ an ninh mạng đối với hệ thống thông tin;*

*Căn cứ Tiêu chuẩn quốc gia TCVN 14423:2026 An ninh mạng – Hệ thống thông tin – Yêu cầu cơ bản;*

*Căn cứ {{CAN_CU_THAM_QUYEN}};*

*Căn cứ Quyết định số {{C12_SO_QD_PHAN_CONG}} ngày {{C12_NGAY_QD_PHAN_CONG}} về phân công nhiệm vụ bảo đảm an ninh mạng;*

*Theo đề nghị của Trưởng {{TEN_DON_VI_CHUYEN_TRACH_ANM}}.*

<p align="center"><b>QUYẾT ĐỊNH:</b></p>

**Điều 1.** Ban hành kèm theo Quyết định này Quy chế bảo đảm an ninh mạng hệ thống thông tin cấp độ 1, cấp độ 2 của {{TEN_TO_CHUC}}.

**Điều 2.** Quyết định này có hiệu lực kể từ ngày ký.

**Điều 3.** {{C12_DON_VI_THI_HANH}} chịu trách nhiệm thi hành Quyết định này.

| **Nơi nhận:**<br/>- Như Điều 3;<br/>- Hội đồng quản trị (để báo cáo);<br/>- Lưu: VT, {{TEN_DON_VI_CHUYEN_TRACH_ANM}}. | **{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

---

<p align="center"><b>QUY CHẾ</b><br/><b>Bảo đảm an ninh mạng hệ thống thông tin cấp độ 1, cấp độ 2 của {{TEN_TO_CHUC}}</b><br/><i>(Ban hành kèm theo Quyết định số {{C12_SO_QD_QUY_CHE}} ngày {{C12_NGAY_QD_QUY_CHE}} của {{CHUC_DANH_NGUOI_KY}})</i></p>

### Chương I. QUY ĐỊNH CHUNG

**Điều 1. Phạm vi điều chỉnh, đối tượng áp dụng**

1. Quy chế này quy định việc bảo đảm an ninh mạng (ANM) trong thiết kế, xây dựng, quản lý, vận hành, sử dụng, nâng cấp, kết thúc, hủy bỏ các hệ thống thông tin (HTTT) cấp độ 1, cấp độ 2 thuộc chủ quản {{TEN_TO_CHUC}} (Công ty) nêu tại Phụ lục.
2. Áp dụng đối với các đơn vị, người lao động của Công ty và nhà cung cấp, đối tác có kết nối, truy cập hoặc xử lý dữ liệu của các HTTT này (thông qua hợp đồng, cam kết).

**Điều 2. Giải thích từ ngữ, chữ viết tắt**

1. *Đơn vị chuyên trách ANM* là {{TEN_DON_VI_CHUYEN_TRACH_ANM}}; *đơn vị vận hành* là {{TEN_DON_VI_VAN_HANH}}; *bộ phận đánh giá độc lập* là {{DON_VI_DANH_GIA_DOC_LAP}} (khoản 2 Điều 3, Điều 5, điểm c khoản 2 Điều 31 Nghị định 331).
2. *Sự cố ANM* hiểu theo khoản 17 Điều 2 Luật An ninh mạng. *Dữ liệu quan trọng* là dữ liệu mức "Hạn chế" theo khoản 1 Điều 9 Quy chế này.
3. *Luật 116* là Luật An ninh mạng số 116/2025/QH15; *Nghị định 331* là Nghị định số 331/2026/NĐ-CP; *TCVN 14423* là TCVN 14423:2026.

**Điều 3. Nguyên tắc**

1. Bảo đảm ANM thường xuyên, liên tục từ thiết kế đến hủy bỏ; tuân thủ tiêu chuẩn, quy chuẩn kỹ thuật; dùng chung giải pháp bảo vệ giữa các HTTT khi phù hợp (khoản 1, 2 Điều 6; điểm a khoản 5 Điều 30 Nghị định 331).
2. Mỗi HTTT đáp ứng tối thiểu yêu cầu tại TCVN 14423 mục 3 (cấp độ 1) hoặc mục 4 (cấp độ 2). Không áp dụng một yêu cầu phải có biện pháp thay thế được đơn vị chuyên trách ANM chấp thuận bằng văn bản.

**Điều 4. Nhiệm vụ bảo vệ ANM**

Công ty thực hiện đầy đủ 6 nhiệm vụ tại khoản 1, 3 Điều 10 Luật 116: (a) xác định cấp độ HTTT — Điều 22; (b) đánh giá, quản lý rủi ro — Điều 16; (c) đôn đốc, giám sát, kiểm tra — Điều 20; (d) triển khai biện pháp bảo vệ — Chương III; (đ) chế độ báo cáo — Điều 21; (e) tuyên truyền, nâng cao nhận thức — Điều 11.

### Chương II. TỔ CHỨC, TRÁCH NHIỆM

**Điều 5. Chủ quản HTTT**

{{CHUC_DANH_NGUOI_DUNG_DAU}} trực tiếp chỉ đạo, chịu trách nhiệm trước pháp luật về công tác bảo vệ ANM; bố trí bộ phận, nhân sự chuyên trách phù hợp cấp độ; bảo đảm kinh phí hằng năm; chịu trách nhiệm về tính trung thực của kết quả đánh giá (khoản 1, 2 Điều 31 Nghị định 331).

**Điều 6. Đơn vị chuyên trách ANM**

1. Tham mưu, tổ chức thực thi, đôn đốc, kiểm tra, giám sát công tác bảo vệ ANM; phối hợp lực lượng chuyên trách bảo vệ ANM; phối hợp đơn vị vận hành dò quét lỗ hổng, quản lý rủi ro (Điều 32 Nghị định 331).
2. Thẩm định, phê duyệt Hồ sơ đề xuất cấp độ HTTT cấp độ 1, 2 và báo cáo chủ quản (khoản 1 Điều 18 Nghị định 331) theo phân cấp tại Quyết định số {{C12_SO_QD_PHAN_CONG}}.
3. Là đầu mối tiếp nhận, điều phối ứng phó sự cố; đầu mối chính và dự phòng theo Quyết định số {{C12_SO_QD_PHAN_CONG}}.

**Điều 7. Đơn vị vận hành**

Lập Hồ sơ đề xuất cấp độ; triển khai biện pháp theo phương án đã phê duyệt; định kỳ đánh giá hiệu quả biện pháp, báo cáo chủ quản; phối hợp khắc phục điểm yếu, lỗ hổng; quản lý danh mục tài sản, tài khoản (Điều 33 Nghị định 331).

**Điều 8. Người sử dụng**

1. Chỉ dùng tài khoản, thiết bị, phần mềm được cấp phép; giữ bí mật mật khẩu, không dùng chung tài khoản; không tắt phần mềm phòng chống mã độc; không kết nối thiết bị cá nhân chưa đăng ký; không đưa dữ liệu "Nội bộ", "Hạn chế" ra ngoài khi chưa được phép.
2. Tham gia đào tạo nhận thức hằng năm; báo ngay dấu hiệu sự cố qua {{KENH_BAO_SU_CO_NOI_BO}}.

### Chương III. BIỆN PHÁP QUẢN LÝ VÀ KỸ THUẬT

**Điều 9. Chính sách ANM** *(điểm a khoản 3 Điều 30 Nghị định 331)*

1. Thông tin được phân loại theo khoản 1 Điều 9 Nghị định 331 và theo 3 mức nội bộ: Công khai / Nội bộ / Hạn chế (TCVN 14423 mục 4.4.2.1). Không xử lý thông tin bí mật nhà nước trên các HTTT thuộc Quy chế này.
2. Hệ thống quy định ANM gồm Quy chế này, quy trình ứng phó sự cố và các tài liệu kỹ thuật (danh mục tài sản, cấu hình chuẩn, sơ đồ mạng); rà soát, cập nhật ít nhất 01 lần/năm hoặc khi có thay đổi ảnh hưởng.

**Điều 10. Tổ chức bảo đảm ANM** *(điểm b khoản 3 Điều 30)*

Phân công theo Chương II và Quyết định số {{C12_SO_QD_PHAN_CONG}}. Lực lượng ứng phó sự cố gồm 01 người chủ chốt và ít nhất 01 người dự phòng, có phân vai rõ (TCVN 14423 mục 3.15.2.1, 4.15.2.1).

**Điều 11. Bảo đảm nguồn nhân lực** *(điểm c khoản 3 Điều 30; khoản 3 Điều 31 Nghị định 331)*

1. Có nhân sự (cấp 1) hoặc bộ phận (cấp 2) phụ trách vận hành, quản trị, bảo vệ ANM, có trình độ phù hợp và ký cam kết bảo mật trong và sau khi nghỉ việc; với cấp 2, bảo đảm độc lập chuyên môn giữa vận hành và bảo vệ ANM (TCVN 14423 mục 3.13, 4.13).
2. Đào tạo nhận thức ANM cho toàn bộ người dùng; tuyên truyền, phổ biến; diễn tập ứng phó sự cố nội bộ 01 lần/năm.
3. Khi người lao động nghỉ việc, chuyển công tác: thu hồi thẻ, thiết bị, dữ liệu; vô hiệu hóa mọi quyền ra vào, truy cập, quản trị ngay trong ngày (TCVN 14423 mục 4.13.2.2).

**Điều 12. Quản lý thiết kế, xây dựng** *(điểm d khoản 3 Điều 30)*

1. HTTT xây mới, mở rộng, nâng cấp: lồng ghép thuyết minh đề xuất cấp độ vào hồ sơ dự án/kế hoạch thuê dịch vụ (Điều 19 Nghị định 331); triển khai đầy đủ phương án ANM đã phê duyệt và kiểm thử, nghiệm thu trước khi vận hành (khoản 6 Điều 30; TCVN 14423 mục 3.12.2.3).
2. Phần mềm thuê phát triển cho HTTT cấp 2: hợp đồng có cam kết bảo mật; yêu cầu bàn giao mã nguồn hoặc bằng chứng đánh giá an toàn độc lập (TCVN 14423 mục 4.3.2.3).

**Điều 13. Quản lý vận hành** *(điểm đ khoản 3 Điều 30)*

1. **Tài sản:** danh mục phần cứng, phần mềm, tài sản thông tin có người chịu trách nhiệm; chỉ cài phần mềm được phê duyệt, ngoại lệ phải có biện pháp kiểm soát; phát hiện, xử lý tài sản trái phép (TCVN 14423 mục 3.2–3.4, 4.2–4.4).
2. **Tài khoản:** danh sách mọi tài khoản quản trị, tác nghiệp, kỹ thuật, dịch vụ (nếu có); cấp, thay đổi, thu hồi quyền theo yêu cầu được phê duyệt; đổi hoặc vô hiệu tài khoản mặc định; tách tài khoản quản trị với tài khoản tác nghiệp (mục 3.6, 4.6).
3. **Lỗ hổng, bản vá:** quy trình phát hiện, đánh giá mức nghiêm trọng, khắc phục theo ưu tiên và kiểm tra lại; cấp 2: có phương án vá cho mọi tài sản, kiểm thử và chuẩn bị phương án khôi phục trước khi vá hệ thống có dữ liệu quan trọng (mục 3.7, 4.7).
4. **Nhà cung cấp:** danh sách, phân loại, văn bản phân định trách nhiệm (mục 3.14, 4.14); hợp đồng thuê dịch vụ quy định trách nhiệm quản trị dữ liệu, kiểm soát truy cập, bảo đảm ANM (điểm a khoản 3 Điều 5 Nghị định 331).
5. **Thay đổi:** mọi thay đổi cấu hình, hạ tầng được đăng ký, phê duyệt, có phương án hoàn tác (mục 3.12.2.2).

**Điều 14. Yêu cầu kỹ thuật tối thiểu** *(khoản 4 Điều 30 Nghị định 331)*

1. **An toàn mạng:** duy trì sơ đồ mạng; tường lửa có chức năng phòng chống xâm nhập (hoặc tương đương), cập nhật mẫu tấn công; dự phòng thiết bị mạng chính; chặn cổng, dịch vụ không cung cấp; truy cập từ xa qua VPN (hoặc tương đương) có xác thực. Cấp 2 thêm: phân vùng tối thiểu (máy chủ, DMZ cung cấp dịch vụ, không dây nếu có, nội bộ, biên); WAF nếu có ứng dụng web; giới hạn địa chỉ được phép quản trị; xác thực bổ sung và kiểm tra thiết bị trước khi truy cập từ xa (TCVN 14423 mục 3.12, 4.12).
2. **An toàn máy chủ, máy trạm:** cấu hình chuẩn tăng cường bảo mật, giao thức an toàn, tường lửa trên máy; cấp 2 tắt giao thức, dịch vụ không dùng và chống đăng nhập tự động trên tài sản xử lý dữ liệu quan trọng; phần mềm phòng chống mã độc bảo vệ thời gian thực, tự cập nhật; tắt tự chạy thiết bị lưu trữ ngoài (mục 3.5, 3.10, 4.5, 4.10).
3. **An toàn ứng dụng:** trình duyệt, dịch vụ thư điện tử trong danh sách được phép, còn hỗ trợ, được vá; lọc tên miền độc hại; khóa phiên, khóa đăng nhập sai theo Điều 15 (mục 3.9, 4.9).
4. **An toàn dữ liệu:** mã hóa thông tin xác thực khi lưu; cấp 2 mã hóa cả dữ liệu không công khai (trừ trường hợp có biện pháp tương đương); sao lưu theo loại dữ liệu với tần suất: {{C12_TAN_SUAT_SAO_LUU}}; bảo vệ bản sao lưu; cấp 2 lưu bản sao trên hạ tầng tách biệt, có định danh, phiên bản (mục 3.4.2.4, 3.11, 4.4.2.4, 4.11).
5. **Nhật ký:** ghi nhật ký truy cập và cảnh báo thiết bị bảo mật; đồng bộ thời gian (NTP); cấp 2 thêm nhật ký ứng dụng; nhật ký truy cập ghi tối thiểu nguồn, đích, tài khoản, thời điểm, hành vi; nhật ký cảnh báo ghi tối thiểu tên, thiết bị, mức độ, nguồn, loại, thời điểm. Công ty lưu nhật ký tối thiểu {{C12_THOI_GIAN_LUU_NHAT_KY}} (mục 3.8, 4.8).

**Điều 15. Tham số theo cấp độ**

| Tham số | Cấp 1 | Cấp 2 | Căn cứ TCVN 14423 |
|---|---|---|---|
| Khóa phiên: máy người dùng / phiên quản trị, thiết bị di động | ≤ 15 / ≤ 05 phút | ≤ 15 / ≤ 05 phút | 3.5.2.2, 4.5.2.2 |
| Khóa phiên phần mềm nghiệp vụ xử lý dữ liệu quan trọng | — | ≤ 15 phút | 4.5.2.2 |
| Đăng nhập sai trước khi khóa: máy xách tay, điện thoại / phần mềm nghiệp vụ dữ liệu quan trọng | ≤ 10 lần / — | ≤ 10 / ≤ 05 lần | 3.5.2.2, 4.5.2.2 |
| Độ dài mật khẩu: có MFA / không MFA (đủ 4 loại ký tự) | ≥ 08 / ≥ 14 ký tự | ≥ 08 / ≥ 14 ký tự | 3.6.2.2, 4.6.2.2 |
| Đổi mật khẩu tài khoản quản trị | 01 lần/02 tháng | 01 lần/02 tháng | 3.6.2.2, 4.6.2.2 |
| Thời hạn hiệu lực mật khẩu người dùng | tự chọn | {{C12_HIEU_LUC_MAT_KHAU}} | 4.6.2.2 |
| MFA: truy cập từ bên ngoài, bên thứ ba, Internet; tài khoản quản trị | bắt buộc | bắt buộc | 3.6.2.4, 4.6.2.4 |
| Vô hiệu tài khoản không hoạt động | 45 ngày | 45 ngày | 3.6.2.3, 4.6.2.3 |
| Rà soát tài khoản; kiểm tra phân quyền dữ liệu | 01 lần/năm | 01 lần/năm | 3.6.2.1, 3.4.2.1, 4.6.2.1, 4.4.2.1 |
| Kiểm kê tài sản; phát hiện phần cứng, phần mềm trái phép | 01 lần/năm | 01 lần/năm | 3.2, 3.3, 4.2, 4.3 |
| Rà quét lỗ hổng | 01 lần/năm | 01 lần/năm | 3.7.2.1, 4.7.2.1 |
| Vá hệ điều hành, ứng dụng máy người dùng | 01 lần/tháng | 01 lần/tháng | 3.7.2.2, 4.7.2.2 |
| Lưu nhật ký (tối thiểu) | tự chọn | 01 tháng (xem ghi chú) | 4.8.2.1 |
| Rà soát nhật ký | 01 lần/năm | 01 lần/năm | 3.8.2.1, 4.8.2.1 |
| Khôi phục thử bản sao lưu | {{CHU_KY_KHOI_PHUC_THU}} | {{CHU_KY_KHOI_PHUC_THU}} | 3.11.2.1, 4.11.2.1 |
| Cập nhật sơ đồ mạng | 01 lần/năm | 01 lần/năm | 3.12.2.1, 4.12.2.1 |
| Đào tạo nhận thức toàn bộ người dùng | 01 lần/năm | 01 lần/năm | 3.13.2.2, 4.13.2.2 |
| Cập nhật danh sách nhà cung cấp | 01 lần/năm | 01 lần/năm | 3.14.2, 4.14.2 |
| Cập nhật quy trình sự cố, xác minh danh bạ đầu mối | 01 lần/năm | 01 lần/năm | 3.15.2, 4.15.2 |
| Rà soát quy trình quản lý rủi ro và các quy định khác | 01 lần/năm | 01 lần/năm | 3.1, 4.1 và các mục "đánh giá, cập nhật" |

*Ghi chú: HTTT dùng để cung cấp dịch vụ trên mạng viễn thông, Internet, dịch vụ gia tăng trên không gian mạng: nhật ký hệ thống phải truy xuất được ít nhất 12 tháng (điểm c khoản 6 Điều 16 Nghị định số 333/2026/NĐ-CP), thay cho mức 01 tháng. "—": TCVN 14423 không yêu cầu ở cấp độ đó.*

**Điều 16. Quản lý rủi ro ANM** *(điểm e khoản 3 Điều 30; Điều 10 Nghị định 331)*

1. Đánh giá rủi ro khi xác định cấp độ lần đầu; khi thay đổi chức năng, phạm vi, đối tượng, loại thông tin, công nghệ; khi mở rộng, kết nối, chia sẻ dữ liệu; sau sự cố nghiêm trọng; theo yêu cầu cơ quan có thẩm quyền (khoản 2 Điều 10); nội dung tối thiểu theo khoản 3 Điều 10.
2. Quy trình gồm 4 bước: xác định, phân tích, đánh giá, xử lý rủi ro; rà soát 01 lần/năm (TCVN 14423 mục 3.1, 4.1). Rủi ro cao hơn cấp độ đã xác định: đề xuất cấp độ cao hơn (khoản 5 Điều 10). Lưu hồ sơ để cung cấp khi thanh tra, kiểm tra (khoản 6 Điều 10).

**Điều 17. Kết thúc vận hành, thanh lý, hủy bỏ** *(điểm g khoản 3 Điều 30)*

1. Đơn vị vận hành lập kế hoạch kết thúc gồm dữ liệu cần chuyển, lưu, xóa; tài khoản, kết nối, khóa mã cần thu hồi; thông báo bên liên quan; cập nhật Phụ lục và báo cáo năm. Đơn vị chuyên trách ANM thẩm tra, chủ quản phê duyệt.
2. Xóa sạch dữ liệu không khôi phục được trước khi thanh lý, chuyển giao, đổi mục đích thiết bị (TCVN 14423 mục 4.2.2.3; khuyến nghị cả cấp 1); lập biên bản. Kết thúc hợp đồng nhà cung cấp: thu hồi quyền, yêu cầu trả lại hoặc xóa dữ liệu có xác nhận.

**Điều 18. An ninh vật lý (khuyến nghị)**

Không thuộc yêu cầu cơ bản (khoản 2 Điều 30 Nghị định 331). Công ty khuyến nghị áp dụng TCVN 14423 Phụ lục A tại {{C12_VI_TRI_PHONG_MAY}}: kiểm soát ra vào, tủ rack cố định có nhãn, phòng cháy chữa cháy, nguồn điện ổn áp (A.1); với HTTT cấp 2 thêm camera, chống sét, báo cháy và chữa cháy tự động, điều hòa, UPS cho thiết bị mạng chính và máy chủ quan trọng (A.2).

### Chương IV. SỰ CỐ, KIỂM TRA, BÁO CÁO

**Điều 19. Ứng phó sự cố ANM**

1. Tiếp nhận, phân loại, xử lý theo quy trình ứng phó sự cố của Công ty. Đơn vị chuyên trách ANM báo cáo cơ quan chuyên trách của Bộ Công an: **thông báo ban đầu trong 24 giờ** với sự cố nghiêm trọng; **báo cáo nguyên nhân, phạm vi ảnh hưởng, biện pháp khắc phục trong 72 giờ** kể từ khi phát hiện; **báo cáo ngay** nếu có dấu hiệu xâm phạm an ninh quốc gia, trật tự, an toàn xã hội hoặc gián đoạn nghiêm trọng (điểm d khoản 2 Điều 31 Nghị định 331; điểm c khoản 1 Điều 40 Luật 116).
2. Vi phạm về bảo vệ dữ liệu cá nhân có thể gây tổn hại: {{NHAN_SU_BVDLCN}} thông báo cơ quan chuyên trách bảo vệ dữ liệu cá nhân chậm nhất 72 giờ kể từ khi phát hiện (khoản 1 Điều 23 Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15).
3. Với HTTT cấp 2: duy trì đầu mối liên hệ với cơ quan quản lý nhà nước về ANM và cơ quan điều hành Liên minh ứng phó, khắc phục sự cố ANM quốc gia (TCVN 14423 mục 4.15.2.1).

**Điều 20. Kiểm tra, tự đánh giá**

1. Kiểm tra, giám sát, đánh giá hiệu quả biện pháp: định kỳ hằng năm; thường xuyên qua giám sát; đột xuất khi có dấu hiệu vi phạm; theo yêu cầu cơ quan có thẩm quyền (điểm a khoản 5 Điều 28 Nghị định 331).
2. Tự đánh giá tổng thể hằng năm do {{DON_VI_DANH_GIA_DOC_LAP}} thực hiện, độc lập với đơn vị vận hành, theo biểu mẫu, tiêu chí do cơ quan có thẩm quyền ban hành (điểm c khoản 2 Điều 31 Nghị định 331); hoàn thành trước ngày 15/12 để làm số liệu báo cáo năm.
3. Đơn vị vận hành định kỳ đánh giá hiệu quả biện pháp, báo cáo chủ quản điều chỉnh (khoản 3 Điều 33 Nghị định 331).

**Điều 21. Chế độ báo cáo**

Báo cáo định kỳ hằng năm theo Mẫu số 08: số liệu tính từ 15/12 năm trước đến 14/12 năm báo cáo; đơn vị chuyên trách ANM, đơn vị vận hành gửi chủ quản **trước ngày 20/12**; chủ quản gửi Bộ Công an **trước ngày 25/12** (khoản 3, 4 Điều 35 Nghị định 331); nội dung theo Điều 36. Báo cáo đột xuất theo đề nghị của cơ quan có thẩm quyền.

**Điều 22. Xác định, xác định lại cấp độ**

1. Đơn vị vận hành lập Hồ sơ đề xuất cấp độ, gửi đơn vị chuyên trách ANM kèm văn bản đề nghị (Mẫu số 01).
2. Đơn vị chuyên trách ANM: hướng dẫn bổ sung hồ sơ chưa hợp lệ trong 05 ngày làm việc (khoản 2 Điều 23 Nghị định 331); **thẩm định trong 10 ngày làm việc** kể từ khi nhận đủ hồ sơ hợp lệ (thời hạn nội bộ của Công ty) theo nội dung tại khoản 1 Điều 23; ban hành quyết định phê duyệt trong 07 ngày làm việc (khoản 2 Điều 24) và báo cáo chủ quản (khoản 1 Điều 18).
3. Xác định lại cấp độ theo trình tự như lần đầu (Điều 25 Nghị định 331) khi có thay đổi tại điểm b, c, d, đ khoản 2 Điều 10 Nghị định 331 hoặc kết quả đánh giá rủi ro cho thấy cấp độ không còn phù hợp.

### Chương V. ĐIỀU KHOẢN THI HÀNH

**Điều 23. Tổ chức thực hiện**

1. Quy chế có hiệu lực kể từ ngày ký Quyết định ban hành. {{TEN_DON_VI_CHUYEN_TRACH_ANM}} phổ biến Quy chế tới toàn bộ người lao động (có ký nhận), kiểm tra việc thực hiện hằng năm.
2. Vi phạm Quy chế bị xử lý theo {{NOI_QUY_LAO_DONG_QUY_CHE_KY_LUAT}}; gây thiệt hại phải bồi thường theo quy định.
3. Quy chế được rà soát 01 lần/năm và khi pháp luật thay đổi, khi phê duyệt hoặc xác định lại cấp độ, sau sự cố nghiêm trọng. {{TEN_DON_VI_CHUYEN_TRACH_ANM}} đề xuất sửa đổi, {{CHUC_DANH_NGUOI_DUNG_DAU}} quyết định.

<p align="center"><b>Phụ lục. DANH MỤC HTTT ÁP DỤNG</b></p>

| STT | Mã | Tên HTTT | Cấp độ đề xuất | Tiêu chí (Nghị định 331) | QĐ phê duyệt (ghi sau) |
|---|---|---|---|---|---|
| 1 | {{C12_MA_HTTT}} | {{C12_TEN_HTTT}} | {{C12_CAP_DO_HTTT}} | {{C12_TIEU_CHI_HTTT}} | |
| 2 | {{C12_MA_HTTT}} | {{C12_TEN_HTTT}} | {{C12_CAP_DO_HTTT}} | {{C12_TIEU_CHI_HTTT}} | |
| 3 | {{C12_MA_HTTT}} | {{C12_TEN_HTTT}} | {{C12_CAP_DO_HTTT}} | {{C12_TIEU_CHI_HTTT}} | |
| 4 | {{C12_MA_HTTT}} | {{C12_TEN_HTTT}} | {{C12_CAP_DO_HTTT}} | {{C12_TIEU_CHI_HTTT}} | |

## Hướng dẫn điền

| Placeholder | Nội dung | Ví dụ (kịch bản mẫu) |
|---|---|---|
| `{{C12_SO_QD_QUY_CHE}}`, `{{C12_NGAY_BAN_HANH_QUY_CHE}}`, `{{C12_NGAY_QD_QUY_CHE}}` | Số, ngày QĐ ban hành — phải **trước** ngày QĐ phê duyệt cấp độ | 41/2026/QĐ-TURBO; 05/10/2026 |
| `{{C12_SO_QD_PHAN_CONG}}`, `{{C12_NGAY_QD_PHAN_CONG}}` | QĐ phân công nhiệm vụ ANM ([02-qd-phan-cong-anm.md](02-qd-phan-cong-anm.md)) | 40/2026/QĐ-TURBO; 01/10/2026 |
| `{{C12_TAN_SUAT_SAO_LUU}}` | Tần suất theo từng loại dữ liệu (tệp cấu hình, bản dự phòng HĐH, CSDL, dữ liệu nghiệp vụ) | CSDL ERP hằng ngày… |
| `{{C12_THOI_GIAN_LUU_NHAT_KY}}` | ≥ 01 tháng (cấp 2); ≥ 12 tháng nếu thuộc NĐ 333 Đ16.1 | 06 tháng |
| `{{C12_HIEU_LUC_MAT_KHAU}}` | TCVN 4.6.2.2 yêu cầu cấu hình nhưng không ấn định số ngày | 90 ngày |
| `{{CHU_KY_KHOI_PHUC_THU}}` | TCVN chỉ yêu cầu "định kỳ" theo mức nhạy cảm | 06 tháng/lần |
| `{{C12_MA_HTTT}}` … `{{C12_TIEU_CHI_HTTT}}` | Mỗi dòng một HTTT, lấy từ [01-phieu-sang-loc-cap-do.md](01-phieu-sang-loc-cap-do.md) | HT-02-INTRANET, cấp 2, Đ12.1 |

- **Chỉ có một phòng CNTT** (vừa chuyên trách vừa vận hành): phòng đó không tự thẩm định hồ sơ của mình — giao đơn vị trực thuộc khác (ví dụ Ban Kiểm soát nội bộ) hoặc lập Hội đồng thẩm định độc lập (NĐ 331 Đ18.4); sửa khoản 2 Điều 22 và Điều 6.
- Doanh nghiệp không có Hội đồng quản trị: sửa dòng "Nơi nhận" cho phù hợp (ví dụ Hội đồng thành viên, chủ sở hữu).
- Thời hạn thẩm định 10 ngày làm việc (khoản 2 Điều 22) là **tự quy định**: NĐ 331 Đ23.3 chỉ đặt thời hạn cho cấp 3 (15 ngày) và cấp 4–5 (25 ngày). Thời hạn 07 ngày làm việc của Đ24.2 được áp dụng cho cấp 1–2 như một chuẩn nội bộ **[CẦN ĐỐI CHIẾU: Đ24.2 có áp dụng bắt buộc cho cấp 1–2 hay không]**.
- Giám sát ANM: NĐ 333 Đ7.2 giao chủ quản tổ chức giám sát, tự cảnh báo; mức bắt buộc đối với cấp 1–2 chưa rõ **[CẦN ĐỐI CHIẾU]** — Quy chế rút gọn chỉ yêu cầu nhật ký và cảnh báo theo TCVN mục 3.8/4.8.
- Phạm vi NĐ 331 Đ2: HTTT thuần nội bộ của doanh nghiệp tư thuộc diện "khuyến khích", nhưng Luật 116 Đ10 áp dụng cho mọi tổ chức (Luật 116 Đ1.2). Thư điện tử đám mây có máy chủ ở nước ngoài: kiểm tra nghĩa vụ chuyển DLCN xuyên biên giới ([`../05-nghia-vu-lien-quan/`](../05-nghia-vu-lien-quan/)).

## Checklist trước khi ký

- [ ] Đủ 7 nhóm Đ30.3 (Điều 9–13, 16, 17), 4 nhóm Đ30.4 (Điều 14) và 6 nhiệm vụ Luật 116 Đ10.1 (Điều 4).
- [ ] Không còn placeholder trống; bảng Điều 15 khớp phương án ANM trong [Hồ sơ đề xuất cấp độ](04-ho-so-de-xuat-cap-do.md).
- [ ] Phụ lục đủ HTTT, không có HTTT cấp 3 trở lên (nếu có → Quy chế đầy đủ); đã xác định Công ty có/không cung cấp dịch vụ trên mạng (ghi chú dưới bảng Điều 15; các điều khoản NĐ 333 Đ16, Đ19–Đ20).
- [ ] Người ký là người đại diện có thẩm quyền của chủ quản; ngày ký **trước** ngày phê duyệt cấp độ (NĐ 331 Đ30.7).
- [ ] Kế hoạch phổ biến, ký nhận; lưu QĐ + Quy chế làm bằng chứng cho Mẫu 08 (NĐ 331 Đ36.6, Đ36.11).
