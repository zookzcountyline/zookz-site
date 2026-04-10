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
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const playSong = (index: number) => {
    if (!audioRef.current) return;

    if (current === index && playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    audioRef.current.src = songs[index].file;
    audioRef.current.volume = volume;
    audioRef.current.play();

    setCurrent(index);
    setPlaying(true);
  };

  const nextSong = () => {
    if (current === null) return;
    playSong((current + 1) % songs.length);
  };

  const prevSong = () => {
    if (current === null) return;
    playSong((current - 1 + songs.length) % songs.length);
  };

  const formatTime = (t: number) => {
    if (!t) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <main className="min-h-screen bg-black text-neutral-200">

      {/* HERO */}
      <section className="relative px-6 py-32 text-center border-b border-white/10 bg-gradient-to-b from-black via-neutral-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.15),transparent_60%)]" />

        <p className="relative uppercase tracking-[0.4em] text-neutral-500">
          Southern Rock
        </p>

        <h1 className="relative mt-6 text-6xl md:text-7xl font-black text-white drop-shadow-[0_0_25px_rgba(255,140,0,0.4)]">
          Zook&apos;z County Line
        </h1>

        <p className="relative mt-6 text-neutral-400">
          Smoke in the air. Whiskey on the breath. Stories that don&apos;t fade.
        </p>
      </section>

      {/* ALBUM */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <img src="/cover.jpg" className="w-full h-full object-cover" />
        </div>

        <div>
          <h2 className="text-5xl font-bold text-white">
            Ashes &amp; Empty Bottles
          </h2>

          <p className="mt-6 text-neutral-400 leading-8">
            A three-and-a-half-year journey told track by track.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={() => playSong(0)}
              className="px-5 py-2 bg-orange-500 text-black rounded-xl font-semibold hover:bg-orange-400"
            >
              ▶ Play Album
            </button>

            <a
              href="https://open.spotify.com/album/5OI0QhZOMVZ400hcvEDaor"
              target="_blank"
              className="px-5 py-2 bg-white text-black rounded-xl font-semibold"
            >
              Spotify
            </a>

            <a
              href="https://music.apple.com/us/album/ashes-empty-bottles/1891476081"
              target="_blank"
              className="px-5 py-2 bg-neutral-800 rounded-xl hover:bg-neutral-700"
            >
              Apple Music
            </a>
          </div>
        </div>
      </section>

      {/* TRACK LIST */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white">Track List</h2>

        <div className="mt-10 space-y-3">
          {songs.map((song, i) => (
            <div
              key={song.title}
              onClick={() => playSong(i)}
              className={`flex justify-between items-center px-5 py-4 rounded-xl border transition cursor-pointer ${
                current === i
                  ? "bg-neutral-800 border-white/30 shadow-[0_0_20px_rgba(255,140,0,0.25)]"
                  : "bg-neutral-900 border-white/10 hover:bg-neutral-800"
              }`}
            >
              <span>{i + 1}. {song.title}</span>
              <span className="text-lg">
                {current === i && playing ? "⏸" : "▶"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* AUDIO */}
      <audio
        ref={audioRef}
        onEnded={nextSong}
        onTimeUpdate={() => {
          if (!audioRef.current) return;
          setProgress(audioRef.current.currentTime);
          setDuration(audioRef.current.duration || 0);
        }}
      />

      {/* PLAYER */}
      {current !== null && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-white/10 px-6 py-4">

          <div className="flex items-center gap-4 mb-2">
            <img src="/cover.jpg" className="w-12 h-12 rounded-lg" />

            <div className="flex-1">
              <p className="text-white text-sm">{songs[current].title}</p>
              <p className="text-xs text-neutral-400">Zook'z County Line</p>
            </div>

            <div className="text-xs text-neutral-400">
              {formatTime(progress)} / {formatTime(duration)}
            </div>
          </div>

          <input
            type="range"
            min="0"
            max={duration}
            value={progress}
            onChange={(e) => {
              if (!audioRef.current) return;
              audioRef.current.currentTime = Number(e.target.value);
            }}
            className="w-full mb-3 accent-orange-500"
          />

          <div className="flex justify-between items-center">

            <div className="flex gap-6 text-xl">
              <button onClick={prevSong}>⏮</button>

              <button
                onClick={() => {
                  if (!audioRef.current) return;
                  if (playing) {
                    audioRef.current.pause();
                  } else {
                    audioRef.current.play();
                  }
                  setPlaying(!playing);
                }}
                className="text-2xl"
              >
                {playing ? "⏸" : "▶"}
              </button>

              <button onClick={nextSong}>⏭</button>
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => {
                const v = Number(e.target.value);
                setVolume(v);
                if (audioRef.current) audioRef.current.volume = v;
              }}
              className="w-24 accent-orange-500"
            />
          </div>
        </div>
      )}
    </main>
  );
}