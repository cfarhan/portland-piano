import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getBookingConversionSendTo } from "./googleAds";

let bookingConversionQueued;

export default function BookingConfirmed() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");
    const sendTo = getBookingConversionSendTo();
    if (!sendTo || typeof window.gtag !== "function") return;
    if (source !== "calendly") return;
    if (bookingConversionQueued) return;
    bookingConversionQueued = true;
    window.gtag("event", "conversion", { send_to: sendTo });
  }, []);

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

      <main className="mx-auto max-w-2xl px-6 pb-16 pt-10 md:pt-14">
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Thank you for scheduling your first lesson!
        </h1>
        <p className="mt-6 text-base leading-7 text-white/70">
          I will contact you soon via email/text with my home studio address.
        </p>
      </main>
    </div>
  );
}
