# Mẫu Tờ trình đáp ứng nghĩa vụ lưu trữ dữ liệu, nhật ký và tiếp nhận yêu cầu theo Nghị định 333

> **Căn cứ:** Luật 116/2025/QH15 Đ25.2–25.4, Đ41.7; NĐ 333/2026/NĐ-CP Đ3.3–3.5, Đ11.2.b, Đ16, Đ18.2, Đ19, Đ20; NĐ 330/2026/NĐ-CP Đ7.1, Đ29, Đ30.1, Đ32.1.a, Đ33, Đ34.1.c, Đ39.1.c · **Đối chiếu văn bản gốc:** 25/09/2026 · **Trạng thái:** Bản khung v0.1

## Khi nào dùng

- **Ai trình:** đơn vị chuyên trách ANM, phối hợp Phòng Pháp chế (kết luận phạm vi áp dụng) và đơn vị vận hành (giải pháp kỹ thuật).
- **Trình ai:** người đứng đầu doanh nghiệp.
- **Dùng lúc nào:** khi doanh nghiệp **cung cấp dịch vụ trên mạng viễn thông, mạng Internet, dịch vụ gia tăng trên không gian mạng tại Việt Nam** (Luật 116 Đ25.2; NĐ 333 Đ16.1), hoặc chưa kết luận được mình có thuộc diện này hay không. Nên trình trước khi ra mắt dịch vụ mới, hoặc ngay khi rà soát dịch vụ đang cung cấp.
- **Kèm theo:** ý kiến pháp lý về phạm vi áp dụng; sơ đồ luồng dữ liệu và vị trí lưu trữ; cấu hình nhật ký hiện tại; dự thảo quy trình tiếp nhận yêu cầu của cơ quan chức năng.
- **Tài liệu liên quan:** nghĩa vụ NĐ 333 và các vùng chưa rõ: [`../05-nghia-vu-lien-quan/nd-333-nghia-vu-doanh-nghiep.md`](../05-nghia-vu-lien-quan/nd-333-nghia-vu-doanh-nghiep.md); quy trình tiếp nhận yêu cầu: [`../04-chinh-sach-quy-trinh/quy-trinh-tiep-nhan-yeu-cau-co-quan-chuc-nang.md`](../04-chinh-sach-quy-trinh/quy-trinh-tiep-nhan-yeu-cau-co-quan-chuc-nang.md); mức phạt: [`../05-nghia-vu-lien-quan/nd-330-muc-phat.md`](../05-nghia-vu-lien-quan/nd-330-muc-phat.md) mục C, D, E.

---

| {{TEN_TO_CHUC}}<br/>**{{TEN_PHONG_TRINH}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{SO_TO_TRINH}}/TTr-{{VIET_TAT_PHONG}} | *{{DIA_DANH}}, ngày {{NGAY}} tháng {{THANG}} năm {{NAM}}* |

<p align="center"><b>TỜ TRÌNH</b><br/><b>Về việc triển khai lưu trữ dữ liệu tại Việt Nam, lưu trữ nhật ký hệ thống và tiếp nhận yêu cầu của lực lượng chuyên trách bảo vệ an ninh mạng</b></p>

Kính gửi: {{CHUC_DANH_LANH_DAO}}

*Căn cứ Luật An ninh mạng số 116/2025/QH15;*

*Căn cứ Nghị định số 333/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật An ninh mạng;*

*Căn cứ Nghị định số 330/2026/NĐ-CP ngày 19 tháng 8 năm 2026 của Chính phủ quy định xử phạt vi phạm hành chính trong lĩnh vực an ninh mạng và bảo vệ dữ liệu cá nhân;*

*Căn cứ {{CAN_CU_THAM_QUYEN}}.*

{{TEN_PHONG_TRINH}} kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt phương án đáp ứng các nghĩa vụ về lưu trữ dữ liệu, nhật ký hệ thống, xác thực tài khoản và tiếp nhận yêu cầu của lực lượng chuyên trách bảo vệ an ninh mạng đối với dịch vụ {{TEN_DICH_VU}} như sau:

