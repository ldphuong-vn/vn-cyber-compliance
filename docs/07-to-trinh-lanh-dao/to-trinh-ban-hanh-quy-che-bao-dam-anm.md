# Mẫu Tờ trình ban hành Quy chế bảo đảm an ninh mạng

> **Căn cứ:** Luật 116/2025/QH15 Đ10.2.a, Đ10.3–10.4; NĐ 331/2026/NĐ-CP Đ27.2.a–b, Đ28.1, Đ30.3, Đ30.7, Đ36.6–36.7, Đ36.11; NĐ 330/2026/NĐ-CP Đ7.1, Đ23.1.a, Đ23.1.c, Đ23.3–23.4, Đ61.2.c; NĐ 333/2026/NĐ-CP Đ16.1, Đ16.6.c, Đ20.3; TCVN 14423:2026 mục 4.8, 5.8, 6.8, 7.8 · **Đối chiếu văn bản gốc:** 25/09/2026 · **Trạng thái:** Bản khung v0.1

## Khi nào dùng

- **Ai trình:** đơn vị chuyên trách ANM (đơn vị chủ trì soạn Quy chế). Pháp chế ký nháy hoặc có ý kiến kèm theo.
- **Trình ai:** người đứng đầu chủ quản HTTT, là cấp có thẩm quyền ban hành Quy chế (NĐ 331 Đ30.7).
- **Dùng lúc nào:** sau khi đã có đơn vị chuyên trách ANM; **trước khi** trình phê duyệt hồ sơ đề xuất cấp độ. Quy chế phải được phê duyệt, ban hành trước khi hồ sơ đề xuất cấp độ được phê duyệt (NĐ 331 Đ30.7).
- **Kèm theo:** dự thảo Quyết định ban hành và dự thảo Quy chế theo mẫu [`../04-chinh-sach-quy-trinh/quy-che-bao-dam-anm.md`](../04-chinh-sach-quy-trinh/quy-che-bao-dam-anm.md); các quy trình làm phụ lục (ứng phó sự cố, quản lý rủi ro, đánh giá trước vận hành, tiếp nhận yêu cầu của cơ quan chức năng, quản lý nhà cung cấp) tại [`../04-chinh-sach-quy-trinh/`](../04-chinh-sach-quy-trinh/README.md); bảng tổng hợp ý kiến góp ý.
- **Tài liệu liên quan:** thứ tự ban hành văn bản: [`../04-chinh-sach-quy-trinh/README.md`](../04-chinh-sach-quy-trinh/README.md) mục 2; ánh xạ yêu cầu quản lý theo cấp: [`../03-yeu-cau-theo-cap-do/anh-xa-nd331-d30-tcvn.md`](../03-yeu-cau-theo-cap-do/anh-xa-nd331-d30-tcvn.md).

---

| {{TEN_TO_CHUC}}<br/>**{{TEN_PHONG_TRINH}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_TO_TRINH}}/TTr-{{VIET_TAT_PHONG}} | *{{DIA_DANH}}, ngày {{NGAY}} tháng {{THANG}} năm {{NAM}}* |

<p align="center"><b>TỜ TRÌNH</b><br/><b>Về việc ban hành Quy chế bảo đảm an ninh mạng hệ thống thông tin</b></p>

Kính gửi: {{CHUC_DANH_LANH_DAO}}

*Căn cứ Luật An ninh mạng số 116/2025/QH15;*

*Căn cứ Nghị định số 331/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ về bảo vệ an ninh mạng đối với hệ thống thông tin;*

*Căn cứ Nghị định số 330/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ quy định xử phạt vi phạm hành chính trong lĩnh vực an ninh mạng và bảo vệ dữ liệu cá nhân;*

*Căn cứ {{CAN_CU_THAM_QUYEN}};*

*Căn cứ Quyết định số {{SO_QD_CHUYEN_TRACH}} về việc thành lập (chỉ định) đơn vị (bộ phận) chuyên trách về an ninh mạng.*

{{TEN_PHONG_TRINH}} kính trình {{CHUC_DANH_LANH_DAO}} xem xét, ký ban hành Quy chế bảo đảm an ninh mạng hệ thống thông tin của {{TEN_TO_CHUC}} như sau:

*Viết tắt: Luật 116 là Luật An ninh mạng; NĐ 330, NĐ 331 là các Nghị định số 330/2026/NĐ-CP, 331/2026/NĐ-CP; ANM là an ninh mạng; HTTT là hệ thống thông tin. "Đ30.7" nghĩa là khoản 7 Điều 30.*

**I. SỰ CẦN THIẾT**

**1. Cơ sở pháp lý**

