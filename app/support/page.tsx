import Link from "next/link";

const SUPPORT_EMAIL = "support@example.com"; // Configure this address before launch.

const issues = [
  "The app does not open",
  "Search results look incomplete",
  "A word is missing",
  "A definition or source looks wrong",
  "Favorites or recent searches are not behaving as expected",
];

const reportFields = [
  "Device model",
  "iOS version",
  "App version",
  "Search term or word",
  "Screenshot if useful",
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

export default function SupportPage() {
  return (
    <main className="min-h-dvh px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-14 flex items-center justify-between">
          <Wordmark />
          <Link
            href="/privacy"
            className="rounded-full border border-line-strong px-4 py-1.5 text-sm font-medium transition hover:border-foreground"
          >
            Privacy
          </Link>
        </nav>

        <header className="border-t border-foreground/80 pt-6">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-faint">
            support · assistance
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            Need help with FV Dict?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Send the word, search term, or issue you ran into. Dictionary
            quality reports are welcome — missing words, unclear meanings,
            source issues, and search problems all help improve the app.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md border-2 border-foreground px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.12em] transition hover:bg-foreground hover:text-background"
          >
            Email {SUPPORT_EMAIL}
            <span aria-hidden>↗</span>
          </a>
        </header>

        <section className="grid gap-12 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight">
              Common issues
            </h2>
            <ul className="mt-6 divide-y divide-line border-t border-line">
              {issues.map((issue, i) => (
                <li key={issue} className="flex gap-4 py-4 text-muted">
                  <span className="tnum font-mono text-xs text-accent">
                    §{String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight">
              Helpful report details
            </h2>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line">
              {reportFields.map((field) => (
                <li
                  key={field}
                  className="bg-raised px-4 py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-muted"
                >
                  <span className="text-accent">/ </span>
                  {field}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-line py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-faint">
            FV Dict 1.0.0 · offline fr → vi
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="underline-offset-4 transition hover:text-foreground hover:underline"
            >
              Home
            </Link>
            <Link
              href="/privacy"
              className="underline-offset-4 transition hover:text-foreground hover:underline"
            >
              Privacy
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
