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
    <main className="min-h-screen bg-black text-neutral-200">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-black via-neutral-900 to-black">
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_20%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.04),transparent_25%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Southern Rock • Country Grit • Whiskey Stories
          </p>

          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Zook&apos;z County Line
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Smoke in the air. Whiskey on the breath. Stories that don&apos;t fade.
          </p>

          <div className="mt-10">
            <a
              href="#album"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200"
            >
              Listen to the New Album
            </a>
          </div>
        </div>
      </section>

      {/* ALBUM */}
      <section id="album" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-6">
            <div className="aspect-square overflow-hidden rounded-[1.5rem]">
              <img
                src="/cover.jpg"
                alt="Ashes & Empty Bottles Album Cover"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
              New Release
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Ashes &amp; Empty Bottles
            </h2>

            <p className="mt-6 leading-8 text-neutral-400">
              Written over three and a half years—every track in order, every scar intact.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://open.spotify.com/album/5OI0QhZOMVZ400hcvEDaor"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-neutral-800 px-4 py-2 transition hover:bg-neutral-700"
              >
                Spotify
              </a>

              <a
                href="https://music.apple.com/us/album/ashes-empty-bottles/1891476081"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-neutral-800 px-4 py-2 transition hover:bg-neutral-700"
              >
                Apple Music
              </a>

              <a
                href="https://www.youtube.com/watch?v=AswGi4qo_Qg&list=OLAK5uy_kcjK5HWrOIE_dG0RlE--8w64DY_zsjiDw"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-neutral-800 px-4 py-2 transition hover:bg-neutral-700"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            About
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Real stories. No filters.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-neutral-400">
            Zook&apos;z County Line blends southern rock grit with country storytelling.
            These songs come from real moments, heartbreak, long nights, and roads that don&apos;t lead back.
          </p>
        </div>
      </section>

      {/* TRACK LIST */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
          Track List
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">Songs</h2>

        <div className="mt-8 space-y-3">
          {songs.map((song, index) => (
            <div
              key={song}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900 px-5 py-4 transition hover:bg-neutral-800 active:scale-[0.98]"
            >
              <span className="text-neutral-500">{index + 1}.</span>
              <span className="ml-4 flex-1">{song}</span>
              <span className="text-neutral-400">▶</span>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-900 p-6">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Listen
          </p>

          <p className="mt-4 text-neutral-400">
            Stream the full album on Spotify or Apple Music at no extra cost with a subscription.
          </p>

          <p className="mt-4 text-neutral-400">
            Individual tracks are $0.99, full album $9.99, CDs $12.00 locally.
          </p>
        </div>
      </section>

      {/* SPOTIFY */}
      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-4xl font-bold text-white">
            Listen on Spotify
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-3">
            <iframe
              title="Spotify Player"
              src="https://open.spotify.com/embed/album/5OI0QhZOMVZ400hcvEDaor"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-white">
            Booking &amp; Info
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
              <p className="text-sm text-neutral-500">Email</p>
              <p className="mt-2">booking@zookzcountyline.com</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
              <p className="text-sm text-neutral-500">Facebook</p>
              <p className="mt-2">Zook&apos;z County Line</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
              <p className="text-sm text-neutral-500">Instagram</p>
              <p className="mt-2">@zookzcountyline</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}