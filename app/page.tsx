"use client";

import { useRef, useState } from "react";

export default function Home() {
  const songs = [
    { title: "Redhead Fever", file: "/songs/Redhead Fever (Remastered).mp3" },
    { title: "Tequila & Smoke", file: "/songs/Tequila & Smoke (Remastered).mp3" },
    { title: "Shattered Glass", file: "/songs/Shattered Glass (Remastered).mp3" },
    { title: "Wedding Dress", file: "/songs/Wedding Dress (Remastered).mp3" },
    { title: "Echoes of You", file: "/songs/Echoes of You (Remastered).mp3" },
    { title: "Black Roses", file: "/songs/Black Roses (Remastered).mp3" },
    { title: "Blue Eyes", file: "/songs/Blue Eyes (Remastered).mp3" },
    { title: "Man in the Mirror", file: "/songs/Man in the Mirror (Remastered).mp3" },
    { title: "Letters", file: "/songs/Letters (Remastered).mp3" },
    { title: "Rise from the Ashes", file: "/songs/Rise from the Ashes (Remastered).mp3" },
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [current, setCurrent] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  // 🎧 MAIN PLAY FUNCTION (FIXED + RELIABLE)
  const playSong = async (index: number) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // Toggle same song
    if (current === index) {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        try {
          await audio.play();
          setPlaying(true);
        } catch (err) {
          console.log("Play blocked:", err);
        }
      }
      return;
    }

    // New song
    setCurrent(index);
    audio.src = songs[index].file;
    audio.currentTime = 0;

    try {
      await audio.play();
      setPlaying(true);
    } catch (err) {
      console.log("Autoplay blocked:", err);
      setPlaying(false);
    }
  };

  const nextSong = () => {
    if (current === null) return;
    const next = (current + 1) % songs.length;
    playSong(next);
  };

  const prevSong = () => {
    if (current === null) return;
    const prev = (current - 1 + songs.length) % songs.length;
    playSong(prev);
  };

  return (
    <main className="min-h-screen bg-black text-neutral-200">

      {/* HERO */}
      <section className="border-b border-white/10 px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
          Southern Rock • Country Grit • Whiskey Stories
        </p>

        <h1 className="mt-6 text-5xl font-black text-white md:text-7xl">
          Zook&apos;z County Line
        </h1>

        <p className="mt-6 text-neutral-400">
          Smoke in the air. Whiskey on the breath. Stories that don&apos;t fade.
        </p>

        <a
          href="#album"
          className="mt-10 inline-block rounded-xl bg-white px-6 py-3 text-black font-semibold"
        >
          Listen to the New Album
        </a>
      </section>

      {/* ALBUM */}
      <section id="album" className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10">
        <img src="/cover.jpg" className="rounded-2xl" alt="Album Cover" />

        <div>
          <h2 className="text-4xl font-bold text-white">
            Ashes &amp; Empty Bottles
          </h2>

          <p className="mt-6 text-neutral-400">
            Written over three and a half years—every track in order, every scar intact.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://open.spotify.com/album/5OI0QhZOMVZ400hcvEDaor"
              target="_blank"
              className="bg-neutral-800 px-4 py-2 rounded-xl"
            >
              Spotify
            </a>

            <a
              href="https://music.apple.com/us/album/ashes-empty-bottles/1891476081"
              target="_blank"
              className="bg-neutral-800 px-4 py-2 rounded-xl"
            >
              Apple Music
            </a>
          </div>
        </div>
      </section>

      {/* TRACK LIST*/}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-bold text-white">Track List</h2>

        <div className="mt-10 space-y-3">
          {songs.map((song, index) => (
            <div
              key={song.title}
              onClick={() => playSong(index)}
              className={`flex items-center justify-between px-5 py-4 rounded-xl border transition cursor-pointer ${
                current === index
                  ? "bg-neutral-800 border-white/30"
                  : "bg-neutral-900 border-white/10"
              }`}
            >
              <span className="text-neutral-500">{index + 1}.</span>

              <span className="ml-4 flex-1">{song.title}</span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playSong(index);
                }}
              >
                {current === index && playing ? "⏸" : "▶"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SPOTIFY EMBED */}
      <section className="px-6 py-20 border-y border-white/10">
        <h2 className="text-3xl text-white font-bold">
          Listen on Spotify
        </h2>

        <div className="mt-8">
          <iframe
            src="https://open.spotify.com/embed/album/5OI0QhZOMVZ400hcvEDaor"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl text-white font-bold">Booking & Info</h2>
        <p className="mt-6 text-neutral-400">
          booking@zookzcountyline.com
        </p>
      </section>

      {/* AUDIO ELEMENT */}
      <audio
        ref={audioRef}
        onEnded={nextSong}
      />

      {/* STICKY PLAYER */}
      {current !== null && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-white/10 p-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-neutral-400">Now Playing</p>
            <p>{songs[current].title}</p>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={prevSong}>⏮</button>

            <button
              onClick={async () => {
                if (!audioRef.current) return;

                const audio = audioRef.current;

                try {
                  if (playing) {
                    audio.pause();
                    setPlaying(false);
                  } else {
                    await audio.play();
                    setPlaying(true);
                  }
                } catch (err) {
                  console.log("Play error:", err);
                }
              }}
            >
              {playing ? "⏸" : "▶"}
            </button>

            <button onClick={nextSong}>⏭</button>
          </div>
        </div>
      )}
    </main>
  );
}