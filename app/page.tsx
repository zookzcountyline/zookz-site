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

    if (current === index) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
      return;
    }

    audioRef.current.src = songs[index].file;
    audioRef.current.play();
    setCurrent(index);
    setPlaying(true);
  };

  const nextSong = () => {
    if (current === null) return;
    playSong((current + 1) % songs.length);
  };

  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <main className="min-h-screen bg-black text-neutral-200">

      {/* HERO */}
      <section className="px-6 py-24 text-center border-b border-white/10">
        <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
          Southern Rock
        </p>

        <h1 className="mt-6 text-5xl font-black text-white md:text-7xl">
          Zook&apos;z County Line
        </h1>

        <p className="mt-6 text-neutral-400">
          Smoke in the air. Whiskey on the breath. Stories that don&apos;t fade.
        </p>
      </section>

      {/* ALBUM */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-white">
          Ashes & Empty Bottles
        </h2>

        <p className="mt-4 text-neutral-400">
          A three-and-a-half-year journey told track by track.
        </p>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 text-center border-y border-white/10">
        <h2 className="text-3xl text-white font-bold">
          Real stories. No filters.
        </h2>

        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
          Zook'z County Line blends southern rock grit with country storytelling.
        </p>
      </section>

      {/* TRACK LIST */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white">Track List</h2>

        <div className="mt-10 space-y-3">
          {songs.map((song, index) => (
            <div
              key={song.title}
              onClick={() => playSong(index)}
              className={`flex items-center justify-between px-5 py-4 rounded-xl border cursor-pointer transition ${
                current === index
                  ? "bg-neutral-800 border-white/30"
                  : "bg-neutral-900 border-white/10"
              }`}
            >
              <span>{index + 1}.</span>
              <span className="ml-4 flex-1">{song.title}</span>
              <span>{current === index && playing ? "⏸" : "▶"}</span>
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
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-white/10 p-4">

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
            className="w-full mb-3"
          />
        </div>
      )}
    </main>
  );
}