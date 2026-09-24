// Chuyển các mẫu văn bản Markdown trong docs/ sang Word (.docx)
// theo thể thức văn bản hành chính (NĐ 30/2020/NĐ-CP, Phụ lục I).
//
// Dùng:  node build.js                 -> build toàn bộ danh sách TARGETS
//        node build.js <file.md> ...   -> build các file chỉ định
// Kết quả ghi vào  word/<thư mục docs tương ứng>/<tên file>.docx
//
// Phạm vi xuất của mỗi file Markdown:
//   - Mẫu biểu (mau-0x): phần giữa hai dòng "---" đầu tiên.
//   - File khác có dòng "---": xuất phần SAU dòng "---" đầu tiên (phần trước là hướng dẫn);
//     các dòng "---" tiếp theo = ngắt trang.
//   - File không có "---": xuất toàn bộ (tiêu đề "# ..." thành tên văn bản).
//   - Dừng tại các mục chỉ dành cho người soạn: "Hướng dẫn điền", "Bằng chứng cần lưu",
//     "Checklist rà soát…", "Checklist thẩm định…", "Checklist trước khi ký".
// Nhận diện bảng: bảng có "CỘNG HÒA" = khối quốc hiệu; bảng có "Nơi nhận" = khối ký;
// còn lại = bảng dữ liệu (AutoFit, vừa khổ trang; bảng ≥ 9 cột chuyển trang ngang).
// {{PLACEHOLDER}} được thay bằng dữ liệu mẫu trong du-lieu-mau.json (nếu có) và tô vàng.

const fs = require("fs");
const path = require("path");
const JSZip = require("jszip");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, TableLayoutType, VerticalAlign,
  LineRuleType, PageOrientation, convertMillimetersToTwip, PageBreak,
} = require("docx");

// ---------------------------------------------------------------- cấu hình
const CFG = {
  font: "Times New Roman",  // NĐ 30/2020/NĐ-CP: phông chữ tiếng Việt Times New Roman (Unicode, TCVN 6909:2001)
  size: 13,                 // cỡ chữ nội dung (pt) — NĐ 30/2020: 13–14
  sizeHeader: 12,           // tên cơ quan, quốc hiệu (pt) — 12–13
  sizeSmall: 11,            // danh sách nơi nhận (pt)
  margin: { top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 }, // mm — lề "Normal" của Word (2,54 cm)
  firstLine: 10,            // lùi đầu dòng (mm)
  spacingAfter: 6,          // khoảng cách sau đoạn (pt)
  lineSpacing: 1.15,        // giãn dòng
  highlightPlaceholders: true,
  sampleData: true,         // thay {{...}} bằng dữ liệu mẫu (du-lieu-mau.json)
};

const ROOT = path.resolve(__dirname, "../..");
const OUT_DIR = path.join(ROOT, "word");
// Dữ liệu mẫu: khóa chung + "_theo_file" (giá trị riêng cho từng văn bản, theo tên file không đuôi .md).
// Giá trị dạng mảng: lần xuất hiện thứ k của placeholder trong văn bản nhận phần tử thứ k (vd. danh sách thành viên).
const SAMPLE_ALL = CFG.sampleData ? JSON.parse(fs.readFileSync(path.join(__dirname, "du-lieu-mau.json"), "utf8")) : {};
const PER_FILE = SAMPLE_ALL._theo_file || {};
let SAMPLE = {};
let USED = {};
function useSampleFor(rel) {
  SAMPLE = { ...SAMPLE_ALL, ...(PER_FILE[path.basename(rel, ".md")] || {}) };
  delete SAMPLE._ghi_chu; delete SAMPLE._theo_file;
  USED = {};
}
function sampleValue(key, consume = true) {
  const v = SAMPLE[key];
  if (!Array.isArray(v)) return v;
  const k = USED[key] || 0;
  if (consume) USED[key] = k + 1;
  return v[Math.min(k, v.length - 1)];
}

