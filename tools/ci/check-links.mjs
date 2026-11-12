// Kiểm tra link tương đối trong tài liệu Markdown có trỏ tới tệp/thư mục thật hay không.
// Bỏ qua link http(s), mailto, và phần neo (#...). Không kiểm tra neo có tồn tại hay không.
import fs from "node:fs";
import path from "node:path";

const TARGETS = ["README.md", "CONTRIBUTING.md", "docs", "en", "sources", "templates/README.md"];
const LINK = /\[[^\]]*\]\(([^)\s]+)\)/g;

function collectMarkdown(target) {
  if (!fs.existsSync(target)) return [];
  const stat = fs.statSync(target);
  if (stat.isFile()) return target.endsWith(".md") ? [target] : [];
  const out = [];
  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    const full = path.join(target, entry.name);
    if (entry.isDirectory()) out.push(...collectMarkdown(full));
    else if (entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

const files = [...new Set(TARGETS.flatMap(collectMarkdown))];
const problems = [];

for (const file of files) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    let m;
    LINK.lastIndex = 0;
    while ((m = LINK.exec(line)) !== null) {
      const raw = m[1];
      if (/^(https?:|mailto:|tel:|#)/i.test(raw)) continue;
      const withoutAnchor = raw.split("#")[0];
      if (!withoutAnchor) continue;
      const decoded = decodeURIComponent(withoutAnchor);
      const target = decoded.startsWith("/")
        ? path.join(process.cwd(), decoded)
        : path.resolve(path.dirname(file), decoded);
      if (!fs.existsSync(target)) {
        problems.push(`${file}:${i + 1}  ->  ${raw}`);
      }
    }
  });
}

if (problems.length) {
  console.error("LỖI link hỏng (" + problems.length + "):\n" + problems.map((p) => "  - " + p).join("\n"));
  process.exit(1);
}
console.log("Link nội bộ: OK (" + files.length + " tệp Markdown)");
