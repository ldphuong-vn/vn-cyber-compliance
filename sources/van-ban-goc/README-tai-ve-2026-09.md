# Báo cáo tải văn bản dẫn chiếu — 29/09/2026

Thực hiện theo handoff `handoff-tai-van-ban-dan-chieu-2026-09-28.md` của cloud session (proxy của cloud session bị chặn 403 với các cổng văn bản pháp luật). Người tải: local session trên máy của Giám đốc, mạng bình thường.

**Kết quả:** 17 văn bản có cả PDF gốc và bản text; 3 văn bản chỉ có PDF vì bản ký số là **ảnh scan không có lớp chữ** và máy không có sẵn công cụ OCR; 1 văn bản (VBHN Luật Doanh nghiệp) chưa tìm được.

- PDF gốc: `sources/van-ban-goc/ban-goc-tai-ve/` (27 tệp, ~24 MB)
- Bản text UTF-8: `sources/van-ban-goc/toan-van/` (17 tệp mới, ~3,9 MB)
- Cổng truy cập được từ máy này: `congbao.chinhphu.vn`, `vanban.chinhphu.vn`, `vbpl.vn` (chỉ trang chủ — trang sâu bị JS chuyển hướng), `luatvietnam.vn`. **Bị chặn:** `thuvienphapluat.vn` (403).

---

## 1. Phát hiện quan trọng nhất: Phụ lục IV đã có, và có cả hai mục bộ khung đang cần

Không chỉ lấy được Phụ lục IV, mà **Luật Đầu tư đã được thay bằng luật mới**: **Luật Đầu tư số 143/2025/QH15** ban hành 11/12/2025, hiệu lực **01/3/2026**, riêng **Điều 7 và Phụ lục IV** (Danh mục ngành, nghề đầu tư kinh doanh có điều kiện) hiệu lực **01/7/2026** (Điều 51 khoản 2 của Luật). Đăng Công báo số 42 ngày 22-01-2026. Phụ lục IV mới có **187 ngành, nghề**, trong đó:

| Số TT trong Phụ lục IV | Ngành, nghề | Ý nghĩa với bộ khung |
|---|---|---|
| **98** | Kinh doanh dịch vụ viễn thông | Dịch vụ điện toán đám mây là **dịch vụ viễn thông** (Luật Viễn thông 24/2023 Đ3 k11) ⇒ doanh nghiệp cung cấp cloud, trung tâm dữ liệu **thuộc ngành, nghề kinh doanh có điều kiện** ⇒ **điểm A1 khép lại**: đủ căn cứ xếp **cấp 3** theo NĐ 331 Đ13.2.a, không còn là suy luận |
| **111** | Kinh doanh sản phẩm, dịch vụ an ninh mạng | Khớp NĐ 332/2026 (chưa có trong bộ nguồn) |
| **194, 195, 196** | Trung gian dữ liệu · phân tích, tổng hợp dữ liệu · sàn dữ liệu | Liên quan Luật Dữ liệu |
| **198** | **Dịch vụ xử lý dữ liệu cá nhân** | **Khép lại điểm cần đối chiếu số 7** trong `docs/05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md`: kinh doanh dịch vụ xử lý DLCN **chính thức là ngành, nghề đầu tư kinh doanh có điều kiện**, nên hệ quả "kéo HTTT lên cấp 3" có căn cứ văn bản |

Cũng đã tải **VBHN 09/VBHN-VPQH** (hợp nhất Luật Đầu tư 61/2020, 24/02/2025) để đối chiếu Phụ lục IV cũ — Phụ lục IV cũ nằm ở dòng 4007 của tệp text. **Khi cập nhật bộ khung nên dẫn Luật 143/2025, không dẫn 61/2020.**

Việc cần làm tiếp: sửa mục A1 trong `docs/00-tong-quan/diem-can-doi-chieu.md`, sửa điểm 7 mục 8 trong `docs/05-nghia-vu-lien-quan/dich-vu-xu-ly-dlcn.md`, và bổ sung Luật 143/2025 vào `docs/00-tong-quan/danh-muc-van-ban.md`.

## 2. Bảng kết quả

Ngày tháng trong hai cột cuối lấy từ metadata trang Công báo, trừ ba dòng ghi rõ "chưa đối chiếu được".

| # | Văn bản | Tệp PDF | Tệp TXT | Nguồn | Ban hành | Hiệu lực | VBHN | Ghi chú |
|---|---|---|---|---|---|---|---|---|
| 1a | Bộ luật Lao động 45/2019/QH14 | `luat-45-2019-qh14-bo-luat-lao-dong.pdf` | `luat-45-2019-qh14-bo-luat-lao-dong.txt` | [Công báo 993+994 ngày 26-12-2019](https://congbao.chinhphu.vn/van-ban/nghi-quyet-so-45-2019-qh14-30232.htm) | 20/11/2019 | 01/01/2021 | có, xem 1b | 94 trang, trích chữ tốt. Đ21, Đ118, Đ119, Đ123, Đ125, Đ129, Đ130 đều có |
| 1b | **VBHN 18/VBHN-VPQH** hợp nhất Bộ luật Lao động | `vbhn-18-2026-vpqh-bo-luat-lao-dong.pdf` | `vbhn-18-2026-vpqh-bo-luat-lao-dong.txt` | [Công báo 131 ngày 28-02-2026](https://congbao.chinhphu.vn/van-ban/van-ban-hop-nhat-so-18-vbhn-vpqh-468971.htm) | 12/02/2026 | — | đây là VBHN | 88 trang. Hợp nhất BLLĐ với Luật 71/2025, 113/2025, 124/2025. **Bản nên dùng để dẫn chiếu** |
| 2a | Luật Công nghiệp công nghệ số 71/2025/QH15 | `luat-71-2025-qh15-cong-nghiep-cong-nghe-so.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/luat-so-71-2025-qh15-45555.htm) | 14/06/2025 | 01/01/2026 | — | Tải toàn luật |
| 2b | Luật Dân số 113/2025/QH15 | `luat-113-2025-qh15-dan-so.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/luat-so-113-2025-qh15-468675.htm) | 10/12/2025 | 01/07/2026 | — | Tải toàn luật |
| 2c | Luật Giáo dục nghề nghiệp 124/2025/QH15 | `luat-124-2025-qh15-giao-duc-nghe-nghiep.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/luat-so-124-2025-qh15-468685.htm) | 10/12/2025 | 01/01/2026 | — | Tải toàn luật |
| 3 | **VBHN 135/VBHN-VPQH** hợp nhất Bộ luật Hình sự | `vbhn-135-2025-vpqh-bo-luat-hinh-su-p1..p4.pdf` | `vbhn-135-2025-vpqh-bo-luat-hinh-su.txt` | [Công báo 1351–1358 ngày 20-9-2025](https://congbao.chinhphu.vn/van-ban/van-ban-hop-nhat-so-135-vbhn-vpqh-46165/58885.htm) | 05/09/2025 | — | đây là VBHN | Đăng **4 số Công báo** → 4 PDF, text đã ghép theo thứ tự (318 trang, 28.403 dòng). Hợp nhất BLHS 100/2015 với Luật 12/2017, Luật Tư pháp người chưa thành niên 2024 và **Luật 86/2025**. Đ159, Đ286, Đ287, Đ288, Đ289 đều có — lưu ý cách trích ở mục 4 |
| 4 | Luật 86/2025/QH15 sửa đổi Bộ luật Hình sự | `luat-86-2025-qh15-sua-doi-bo-luat-hinh-su.pdf` | `.txt` | [Công báo 955+956 ngày 22-7-2025](https://congbao.chinhphu.vn/van-ban/luat-so-86-2025-qh15-45528/57612.htm) | 25/06/2025 | 01/07/2025 | đã vào VBHN 135 | 52 trang. Sửa 39 điều của BLHS |
| 5 | Luật Hỗ trợ DNNVV 04/2017/QH14 | `luat-04-2017-qh14-ho-tro-dnnvv.pdf` | **không có** | [vanban.chinhphu.vn](https://vanban.chinhphu.vn/?pageid=27160&docid=190283) → `datafiles.chinhphu.vn/cpp/files/vbpq/2017/07/04.signed.pdf` | 12/06/2017 | 01/01/2018 | chưa rà | ⚠️ **PDF là ảnh scan, không có lớp chữ** (15 trang, trích ra 14 ký tự). Máy không có tesseract nên chưa OCR. Ngày tháng theo thông tin công bố, **chưa đối chiếu được bằng text**. Tiêu chí DNNVV thực chất nằm ở NĐ 80/2021 Đ5 (dòng 6) — bản text có đủ |
| 6 | NĐ 80/2021/NĐ-CP hướng dẫn Luật Hỗ trợ DNNVV | `nd-80-2021-nd-cp-ho-tro-dnnvv.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-80-2021-nd-cp-34251.htm) | 26/08/2021 | 15/10/2021 | chưa rà | 33 trang. **Đ5 (tiêu chí siêu nhỏ, nhỏ, vừa) có trong bản text** |
| 7 | NĐ 30/2020/NĐ-CP về công tác văn thư | `nd-30-2020-nd-cp-cong-tac-van-thu.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-30-2020-nd-cp-30858.htm) | 05/03/2020 | 05/03/2020 | chưa rà | 82 trang — **có đủ Phụ lục I (thể thức, kỹ thuật trình bày)**, 21 dòng khớp "Điều 2 / Phụ lục I" |
| 8a | Luật Doanh nghiệp 59/2020/QH14 | `luat-59-2020-qh14-doanh-nghiep-p1.pdf`, `-p2.pdf` | `luat-59-2020-qh14-doanh-nghiep.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/luat-so-59-2020-qh14-31674.htm) | 17/06/2020 | 01/01/2021 | **chưa tìm được VBHN** | Đăng 2 số Công báo → 2 PDF, text đã ghép (168 trang). Đ43 (con dấu) có |
| 8b | Luật 76/2025/QH15 sửa đổi Luật Doanh nghiệp | `luat-76-2025-qh15-sua-doi-luat-doanh-nghiep.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/luat-so-76-2025-qh15-45505.htm) | 17/06/2025 | 01/07/2025 | — | 7 trang. Lưu ý Luật DN còn được sửa bởi **Luật 03/2022/QH15** — chưa tải |
| 8c | Luật 03/2022/QH15 sửa đổi 9 luật (có Luật Doanh nghiệp) | `luat-03-2022-qh15-sua-doi-9-luat.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/nghi-quyet-so-03-2022-qh15-36795.htm) | 11/01/2022 | 01/03/2022 | — | 15 trang. **Điều 7 sửa Luật Doanh nghiệp.** Không có trong danh sách handoff, tải bổ sung vì Luật DN 59/2020 được sửa bởi cả Luật 03/2022 và Luật 76/2025 |
| 9a | NĐ 85/2016/NĐ-CP an toàn HTTT theo cấp độ | `nd-85-2016-nd-cp-an-toan-httt-theo-cap-do.pdf` | **không có** | [vanban.chinhphu.vn](https://vanban.chinhphu.vn/?pageid=27160&docid=185601) | 01/07/2016 | 01/07/2016 | — | ⚠️ **PDF là ảnh scan** (26 trang, 25 ký tự). Trang Công báo của văn bản này không kèm tệp. Ngày tháng **chưa đối chiếu được bằng text** |
| 9b | TT 12/2022/TT-BTTTT hướng dẫn NĐ 85/2016 | `tt-12-2022-tt-btttt-chi-tiet-nd-85-2016.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/thong-tu-so-12-2022-tt-btttt-37720.htm) | 12/08/2022 | 01/10/2022 | — | 35 trang, **kèm phụ lục**, trích chữ tốt |
| 10 | NĐ 53/2022/NĐ-CP hướng dẫn Luật ANM 2018 | `nd-53-2022-nd-cp-chi-tiet-luat-an-ninh-mang-2018.pdf` | **không có** | [vanban.chinhphu.vn](https://vanban.chinhphu.vn/?pageid=27160&docid=206381) | 15/08/2022 | 01/10/2022 | — | ⚠️ **PDF là ảnh scan** (41 trang, 40 ký tự). Đã thử `xaydungchinhsach.chinhphu.vn`, `tulieuvankien.dangcongsan.vn`, `thuvienphapluat.vn` (403), `vbpl.vn` (JS chuyển hướng) — không nơi nào cho toàn văn dạng chữ. Ngày tháng **chưa đối chiếu được bằng text** |
| 11a | **Luật Đầu tư 143/2025/QH15** | `luat-143-2025-qh15-dau-tu.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/luat-so-143-2025-qh15-468703.htm) | 11/12/2025 | 01/03/2026 (Đ7 + Phụ lục IV: **01/7/2026**) | — | 76 trang. **Có đủ Phụ lục I–IV; Phụ lục IV từ dòng 2453, 187 ngành nghề.** Xem mục 1 |
| 11b | VBHN 09/VBHN-VPQH hợp nhất Luật Đầu tư (61/2020) | `vbhn-09-vpqh-luat-dau-tu-p1.pdf`, `-p2.pdf` | `vbhn-09-vpqh-luat-dau-tu.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/van-ban-hop-nhat-so-09-vbhn-vpqh-44393.htm) | 24/02/2025 | — | đây là VBHN | 122 trang, 2 phần đã ghép. Phụ lục IV cũ từ dòng 4007. **Giữ để đối chiếu, không dùng làm căn cứ hiện hành** |
| 12 | NĐ 147/2024/NĐ-CP về Internet và thông tin trên mạng | `nd-147-2024-nd-cp-...-p1..p3.pdf` | `nd-147-2024-nd-cp-internet-va-thong-tin-tren-mang.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-147-2024-nd-cp-43155.htm) | 09/11/2024 | 25/12/2024 | chưa rà | Đăng 3 số Công báo → 3 PDF, text đã ghép (251 trang, tệp text lớn nhất: 634 KB) |
| 13 | TT 09/2020/TT-NHNN an toàn HTTT ngân hàng | `tt-09-2020-tt-nhnn-an-toan-httt-ngan-hang.pdf` | `.txt` | [Công báo 1031+1032 ngày 05-11-2020](https://congbao.chinhphu.vn/van-ban/thong-tu-so-09-2020-tt-nhnn-32321.htm) | 21/10/2020 | 01/01/2021 | chưa rà | 49 trang, trích chữ tốt. **Chưa rà văn bản sửa đổi, thay thế** — cần kiểm trước khi dẫn |
| 14 | **Luật Thương mại điện tử 122/2025/QH15** | `luat-122-2025-qh15-thuong-mai-dien-tu.pdf` | `.txt` | [Công báo](https://congbao.chinhphu.vn/van-ban/luat-so-122-2025-qh15-468683/61714.htm) | 10/12/2025 | 01/07/2026 | — | 28 trang. Số hiệu cần dẫn: **122/2025/QH15** |

## 3. Việc chưa làm được

| Việc | Lý do | Gợi ý xử lý |
|---|---|---|
| Bản text của **Luật 04/2017**, **NĐ 85/2016**, **NĐ 53/2022** | Bản ký số trên cổng chính phủ là ảnh scan; máy không có tesseract; các cổng còn lại không có toàn văn dạng chữ hoặc chặn truy cập | Mua/dùng bản của một CSDL thương mại, hoặc cài tesseract + tiếng Việt rồi OCR 82 trang này. Với Luật 04/2017 thì NĐ 80/2021 Đ5 đã đủ cho tiêu chí DNNVV |
| **VBHN Luật Doanh nghiệp** | Chưa tìm thấy VBHN nào hợp nhất Luật DN 59/2020 với Luật 03/2022 và Luật 76/2025 trên Công báo | Tra lại; nếu chưa có thì ghép tay từ ba văn bản đã có: **59/2020 + 03/2022 (Điều 7) + 76/2025**, đều nằm trong lượt tải này |
| Rà văn bản sửa đổi **TT 09/2020/TT-NHNN** | Ngoài phạm vi thời gian của lượt này | Kiểm "Sơ đồ văn bản" trên Công báo trước khi dẫn |

## 4. Lưu ý khi dùng bản text

1. **Không sửa chữ.** Text là bản trích nguyên trạng bằng `pypdf`, giữ nguyên số Điều, khoản, điểm. Không tóm tắt, không chuẩn hóa.
2. **PDF Công báo hay chèn khoảng trắng giữa từ**: gặp "trá i phép", "máy tín h", "đồn g". Khi grep nên dùng biểu thức nới lỏng khoảng trắng.
3. **Một số dòng tiêu đề bị trích giãn cách từng chữ**, ví dụ Điều 286 trong VBHN 135 ra thành `Đ i ề u  2 8 6 .  T ộ i  p h á t  t á n ...`. Tỷ lệ rất nhỏ (≤ 0,4% số dòng) và chỉ ở dòng tiêu đề; thân điều vẫn bình thường. Các tệp có hiện tượng này: `luat-143-2025-qh15-dau-tu` (11 dòng), `vbhn-09-vpqh-luat-dau-tu` (13), `vbhn-135-2025-vpqh-bo-luat-hinh-su` (10), `luat-86-2025-qh15-sua-doi-bo-luat-hinh-su` (2), `tt-12-2022-tt-btttt` (1), `nd-30-2020-nd-cp-cong-tac-van-thu` (1), `nd-147-2024-nd-cp` (1). **Tìm theo tên tội, tên chương thay vì chỉ theo "Điều NNN".**
4. **Văn bản đăng nhiều số Công báo** thì PDF chia thành `-p1`, `-p2`… và bản text đã ghép đúng thứ tự thành một tệp. Áp dụng cho: VBHN 135 (4 phần), NĐ 147/2024 (3), Luật DN 59/2020 (2), VBHN 09 Luật Đầu tư (2).
5. Không có tiêu chuẩn TCVN nào trong lượt tải này.

## 5. Cách tải lại

Script dùng trong lượt này nằm ở máy local (thư mục tạm của session), gồm: tải một URL và trích text (`fetch-vbqppl.py`), tải hàng loạt từ trang chi tiết Công báo (`batch-congbao.py`), đếm dòng bị giãn cách (`check-spaced-lines.py`). Cách làm để lặp lại:

1. Tìm trang chi tiết trên `congbao.chinhphu.vn/van-ban/<slug>-<id>.htm` (tìm bằng máy tìm kiếm — ô tìm kiếm của Công báo dùng POST nên không gọi được bằng URL).
2. Trong HTML trang đó, lấy các link `congbaocdn.chinhphu.vn/...pdf`. Nhiều link nghĩa là văn bản đăng nhiều số Công báo, tải hết rồi ghép theo thứ tự.
3. Với văn bản cũ không có tệp trên Công báo, dùng `vanban.chinhphu.vn/?pageid=27160&docid=<id>`, tệp nằm ở `datafiles.chinhphu.vn`. Cảnh báo: bản ký số trước khoảng 2022 thường là ảnh scan.
4. `vbpl.vn` hiện chuyển hướng bằng JavaScript nên không lấy được bằng HTTP thuần, kể cả trong trình duyệt thật khi mở link sâu. `thuvienphapluat.vn` trả 403.