const TARGETS = [
  "docs/01-xac-dinh-cap-do/phieu-xac-dinh-cap-do.md",
  ...[
    "mau-01-de-nghi-tham-dinh-phe-duyet", "mau-02-de-nghi-tham-dinh", "mau-03-xin-y-kien-chuyen-mon",
    "mau-04-y-kien-tham-dinh", "mau-05-to-trinh-phe-duyet", "mau-06-quyet-dinh-phe-duyet-cap-do",
    "mau-07-quyet-dinh-phe-duyet-phuong-an-anm", "mau-08-bao-cao",
    "thuyet-minh-tong-quan-httt", "thuyet-minh-de-xuat-cap-do", "thuyet-minh-phuong-an-anm", "bao-cao-danh-gia-rui-ro",
  ].map((f) => `docs/02-ho-so-cap-do/${f}.md`),
  ...[
    "qd-chi-dinh-chu-quan-uy-quyen", "qd-chi-dinh-don-vi-bo-phan-chuyen-trach-anm", "qd-thanh-lap-hoi-dong-tham-dinh",
    "qd-giao-don-vi-van-hanh", "quy-che-bao-dam-anm", "quy-trinh-ung-pho-su-co", "quy-trinh-quan-ly-rui-ro",
    "quy-trinh-danh-gia-truoc-van-hanh", "quy-trinh-tiep-nhan-yeu-cau-co-quan-chuc-nang", "quy-trinh-quan-ly-nha-cung-cap",
    "ke-hoach-dao-tao-dien-tap",
  ].map((f) => `docs/04-chinh-sach-quy-trinh/${f}.md`),
];

const STOP_HEADINGS = /^#{1,4}\s+(Hướng dẫn điền|Bằng chứng cần lưu|Checklist rà soát|Checklist thẩm định|Checklist trước khi ký)/i;

const pt = (n) => n * 2;             // half-points
const mm = convertMillimetersToTwip;
const NONE = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NO_BORDERS = { top: NONE, bottom: NONE, left: NONE, right: NONE, insideHorizontal: NONE, insideVertical: NONE };
const TEXT_W = { portrait: mm(210 - CFG.margin.left - CFG.margin.right), landscape: mm(297 - CFG.margin.left - CFG.margin.right) };