*Viết tắt: Luật 116 là Luật An ninh mạng; NĐ 330, NĐ 333 là các Nghị định số 330/2026/NĐ-CP, 333/2026/NĐ-CP; ANM là an ninh mạng; "lực lượng chuyên trách" là lực lượng chuyên trách bảo vệ ANM thuộc Bộ Công an. "Đ16.6.c" nghĩa là điểm c khoản 6 Điều 16.*

**I. SỰ CẦN THIẾT**

**1. Đối tượng áp dụng**

Các nghĩa vụ dưới đây áp dụng cho doanh nghiệp trong nước và nước ngoài khi cung cấp dịch vụ trên mạng viễn thông, mạng Internet, các dịch vụ gia tăng trên không gian mạng tại Việt Nam (Luật 116 Đ25.2–25.3; NĐ 333 Đ16.1). NĐ 333 định nghĩa các loại dịch vụ này bằng cách dẫn chiếu pháp luật viễn thông: dịch vụ trên mạng viễn thông gồm dịch vụ viễn thông và dịch vụ ứng dụng viễn thông; dịch vụ trên mạng Internet gồm dịch vụ Internet và dịch vụ nội dung thông tin trên mạng viễn thông di động; dịch vụ gia tăng là dịch vụ viễn thông giá trị gia tăng (NĐ 333 Đ3.3–3.5).

Dịch vụ {{TEN_DICH_VU}} của {{TEN_TO_CHUC}}: {{MO_TA_DICH_VU}}. Kết luận sơ bộ của {{PHONG_PHAP_CHE}} về việc thuộc diện áp dụng: {{KET_LUAN_PHAM_VI}}.

**2. Các nghĩa vụ chính**

| STT | Nghĩa vụ | Thời hạn, mức yêu cầu | Căn cứ |
|---|---|---|---|
| 1 | Xác thực thông tin người dùng khi đăng ký tài khoản số, bằng số điện thoại di động tại Việt Nam; không có số di động Việt Nam thì bằng số định danh cá nhân hoặc phương thức định danh điện tử hợp pháp khác; chỉ tài khoản đã xác thực mới được đăng tải, chia sẻ, tương tác | Tại thời điểm đăng ký | NĐ 333 Đ16.2; Luật 116 Đ25.2.a |
| 2 | Cung cấp thông tin người dùng cho lực lượng chuyên trách khi có yêu cầu hợp lệ | Chậm nhất 24 giờ; khẩn cấp chậm nhất 03 giờ | NĐ 333 Đ16.3; Luật 116 Đ25.2.a |
| 3 | Ngăn chặn, xóa bỏ thông tin, gỡ bỏ dịch vụ, ứng dụng vi phạm theo yêu cầu của lực lượng chuyên trách | Chậm nhất 24 giờ; khẩn cấp chậm nhất 06 giờ | NĐ 333 Đ16.4.a–b; Luật 116 Đ25.2.b |
| 4 | Lưu trữ nhật ký hệ thống, tối thiểu gồm: tài khoản người dùng, thời gian đăng nhập và đăng xuất, địa chỉ IP, cổng nguồn khi đăng nhập và đăng xuất, nhật ký xử lý thông tin được đăng tải | Truy xuất được ít nhất 12 tháng | NĐ 333 Đ16.6, Đ20.3 |
| 5 | Lưu trữ tại Việt Nam thông tin cá nhân của người dùng tại Việt Nam và dữ liệu do họ tạo ra (tên tài khoản, thời gian sử dụng, thông tin thẻ tín dụng, thư điện tử, địa chỉ IP đăng nhập, đăng xuất gần nhất, số điện thoại đăng ký) | Doanh nghiệp trong nước: lưu tại Việt Nam; thời gian lưu tối thiểu 24 tháng | NĐ 333 Đ19.1–19.2, Đ20.1; Luật 116 Đ25.3 |
| 6 | Hình thức lưu trữ do doanh nghiệp tự quyết định, nhưng phải truy xuất, cung cấp kịp thời khi có yêu cầu và bảo đảm an toàn thông tin theo tiêu chuẩn, quy chuẩn quốc gia | Thường xuyên | NĐ 333 Đ19.5 |
| 7 | Lưu trữ thông tin cá nhân và dữ liệu người dùng sau khi người dùng kết thúc sử dụng dịch vụ | Trong thời gian theo quy định của pháp luật | Luật 116 Đ25.2.d |

