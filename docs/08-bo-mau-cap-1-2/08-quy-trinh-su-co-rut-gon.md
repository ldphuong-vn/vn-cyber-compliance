# Quy trình ứng phó sự cố an ninh mạng rút gọn (HTTT cấp độ 1–2)

> **Căn cứ:** Luật 116/2025/QH15 Đ2.17, Đ10.1, Đ40.1.c; NĐ 331/2026/NĐ-CP Đ10.2.d, Đ28.6, Đ31.2.c–d, Đ31.3, Đ35.4; Luật 91/2025/QH15 Đ23; NĐ 356/2025/NĐ-CP Đ28; NĐ 330/2026/NĐ-CP Đ7.1, Đ21, Đ54; TCVN 14423:2026 mục 3.15, 4.15 · **Đối chiếu văn bản gốc:** 28/09/2026 · **Trạng thái:** Bản khung v0.1

> Phần TCVN 14423:2026 là diễn giải để tra cứu, không phải nguyên văn; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI).

## Hướng dẫn sử dụng

**Khi nào dùng:** tổ chức chỉ có HTTT cấp độ 1–2 (bộ mẫu `docs/08-bo-mau-cap-1-2/`). Bản này gộp quy trình sự cố và thông báo vi phạm dữ liệu cá nhân (DLCN) vào 2 trang + 1 mẫu báo cáo nhanh. Khi có HTTT từ cấp 3, dùng bản đầy đủ [quy-trinh-ung-pho-su-co.md](../04-chinh-sach-quy-trinh/quy-trinh-ung-pho-su-co.md) (phân mức M1–M4, phiếu BM-SC-01…05, danh bạ đầy đủ).

**Cách ban hành:** ban hành kèm Quy chế bảo đảm ANM (file `03-quy-che-anm-cap-1-2.md`, QĐ số 41/2026/QĐ-TURBO); đơn vị chuyên trách ANM chủ trì soạn, cập nhật. Đầu mối chính/dự phòng phải trùng với người được giao tại QĐ phân công nhiệm vụ ANM (file `02-qd-phan-cong-anm.md`, QĐ số 40/2026/QĐ-TURBO). QĐ phân công nên ủy quyền cho Trưởng phòng An ninh mạng ký thông báo ban đầu (≤ 24 giờ) thay chủ quản để không lỡ hạn.

**Những điểm đã kiểm với văn bản gốc:**

| Nội dung | Căn cứ | Ghi chú |
|---|---|---|
| Chủ quản báo cáo sự cố với cơ quan chuyên trách của Bộ Công an (BCA) | Luật 116 Đ40.1.c; NĐ 331 Đ31.2.d | Luật không nêu thời hạn; mốc thời gian nằm ở NĐ 331 Đ31.2.d |
| ≤ 72 giờ từ khi phát hiện: báo cáo nguyên nhân, phạm vi ảnh hưởng, biện pháp khắc phục; sự cố phức tạp: báo cáo sơ bộ rồi báo cáo cập nhật, báo cáo kết thúc | NĐ 331 Đ31.2.d gạch 1 | Không giới hạn theo mức độ → áp dụng cho mọi sự cố ANM **[CẦN ĐỐI CHIẾU]** |
| ≤ 24 giờ: thông báo ban đầu sự cố **nghiêm trọng** | NĐ 331 Đ31.2.d gạch 2 | NĐ 331 không định nghĩa "nghiêm trọng" → tiêu chí mục 3 là đề xuất nội bộ **[CẦN ĐỐI CHIẾU]** |
| Báo cáo **ngay** khi có dấu hiệu xâm phạm an ninh quốc gia, trật tự, an toàn xã hội hoặc gây gián đoạn nghiêm trọng | NĐ 331 Đ31.2.d gạch 3 | |
| Biểu mẫu báo cáo sự cố gửi BCA | NĐ 331 Đ28.6 | **Chưa có mẫu chính thức** — Bộ trưởng BCA sẽ quy định. Mẫu báo cáo nhanh ở trang 2 là mẫu nội bộ **[CẦN ĐỐI CHIẾU]** khi BCA ban hành |
| Vi phạm DLCN có thể gây tổn hại (quốc phòng, ANQG, TTATXH, hoặc tính mạng, sức khỏe, danh dự, nhân phẩm, tài sản của chủ thể): thông báo cơ quan chuyên trách bảo vệ DLCN ≤ 72 giờ; lập biên bản xác nhận | Luật 91 Đ23.1–23.2 | Bên xử lý (vd nhà cung cấp thư điện tử đám mây) phải báo kịp thời cho bên kiểm soát (Luật 91 Đ23.1) |
| Nội dung và biểu mẫu thông báo DLCN | NĐ 356 Đ28.1–28.2, **Mẫu số 08 NĐ 356** | Gửi cơ quan chuyên trách hoặc qua Cổng thông tin quốc gia về bảo vệ DLCN |
| Đánh giá lại rủi ro sau sự cố nghiêm trọng | NĐ 331 Đ10.2.d | |
| Tổng hợp sự cố vào báo cáo năm (Mẫu 08 NĐ 331) | NĐ 331 Đ35.4 | Nội bộ trước 20/12; gửi BCA trước 25/12 |

