// Kiểm tra quy ước tên tệp: ASCII, chữ thường, không khoảng trắng, không ký tự đặc biệt.
// Ngoại lệ: tệp bắt đầu bằng "README" được phép viết hoa (README.md, README-tai-ve-2026-09.md).
import fs from "node:fs";
import path from "node:path";

const ROOTS = ["docs", "templates", "sources", "en"];
const VALID = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const README_LIKE = /^README([.-][A-Za-z0-9._-]+)?$/;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const problems = [];
for (const root of ROOTS) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    const name = path.basename(file);
    const rel = file.split(path.sep).join("/");

    if (name.includes("\u2026")) {
      problems.push(`${rel}: chứa ký tự ellipsis U+2026 (hãy gõ đầy đủ tên)`);
      continue;
    }
    if (!VALID.test(name)) {
      problems.push(`${rel}: tên tệp chứa ký tự ngoài [A-Za-z0-9._-] hoặc dấu tiếng Việt`);
      continue;
    }
    if (README_LIKE.test(name)) continue;
    if (name !== name.toLowerCase()) {
      problems.push(`${rel}: tên tệp phải viết thường toàn bộ`);
    }
  }
}

if (problems.length) {
  console.error("LỖI quy ước tên tệp:\n" + problems.map((p) => "  - " + p).join("\n"));
  process.exit(1);
}
console.log("Tên tệp: OK (" + ROOTS.filter((r) => fs.existsSync(r)).join(", ") + ")");
