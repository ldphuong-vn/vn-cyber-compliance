# Mẫu Tuyên bố về dữ liệu huấn luyện mô hình AI

> **Căn cứ:** Luật 91/2025/QH15 Đ2.1, Đ2.7, Đ2.11, Đ7.6, Đ8.3, Đ8.4, Đ9, Đ10.4, Đ14.6, Đ17.1–17.2, Đ20.1–20.2, Đ24, Đ30.1, Đ31.2; NĐ 356/2025/NĐ-CP Đ4.1.đ, Đ6.4, Đ7.1, Đ7.2, Đ10.1, Đ17.1; NĐ 330/2026/NĐ-CP Đ39.1.a, Đ51.3.b, Đ53, Đ56.1, Đ56.3, Đ70.2.b, Đ70.3.a · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

## Hướng dẫn sử dụng

**Mã tài liệu:** B7. **Ai ban hành:** nhà cung cấp (người đại diện theo pháp luật hoặc người được ủy quyền ký). **Dùng để:** trả lời câu hỏi "mô hình được huấn luyện bằng dữ liệu gì, có dùng dữ liệu của chúng tôi không?" của khách hàng, hồ sơ thầu; đầu vào cho Phụ lục xử lý dữ liệu (C1) và hồ sơ đánh giá tác động.

**Chọn một trong hai phương án tại mục 2, xóa phương án còn lại:**

| Phương án | Khi nào chọn | Mô hình |
|---|---|---|
| **A — Không dùng dữ liệu khách hàng** | Nhà cung cấp không dùng bất kỳ dữ liệu nào thu từ hệ thống của khách hàng để huấn luyện, tinh chỉnh, đánh giá mô hình | M1–M4 |
| **B — Có dùng dữ liệu khách hàng** | Nhà cung cấp dùng dữ liệu khách hàng (kể cả ảnh lỗi gửi về khi hỗ trợ) để cải tiến mô hình | M5 (xem thêm M2–M4) |

Với phương án B, nhà cung cấp **tự quyết định mục đích** huấn luyện nên là **bên kiểm soát** cho hoạt động này (Luật 91 Đ2.7), không còn là bên xử lý theo chỉ dẫn của khách hàng.

| Yêu cầu | Căn cứ |
|---|---|
| Được dùng DLCN để nghiên cứu, phát triển hệ thống AI nhưng phải tuân thủ quy định bảo vệ DLCN | NĐ 356 Đ10.1 |
| DLCN trong môi trường AI xử lý đúng mục đích, giới hạn trong phạm vi cần thiết | Luật 91 Đ30.1 |
| Đồng ý phải tự nguyện, cho từng mục đích, không kèm điều kiện bắt buộc; nêu rõ dữ liệu nhạy cảm | Luật 91 Đ9.2, Đ9.4; NĐ 356 Đ6.4 |
| Không tái nhận dạng dữ liệu đã khử nhận dạng | Luật 91 Đ14.6.b |
| Dữ liệu đã khử nhận dạng không còn là DLCN | Luật 91 Đ2.1, Đ2.11 |
| Cấm mua, bán DLCN, trừ trường hợp luật có quy định khác; chuyển giao theo Đ17.1 có thu phí không bị coi là mua bán | Luật 91 Đ7.6, Đ17.2 |
| Huấn luyện ở nước ngoài, dùng nền tảng nước ngoài: chuyển dữ liệu xuyên biên giới | Luật 91 Đ20.1; NĐ 356 Đ17.1 |

| Rủi ro phạt (tổ chức) | Căn cứ |
|---|---|
| Khai thác, sử dụng dữ liệu sinh trắc học **vượt quá mục đích ban đầu** mà chưa có đồng ý: **70–150 triệu đồng**; tịch thu máy chủ lưu sinh trắc học | NĐ 330 Đ70.2.b, Đ70.3.a |
| Xử lý không đúng mục đích đã xác định: 20–40 triệu đồng | NĐ 330 Đ39.1.a |
| Tái nhận dạng dữ liệu đã khử nhận dạng: 50–60 triệu đồng | NĐ 330 Đ51.3.b |
| Mua, bán trái phép DLCN: đến 10 lần khoản thu (tối đa theo Luật 91 Đ8.3) | NĐ 330 Đ53 |
| Không lập hồ sơ chuyển xuyên biên giới: 30–50 triệu đồng; mức theo doanh thu đến 5% khi dẫn tới lộ, mất dữ liệu | NĐ 330 Đ56.1, Đ56.3; Luật 91 Đ8.4 |