**Mức phạt liên quan (mức cho tổ chức):** không báo cáo BCA khi phát hiện sự cố, không triển khai ứng cứu và báo cáo: 40–60 triệu đồng (NĐ 330 Đ21.2.a–b); không ghi nhận, không báo cáo theo đúng quy trình hoặc không xây dựng kế hoạch ứng phó sự cố: 60–100 triệu đồng (Đ21.3.c–d). Các mức Đ21 ghi trong NĐ 330 là mức cho cá nhân, tổ chức gấp đôi (Đ7.1). Thông báo vi phạm DLCN chậm quá 72 giờ: 40–60 triệu đồng; không lập biên bản xác nhận: 10–20 triệu đồng (Đ54.3, Đ54.1.b — Mục 6 ghi thẳng mức cho tổ chức).

**Yêu cầu TCVN 14423:2026 (diễn giải):** cấp 1 (mục 3.15) và cấp 2 (mục 4.15) đều yêu cầu một người chủ chốt và ít nhất một người dự phòng; đầu mối nhận báo cáo sự cố, xác minh danh bạ hỗ trợ hằng năm; phân vai trò, trách nhiệm phối hợp của các phòng; quy trình báo cáo nội bộ có phân nhóm sự cố; quy trình ứng phó có cơ chế phối hợp với cơ quan chức năng, chuyên gia, nhà cung cấp; rà soát quy trình ≥ 01 lần/năm hoặc khi có thay đổi. Cấp 2 thêm: chính sách/quy trình phải bao quát 7 nội dung (4.15.1 — phân nhóm; tiếp nhận–phân loại–xử lý ban đầu; kế hoạch ứng phó; giám sát, cảnh báo; quy trình cho sự cố thông thường; quy trình cho sự cố nghiêm trọng; cơ chế phối hợp) và đầu mối liên hệ với cơ quan quản lý nhà nước về ANM, cơ quan điều hành Liên minh ứng phó sự cố ANM quốc gia (4.15.2.1 b). Bản quy trình dưới đây đã có đủ 7 nội dung đó.

---

<p align="center"><b>QUY TRÌNH ỨNG PHÓ SỰ CỐ AN NINH MẠNG</b><br/><b>ÁP DỤNG CHO HỆ THỐNG THÔNG TIN CẤP ĐỘ 1, CẤP ĐỘ 2</b><br/><i>(Ban hành kèm theo Quyết định số {{C12_SO_QD_QUY_CHE}} ngày {{C12_NGAY_QD_QUY_CHE}} của {{TEN_TO_CHUC}})</i></p>

| Mã quy trình | Phiên bản | Đơn vị chủ trì | Áp dụng cho |
|---|---|---|---|
| QT-SC-C12 | {{PHIEN_BAN}} | {{TEN_DON_VI_CHUYEN_TRACH_ANM}} | {{C12_DANH_SACH_HTTT}} |

