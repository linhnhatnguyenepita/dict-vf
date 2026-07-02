import Link from "next/link";

const privacyPoints = [
  "FV Dict is designed for offline dictionary lookup.",
  "The app does not require an account.",
  "The app does not track users.",
  "The app does not show ads.",
  "Favorites and recent searches are stored locally on the device.",
  "The app includes a bundled dictionary database for normal lookup.",
  "If you contact support, only the information you choose to send is received.",
];

function Wordmark() {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline gap-2.5 transition-opacity hover:opacity-80"
    >
      <span className="rounded-[5px] border border-line-strong px-1.5 py-0.5 font-mono text-[0.7rem] font-medium tracking-wide text-accent">
        fv
      </span>
      <span className="font-display text-xl font-medium tracking-tight">
        Dict
      </span>
    </Link>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-14 flex items-center justify-between">
          <Wordmark />
          <Link
            href="/support"
            className="rounded-full border border-line-strong px-4 py-1.5 text-sm font-medium transition hover:border-foreground"
          >
            Support
          </Link>
        </nav>

        <header className="border-t border-foreground/80 pt-6">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-faint">
            privacy · confidentialité
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            Plain-language privacy policy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            FV Dict is a focused reference tool. It does not need an account, an
            advertising profile, or a tracking system to help you look up words.
          </p>
        </header>

        <section className="py-14">
          <ol className="divide-y divide-line border-t border-line">
            {privacyPoints.map((point, i) => (
              <li key={point} className="flex gap-5 py-5">
                <span className="tnum pt-0.5 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-7">{point}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="overflow-hidden rounded-[24px] bg-[#1b1812] px-6 py-10 text-on-ink sm:px-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#9db2df]">
            support contact
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
            What we receive
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-on-ink-muted">
            When you email support, FV Dict receives only the details you decide
            to include — a search term, device information, app version, or a
            screenshot. That information is used to understand and answer your
            request.
          </p>
        </section>

        <footer className="flex flex-col gap-3 border-t border-line py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-faint">
            Last updated · July 2, 2026
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="underline-offset-4 transition hover:text-foreground hover:underline"
            >
              Home
            </Link>
            <Link
              href="/support"
              className="underline-offset-4 transition hover:text-foreground hover:underline"
            >
              Support
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
