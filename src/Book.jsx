import { Link } from "react-router-dom";

/** Paste your Calendly scheduling page URL (Calendly → event type → Share → copy link). */
const CALENDLY_URL = "https://calendly.com/farhanpianostudio/book";

export default function Book() {
  const embedSrc = `${CALENDLY_URL.replace(/\?$/, "")}?embed=true`;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-lg font-semibold tracking-wide transition hover:text-white/80"
        >
          Hayhurst Piano Studio
        </Link>
        <Link
          to="/"
          className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium transition hover:border-white/70"
        >
          Back to home
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-4">
        <h1 className="text-3xl font-bold md:text-4xl">
          Book your free first lesson
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-white/60">
          Pick a time that works for you. If you prefer to reach out another
          way, you can still email farhanpianostudio@gmail.com or call/text{" "}
          <span className="text-white/80">(503) 880-5655</span>.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <iframe
            title="Schedule a lesson with Hayhurst Piano Studio"
            src={embedSrc}
            className="min-h-[720px] w-full border-0"
          />
        </div>
      </main>
    </div>
  );
}