// ---------------------------------------------------------------- inline
function prepText(t) {
  return t
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")          // liên kết -> chữ
    .replace(/`([^`]*)`/g, "$1")
    .replace(/&nbsp;/g, " ")
    .replace(/^\s*\[ \]\s*/, "☐ ").replace(/^\s*\[x\]\s*/i, "☒ ");
}

// Tách chuỗi Markdown/HTML đơn giản thành TextRun (đậm, nghiêng, placeholder).
function runs(text, base = {}) {
  const out = [];
  const tokens = prepText(text).split(/(\*\*|<\/?b>|<\/?i>|<\/?u>|(?<![*\w])\*(?![*\s])|(?<![*\s])\*(?![*\w])|\{\{[A-Za-z0-9_]+\}\})/);
  let bold = !!base.bold, italics = !!base.italics, underline = false;
  for (let t of tokens) {
    if (!t) continue;
    if (t === "**") { bold = !bold; continue; }
    if (t === "<b>") { bold = true; continue; }
    if (t === "</b>") { bold = !!base.bold; continue; }
    if (t === "<i>") { italics = true; continue; }
    if (t === "</i>") { italics = !!base.italics; continue; }
    if (t === "<u>") { underline = true; continue; }
    if (t === "</u>") { underline = false; continue; }
    if (t === "*") { italics = !italics; continue; }
    let highlight;
    const ph = t.match(/^\{\{([A-Za-z0-9_]+)\}\}$/);
    if (ph) {
      const v = sampleValue(ph[1]);
      if (v !== undefined) t = String(v);
      if (CFG.highlightPlaceholders) highlight = "yellow";
      if (!t) continue;
    }
    out.push(new TextRun({
      text: t, bold, italics, font: CFG.font, size: pt(base.size || CFG.size),
      allCaps: base.allCaps, underline: underline ? {} : undefined, highlight,
    }));
  }
  return out;
}

function para(text, opt = {}) {
  return new Paragraph({
    alignment: opt.align || AlignmentType.JUSTIFIED,
    indent: opt.indent,
    spacing: {
      before: opt.before ?? 0,
      after: opt.after ?? CFG.spacingAfter * 20,
      line: Math.round(240 * (opt.line ?? CFG.lineSpacing)),
      lineRule: LineRuleType.AUTO,
    },
    keepNext: opt.keepNext,
    border: opt.border,
    children: runs(text, opt.run || {}),
  });
}

// Đường kẻ ngắn dưới tên cơ quan / tiêu ngữ (NĐ 30/2020: dài 1/3–1/2 dòng chữ phía trên).
function shortRule(cellWidth, ratio) {
  const side = Math.round((cellWidth * (1 - ratio)) / 2);
  return new Paragraph({
    indent: { left: side, right: side },
    spacing: { before: 0, after: 60 },
    border: { top: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
    children: [],
  });
}

// ---------------------------------------------------------------- khối thể thức
const splitCell = (c) => c.split(/<br\s*\/?>/i).map((s) => s.trim());
const isRuleLine = (s) => /^-{3,}$/.test(s);
// Bỏ dòng mà toàn bộ nội dung là placeholder rỗng trong dữ liệu mẫu (vd. cơ quan cấp trên của doanh nghiệp).
const emptyAfterSample = (ln) => {
  const m = ln.replace(/\*\*/g, "").trim().match(/^\{\{([A-Za-z0-9_]+)\}\}$/);
  return m && sampleValue(m[1], false) === "";
};

function headerBlock(rows, W_TOTAL) {
  const W = [Math.round(W_TOTAL * 0.42), W_TOTAL - Math.round(W_TOTAL * 0.42)];
  const cell = (lines, w, kind, rowIdx) => {
    const children = [];
    lines.filter((ln) => !emptyAfterSample(ln)).forEach((raw) => {
      if (isRuleLine(raw)) { children.push(shortRule(w, kind === "left" ? 0.3 : 0.6)); return; }
      const ln = raw.replace(/\*\*/g, "");
      const isQuocHieu = /CỘNG HÒA/.test(ln);
      const isTieuNgu = /Độc lập/.test(ln);
      const isOrgName = kind === "left" && rowIdx === 0;
      children.push(para(ln, {
        align: AlignmentType.CENTER, after: 0, line: 1,
        run: {
          size: isTieuNgu ? CFG.size : isOrgName || isQuocHieu ? CFG.sizeHeader : CFG.size,
          bold: /\*\*/.test(raw) || isQuocHieu || isTieuNgu,
          italics: /^\*[^*].*\*$/.test(raw.trim()),
          allCaps: isOrgName || isQuocHieu,
        },
      }));
    });
    if (!children.length) children.push(new Paragraph({ children: [] }));
    return new TableCell({ width: { size: w, type: WidthType.DXA }, borders: NO_BORDERS, children });
  };
  return new Table({
    width: { size: W_TOTAL, type: WidthType.DXA },
    columnWidths: W,
    layout: TableLayoutType.FIXED,
    borders: NO_BORDERS,
    rows: rows.map((r, ri) => new TableRow({ children: [cell(splitCell(r[0] || ""), W[0], "left", ri), cell(splitCell(r[1] || ""), W[1], "right", ri)] })),
  });
}

function signatureBlock(rows, W_TOTAL) {
  const W = [Math.round(W_TOTAL * 0.45), W_TOTAL - Math.round(W_TOTAL * 0.45)];
  const mk = (r) => {
    const left = splitCell(r[0] || "").map((ln) => para(ln, {
      align: AlignmentType.LEFT, after: 0, line: 1,
      run: /Nơi nhận/.test(ln) ? { size: 12, bold: true, italics: true } : { size: CFG.sizeSmall },
    }));
    const right = splitCell(r[1] || "").map((ln) => para(ln || " ", {
      align: AlignmentType.CENTER, after: 0, line: 1,
      run: { size: CFG.size, bold: /\{\{HO_TEN|^\*\*/.test(ln) },
    }));
    return new TableRow({ children: [
      new TableCell({ width: { size: W[0], type: WidthType.DXA }, borders: NO_BORDERS, children: left.length ? left : [new Paragraph({})] }),
      new TableCell({ width: { size: W[1], type: WidthType.DXA }, borders: NO_BORDERS, children: right.length ? right : [new Paragraph({})] }),
    ] });
  };
  return new Table({
    width: { size: W_TOTAL, type: WidthType.DXA }, columnWidths: W,
    layout: TableLayoutType.FIXED, borders: NO_BORDERS, rows: rows.map(mk),
  });
}

// Bảng dữ liệu: AutoFit + chiều rộng 100% khổ trang (tương đương "AutoFit Window" của Word).
// Độ rộng cột ước lượng theo độ dài nội dung để LibreOffice/Google Docs hiển thị tương tự Word.
const plain = (t) => t
  .replace(/<br\s*\/?>/gi, " ").replace(/\*\*|<\/?[biu]>|`/g, "")
  .replace(/\{\{([A-Za-z0-9_]+)\}\}/g, (m, k) => { const v = sampleValue(k, false); return v !== undefined ? String(v) : m; });
