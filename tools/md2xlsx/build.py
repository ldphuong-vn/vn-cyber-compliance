"""Xuất các checklist, ma trận, sổ đăng ký trong docs/ sang Excel (.xlsx).

Dùng:  python3 tools/md2xlsx/build.py
Kết quả ghi vào templates/<thư mục docs tương ứng>/ (chung thư mục với bản Word).

- checklist-tu-danh-gia-cap-1-5.xlsx : checklist cấp 1–5 (cột Kết quả chọn từ danh sách) + sheet Tổng hợp tính bằng công thức
- ma-tran-yeu-cau-theo-cap-do.xlsx   : ma trận 18 nhóm × 5 cấp, ngưỡng định lượng, ánh xạ NĐ 331 ↔ TCVN
- so-dang-ky-rui-ro.xlsx             : sổ đăng ký rủi ro, Mức rủi ro = Khả năng × Tác động (công thức)
- ma-tran-raci.xlsx                  : ma trận RACI
- checklist-cap-1-2.xlsx             : bộ mẫu cấp 1–2: danh mục HTTT, checklist TCVN mục 3/4 (tự lọc theo cấp), tổng hợp, lịch, sổ sự cố, kế hoạch khắc phục
"""
import json
import re
from pathlib import Path

from openpyxl import Workbook
from openpyxl.formatting.rule import CellIsRule, FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

ROOT = Path(__file__).resolve().parents[2]
DOCS = ROOT / "docs"
OUT = ROOT / "templates"
SAMPLE_FILE = ROOT / "tools" / "md2docx" / "du-lieu-mau.json"
SAMPLE = json.loads(SAMPLE_FILE.read_text(encoding="utf-8")) if SAMPLE_FILE.exists() else {}

FONT = "Times New Roman"
F_BODY = Font(name=FONT, size=11)
F_BOLD = Font(name=FONT, size=11, bold=True)
F_TITLE = Font(name=FONT, size=14, bold=True)
F_NOTE = Font(name=FONT, size=10, italic=True, color="555555")
FILL_HEAD = PatternFill("solid", fgColor="D9E1F2")
FILL_GROUP = PatternFill("solid", fgColor="F2F2F2")
FILL_INPUT = PatternFill("solid", fgColor="FFFF00")   # ô người dùng cần điền
THIN = Side(style="thin", color="999999")
BORDER = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)
WRAP = Alignment(wrap_text=True, vertical="top")
CENTER = Alignment(wrap_text=True, vertical="center", horizontal="center")
KET_QUA = ["Đạt", "Một phần", "Chưa", "N/A"]
BAN_QUYEN = ("Tóm lược để tra cứu; khi lập hồ sơ phải đối chiếu bản chính thức TCVN 14423:2026 (mua tại VSQI). "
             "Cột yêu cầu là diễn giải ngắn, không phải nguyên văn tiêu chuẩn.")


# ------------------------------------------------------------------ markdown helpers
def clean(s: str) -> str:
    s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
    s = re.sub(r"<br\s*/?>", "\n", s, flags=re.I)
    s = s.replace("**", "").replace("`", "")
    s = re.sub(r"(?<![\w*])\*(?!\s)([^*]+?)\*(?!\w)", r"\1", s)
    return s.strip()


def fill_sample(s: str) -> str:
    return re.sub(r"\{\{([A-Za-z0-9_]+)\}\}", lambda m: str(SAMPLE.get(m.group(1), m.group(0))), s)


def md_tables(path: Path):
    """Trả về danh sách (tiêu đề gần nhất, [hàng...]) cho mọi bảng trong file."""
    lines = path.read_text(encoding="utf-8").split("\n")
    heading, out, i = "", [], 0
    while i < len(lines):
        t = lines[i].strip()
        h = re.match(r"^(#{1,6})\s+(.*)$", t)
        if h:
            heading = clean(h.group(2))
        if t.startswith("|"):
            block = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                block.append(lines[i].strip())
                i += 1
            rows = [
                [clean(c) for c in re.split(r"(?<!\\)\|", b.strip("|"))]
                for b in block if not re.match(r"^\|\s*:?-{3,}", b)
            ]
            out.append((heading, rows))
            continue
        i += 1
    return out