**Lưu ý:** "ảnh lỗi" khách hàng gửi khi yêu cầu hỗ trợ (ảnh không nhận diện được) là dữ liệu sinh trắc học. Dùng chúng để huấn luyện là phương án B, không phải phương án A.

---

<p align="center"><b>TUYÊN BỐ VỀ DỮ LIỆU HUẤN LUYỆN MÔ HÌNH TRÍ TUỆ NHÂN TẠO</b><br/><b>{{TEN_SAN_PHAM}} — phiên bản {{PHIEN_BAN_SAN_PHAM}}</b></p>

| Thông tin tài liệu | |
|---|---|
| Mã tài liệu | {{MA_TAI_LIEU}} |
| Nhà cung cấp | {{TEN_NHA_CUNG_CAP}} — MST {{MST_NHA_CUNG_CAP}} |
| Ngày tuyên bố | {{NGAY_BAN_HANH_TAI_LIEU}} |
| Phạm vi | Các mô hình tại mục 1, áp dụng cho mọi khách hàng sử dụng {{TEN_SAN_PHAM}} từ phiên bản {{PHIEN_BAN_SAN_PHAM}} |

## 1. Các mô hình AI trong sản phẩm

| Mô hình | Chức năng | Phiên bản | Tự phát triển / mua / mã nguồn mở |
|---|---|---|---|
| M-PH | Phát hiện khuôn mặt | {{PHIEN_BAN_MO_HINH_PHAT_HIEN}} | {{NGUON_GOC_MO_HINH_PHAT_HIEN}} |
| M-DT | Trích xuất đặc trưng khuôn mặt | {{PHIEN_BAN_MO_HINH}} | {{NGUON_GOC_MO_HINH_DAC_TRUNG}} |
| M-LV | Chống giả mạo (liveness) | {{PHIEN_BAN_MO_HINH_LIVENESS}} | {{NGUON_GOC_MO_HINH_LIVENESS}} |
| M-BS | Nhận diện biển số | {{PHIEN_BAN_MO_HINH_BIEN_SO}} | {{NGUON_GOC_MO_HINH_BIEN_SO}} |

Với mô hình mua hoặc mã nguồn mở, {{TEN_NHA_CUNG_CAP}} ghi thông tin dữ liệu huấn luyện do bên cung cấp mô hình công bố và nêu rõ phần không xác minh được.

## 2. Tuyên bố về việc sử dụng dữ liệu của khách hàng

### Phương án A — Không sử dụng dữ liệu của khách hàng

{{TEN_NHA_CUNG_CAP}} tuyên bố:

1. Không sử dụng video, ảnh đăng ký, đặc trưng khuôn mặt (template), ảnh sự kiện, biển số, nhật ký hoặc bất kỳ dữ liệu cá nhân nào thu thập từ hệ thống của khách hàng để huấn luyện, tinh chỉnh, kiểm thử hoặc đánh giá các mô hình tại mục 1.

2. Sản phẩm **không có** chức năng tự động gửi dữ liệu về nhà cung cấp để cải tiến mô hình. Dữ liệu chẩn đoán gửi về (nếu khách hàng bật) chỉ gồm: {{DU_LIEU_CHAN_DOAN_GUI_VE}} — không gồm hình ảnh, template, biển số.

3. Dữ liệu mà nhân viên hỗ trợ tiếp cận khi xử lý sự cố chỉ được dùng để xử lý sự cố đó và bị xóa theo Thỏa thuận hỗ trợ kỹ thuật, bảo hành, truy cập từ xa.

4. Việc cập nhật mô hình cho khách hàng là thay thế tệp mô hình do nhà cung cấp phát hành; mô hình **không tự học** từ dữ liệu tại hệ thống khách hàng. *(Nếu sản phẩm có chức năng thích nghi tại chỗ, ghi rõ: việc thích nghi diễn ra hoàn toàn trên hệ thống của khách hàng, kết quả không gửi về nhà cung cấp.)*

5. Nếu sau này {{TEN_NHA_CUNG_CAP}} muốn dùng dữ liệu khách hàng, sẽ chỉ làm theo phương án B với thỏa thuận riêng; tuyên bố này được cập nhật và thông báo cho khách hàng trước khi áp dụng.

### Phương án B — Có sử dụng dữ liệu của khách hàng, có điều kiện

{{TEN_NHA_CUNG_CAP}} chỉ sử dụng dữ liệu từ hệ thống của khách hàng để cải tiến mô hình khi đáp ứng **đồng thời** các điều kiện sau:

1. **Thỏa thuận riêng với khách hàng**, tách khỏi hợp đồng cung cấp sản phẩm và không phải điều kiện để mua, sử dụng sản phẩm. Thỏa thuận nêu: mục đích huấn luyện; loại dữ liệu; nhóm chủ thể; số lượng tối đa; thời hạn lưu; nơi huấn luyện; biện pháp khử nhận dạng; vai trò các bên; trách nhiệm khi có vi phạm (khoản 1 Điều 7 Nghị định số 356/2025/NĐ-CP).

2. **Cơ sở pháp lý cho mục đích huấn luyện.** Mục đích huấn luyện mô hình khác với mục đích ban đầu (kiểm soát ra vào, chấm công). Do đó phải có **sự đồng ý riêng** của từng chủ thể cho mục đích huấn luyện, được thông báo rõ đây là dữ liệu cá nhân nhạy cảm, tên {{TEN_NHA_CUNG_CAP}} là bên nhận và sử dụng dữ liệu, và việc từ chối không ảnh hưởng đến việc sử dụng hệ thống (Điều 9 Luật Bảo vệ dữ liệu cá nhân; khoản 4 Điều 6 Nghị định số 356/2025/NĐ-CP). Khách hàng thu thập sự đồng ý này bằng mẫu do hai bên thống nhất; {{TEN_NHA_CUNG_CAP}} lưu bằng chứng đồng ý.

3. **Khử nhận dạng khi có thể.** Dữ liệu được khử nhận dạng trước khi rời hệ thống của khách hàng nếu mục đích huấn luyện cho phép (ví dụ làm mờ khuôn mặt với mô hình biển số; bỏ họ tên, mã nhân viên, vị trí, thời gian khỏi ảnh khuôn mặt). Quá trình khử nhận dạng được kiểm soát, giám sát chặt chẽ (điểm a khoản 6 Điều 14 Luật Bảo vệ dữ liệu cá nhân).

4. **Không tái nhận dạng.** {{TEN_NHA_CUNG_CAP}} không tìm cách xác định lại danh tính người trong dữ liệu đã khử nhận dạng, không đối chiếu với nguồn dữ liệu khác để nhận dạng (điểm b khoản 6 Điều 14 Luật Bảo vệ dữ liệu cá nhân).

5. **Giới hạn sử dụng.** Dữ liệu chỉ dùng cho mục đích huấn luyện đã thỏa thuận; không chuyển cho bên thứ ba; không bán; không dùng để nhận diện người trong hệ thống của khách hàng khác.

6. **Bảo mật.** Dữ liệu huấn luyện lưu trong môi trường tách biệt, mã hóa, chỉ nhóm huấn luyện được truy cập, có nhật ký; chuyển từ khách hàng về nhà cung cấp bằng kênh mã hóa (khoản 2 Điều 7 Nghị định số 356/2025/NĐ-CP).

7. **Rút đồng ý và xóa.** Chủ thể rút đồng ý thì dữ liệu của người đó bị loại khỏi tập huấn luyện trong {{THOI_HAN_LOAI_KHOI_TAP_HUAN_LUYEN}}; mô hình đã huấn luyện trước thời điểm rút đồng ý không bị ảnh hưởng (khoản 4 Điều 10 Luật Bảo vệ dữ liệu cá nhân) *— [CẦN ĐỐI CHIẾU] cách áp dụng cho trọng số mô hình đã huấn luyện*. Dữ liệu huấn luyện bị xóa khi hết thời hạn {{THOI_HAN_LUU_DU_LIEU_HUAN_LUYEN}}.

8. **Hồ sơ.** {{TEN_NHA_CUNG_CAP}} lập, cập nhật hồ sơ đánh giá tác động xử lý dữ liệu cá nhân cho hoạt động huấn luyện với vai trò bên kiểm soát.

Nếu không đáp ứng các điều kiện trên, {{TEN_NHA_CUNG_CAP}} không sử dụng dữ liệu của khách hàng. Sử dụng dữ liệu sinh trắc học vượt quá mục đích ban đầu khi chưa có đồng ý có thể bị phạt đến 150 triệu đồng và tịch thu máy chủ lưu sinh trắc học (điểm b khoản 2, điểm a khoản 3 Điều 70 Nghị định số 330/2026/NĐ-CP).

## 3. Nguồn dữ liệu huấn luyện

