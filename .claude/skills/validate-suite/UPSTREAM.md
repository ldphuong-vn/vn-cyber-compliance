# Nguồn gốc bản vendored

- Upstream: https://github.com/ldphuong-vn/validate-suite
- Commit: `f2019ba3fdf963a0a351e11e4df46b35fe0a91e4` (2026-09-24)
- Bỏ qua khi copy: `.git/`, `docs/` (plans/specs phát triển nội bộ của skill), `.gitignore`.

Cập nhật: clone upstream, xóa mọi file trong thư mục này trừ `UPSTREAM.md`, rồi copy lại
(bỏ `.git`, `docs`, `.gitignore`) và sửa commit ở trên.

Lưu ý repo này là public: chạy chế độ STATEFUL thì store nằm ở `~/.validate-suite/` (ngoài repo) —
không đưa ledger/dossier chiến lược kinh doanh vào repo.