# ------------------------------------------------------------------ sheet helpers
def write_table(ws, top, rows, widths=None, header=True):
    for r, row in enumerate(rows):
        for c, val in enumerate(row):
            cell = ws.cell(row=top + r, column=1 + c, value=val)
            cell.font = F_BOLD if (header and r == 0) else F_BODY
            cell.alignment = CENTER if (header and r == 0) else WRAP
            cell.border = BORDER
            if header and r == 0:
                cell.fill = FILL_HEAD
    if widths:
        for c, w in enumerate(widths):
            ws.column_dimensions[get_column_letter(c + 1)].width = w
    return top + len(rows)


def auto_widths(rows, min_w=8, max_w=60):
    n = max(len(r) for r in rows)
    ws = []
    for j in range(n):
        longest = max((max((len(x) for x in (r[j] if j < len(r) else "").split("\n")), default=0) for r in rows), default=0)
        ws.append(max(min_w, min(max_w, longest * 0.9 + 2)))
    return ws


def title(ws, text, note=None):
    ws["A1"] = text
    ws["A1"].font = F_TITLE
    if note:
        ws["A2"] = note
        ws["A2"].font = F_NOTE
    return 4 if note else 3


# ------------------------------------------------------------------ 1. checklist
def build_checklist():
    wb = Workbook()
    guide = wb.active
    guide.title = "Hướng dẫn"
    r = title(guide, "CHECKLIST TỰ ĐÁNH GIÁ AN NINH MẠNG HTTT THEO CẤP ĐỘ (TCVN 14423:2026)", BAN_QUYEN)
    info = [
        ("Tổ chức (chủ quản)", fill_sample("{{TEN_TO_CHUC}}")),
        ("Hệ thống thông tin", fill_sample("{{TEN_HE_THONG}}")),
        ("Cấp độ", fill_sample("{{CAP_DO}}")),
        ("Người đánh giá (bộ phận độc lập — NĐ 331 Đ31.2.c)", fill_sample("{{DON_VI_DANH_GIA_DOC_LAP}}")),
        ("Ngày đánh giá", ""),
    ]
    for k, v in info:
        guide.cell(row=r, column=1, value=k).font = F_BOLD
        c = guide.cell(row=r, column=2, value=v)
        c.fill, c.font, c.border = FILL_INPUT, F_BODY, BORDER
        r += 1
    r += 1
    steps = [
        "1. Chọn sheet đúng cấp độ của hệ thống (Cấp 1 … Cấp 5). Mỗi dòng là một yêu cầu TCVN, tóm lược.",
        "2. Ô tô vàng là ô cần điền. Cột 'Kết quả' chọn từ danh sách: Đạt · Một phần · Chưa · N/A.",
        "3. Mọi N/A phải ghi lý do ở cột 'Ghi chú'; dùng phương án tương đương thì mô tả biện pháp thay thế.",
        "4. Dòng 'Chưa' / 'Một phần': ghi Người phụ trách và Hạn khắc phục — đây là kế hoạch khắc phục trong hồ sơ cấp độ.",
        "5. Sheet 'Tổng hợp' tự tính theo công thức; % Đạt = Đạt / (Tổng số dòng − N/A).",
        "6. Cột 'Ghi chú' có sẵn nhãn 'Mới/khác so với cấp N-1' để thấy phần tăng thêm khi nâng cấp.",
        "Nguồn: docs/03-yeu-cau-theo-cap-do/checklist-cap-*.md (repo vn-cyber-compliance). Căn cứ: NĐ 331/2026/NĐ-CP Đ28.4, Đ29.1, Đ30.1.",
    ]
    for s in steps:
        guide.cell(row=r, column=1, value=s).font = F_BODY
        r += 1
    r += 1
    guide.cell(row=r, column=1, value="Ví dụ một dòng đã điền:").font = F_BOLD
    r += 1
    example = [["Mục TCVN", "Yêu cầu (tóm lược)", "Kết quả", "Bằng chứng cần lưu", "Ghi chú", "Người phụ trách", "Hạn khắc phục"],
               ["5.6.2.4", "Xác thực đa yếu tố cho tài khoản quản trị", "Một phần",
                "Ảnh cấu hình MFA trên cổng quản trị", "Chưa áp dụng cho truy cập SSH",
                fill_sample("{{DON_VI_VAN_HANH}}"), "30/11/2026"]]
    write_table(guide, r, example)
    guide.column_dimensions["A"].width = 48
    guide.column_dimensions["B"].width = 50
    for col, w in zip("CDEFG", (12, 32, 30, 22, 14)):
        guide.column_dimensions[col].width = w

    summary_refs = []   # (level, sheet name, [(group, name)], last_row)
    for lv in range(1, 6):
        src = DOCS / "03-yeu-cau-theo-cap-do" / f"checklist-cap-{lv}.md"
        ws = wb.create_sheet(f"Cấp {lv}")
        top = title(ws, f"Checklist tự đánh giá — HTTT cấp độ {lv} (TCVN 14423:2026 mục {lv + 2})", BAN_QUYEN)
        headers = ["Nhóm", "Tên nhóm", "Mục TCVN", "Yêu cầu (tóm lược)", "Kết quả", "Bằng chứng cần lưu",
                   "Ghi chú", "Người phụ trách", "Hạn khắc phục"]
        write_table(ws, top, [headers])
        row = top + 1
        groups = []
        for heading, rows in md_tables(src):
            m = re.match(r"^(\d+\.\d+)\s+(.*)$", heading)
            if not m or not rows or rows[0][0] != "Mục TCVN":
                continue
            groups.append((m.group(1), m.group(2)))
            for data in rows[1:]:
                vals = [m.group(1), m.group(2), data[0], data[1], "", data[3] if len(data) > 3 else "",
                        data[4] if len(data) > 4 else "", "", ""]
                for c, v in enumerate(vals):
                    cell = ws.cell(row=row, column=c + 1, value=v)
                    cell.font, cell.alignment, cell.border = F_BODY, WRAP, BORDER
                for c in (5, 8, 9):
                    ws.cell(row=row, column=c).fill = FILL_INPUT
                row += 1
        last = row - 1
        dv = DataValidation(type="list", formula1='"' + ",".join(KET_QUA) + '"', allow_blank=True)
        dv.error, dv.errorTitle = "Chọn: Đạt, Một phần, Chưa hoặc N/A", "Giá trị không hợp lệ"
        ws.add_data_validation(dv)
        dv.add(f"E{top + 1}:E{last}")
        rng = f"E{top + 1}:E{last}"
        ws.conditional_formatting.add(rng, CellIsRule(operator="equal", formula=['"Đạt"'], fill=PatternFill("solid", fgColor="C6EFCE")))
        ws.conditional_formatting.add(rng, CellIsRule(operator="equal", formula=['"Một phần"'], fill=PatternFill("solid", fgColor="FFEB9C")))
        ws.conditional_formatting.add(rng, CellIsRule(operator="equal", formula=['"Chưa"'], fill=PatternFill("solid", fgColor="FFC7CE")))
        ws.conditional_formatting.add(rng, CellIsRule(operator="equal", formula=['"N/A"'], fill=PatternFill("solid", fgColor="D9D9D9")))
        for col, w in zip("ABCDEFGHI", (7, 26, 11, 60, 11, 32, 26, 18, 13)):
            ws.column_dimensions[col].width = w
        ws.freeze_panes = ws.cell(row=top + 1, column=4)
        ws.auto_filter.ref = f"A{top}:I{last}"
        ws.print_title_rows = f"{top}:{top}"
        ws.page_setup.orientation = "landscape"
        ws.page_setup.fitToWidth, ws.page_setup.fitToHeight = 1, 0
        ws.sheet_properties.pageSetUpPr.fitToPage = True
        summary_refs.append((lv, ws.title, groups, top + 1, last))

    # Tổng hợp — công thức COUNTIFS
    s = wb.create_sheet("Tổng hợp", 1)
    r = title(s, "TỔNG HỢP KẾT QUẢ TỰ ĐÁNH GIÁ", "Tự tính từ các sheet Cấp 1–5. % Đạt = Đạt / (Tổng − N/A).")
    head = ["Cấp độ", "Nhóm", "Tên nhóm", "Số yêu cầu", "Đạt", "Một phần", "Chưa", "N/A", "Chưa điền", "% Đạt"]
    for lv, name, groups, first, last in summary_refs:
        write_table(s, r, [head])
        r += 1
        start = r
        q = f"'{name}'"
        for g, gname in groups:
            vals = [f"Cấp {lv}", g, gname,
                    f'=COUNTIFS({q}!$A${first}:$A${last},B{r})']
            vals += [f'=COUNTIFS({q}!$A${first}:$A${last},B{r},{q}!$E${first}:$E${last},"{k}")' for k in KET_QUA]
            vals += [f"=D{r}-SUM(E{r}:H{r})", f'=IF(D{r}-H{r}=0,"",E{r}/(D{r}-H{r}))']
            for c, v in enumerate(vals):
                cell = s.cell(row=r, column=c + 1, value=v)
                cell.font, cell.border = F_BODY, BORDER
                cell.alignment = WRAP
            s.cell(row=r, column=10).number_format = "0%"
            r += 1
        tot = [f"Cấp {lv}", "", "Tổng"] + [f"=SUM({get_column_letter(c)}{start}:{get_column_letter(c)}{r - 1})" for c in range(4, 10)]
        tot.append(f'=IF(D{r}-H{r}=0,"",E{r}/(D{r}-H{r}))')
        for c, v in enumerate(tot):
            cell = s.cell(row=r, column=c + 1, value=v)
            cell.font, cell.border, cell.fill = F_BOLD, BORDER, FILL_GROUP
        s.cell(row=r, column=10).number_format = "0%"
        r += 2
    for col, w in zip("ABCDEFGHIJ", (9, 7, 44, 11, 8, 10, 8, 8, 11, 9)):
        s.column_dimensions[col].width = w
    save(wb, "03-yeu-cau-theo-cap-do/checklist-tu-danh-gia-cap-1-5.xlsx")


