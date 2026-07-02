import Link from "next/link";

const senses = [
  {
    term: "Offline by design",
    body: "The bundled dictionary database keeps everyday lookup working with no network connection.",
  },
  {
    term: "Search both ways",
    body: "Look up a French lemma or read a Vietnamese meaning preview from one focused search field.",
  },
  {
    term: "Meaning-first entries",
    body: "Pronunciation, part of speech, examples, expressions, synonyms, and attribution stay in order.",
  },
  {
    term: "Personal but private",
    body: "Favorites and recent searches are daily tools, kept on the device and nowhere else.",
  },
];

const indexEntries = [
  { word: "prendre", pos: "v. tr.", ipa: "/pʁɑ̃dʁ/", gloss: "27 sens" },
  { word: "faire", pos: "v. tr.", ipa: "/fɛʁ/", gloss: "26 sens" },
  { word: "passer", pos: "v.", ipa: "/pɑse/", gloss: "25 sens" },
  {
    word: "abaisser",
    pos: "v. tr.",
    ipa: "/abese/",
    gloss: "hạ, hạ thấp, buông xuống",
  },
  {
    word: "abaca",
    pos: "n. m.",
    ipa: "/abaka/",
    gloss: "một loại chuối ở Philippine",
  },
];

const imprint = ["No login", "No advertising", "No tracking", "Local history"];

