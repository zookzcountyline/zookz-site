export default function Home() {
  const songs = [
    "Redhead Fever",
    "Tequila & Smoke",
    "Shattered Glass",
    "Wedding Dress",
    "Echoes of You",
    "Black Roses",
    "Blue Eyes",
    "Man in the Mirror",
    "Letters",
    "Rise from the Ashes",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="border-b border-white/10 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-400">
            Southern Rock • Country • Virginia
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Zook&apos;z County Line
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 md:text-xl">
            Grit, heartbreak, backroads, and songs built from real life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#album"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-black"
            >
              New Album
            </a>
          </div>
        </div>
      </section>

      <section id="album" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8">
            <div className="aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-800">
              <img
                src="/cover.jpg"
                alt="Ashes & Empty Bottles Album Cover"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Featured Release
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Ashes &amp; Empty Bottles
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              Ashes &amp; Empty Bottles releases Friday, April 10, 2026.
            </p>

            <p className="mt-4 leading-8 text-neutral-300">
              A three-and-a-half-year project told in sequence, track by track.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-xl bg-white px-4 py-2 font-semibold text-black"
              >
                Spotify — Coming Friday
              </a>
              <a
                href="#"
                className="rounded-xl bg-white px-4 py-2 font-semibold text-black"
              >
                Apple Music — Coming Friday
              </a>
              <a
                href="#"
                className="rounded-xl bg-white px-4 py-2 font-semibold text-black"
              >
                YouTube — Coming Friday
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            About the Band
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Real songs. Real story. No filler.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-300">
            Zook&apos;z County Line blends southern rock edge with country
            storytelling. The music is grounded in heartbreak, hard lessons,
            real memories, and the kind of nights that stay with you. Every song
            has a place in the story.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Track List
          </p>

          <h2 className="mt-3 text-3xl font-bold">Songs</h2>

          <div className="mt-6 space-y-3">
            {songs.map((song, index) => (
              <div
                key={song}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="text-neutral-400">{index + 1}.</span>
                <span className="ml-4 flex-1">{song}</span>
              </div>
            ))}
          </div>

<div className="mt-10 rounded-[2rem] border border-white/10 bg-neutral-900 p-6">
  <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
    Listen
  </p>

  <p className="mt-4 leading-8 text-neutral-300">
    Individual tracks are $0.99, the full album download is $9.99,
    and CDs are just $10.00.
  </p>

  <p className="mt-4 leading-8 text-neutral-300">
    It&apos;s a chronological album, so it&apos;s best listened to from track 1 through 10.
  </p>
</div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold">Booking &amp; Info</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Email
              </p>
              <p className="mt-2 text-lg">booking@zookzcountyline.com</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Facebook
              </p>
              <p className="mt-2 text-lg">Zook&apos;z County Line</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Instagram
              </p>
              <p className="mt-2 text-lg">@zookzcountyline</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}