| Mô hình | Bộ dữ liệu | Loại nguồn | Có chứa dữ liệu cá nhân? | Cơ sở pháp lý, giấy phép | Khử nhận dạng? | Quy mô |
|---|---|---|---|---|---|---|
| {{MO_HINH_1}} | {{TEN_BO_DU_LIEU_1}} | {{công khai/mua/tự thu thập/tổng hợp bằng máy}} | {{có/không}} | {{GIAY_PHEP_BO_DU_LIEU_1}} | {{có/không/không áp dụng}} | {{QUY_MO_BO_DU_LIEU_1}} |
| {{MO_HINH_2}} | {{TEN_BO_DU_LIEU_2}} | | | {{GIAY_PHEP_BO_DU_LIEU_2}} | | {{QUY_MO_BO_DU_LIEU_2}} |

Nguyên tắc {{TEN_NHA_CUNG_CAP}} áp dụng với từng loại nguồn:

- **Bộ dữ liệu công khai:** chỉ dùng bộ có giấy phép cho phép mục đích thương mại hoặc mục đích đang dùng; lưu bản giấy phép và mô tả cách thu thập của bên công bố. Bộ dữ liệu khuôn mặt thu thập từ Internet không rõ sự đồng ý của người trong ảnh: **không dùng** cho sản phẩm thương mại.
- **Bộ dữ liệu mua, thuê:** việc mua bán dữ liệu cá nhân bị cấm, trừ trường hợp luật có quy định khác (khoản 6 Điều 7 Luật Bảo vệ dữ liệu cá nhân). Chỉ nhận dữ liệu có chứa hình ảnh người khi bên cung cấp chứng minh được người trong dữ liệu **đã đồng ý** cho việc chuyển giao và cho mục đích huấn luyện, và hợp đồng thể hiện đây là chuyển giao theo khoản 1 Điều 17 Luật Bảo vệ dữ liệu cá nhân (có thu phí vẫn không bị coi là mua bán theo khoản 2 Điều 17). **[CẦN ĐỐI CHIẾU]** — ranh giới giữa "chuyển giao có thu phí" hợp pháp và "mua bán" đối với bộ dữ liệu khuôn mặt thương mại; nên xin ý kiến pháp chế cho từng hợp đồng. Ưu tiên bộ dữ liệu tổng hợp hoặc đã khử nhận dạng.
- **Dữ liệu tự thu thập** (ví dụ chụp tình nguyện viên, nhân viên): có mẫu đồng ý riêng cho mục đích huấn luyện, nêu rõ dữ liệu sinh trắc học là dữ liệu nhạy cảm; tình nguyện viên có thể rút đồng ý; không thu thập trẻ em nếu không có đồng ý của người đại diện theo pháp luật (Điều 24 Luật Bảo vệ dữ liệu cá nhân).
- **Dữ liệu tổng hợp bằng máy** (ảnh khuôn mặt do mô hình sinh ra): ghi rõ mô hình sinh và dữ liệu dùng để huấn luyện mô hình sinh đó nếu biết.

## 4. Dữ liệu kiểm thử

| Bộ dữ liệu kiểm thử | Dùng để | Nguồn | Cơ sở pháp lý, giấy phép | Tách biệt với dữ liệu huấn luyện? |
|---|---|---|---|---|
| {{TEN_BO_DU_LIEU_KIEM_THU_1}} | Đo FAR, FRR (B3 mục B.5) | | | {{có/không}} |
| {{TEN_BO_DU_LIEU_KIEM_THU_2}} | Đo sai lệch theo nhóm (B3 mục B.7) | | | {{có/không}} |
| {{TEN_BO_DU_LIEU_KIEM_THU_3}} | Kiểm thử chống giả mạo (B3 mục B.4) | | | {{có/không}} |

Nhãn nhóm (giới tính, độ tuổi, tông màu da) chỉ tồn tại trong bộ dữ liệu kiểm thử; không dùng để huấn luyện mô hình suy luận các thuộc tính này.

## 5. Nơi huấn luyện, lưu trữ dữ liệu huấn luyện

| Hạng mục | Thông tin |
|---|---|
| Nơi huấn luyện mô hình | {{NOI_HUAN_LUYEN}} |
| Nơi lưu dữ liệu huấn luyện | {{NOI_LUU_DU_LIEU_HUAN_LUYEN}} |
| Bên tham gia huấn luyện (nhà thầu, công ty mẹ, nhà cung cấp hạ tầng tính toán) | {{BEN_THAM_GIA_HUAN_LUYEN}} |
| Có chuyển dữ liệu cá nhân thu thập tại Việt Nam ra nước ngoài không? | {{có/không}} |

