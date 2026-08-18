const phases = [
  {
    step: "01",
    title: "Khảo sát",
    description: "Chụp tham chiếu, đọc bố cục, CSS, responsive, trạng thái và interaction thực tế.",
  },
  {
    step: "02",
    title: "Đặc tả",
    description: "Tách design token, asset và đặc tả từng component để giảm việc AI suy đoán.",
  },
  {
    step: "03",
    title: "Tái dựng",
    description: "Xây các section bằng Next.js, React, TypeScript và Tailwind CSS theo cấu trúc sạch.",
  },
  {
    step: "04",
    title: "Kiểm định",
    description: "Ghép trang, chạy lint/typecheck/build và so sánh trực quan với website tham chiếu.",
  },
];

const agents = [
  "Claude Code",
  "Codex CLI",
  "Cursor",
  "Gemini CLI",
  "Cline",
  "Roo Code",
  "Continue",
  "Amazon Q",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-6xl flex-col px-6 py-16 sm:px-10 lg:py-24">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b pb-5">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              AI Website Reverse Engineering
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight">ViClone Website</h1>
          </div>
          <a
            href="https://github.com/Base27-CVNSS/viclone-website"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Mở mã nguồn GitHub ↗
          </a>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex rounded-full border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              Next.js 16 · React 19 · TypeScript · Tailwind CSS v4
            </div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Tái dựng website bằng AI theo một quy trình có thể kiểm tra.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              Cung cấp URL mục tiêu cho AI coding agent. ViClone hướng agent khảo sát giao diện,
              trích xuất thiết kế, viết đặc tả component, xây dựng mã nguồn và kiểm định kết quả
              thay vì chỉ sao chép HTML một cách máy móc.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Bắt đầu
            </p>
            <div className="overflow-x-auto rounded-lg bg-foreground p-4 text-background">
              <code className="whitespace-nowrap font-mono text-sm">
                /clone-website https://example.com
              </code>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Hãy dùng với website bạn sở hữu, được phép phân tích hoặc có quyền tái sử dụng nội dung.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <article key={phase.step} className="bg-background p-6">
              <span className="font-mono text-xs text-muted-foreground">{phase.step}</span>
              <h3 className="mt-5 text-lg font-semibold">{phase.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{phase.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-y py-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold">Bản chất kỹ thuật</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              Workflow tách bốn lớp: quan sát website thật, chuẩn hóa đặc tả, triển khai component và
              visual QA. Cách tổ chức này giúp quá trình tái dựng dễ lặp lại, dễ kiểm tra và dễ bảo trì hơn.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">AI agent tương thích</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {agents.map((agent) => (
                <span key={agent} className="rounded-md border px-2.5 py-1.5 text-xs text-muted-foreground">
                  {agent}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Bản Việt hóa dựa trên dự án gốc JCodesMore/ai-website-cloner-template · MIT License.
          </p>
          <div className="flex gap-5">
            <a href="https://github.com/Base27-CVNSS/viclone-website#-bắt-đầu-nhanh" className="hover:text-foreground">
              Hướng dẫn
            </a>
            <a href="https://github.com/JCodesMore/ai-website-cloner-template" className="hover:text-foreground">
              Dự án gốc ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