function Wordmark() {
  return (
    <Link
      href="/"
      className="group inline-flex items-baseline gap-2.5 transition-opacity hover:opacity-80"
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

function Directional({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-mono text-[0.7rem] uppercase tracking-[0.18em] text-faint ${className}`}
    >
      fr <span className="text-accent">→</span> vi
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Running head */}
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Wordmark />
        <div className="flex items-center gap-5 text-sm">
          <Directional className="hidden sm:inline" />
          <Link
            href="/privacy"
            className="hidden text-muted underline-offset-4 transition hover:text-foreground hover:underline sm:inline"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="rounded-full border border-line-strong px-4 py-1.5 font-medium transition hover:border-foreground"
          >
            Support
          </Link>
        </div>
      </nav>

      {/* Hero — the page presented as a dictionary entry that defines itself */}
      <section className="mx-auto grid w-full max-w-6xl gap-14 px-5 pb-20 pt-6 sm:px-8 lg:grid-cols-[1.32fr_0.68fr] lg:gap-12 lg:pb-28 lg:pt-10">
        <article className="border-t border-foreground/80 pt-6">
          <header className="reveal flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <p className="font-display text-[clamp(3.4rem,11vw,7rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
              dictionnaire
            </p>
            <span className="font-mono text-sm text-faint">n. m.</span>
          </header>

          <p
            className="reveal mt-4 font-mono text-sm text-muted"
            style={{ ["--d" as string]: "0.06s" }}
          >
            /dik.sjɔ.nɛʁ/ · <span className="text-accent">từ điển</span> ·{" "}
            <span className="italic">du latin dictiō, « le fait de dire »</span>
          </p>

          <h1
            className="reveal mt-9 max-w-2xl font-display text-3xl font-medium leading-[1.12] tracking-[-0.02em] text-pretty sm:text-[2.6rem]"
            style={{ ["--d" as string]: "0.12s" }}
          >
            <span className="mr-2 font-mono text-base align-top text-accent">
              1.
            </span>
            A calm French-Vietnamese dictionary.
          </h1>

          <p
            className="reveal mt-5 max-w-xl text-lg leading-8 text-muted"
            style={{ ["--d" as string]: "0.18s" }}
          >
            FV Dict helps learners look up words quickly with clear meanings,
            local favorites, recent searches, and no account.
          </p>

          <div
            className="reveal mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
            style={{ ["--d" as string]: "0.24s" }}
          >
            <span
              aria-disabled="true"
              className="inline-flex -rotate-[1.2deg] items-center rounded-md border-2 border-foreground px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground"
            >
              Coming soon to the App Store
            </span>
            <Link
              href="/support"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 transition hover:underline"
            >
              Get support
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </article>

        {/* Index slip — the real bilingual lookup, typeset like a reference card */}
        <aside
          className="reveal self-start rounded-2xl border border-line bg-raised p-6 shadow-[0_24px_48px_-24px_rgba(38,64,122,0.28)]"
          style={{ ["--d" as string]: "0.3s" }}
        >
          <div className="flex items-center justify-between border-b border-line pb-4">
            <Directional />
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
              <span className="size-1.5 rounded-full bg-accent" />
              offline
            </span>
          </div>

          <div className="mt-5 flex items-baseline justify-between gap-3">
            <p className="font-display text-3xl font-semibold tracking-tight">
              prendre
            </p>
            <span className="tnum font-mono text-xs text-accent">27</span>
          </div>
          <p className="mt-1 font-mono text-xs text-muted">
            /pʁɑ̃dʁ/ · <span className="italic">v. tr.</span>
          </p>

          <ol className="mt-5 space-y-2.5 text-sm">
            <li className="flex gap-2.5">
              <span className="tnum font-mono text-xs text-faint">1.</span>
              <span>lấy, cầm, nhận</span>
            </li>
            <li className="flex gap-2.5">
              <span className="tnum font-mono text-xs text-faint">2.</span>
              <span>đi, dùng, chọn</span>
            </li>
          </ol>

          <p className="mt-4 rounded-lg bg-accent-tint px-3 py-2.5 text-sm">
            <span className="italic text-accent">prendre le train</span>
            <span className="text-faint"> · </span>đi tàu
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 border-t border-line pt-4 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-faint">
            <span>Favorites · local</span>
            <span className="text-right">Recent · device</span>
          </div>
        </aside>
      </section>

      {/* Senses — the product read as a numbered entry */}
      <section className="border-t border-line bg-inset/50">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-16 lg:self-start">
            <Directional />
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.14] tracking-[-0.02em] sm:text-4xl">
              How FV Dict reads a word.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-muted">
              Four senses of one quiet tool. No dashboard, no noise — a lookup
              you can trust to open and answer.
            </p>
          </div>

          <dl className="divide-y divide-line border-t border-line">
            {senses.map((sense, i) => (
              <div
                key={sense.term}
                className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 py-7 sm:grid-cols-[3rem_1fr]"
              >
                <span className="tnum pt-1 font-mono text-sm text-accent">
                  §{String(i + 1).padStart(2, "0")}
                </span>
                <dt className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                  {sense.term}
                </dt>
                <dd className="col-start-2 max-w-md text-base leading-7 text-muted">
                  {sense.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Source-aware entries + the index */}
      <section className="border-t border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-md font-display text-3xl font-medium leading-[1.14] tracking-[-0.02em] sm:text-4xl">
              Source-aware entries, not noisy translations.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">
              FV Dict is built from a reproducible data pipeline. Entries keep
              source attribution where it exists, so quality is visible instead
              of hidden.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
              <span className="size-1.5 rounded-full bg-accent" />
              bundled SQLite · read locally
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-raised">
            <div className="flex items-center justify-between border-b border-line px-5 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
              <span>Index</span>
              <span>fr → vi</span>
            </div>
            <ul>
              {indexEntries.map((entry, i) => (
                <li
                  key={entry.word}
                  className={`grid grid-cols-[1fr_auto] items-baseline gap-3 px-5 py-4 sm:grid-cols-[9rem_1fr_auto] ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <span className="font-display text-lg font-medium tracking-tight">
                    {entry.word}
                  </span>
                  <span className="hidden font-mono text-xs text-muted sm:block">
                    {entry.ipa} <span className="italic">{entry.pos}</span>
                  </span>
                  <span className="text-right text-sm text-muted">
                    {entry.gloss}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Colophon — the private, quiet imprint on a dark endpaper */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] bg-[#1b1812] px-6 py-14 text-on-ink sm:px-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#9db2df]">
                colophon
              </p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-[2.5rem]">
                Private by default, quiet by choice.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-on-ink-muted">
                FV Dict asks for no account, shows no ads, and does not track
                you. Favorites and recent searches stay on your device.
              </p>
            </div>

            <ul className="grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2">
              {imprint.map((item) => (
                <li
                  key={item}
                  className="bg-[#1b1812] px-4 py-5 font-mono text-xs uppercase tracking-[0.12em] text-on-ink"
                >
                  <span className="text-[#9db2df]">/ </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Running foot */}
      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Wordmark />
            <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint sm:inline">
              offline · fr → vi
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/support"
              className="underline-offset-4 transition hover:text-foreground hover:underline"
            >
              Support
            </Link>
            <Link
              href="/privacy"
              className="underline-offset-4 transition hover:text-foreground hover:underline"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
