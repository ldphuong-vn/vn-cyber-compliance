# 03 — Yêu cầu bảo đảm an ninh mạng theo cấp độ

> **Căn cứ:** NĐ 331/2026/NĐ-CP Đ28, Đ29, Đ30, Đ39.2; TCVN 14423:2026 mục 1, 3–7, Phụ lục A · **Đối chiếu văn bản gốc:** 24/09/2026 · **Trạng thái:** Bản khung v0.1

> **Bản quyền TCVN:** Tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI). Toàn bộ thư mục này chỉ **diễn giải ngắn bằng lời của người soạn** kèm số mục; không sao chép câu chữ, bảng biểu của tiêu chuẩn. Trích dẫn nghị định là văn bản quy phạm pháp luật (không thuộc đối tượng bảo hộ quyền tác giả).

Thư mục này trả lời câu hỏi: *"Hệ thống cấp độ N phải làm những gì, làm đến mức nào, và lưu bằng chứng gì?"*

## Nội dung

| File | Dùng để làm gì |
|---|---|
| [ma-tran-yeu-cau-theo-cap-do.md](ma-tran-yeu-cau-theo-cap-do.md) | Nhìn nhanh 18 nhóm yêu cầu × 5 cấp: điểm tăng dần then chốt; **bảng ngưỡng định lượng** (tần suất, thời gian lưu, chu kỳ rà soát) |
| [anh-xa-nd331-d30-tcvn.md](anh-xa-nd331-d30-tcvn.md) | Ánh xạ 7 nhóm yêu cầu quản lý + 4 nhóm kỹ thuật (NĐ 331 Đ30.3–30.4) và 7 phần phương án (Đ29.2) sang mục TCVN; **các nghĩa vụ của nghị định mà TCVN không bao phủ** |
| [checklist-cap-1.md](checklist-cap-1.md) | Checklist tự đánh giá cấp 1 (mục 3, 15 nhóm) |
| [checklist-cap-2.md](checklist-cap-2.md) | Checklist tự đánh giá cấp 2 (mục 4, 15 nhóm) |
| [checklist-cap-3.md](checklist-cap-3.md) | Checklist tự đánh giá cấp 3 (mục 5, 18 nhóm) |
| [checklist-cap-4.md](checklist-cap-4.md) | Checklist tự đánh giá cấp 4 (mục 6, 18 nhóm) |
| [checklist-cap-5.md](checklist-cap-5.md) | Checklist tự đánh giá cấp 5 (mục 7, 18 nhóm) — cũng áp dụng cho HTTT quan trọng về an ninh quốc gia (TCVN 14423:2026 mục 1) |
| [an-ninh-vat-ly-phu-luc-a.md](an-ninh-vat-ly-phu-luc-a.md) | Tóm lược Phụ lục A (an toàn vật lý phòng máy chủ) theo cấp |

## Cách dùng (quy trình gợi ý)

1. **Xác định cấp độ trước** — xem [../01-xac-dinh-cap-do/tieu-chi-cap-do.md](../01-xac-dinh-cap-do/tieu-chi-cap-do.md) và [../01-xac-dinh-cap-do/cay-quyet-dinh.md](../01-xac-dinh-cap-do/cay-quyet-dinh.md). Nếu kết quả đánh giá rủi ro cho thấy rủi ro cao hơn cấp đã xác định thì phải đề xuất cấp cao hơn (NĐ 331 Đ10.5).
2. **Chọn đúng checklist** theo cấp độ đề xuất. Mỗi checklist đã liệt kê đầy đủ, không cần ghép với cấp thấp hơn (lý do: xem mục "Cấp cao có kế thừa cấp thấp không?" bên dưới).
3. **Tự đánh giá hiện trạng** (Đạt / Một phần / Chưa / N/A), gom bằng chứng. Việc tự đánh giá nội bộ phải do bộ phận độc lập với đơn vị vận hành thực hiện (NĐ 331 Đ31.2.c).
4. **Chuyển kết quả thành phương án bảo đảm ANM** trong hồ sơ đề xuất cấp độ, cấu trúc theo 7 phần của NĐ 331 Đ29.2 — dùng bảng ánh xạ ở [anh-xa-nd331-d30-tcvn.md](anh-xa-nd331-d30-tcvn.md); khung thuyết minh ở `../02-ho-so-cap-do/`.
5. **Ban hành Quy chế bảo đảm ANM** đáp ứng yêu cầu quản lý của cấp tương ứng **trước khi** hồ sơ đề xuất cấp độ được phê duyệt (NĐ 331 Đ30.7) — mẫu ở `../04-chinh-sach-quy-trinh/`.
6. Với hệ thống xây mới/nâng cấp: triển khai đủ phương án đã duyệt trước khi vận hành (NĐ 331 Đ30.6) và thực hiện đánh giá điều kiện ANM trước vận hành (NĐ 331 Đ28.3) — xem `../06-kiem-tra-bao-cao/`.
7. Dùng lại checklist định kỳ: báo cáo năm phải nêu hệ thống đã triển khai đầy đủ/một phần/chưa triển khai biện pháp theo phương án (NĐ 331 Đ36.5, Đ36.9–36.10).

## Quan hệ giữa NĐ 331 Đ30 và 18 nhóm của TCVN 14423:2026

NĐ 331 dẫn chiếu TCVN ("Tiêu chuẩn quốc gia về An ninh mạng - Hệ thống thông tin - Yêu cầu cơ bản") làm chuẩn kỹ thuật bắt buộc áp dụng cùng nghị định (Đ28.1, Đ28.4, Đ29.1, Đ30.1). Hai văn bản chia yêu cầu theo hai cách khác nhau:

| NĐ 331 Đ30 | TCVN 14423:2026 |
|---|---|
| **Yêu cầu quản lý — 7 nhóm** (Đ30.3): chính sách; tổ chức; nhân lực; thiết kế–xây dựng; vận hành; phương án quản lý rủi ro; kết thúc vận hành–thanh lý–hủy bỏ | Không tách "quản lý" và "kỹ thuật". Mỗi cấp là một mục (cấp 1 = mục 3 … cấp 5 = mục 7), chia thành **15 nhóm** (cấp 1–2) hoặc **18 nhóm** (cấp 3–5); mỗi nhóm trộn yêu cầu quy trình và yêu cầu kỹ thuật |
| **Yêu cầu kỹ thuật — 4 nhóm** (Đ30.4): an toàn mạng; máy chủ; ứng dụng; dữ liệu | 3 nhóm chỉ có từ cấp 3: Giám sát và phòng thủ ANM; Phát triển ứng dụng an toàn; Quản lý kiểm tra ANM |
| **Không bao gồm an ninh vật lý** (Đ30.2) | Có **Phụ lục A** về an toàn vật lý phòng máy chủ theo 5 cấp — xem [an-ninh-vat-ly-phu-luc-a.md](an-ninh-vat-ly-phu-luc-a.md) |
| Phương án bảo đảm ANM gồm **7 phần** (Đ29.2) | Không có cấu trúc "phương án"; phải tự sắp xếp các mục TCVN vào 7 phần |

Bảng ánh xạ chi tiết từng nhóm: [anh-xa-nd331-d30-tcvn.md](anh-xa-nd331-d30-tcvn.md).

**Đánh số nhóm lệch giữa các cấp** — luôn ghi số mục theo đúng cấp khi trích dẫn trong hồ sơ:

| Nhóm | Cấp 1 | Cấp 2 | Cấp 3 | Cấp 4 | Cấp 5 |
|---|---|---|---|---|---|
| Nhóm 1–12 (rủi ro … hạ tầng mạng) | 3.1–3.12 | 4.1–4.12 | 5.1–5.12 | 6.1–6.12 | 7.1–7.12 |
| Giám sát và phòng thủ ANM | — | — | 5.13 | 6.13 | 7.13 |
| Nhân sự | 3.13 | 4.13 | 5.14 | 6.14 | 7.14 |
| Nhà cung cấp | 3.14 | 4.14 | 5.15 | 6.15 | 7.15 |
| Ứng phó sự cố | 3.15 | 4.15 | **5.16** | **6.17** | **7.17** |
| Phát triển ứng dụng an toàn | — | — | **5.17** | **6.16** | **7.16** |
| Quản lý kiểm tra ANM (pentest) | — | — | 5.18 | 6.18 | 7.18 |

## Thuật ngữ: "an toàn thông tin" = "an ninh mạng"

NĐ 331 Đ39.2: trong phạm vi nghị định, tiêu chuẩn, quy chuẩn kỹ thuật dùng thuật ngữ "an toàn thông tin mạng" hoặc "an toàn hệ thống thông tin" được hiểu tương đương "an ninh mạng". Hệ quả thực tế:

- Tài liệu, quy chế, hợp đồng cũ viết theo NĐ 85/2016 và TCVN 11930:2017 (dùng "an toàn thông tin") vẫn có thể làm căn cứ, nhưng nên chuyển sang thuật ngữ "an ninh mạng" khi cập nhật.
- TCVN 14423:2026 thay thế TCVN 11930:2017 và TCVN 14423:2025 (Lời nói đầu của tiêu chuẩn); các checklist cũ theo TCVN 11930 cần làm lại theo bộ này.

## Cấp cao có "kế thừa" cấp thấp không?

Đối chiếu từng mục cho thấy **không nên giả định kế thừa tuyệt đối**:

- Mỗi cấp trong TCVN là một mục độc lập, viết lại toàn bộ yêu cầu (không có câu kiểu "như cấp dưới, cộng thêm…").
- Có chỗ cấp cao **không nhắc lại** một ý của cấp thấp hơn, ví dụ: cấp 2 (4.6.2.1 b) không liệt kê "tài khoản dịch vụ" trong danh sách tài khoản dù cấp 1 (3.6.2.1 b) có; cấp 3 (5.12.2.5) không nhắc yêu cầu thiết bị truy cập từ xa phải có chống mã độc dù cấp 2 (4.12.2.5) và cấp 4 (6.12.2.5) có; cấp 4 (6.17.2.1) không nhắc đầu mối với cơ quan quản lý nhà nước/Liên minh ứng phó sự cố như cấp 2–3.
- Vì vậy mỗi checklist liệt kê đầy đủ theo đúng mục của cấp đó. Thực hành tốt: khi một ý có ở cấp thấp mà cấp cao bỏ sót, **vẫn nên duy trì** (hợp lý về kỹ thuật và tránh bị hỏi khi thẩm định) — ghi chú trong phương án.

## Lưu ý khi dùng

- Nhiều yêu cầu TCVN cho phép "phương án tương đương" hoặc chỉ nêu cấu hình "có thể" (gợi ý) kèm "dựa trên đánh giá rủi ro" — checklist đánh dấu "gợi ý" ở các dòng đó. Khi chọn khác, phải lập luận trong phương án.
- Hướng dẫn chi tiết của Bộ Công an về đánh giá rủi ro, giám sát, ứng phó sự cố chưa ban hành tại thời điểm đối chiếu: chờ hướng dẫn của Bộ Công an (NĐ 331 Đ10.8, Đ28.6).
- Một số con số của TCVN thấp hơn nghĩa vụ ở văn bản khác (vd thời gian lưu log so với NĐ 333) — xem mục "Chênh lệch với văn bản pháp luật khác" trong [ma-tran-yeu-cau-theo-cap-do.md](ma-tran-yeu-cau-theo-cap-do.md#3-chênh-lệch-với-văn-bản-pháp-luật-khác). Nghĩa vụ trong luật, nghị định luôn được ưu tiên.