a) Ban hành quy định về bảo đảm ANM trong thiết kế, xây dựng, quản lý, vận hành, sử dụng, nâng cấp, hủy bỏ HTTT là một biện pháp bảo vệ ANM đối với HTTT (Luật 116 Đ10.2.a; NĐ 331 Đ28.1). Chủ quản HTTT cấp 3, cấp 4 bắt buộc áp dụng biện pháp này (Luật 116 Đ10.4).

b) Quy chế bảo đảm ANM phải đáp ứng yêu cầu an toàn về quản lý theo cấp độ, và phải được cấp có thẩm quyền phê duyệt, ban hành **trước khi hồ sơ đề xuất cấp độ được phê duyệt** (NĐ 331 Đ30.7).

c) Yêu cầu cơ bản về quản lý gồm 07 nhóm: chính sách ANM; tổ chức bảo đảm ANM; bảo đảm nguồn nhân lực; quản lý thiết kế, xây dựng; quản lý vận hành; phương án quản lý rủi ro; phương án kết thúc vận hành, thanh lý, hủy bỏ (NĐ 331 Đ30.3).

d) Khi kiểm tra, cơ quan chức năng đánh giá tính đầy đủ, phù hợp của Quy chế và việc tuân thủ Quy chế (NĐ 331 Đ27.2.a–b). Danh sách HTTT có Quy chế và thông tin Quyết định ban hành Quy chế là nội dung bắt buộc của báo cáo năm (NĐ 331 Đ36.6, Đ36.7, Đ36.11).

**2. Hiện trạng**

{{TEN_TO_CHUC}} hiện có {{HIEN_TRANG_QUY_DINH}}. Các quy định này chưa bao quát đủ 07 nhóm yêu cầu quản lý nêu trên và chưa gắn với cấp độ của từng HTTT. Hồ sơ đề xuất cấp độ của HTTT {{TEN_HE_THONG}} dự kiến trình phê duyệt vào {{NGAY_DU_KIEN_PHE_DUYET}}, nên Quy chế cần được ban hành trước thời điểm này.

**3. Rủi ro nếu không thực hiện**

| Hành vi hoặc hệ quả | Căn cứ | Mức phạt tổ chức hoặc hệ quả |
|---|---|---|
| Không ban hành quy định về bảo đảm ANM trong thiết kế, xây dựng, quản lý, vận hành, sử dụng, nâng cấp, hủy bỏ HTTT | NĐ 330 Đ23.1.a | 40–60 triệu đồng |
| Biện pháp khắc phục hậu quả kèm theo | NĐ 330 Đ23.4 | Buộc khôi phục tình trạng ban đầu, khắc phục tình trạng mất ANM, loại bỏ yếu tố vi phạm |
| Tái phạm (nếu tổ chức có Giấy phép thiết lập trang thông tin điện tử tổng hợp) | NĐ 330 Đ23.3 | Tước quyền sử dụng giấy phép từ 01 đến 06 tháng |
| Chưa có Quy chế | NĐ 331 Đ30.7 | Chưa đủ điều kiện phê duyệt hồ sơ đề xuất cấp độ. Do đó chưa thể đưa HTTT cấp 3 trở lên vào vận hành hợp lệ (vi phạm NĐ 330 Đ23.1.c, 40–60 triệu đồng) |
| Giám sát người lao động (phần mềm theo dõi thiết bị, camera, thu thập nhật ký) mà không thông báo cho người lao động | NĐ 330 Đ61.2.c | 50–70 triệu đồng (lĩnh vực dữ liệu cá nhân) |

Mức phạt về ANM ghi trong điều khoản là mức cho cá nhân; tổ chức bị phạt gấp hai lần. Mức phạt về dữ liệu cá nhân ghi trong điều khoản là mức cho tổ chức (NĐ 330 Đ7.1). Bảng trên đã quy đổi ra mức cho tổ chức.

**II. NỘI DUNG ĐỀ XUẤT**

**1. Bố cục dự thảo Quy chế:** gồm {{SO_CHUONG}} chương, {{SO_DIEU}} điều và các phụ lục:

| Chương | Nội dung | Căn cứ |
|---|---|---|
| I | Quy định chung: phạm vi, đối tượng, nguyên tắc; danh mục HTTT áp dụng | NĐ 331 Đ6 |
| II | Chính sách ANM | NĐ 331 Đ30.3.a |
| III | Tổ chức bảo đảm ANM: chủ quản, đơn vị chuyên trách, đơn vị vận hành, đơn vị đánh giá độc lập | NĐ 331 Đ30.3.b; Đ31–Đ33 |
| IV | Bảo đảm nguồn nhân lực | NĐ 331 Đ30.3.c |
| V | Quản lý thiết kế, xây dựng hệ thống | NĐ 331 Đ30.3.d |
| VI | Quản lý vận hành: tài sản, tài khoản, lỗ hổng, nhật ký, sao lưu, mã độc, mạng, giám sát, sự cố, nhà cung cấp | NĐ 331 Đ30.3.đ; TCVN 14423:2026 |
| VII | Quản lý rủi ro ANM | NĐ 331 Đ10, Đ30.3.e |
| VIII | Kết thúc vận hành, thanh lý, hủy bỏ | NĐ 331 Đ30.3.g |
| IX | Tổ chức thực hiện; kiểm tra, báo cáo; xử lý vi phạm | NĐ 331 Đ27, Đ35 |
| Phụ lục | Bảng tham số theo cấp độ; danh mục quy trình, biểu mẫu; danh mục HTTT | |