// Thuật toán giống "AutoFit to contents" của Word/HTML:
//   natural = độ rộng khi không xuống dòng (ô dài nhất trong thân bảng); min = từ dài nhất (kể cả tiêu đề).
//   Nếu tổng natural vừa khổ: mỗi cột lấy natural, phần dư chia cho các cột nhiều chữ.
//   Nếu không vừa: mỗi cột lấy min, phần còn lại chia theo (natural − min) — cột ngắn như STT giữ nhỏ.
function columnWidths(rows, total, size) {
  const n = Math.max(...rows.map((r) => r.length));
  const charTw = size * 11;           // ~ bề rộng trung bình 1 ký tự Times New Roman (twip)
  const pad = 200;                    // lề trong ô + đường kẻ
  const tw = (chars) => Math.ceil(chars * charTw) + pad;
  const cols0 = Array.from({ length: n }, (_, j) => {
    const cells = rows.map((r) => plain(r[j] || ""));
    const head = cells[0] || "";
    const body = cells.slice(1);
    const words = (c) => c.split(/\s+/).map((x) => x.length);
    const minChars = Math.max(...words(head).map((x) => x * 1.3), ...body.flatMap(words), 3);
    const lines = body.flatMap((c) => c.split("\n"));
    let natChars = Math.max(...lines.map((c) => c.length), minChars);
    const filled = body.filter((c) => c.trim() && !/^[….\s]+$/.test(c)).length;
    if (body.length && filled === 0) natChars = Math.max(natChars, 10); // cột để trống cho người điền
    const empty = body.length > 0 && filled === 0;
    return { min: tw(Math.min(minChars, 22)), nat: tw(Math.min(natChars, 80)), empty };
  });
  const sumNat = cols0.reduce((a, c) => a + c.nat, 0);
  const sumMin = cols0.reduce((a, c) => a + c.min, 0);
  let cols;
  if (sumNat <= total) {
    const spare = total - sumNat;
    const flex = cols0.map((c) => Math.max(0, c.nat - 1200));   // chỉ cột nhiều chữ nhận thêm chỗ
    const fsum = flex.reduce((a, b) => a + b, 0) || 1;
    cols = cols0.map((c, j) => c.nat + Math.floor((spare * flex[j]) / fsum));
  } else if (sumMin <= total) {
    // "đổ nước": cột ngắn được đủ độ rộng tự nhiên trước (tên người, đơn vị, mã số không bị ngắt dòng),
    // cột nhiều chữ chia phần còn lại.
    cols = cols0.map((c) => c.min);
    let spare = total - sumMin;
    const fill = (group) => {
      let open = group.slice();
      while (open.length && spare > 0) {
        // chia theo tỷ lệ độ dài nội dung: cột càng nhiều chữ nhận càng nhiều chỗ
        const wsum = open.reduce((a, j) => a + cols0[j].nat, 0);
        const share = (j) => (spare * cols0[j].nat) / wsum;
        const done = open.filter((j) => cols0[j].nat - cols[j] <= share(j));
        if (!done.length) { const sp = spare; open.forEach((j) => { cols[j] += Math.floor((sp * cols0[j].nat) / wsum); }); spare = 0; break; }
        done.forEach((j) => { spare -= cols0[j].nat - cols[j]; cols[j] = cols0[j].nat; });
        open = open.filter((j) => !done.includes(j));
      }
    };
    // 1) cột ngắn (tên người, đơn vị, ngày, mã số…) được đủ độ rộng tự nhiên để không xuống dòng
    const shortCols = cols0.map((c, j) => j)
      .filter((j) => !cols0[j].empty && cols0[j].nat <= total * 0.2)
      .sort((a, b) => cols0[a].nat - cols0[b].nat);
    for (const j of shortCols) {
      const need = cols0[j].nat - cols[j];
      if (need <= spare * 0.5) { cols[j] += need; spare -= need; }
    }
    // 2) cột nhiều chữ chia phần còn lại theo tỷ lệ độ dài nội dung
    fill(cols0.map((c, j) => (c.empty ? -1 : j)).filter((j) => j >= 0)); // cột có nội dung trước
    fill(cols0.map((c, j) => (c.empty ? j : -1)).filter((j) => j >= 0)); // cột để trống sau
  } else {
    cols = cols0.map((c) => Math.floor((c.min / sumMin) * total));
  }
  cols[n - 1] += total - cols.reduce((a, b) => a + b, 0);
  return cols;
}

