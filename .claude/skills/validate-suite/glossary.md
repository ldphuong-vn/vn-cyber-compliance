# Glossary — Từ điển thuật ngữ thẩm định

> Diễn giải dễ hiểu cho mọi thuật ngữ & framework dùng trong bộ skill này. Viết cho cả người không
> chuyên: mỗi mục gồm *là gì* (một câu đời thường) và *ở đây dùng để làm gì*. Có thể đưa thẳng lên
> app làm phần trợ giúp/tooltip.

## 1. Khái niệm pipeline

**Dossier (hồ sơ thẩm định)** — Là gì: một "hồ sơ" duy nhất gom tất cả phân tích của một lần thẩm
định. Ở đây: nguồn sự thật chung; mọi tầng ghi vào đây, báo cáo HTML đọc ra từ đây.

**Case (loại tình huống)** — Là gì: thẩm định cho việc gì. Ý tưởng mới (A), sản phẩm đang chạy cần
soi lại (B), thêm tính năng (C), xoay hướng/pivot (D), hay một quyết định điểm như đổi giá (E).
Ở đây: quyết định những bước nào cần chạy.

**Stage (tầng)** — Là gì: một bước trong quy trình, từ tầng 0 (đóng khung) đến tầng 8 (vận hành).
Mỗi tầng trả lời một câu hỏi và có một "cổng".

**Gate (cổng)** — Là gì: một câu hỏi có/không hoặc có điểm, quyết định được đi tiếp hay dừng.
Ở đây: lọc bớt ý tưởng dở càng sớm càng rẻ.

**MUST_RUN / ASSERT / SKIP** — Là gì: mỗi tầng được gán một trong ba: *phải chạy*, *đã có bằng chứng
nên chỉ ghi nhận*, hoặc *bỏ qua vì không liên quan*. Ở đây: cùng một bộ skill nhưng đi đường khác
tùy tình huống (sản phẩm đang chạy không cần "xác thực vấn đề" lại từ đầu).

**Confidence (độ tự tin)** — Là gì: một số 0–1 cho biết bằng chứng vững tới đâu. Ở đây: tính từ điểm
các tầng; bằng chứng yếu kéo nó xuống.

**Threshold (ngưỡng)** — Là gì: mức confidence tối thiểu để được "Tiến hành". Ở đây: cao hơn (0.75)
với quyết định khó đảo, thấp hơn (0.65) với quyết định đảo được.

**Verdict (phán quyết)** — Là gì: kết luận cuối. *Tiến hành* (GO), *Dừng* (NO_GO), *Xoay hướng*
(PIVOT — vấn đề thật nhưng giải pháp/khách sai), *Tạm gác* (PARK — hứa hẹn nhưng còn thiếu một mảnh).

**Type-1 / Type-2 (Bezos)** — Là gì: quyết định *khó đảo* (cửa một chiều — Type-1) hay *đảo được*
(cửa hai chiều — Type-2). Ở đây: Type-1 đòi cân nhắc kỹ và ngưỡng cao hơn; Type-2 thì quyết nhanh.

## 2. Đóng khung & xác thực vấn đề

**JTBD (Jobs-To-Be-Done)** — Là gì: nhìn sản phẩm như "công việc" khách thuê nó làm, thay vì nhìn
tính năng. Mẫu câu: "Khi <tình huống>, tôi muốn <động lực>, để <kết quả>". Ở đây: viết problem
statement chạm đúng khoảnh khắc khách đang vật lộn.

**5W1H** — Là gì: sáu câu hỏi What/Why/Who/When/Where/How để đóng khung đầy đủ một việc. Ở đây: ô
*Who* nối với "ai là người quyết".

**Risk × Uncertainty (rủi ro × bất định)** — Là gì: xếp hạng giả định theo "sai thì thiệt hại bao
nhiêu" (risk) và "ta không chắc tới đâu" (uncertainty). Ở đây: giả định vừa rủi ro cao vừa bất định
cao là cái phải đi kiểm chứng trước tiên.

**First Principles (nguyên lý gốc)** — Là gì: bóc một vấn đề về những sự thật cơ bản nhất thay vì
làm theo thói quen ngành. Ở đây: tránh kế thừa giả định sai của thị trường.

**The Mom Test** — Là gì: cách phỏng vấn khách để lấy sự thật chứ không lấy lời khen — hỏi về quá
khứ cụ thể, không hỏi "anh có mua không". Tên gọi: kể cả mẹ bạn cũng không nói dối được nếu hỏi đúng.
Ở đây: xác thực nỗi đau bằng hành vi đã xảy ra, không bằng lời hứa.

**RAT (Riskiest Assumption Test)** — Là gì: thay vì xây cả sản phẩm, hãy test rẻ nhất cái giả định
nguy hiểm nhất trước. Ở đây: tâm điểm của tầng xác thực giải pháp.

**VPC (Value Proposition Canvas)** — Là gì: bản đồ ghép "thuốc giảm đau / điều khách thích" của sản
phẩm với "nỗi đau / mong muốn" thật của khách. Ở đây: kiểm xem giải pháp có khớp vấn đề không.