**2. Điểm mới cần lãnh đạo lưu ý:**

a) Quy chế áp dụng cho toàn bộ HTTT. Tham số (chu kỳ rà soát, thời gian lưu nhật ký, tần suất kiểm thử…) khác nhau theo cấp độ của từng HTTT, được quy định tại Phụ lục 1.

b) Thời gian lưu nhật ký: {{THOI_GIAN_LUU_NHAT_KY}}, bằng mức cao nhất trong các quy định đang áp dụng cho {{TEN_TO_CHUC}}.

c) Việc giám sát ANM có thu thập dữ liệu về hoạt động của người lao động được thông báo công khai trong Quy chế và nội quy lao động.

d) Người lao động vi phạm Quy chế bị xử lý kỷ luật theo {{NOI_QUY_LAO_DONG_QUY_CHE_KY_LUAT}}.

**3. Quá trình soạn thảo:** dự thảo đã được lấy ý kiến {{DANH_SACH_DON_VI_GOP_Y}}. Ý kiến đã được tiếp thu, giải trình tại bảng tổng hợp kèm theo.

**4. Hiệu lực và rà soát:** Quy chế có hiệu lực từ ngày ký. {{DON_VI_CHUYEN_TRACH_ANM}} rà soát, đề xuất sửa đổi Quy chế {{CHU_KY_RA_SOAT_QUY_CHE}} hoặc khi có thay đổi về pháp luật, cấp độ HTTT hoặc cơ cấu tổ chức.

**III. KINH PHÍ DỰ KIẾN**

| STT | Nội dung | Kinh phí dự kiến (đồng) | Ghi chú |
|---|---|---|---|
| 1 | Soạn thảo, rà soát pháp lý (nội bộ hoặc thuê tư vấn) | {{KINH_PHI}} | |
| 2 | Phổ biến Quy chế cho toàn bộ người lao động | {{KINH_PHI}} | Gộp với kế hoạch đào tạo năm |
| 3 | Điều chỉnh nội quy lao động, hợp đồng với nhà cung cấp | {{KINH_PHI}} | |
| | **Tổng cộng** | **{{TONG_KINH_PHI}}** | |

Nguồn kinh phí: {{NGUON_KINH_PHI}}.

**IV. TIẾN ĐỘ**

| STT | Công việc | Đơn vị chủ trì | Thời hạn |
|---|---|---|---|
| 1 | Ký ban hành Quyết định và Quy chế | {{CHUC_DANH_LANH_DAO}} | {{THOI_HAN}} |
| 2 | Phổ biến Quy chế; người lao động ký xác nhận đã đọc | {{PHONG_NHAN_SU}} | {{THOI_HAN}} |
| 3 | Sửa đổi nội quy lao động, phụ lục hợp đồng với nhà cung cấp | {{PHONG_PHAP_CHE}} | {{THOI_HAN}} |
| 4 | Trình phê duyệt hồ sơ đề xuất cấp độ (sau khi đã ban hành Quy chế) | {{DON_VI_VAN_HANH}} | {{NGAY_DU_KIEN_PHE_DUYET}} |

**V. TỔ CHỨC THỰC HIỆN**

1. {{DON_VI_CHUYEN_TRACH_ANM}}: hướng dẫn, đôn đốc, kiểm tra việc thực hiện Quy chế; rà soát Quy chế định kỳ.

2. {{DON_VI_VAN_HANH}}: áp dụng Quy chế trong vận hành các HTTT; lưu bằng chứng thực hiện.

3. {{PHONG_NHAN_SU}}: phổ biến Quy chế; đưa nghĩa vụ ANM vào nội quy lao động, hợp đồng lao động.

4. {{PHONG_PHAP_CHE}}: rà soát pháp lý; cập nhật điều khoản ANM trong hợp đồng với nhà cung cấp.

5. Các đơn vị, người lao động: tuân thủ Quy chế.

**VI. KIẾN NGHỊ**

Kính trình {{CHUC_DANH_LANH_DAO}} xem xét:

1. Ký ban hành Quyết định ban hành Quy chế bảo đảm an ninh mạng hệ thống thông tin của {{TEN_TO_CHUC}} (dự thảo kèm theo).

