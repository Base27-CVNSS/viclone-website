# 🤝 Đóng góp cho ViClone Website

Cảm ơn bạn quan tâm đến việc cải thiện **ViClone Website**. Đây là bản Việt hóa và tổ chức lại tài liệu dựa trên dự án gốc **AI Website Cloner Template**, vì vậy mọi đóng góp nên ưu tiên tính ổn định của workflow, khả năng tương thích với nhiều AI coding agent và chất lượng tài liệu.

> **Lưu ý quan trọng:** repository này là một **template**. Nếu mục tiêu của bạn chỉ là tái dựng một website cụ thể, hãy dùng **Use this template** để tạo repository riêng rồi làm việc trong bản sao đó. Pull request gửi về đây nên nhằm cải thiện chính template, skill `/clone-website`, cấu hình agent, scaffold Next.js hoặc tài liệu.

## 🧭 Có thể đóng góp những gì?

- **Cải thiện skill `/clone-website`** — tăng độ chính xác khi khảo sát, trích xuất CSS, asset, responsive hoặc interaction.
- **Bổ sung/hỗ trợ AI coding agent** — thêm nền tảng mới hoặc sửa cấu hình đã sinh cho agent hiện có.
- **Sửa lỗi scaffold Next.js** — build, lint, typecheck, cấu trúc component hoặc dependency.
- **Cải thiện script đồng bộ** — các script trong `scripts/` dùng để sinh cấu hình cho nhiều nền tảng.
- **Cải thiện tài liệu** — README, hướng dẫn khảo sát, tài liệu kiến trúc hoặc bản dịch tiếng Việt.
- **Tăng tính an toàn** — ngăn workflow tạo ra hành vi nguy hiểm, sai quyền hoặc vi phạm nguyên tắc sử dụng có trách nhiệm.

## 🛠️ Thiết lập môi trường phát triển

### Yêu cầu

- Node.js 24+
- Git
- npm

```bash
git clone https://github.com/YOUR-USERNAME/viclone-website.git
cd viclone-website
npm ci
```

Trước khi gửi pull request, hãy kiểm tra toàn bộ dự án:

```bash
npm run check
```

Lệnh trên thực hiện:

```text
ESLint → TypeScript typecheck → Production build
```

## 🔄 File nguồn và script đồng bộ

Đây là phần quan trọng nhất khi sửa workflow cho AI agent. Một số file là **single source of truth** và được dùng để sinh ra bản tương ứng cho nhiều nền tảng.

| Nội dung | File cần sửa | Lệnh đồng bộ |
|---|---|---|
| Hướng dẫn dự án cho agent | `AGENTS.md` | `bash scripts/sync-agent-rules.sh` |
| Skill `/clone-website` | `.claude/skills/clone-website/SKILL.md` | `node scripts/sync-skills.mjs` |

Nếu sửa file nguồn nhưng không chạy script đồng bộ, CI có thể thất bại vì các bản sinh tự động không còn khớp nhau.

## 🌿 Quy trình gửi Pull Request

1. Fork repository và tạo branch mới từ `master`.
2. Đặt tên branch ngắn gọn, ví dụ `fix/asset-extraction` hoặc `docs/vietnamese-guide`.
3. Thực hiện thay đổi trong phạm vi rõ ràng.
4. Nếu chạm vào file nguồn của agent/skill, chạy script đồng bộ tương ứng.
5. Chạy `npm run check` và xử lý mọi lỗi trước khi commit.
6. Viết commit message rõ ràng. Có thể dùng Conventional Commits như `fix:`, `feat:`, `docs:`, `refactor:`.
7. Mở pull request vào `master`, mô tả vấn đề, cách xử lý và cách đã kiểm thử.
8. Nếu có issue liên quan, liên kết bằng cú pháp như `Closes #123`.

## ✅ Nguyên tắc chất lượng

Pull request nên:

- tập trung vào một thay đổi logic chính;
- không đưa secret, token, cookie hoặc dữ liệu cá nhân vào repository;
- không làm giảm độ tương thích với các AI agent đang hỗ trợ;
- không thay đổi hành vi lõi chỉ vì sở thích thẩm mỹ cá nhân;
- giữ TypeScript strict và vượt qua `npm run check`;
- ghi rõ nếu thay đổi có ảnh hưởng đến workflow `/clone-website`.

## 🌏 Chính sách bản địa hóa

Tài liệu dành cho người dùng của fork này ưu tiên **tiếng Việt rõ ràng, chuẩn kỹ thuật và dễ thực hành**. Tuy nhiên, các prompt/skill nội bộ có thể tiếp tục sử dụng tiếng Anh khi điều đó giúp duy trì khả năng tương thích và chất lượng thực thi của AI coding agent.

Không nên dịch tùy tiện:

- tên command như `/clone-website`;
- tên file, API, package và option kỹ thuật;
- cú pháp CLI;
- key cấu hình mà tool/agent phụ thuộc trực tiếp.

## 🧾 Bản quyền và dự án gốc

ViClone Website dựa trên [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) và tiếp tục tuân thủ MIT License. Khi đóng góp, bạn đồng ý rằng phần mã/tài liệu gửi vào repository có thể được phân phối theo giấy phép hiện hành của dự án.

## 💬 Trao đổi

Đối với thay đổi lớn hoặc có khả năng phá vỡ tương thích, nên mở issue trước để thảo luận phạm vi và hướng triển khai. Với vấn đề bảo mật, **không đăng chi tiết lỗ hổng trong issue công khai**; hãy làm theo [`SECURITY.md`](SECURITY.md).