Doanh nghiệp nước ngoài thuộc 11 lĩnh vực tại NĐ 333 Đ19.3.a phải lưu trữ dữ liệu và đặt chi nhánh hoặc văn phòng đại diện tại Việt Nam khi có quyết định của Bộ trưởng Bộ Công an, và hoàn thành trong 12 tháng kể từ ngày có quyết định (NĐ 333 Đ19.6).

**3. Hiện trạng**

| STT | Nội dung | Hiện trạng dịch vụ {{TEN_DICH_VU}} |
|---|---|---|
| 1 | Vị trí lưu trữ dữ liệu người dùng (trong nước hay nước ngoài; nhà cung cấp; vùng) | {{VI_TRI_LUU_TRU}} |
| 2 | Thời gian lưu và các trường của nhật ký đăng nhập, xử lý nội dung | {{TINH_TRANG}} |
| 3 | Phương thức xác thực tài khoản khi đăng ký | {{TINH_TRANG}} |
| 4 | Đầu mối, quy trình tiếp nhận yêu cầu của lực lượng chuyên trách ngoài giờ hành chính | {{TINH_TRANG}} |
| 5 | Kiểm thử truy xuất dữ liệu và nhật ký gần nhất | {{TINH_TRANG}} |

**4. Rủi ro nếu không thực hiện (mức phạt tổ chức)**

| Hành vi | Căn cứ | Mức phạt tổ chức (đồng) | Biện pháp khác |
|---|---|---|---|
| Không xác thực thông tin khi người dùng đăng ký tài khoản số; không bảo mật thông tin, tài khoản người dùng | NĐ 330 Đ29.1 | 60–100 triệu | Buộc thực hiện biện pháp bảo đảm an ninh thông tin mạng (Đ29.3.a) |
| Không cung cấp hoặc cung cấp chậm quá 24 giờ thông tin người dùng khi có yêu cầu bằng văn bản, không có lý do chính đáng | NĐ 330 Đ30.1.a | 50–100 triệu | Buộc thực hiện biện pháp (Đ30.2) |
| Không ngăn chặn, xóa bỏ thông tin, gỡ bỏ dịch vụ, ứng dụng vi phạm trong 24 giờ (khẩn cấp 06 giờ) và lưu nhật ký hệ thống | NĐ 330 Đ29.2.a | 100–140 triệu | Buộc ngừng cung cấp dịch vụ tại Việt Nam; buộc xóa khỏi kho ứng dụng (Đ29.3.b–c) |
| Không áp dụng biện pháp bảo vệ dữ liệu và lưu trữ dữ liệu tại Việt Nam khi thu thập, xử lý dữ liệu người dùng tại Việt Nam | NĐ 330 Đ29.2.c | 100–140 triệu | Buộc thực hiện biện pháp (Đ29.3.a) |
| Không lưu trữ dữ liệu hoặc lưu trữ dữ liệu nhạy cảm về an ninh quốc gia không đầy đủ | NĐ 330 Đ33.1.a | 60–100 triệu | Buộc lưu trữ; buộc ngừng cung cấp dịch vụ tại Việt Nam (Đ33.3) |
| Không bảo đảm thời gian lưu trữ nhật ký hệ thống phục vụ điều tra | NĐ 330 Đ33.1.c | 60–100 triệu | Như trên |
| Không lưu trữ thông tin thiết bị, địa chỉ IP, thời gian đăng nhập của tài khoản số tối thiểu 90 ngày | NĐ 330 Đ34.1.c | 40–60 triệu | Buộc khôi phục tình trạng ban đầu (Đ34.3) |

Mức phạt ghi trong NĐ 330 cho lĩnh vực ANM là mức cho cá nhân; tổ chức bị phạt gấp hai lần (NĐ 330 Đ7.1). Bảng trên đã quy đổi. Rủi ro lớn nhất về kinh doanh là biện pháp **buộc ngừng cung cấp dịch vụ tại Việt Nam** (NĐ 330 Đ29.3.b, Đ33.3.b).

**II. NỘI DUNG ĐỀ XUẤT**