# ------------------------------------------------------------------ 2. ma trận
def build_matrix():
    wb = Workbook()
    wb.remove(wb.active)
    sources = [
        ("03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.md", "Ma trận yêu cầu TCVN 14423:2026 theo 5 cấp độ"),
        ("03-yeu-cau-theo-cap-do/anh-xa-nd331-d30-tcvn.md", "Ánh xạ NĐ 331 (Đ29, Đ30) ↔ TCVN 14423:2026"),
    ]
    used = set()
    for rel, doc_title in sources:
        for heading, rows in md_tables(DOCS / rel):
            if len(rows) < 2:
                continue
            base = re.sub(r"[\[\]\*\?/\\:]", "", heading)[:28] or "Bảng"
            name, k = base, 2
            while name in used:
                name, k = f"{base[:25]} ({k})", k + 1
            used.add(name)
            ws = wb.create_sheet(name)
            top = title(ws, f"{doc_title} — {heading}", BAN_QUYEN + f" Nguồn: docs/{rel}")
            write_table(ws, top, rows, auto_widths(rows))
            ws.freeze_panes = ws.cell(row=top + 1, column=2)
            ws.page_setup.orientation = "landscape"
            ws.page_setup.fitToWidth, ws.page_setup.fitToHeight = 1, 0
            ws.sheet_properties.pageSetUpPr.fitToPage = True
    save(wb, "03-yeu-cau-theo-cap-do/ma-tran-yeu-cau-theo-cap-do.xlsx")