**MVP / MLP** — Là gì: bản nhỏ nhất *chạy được* (MVP) hoặc nhỏ nhất *đáng yêu* (MLP) để học từ thị
trường nhanh và rẻ. Ở đây: định nghĩa thứ nhỏ nhất cho ra tín hiệu thật, không phải danh sách tính năng.

## 3. Thị trường & mô hình kinh doanh

**TAM / SAM / SOM** — Là gì: ba vòng tròn thị trường — tổng thể (TAM), phần phục vụ được (SAM), phần
thực tế chiếm được (SOM). Ở đây: SOM trung thực quan trọng hơn TAM to.

**Beachhead (đầu cầu)** — Là gì: nhóm khách hẹp, với-tới-được, để thắng trước tiên rồi mới lan ra.
Ở đây: "nhắm tất cả mọi người" là dấu hiệu xấu.

**Crossing the Chasm** — Là gì: lý thuyết rằng sản phẩm phải vượt "vực" giữa nhóm khách tiên phong và
thị trường đại chúng, bằng cách thống trị một đầu cầu hẹp. Ở đây: cơ sở cho việc chọn beachhead.

**Positioning (định vị)** — Là gì: nói rõ sản phẩm *là gì, cho ai, hơn lựa chọn hiển nhiên ở điểm
nào*. Ở đây: phải phòng thủ được trước đối thủ lớn, không chỉ "khác".

**CAC (chi phí thu hút khách)** — Là gì: tốn bao nhiêu để có một khách. **LTV (giá trị vòng đời)**:
một khách mang lại bao nhiêu trong suốt thời gian gắn bó. Ở đây: tỉ lệ LTV:CAC và xu hướng của nó
quan trọng hơn con số chính xác lúc đầu.

**Margin (biên lợi nhuận)** — Là gì: phần còn lại sau khi trừ chi phí trực tiếp (kể cả hỗ trợ, hạ
tầng, phần cứng). Ở đây: biên mỏng là cờ đỏ, nhất là với phần cứng.

**Payback (thời gian hoàn vốn)** — Là gì: bao lâu thu lại được chi phí bỏ ra để có khách. Ở đây:
payback dài + chu kỳ bán dài = rủi ro dòng tiền.

**Lớp intent / Lens registry** — Là gì: bước Intake gắn vài cờ (tag) cho quyết định (chạm giá? dùng ads? có mô hình KD?), rồi tra bảng `lens-registry.md` để chỉ gọi đúng lens liên quan. Ở đây: khỏi chạy lens thừa, tiết kiệm chi phí và tránh chọn sai — bảng tĩnh, không phải LLM phân loại.

**Profit First (Mike Michalowicz)** — Là gì: lật công thức kế toán — thay vì Doanh thu − Chi phí = Lợi nhuận (lợi nhuận là phần thừa hay biến mất), làm Doanh thu − Lợi nhuận = Chi phí (lấy lợi nhuận ra trước, sống bằng phần còn lại). Ở đây: kiểm xem lợi nhuận có được THIẾT KẾ vào từ đầu và có lãi ở quy mô nhỏ không, thay vì 'hòa vốn một ngày nào đó'. Hợp doanh nghiệp chủ-vận-hành/SMB; căng với mô hình đốt tiền để scale.

**Value-based pricing / Price metric** — Là gì: định giá theo giá trị khách nhận (thay vì chi phí hay đối thủ); price metric là đơn vị tính tiền (seat/usage/kết quả/tier). Ở đây: metric tốt là metric scale theo thành công của khách. Xem `pricing.md`.

**Van Westendorp** — Là gì: cách đo mức sẵn lòng trả bằng 4 câu hỏi (quá đắt/đắt/rẻ/quá rẻ). Ở đây: đo WTP thay vì đoán giá.

**ICP (Ideal Customer Profile)** — Là gì: chân dung khách lý tưởng cụ thể. Ở đây: gốc của mọi quyết định kênh & thông điệp marketing.

**ROAS / phễu ads (CPM·CTR·CVR·CPA)** — Là gì: ROAS = doanh thu/chi phí ads; CAC ads phân rã qua phễu CPM→CTR→CVR→CPA. Ở đây: để biết kênh paid GÃY ở mắt xích nào, thay vì đoán một con số CAC. Xem `digital-ads.md`.

**CAC biên / bão hòa** — Là gì: đổ thêm ngân sách thì CAC tăng (hiệu suất giảm dần). Ở đây: chiến lược ads phải tính ở ĐƯỜNG CONG, không phải một điểm CAC.

**Incrementality** — Là gì: đo phần chuyển đổi THẬT do ads tạo ra (geo holdout, ghost ads), thay vì tin last-click. Ở đây: phương pháp test paid trung thực.

**CAC-theo-kênh** — Là gì: chi phí thu hút khách ước tính cho TỪNG kênh. Ở đây: phép lọc kênh — kênh không đạt payback bị loại sớm. Xem `marketing-strategy.md`.

**Brand vs Performance** — Là gì: marketing tạo cầu dài hạn (brand) vs bắt cầu ngắn hạn (performance). Ở đây: chia ngân sách hợp lý — chỉ một phía đều hỏng.