function tableFontSize(nCols) {
  if (nCols <= 3) return CFG.size - 1; // 12
  if (nCols <= 5) return 11;
  if (nCols <= 7) return 10;
  return 9;
}
function dataTable(rows, total) {
  const line = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
  const b = { top: line, bottom: line, left: line, right: line };
  const n = Math.max(...rows.map((r) => r.length));
  const size = tableFontSize(n);
  const cols = columnWidths(rows, total, size);
  return new Table({
    layout: TableLayoutType.AUTOFIT,
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: cols,
    rows: rows.map((r, ri) => new TableRow({
      tableHeader: ri === 0,
      cantSplit: true,
      children: cols.map((cw, j) => new TableCell({
        width: { size: cw, type: WidthType.DXA },
        borders: b,
        verticalAlign: VerticalAlign.CENTER,
        shading: ri === 0 ? { type: "clear", fill: "F2F2F2", color: "auto" } : undefined,
        margins: { left: 70, right: 70, top: 30, bottom: 30 },
        children: splitCell(r[j] || "").map((ln) => para(ln, {
          align: ri === 0 ? AlignmentType.CENTER : AlignmentType.LEFT, after: 0, line: 1,
          run: { size, bold: ri === 0 },
        })),
      })),
    })),
  });
}

// ---------------------------------------------------------------- parser
function parseTable(lines) {
  return lines
    .filter((l) => !/^\|\s*:?-{3,}/.test(l.trim()))
    .map((l) => l.trim().replace(/^\|/, "").replace(/\|\s*$/, "").split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, "|")));
}