2. Giao các đơn vị triển khai theo Mục IV và Mục V.

3. Phê duyệt kinh phí {{TONG_KINH_PHI}} từ {{NGUON_KINH_PHI}}.

| *Nơi nhận:*<br/>- Như trên;<br/>- {{PHONG_PHAP_CHE}};<br/>- {{PHONG_NHAN_SU}};<br/>- Lưu: VT, {{VIET_TAT_PHONG}}. | **{{CHUC_DANH_NGUOI_TRINH_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{HO_TEN_NGUOI_TRINH}}** |
|:---|:---:|

| Ý KIẾN PHÊ DUYỆT CỦA LÃNH ĐẠO |
|:---|
| ☐ Đồng ý ban hành &nbsp;&nbsp; ☐ Đồng ý, có điều chỉnh &nbsp;&nbsp; ☐ Không đồng ý &nbsp;&nbsp; ☐ Ý kiến khác |
| Ý kiến cụ thể: ............................................................................................................ |
| Ngày ....../....../.......... &nbsp;&nbsp; {{CHUC_DANH_LANH_DAO}} *(ký, ghi rõ họ tên)* |

## Hướng dẫn điền

**Cách điền**

- `{{HIEN_TRANG_QUY_DINH}}`: liệt kê các quy định nội bộ đang có (ví dụ "Quy định sử dụng máy tính năm 2022"). Nếu chưa có gì, ghi "chưa có quy định nội bộ về ANM".
- `{{THOI_GIAN_LUU_NHAT_KY}}`: lấy mức cao nhất áp dụng cho tổ chức. Theo TCVN 14423:2026, mức tối thiểu là 1, 3, 6, 12 tháng lần lượt cho cấp 2, 3, 4, 5 (mục 4.8, 5.8, 6.8, 7.8). Doanh nghiệp cung cấp dịch vụ trên mạng viễn thông, Internet thuộc NĐ 333 Đ16.1 phải lưu ít nhất 12 tháng (NĐ 333 Đ16.6.c, Đ20.3). Xem bảng tham số tại Phụ lục 1 của mẫu Quy chế.
- **Cấp 1–2:** Luật 116 Đ10.3 cho phép chủ quản HTTT cấp 1–2 "lựa chọn áp dụng" các biện pháp tại Đ10.2, nhưng NĐ 331 Đ30.7 vẫn yêu cầu có Quy chế trước khi phê duyệt hồ sơ đề xuất cấp độ, không phân biệt cấp. Và NĐ 330 Đ23.1.a xử phạt không phân biệt cấp. Khuyến nghị: mọi tổ chức đều ban hành Quy chế.
- Dòng "tái phạm, tước giấy phép" chỉ giữ lại khi tổ chức có Giấy phép thiết lập trang thông tin điện tử tổng hợp. Nếu không có thì xóa dòng này.
- Nếu Quy chế dùng chung cho nhiều HTTT có cấp độ khác nhau, ghi rõ ở Mục II.2.a để người phê duyệt hồ sơ cấp độ thấy Quy chế "đáp ứng yêu cầu quản lý theo cấp độ tương ứng" (NĐ 331 Đ30.7).
- **[CẦN ĐỐI CHIẾU]** Thể thức văn bản theo NĐ 30/2020/NĐ-CP. Văn bản này không có trong bộ nguồn của repo. Doanh nghiệp áp dụng quy chế văn thư nội bộ.

**Mẹo thuyết phục lãnh đạo**

- Đây là tờ trình có chi phí thấp, tác dụng lớn: Quy chế là **điều kiện tiên quyết** để phê duyệt hồ sơ cấp độ (NĐ 331 Đ30.7). Thiếu Quy chế thì toàn bộ lộ trình dừng lại.
- Nêu rõ Quy chế là tài liệu cơ quan chức năng sẽ yêu cầu khi kiểm tra (NĐ 331 Đ27.2.a–b) và phải khai trong báo cáo năm gửi Bộ Công an (NĐ 331 Đ36.11).
- Đưa việc thông báo giám sát người lao động (NĐ 330 Đ61.2.c) vào tờ trình: lãnh đạo nhân sự thường quan tâm điểm này và nó giảm rủi ro tranh chấp lao động.

**Tài liệu đính kèm**

- [ ] Dự thảo Quyết định ban hành và Quy chế (mẫu tại [`../04-chinh-sach-quy-trinh/quy-che-bao-dam-anm.md`](../04-chinh-sach-quy-trinh/quy-che-bao-dam-anm.md)).
- [ ] Các quy trình làm phụ lục.
- [ ] Bảng tổng hợp, tiếp thu, giải trình ý kiến góp ý.
- [ ] Kết quả rà soát theo "Checklist rà soát Quy chế trước khi trình ký" trong mẫu Quy chế.