1. **Kết luận phạm vi áp dụng:** giao {{PHONG_PHAP_CHE}} hoàn thiện ý kiến pháp lý, đối chiếu Luật Viễn thông; nếu cần thì xin ý kiến cơ quan có thẩm quyền. Trong thời gian chờ, áp dụng các biện pháp tại Mục II.2–II.5 theo hướng thận trọng.

2. **Lưu trữ dữ liệu tại Việt Nam:** lập danh mục dữ liệu thuộc NĐ 333 Đ19.1; bảo đảm các dữ liệu này được lưu tại Việt Nam ({{PHUONG_AN_LUU_TRU}}); thời gian lưu tối thiểu 24 tháng; kiểm thử truy xuất {{CHU_KY_KIEM_THU_TRUY_XUAT}}.

3. **Nhật ký hệ thống:** bổ sung đủ các trường tối thiểu tại NĐ 333 Đ16.6.b; lưu tập trung, bảo vệ toàn vẹn; thời gian lưu {{THOI_GIAN_LUU_NHAT_KY}}, không ngắn hơn 12 tháng.

4. **Xác thực tài khoản:** áp dụng xác thực bằng số điện thoại di động tại Việt Nam, hoặc số định danh cá nhân, phương thức định danh điện tử hợp pháp khác; tài khoản chưa xác thực không được đăng tải, chia sẻ, tương tác (NĐ 333 Đ16.2).

5. **Tiếp nhận yêu cầu của lực lượng chuyên trách:** thiết lập đầu mối thường trực, số điện thoại {{SDT_TRUC_24_7}}, thư điện tử {{EMAIL_TIEP_NHAN_YEU_CAU}}; ban hành quy trình xác thực yêu cầu, xử lý trong 24 giờ (03 giờ, 06 giờ khi khẩn cấp), ghi sổ theo dõi thời điểm nhận và thời điểm hoàn thành.

**III. KINH PHÍ DỰ KIẾN**

| STT | Nội dung | Đầu tư ban đầu (đồng) | Chi phí hằng năm (đồng) |
|---|---|---|---|
| 1 | Hạ tầng lưu trữ tại Việt Nam, chuyển dữ liệu (nếu cần) | {{KINH_PHI}} | {{KINH_PHI}} |
| 2 | Mở rộng dung lượng lưu nhật ký 12 tháng | {{KINH_PHI}} | {{KINH_PHI}} |
| 3 | Dịch vụ xác thực (OTP, định danh điện tử) | {{KINH_PHI}} | {{KINH_PHI}} |
| 4 | Trực tiếp nhận yêu cầu 24/7 | {{KINH_PHI}} | {{KINH_PHI}} |
| 5 | Tư vấn pháp lý về phạm vi áp dụng | {{KINH_PHI}} | {{KINH_PHI}} |
| | **Tổng cộng** | **{{TONG_KINH_PHI}}** | **{{TONG_KINH_PHI_HANG_NAM}}** |

Nguồn kinh phí: {{NGUON_KINH_PHI}}.

**IV. TIẾN ĐỘ**

| STT | Công việc | Đơn vị chủ trì | Thời hạn |
|---|---|---|---|
| 1 | Ý kiến pháp lý về phạm vi áp dụng | {{PHONG_PHAP_CHE}} | {{THOI_HAN}} |
| 2 | Thiết lập đầu mối, ban hành quy trình tiếp nhận yêu cầu | {{DON_VI_CHUYEN_TRACH_ANM}} | {{THOI_HAN}} |
| 3 | Bổ sung trường nhật ký, nâng thời gian lưu lên 12 tháng | {{DON_VI_VAN_HANH}} | {{THOI_HAN}} |
| 4 | Hoàn tất lưu trữ dữ liệu tại Việt Nam; kiểm thử truy xuất | {{DON_VI_VAN_HANH}} | {{THOI_HAN}} |
| 5 | Áp dụng xác thực tài khoản khi đăng ký | {{DON_VI_VAN_HANH}} | {{THOI_HAN}} |

**V. TỔ CHỨC THỰC HIỆN**

1. {{DON_VI_CHUYEN_TRACH_ANM}}: đầu mối; quản lý quy trình tiếp nhận yêu cầu; kiểm tra định kỳ việc lưu trữ, truy xuất.

2. {{DON_VI_VAN_HANH}}: triển khai lưu trữ, nhật ký, xác thực; tham gia trực xử lý yêu cầu.