function selectBody(md, rel) {
  const lines = md.split("\n");
  const seps = lines.map((l, i) => (l.trim() === "---" ? i : -1)).filter((i) => i >= 0);
  const isForm = /\/mau-0\d-/.test(rel);
  let body, title = null;
  if (isForm && seps.length >= 2) body = lines.slice(seps[0] + 1, seps[1]);
  else if (seps.length) body = lines.slice(seps[0] + 1);
  else {
    const hi = lines.findIndex((l) => /^#\s/.test(l));
    title = hi >= 0 ? lines[hi].replace(/^#\s+/, "") : null;
    body = lines.slice(hi + 1);
  }
  const stop = body.findIndex((l) => STOP_HEADINGS.test(l.trim()));
  if (stop >= 0) body = body.slice(0, stop);
  while (body.length && (body[body.length - 1].trim() === "" || body[body.length - 1].trim() === "---")) body.pop();
  return { body, title };
}

function convert(md, rel) {
  const { body, title } = selectBody(md, rel);
  const sections = [{ landscape: false, children: [] }];
  let cur = sections[0];
  let out = cur.children;
  const newSection = (landscape) => { cur = { landscape, children: [] }; sections.push(cur); out = cur.children; };
  const W = () => (cur.landscape ? TEXT_W.landscape : TEXT_W.portrait);

  if (title) {
    out.push(para(title.replace(/^Mẫu\s+/i, ""), { align: AlignmentType.CENTER, after: 240, line: 1, run: { size: 14, bold: true, allCaps: true } }));
  }

  for (let i = 0; i < body.length; ) {
    const line = body[i];
    const t = line.trim();
    if (!t) { i++; continue; }

    // ngắt trang
    if (t === "---") {
      if (out.length) out.push(new Paragraph({ children: [new PageBreak()] }));
      i++; continue;
    }

    // khối mã / sơ đồ
    if (t.startsWith("```")) {
      const lang = t.slice(3).trim();
      const block = [];
      i++;
      while (i < body.length && !body[i].trim().startsWith("```")) block.push(body[i++]);
      i++;
      if (lang === "mermaid") {
        out.push(para(`[Sơ đồ — xem bản trực tuyến: ${rel}]`, { align: AlignmentType.CENTER, run: { italics: true, size: 11 } }));
      } else {
        block.forEach((b) => out.push(new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: b, font: "Courier New", size: pt(10) })] })));
      }
      continue;
    }

    // bảng
    if (t.startsWith("|")) {
      const block = [];
      while (i < body.length && body[i].trim().startsWith("|")) block.push(body[i++]);
      const rows = parseTable(block);
      const joined = block.join(" ");
      const n = Math.max(...rows.map((r) => r.length));
      if (/CỘNG HÒA/.test(joined) && n === 2) {
        out.push(headerBlock(rows, W()));
        out.push(para("", { after: 120 }));
      } else if (/Nơi nhận/.test(joined) && n === 2) {
        out.push(para("", { after: 0 }));
        out.push(signatureBlock(rows, W()));
      } else if (n >= 9 && !cur.landscape) {
        newSection(true);
        out.push(dataTable(rows, W()));
        newSection(false);
      } else {
        out.push(dataTable(rows, W()));
        out.push(para("", { after: 60 }));
      }
      continue;
    }

    // tiêu đề
    const h = t.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const lv = h[1].length;
      const txt = h[2];
      const centered = lv <= 1 || /^(Chương|PHẦN|MẪU|Phụ lục)\b/i.test(txt.replace(/\*/g, ""));
      out.push(para(txt, {
        align: centered ? AlignmentType.CENTER : AlignmentType.LEFT, before: 180, after: 120, line: 1, keepNext: true,
        run: { bold: true, italics: lv >= 4, size: lv <= 2 ? CFG.size + 1 : CFG.size, allCaps: /^Chương\b/i.test(txt) },
      }));
      i++; continue;
    }

    // đoạn căn giữa
    const center = t.match(/^<p align="center">(.*)<\/p>$/);
    if (center) {
      splitCell(center[1]).forEach((ln, k, arr) => out.push(para(ln, {
        align: AlignmentType.CENTER, before: k === 0 ? 120 : 0, after: k === arr.length - 1 ? 180 : 0,
        line: 1, keepNext: true, run: { size: CFG.size + (/^<b>[^a-zđ]+<\/b>$/.test(ln) ? 1 : 0) },
      })));
      i++; continue;
    }

    // trích dẫn / ghi chú
    if (t.startsWith(">")) {
      const block = [];
      while (i < body.length && body[i].trim().startsWith(">")) block.push(body[i++].trim().replace(/^>\s?/, ""));
      out.push(para(block.join(" "), {
        indent: { left: mm(5) }, run: { italics: true, size: CFG.size - 1 },
        border: { left: { style: BorderStyle.SINGLE, size: 12, color: "999999", space: 8 } },
      }));
      continue;
    }

    // danh sách
    const li = line.match(/^(\s*)([-*+]|\d+[.)])\s+(.*)$/);
    if (li) {
      const depth = Math.floor(li[1].length / 2);
      const marker = /^\d/.test(li[2]) ? li[2].replace(")", ".") : "-";
      let txt = li[3];
      i++;
      while (i < body.length && /^\s{2,}\S/.test(body[i]) && !/^\s*([-*+]|\d+[.)])\s/.test(body[i])) txt += " " + body[i++].trim();
      const isCheck = /^\[[ xX]\]/.test(txt);
      out.push(para(isCheck ? txt : `${marker} ${txt}`, {
        align: AlignmentType.JUSTIFIED, after: 60,
        indent: { left: mm(8 + depth * 6), hanging: mm(isCheck ? 6 : 5) },
      }));
      continue;
    }

    // đoạn văn thường: gộp các dòng liền nhau
    const indentSpaces = line.match(/^ */)[0].length;
    let text = t;
    i++;
    while (i < body.length && body[i].trim() && !/^(\||#|>|```|<p|---$)/.test(body[i].trim()) && !/^\s*([-*+]|\d+[.)])\s/.test(body[i])) {
      text += " " + body[i].trim(); i++;
    }
    if (/^Kính gửi/.test(text)) { out.push(para(text, { align: AlignmentType.CENTER, before: 120, after: 180 })); continue; }
    const level = indentSpaces >= 3 ? 1 : 0;
    out.push(para(text, { indent: { firstLine: mm(CFG.firstLine + level * 5) } }));
  }
  return sections.filter((sec) => sec.children.length);
}