**Why now / Timing (thời điểm)** — Là gì: lý do khiến ý tưởng khả thi *bây giờ* mà không phải 2 năm
trước hay 2 năm nữa (công nghệ mới, luật mới, hành vi đổi). Ở đây: ý tưởng không có "why now" thường
là quá sớm hoặc quá muộn.

**Moat (hào nước / phòng thủ)** — Là gì: lợi thế bền vững khiến đối thủ nhiều tiền hơn không sao chép
nổi khi mô hình đã chạy (dữ liệu, hiệu ứng mạng, chi phí chuyển đổi, lợi thế bản địa/pháp lý). Ở đây:
"chạy nhanh hơn" KHÔNG phải moat.

**Founder-market fit (FMF)** — Là gì: vì sao chính đội này đặc biệt hợp để thắng ở thị trường này
(kinh nghiệm, quan hệ, hiểu biết riêng). Ở đây: FMF yếu là rủi ro thật kể cả khi vấn đề là thật.

## 4. Lăng kính tư duy & ra quyết định

**Sáu chiếc mũ tư duy (de Bono)** — Là gì: nhìn một vấn đề qua sáu "mũ" tách bạch — Trắng (dữ liệu),
Đỏ (cảm xúc), Đen (rủi ro), Vàng (lợi ích), Xanh lá (sáng tạo), Xanh dương (điều phối). Ở đây: buổi
review có cấu trúc ở cổng quyết định, tránh để cảm xúc nuốt dữ kiện hay ngược lại.

**Pre-mortem** — Là gì: tưởng tượng dự án ĐÃ thất bại rồi truy ngược vì sao, để phòng trước. Ngược
với post-mortem (mổ xẻ sau khi đã hỏng). Ở đây: sinh ra hành động giảm thiểu ngay bây giờ.

**Inversion (đảo ngược)** — Là gì: thay vì hỏi "làm sao thành công", hỏi "điều gì chắc chắn làm hỏng"
rồi tránh. Ở đây: lộ ra những nước đi tự sát hiển nhiên mà lạc quan che mất.

**Red team / Devil's advocate** — Là gì: cố tình đóng vai phản biện mạnh nhất chống lại ý tưởng.
Ở đây: nếu lập luận phản bác dễ bác lại thì ý tưởng chưa đủ vững.

**Second-order thinking (tư duy bậc hai)** — Là gì: hỏi "rồi sao nữa?" nhiều lần để thấy hệ quả dây
chuyền, không dừng ở hệ quả trước mắt. Ở đây: quan trọng với quyết định khó đảo.

**Decision matrix (ma trận quyết định)** — Là gì: bảng chấm điểm các phương án theo nhiều tiêu chí có
trọng số, rồi cộng lại. Ở đây: điểm cao nhất là *tín hiệu*, không phải luật — Sáu mũ có thể ghi đè.

**RAPID** — Là gì: mô hình phân vai quyết định — ai *Khuyến nghị* (R), *Đồng thuận* (A), *Thực thi*
(P), *Cho ý kiến* (I), *Quyết* (D). Ở đây: làm rõ "các decision makers" — ai thật sự bấm nút.

## 5. Kỷ luật bằng chứng (chống ảo giác)

**Loại bằng chứng (evidence_type)** — mỗi điểm số phải gắn nguồn:
- **đo được (MEASURED)** — dữ liệu thật của mình (doanh số, analytics, phỏng vấn đã làm). Mạnh nhất.
- **có dẫn nguồn (CITED)** — nguồn ngoài kèm tham chiếu (báo cáo, web).
- **người dùng nêu (USER_STATED)** — người dùng tự khẳng định, chưa kiểm chứng.
- **giả định (ASSUMED)** — agent suy luận, nói rõ là giả định. Yếu — bị chặn điểm.
- **chưa rõ (UNKNOWN)** — không có cơ sở; không được chấm điểm ngầm.

Ý nghĩa: bằng chứng càng yếu thì điểm càng bị chặn và confidence càng thấp — để một verdict "Tiến
hành" không bao giờ dựa trên phỏng đoán. Báo cáo hiển thị màu từng loại để người đọc phân biệt "điều
ta biết" với "điều ta đoán".

**Thang xác thực (validation ladder)** — Là gì: nấc thang thí nghiệm từ rẻ-yếu đến đắt-mạnh: phỏng
vấn → smoke test/landing page → concierge (làm tay) → pilot trả tiền. Ở đây: thay vì chỉ chấm điểm,
hệ thống chỉ ra nấc tiếp theo rẻ nhất để có bằng chứng mạnh hơn. Một khách trả tiền hơn mọi lời hứa.

**Tam giác hóa / quy tắc 2 nguồn** — Là gì: một tuyên bố quan trọng (nhất là quy mô thị trường, đối
thủ) cần ≥2 nguồn độc lập xác nhận mới được tin. Ở đây: một nguồn duy nhất bị coi như giả định cho
tới khi có nguồn thứ hai — chính là quy tắc kiểm chứng chéo 2 nguồn.
