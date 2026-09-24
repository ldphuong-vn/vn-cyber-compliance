# Mẫu Quy chế bảo đảm an ninh mạng hệ thống thông tin

> **Căn cứ:** Luật 116/2025/QH15 Đ10, Đ17, Đ18.2, Đ25, Đ26, Đ34, Đ40, Đ41; NĐ 331/2026/NĐ-CP Đ6, Đ9, Đ10, Đ27–Đ33, Đ35–Đ36; NĐ 333/2026/NĐ-CP Đ7, Đ9, Đ16, Đ19–Đ20, Đ24; NĐ 330/2026/NĐ-CP Đ21–Đ23; Luật 91/2025/QH15 Đ23, Đ33; NĐ 356/2025/NĐ-CP Đ12–Đ14, Đ28–Đ29; TCVN 14423:2026 mục 3–7 (phần quản lý) · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

> Phần dẫn chiếu TCVN 14423:2026 là **tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI).** Quy chế không sao chép câu chữ của tiêu chuẩn; tham số theo cấp độ đặt ở [Phụ lục 1](#phụ-lục-1--bảng-tham-số-theo-cấp-độ).

## Hướng dẫn sử dụng mẫu

**Vì sao bắt buộc.** Quy chế là "quy định về bảo đảm ANM trong thiết kế, xây dựng, quản lý, vận hành, sử dụng, nâng cấp, hủy bỏ HTTT" (Luật 116 Đ10.2.a; NĐ 331 Đ28.1). Quy chế phải đáp ứng yêu cầu quản lý theo cấp độ và **được cấp có thẩm quyền phê duyệt, ban hành trước khi Hồ sơ đề xuất cấp độ được phê duyệt** (NĐ 331 Đ30.7). Không ban hành: phạt 20–30 triệu đồng (NĐ 330 Đ23.1.a).

**Bố cục bắt buộc về nội dung** — 7 nhóm yêu cầu cơ bản về quản lý (NĐ 331 Đ30.3):

| Nhóm Đ30.3 | Chương trong mẫu | TCVN 14423:2026 (cấp 3 làm ví dụ) |
|---|---|---|
| a) Thiết lập chính sách ANM | Chương II | 5.4 (phân loại thông tin), toàn bộ các mục "có quy định/quy trình" |
| b) Tổ chức bảo đảm ANM | Chương III | 5.14.2.1, 5.16.2.1 |
| c) Bảo đảm nguồn nhân lực | Chương IV | 5.14 |
| d) Quản lý thiết kế, xây dựng hệ thống | Chương V | 5.12.2.1, 5.12.2.3, 5.17 |
| đ) Quản lý vận hành hệ thống | Chương VI | 5.2–5.13, 5.15, 5.16, 5.18 |
| e) Phương án quản lý rủi ro ANM | Chương VII | 5.1 |
| g) Phương án kết thúc vận hành, khai thác, thanh lý, hủy bỏ | Chương VIII | 5.2.2.3 (xóa dữ liệu khi chuyển giao/đổi mục đích), 5.15 (kết thúc hợp đồng — cấp 4: 6.15.2.5) |

**Cách điều chỉnh theo cấp độ.** Điều khoản dùng tham số `{{CHU_KY_...}}`, `{{THOI_GIAN_...}}`. Chọn giá trị theo cấp độ **cao nhất** của các HTTT áp dụng Quy chế (hoặc ghi giá trị riêng cho từng hệ thống tại Phụ lục 1). Điều khoản có nhãn **[C3+]** chỉ bắt buộc từ cấp 3; **[C4+]** từ cấp 4. Nếu một tổ chức có nhiều hệ thống khác cấp, có thể ban hành một Quy chế chung + bảng tham số riêng từng hệ thống.

**Điều khoản nguồn gốc pháp lý khác TCVN** (áp dụng nếu thuộc đối tượng):

- Doanh nghiệp cung cấp dịch vụ trên mạng viễn thông, Internet, dịch vụ gia tăng tại Việt Nam: xác thực tài khoản, nhật ký ≥ 12 tháng, cung cấp thông tin/gỡ nội dung, lưu trữ dữ liệu tại Việt Nam (Luật 116 Đ25.2–25.3, Đ41; NĐ 333 Đ16, Đ19–Đ20).
- Tổ chức xử lý DLCN: thông báo vi phạm 72 giờ, bộ phận/nhân sự bảo vệ DLCN (Luật 91 Đ23, Đ33; NĐ 356 Đ13–Đ14, Đ28).

---

## PHẦN A — QUYẾT ĐỊNH BAN HÀNH

| {{TEN_CO_QUAN_CAP_TREN}}<br/>**{{TEN_TO_CHUC}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_VB}}/QĐ-{{VIET_TAT}} | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>QUYẾT ĐỊNH</b><br/><b>Ban hành Quy chế bảo đảm an ninh mạng hệ thống thông tin của {{TEN_TO_CHUC}}</b></p>

<p align="center"><b>{{CHUC_DANH_NGUOI_KY_IN_HOA}} {{TEN_TO_CHUC_IN_HOA}}</b></p>

*Căn cứ Luật An ninh mạng số 116/2025/QH15;*

*Căn cứ Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15;*

*Căn cứ Nghị định số 331/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ về bảo vệ an ninh mạng đối với hệ thống thông tin;*

*Căn cứ Nghị định số 333/2026/NĐ-CP của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật An ninh mạng;*

*Căn cứ Nghị định số 356/2025/NĐ-CP của Chính phủ quy định chi tiết Luật Bảo vệ dữ liệu cá nhân;*

*Căn cứ Tiêu chuẩn quốc gia TCVN 14423:2026 An ninh mạng – Hệ thống thông tin – Yêu cầu cơ bản;*

*Căn cứ {{CAN_CU_THAM_QUYEN}};*

*Theo đề nghị của {{DON_VI_CHUYEN_TRACH_ANM}}.*

<p align="center"><b>QUYẾT ĐỊNH:</b></p>

**Điều 1.** Ban hành kèm theo Quyết định này Quy chế bảo đảm an ninh mạng hệ thống thông tin của {{TEN_TO_CHUC}}.

**Điều 2.** Quyết định này có hiệu lực từ ngày ký. {{VAN_BAN_BI_THAY_THE}} hết hiệu lực kể từ ngày Quyết định này có hiệu lực.

**Điều 3.** {{DANH_SACH_DON_VI_THI_HANH}}, các đơn vị, cá nhân có liên quan chịu trách nhiệm thi hành Quyết định này.