3. {{PHONG_PHAP_CHE}}: kết luận phạm vi áp dụng; kiểm tra tính hợp lệ của yêu cầu; phối hợp nhân sự BVDLCN bảo đảm việc lưu trữ phù hợp nghĩa vụ bảo vệ dữ liệu cá nhân.

4. Bộ phận phát triển sản phẩm: điều chỉnh luồng đăng ký tài khoản; thông báo cho người dùng khi thay đổi điều khoản sử dụng.

5. {{PHONG_TAI_CHINH}}: bố trí kinh phí.

**VI. KIẾN NGHỊ**

Kính trình {{CHUC_DANH_LANH_DAO}} xem xét, phê duyệt:

1. Phương án tại Mục II và tiến độ tại Mục IV.

2. Kinh phí đầu tư ban đầu {{TONG_KINH_PHI}}; chi phí hằng năm {{TONG_KINH_PHI_HANG_NAM}}; nguồn {{NGUON_KINH_PHI}}.

3. Giao {{DON_VI_CHUYEN_TRACH_ANM}} làm đầu mối tiếp nhận yêu cầu của lực lượng chuyên trách; ủy quyền {{CHUC_DANH_DUOC_UY_QUYEN}} ký văn bản trả lời yêu cầu trong trường hợp khẩn cấp.

