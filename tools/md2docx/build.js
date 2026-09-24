// Chuyển các mẫu văn bản Markdown trong docs/ sang Word (.docx)
// theo thể thức văn bản hành chính (NĐ 30/2020/NĐ-CP, Phụ lục I), khổ A4.
//
// Dùng:  node build.js                 -> build toàn bộ danh sách TARGETS
//        node build.js <file.md> ...   -> build các file chỉ định
// Kết quả ghi vào  word/<thư mục docs tương ứng>/<tên file>.docx
//
// Quy ước Markdown được nhận diện (xem docs/02-ho-so-cap-do/mau-06-*.md):
//   - Phần nội dung mẫu nằm giữa hai dòng "---" đầu tiên sau khối căn cứ.
//   - Bảng đầu tiên 2 cột = khối quốc hiệu / tên cơ quan / số, ký hiệu / địa danh, ngày.
//   - Bảng có "Nơi nhận" = khối nơi nhận + chữ ký.
//   - Các bảng khác = bảng dữ liệu, co giãn theo nội dung (autofit).
//   - <p align="center">…</p> = đoạn căn giữa (tên loại, trích yếu, "QUYẾT ĐỊNH:").
//   - {{PLACEHOLDER}} được tô vàng để người dùng dễ thấy chỗ cần điền.

const fs = require("fs");
const path = require("path");
const JSZip = require("jszip");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, TableLayoutType, VerticalAlign,
  LineRuleType, convertMillimetersToTwip, PageOrientation,
} = require("docx");

// ---------------------------------------------------------------- cấu hình
const CFG = {
  font: "Calibri",          // font mặc định của Word bản gần đây; đổi ở đây nếu cần
  size: 13,                 // cỡ chữ nội dung (pt) — NĐ 30/2020: 13–14
  sizeHeader: 12,           // tên cơ quan, quốc hiệu (pt) — 12–13
  sizeSmall: 11,            // danh sách nơi nhận (pt)
  margin: { top: 20, bottom: 20, left: 30, right: 15 }, // mm — NĐ 30/2020
  firstLine: 10,            // lùi đầu dòng (mm)
  spacingAfter: 6,          // khoảng cách đoạn (pt)
  lineSpacing: 1.15,        // giãn dòng
  highlightPlaceholders: true,
};

const ROOT = path.resolve(__dirname, "../..");
const OUT_DIR = path.join(ROOT, "word");
const TARGETS = [
  "docs/02-ho-so-cap-do/mau-06-quyet-dinh-phe-duyet-cap-do.md",
];

const pt = (n) => n * 2;             // half-points
const mm = convertMillimetersToTwip;
const NONE = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NO_BORDERS = { top: NONE, bottom: NONE, left: NONE, right: NONE, insideHorizontal: NONE, insideVertical: NONE };
const PAGE_W = mm(210 - CFG.margin.left - CFG.margin.right);
const PAGE_H_INNER = mm(297 - CFG.margin.left - CFG.margin.right); // chiều rộng vùng chữ khi xoay ngang

