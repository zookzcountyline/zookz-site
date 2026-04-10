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

  const playSong = (index: number) => {
    if (!audioRef.current) return;

    audioRef.current.src = songs[index].file;
    audioRef.current.play();
    setCurrent(index);
    setPlaying(true);
  };

  const nextSong = () => {
    if (current === null) return;
    playSong((current + 1) % songs.length);
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
      <section className="text-center px-6 py-32 border-b border-white/10">
        <p className="uppercase tracking-[0.4em] text-neutral-500">
          Southern Rock
        </p>

        <h1 className="text-6xl font-black text-white mt-6">
          Zook&apos;z County Line
        </h1>

        <p className="mt-6 text-neutral-400">
          Smoke in the air. Whiskey on the breath.
        </p>
      </section>

      {/* ALBUM */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <img src="/cover.jpg" className="rounded-2xl" />

        <div>
          <h2 className="text-4xl font-bold text-white">
            Ashes & Empty Bottles
          </h2>

          <p className="mt-6 text-neutral-400">
            A three-and-a-half-year journey told track by track.
          </p>
        </div>
      </section>

      {/* TRACKS */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white">Track List</h2>

        <div className="mt-10 space-y-3">
          {songs.map((song, i) => (
            <div
              key={song.title}
              onClick={() => playSong(i)}
              className="flex justify-between px-5 py-4 rounded-xl bg-neutral-900 border border-white/10 cursor-pointer hover:bg-neutral-800"
            >
              <span>{i + 1}. {song.title}</span>
              <span>▶</span>
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
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 p-4 border-t border-white/10">
          <div className="flex justify-between text-sm mb-2">
            <span>{songs[current].title}</span>
            <span>{formatTime(progress)} / {formatTime(duration)}</span>
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
            className="w-full"
          />
        </div>
      )}
    </main>
  );
}