# ------------------------------------------------------------------ 3. sổ đăng ký rủi ro
def build_risk_register():
    src = DOCS / "02-ho-so-cap-do" / "bao-cao-danh-gia-rui-ro.md"
    tables = {h: rows for h, rows in md_tables(src)}
    wb = Workbook()
    ws = wb.active
    ws.title = "Sổ đăng ký rủi ro"
    top = title(ws, f"SỔ ĐĂNG KÝ RỦI RO AN NINH MẠNG — {fill_sample('{{TEN_HE_THONG}}')}",
                "Căn cứ: NĐ 331/2026/NĐ-CP Đ10.3. Ô vàng là ô cần điền; Mức rủi ro = Khả năng × Tác động (công thức). "
                "Ngưỡng gợi ý: 1–4 Thấp · 5–9 Trung bình · 10–16 Cao · 20–25 Rất cao.")
    reg = next(rows for h, rows in tables.items() if h.startswith("3.2"))
    header = reg[0]
    i_kn, i_td, i_muc = header.index("Khả năng (1–5)"), header.index("Tác động (1–5)"), header.index("Mức rủi ro")
    header = header[:i_muc + 1] + ["Phân loại"] + header[i_muc + 1:]
    write_table(ws, top, [header])
    r = top + 1
    for data in reg[1:]:
        data = [fill_sample(x) for x in data]
        vals = data[:i_muc] + [None, None] + data[i_muc + 1:]
        for c, v in enumerate(vals):
            cell = ws.cell(row=r, column=c + 1, value=v)
            cell.font, cell.alignment, cell.border = F_BODY, WRAP, BORDER
        for idx in (i_kn, i_td):
            cell = ws.cell(row=r, column=idx + 1)
            cell.value = int(cell.value) if str(cell.value).isdigit() else None
            cell.fill = FILL_INPUT
        kn, td = get_column_letter(i_kn + 1), get_column_letter(i_td + 1)
        ws.cell(row=r, column=i_muc + 1, value=f'=IF(OR({kn}{r}="",{td}{r}=""),"",{kn}{r}*{td}{r})')
        ws.cell(row=r, column=i_muc + 2,
                value=f'=IF({get_column_letter(i_muc + 1)}{r}="","",IF({get_column_letter(i_muc + 1)}{r}>=20,"Rất cao",'
                      f'IF({get_column_letter(i_muc + 1)}{r}>=10,"Cao",IF({get_column_letter(i_muc + 1)}{r}>=5,"Trung bình","Thấp"))))')
        r += 1
    # thêm dòng trống để điền
    for _ in range(15):
        for c in range(len(header)):
            ws.cell(row=r, column=c + 1).border = BORDER
        for idx in (i_kn, i_td):
            ws.cell(row=r, column=idx + 1).fill = FILL_INPUT
        kn, td, mc = get_column_letter(i_kn + 1), get_column_letter(i_td + 1), get_column_letter(i_muc + 1)
        ws.cell(row=r, column=i_muc + 1, value=f'=IF(OR({kn}{r}="",{td}{r}=""),"",{kn}{r}*{td}{r})')
        ws.cell(row=r, column=i_muc + 2, value=f'=IF({mc}{r}="","",IF({mc}{r}>=20,"Rất cao",IF({mc}{r}>=10,"Cao",IF({mc}{r}>=5,"Trung bình","Thấp"))))')
        r += 1
    last = r - 1
    dv = DataValidation(type="whole", operator="between", formula1="1", formula2="5", allow_blank=True)
    dv.error = "Nhập số nguyên từ 1 đến 5"
    ws.add_data_validation(dv)
    dv.add(f"{get_column_letter(i_kn + 1)}{top + 1}:{get_column_letter(i_td + 1)}{last}")
    lvl = f"{get_column_letter(i_muc + 2)}{top + 1}:{get_column_letter(i_muc + 2)}{last}"
    for word, color in (("Rất cao", "FF7C80"), ("Cao", "FFC7CE"), ("Trung bình", "FFEB9C"), ("Thấp", "C6EFCE")):
        first = f"{get_column_letter(i_muc + 2)}{top + 1}"
        ws.conditional_formatting.add(lvl, FormulaRule(formula=[f'{first}="{word}"'], fill=PatternFill("solid", fgColor=color)))
    for c in range(len(header)):
        ws.column_dimensions[get_column_letter(c + 1)].width = 12 if c in (i_kn, i_td, i_muc, i_muc + 1) else 22
    ws.freeze_panes = ws.cell(row=top + 1, column=2)
    ws.page_setup.orientation = "landscape"
    ws.page_setup.fitToWidth, ws.page_setup.fitToHeight = 1, 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True

    scale = wb.create_sheet("Thang đo")
    top = title(scale, "THANG ĐO GỢI Ý KHẢ NĂNG VÀ TÁC ĐỘNG", "Nguồn: docs/02-ho-so-cap-do/bao-cao-danh-gia-rui-ro.md mục 3.1")
    rows = next(rows for h, rows in tables.items() if h.startswith("3.1"))
    write_table(scale, top, rows, [8, 30, 70])
    save(wb, "02-ho-so-cap-do/so-dang-ky-rui-ro.xlsx")