// ---------------------------------------------------------------- inline
// Tách chuỗi Markdown/HTML đơn giản thành các TextRun (đậm, nghiêng, placeholder).
function runs(text, base = {}) {
  const out = [];
  const tokens = text
    .replace(/`([^`]*)`/g, "$1")
    .split(/(\*\*|<\/?b>|<\/?i>|(?<![*\w])\*(?!\*)|\*(?![*\w])|\{\{[A-Z0-9_]+\}\})/);
  let bold = !!base.bold, italics = !!base.italics;
  for (const t of tokens) {
    if (!t) continue;
    if (t === "**") { bold = !bold; continue; }
    if (t === "<b>") { bold = true; continue; }
    if (t === "</b>") { bold = base.bold || false; continue; }
    if (t === "<i>") { italics = true; continue; }
    if (t === "</i>") { italics = base.italics || false; continue; }
    if (t === "*") { italics = !italics; continue; }
    const isPh = /^\{\{[A-Z0-9_]+\}\}$/.test(t);
    out.push(new TextRun({
      text: t,
      bold, italics,
      font: CFG.font,
      size: pt(base.size || CFG.size),
      allCaps: base.allCaps,
      highlight: isPh && CFG.highlightPlaceholders ? "yellow" : undefined,
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
      after: opt.after ?? pt(CFG.spacingAfter) * 10,
      line: Math.round(240 * (opt.line ?? CFG.lineSpacing)),
      lineRule: LineRuleType.AUTO,
    },
    keepNext: opt.keepNext,
    border: opt.border,
    children: runs(text, opt.run || {}),
  });
}

// Đường kẻ ngắn dưới tên cơ quan / tiêu ngữ (NĐ 30/2020: dài 1/3–1/2 dòng chữ).
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

function headerBlock(rows) {
  const W = [Math.round(PAGE_W * 0.4), PAGE_W - Math.round(PAGE_W * 0.4)];
  const cell = (lines, w, kind, rowIdx) => {
    const children = [];
    lines.forEach((raw, i) => {
      if (isRuleLine(raw)) { children.push(shortRule(w, kind === "left" ? 0.35 : 0.62)); return; }
      const ln = raw.replace(/\*\*/g, "");
      const clean = ln;
      const isQuocHieu = /CỘNG HÒA/.test(clean);
      const isTieuNgu = /Độc lập/.test(clean);
      children.push(para(ln, {
        align: AlignmentType.CENTER, after: 0, line: 1,
        run: {
          size: isTieuNgu ? CFG.size : CFG.sizeHeader,
          bold: /\*\*/.test(raw) || isQuocHieu || isTieuNgu,
          allCaps: (kind === "left" && rowIdx === 0 && i === 0) || isQuocHieu,
        },
      }));
    });
    return new TableCell({ width: { size: w, type: WidthType.DXA }, borders: NO_BORDERS, children });
  };
  return new Table({
    width: { size: PAGE_W, type: WidthType.DXA },
    columnWidths: W,
    layout: TableLayoutType.FIXED,
    borders: NO_BORDERS,
    rows: rows.map((r, ri) => new TableRow({ children: [cell(splitCell(r[0]), W[0], "left", ri), cell(splitCell(r[1]), W[1], "right", ri)] })),
  });
}

function signatureBlock(row) {
  const W = [Math.round(PAGE_W * 0.45), PAGE_W - Math.round(PAGE_W * 0.45)];
  const left = splitCell(row[0]).map((ln, i) => para(ln, {
    align: AlignmentType.LEFT, after: 0, line: 1,
    run: i === 0 ? { size: 12, bold: true, italics: true } : { size: CFG.sizeSmall },
  }));
  const right = splitCell(row[1]).map((ln) => para(ln || " ", {
    align: AlignmentType.CENTER, after: 0, line: 1,
    run: { size: CFG.size, bold: /\{\{HO_TEN/.test(ln) },
  }));
  return new Table({
    width: { size: PAGE_W, type: WidthType.DXA },
    columnWidths: W,
    layout: TableLayoutType.FIXED,
    borders: NO_BORDERS,
    rows: [new TableRow({ children: [
      new TableCell({ width: { size: W[0], type: WidthType.DXA }, borders: NO_BORDERS, children: left }),
      new TableCell({ width: { size: W[1], type: WidthType.DXA }, borders: NO_BORDERS, children: right }),
    ] })],
  });
}

// Bảng dữ liệu: bố cục "AutoFit" của Word — Word tự co giãn cột theo nội dung khi mở file.
// Vẫn ghi sẵn độ rộng cột ước lượng theo độ dài nội dung để LibreOffice/Google Docs hiển thị đúng.
const plain = (t) => t.replace(/<br\s*\/?>/gi, " ").replace(/\*\*|<\/?[bi]>|`/g, "");
function columnWidths(rows, total) {
  const n = Math.max(...rows.map((r) => r.length));
  const w = Array.from({ length: n }, (_, j) => {
    const cells = rows.map((r) => plain(r[j] || ""));
    const longestWord = Math.max(...cells.flatMap((c) => c.split(/\s+/).map((x) => x.length)), 2);
    const longestCell = Math.max(...cells.map((c) => c.length), 2);
    return Math.max(Math.min(longestWord, 18), Math.min(longestCell, 45), 4);
  });
  const MIN = 700; // ~1,2 cm: đủ cho "STT" và lề ô
  const sum = w.reduce((a, b) => a + b, 0);
  let cols = w.map((x) => Math.floor((x / sum) * total));
  const short = cols.filter((c) => c < MIN).length;
  if (short) {
    const spare = total - short * MIN;
    const big = w.filter((_, j) => cols[j] >= MIN).reduce((a, b) => a + b, 0);
    cols = cols.map((c, j) => (c < MIN ? MIN : Math.floor((w[j] / big) * spare)));
  }
  cols[n - 1] += total - cols.reduce((a, b) => a + b, 0);
  return cols;
}
function dataTable(rows, total) {
  const line = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
  const b = { top: line, bottom: line, left: line, right: line };
  const cols = columnWidths(rows, total);
  const small = cols.length > 6;
  return new Table({
    layout: TableLayoutType.AUTOFIT,
    width: { size: total, type: WidthType.DXA },
    columnWidths: cols,
    rows: rows.map((r, ri) => new TableRow({
      tableHeader: ri === 0,
      children: cols.map((cw, j) => new TableCell({
        width: { size: cw, type: WidthType.DXA },
        borders: b,
        verticalAlign: VerticalAlign.CENTER,
        margins: { left: 80, right: 80, top: 40, bottom: 40 },
        children: splitCell(r[j] || "").map((ln) => para(ln, {
          align: ri === 0 ? AlignmentType.CENTER : AlignmentType.LEFT, after: 0, line: 1,
          run: { size: small ? CFG.sizeSmall : CFG.size - 1, bold: ri === 0 },
        })),
      })),
    })),
  });
}