async function build(rel) {
  const src = path.join(ROOT, rel);
  const md = fs.readFileSync(src, "utf8");
  useSampleFor(rel);
  const doc = new Document({
    creator: "vn-cyber-compliance",
    title: (md.match(/^#\s+(.+)$/m) || [, path.basename(rel)])[1],
    styles: { default: { document: { run: { font: CFG.font, size: pt(CFG.size) } } } },
    sections: convert(md, rel).map((sec) => ({
      properties: {
        page: {
          size: { width: mm(210), height: mm(297), orientation: sec.landscape ? PageOrientation.LANDSCAPE : PageOrientation.PORTRAIT },
          margin: { top: mm(CFG.margin.top), bottom: mm(CFG.margin.bottom), left: mm(CFG.margin.left), right: mm(CFG.margin.right) },
        },
      },
      children: sec.children,
    })),
  });
  const dest = path.join(OUT_DIR, path.relative(path.join(ROOT, "docs"), src)).replace(/\.md$/, ".docx");
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const zip = await JSZip.loadAsync(await Packer.toBuffer(doc));
  const xml = (await zip.file("word/document.xml").async("string")).replace(/<w:highlightCs [^>]*\/>/g, "");
  zip.file("word/document.xml", xml);
  fs.writeFileSync(dest, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
  console.log("✓", path.relative(ROOT, dest));
}

(async () => {
  const list = process.argv.slice(2).length ? process.argv.slice(2) : TARGETS;
  for (const f of list) {
    const abs = fs.existsSync(path.resolve(f)) ? path.resolve(f) : path.join(ROOT, f);
    await build(path.relative(ROOT, abs));
  }
})();