**1. Phạm vi.** Mọi sự cố an ninh mạng (sự việc bất ngờ trên không gian mạng xâm phạm an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của tổ chức, cá nhân — Luật An ninh mạng Đ2.17) và mọi vi phạm quy định về bảo vệ dữ liệu cá nhân xảy ra trên các hệ thống thông tin nêu trên, kể cả sự cố phát sinh tại nhà cung cấp dịch vụ. **T0** là thời điểm phát hiện sự cố; mọi thời hạn tính từ T0, ghi đến phút.

**2. Vai trò và liên hệ**

| Vai trò | Người / đơn vị | Liên hệ |
|---|---|---|
| Đầu mối chính — chỉ huy ứng phó, phân loại, báo cáo ra ngoài | {{HO_TEN_TRUONG_DON_VI}}, Trưởng {{TEN_DON_VI_CHUYEN_TRACH_ANM}} | {{SDT}} · {{EMAIL}} |
| Đầu mối dự phòng (thay khi đầu mối chính vắng) | {{HO_TEN_DU_PHONG}}, {{C12_CHUC_DANH_DU_PHONG}} | {{C12_SDT_DU_PHONG}} |
| Xử lý kỹ thuật: cô lập, khôi phục, vá | {{C12_TRUONG_PHONG_VAN_HANH}}, Trưởng {{TEN_DON_VI_VAN_HANH}} | {{C12_SDT_VAN_HANH}} |
| Đánh giá tác động DLCN, biên bản, thông báo 72 giờ | {{NHAN_SU_BVDLCN}} | {{C12_EMAIL_BVDLCN}} |
| Phê duyệt báo cáo, quyết định ngừng dịch vụ | {{HO_TEN_NGUOI_KY}}, {{CHUC_DANH}} | {{DIEN_THOAI}} |
| Kênh báo sự cố nội bộ (mọi nhân viên) | {{KENH_BAO_SU_CO_NOI_BO}} | Trực: {{SDT_TRUC_24_7}} |
| Cơ quan chuyên trách của Bộ Công an (nhận báo cáo sự cố) | {{CO_QUAN_CHUYEN_TRACH_BCA}} | {{LIEN_HE_BCA}} |
| Cơ quan chuyên trách bảo vệ DLCN | Qua Cổng thông tin quốc gia về bảo vệ DLCN | {{LIEN_HE_BVDLCN}} |
| Nhà cung cấp dịch vụ liên quan | {{C12_NCC_LIEN_QUAN}} | Theo hợp đồng |

Các phòng, ban có trách nhiệm báo ngay sự việc bất thường qua kênh nội bộ, không tự xử lý, không xóa dữ liệu, và phối hợp theo yêu cầu của đầu mối chính. Danh bạ được xác minh ít nhất mỗi năm một lần và khi có thay đổi.

**3. Phân nhóm và phân loại**

- Nhóm sự cố: (1) mã độc, mã hóa tống tiền; (2) xâm nhập, chiếm tài khoản; (3) lộ, mất dữ liệu; (4) lừa đảo, giả mạo; (5) gián đoạn dịch vụ; (6) sự cố từ nhà cung cấp; (7) vi phạm nội bộ; (8) khác.
- **Nghiêm trọng** (tiêu chí nội bộ, thỏa một): chiếm quyền quản trị; dữ liệu bị mã hóa hoặc bị lộ ra ngoài; có DLCN nhạy cảm hoặc DLCN của từ {{C12_NGUONG_CHU_THE}} người trở lên bị ảnh hưởng; hệ thống ngừng quá {{C12_NGUONG_GIAN_DOAN}} giờ. Khi phân vân, xếp mức cao hơn.
- **Thông thường:** sự cố đã xác nhận nhưng không thuộc trường hợp trên. **Sự kiện:** đã bị chặn tự động, không có tác động — chỉ ghi sổ, tổng hợp vào báo cáo năm.

**4. Các bước xử lý**

| Bước | Việc chính | Thực hiện | Thời hạn |
|---|---|---|---|
| 1. Phát hiện, tiếp nhận | Nhận tin từ người dùng, cảnh báo phần mềm, nhà cung cấp, cơ quan chức năng; ghi T0, mở sổ sự cố | Người phát hiện; đầu mối chính | Ngay |
| 2. Phân loại | Xác định nhóm, mức (nghiêm trọng/thông thường/sự kiện); có DLCN bị ảnh hưởng không; có dấu hiệu xâm phạm an ninh quốc gia, trật tự, an toàn xã hội hoặc gián đoạn nghiêm trọng không | Đầu mối chính (dự phòng khi vắng); {{NHAN_SU_BVDLCN}} | ≤ {{C12_THOI_HAN_PHAN_LOAI}} từ T0 |
| 3. Ngăn chặn | Cô lập máy, tài khoản bị ảnh hưởng; đổi mật khẩu; giữ lại nhật ký, bản sao đĩa trước khi cài lại; báo nhà cung cấp nếu liên quan | {{TEN_DON_VI_VAN_HANH}} | Ngay sau bước 2 |
| 4. Báo cáo | Báo cáo Tổng Giám đốc; gửi cơ quan chuyên trách theo mục 5 bằng Mẫu báo cáo nhanh; DLCN: biên bản xác nhận + Mẫu số 08 NĐ 356 | Đầu mối chính | Theo mục 5 |
| 5. Khắc phục | Loại bỏ nguyên nhân, vá lỗ hổng, khôi phục từ bản sao lưu sạch, theo dõi tăng cường; gửi báo cáo cập nhật/kết thúc nếu sự cố phức tạp | {{TEN_DON_VI_VAN_HANH}} | Theo mục tiêu khôi phục của từng hệ thống |
| 6. Rút kinh nghiệm | Họp đánh giá; cập nhật sổ sự cố, kế hoạch khắc phục, quy trình này; sự cố nghiêm trọng: đánh giá lại rủi ro (NĐ 331 Đ10.2.d) | Đầu mối chính | ≤ {{C12_THOI_HAN_RUT_KINH_NGHIEM}} ngày làm việc sau khi khắc phục xong |

**5. Thời hạn báo cáo ra bên ngoài**

| Trường hợp | Thời hạn (từ T0) | Gửi | Căn cứ |
|---|---|---|---|
| Có dấu hiệu xâm phạm an ninh quốc gia, trật tự, an toàn xã hội hoặc gián đoạn nghiêm trọng hệ thống | Ngay khi phát hiện | Cơ quan chuyên trách của Bộ Công an | NĐ 331 Đ31.2.d |
| Sự cố nghiêm trọng — thông báo ban đầu | ≤ 24 giờ | Như trên | NĐ 331 Đ31.2.d |
| Mọi sự cố — báo cáo nguyên nhân, phạm vi ảnh hưởng, biện pháp khắc phục (phức tạp: sơ bộ → cập nhật → kết thúc) | ≤ 72 giờ | Như trên | NĐ 331 Đ31.2.d; Luật An ninh mạng Đ40.1.c |
| Vi phạm DLCN có thể gây tổn hại cho chủ thể dữ liệu hoặc quốc phòng, an ninh | ≤ 72 giờ, kèm biên bản xác nhận | Cơ quan chuyên trách bảo vệ DLCN (Mẫu số 08 NĐ 356) | Luật Bảo vệ DLCN Đ23; NĐ 356 Đ28 |
| Tổng hợp sự cố trong năm | Trước 20/12 (nội bộ); trước 25/12 (Bộ Công an) | Chủ quản; Bộ Công an | NĐ 331 Đ35.4 |

Hai mốc 72 giờ (an ninh mạng và DLCN) cùng tính từ khi phát hiện nhưng gửi hai nơi khác nhau: dùng một bộ dữ kiện chung trong Mẫu báo cáo nhanh để lập cả hai văn bản.

**6. Lưu hồ sơ.** Sổ sự cố, báo cáo đã gửi và bằng chứng gửi (email, phiếu nhận), biên bản xác nhận vi phạm DLCN, biên bản rút kinh nghiệm được lưu tại {{TEN_DON_VI_CHUYEN_TRACH_ANM}} tối thiểu {{THOI_GIAN_LUU_HO_SO_SU_CO}}. Quy trình được rà soát ít nhất mỗi năm một lần, sau mỗi sự cố nghiêm trọng và sau mỗi lần diễn tập.

---

| **{{TEN_TO_CHUC_IN_HOA}}**<br/>------- | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br/>**Độc lập - Tự do - Hạnh phúc**<br/>--------------- |
|:---:|:---:|
| Số: {{C12_SO_BAO_CAO_SU_CO}} | *{{DIA_DANH}}, ngày ... tháng ... năm ...* |

<p align="center"><b>BÁO CÁO NHANH SỰ CỐ AN NINH MẠNG</b></p>

Kính gửi: {{CO_QUAN_CHUYEN_TRACH_BCA}}.

| Mục | Nội dung |
|---|---|
| Loại báo cáo | ☐ Báo cáo ngay ☐ Thông báo ban đầu (≤ 24 giờ) ☐ Báo cáo 72 giờ ☐ Báo cáo cập nhật số … ☐ Báo cáo kết thúc |
| 1. Chủ quản hệ thống; người liên hệ | {{TEN_TO_CHUC}}; {{HO_TEN_TRUONG_DON_VI}}, {{SDT}}, {{EMAIL}} |
| 2. Hệ thống bị ảnh hưởng, cấp độ, quyết định phê duyệt cấp độ | … |
| 3. Mã sự cố; thời điểm phát hiện (T0); thời điểm xảy ra (nếu biết) | SC-{{NAM}}-…; … giờ … phút, ngày …/…/…; … |
| 4. Mô tả: nhóm sự cố, dấu hiệu, cách phát hiện | … |
| 5. Đánh giá mức độ; có dấu hiệu xâm phạm an ninh quốc gia, trật tự, an toàn xã hội hoặc gián đoạn nghiêm trọng | ☐ Nghiêm trọng ☐ Thông thường — ☐ Có ☐ Không; lý do: … |
| 6. Nguyên nhân (đã xác định/giả thuyết) | … |
| 7. Phạm vi ảnh hưởng: tài sản, dữ liệu, số người dùng, thời gian gián đoạn, tổ chức bên ngoài | … |
| 8. Có dữ liệu cá nhân bị ảnh hưởng? Loại, số chủ thể ước tính; đã thông báo cơ quan chuyên trách bảo vệ DLCN chưa | ☐ Có ☐ Không; …; ☐ Đã gửi Mẫu số 08 NĐ 356 lúc … |
| 9. Biện pháp đã áp dụng, đang thực hiện, dự kiến; thời điểm khôi phục | … |
| 10. Chứng cứ đã thu thập, bảo quản | … |
| 11. Đề nghị hỗ trợ (nếu có); thời điểm dự kiến gửi báo cáo tiếp theo | … |

| *Nơi nhận:*<br/>- Như trên;<br/>- {{CHUC_DANH}} (để b/c);<br/>- Lưu: VT, {{VIET_TAT_PHONG}}. | **TUQ. {{CHUC_DANH_NGUOI_KY_IN_HOA}}**<br/>**{{CHUC_DANH_NGUOI_TRINH_IN_HOA}}**<br/>*(Ký, ghi rõ họ tên)*<br/><br/><br/>**{{HO_TEN_TRUONG_DON_VI}}** |
|:---|:---:|

## Hướng dẫn điền

- `{{C12_SO_QD_QUY_CHE}}`, `{{C12_NGAY_QD_QUY_CHE}}`: số, ngày QĐ ban hành Quy chế ANM (kịch bản mẫu: 41/2026/QĐ-TURBO ngày 05/10/2026). Nếu ban hành quy trình bằng QĐ riêng, ghi số QĐ đó.
- `{{C12_DANH_SACH_HTTT}}`: liệt kê các HTTT cấp 1–2 đã được phê duyệt (khớp QĐ phê duyệt cấp độ và bảng A của `checklist-cap-1-2.md`).
- **Vai trò (mục 2):** tối thiểu một đầu mối chính và một dự phòng (TCVN 3.15.2.1 a, 4.15.2.1 a). Doanh nghiệp chỉ có một phòng IT: đầu mối chính có thể là trưởng phòng IT, dự phòng là một nhân viên IT khác hoặc nhà cung cấp dịch vụ ứng cứu thuê ngoài (ghi rõ trong hợp đồng). Không ghi số điện thoại cá nhân vào bản công khai.
- `{{LIEN_HE_BCA}}`, `{{LIEN_HE_BVDLCN}}`: chỉ dùng thông tin liên hệ chính thức do Bộ Công an công bố **[CẦN ĐỐI CHIẾU]** — xác minh trước khi ban hành và mỗi năm (TCVN 3.15.2.1 b, 4.15.2.1 c).
- **Ngưỡng nội bộ** (`{{C12_NGUONG_CHU_THE}}`, `{{C12_NGUONG_GIAN_DOAN}}`, `{{C12_THOI_HAN_PHAN_LOAI}}`, `{{C12_THOI_HAN_RUT_KINH_NGHIEM}}`): do tổ chức tự đặt, không có trong văn bản pháp luật. Gợi ý cho doanh nghiệp khoảng 100–200 nhân viên: 100 người; 8 giờ; 1 giờ; 10 ngày làm việc.
- **Mẫu báo cáo nhanh** là mẫu nội bộ vì BCA chưa ban hành biểu mẫu (NĐ 331 Đ28.6); dùng cho mọi loại báo cáo (ngay/24 giờ/72 giờ/cập nhật/kết thúc) bằng cách đánh dấu ô "Loại báo cáo". Người ký: đầu mối chính ký thừa ủy quyền (TUQ.) theo QĐ phân công; nếu QĐ không ủy quyền, trình Tổng Giám đốc ký (bỏ dòng "TUQ." và chức danh trưởng phòng, thay họ tên người ký). Gửi theo phương thức Đ35.1 NĐ 331 (hệ thống văn bản, phần mềm báo cáo của BCA, thư điện tử) **[CẦN ĐỐI CHIẾU]** — Đ35 quy định cho chế độ báo cáo chung, chưa rõ áp dụng cho báo cáo sự cố.
- **Vi phạm DLCN:** không dùng mẫu này thay cho **Mẫu số 08 NĐ 356**; chỉ dùng mục 8 để thống nhất dữ kiện. Công ty là bên kiểm soát DLCN của nhân viên; nhà cung cấp thư điện tử đám mây (bên xử lý) phải báo kịp thời cho Công ty — ghi nghĩa vụ này vào hợp đồng. Xem thêm [dlcn-giao-thoa-anm.md](../05-nghia-vu-lien-quan/dlcn-giao-thoa-anm.md).
- Nếu Công ty cung cấp dịch vụ trên không gian mạng cho bên ngoài (website, ứng dụng cho khách hàng), còn áp dụng nghĩa vụ triển khai ngay phương án ứng cứu và báo cáo ngay (Luật 116 Đ41) — khi đó nên chuyển sang bản đầy đủ.
- Diễn tập quy trình này ít nhất một lần/năm theo `09-ke-hoach-anm-nam.md` (NĐ 331 Đ31.3 — diễn tập trong tổ chức là nghĩa vụ chung, không phụ thuộc cấp độ).

## Bằng chứng cần lưu

| Bằng chứng | Phục vụ |
|---|---|
| Quy trình đã ban hành, lịch sử rà soát hằng năm | TCVN 3.15.2.2 c, 3.15.2.3 b (4.15.2.2 c, 4.15.2.3 b) |
| QĐ chỉ định đầu mối chính, dự phòng; danh bạ có ngày xác minh | TCVN 3.15.2.1 a–b (4.15.2.1 a–c) |
| Sổ sự cố (bảng D của `checklist-cap-1-2.md`), kể cả sự kiện đã chặn | Kiểm tra NĐ 331 Đ27; báo cáo năm Mẫu 08 |
| Báo cáo đã gửi BCA và bằng chứng gửi đúng hạn | NĐ 331 Đ31.2.d; phòng ngừa NĐ 330 Đ21.2–21.3 |
| Biên bản xác nhận vi phạm DLCN, Mẫu số 08 NĐ 356 đã gửi | Luật 91 Đ23.1–23.2; NĐ 330 Đ54 |
| Biên bản rút kinh nghiệm, đánh giá lại rủi ro sau sự cố nghiêm trọng | NĐ 331 Đ10.2.d |
