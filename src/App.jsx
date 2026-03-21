const BOOKING_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSee_qCpXPnNxx4HI2LNzDxOSaxwed82nabkrhVeARH8T-oQrw/viewform";

const highlights = [
  "Beginner to intermediate piano coaching",
  "In-person lessons",
  "Ability to read sheet music",
  "Learn how to practice efficiently",
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <p className="text-lg font-semibold tracking-wide">
          Hayhurst Piano Studio
        </p>
        <a
          href={BOOKING_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/85"
        >
          Book your free first lesson
        </a>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-14 pt-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Piano tutoring
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Personalized piano lessons that build confidence and musicianship
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
              Weekly one-on-one coaching tailored to each student. I focus on
              technique, expression, and practical practice habits so students
              enjoy measurable progress.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#about"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition hover:border-white/70"
              >
                About Me
              </a>
              <a
                href="#approach"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition hover:border-white/70"
              >
                My Teaching Approach
              </a>
              <a
                href="#location"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition hover:border-white/70"
              >
                Location
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition hover:border-white/70"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/50">
            <h2 className="text-xl font-semibold">What students get</h2>
            <ul className="mt-4 space-y-3 text-white/70">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
            Hi, my name is Cameron Farhan. I'm born and raised in Portland,
            Oregon. I have a passion for teaching piano to students of all ages
            and backgrounds. My goal is to make lessons enjoyable while building
            strong fundamentals — from reading sheet music and proper technique
            to developing a genuine love of music. Whether you're picking up the
            piano for the first time or looking to refine your skills, I'd love
            to work with you.
          </p>
        </section>

        <section id="approach" className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-semibold">My Teaching Approach</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
              Every student learns differently, so I tailor each lesson to the
              individual. I focus on building a strong foundation — proper
              posture, hand position, and music reading — while keeping lessons
              engaging and fun. I believe consistent, focused practice is more
              valuable than long unfocused sessions, so I work with each student
              to develop effective practice habits they can carry with them
              throughout their musical journey.
            </p>
          </div>
        </section>

        <section id="location" className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-semibold">Location</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
              Lessons are held in my comfortable home studio located in the
              Hayhurst neighborhood. The address will be provided after booking
              your first lesson.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
            The button below will take you to a Google Form where you can book
            your first lesson. You can also contact me via email or call/text if
            you prefer.
          </p>
          <div className="mt-3 flex flex-col gap-1 text-base text-white/60">
            <span>Email: farhanpianostudio@gmail.com</span>
            <span>Phone: (503) 880-5655</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={BOOKING_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              Book your free first lesson
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}