| **Nơi nhận:**<br/>- Như Điều 3;<br/>- {{CO_QUAN_CAP_TREN}} (để báo cáo, nếu có);<br/>- Lưu: VT, {{DON_VI_CHUYEN_TRACH_ANM}}. | **{{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{HO_TEN_NGUOI_KY}}** |
|:---|:---:|

---

## PHẦN B — QUY CHẾ

<p align="center"><b>QUY CHẾ</b><br/><b>Bảo đảm an ninh mạng hệ thống thông tin của {{TEN_TO_CHUC}}</b><br/><i>(Ban hành kèm theo Quyết định số {{SO_VB}}/QĐ-{{VIET_TAT}} ngày {{NGAY}} của {{CHUC_DANH_NGUOI_KY}})</i></p>

### Chương I. QUY ĐỊNH CHUNG

**Điều 1. Phạm vi điều chỉnh**

Quy chế này quy định việc bảo đảm an ninh mạng (ANM) trong toàn bộ vòng đời — thiết kế, xây dựng, vận hành, sử dụng, nâng cấp, kết thúc, thanh lý, hủy bỏ — đối với các hệ thống thông tin (HTTT) thuộc chủ quản {{TEN_TO_CHUC}} nêu tại Phụ lục 3.

**Điều 2. Đối tượng áp dụng**

1. Các đơn vị, cá nhân thuộc {{TEN_TO_CHUC}} tham gia quản lý, vận hành, sử dụng HTTT.
2. Nhà cung cấp, nhà thầu, đối tác có kết nối, truy cập hoặc xử lý dữ liệu của HTTT — thông qua điều khoản hợp đồng và cam kết.

**Điều 3. Giải thích từ ngữ**

1. *Đơn vị chuyên trách về ANM*, *bộ phận chuyên trách về ANM* hiểu theo khoản 2, 3 Điều 3 Nghị định số 331/2026/NĐ-CP; trong Quy chế này là {{DON_VI_CHUYEN_TRACH_ANM}}.
2. *Đơn vị vận hành* hiểu theo Điều 5 Nghị định số 331/2026/NĐ-CP; trong Quy chế này là {{DON_VI_VAN_HANH}}.
3. *Bộ phận đánh giá độc lập* là {{DON_VI_DANH_GIA_DOC_LAP}}, độc lập với đơn vị trực tiếp vận hành hệ thống, thực hiện tự đánh giá nội bộ theo điểm c khoản 2 Điều 31 Nghị định số 331/2026/NĐ-CP.
4. *Sự cố ANM* là sự việc bất ngờ xảy ra trên không gian mạng xâm phạm an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân (khoản 17 Điều 2 Luật An ninh mạng).
5. *Dữ liệu quan trọng*, *tài khoản đặc quyền*, *thay đổi lớn*: {{DINH_NGHIA_NOI_BO}} *(định nghĩa nội bộ, bám thuật ngữ TCVN 14423:2026 mục 2)*.

**Điều 4. Nguyên tắc**

1. Bảo đảm ANM thường xuyên, liên tục từ thiết kế đến hủy bỏ; tuân thủ tiêu chuẩn, quy chuẩn kỹ thuật (khoản 1 Điều 6 Nghị định số 331/2026/NĐ-CP).
2. Tổng thể, đồng bộ, dùng chung giải pháp khi phù hợp; ưu tiên nguồn lực cho hệ thống cấp độ cao hơn (khoản 2, 3 Điều 6).
3. Đặc quyền tối thiểu, phân tách nhiệm vụ, phòng thủ nhiều lớp.
4. Mọi yêu cầu có "biện pháp tương đương" phải được lập luận bằng văn bản, được {{DON_VI_CHUYEN_TRACH_ANM}} chấp thuận và lưu hồ sơ.

**Điều 5. Tham số theo cấp độ**

Các chu kỳ, thời hạn, ngưỡng trong Quy chế này được quy định tại Phụ lục 1. Khi hệ thống được phê duyệt/xác định lại cấp độ, {{DON_VI_CHUYEN_TRACH_ANM}} rà soát và trình cập nhật Phụ lục 1 trong {{SO_NGAY_CAP_NHAT_THAM_SO}} ngày.

### Chương II. CHÍNH SÁCH AN NINH MẠNG *(NĐ 331 Đ30.3.a)*

**Điều 6. Chính sách chung**

1. {{TEN_TO_CHUC}} cam kết bảo vệ tính bí mật, toàn vẹn, sẵn sàng của thông tin và HTTT; tuân thủ pháp luật về ANM, bảo vệ DLCN.
2. Hệ thống quy định ANM gồm: Quy chế này; các quy trình tại Phụ lục 2; tài liệu kỹ thuật (cấu hình chuẩn, sơ đồ mạng, danh mục tài sản).
3. Mọi văn bản thuộc hệ thống quy định được rà soát, cập nhật định kỳ `{{CHU_KY_RA_SOAT_QUY_DINH}}` hoặc khi có thay đổi tổ chức, hệ thống, pháp luật ảnh hưởng đến văn bản.

**Điều 7. Phân loại và quản lý tài sản thông tin**

1. Thông tin xử lý qua HTTT được phân loại theo thuộc tính bí mật: công cộng; riêng; cá nhân; bí mật nhà nước (khoản 1 Điều 9 Nghị định số 331/2026/NĐ-CP). Nội bộ áp dụng thêm mức nhạy cảm: {{THANG_PHAN_LOAI_NOI_BO}} *(ví dụ: Công khai / Nội bộ / Hạn chế / Bí mật nhà nước — tham khảo TCVN 14423:2026 mục 5.4.2.1)*.
2. Đơn vị vận hành lập và duy trì danh mục tài sản thông tin (chủ sở hữu, mức nhạy cảm, thời gian lưu trữ, yêu cầu tiêu hủy), cập nhật `{{CHU_KY_CAP_NHAT_TAI_SAN_THONG_TIN}}`.
3. Kiểm tra phân quyền truy cập dữ liệu `{{CHU_KY_KIEM_TRA_PHAN_QUYEN_DU_LIEU}}`.
4. Mã hóa hoặc biện pháp tương đương đối với thông tin xác thực, dữ liệu nhạy cảm cao, dữ liệu quan trọng khi lưu trữ và truyền; quản lý vòng đời khóa mã. **[C3+]** Tài liệu hóa luồng dữ liệu quan trọng; tách biệt môi trường xử lý dữ liệu nhạy cảm cao (TCVN 14423:2026 mục 5.4.2.4–5.4.2.7).
5. DLCN trên điện toán đám mây phải được mã hóa ở trạng thái nghỉ và truyền, phân quyền truy cập nghiêm ngặt (khoản 4 Điều 12 Nghị định số 356/2025/NĐ-CP).
6. Thông tin bí mật nhà nước: không xử lý trên HTTT thuộc phạm vi Quy chế này trừ khi được thiết kế, phê duyệt theo pháp luật về bảo vệ bí mật nhà nước.

**Điều 8. Sử dụng HTTT của người dùng**

1. Người dùng chỉ sử dụng tài khoản, thiết bị, phần mềm được cấp phép; bảo mật thông tin tài khoản số của mình (khoản 2 Điều 42 Luật An ninh mạng).
2. Cấm: cài đặt phần mềm không có trong danh sách được phép; kết nối thiết bị cá nhân chưa đăng ký; chia sẻ mật khẩu; tắt giải pháp bảo vệ; đưa dữ liệu hạn chế ra ngoài khi chưa được phép.
3. Người dùng báo ngay dấu hiệu sự cố qua {{KENH_BAO_SU_CO_NOI_BO}}.

### Chương III. TỔ CHỨC BẢO ĐẢM AN NINH MẠNG *(NĐ 331 Đ30.3.b)*

**Điều 9. Chủ quản và người đứng đầu**

1. {{CHUC_DANH_NGUOI_DUNG_DAU}} trực tiếp chỉ đạo và chịu trách nhiệm trước pháp luật về công tác bảo vệ ANM; bố trí bộ phận, nhân sự chuyên trách phù hợp cấp độ (khoản 1 Điều 31 Nghị định số 331/2026/NĐ-CP).
2. Chủ quản thực hiện trách nhiệm tại khoản 2 Điều 31 Nghị định số 331/2026/NĐ-CP (trực tiếp hoặc qua tổ chức được ủy quyền theo Quyết định số {{SO_QD_CHU_QUAN}}).
3. Bảo đảm kinh phí cho ANM trong kế hoạch ngân sách hằng năm.

**Điều 10. Đơn vị chuyên trách về an ninh mạng**

Thực hiện nhiệm vụ tại Điều 32 Nghị định số 331/2026/NĐ-CP và Quyết định số {{SO_QD_CHUYEN_TRACH}}; làm đầu mối liên hệ với cơ quan quản lý nhà nước về ANM, cơ quan điều phối ứng phó sự cố quốc gia.

**Điều 11. Đơn vị vận hành**

Thực hiện trách nhiệm tại Điều 33 Nghị định số 331/2026/NĐ-CP và Quyết định số {{SO_QD_VAN_HANH}}.

**Điều 12. Bộ phận đánh giá độc lập**

1. Thực hiện tự đánh giá tuân thủ và hiệu quả biện pháp ANM, quản lý rủi ro theo điểm c khoản 2 Điều 31 Nghị định số 331/2026/NĐ-CP; độc lập với đơn vị trực tiếp vận hành; áp dụng biểu mẫu, tiêu chí, phương pháp do cơ quan nhà nước có thẩm quyền ban hành *(khi chưa ban hành: dùng bộ công cụ tại [`../06-kiem-tra-bao-cao/`](../06-kiem-tra-bao-cao/))*.
2. Đề xuất thuê tổ chức chuyên môn đánh giá trong các trường hợp: hệ thống cấp độ 5 hoặc quan trọng về an ninh quốc gia; sự cố nghiêm trọng; thay đổi lớn về chức năng, phạm vi, kiến trúc, công nghệ; nghi ngờ tự đánh giá không trung thực; theo yêu cầu cơ quan có thẩm quyền (điểm c khoản 2 Điều 31).

**Điều 13. Bộ phận/nhân sự bảo vệ dữ liệu cá nhân và pháp chế**

1. {{NHAN_SU_BVDLCN}} được chỉ định bằng văn bản theo Điều 13 Nghị định số 356/2025/NĐ-CP, thực hiện nhiệm vụ tại Điều 14 Nghị định số 356/2025/NĐ-CP (Luật 91 Đ33.2). *(Doanh nghiệp nhỏ/khởi nghiệp, hộ kinh doanh, doanh nghiệp siêu nhỏ: xem điều kiện miễn/lựa chọn tại Điều 41 Nghị định số 356/2025/NĐ-CP.)*
2. Phối hợp đơn vị chuyên trách ANM trong: đánh giá tác động xử lý DLCN; thông báo vi phạm DLCN; tiếp nhận yêu cầu của cơ quan chức năng.

**Điều 14. Phối hợp với cơ quan chức năng**

1. Kết nối hệ thống giám sát ANM, hệ thống phòng chống mã độc tập trung về Trung tâm An ninh mạng quốc gia của Bộ Công an hoặc Trung tâm An ninh mạng của tỉnh, thành phố (điểm b khoản 1 Điều 40 Luật An ninh mạng) theo hướng dẫn của lực lượng chuyên trách.
2. Phối hợp kiểm tra ANM theo Điều 26 Nghị định số 331/2026/NĐ-CP; phối hợp giám sát theo khoản 6 Điều 7 Nghị định số 333/2026/NĐ-CP.
3. Thông báo cho lực lượng chuyên trách bảo vệ ANM thuộc Bộ Công an khi phát hiện hành vi vi phạm pháp luật về ANM trên hệ thống (khoản 3 Điều 12 Luật An ninh mạng).
4. Tiếp nhận, xử lý yêu cầu theo [Quy trình tiếp nhận yêu cầu cơ quan chức năng](quy-trinh-tiep-nhan-yeu-cau-co-quan-chuc-nang.md).

**Điều 15. Chế độ báo cáo**

1. Báo cáo định kỳ hằng năm; số liệu chốt từ 15/12 năm trước đến 14/12 năm báo cáo; đơn vị chuyên trách ANM, đơn vị vận hành gửi chủ quản **trước 20/12**; chủ quản gửi Bộ Công an **trước 25/12** (khoản 3, 4 Điều 35 Nghị định số 331/2026/NĐ-CP), nội dung theo Điều 36 và Mẫu số 08.
2. Báo cáo đột xuất theo đề nghị của cơ quan có thẩm quyền (khoản 2 Điều 35).
3. Báo cáo sự cố theo Điều 37 Quy chế này.

### Chương IV. BẢO ĐẢM NGUỒN NHÂN LỰC *(NĐ 331 Đ30.3.c)*

**Điều 16. Tuyển dụng, bố trí**

1. Nhân sự vận hành, quản trị, bảo vệ ANM có trình độ ANM/CNTT phù hợp; ký cam kết bảo mật trong và sau khi nghỉ việc (TCVN 14423:2026 mục 3.13.2.1, 5.14.2.1).
2. **[C3+]** Bố trí bộ phận vận hành, quản trị hệ thống, bảo vệ ANM riêng biệt, có cơ chế độc lập về chuyên môn (TCVN 14423:2026 mục 5.14, 6.14.2.1). Trường hợp không đủ nhân sự: lập luận biện pháp tương đương (tách vai trò theo tài khoản, phê duyệt chéo, giám sát bởi bên thứ ba) theo khoản 4 Điều 4 Quy chế này.
3. Người trực tiếp quản trị, vận hành HTTT cấp 3–5 trong cơ quan, tổ chức, doanh nghiệp Nhà nước phải được tập huấn kiến thức, kỹ năng chuyên sâu về ANM và cấp chứng nhận, trừ người đã được đào tạo chuyên ngành ANM (khoản 2 Điều 34 Luật An ninh mạng; khoản 2 Điều 24 Nghị định số 333/2026/NĐ-CP); hoàn thành trong lộ trình tại điểm b khoản 8 Điều 24 Nghị định số 333/2026/NĐ-CP.

**Điều 17. Đào tạo, nâng cao nhận thức**

1. Toàn bộ người dùng HTTT được đào tạo nhận thức ANM `{{CHU_KY_DAO_TAO_NHAN_THUC}}`; **[C4+]** đào tạo theo vị trí, vai trò `{{CHU_KY_DAO_TAO_VAI_TRO}}` (TCVN 14423:2026 mục 6.14.2.3).
2. Tuyên truyền, phổ biến, bồi dưỡng, diễn tập theo khoản 3 Điều 31 Nghị định số 331/2026/NĐ-CP và [Kế hoạch đào tạo, diễn tập](ke-hoach-dao-tao-dien-tap.md).

**Điều 18. Chấm dứt, thay đổi công việc**

1. Thu hồi thẻ, thiết bị, dữ liệu, tài sản khi nghỉ việc/chuyển công tác.
2. Vô hiệu hóa mọi quyền ra vào, truy cập, quản trị **trong ngày** nghỉ việc *(hoặc `{{THOI_HAN_THU_HOI_QUYEN}}`)*; ghi nhận vào danh sách tài khoản.
3. Nhắc lại nghĩa vụ bảo mật sau khi nghỉ việc.

### Chương V. QUẢN LÝ THIẾT KẾ, XÂY DỰNG HỆ THỐNG *(NĐ 331 Đ30.3.d)*

**Điều 19. Yêu cầu ANM trong đầu tư, thiết kế**

1. Mọi dự án xây dựng mới, mở rộng, nâng cấp HTTT phải có thuyết minh đề xuất cấp độ lồng ghép trong báo cáo nghiên cứu khả thi/báo cáo đầu tư/kế hoạch thuê dịch vụ (Điều 19 Nghị định số 331/2026/NĐ-CP); khuyến khích phê duyệt hồ sơ đề xuất cấp độ trước khi phê duyệt thiết kế cơ sở/kế hoạch thuê dịch vụ (Điều 37).
2. Thiết kế tuân thủ phương án ANM theo cấp độ; kiến trúc bảo đảm phân vùng mạng, đặc quyền tối thiểu, tính sẵn sàng; duy trì sơ đồ mạng, cập nhật `{{CHU_KY_CAP_NHAT_SO_DO_MANG}}` (TCVN 14423:2026 mục 5.12.2.1).
3. Hệ thống cấp 3–4 thuê trung tâm dữ liệu/đám mây: tách lô-gic hệ thống, vùng mạng, lưu trữ; cấp 5: tách vật lý (khoản 8, 9 Điều 30 Nghị định số 331/2026/NĐ-CP).

**Điều 20. Phát triển ứng dụng an toàn [C3+]**

1. Áp dụng quy trình phát triển an toàn (kiểm tra dữ liệu vào/ra, chống tấn công phổ biến, kiểm soát lỗi, không lưu bí mật trong mã nguồn); kiểm tra lỗ hổng mã nguồn và thư viện bên thứ ba trước khi vận hành chính thức; đánh giá an toàn mã nguồn phần mềm nội bộ (điểm c khoản 3 Điều 27 Nghị định số 331/2026/NĐ-CP; TCVN 14423:2026 mục 5.17, 6.16).
2. Có kênh tiếp nhận báo cáo lỗ hổng từ bên ngoài: {{KENH_BAO_CAO_LO_HONG}} *(ví dụ security@…, security.txt)*.
3. Phần mềm thuê khoán: hợp đồng có cam kết bảo mật, yêu cầu mã nguồn hoặc bằng chứng đánh giá độc lập (TCVN 14423:2026 mục 5.17.2.1).

**Điều 21. Thử nghiệm, nghiệm thu**

1. Có kế hoạch, nội dung thử nghiệm – nghiệm thu ANM; bộ phận chịu trách nhiệm nghiệm thu được chỉ định.
2. **[C3+]** Có đơn vị/bộ phận độc lập tư vấn, giám sát nghiệm thu; báo cáo nghiệm thu được đơn vị chuyên trách ANM xác nhận và chủ quản phê duyệt trước khi sử dụng (TCVN 14423:2026 mục 5.12.2.3).

**Điều 22. Đánh giá điều kiện ANM trước khi vận hành**

1. Hệ thống xây dựng mới, mở rộng, nâng cấp phải triển khai đầy đủ phương án ANM đã được phê duyệt trước khi đưa vào vận hành (khoản 6 Điều 30 Nghị định số 331/2026/NĐ-CP).
2. Đánh giá điều kiện ANM thực hiện trước khi vận hành; khi có thay đổi lớn về chức năng, quy mô, công nghệ, mức độ rủi ro; theo yêu cầu cơ quan có thẩm quyền (điểm b khoản 3 Điều 28), theo [Quy trình đánh giá trước vận hành](quy-trinh-danh-gia-truoc-van-hanh.md).
3. Nghiêm cấm đưa hệ thống cấp độ 3 trở lên vào vận hành khi chưa được phê duyệt cấp độ (hành vi bị xử phạt tại điểm c khoản 1 Điều 23 Nghị định số 330/2026/NĐ-CP).

### Chương VI. QUẢN LÝ VẬN HÀNH HỆ THỐNG *(NĐ 331 Đ30.3.đ)*

**Điều 23. Quản lý tài sản phần cứng, phần mềm**

1. Danh mục tài sản phần cứng (gồm cả tài sản không thuộc quyền kiểm soát nhưng kết nối vào hệ thống — từ cấp 3) với thông tin nhận dạng, vị trí, mục đích, người chịu trách nhiệm; kiểm kê `{{CHU_KY_KIEM_KE_PHAN_CUNG}}`.
2. Phát hiện, xử lý phần cứng trái phép `{{CHU_KY_PHAT_HIEN_PHAN_CUNG_TRAI_PHEP}}`; xóa sạch dữ liệu khi chuyển giao, đổi mục đích.
3. Danh sách phần mềm được phép; chỉ cài đặt phần mềm đã phê duyệt; phát hiện, gỡ bỏ phần mềm trái phép (kể cả phần mềm hết hỗ trợ) `{{CHU_KY_PHAT_HIEN_PHAN_MEM_TRAI_PHEP}}`; ngoại lệ phải có biện pháp kiểm soát bù.

*(Tham chiếu: TCVN 14423:2026 mục 3.2–3.3, 4.2–4.3, 5.2–5.3, 6.2–6.3, 7.2–7.3.)*

**Điều 24. Cấu hình an toàn**

1. Có tài liệu cấu hình chuẩn (hardening) cho từng loại thiết bị, hệ điều hành, ứng dụng, cơ sở dữ liệu; áp dụng trước khi đưa vào vận hành; tắt giao thức, dịch vụ không dùng.
2. Khóa phiên khi không hoạt động: máy người dùng ≤ `{{TIMEOUT_MAY_NGUOI_DUNG}}`; phiên quản trị ≤ `{{TIMEOUT_PHIEN_QUAN_TRI}}`; khóa sau đăng nhập sai ≤ `{{SO_LAN_DANG_NHAP_SAI}}` lần; có cơ chế mở khóa khẩn cấp cho tài khoản quản trị.
3. Kiểm tra cấu hình, tăng cường bảo mật thiết bị, hệ điều hành, ứng dụng, CSDL là nội dung kiểm tra định kỳ (điểm đ khoản 2 Điều 27 Nghị định số 331/2026/NĐ-CP).

**Điều 25. Quản lý tài khoản và quyền truy cập**

1. **Danh sách tài khoản** của mọi tài sản (quản trị, tác nghiệp, kỹ thuật, dịch vụ) gồm: loại, tên, trạng thái, tài sản, người quản lý, đơn vị, ngày kích hoạt/vô hiệu. Rà soát `{{CHU_KY_RA_SOAT_TAI_KHOAN}}`.
2. **Cấp, thay đổi, thu hồi quyền** theo phiếu yêu cầu được phê duyệt (Phụ lục 2 — BM-TK-01); quyền gán theo vai trò, đặc quyền tối thiểu, phân tách nhiệm vụ; tài liệu hóa quyền theo chức danh.
3. **Tài khoản đặc quyền:** tách biệt với tài khoản tác nghiệp; mỗi tài khoản gắn một người (tài khoản dùng chung phải được phê duyệt, ghi rõ trách nhiệm từng thời điểm); đổi/vô hiệu tài khoản mặc định; **[C3+]** bắt buộc xác thực đa yếu tố (MFA) cho tài khoản quản trị và truy cập từ Internet/bên thứ ba; đổi mật khẩu quản trị `{{CHU_KY_DOI_MK_QUAN_TRI}}`, không trùng `{{SO_MK_CU_KHONG_TRUNG}}` mật khẩu trước.
4. **Mật khẩu:** đổi mật khẩu mặc định; đổi ở lần đăng nhập đầu; độ dài tối thiểu `{{DO_DAI_MK_CO_MFA}}` ký tự khi có MFA, `{{DO_DAI_MK_KHONG_MFA}}` ký tự (đủ 4 loại ký tự) khi không có MFA; mật khẩu riêng cho từng tài sản hoặc quản lý tập trung.
5. Vô hiệu hóa tài khoản không hoạt động sau `{{SO_NGAY_VO_HIEU_TK}}` ngày hoặc ngay khi thay đổi nhân sự. **[C3+]** Quản lý tài khoản tập trung.
6. Ghi nhật ký và giám sát hoạt động tài khoản.
7. **Tài khoản người sử dụng dịch vụ** *(áp dụng nếu {{TEN_TO_CHUC}} là doanh nghiệp cung cấp dịch vụ trên mạng viễn thông, Internet, dịch vụ gia tăng tại Việt Nam)*: xác thực thông tin người dùng khi đăng ký tài khoản số; xác thực bằng số điện thoại di động tại Việt Nam hoặc số định danh cá nhân/định danh điện tử hợp pháp; livestream thương mại xác thực bằng số định danh cá nhân; chỉ tài khoản đã xác thực được đăng tải, chia sẻ, tương tác; bảo mật thông tin, tài khoản người dùng (điểm a khoản 2 Điều 25 Luật An ninh mạng; khoản 2 Điều 16 Nghị định số 333/2026/NĐ-CP). Không xác thực/không bảo mật tài khoản: phạt 30–50 triệu đồng (khoản 1 Điều 29 Nghị định số 330/2026/NĐ-CP).

*(Tham chiếu TCVN 14423:2026 mục 3.6, 4.6, 5.6, 6.6, 7.6. Các con số về mật khẩu, khóa phiên trong TCVN là cấu hình "có thể" áp dụng dựa trên đánh giá rủi ro — ghi lập luận khi chọn khác.)*

**Điều 26. Quản lý nhật ký (log)**

1. Quy định cách ghi, thu thập, kiểm tra, lưu trữ nhật ký; tối thiểu: nhật ký truy cập tài sản phần cứng/phần mềm, cảnh báo thiết bị bảo mật; **[C3+]** thêm nhật ký tiến trình và thông tin hành vi; lưu trữ, phân tích tập trung (SIEM hoặc tương đương).
2. Đồng bộ thời gian (NTP) cho mọi thành phần tham gia giám sát.
3. **Thời gian lưu nhật ký:** không dưới `{{THOI_GIAN_LUU_NHAT_KY}}`. Giá trị này lấy **mức cao hơn** giữa:
   - mức theo cấp độ tại TCVN 14423:2026 (cấp 2: 01 tháng — mục 4.8.2.1; cấp 3: 03 tháng — mục 5.8.2.1; cấp 4: 06 tháng — mục 6.8.2.1; cấp 5: 12 tháng — mục 7.8.2.1); và
   - **12 tháng** nếu {{TEN_TO_CHUC}} là doanh nghiệp cung cấp dịch vụ trên mạng viễn thông, Internet, dịch vụ gia tăng tại Việt Nam: nhật ký hệ thống tối thiểu gồm tài khoản người dùng, thời gian đăng nhập/đăng xuất, địa chỉ IP, cổng nguồn khi đăng nhập/đăng xuất và nhật ký xử lý thông tin được đăng tải; truy xuất được ít nhất trong 12 tháng (điểm b khoản 2 Điều 25 Luật An ninh mạng; điểm b, c khoản 6 Điều 16 và khoản 3 Điều 20 Nghị định số 333/2026/NĐ-CP).
   - Doanh nghiệp viễn thông, Internet cấp phát IP: nhật ký cấp phát/NAT ≥ 12 tháng, đồng bộ chuẩn thời gian quốc gia (Điều 22 Nghị định số 333/2026/NĐ-CP).
4. Theo dõi dung lượng, chống đầy bộ nhớ lưu log; bảo vệ log khỏi sửa đổi, xóa.
5. Rà soát nhật ký `{{CHU_KY_RA_SOAT_NHAT_KY}}`.
6. Không lưu trữ hoặc không cung cấp log file, nhật ký DNS… khi được yêu cầu có thể bị phạt 50–70 triệu đồng (điểm h khoản 4 Điều 21 Nghị định số 330/2026/NĐ-CP); không lưu trữ nhật ký hệ thống theo quy định: 30–50 triệu đồng (điểm a khoản 2 Điều 23).

**Điều 27. Giám sát an ninh mạng**

1. Tổ chức giám sát ANM đối với hệ thống thuộc phạm vi quản lý; cơ chế tự giám sát, tự cảnh báo, tiếp nhận cảnh báo; duy trì hệ thống giám sát và phòng chống mã độc tập trung đáp ứng kết nối, chia sẻ dữ liệu cảnh báo với cơ quan có thẩm quyền (khoản 2 Điều 7 Nghị định số 333/2026/NĐ-CP).
2. **[C3+]** Giám sát thiết bị, máy chủ, ứng dụng, dịch vụ; thu thập nhật ký luồng mạng; tách cổng quản trị với cổng dịch vụ; điều chỉnh ngưỡng cảnh báo `{{CHU_KY_DIEU_CHINH_NGUONG_CANH_BAO}}` (TCVN 14423:2026 mục 5.13, 6.13, 7.13).
3. Khi lực lượng chuyên trách triển khai giám sát: phối hợp, bảo đảm điều kiện kỹ thuật, cung cấp thông tin cấu hình, kết nối; xử lý cảnh báo theo yêu cầu (khoản 6 Điều 7 Nghị định số 333/2026/NĐ-CP).

**Điều 28. Sao lưu và khôi phục**

1. Danh mục dữ liệu cần sao lưu (tệp cấu hình, bản dự phòng hệ điều hành, CSDL, dữ liệu nghiệp vụ) kèm tần suất, phương pháp sao lưu và khôi phục cho từng loại — Phụ lục 1 mục "Sao lưu".
2. Bảo vệ bản sao lưu bảo đảm toàn vẹn, sẵn sàng, khả năng khôi phục (mọi cấp); **[C2+]** bản sao lưu được định danh, quản lý phiên bản, lưu trên hạ tầng tách biệt môi trường vận hành (TCVN 14423:2026 mục 4.11.2.4); **[C3+]** triển khai giải pháp sao lưu tự động hoặc tương đương, quy tắc 3-2-1 hoặc tương đương, mã hóa bản sao lưu dữ liệu quan trọng (mục 5.11.2.2–5.11.2.3).
3. Khôi phục thử `{{CHU_KY_KHOI_PHUC_THU}}`; lập biên bản kết quả (RPO/RTO đạt/không đạt).
4. Mục tiêu khôi phục: RPO ≤ `{{RPO}}`, RTO ≤ `{{RTO}}` *(tổ chức tự quy định — TCVN không ấn định)*.

*(Tham chiếu TCVN 14423:2026 mục 3.11, 4.11, 5.11, 6.11, 7.11; Luật 116 Đ10.2.đ.)*

**Điều 29. Quản lý lỗ hổng và bản vá**

1. Theo dõi lỗ hổng, mối đe dọa mới từ nhiều nguồn (nhà sản xuất, cơ quan chức năng, CVE).
2. Rà quét lỗ hổng toàn hệ thống `{{CHU_KY_DO_QUET}}`; **[C4+]** rà quét tài sản quan trọng `{{CHU_KY_DO_QUET_TAI_SAN_QUAN_TRONG}}`; rà quét bổ sung sau mỗi thay đổi lớn.
3. Đánh giá mức nghiêm trọng, ưu tiên khắc phục theo thời hạn: Nghiêm trọng ≤ `{{SLA_VA_NGHIEM_TRONG}}`; Cao ≤ `{{SLA_VA_CAO}}`; Trung bình ≤ `{{SLA_VA_TRUNG_BINH}}`; Thấp ≤ `{{SLA_VA_THAP}}` *(tổ chức tự quy định — TCVN cấp 3 không ấn định thời hạn)*; đánh giá lại sau khắc phục.
4. Quản lý bản vá tập trung; đánh giá tác động, kiểm thử, phương án phục hồi trước khi vá hệ thống có dữ liệu quan trọng; vá máy tính, thiết bị di động cấp cho người dùng `{{CHU_KY_VA_MAY_NGUOI_DUNG}}`.
5. Thực hiện yêu cầu khắc phục điểm yếu, lỗ hổng của lực lượng chuyên trách bảo vệ ANM (không thực hiện: phạt 25–50 triệu đồng — điểm c khoản 1 Điều 27 Nghị định số 330/2026/NĐ-CP).
6. Nội dung kiểm tra: dò quét, phát hiện mã độc, lỗ hổng, điểm yếu; việc duy trì, cập nhật, khắc phục tồn tại; kế hoạch xử lý nội dung chưa đạt (khoản 3 Điều 27 Nghị định số 331/2026/NĐ-CP).

**Điều 30. Phòng chống phần mềm độc hại**

1. Chủ động phòng ngừa, phát hiện, ngăn chặn phần mềm độc hại; thực hiện hướng dẫn, yêu cầu của cơ quan có thẩm quyền (khoản 1 Điều 17 Luật An ninh mạng).
2. Giải pháp chống mã độc trên máy chủ, máy người dùng (bảo vệ thời gian thực, tự cập nhật mẫu); tắt tự chạy (autorun) thiết bị lưu trữ ngoài; **[C3+]** EDR hoặc tương đương kết nối SIEM.
3. *Nếu cung cấp dịch vụ thư điện tử, truyền đưa, lưu trữ thông tin:* có hệ thống lọc phần mềm độc hại khi gửi, nhận, lưu trữ và báo cáo cơ quan có thẩm quyền (khoản 3 Điều 17 Luật An ninh mạng).

*(Tham chiếu TCVN 14423:2026 mục 3.10, 5.10.)*

**Điều 31. Trình duyệt, thư điện tử, hạ tầng mạng, truy cập từ xa**

1. Danh sách trình duyệt, dịch vụ thư điện tử được phép, còn thời gian hỗ trợ; giải pháp bảo vệ thư điện tử; lọc tên miền độc hại.
2. Phân vùng mạng theo phương án đã phê duyệt; kiểm soát truy cập vào/ra theo dịch vụ; chặn cổng/dịch vụ không cung cấp; tường lửa, IPS, WAF, chống DDoS theo cấp độ.
3. Truy cập quản trị từ xa qua kênh mã hóa (VPN/ZTNA hoặc tương đương), xác thực bổ sung, giới hạn nguồn; đóng phiên không hoạt động.

*(Tham chiếu TCVN 14423:2026 mục 5.9, 5.12.)*

**Điều 32. Quản lý thay đổi**

1. Mọi thay đổi cấu hình, phần mềm, hạ tầng được đăng ký, đánh giá tác động ANM, phê duyệt, kiểm thử, có phương án hoàn tác.
2. Thay đổi thuộc các trường hợp tại khoản 2 Điều 10 Nghị định số 331/2026/NĐ-CP (chức năng, phạm vi phục vụ, đối tượng sử dụng, loại thông tin, công nghệ; mở rộng, tích hợp, kết nối, chia sẻ dữ liệu) → đánh giá lại rủi ro và **qua cổng đánh giá trước vận hành**; xem xét xác định lại cấp độ (Điều 25).

**Điều 33. Quản lý nhà cung cấp**

Thực hiện theo [Quy trình quản lý nhà cung cấp](quy-trinh-quan-ly-nha-cung-cap.md): danh sách, phân loại nhà cung cấp, cập nhật `{{CHU_KY_CAP_NHAT_DS_NCC}}`; văn bản xác định phạm vi trách nhiệm; hợp đồng thuê dịch vụ quy định chi tiết trách nhiệm quản trị dữ liệu, kiểm soát truy cập, bảo đảm ANM (điểm a khoản 3 Điều 5 Nghị định số 331/2026/NĐ-CP).

**Điều 34. Ứng phó sự cố an ninh mạng**

1. Thành lập lực lượng/đội ứng cứu sự cố: 01 người chủ chốt, ≥ 01 người dự phòng; phân công vai trò; đầu mối liên lạc với cơ quan quản lý nhà nước về ANM và cơ quan điều phối ứng phó sự cố quốc gia (TCVN 14423:2026 mục 3.15.2.1, 5.16.2.1). Không thành lập đội ứng cứu sự cố, không xây dựng kế hoạch ứng phó sự cố có thể bị phạt 30–50 triệu đồng (điểm b, d khoản 3 Điều 21 Nghị định số 330/2026/NĐ-CP).
2. Công bố địa chỉ tiếp nhận sự cố trên trang/cổng thông tin điện tử; khai báo, cập nhật đầu mối ứng cứu sự cố với lực lượng chuyên trách thuộc Bộ Công an (các hành vi bị xử phạt tại điểm a, b, c khoản 1 Điều 21 Nghị định số 330/2026/NĐ-CP) **[CẦN ĐỐI CHIẾU: nội dung, thời hạn khai báo chờ quy định của Bộ trưởng Bộ Công an — khoản 6 Điều 28 Nghị định số 331/2026/NĐ-CP]**.
3. Phát hiện, phân loại, xử lý, báo cáo sự cố theo [Quy trình ứng phó sự cố](quy-trinh-ung-pho-su-co.md), bảo đảm các mốc: thông báo ban đầu sự cố nghiêm trọng trong **24 giờ**; báo cáo nguyên nhân, phạm vi ảnh hưởng, biện pháp khắc phục trong **72 giờ** kể từ khi phát hiện; báo cáo **ngay khi phát hiện** nếu sự cố có dấu hiệu xâm phạm an ninh quốc gia, trật tự, an toàn xã hội hoặc gây gián đoạn nghiêm trọng (điểm d khoản 2 Điều 31 Nghị định số 331/2026/NĐ-CP). Doanh nghiệp cung cấp dịch vụ trên không gian mạng: triển khai ngay phương án ứng cứu khẩn cấp và **báo cáo ngay** với lực lượng chuyên trách (khoản 3 Điều 41 Luật An ninh mạng).
4. Vi phạm DLCN có thể gây tổn hại: thông báo cơ quan chuyên trách bảo vệ DLCN chậm nhất **72 giờ** (khoản 1 Điều 23 Luật Bảo vệ dữ liệu cá nhân).
5. Diễn tập ứng phó sự cố `{{CHU_KY_DIEN_TAP}}`; đánh giá sau sự cố; cập nhật quy trình `{{CHU_KY_CAP_NHAT_QT_SU_CO}}`.

**Điều 35. Kiểm tra, đánh giá an ninh mạng**

1. Kiểm tra, giám sát, đánh giá hiệu quả biện pháp quản lý và kỹ thuật: định kỳ theo cấp độ và mức rủi ro; thường xuyên qua giám sát; đột xuất khi có dấu hiệu vi phạm/nguy cơ; theo yêu cầu cơ quan có thẩm quyền (điểm a khoản 5 Điều 28 Nghị định số 331/2026/NĐ-CP).
2. Nội dung: tuân thủ (khoản 1 Điều 27); hiệu quả biện pháp, gồm tính đầy đủ, phù hợp và việc tuân thủ Quy chế này (khoản 2 Điều 27); phát hiện mã độc, lỗ hổng, kiểm thử xâm nhập, đánh giá an toàn mã nguồn (khoản 3 Điều 27); hình thức hộp đen, hộp xám, hộp trắng (khoản 4 Điều 27).
3. Tự đánh giá tổng thể `{{CHU_KY_TU_DANH_GIA}}` do bộ phận đánh giá độc lập thực hiện (Điều 12 Quy chế này).
4. **[C3+]** Chương trình kiểm thử xâm nhập được phê duyệt (phạm vi, thời gian, phương pháp, đầu mối, giới hạn, xử lý dữ liệu thu được); tần suất `{{CHU_KY_PENTEST}}`; **[C4+]** kiểm thử từ bên ngoài và từ bên trong theo chu kỳ tại Phụ lục 1; khắc phục tồn tại và đánh giá lại hiệu quả biện pháp sau mỗi lần kiểm thử (TCVN 14423:2026 mục 5.18, 6.18, 7.18).
5. Đơn vị vận hành định kỳ đánh giá hiệu quả biện pháp bảo vệ, báo cáo chủ quản điều chỉnh (khoản 3 Điều 33 Nghị định số 331/2026/NĐ-CP).
6. Kết quả kiểm tra là căn cứ khắc phục tồn tại, điều chỉnh biện pháp (điểm c khoản 5 Điều 28).

**Điều 36. Tiếp nhận yêu cầu của cơ quan chức năng**

Mọi yêu cầu cung cấp thông tin, ngăn chặn/gỡ bỏ thông tin, kiểm tra, giám sát, đình chỉ hệ thống… được tiếp nhận, xác thực, xử lý, lưu sổ theo [Quy trình tiếp nhận yêu cầu cơ quan chức năng](quy-trinh-tiep-nhan-yeu-cau-co-quan-chuc-nang.md), bảo đảm thời hạn luật định (24 giờ/03 giờ cung cấp thông tin; 24 giờ/06 giờ ngăn chặn, xóa bỏ — điểm a, b khoản 2 Điều 25 Luật An ninh mạng; khoản 3, 4 Điều 16 Nghị định số 333/2026/NĐ-CP).

**Điều 37. Lưu trữ dữ liệu tại Việt Nam** *(áp dụng cho doanh nghiệp cung cấp dịch vụ trên mạng viễn thông, Internet, dịch vụ gia tăng tại Việt Nam)*

1. Doanh nghiệp trong nước lưu trữ tại Việt Nam: thông tin cá nhân của người sử dụng dịch vụ tại Việt Nam; dữ liệu do người sử dụng tại Việt Nam tạo ra (tên tài khoản, thời gian sử dụng, thông tin thẻ tín dụng, thư điện tử, IP đăng nhập/đăng xuất gần nhất, số điện thoại đăng ký) (khoản 1, 2 Điều 19 Nghị định số 333/2026/NĐ-CP).
2. Hình thức lưu trữ do doanh nghiệp tự quyết định nhưng phải truy xuất, cung cấp kịp thời khi có yêu cầu và bảo đảm an toàn thông tin theo tiêu chuẩn, quy chuẩn (khoản 5 Điều 19).
3. Thời gian lưu trữ tối thiểu 24 tháng (khoản 1 Điều 20 Nghị định số 333/2026/NĐ-CP) **[CẦN ĐỐI CHIẾU: khoản 1 Điều 20 tính thời gian "từ khi doanh nghiệp nhận được yêu cầu lưu trữ", cách áp dụng cho doanh nghiệp trong nước (vốn phải lưu trữ theo khoản 2 Điều 19 mà không cần yêu cầu) chưa rõ]**.
4. Chi tiết: [`../05-nghia-vu-lien-quan/`](../05-nghia-vu-lien-quan/).

### Chương VII. QUẢN LÝ RỦI RO AN NINH MẠNG *(NĐ 331 Đ30.3.e)*

**Điều 38. Quản lý rủi ro**

1. Đánh giá rủi ro ANM trong các trường hợp: xác định cấp độ lần đầu; thay đổi chức năng, phạm vi, đối tượng, loại thông tin, công nghệ; mở rộng, tích hợp, kết nối, chia sẻ dữ liệu; sự cố nghiêm trọng hoặc nguy cơ cao; theo yêu cầu cơ quan có thẩm quyền (khoản 2 Điều 10 Nghị định số 331/2026/NĐ-CP); và định kỳ `{{CHU_KY_DANH_GIA_RUI_RO}}`.
2. Nội dung tối thiểu theo khoản 3 Điều 10 (tài sản, loại thông tin, mối đe dọa – điểm yếu – lỗ hổng, khả năng và tác động, năng lực hiện có, kế hoạch giảm thiểu, truyền thông và báo cáo).
3. Rủi ro cao hơn cấp độ đã xác định → đề xuất cấp độ cao hơn (khoản 5 Điều 10).
4. Lưu hồ sơ đánh giá rủi ro, cung cấp khi thanh tra, kiểm tra (khoản 6 Điều 10).
5. Trình tự chi tiết: [Quy trình quản lý rủi ro](quy-trinh-quan-ly-rui-ro.md).

### Chương VIII. KẾT THÚC VẬN HÀNH, THANH LÝ, HỦY BỎ *(NĐ 331 Đ30.3.g)*

**Điều 39. Kế hoạch kết thúc**

1. Trước khi kết thúc vận hành, khai thác một HTTT hoặc thành phần, đơn vị vận hành lập kế hoạch gồm: dữ liệu cần chuyển đổi/lưu trữ/xóa; thời gian lưu trữ theo pháp luật (nhật ký, dữ liệu người dùng — Điều 26, Điều 37 Quy chế này); tài khoản, kết nối, chứng thư, khóa mã cần thu hồi; thông báo cơ quan, đối tác liên quan; cập nhật danh mục HTTT và báo cáo năm (khoản 2, 4 Điều 36 Nghị định số 331/2026/NĐ-CP).
2. Kế hoạch được đơn vị chuyên trách ANM thẩm tra, chủ quản phê duyệt.

**Điều 40. Xóa, tiêu hủy dữ liệu và thiết bị**

1. Xóa sạch dữ liệu bằng phương pháp không khôi phục được trước khi thanh lý, chuyển giao, đổi mục đích thiết bị (TCVN 14423:2026 mục 5.2.2.3).
2. Xóa, hủy DLCN theo pháp luật bảo vệ DLCN; lập biên bản.
3. Kết thúc hợp đồng với nhà cung cấp: thu hồi quyền truy cập, yêu cầu trả lại/xóa dữ liệu kèm xác nhận; rà soát vấn đề bảo mật khi kết thúc hợp đồng (TCVN 14423:2026 mục 6.15.2.5 — cấp 4, khuyến nghị cho mọi cấp).
4. Lưu biên bản xóa/tiêu hủy tối thiểu `{{THOI_GIAN_LUU_BIEN_BAN_HUY}}`.

### Chương IX. TỔ CHỨC THỰC HIỆN

**Điều 41. Kiểm tra việc thực hiện Quy chế**

{{DON_VI_CHUYEN_TRACH_ANM}} kiểm tra việc thực hiện Quy chế định kỳ `{{CHU_KY_KIEM_TRA_QUY_CHE}}` và đột xuất; kết quả là căn cứ nội dung báo cáo năm tại khoản 7 Điều 36 Nghị định số 331/2026/NĐ-CP.

**Điều 42. Khen thưởng, xử lý vi phạm**

Cá nhân, đơn vị vi phạm Quy chế bị xử lý theo {{NOI_QUY_LAO_DONG_QUY_CHE_KY_LUAT}}; trường hợp gây thiệt hại phải bồi thường theo quy định.

**Điều 43. Sửa đổi, bổ sung**

Quy chế được rà soát `{{CHU_KY_RA_SOAT_QUY_CHE}}` và khi: thay đổi pháp luật; phê duyệt/xác định lại cấp độ; sau sự cố nghiêm trọng; kết quả kiểm tra yêu cầu. Việc sửa đổi do {{DON_VI_CHUYEN_TRACH_ANM}} đề xuất, {{CHUC_DANH_NGUOI_DUNG_DAU}} quyết định.

---

## Phụ lục 1 — Bảng tham số theo cấp độ

> Cột C1–C5 là **mức tối thiểu khuyến nghị** suy ra từ TCVN 14423:2026 (mục 3 = cấp 1, 4 = cấp 2, 5 = cấp 3, 6 = cấp 4, 7 = cấp 5) hoặc văn bản pháp luật ghi trong cột Nguồn. "—" = TCVN không ấn định chu kỳ riêng ở cấp đó (tổ chức tự quy định). Tóm lược để tra cứu — đối chiếu bản chính thức.

| Tham số | Placeholder | C1 | C2 | C3 | C4 | C5 | Nguồn |
|---|---|---|---|---|---|---|---|
| Rà soát quy định/quy trình (chung) | `{{CHU_KY_RA_SOAT_QUY_DINH}}` | 1 năm | 1 năm | 1 năm | 1 năm | 1 năm (QLRR: 6 tháng) | TCVN các mục "đánh giá và cập nhật"; 7.1.2.1 |
| Xác định rủi ro định kỳ | `{{CHU_KY_DANH_GIA_RUI_RO}}` | — | — | 1 năm | 6 tháng | 6 tháng | TCVN 5.1.2.2, 6.1.2.2, 7.1.2.2; NĐ 331 Đ10.2 (theo sự kiện) |
| Đánh giá hiệu quả biện pháp kiểm soát | (trong QT rủi ro) | — | — | 1 năm | 6 tháng | 6 tháng | TCVN 5.1.2.4, 6.1.2.4, 7.1.2.4 |
| Kiểm kê tài sản phần cứng | `{{CHU_KY_KIEM_KE_PHAN_CUNG}}` | 1 năm | 1 năm | 1 năm | 1 năm | 6 tháng | TCVN 3.2.1, 4.2.1, 5.2.1, 6.2.1, 7.2.1 |
| Phát hiện phần cứng trái phép | `{{CHU_KY_PHAT_HIEN_PHAN_CUNG_TRAI_PHEP}}` | 1 năm | 1 năm | 6 tháng | quý | tháng | TCVN 3.2.2.2 … 7.2.2.2 |
| Phát hiện phần mềm trái phép | `{{CHU_KY_PHAT_HIEN_PHAN_MEM_TRAI_PHEP}}` | 1 năm | 1 năm | 1 năm | 6 tháng | tháng | TCVN 3.3.2.2, 4.3.2.2, 5.3.2.3, 6.3.2.4, 7.3.2.4 |
| Kiểm tra phân quyền dữ liệu | `{{CHU_KY_KIEM_TRA_PHAN_QUYEN_DU_LIEU}}` | 1 năm | 1 năm | 6 tháng | quý | tháng | TCVN 3.4.2.1, 4.4.2.1, 5.4.2.1, 6.4.2.1, 7.4.2.1 |
| Cập nhật danh mục tài sản thông tin | `{{CHU_KY_CAP_NHAT_TAI_SAN_THONG_TIN}}` | 1 năm | 1 năm | 1 năm | 1 năm | 6 tháng | TCVN x.4.2.2 |
| Rà soát danh sách tài khoản | `{{CHU_KY_RA_SOAT_TAI_KHOAN}}` | 1 năm | 1 năm | 6 tháng | quý | tháng | TCVN 3.6.2.1 … 7.6.2.1 |
| Vô hiệu tài khoản không hoạt động | `{{SO_NGAY_VO_HIEU_TK}}` | 45 ngày | 45 ngày | 45 ngày | 45 ngày | 45 ngày | TCVN x.6.2.3 |
| Đổi mật khẩu tài khoản quản trị | `{{CHU_KY_DOI_MK_QUAN_TRI}}` | 2 tháng | 2 tháng | 2 tháng | 2 tháng | 2 tháng | TCVN x.6.2.2 (mức "có thể") |
| MFA cho tài khoản quản trị | — | khuyến nghị | khuyến nghị | bắt buộc | bắt buộc | bắt buộc | TCVN 5.6.2.2, 6.6.2.2, 7.6.2.2 |
| Mật khẩu không trùng N lần trước | `{{SO_MK_CU_KHONG_TRUNG}}` | — | — | 10 | 10 | 10 | TCVN 5.6.2.2, 7.6.2.2 |
| Độ dài mật khẩu (có MFA / không MFA) | `{{DO_DAI_MK_CO_MFA}}` / `{{DO_DAI_MK_KHONG_MFA}}` | 8 / 14 | 8 / 14 | 8 / 14 | 8 / 14 | 8 / 14 | TCVN x.6.2.2 (mức "có thể") |
| Khóa phiên máy người dùng / phiên quản trị | `{{TIMEOUT_MAY_NGUOI_DUNG}}` / `{{TIMEOUT_PHIEN_QUAN_TRI}}` | 15 / 5 phút | 15 / 5 phút | 15 / 5 phút | 15 / 5 phút | 15 / 5 phút | TCVN x.5.2.2 (mức "có thể") |
| Rà quét lỗ hổng toàn hệ thống | `{{CHU_KY_DO_QUET}}` | 1 năm | 1 năm | 6 tháng | 6 tháng | quý | TCVN 3.7.2.1, 4.7.2.1, 5.7.2.1, 6.7.2.1, 7.7.2.1 |
| Rà quét tài sản quan trọng | `{{CHU_KY_DO_QUET_TAI_SAN_QUAN_TRONG}}` | — | — | — | quý | tháng | TCVN 6.7.2.1, 7.7.2.1 |
| Vá máy tính/thiết bị người dùng | `{{CHU_KY_VA_MAY_NGUOI_DUNG}}` | tháng | tháng | tháng | tháng | tháng | TCVN x.7.2.2 |
| Thời gian lưu nhật ký (tối thiểu) | `{{THOI_GIAN_LUU_NHAT_KY}}` | — | 1 tháng | 3 tháng | 6 tháng | 12 tháng | TCVN 4.8.2.1, 5.8.2.1, 6.8.2.1, 7.8.2.1 — **nâng lên 12 tháng nếu là DN cung cấp dịch vụ** (NĐ 333 Đ16.6.c, Đ20.3) |
| Rà soát nhật ký | `{{CHU_KY_RA_SOAT_NHAT_KY}}` | 1 năm | 1 năm | 6 tháng | tháng | tháng | TCVN 3.8.2.1 … 7.8.2.1 |
| Khôi phục thử bản sao lưu | `{{CHU_KY_KHOI_PHUC_THU}}` | định kỳ | định kỳ | định kỳ | 6 tháng | quý | TCVN x.11.2.1; 6.11.2.5; 7.11.2.5 |
| Cập nhật sơ đồ mạng | `{{CHU_KY_CAP_NHAT_SO_DO_MANG}}` | 1 năm | 1 năm | 1 năm | 6 tháng | quý | TCVN 3.12.2.1 … 7.12.2.1 |
| Điều chỉnh ngưỡng cảnh báo | `{{CHU_KY_DIEU_CHINH_NGUONG_CANH_BAO}}` | — | — | 6 tháng | quý | tháng | TCVN 5.13.2.5, 6.13.2.5, 7.13.2.6 |
| Đào tạo nhận thức toàn bộ người dùng | `{{CHU_KY_DAO_TAO_NHAN_THUC}}` | 1 năm | 1 năm | 1 năm | 1 năm | 1 năm | TCVN 3.13.2.2, 4.13.2.2, 5.14.2.2, 6.14.2.2, 7.14.2.2 |
| Đào tạo theo vị trí, vai trò | `{{CHU_KY_DAO_TAO_VAI_TRO}}` | — | — | — | 1 năm | 1 năm | TCVN 6.14.2.3, 7.14.2.3 |
| Cập nhật danh sách nhà cung cấp | `{{CHU_KY_CAP_NHAT_DS_NCC}}` | 1 năm | 1 năm | 1 năm | 1 năm | 1 năm | TCVN 3.14.2, 4.14.2, 5.15.2, 6.15.2.1, 7.15.2.1 |
| Cập nhật quy trình sự cố; xác minh danh bạ | `{{CHU_KY_CAP_NHAT_QT_SU_CO}}` | 1 năm | 1 năm | 1 năm | 1 năm | 1 năm | TCVN 3.15.2 … 7.17.2 |
| Diễn tập ứng phó sự cố | `{{CHU_KY_DIEN_TAP}}` | (NĐ 331 Đ31.3 — không nêu chu kỳ) | (như C1) | định kỳ | 1 năm | 1 năm | NĐ 331 Đ31.3; TCVN 5.16.1, 6.17.2.6, 7.17.2.6 |
| Kiểm thử xâm nhập | `{{CHU_KY_PENTEST}}` | — | — | tổ chức chọn (quý/nửa năm/năm/đột xuất) | ngoài 1 năm + trong 1 năm | ngoài 6 tháng + trong 6 tháng | TCVN 5.18.2.1, 6.18.2.2, 6.18.2.5, 7.18.2.2, 7.18.2.5 |
| Tự đánh giá tổng thể | `{{CHU_KY_TU_DANH_GIA}}` | 1 năm (khuyến nghị) | 1 năm | 1 năm | 1 năm | theo tổ chức chuyên môn (NĐ 331 Đ31.2.c) | NĐ 331 Đ28.5.a, Đ31.2.c, Đ35 — **[CẦN ĐỐI CHIẾU]** chu kỳ chưa được quy định cụ thể |

**Tham số tổ chức tự quy định (TCVN không ấn định):** `{{RPO}}`, `{{RTO}}`, `{{SLA_VA_NGHIEM_TRONG}}` (gợi ý nội bộ: 7 ngày), `{{SLA_VA_CAO}}` (30 ngày), `{{SLA_VA_TRUNG_BINH}}` (90 ngày), `{{SLA_VA_THAP}}` (theo kế hoạch) — các giá trị gợi ý là thực hành phổ biến, **không phải yêu cầu pháp lý**.

### Sao lưu — bảng khai báo (điền cho từng hệ thống)

| Loại dữ liệu | Tần suất | Phương pháp | Nơi lưu (tách biệt) | Mã hóa | Giữ bao lâu | Khôi phục thử |
|---|---|---|---|---|---|---|
| Tệp cấu hình hệ thống | {{…}} | | | | | |
| Bản dự phòng hệ điều hành máy chủ | | | | | | |
| Cơ sở dữ liệu | | | | | | |
| Dữ liệu, thông tin nghiệp vụ | | | | | | |
| Nhật ký (log) | | | | | ≥ `{{THOI_GIAN_LUU_NHAT_KY}}` | |

## Phụ lục 2 — Danh mục quy trình, biểu mẫu kèm theo

| Mã | Tên | File/Ghi chú |
|---|---|---|
| QT-SC | Quy trình ứng phó sự cố ANM | [quy-trinh-ung-pho-su-co.md](quy-trinh-ung-pho-su-co.md) |
| QT-RR | Quy trình quản lý rủi ro | [quy-trinh-quan-ly-rui-ro.md](quy-trinh-quan-ly-rui-ro.md) |
| QT-DGTVH | Quy trình đánh giá trước vận hành | [quy-trinh-danh-gia-truoc-van-hanh.md](quy-trinh-danh-gia-truoc-van-hanh.md) |
| QT-YC | Quy trình tiếp nhận yêu cầu cơ quan chức năng | [quy-trinh-tiep-nhan-yeu-cau-co-quan-chuc-nang.md](quy-trinh-tiep-nhan-yeu-cau-co-quan-chuc-nang.md) |
| QT-NCC | Quy trình quản lý nhà cung cấp | [quy-trinh-quan-ly-nha-cung-cap.md](quy-trinh-quan-ly-nha-cung-cap.md) |
| KH-DT | Kế hoạch đào tạo, diễn tập | [ke-hoach-dao-tao-dien-tap.md](ke-hoach-dao-tao-dien-tap.md) |
| RACI | Ma trận trách nhiệm | [ma-tran-raci.md](ma-tran-raci.md) |
| BM-TK-01 | Phiếu yêu cầu cấp/thay đổi/thu hồi quyền | Mẫu dưới đây |
| BM-TK-02 | Biên bản rà soát tài khoản định kỳ | Tổ chức tự lập |
| BM-SL-01 | Biên bản khôi phục thử | Tổ chức tự lập |
| BM-TD-01 | Phiếu yêu cầu thay đổi | Tổ chức tự lập |

### BM-TK-01 — Phiếu yêu cầu cấp/thay đổi/thu hồi quyền truy cập

| Trường | Nội dung |
|---|---|
| Người yêu cầu / đơn vị | |
| Người được cấp quyền / chức danh | |
| Loại yêu cầu | ☐ Cấp mới ☐ Thay đổi ☐ Thu hồi ☐ Gia hạn tạm thời (đến ngày …) |
| Hệ thống / tài sản | {{TEN_HE_THONG}} |
| Loại tài khoản | ☐ Quản trị ☐ Tác nghiệp ☐ Kỹ thuật ☐ Dịch vụ |
| Quyền cụ thể / vai trò | |
| Lý do nghiệp vụ | |
| Phê duyệt quản lý trực tiếp | Ký, ngày |
| Phê duyệt chủ sở hữu dữ liệu/hệ thống | Ký, ngày |
| Thẩm tra ANM (bắt buộc với tài khoản đặc quyền) | Ký, ngày |
| Thực hiện (người thực hiện, thời điểm, mã yêu cầu) | |

## Phụ lục 3 — Danh mục HTTT áp dụng

| STT | Tên HTTT | Cấp độ | QĐ phê duyệt cấp độ | Đơn vị vận hành | Tham số riêng (nếu khác Phụ lục 1) |
|---|---|---|---|---|---|
| 1 | {{TEN_HE_THONG}} | {{CAP_DO}} | {{SO_QD_PHE_DUYET}} | {{DON_VI_VAN_HANH}} | |

---

## Checklist rà soát Quy chế trước khi trình ký

- [ ] Đủ 7 nhóm Đ30.3 (Chương II–VIII).
- [ ] Tham số Phụ lục 1 đã điền theo cấp độ cao nhất/từng hệ thống; không để trống placeholder.
- [ ] Đối chiếu với phương án ANM trong Hồ sơ đề xuất cấp độ (Quy chế là "phương án bảo đảm ANM về quản lý" — NĐ 331 Đ27.2.a).
- [ ] Các điều khoản chỉ áp dụng cho DN cung cấp dịch vụ (Điều 25.7, 26.3, 36, 37) đã giữ/bỏ đúng.
- [ ] Người ký là cấp có thẩm quyền của chủ quản; ban hành **trước** ngày phê duyệt Hồ sơ đề xuất cấp độ (NĐ 331 Đ30.7).
- [ ] Có kế hoạch phổ biến Quy chế cho toàn bộ người dùng (biên bản/ký nhận).

## Bằng chứng cần lưu

| Bằng chứng | Phục vụ |
|---|---|
| Quyết định ban hành + Quy chế đã ký (ghi rõ ngày) — ngày ký trước ngày QĐ phê duyệt cấp độ | NĐ 331 Đ30.7, Đ36.11 |
| Biên bản phổ biến, ký nhận của người dùng | NĐ 331 Đ27.2.b (tuân thủ Quy chế) |
| Hồ sơ thực hiện từng điều (danh sách tài khoản, biên bản rà soát, báo cáo rà quét, biên bản khôi phục thử, sổ sự cố, sổ yêu cầu…) | NĐ 331 Đ27.2, Đ36.7 |
| Biên bản rà soát, sửa đổi Quy chế | TCVN các mục "đánh giá và cập nhật" |