# ------------------------------------------------------------------ 4. RACI
def build_raci():
    src = DOCS / "04-chinh-sach-quy-trinh" / "ma-tran-raci.md"
    wb = Workbook()
    ws = wb.active
    ws.title = "RACI"
    r = title(ws, f"MA TRẬN RACI — BẢO ĐẢM AN NINH MẠNG — {fill_sample('{{TEN_TO_CHUC}}')}",
              "R: thực hiện · A: chịu trách nhiệm cuối cùng · C: tham vấn · I: được thông báo · *: phân vai do pháp luật ấn định. "
              "Nguồn: docs/04-chinh-sach-quy-trinh/ma-tran-raci.md")
    for heading, rows in md_tables(src):
        ws.cell(row=r, column=1, value=heading).font = F_BOLD
        r += 1
        r = write_table(ws, r, rows) + 1
    for col, w in zip("ABCDEFGHI", (58, 9, 9, 9, 9, 9, 9, 14, 28)):
        ws.column_dimensions[col].width = w
    ws.page_setup.orientation = "landscape"
    ws.page_setup.fitToWidth, ws.page_setup.fitToHeight = 1, 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    save(wb, "04-chinh-sach-quy-trinh/ma-tran-raci.xlsx")


# ------------------------------------------------------------------ 5. bộ mẫu cấp 1–2
def _fmt_sheet(ws, top, last, ncol, landscape=True):
    ws.freeze_panes = ws.cell(row=top + 1, column=2)
    ws.auto_filter.ref = f"A{top}:{get_column_letter(ncol)}{last}"
    ws.print_title_rows = f"{top}:{top}"
    if landscape:
        ws.page_setup.orientation = "landscape"
    ws.page_setup.fitToWidth, ws.page_setup.fitToHeight = 1, 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True


