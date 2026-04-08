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
      <section className="relative border-b border-white/10 bg-gradient-to-b from-black via-neutral-900 to-black">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Southern Rock
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
            Zook&apos;z County Line
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-400 leading-8">
            Smoke in the air. Whiskey on the breath. Stories that don’t fade.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#album"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition"
            >
              New Album
            </a>
          </div>
        </div>
      </section>

      {/* ALBUM */}
      <section id="album" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="aspect-square overflow-hidden rounded-[1.5rem]">
              <img
                src="/cover.jpg"
                alt="Ashes & Empty Bottles Album Cover"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
              New Release
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Ashes &amp; Empty Bottles
            </h2>

            <p className="mt-6 text-neutral-400 leading-8">
              Releases Friday, April 10, 2026.
            </p>

            <p className="mt-4 text-neutral-400 leading-8">
              A three-and-a-half-year journey told track by track.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a className="bg-neutral-800 border border-white/10 px-4 py-2 rounded-xl">
                Spotify — Coming Friday
              </a>
              <a className="bg-neutral-800 border border-white/10 px-4 py-2 rounded-xl">
                Apple Music — Coming Friday
              </a>
              <a className="bg-neutral-800 border border-white/10 px-4 py-2 rounded-xl">
                YouTube — Coming Friday
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-neutral-950 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            About
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Real stories. No filters.
          </h2>

          <p className="mt-6 max-w-3xl text-neutral-400 leading-8">
            Zook&apos;z County Line blends southern rock grit with country storytelling.
            These songs come from real moments — heartbreak, long nights, and roads
            that don’t lead back.
          </p>

        </div>
      </section>

      {/* TRACK LIST */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
          Track List
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Songs
        </h2>

        <div className="mt-8 space-y-3">
          {songs.map((song, index) => (
            <div
              key={song}
              className="flex items-center justify-between bg-neutral-900 border border-white/10 px-5 py-4 rounded-xl hover:bg-neutral-800 transition"
            >
              <span className="text-neutral-500">{index + 1}.</span>
              <span className="ml-4 flex-1">{song}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neutral-900 border border-white/10 p-6 rounded-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Listen
          </p>

          <p className="mt-4 text-neutral-400 leading-8">
            Individual tracks are $0.99, the full album download is $9.99,
            and CDs are just $10.00.
          </p>

          <p className="mt-4 text-neutral-400 leading-8">
            It&apos;s a chronological album, so it&apos;s best listened to from track 1 through 10.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Booking &amp; Info
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="bg-neutral-900 border border-white/10 p-5 rounded-xl">
              <p className="text-neutral-500 text-sm uppercase">Email</p>
              <p className="mt-2">booking@zookzcountyline.com</p>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-5 rounded-xl">
              <p className="text-neutral-500 text-sm uppercase">Facebook</p>
              <p className="mt-2">Zook&apos;z County Line</p>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-5 rounded-xl">
              <p className="text-neutral-500 text-sm uppercase">Instagram</p>
              <p className="mt-2">@zookzcountyline</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );

