# Ánh xạ NĐ 331 (Đ29, Đ30) ↔ TCVN 14423:2026

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ10, Đ22.6, Đ27, Đ28, Đ29, Đ30, Đ31, Đ33, Đ35–36; TCVN 14423:2026 mục 3–7 · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

> **Bản quyền:** Tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI). Cột TCVN chỉ nêu số mục và diễn giải ngắn.

Mục đích: khi viết **thuyết minh phương án bảo đảm ANM** (NĐ 331 Đ22.2.c, Đ22.6) và **Quy chế bảo đảm ANM** (Đ30.7), người soạn phải trình bày theo cấu trúc của nghị định (7 nhóm quản lý, 4 nhóm kỹ thuật, 7 phần phương án), trong khi yêu cầu chi tiết nằm ở 18 nhóm của TCVN. Bảng dưới cho biết mỗi đề mục của nghị định "lấy" yêu cầu từ nhóm TCVN nào.

## Quy ước ký hiệu nhóm TCVN

Số mục thay đổi theo cấp; dùng ký hiệu `x.N` với x = 3 (cấp 1), 4 (cấp 2), 5 (cấp 3), 6 (cấp 4), 7 (cấp 5). Ngoại lệ:

| Ký hiệu | Nhóm | Cấp 1 | Cấp 2 | Cấp 3 | Cấp 4 | Cấp 5 |
|---|---|---|---|---|---|---|
| RR | Quản lý rủi ro | 3.1 | 4.1 | 5.1 | 6.1 | 7.1 |
| HW / SW / TT | Tài sản phần cứng / phần mềm / thông tin | 3.2–3.4 | 4.2–4.4 | 5.2–5.4 | 6.2–6.4 | 7.2–7.4 |
| CH | Cấu hình an toàn | 3.5 | 4.5 | 5.5 | 6.5 | 7.5 |
| TK | Tài khoản, quyền truy cập | 3.6 | 4.6 | 5.6 | 6.6 | 7.6 |
| LH | Lỗ hổng, bản vá | 3.7 | 4.7 | 5.7 | 6.7 | 7.7 |
| NK | Nhật ký ANM | 3.8 | 4.8 | 5.8 | 6.8 | 7.8 |
| WE | Trình duyệt, email | 3.9 | 4.9 | 5.9 | 6.9 | 7.9 |
| MD | Mã độc | 3.10 | 4.10 | 5.10 | 6.10 | 7.10 |
| SL | Sao lưu, khôi phục | 3.11 | 4.11 | 5.11 | 6.11 | 7.11 |
| HT | Hạ tầng mạng | 3.12 | 4.12 | 5.12 | 6.12 | 7.12 |
| GS | Giám sát, phòng thủ | — | — | 5.13 | 6.13 | 7.13 |
| NS | Nhân sự | 3.13 | 4.13 | 5.14 | 6.14 | 7.14 |
| NCC | Nhà cung cấp | 3.14 | 4.14 | 5.15 | 6.15 | 7.15 |
| SC | Ứng phó sự cố | 3.15 | 4.15 | 5.16 | 6.17 | 7.17 |
| PT | Phát triển ứng dụng an toàn | — | (4.3.2.3 thuê khoán) | 5.17 | 6.16 | 7.16 |
| KT | Kiểm tra ANM (pentest) | — | — | 5.18 | 6.18 | 7.18 |

## 1. Yêu cầu cơ bản về quản lý — NĐ 331 Đ30.3

Nghị định yêu cầu **ban hành quy định** và **triển khai** quy định cho từng nhóm (Đ30.3, phần mở đầu). Thực tế: các quy định này gom vào Quy chế bảo đảm ANM (Đ30.7).

| NĐ 331 | Nội dung | Nhóm/mục TCVN liên quan | Phần TCVN không bao phủ — phải tự bổ sung |
|---|---|---|---|
| Đ30.3.a | Thiết lập chính sách ANM | Không có nhóm "chính sách" riêng. Các nhóm đều có yêu cầu "có quy định/quy trình" và rà soát định kỳ: RR (x.1 a / x.1.2.1), TT x.4.2.1, CH x.5.2.1, TK x.6.2.3–x.6.2.4, LH x.7.2.1, NK x.8.2.1, MD x.10.1 a, SL x.11.2.1, SC x.15/16/17.2.2–2.3 | Chính sách ANM tổng thể (mục tiêu, phạm vi, vai trò, nguyên tắc) và cơ chế ban hành Quy chế trước khi hồ sơ được duyệt (Đ30.7) |
| Đ30.3.b | Tổ chức bảo đảm ANM | NS: bộ phận riêng, độc lập chuyên môn (4.13.1 a; 5/6/7.14.2.1); SC: lực lượng ứng phó, người chủ chốt + dự phòng (x.15/16/17.2.1); NCC: phân định trách nhiệm | Vai trò chủ quản, đơn vị chuyên trách ANM, đơn vị vận hành (Đ4, Đ5, Đ31.1, Đ32, Đ33); bộ phận đánh giá độc lập với vận hành (Đ31.2.c) |
| Đ30.3.c | Bảo đảm nguồn nhân lực | NS toàn nhóm (trình độ, cam kết bảo mật, đào tạo nhận thức, thôi việc); đào tạo theo vai trò 6/7.14.2.3; khung năng lực 7.14.2.4; đào tạo lập trình an toàn 6/7.16.2.6 | Tiêu chuẩn người làm nhiệm vụ ANM theo Luật ANM (Đ32.3); bồi dưỡng ngắn hạn, tuyên truyền (Đ31.3) |
| Đ30.3.d | Quản lý thiết kế, xây dựng hệ thống | HT: kiến trúc, sơ đồ, thẩm tra thiết kế (x.12.2.1; 6/7.12.2.1 a), thử nghiệm–nghiệm thu (3/4/5.12.2.3; 6.12.2.7; 7.12.2.8); CH: hardening trước vận hành (5/6/7.5.2.1 d); PT toàn nhóm; SW thuê khoán (4.3.2.3); TT: luồng dữ liệu, tách môi trường (x.4.2.6–x.4.2.7) | Đánh giá điều kiện ANM trước vận hành (Đ28.3); triển khai đủ phương án trước vận hành (Đ30.6); thiết kế tách biệt khi thuê DC/cloud (Đ30.8–30.9); nguyên tắc thiết kế theo cấp (Đ30.5) |
| Đ30.3.đ | Quản lý vận hành hệ thống | HW, SW, TT, CH, TK, LH, NK, WE, MD, SL; HT: quản lý thay đổi, hiệu năng (x.12.2.2); GS; NCC; SC | Báo cáo định kỳ năm (Đ35–Đ36); kết nối phục vụ giám sát của lực lượng chuyên trách (Đ33.5) |
| Đ30.3.e | Phương án quản lý rủi ro ANM | RR toàn nhóm; rủi ro bên thứ ba (5/6/7.1.2.2 b) | Các trường hợp bắt buộc đánh giá rủi ro, nội dung tối thiểu, báo cáo cơ quan có thẩm quyền, lưu hồ sơ, đề xuất nâng cấp độ (Đ10.2–Đ10.6); phương pháp chi tiết: chờ hướng dẫn của Bộ Công an (NĐ 331 Đ10.8) |
| Đ30.3.g | Kết thúc vận hành, khai thác, thanh lý, hủy bỏ | HW: xóa dữ liệu khi chuyển giao (4/5.2.2.3), thanh lý và xóa chuyên dụng (6/7.2.2.5); TT: yêu cầu tiêu hủy/xóa (x.4.2.1 a); NS: thu hồi tài sản, quyền khi nghỉ việc; NCC: rà soát khi kết thúc hợp đồng (6/7.15.2.5) | Quy trình kết thúc vận hành **cả hệ thống** (lưu trữ/chuyển giao dữ liệu, hủy tài khoản, thông báo cơ quan phê duyệt cấp độ) — TCVN không có |

## 2. Yêu cầu cơ bản về kỹ thuật — NĐ 331 Đ30.4

| NĐ 331 | Nội dung | Nhóm/mục TCVN liên quan |
|---|---|---|
| Đ30.4.a | An toàn mạng | HT toàn nhóm (kiến trúc, phân vùng, tường lửa/IPS, WAF, DBF, NAC, DDoS, truy cập từ xa, kiểm soát truy cập); GS (5/6/7.13); WE: lọc tên miền, lọc URL (x.9.2.2; 6/7.9.2.3); HW: phát hiện thiết bị lạ (x.2.2.2) |
| Đ30.4.b | An toàn máy chủ | CH (hardening, khóa phiên); LH (rà quét, vá tập trung); MD (chống mã độc, EDR); TK (tài khoản mặc định, PAM); NK (log hệ thống, tiến trình); GS: tường lửa/IPS của HĐH (x.13.2.2) |
| Đ30.4.c | An toàn ứng dụng | PT toàn nhóm (SDLC, SBOM, kiểm tra mã nguồn, pentest trước vận hành); HT: WAF; TK: xác thực, MFA; SW: whitelist, EOL; NK: log ứng dụng (6/7.8.2.1 a); KT: pentest |
| Đ30.4.d | An toàn dữ liệu | TT toàn nhóm (phân loại, mã hóa, toàn vẹn, tách biệt, DLP, ký số, log truy cập dữ liệu); SL toàn nhóm; NK: bảo vệ log (6/7.8.2.3) |