| *Nơi nhận:*<br/>- Như trên;<br/>- {{PHONG_PHAP_CHE}};<br/>- {{DON_VI_VAN_HANH}};<br/>- Lưu: VT, {{VIET_TAT_PHONG}}. | **{{CHUC_DANH_NGUOI_TRINH_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{HO_TEN_NGUOI_TRINH}}** |
|:---|:---:|

| Ý KIẾN PHÊ DUYỆT CỦA LÃNH ĐẠO |
|:---|
| ☐ Đồng ý &nbsp;&nbsp; ☐ Đồng ý, có điều chỉnh &nbsp;&nbsp; ☐ Không đồng ý &nbsp;&nbsp; ☐ Ý kiến khác |
| Ý kiến cụ thể: ............................................................................................................ |
| Ngày ....../....../.......... &nbsp;&nbsp; {{CHUC_DANH_LANH_DAO}} *(ký, ghi rõ họ tên)* |

## Hướng dẫn điền

**Cách điền — các vùng chưa rõ phải nêu trung thực**

- **[CẦN ĐỐI CHIẾU] Phạm vi áp dụng (vùng 3.5).** Việc một website, ứng dụng bán hàng, cổng khách hàng hay dịch vụ SaaS có thuộc "dịch vụ trên mạng viễn thông, Internet, dịch vụ gia tăng" hay không phụ thuộc định nghĩa trong pháp luật viễn thông (NĐ 333 Đ3.3–3.5). Luật Viễn thông 24/2023/QH15 định nghĩa "dịch vụ ứng dụng viễn thông" khá rộng, nên nhiều dịch vụ trực tuyến có thể thuộc diện này. Không khẳng định chắc chắn trong tờ trình; ghi "kết luận sơ bộ" và nêu hướng thận trọng.
- **[CẦN ĐỐI CHIẾU] Thời gian lưu 24 tháng (vùng 3.2).** NĐ 333 Đ20.1 tính thời gian lưu "từ khi doanh nghiệp nhận được yêu cầu lưu trữ dữ liệu", trong khi Đ19.2 buộc doanh nghiệp trong nước lưu tại Việt Nam mà không cần có yêu cầu. Bộ khung khuyến nghị cách hiểu an toàn: lưu tại Việt Nam ngay và giữ tối thiểu 24 tháng.
- **[CẦN ĐỐI CHIẾU] Doanh nghiệp nước ngoài (vùng 3.3).** Luật 116 Đ25.3 và NĐ 330 Đ29.2.d quy định phải đặt chi nhánh hoặc văn phòng đại diện mà không kèm điều kiện; NĐ 333 Đ19.3 chỉ đặt nghĩa vụ khi có quyết định của Bộ trưởng Bộ Công an. Nếu là doanh nghiệp nước ngoài, thêm mục riêng về phương án chuẩn bị.
- **[CẦN ĐỐI CHIẾU] Thời hạn lưu dữ liệu người dùng sau khi họ kết thúc dịch vụ (vùng 3.8).** Luật 116 Đ25.2.d giao "thời gian theo quy định của pháp luật", NĐ 333 không quy định riêng. Bộ khung tạm áp tối thiểu 24 tháng.
- **Thời gian lưu nhật ký:** các văn bản quy định khác nhau: 12 tháng (NĐ 333 Đ16.6.c, Đ20.3); 90 ngày cho thông tin thiết bị, IP, thời gian đăng nhập tài khoản số (NĐ 330 Đ34.1.c); 1–12 tháng tùy cấp độ (TCVN 14423:2026 mục 4.8–7.8). Áp mức cao nhất, tức ít nhất 12 tháng. Đồng thời không lưu dữ liệu cá nhân quá thời gian cần thiết (NĐ 330 Đ39.1.c): quy định rõ thời hạn xóa sau mốc tối thiểu.
- **[CẦN ĐỐI CHIẾU] Trùng điều khoản phạt:** không lưu dữ liệu tại Việt Nam bị phạt ở cả NĐ 330 Đ29.2.c (100–140 triệu) và Đ33.1.a (60–100 triệu). Chưa rõ cơ quan xử phạt chọn điều nào (điểm C8 tại [`../00-tong-quan/diem-can-doi-chieu.md`](../00-tong-quan/diem-can-doi-chieu.md)). Trong tờ trình nêu cả hai, không cộng dồn.
- Doanh nghiệp hosting, trung tâm dữ liệu, viễn thông có thêm nghĩa vụ gỡ nội dung trong 24 giờ khi nhận yêu cầu bằng văn bản, điện thoại hoặc thư điện tử (NĐ 333 Đ18.2.a), và nghĩa vụ định danh địa chỉ IP (NĐ 333 Đ21–Đ23). Bổ sung vào Mục I.2 nếu thuộc diện.
- Chủ quản HTTT (không phân biệt có cung cấp dịch vụ hay không) cũng là đối tượng nhận văn bản yêu cầu xóa bỏ thông tin trái pháp luật của lực lượng chuyên trách (NĐ 333 Đ11.2.b). Không xóa bỏ thông tin sau khi có đề nghị bị phạt 50–100 triệu đồng đối với tổ chức (NĐ 330 Đ32.1.a).
- Lưu trữ dữ liệu người dùng cũng là xử lý DLCN. Phối hợp với tờ trình [to-trinh-tuan-thu-bao-ve-du-lieu-ca-nhan.md](to-trinh-tuan-thu-bao-ve-du-lieu-ca-nhan.md) để thống nhất chính sách lưu trữ, xóa, hủy.

**Mẹo thuyết phục lãnh đạo**

- Đặt trọng tâm vào **khả năng tiếp tục kinh doanh**: các hành vi ở bảng I.4 có thể kèm biện pháp buộc ngừng cung cấp dịch vụ tại Việt Nam hoặc buộc xóa ứng dụng khỏi kho ứng dụng (NĐ 330 Đ29.3, Đ33.3).
- Mốc 24 giờ và 03 giờ tính cả ngày nghỉ, ban đêm. Chi phí trực 24/7 cần được so với mức phạt khi chậm quá 24 giờ (NĐ 330 Đ30.1.a) và với rủi ro uy tín.
- Nếu dữ liệu đang ở cloud nước ngoài, trình bày song song hai lựa chọn: chuyển về vùng lưu trữ tại Việt Nam, hoặc giữ bản sao đầy đủ tại Việt Nam. Nêu thêm rằng việc giữ dữ liệu ở nước ngoài còn kéo theo hồ sơ chuyển DLCN xuyên biên giới (Luật 91/2025/QH15 Đ20).

**Tài liệu đính kèm**

- [ ] Ý kiến pháp lý về phạm vi áp dụng.
- [ ] Danh mục dữ liệu thuộc NĐ 333 Đ19.1 và vị trí lưu trữ hiện tại.
- [ ] Cấu hình nhật ký hiện tại và phương án bổ sung.
- [ ] Dự thảo quy trình tiếp nhận yêu cầu (mẫu tại thư mục `04-chinh-sach-quy-trinh`).
- [ ] Báo giá hạ tầng lưu trữ, dịch vụ xác thực.
