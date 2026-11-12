// Kiểm tra khối căn cứ ở đầu mỗi tài liệu trong docs/.
// Yêu cầu: trong 10 dòng đầu phải có cả "Căn cứ" và "Đối chiếu".
// Bỏ qua tệp nhật ký mục lục (cap-nhat-dinh-ky/README.md) vì chỉ là bảng liên kết.
import fs from "node:fs";
import path from "node:path";

const ROOT = "docs";
const SKIP = new Set([
  "docs/00-tong-quan/cap-nhat-dinh-ky/README.md",
]);
const HEAD_LINES = 10;

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".md")) out.push(full.split(path.sep).join("/"));
  }
  return out;
}

const problems = [];
for (const file of walk(ROOT)) {
  if (SKIP.has(file)) continue;
  const head = fs.readFileSync(file, "utf8").split(/\r?\n/).slice(0, HEAD_LINES).join("\n");
  const missing = [];
  if (!head.includes("Căn cứ")) missing.push("\"Căn cứ\"");
  if (!head.includes("Đối chiếu")) missing.push("\"Đối chiếu\"");
  if (missing.length) problems.push(`${file}: thiếu ${missing.join(" và ")} trong ${HEAD_LINES} dòng đầu`);
}

if (problems.length) {
  console.error("LỖI khối căn cứ đầu trang:\n" + problems.map((p) => "  - " + p).join("\n"));
  process.exit(1);
}
console.log("Khối căn cứ: OK (" + walk(ROOT).length + " tệp)");