// ---------------------------------------------------------------- parser
function parseTable(lines) {
  return lines
    .filter((l) => !/^\|\s*:?-{3,}/.test(l))
    .map((l) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim()));
}

function extractBody(md) {
  const lines = md.split("\n");
  const seps = lines.map((l, i) => (l.trim() === "---" ? i : -1)).filter((i) => i >= 0);
  if (seps.length < 2) throw new Error("Không tìm thấy phần nội dung mẫu giữa hai dòng ---");
  return lines.slice(seps[0] + 1, seps[1]);
}

function convert(md) {
  const body = extractBody(md);
  const sections = [{ landscape: false, children: [] }];
  let out = sections[0].children;
  const newSection = (landscape) => { const sec = { landscape, children: [] }; sections.push(sec); out = sec.children; };
  let firstTable = true;
  for (let i = 0; i < body.length; ) {
    const line = body[i];
    if (!line.trim()) { i++; continue; }

    if (line.trim().startsWith("|")) {
      const block = [];
      while (i < body.length && body[i].trim().startsWith("|")) block.push(body[i++]);
      const rows = parseTable(block);
      if (block.join(" ").includes("Nơi nhận")) {
        out.push(para("", { after: 0 }));
        out.push(signatureBlock(rows[0]));
      } else if (firstTable && rows[0].length === 2) {
        out.push(headerBlock(rows));
        out.push(para("", { after: 0 }));
      } else if (rows[0].length > 6) {
        // bảng nhiều cột: đặt riêng trong trang khổ ngang
        newSection(true);
        out.push(dataTable(rows, PAGE_H_INNER));
        newSection(false);
      } else {
        out.push(dataTable(rows, PAGE_W));
        out.push(para("", { after: 0 }));
      }
      firstTable = false;
      continue;
    }

    const center = line.match(/^<p align="center">(.*)<\/p>\s*$/);
    if (center) {
      splitCell(center[1]).forEach((ln, k, arr) => out.push(para(ln, {
        align: AlignmentType.CENTER, before: k === 0 ? 120 : 0, after: k === arr.length - 1 ? 180 : 0,
        line: 1, keepNext: true, run: { size: CFG.size + (/^<b>QUYẾT ĐỊNH<\/b>$|^<b>[A-ZĐ ]+<\/b>$/.test(ln) ? 1 : 0) },
      })));
      i++; continue;
    }

    // đoạn văn: gộp các dòng liền nhau
    const indentSpaces = line.match(/^ */)[0].length;
    let text = line.trim();
    i++;
    const startsItem = (l) => /^(- |\d+\.\s|[a-zđ]\)\s|\(\d+\)\s)/.test(l.trim());
    while (i < body.length && body[i].trim() && !body[i].trim().startsWith("|") && !body[i].trim().startsWith("<p") && !startsItem(body[i])) {
      text += " " + body[i].trim(); i++;
    }
    const level = indentSpaces >= 3 ? 1 : 0;
    if (/^Kính gửi/.test(text)) { out.push(para(text, { align: AlignmentType.CENTER, before: 120, after: 180 })); continue; }
    out.push(para(text, { indent: { firstLine: mm(CFG.firstLine + level * 5) } }));
  }
  return sections.filter((sec) => sec.children.length);
}

async function build(rel) {
  const src = path.join(ROOT, rel);
  const md = fs.readFileSync(src, "utf8");
  const doc = new Document({
    creator: "vn-cyber-compliance",
    title: (md.match(/^#\s+(.+)$/m) || [, path.basename(rel)])[1],
    styles: { default: { document: { run: { font: CFG.font, size: pt(CFG.size) } } } },
    sections: convert(md).map((sec) => ({
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