## 3. Bảy phần của phương án bảo đảm ANM — NĐ 331 Đ29.2

Gợi ý bố cục thuyết minh phương án (Đ22.6 yêu cầu mô tả chi tiết cách đáp ứng **từng yêu cầu**): mỗi phần dưới đây liệt kê các dòng checklist tương ứng, ghi hiện trạng + giải pháp + tiến độ.

| NĐ 331 | Phần của phương án | Lấy yêu cầu từ TCVN | Nghĩa vụ nghị định cần nêu thêm |
|---|---|---|---|
| Đ29.2.a | Bảo đảm ANM trong thiết kế, xây dựng | HT x.12.2.1 (kiến trúc, phân vùng, thẩm tra thiết kế), thử nghiệm–nghiệm thu; CH hardening trước vận hành; PT; TT luồng dữ liệu, tách môi trường; SW/PT thuê khoán | Đ28.3 đánh giá điều kiện trước vận hành; Đ30.5; Đ30.6; Đ30.8–30.9 |
| Đ29.2.b | Bảo đảm ANM trong vận hành | HW, SW, TT, CH, TK, LH, NK, WE, MD, SL; HT (quản lý thay đổi, truy cập); NS; NCC | Đ33 trách nhiệm đơn vị vận hành |
| Đ29.2.c | Kiểm tra, đánh giá ANM | KT (pentest); LH (rà quét); RR đánh giá hiệu quả kiểm soát (5/6/7.1.2.4 b); PT kiểm tra ứng dụng | Đ27 (nội dung kiểm tra tuân thủ, hiệu quả, dò quét; hình thức hộp đen/xám/trắng); Đ28.5; Đ31.2.c (tính độc lập, trường hợp phải thuê tổ chức chuyên môn) |
| Đ29.2.d | Quản lý rủi ro ANM | RR toàn nhóm | Đ10 |
| Đ29.2.đ | Giám sát ANM | GS; NK (SIEM, lưu trữ tập trung); HT giám sát HTTT tập trung (5/6/7.12.2.2 a); MD: EDR nối SIEM | Đ28.6, Đ33.5 — hướng dẫn giám sát chờ hướng dẫn của Bộ Công an |
| Đ29.2.e | Dự phòng, ứng phó sự cố, khôi phục sau thảm họa | SC; SL (3-2-1, thử khôi phục, site dự phòng cấp 5); HT (dự phòng nóng, 2 hướng Internet, site cách ≥ 30 km ở cấp 5) | Đ31.2.d (báo cáo 24h/72h); Đ31.3 (diễn tập); kế hoạch khôi phục sau thảm họa có RTO/RPO — TCVN không đặt chỉ tiêu |
| Đ29.2.g | Kết thúc vận hành, khai thác, thanh lý, hủy bỏ | HW thanh lý/xóa; TT tiêu hủy; NCC kết thúc hợp đồng; NS thôi việc | Quy trình kết thúc toàn hệ thống (tự xây dựng) |

## 4. Nghĩa vụ của NĐ 331 mà TCVN 14423:2026 không bao phủ

Các mục này **không có trong checklist TCVN** nhưng là nghĩa vụ pháp lý — phải đưa vào kế hoạch tuân thủ:

- [ ] **Quy chế bảo đảm ANM** đáp ứng yêu cầu quản lý theo cấp, được cấp có thẩm quyền phê duyệt, ban hành **trước khi** hồ sơ đề xuất cấp độ được phê duyệt (Đ30.7). Mẫu: `../04-chinh-sach-quy-trinh/`.
- [ ] **Thuê trung tâm dữ liệu/điện toán đám mây — cấp 3, 4** (Đ30.8): hệ thống tách riêng về lô-gic với hệ thống khác, có kiểm soát truy cập giữa các hệ thống; các vùng mạng tách lô-gic, có kiểm soát giữa vùng; phân vùng lưu trữ tách lô-gic.
- [ ] **Thuê trung tâm dữ liệu/điện toán đám mây — cấp 5, HTTT quan trọng về an ninh quốc gia** (Đ30.9): tách **vật lý** với hệ thống khác; vùng mạng tách lô-gic; lưu trữ và thiết bị mạng chính tách vật lý; giải pháp ANM dùng chung chỉ được phép nếu chỉ giám sát, phát hiện, cảnh báo hoặc bảo vệ lớp biên, không can thiệp vào dữ liệu, tài nguyên nội bộ.
- [ ] **Đánh giá điều kiện ANM** trước khi đưa vào vận hành, khi thay đổi lớn về chức năng/quy mô/công nghệ/rủi ro, hoặc theo yêu cầu cơ quan có thẩm quyền; nội dung gồm chính sách–quy chế, tổ chức–nhân sự, biện pháp quản lý–kỹ thuật, năng lực giám sát–ứng phó, tuân thủ pháp luật (Đ28.3). Xem `../06-kiem-tra-bao-cao/`.
- [ ] **Triển khai đầy đủ phương án đã phê duyệt trước khi vận hành** đối với hệ thống xây mới, mở rộng, nâng cấp (Đ30.6).
- [ ] **Nguyên tắc thiết kế theo cấp** (Đ30.5): cấp 1–3 xem xét dùng chung giải pháp, tài nguyên giữa các hệ thống; cấp 4–5 thiết kế bảo đảm sẵn sàng, phân tách để sự cố một thành phần không lan ra toàn hệ thống.
- [ ] **Quy định ANM cho toàn vòng đời** (thiết kế, xây dựng, quản lý, vận hành, sử dụng, nâng cấp, hủy bỏ) và biện pháp lưu trữ, sao lưu (Đ28.1).
- [ ] **Quản lý rủi ro theo Đ10**: đánh giá lần đầu khi xác định cấp độ và khi có thay đổi chức năng/phạm vi/công nghệ, mở rộng–kết nối, sự cố nghiêm trọng, yêu cầu của cơ quan (Đ10.2); nội dung tối thiểu gồm cả phân loại thông tin (công cộng, riêng, cá nhân, bí mật nhà nước) và năng lực ứng phó hiện có (Đ10.3); đề xuất cấp cao hơn khi rủi ro vượt cấp đã xác định (Đ10.5); lưu hồ sơ phục vụ thanh tra, kiểm tra (Đ10.6).
- [ ] **Kiểm tra, giám sát, đánh giá hiệu quả** định kỳ theo cấp độ và rủi ro, thường xuyên qua giám sát, đột xuất (Đ28.5); nội dung và hình thức theo Đ27; tự đánh giá phải do bộ phận độc lập với vận hành; các trường hợp phải thuê tổ chức chuyên môn (Đ31.2.c).
- [ ] **Báo cáo sự cố** tới cơ quan chuyên trách của Bộ Công an: thông báo ban đầu sự cố nghiêm trọng trong 24 giờ; báo cáo nguyên nhân, phạm vi, biện pháp khắc phục trong 72 giờ; báo cáo ngay nếu có dấu hiệu xâm phạm an ninh quốc gia, trật tự an toàn xã hội (Đ31.2.d).
- [ ] **Diễn tập** trong tổ chức và tham gia diễn tập quốc gia/quốc tế do Bộ Công an tổ chức (Đ31.3).
- [ ] **Báo cáo định kỳ năm**: đơn vị chuyên trách/vận hành gửi chủ quản trước 20/12; chủ quản gửi Bộ Công an trước 25/12; số liệu chốt từ 15/12 năm trước đến 14/12 (Đ35.3–35.4); nội dung theo Đ36. Xem `../06-kiem-tra-bao-cao/`.
- [ ] **Phối hợp kết nối kỹ thuật phục vụ giám sát** theo hướng dẫn của lực lượng chuyên trách Bộ Công an (Đ33.5); quy định chi tiết về giám sát, ứng phó sự cố: chờ hướng dẫn của Bộ Công an (Đ28.6).
- [ ] **An ninh vật lý**: không thuộc yêu cầu cơ bản của nghị định (Đ30.2) nhưng TCVN có Phụ lục A — xem [an-ninh-vat-ly-phu-luc-a.md](an-ninh-vat-ly-phu-luc-a.md).

## 5. Ngược lại: TCVN có, nghị định không nêu riêng

Các nhóm sau không có đề mục tương ứng trong Đ30.3–30.4 nhưng vẫn **bắt buộc** vì Đ28.4, Đ29.1, Đ30.1 dẫn chiếu TCVN: Bảo vệ trình duyệt web, thư điện tử (x.9); Quản lý nhà cung cấp (x.14/x.15); Quản lý kiểm tra ANM — pentest (5/6/7.18). Khi viết phương án, xếp chúng lần lượt vào Đ29.2.b (vận hành), Đ30.3.b/đ (tổ chức, vận hành) và Đ29.2.c (kiểm tra, đánh giá).