def _result_rules(ws, rng):
    dv = DataValidation(type="list", formula1='"' + ",".join(KET_QUA) + '"', allow_blank=True)
    dv.error, dv.errorTitle = "Chọn: Đạt, Một phần, Chưa hoặc N/A", "Giá trị không hợp lệ"
    ws.add_data_validation(dv)
    dv.add(rng)
    for val, color in (("Đạt", "C6EFCE"), ("Một phần", "FFEB9C"), ("Chưa", "FFC7CE"), ("N/A", "D9D9D9")):
        ws.conditional_formatting.add(rng, CellIsRule(operator="equal", formula=[f'"{val}"'], fill=PatternFill("solid", fgColor=color)))


def _log_sheet(wb, name, heading, note, rows, blank=20, widths=None):
    """Sheet dạng sổ: bảng mẫu từ Markdown + dòng trống tô vàng để điền."""
    ws = wb.create_sheet(name)
    top = title(ws, heading, note)
    last = write_table(ws, top, rows, widths or auto_widths(rows, max_w=40)) - 1
    for r in range(last + 1, last + 1 + blank):
        for c in range(len(rows[0])):
            cell = ws.cell(row=r, column=c + 1)
            cell.border, cell.fill, cell.alignment, cell.font = BORDER, FILL_INPUT, WRAP, F_BODY
    _fmt_sheet(ws, top, last + blank, len(rows[0]))
    return ws