Nếu dữ liệu cá nhân thu thập tại Việt Nam được chuyển ra nước ngoài, được lưu hoặc xử lý trên nền tảng đặt ngoài lãnh thổ Việt Nam để huấn luyện, {{TEN_NHA_CUNG_CAP}} lập hồ sơ đánh giá tác động chuyển dữ liệu cá nhân xuyên biên giới và gửi cơ quan chuyên trách trong 60 ngày kể từ ngày đầu tiên chuyển (khoản 1, khoản 2 Điều 20 Luật Bảo vệ dữ liệu cá nhân; khoản 1 Điều 17 Nghị định số 356/2025/NĐ-CP). Số và ngày hồ sơ: {{SO_HO_SO_CHUYEN_XUYEN_BIEN_GIOI}}.

## 6. Cam kết chung

1. {{TEN_NHA_CUNG_CAP}} không phát triển mô hình suy luận nguồn gốc chủng tộc, dân tộc, quan điểm chính trị, tôn giáo, tình trạng sức khỏe, xu hướng tình dục từ hình ảnh khuôn mặt.

2. Mọi thay đổi về nguồn dữ liệu huấn luyện hoặc về việc sử dụng dữ liệu khách hàng được cập nhật vào tuyên bố này và thông báo cho khách hàng trước khi áp dụng {{SO_NGAY_THONG_BAO_TRUOC}} ngày.

3. Khách hàng có quyền yêu cầu {{TEN_NHA_CUNG_CAP}} cung cấp bằng chứng cho các nội dung tại tuyên bố này theo điều khoản kiểm tra của hợp đồng.

Liên hệ: {{NHAN_SU_BVDLCN_NCC}} — {{EMAIL_BVDLCN_NCC}} — {{DIEN_THOAI_BVDLCN_NCC}}.

| **Nơi nhận:**<br/>- Khách hàng sử dụng {{TEN_SAN_PHAM}};<br/>- Công bố tại {{WEBSITE_NCC}};<br/>- Lưu: hồ sơ sản phẩm, {{NHAN_SU_BVDLCN_NCC}}. | **ĐẠI DIỆN {{TEN_NHA_CUNG_CAP_IN_HOA}}**<br/>**{{CHUC_VU_DAI_DIEN_NCC}}**<br/>*(Ký, ghi rõ họ tên, đóng dấu)*<br/><br/><br/>**{{DAI_DIEN_NHA_CUNG_CAP}}** |
|:---|:---:|

## Hướng dẫn điền

- Chọn **một** phương án ở mục 2 và xóa phương án kia trước khi ký. Không ký tuyên bố phương án A nếu nhóm hỗ trợ, nhóm AI đang lưu ảnh lỗi của khách hàng để cải tiến mô hình — phải xóa các dữ liệu đó hoặc chuyển sang phương án B.
- Mục 1: {{PHIEN_BAN_MO_HINH}}, {{PHIEN_BAN_MO_HINH_LIVENESS}} dùng cùng giá trị với B3. Các placeholder `NGUON_GOC_*`: ghi "Tự phát triển", "Mua của …", hoặc tên dự án mã nguồn mở và giấy phép.
- Mục 3: mỗi bộ dữ liệu một dòng. Không rõ nguồn gốc hoặc giấy phép thì ghi "Chưa xác minh" và lên kế hoạch thay thế.
- {{DU_LIEU_CHAN_DOAN_GUI_VE}}: liệt kê chính xác (ví dụ: mã lỗi, phiên bản firmware, nhiệt độ thiết bị, số lần nhận diện thành công/thất bại theo ngày).
- Tuyên bố phải được rà soát mỗi khi phát hành mô hình mới.

## Bằng chứng cần lưu

- Bản tuyên bố đã ký theo từng phiên bản; lịch sử thay đổi.
- Giấy phép, hợp đồng, mô tả nguồn gốc của từng bộ dữ liệu huấn luyện và kiểm thử.
- *(Phương án B)* Thỏa thuận riêng với từng khách hàng; bằng chứng đồng ý của chủ thể cho mục đích huấn luyện; nhật ký khử nhận dạng; nhật ký loại dữ liệu khi rút đồng ý; hồ sơ đánh giá tác động; hồ sơ chuyển xuyên biên giới (nếu có).
- Cấu hình sản phẩm chứng minh không có luồng tự động gửi hình ảnh về nhà cung cấp (phương án A).