def build_cap12():
    src = DOCS / "08-bo-mau-cap-1-2" / "checklist-cap-1-2.md"
    tables = {h[:1]: rows for h, rows in md_tables(src)}
    wb = Workbook()
    guide = wb.active
    guide.title = "Hướng dẫn"
    r = title(guide, "BẢNG TÍNH QUẢN LÝ AN NINH MẠNG — HTTT CẤP ĐỘ 1, CẤP ĐỘ 2", BAN_QUYEN)
    guide.cell(row=r, column=1, value="Tổ chức (chủ quản)").font = F_BOLD
    guide.cell(row=r, column=2, value=fill_sample("{{TEN_TO_CHUC}}")).fill = FILL_INPUT
    r += 1
    guide.cell(row=r, column=1, value="Cấp độ đánh giá (nhập 1 hoặc 2)").font = F_BOLD
    lv = guide.cell(row=r, column=2, value=2)
    lv.fill, lv.border = FILL_INPUT, BORDER
    dv = DataValidation(type="whole", operator="between", formula1="1", formula2="2")
    dv.error = "Nhập 1 hoặc 2"
    guide.add_data_validation(dv)
    dv.add(lv.coordinate)
    lv_ref = f"'Hướng dẫn'!$B${r}"
    r += 2
    for line in [
        "1. Sheet 'A. Danh mục HTTT': danh sách hệ thống, cấp độ, tình trạng phê duyệt (nguồn cột 6 Mẫu 08).",
        "2. Sheet 'B. Checklist': mỗi dòng là một yêu cầu TCVN 14423:2026 (mục 3 cấp 1, mục 4 cấp 2), diễn giải ngắn. "
        "Cột 'Áp dụng cho cấp đã chọn' tự tính theo ô Cấp độ ở trên. Ô vàng là ô cần điền; cột Kết quả chọn Đạt · Một phần · Chưa · N/A.",
        "3. Dòng 'Chưa' / 'Một phần': chuyển sang sheet 'E. Kế hoạch khắc phục' (nguồn cột 10–11 Mẫu 08).",
        "4. Sheet 'Tổng hợp' tự tính theo công thức; % Đạt = Đạt / (Số yêu cầu áp dụng − N/A).",
        "5. Sheet 'C. Lịch định kỳ', 'D. Sổ sự cố': dùng quanh năm; căn cứ Kế hoạch ANM năm và Quy trình sự cố rút gọn.",
        "6. Hệ thống nhiều cấp khác nhau: sao chép file, mỗi file một cấp; hoặc thêm cột Kết quả cho từng HTTT.",
        "Nguồn: docs/08-bo-mau-cap-1-2/checklist-cap-1-2.md. Căn cứ: NĐ 331/2026/NĐ-CP Đ28.5, Đ29, Đ30, Đ31.2.c, Đ33.3, Đ36.",
    ]:
        guide.cell(row=r, column=1, value=line).font = F_BODY
        guide.cell(row=r, column=1).alignment = Alignment(wrap_text=True, vertical="top")
        guide.merge_cells(start_row=r, start_column=1, end_row=r, end_column=2)
        guide.row_dimensions[r].height = 32
        r += 1
    guide.column_dimensions["A"].width = 60
    guide.column_dimensions["B"].width = 60

    # A. danh mục
    rows = [[fill_sample(x) for x in row] for row in tables["A"]]
    _log_sheet(wb, "A. Danh mục HTTT", "A. DANH MỤC HỆ THỐNG THÔNG TIN", "Hàng mẫu minh họa (dữ liệu mô phỏng) — thay bằng dữ liệu của tổ chức.", rows, blank=10)

    # B. checklist
    ws = wb.create_sheet("B. Checklist")
    top = title(ws, "B. CHECKLIST TCVN 14423:2026 MỤC 3 (CẤP 1) VÀ MỤC 4 (CẤP 2)", BAN_QUYEN)
    src_rows = tables["B"]
    head = src_rows[0] + ["Áp dụng cho cấp đã chọn", "Kết quả", "Ghi chú, bằng chứng thực tế", "Người phụ trách", "Hạn khắc phục"]
    write_table(ws, top, [head])
    i_ap = src_rows[0].index("Áp dụng")
    col_ap = get_column_letter(i_ap + 1)
    n0 = len(src_rows[0])
    row = top + 1
    for data in src_rows[1:]:
        for c, v in enumerate(data):
            cell = ws.cell(row=row, column=c + 1, value=v)
            cell.font, cell.alignment, cell.border = F_BODY, WRAP, BORDER
        f = (f'=IF({lv_ref}=1,IF(LEFT({col_ap}{row},6)="chỉ C2","Không","Có"),'
             f'IF(LEFT({col_ap}{row},6)="chỉ C1","Khuyến nghị","Có"))')
        cell = ws.cell(row=row, column=n0 + 1, value=f)
        cell.font, cell.alignment, cell.border = F_BODY, CENTER, BORDER
        for c in range(n0 + 2, n0 + 6):
            cell = ws.cell(row=row, column=c)
            cell.fill, cell.border, cell.alignment, cell.font = FILL_INPUT, BORDER, WRAP, F_BODY
        row += 1
    last = row - 1
    c_ap, c_kq = get_column_letter(n0 + 1), get_column_letter(n0 + 2)
    _result_rules(ws, f"{c_kq}{top + 1}:{c_kq}{last}")
    ws.conditional_formatting.add(f"A{top + 1}:{get_column_letter(n0 + 5)}{last}",
                                  FormulaRule(formula=[f'${c_ap}{top + 1}="Không"'], font=Font(name=FONT, size=11, color="999999")))
    for c, w in enumerate((11, 20, 52, 11, 11, 13, 30, 11, 11, 28, 16, 12)):
        ws.column_dimensions[get_column_letter(c + 1)].width = w
    _fmt_sheet(ws, top, last, n0 + 5)
    ws.freeze_panes = ws.cell(row=top + 1, column=4)

    # Tổng hợp theo nhóm
    s = wb.create_sheet("Tổng hợp", 1)
    r = title(s, "TỔNG HỢP KẾT QUẢ TỰ ĐÁNH GIÁ", "Tự tính từ sheet B theo cấp độ đã chọn ở sheet Hướng dẫn. % Đạt = Đạt / (Áp dụng − N/A).")
    hd = ["Nhóm", "Số yêu cầu áp dụng", "Đạt", "Một phần", "Chưa", "N/A", "Chưa điền", "% Đạt"]
    write_table(s, r, [hd])
    r += 1
    start = r
    q = "'B. Checklist'"
    rg = lambda col: f"{q}!${col}${top + 1}:${col}${last}"
    groups = list(dict.fromkeys(d[1] for d in src_rows[1:]))
    for g in groups:
        vals = [g, f'=COUNTIFS({rg("B")},A{r},{rg(c_ap)},"Có")']
        vals += [f'=COUNTIFS({rg("B")},A{r},{rg(c_ap)},"Có",{rg(c_kq)},"{k}")' for k in KET_QUA]
        vals += [f"=B{r}-SUM(C{r}:F{r})", f'=IF(B{r}-F{r}=0,"",C{r}/(B{r}-F{r}))']
        for c, v in enumerate(vals):
            cell = s.cell(row=r, column=c + 1, value=v)
            cell.font, cell.border, cell.alignment = F_BODY, BORDER, WRAP
        s.cell(row=r, column=8).number_format = "0%"
        r += 1
    tot = ["Tổng"] + [f"=SUM({get_column_letter(c)}{start}:{get_column_letter(c)}{r - 1})" for c in range(2, 8)]
    tot.append(f'=IF(B{r}-F{r}=0,"",C{r}/(B{r}-F{r}))')
    for c, v in enumerate(tot):
        cell = s.cell(row=r, column=c + 1, value=v)
        cell.font, cell.border, cell.fill = F_BOLD, BORDER, FILL_GROUP
    s.cell(row=r, column=8).number_format = "0%"
    for c, w in enumerate((34, 12, 9, 10, 9, 9, 10, 9)):
        s.column_dimensions[get_column_letter(c + 1)].width = w

    # C, D, E
    _log_sheet(wb, "C. Lịch định kỳ", "C. LỊCH HOẠT ĐỘNG ĐỊNH KỲ", "Tần suất tối thiểu theo TCVN 14423:2026 và NĐ 331; Quy chế của tổ chức có thể quy định dày hơn.",
               tables["C"], blank=5)
    _log_sheet(wb, "D. Sổ sự cố", "D. SỔ THEO DÕI SỰ CỐ AN NINH MẠNG",
               "Hàng đầu là ví dụ mô phỏng. Sự cố nghiêm trọng: thông báo ban đầu 24 giờ, báo cáo 72 giờ (NĐ 331 Đ31.2.d); vi phạm DLCN: 72 giờ (Luật 91 Đ23).",
               [[fill_sample(x) for x in row] for row in tables["D"]], blank=30)
    _log_sheet(wb, "E. Kế hoạch khắc phục", "E. KẾ HOẠCH KHẮC PHỤC TỒN TẠI",
               "Hai cột cuối là nguồn cột 10–11 Mẫu 08 (báo cáo năm, NĐ 331 Đ36).",
               [[fill_sample(x) for x in row] for row in tables["E"]], blank=30)
    save(wb, "08-bo-mau-cap-1-2/checklist-cap-1-2.xlsx")


def save(wb, rel):
    dest = OUT / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    wb.save(dest)
    print("✓", dest.relative_to(ROOT))


if __name__ == "__main__":
    build_checklist()
    build_matrix()
    build_risk_register()
    build_raci()
    build_cap12()
