"use client";
import { useRef, useState, useEffect } from "react";

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

  // ▶️ Play song
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

  // ⏭ Next
  const nextSong = () => {
    if (current === null) return;
    const next = (current + 1) % songs.length;
    playSong(next);
  };

  // ⏮ Prev
  const prevSong = () => {
    if (current === null) return;
    const prev = (current - 1 + songs.length) % songs.length;
    playSong(prev);
  };

  // ⏱ Update progress
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", update);
    };
  }, []);

  // 🎯 Seek
  const handleSeek = (e: any) => {
    if (!audioRef.current) return;
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  // ⏱ Format time
  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-black mb-12 text-center">
        Zook'z County Line
      </h1>

      {/* TRACK LIST */}
      <div className="max-w-3xl mx-auto space-y-3">
        {songs.map((song, index) => (
          <div
            key={song.title}
            className={`flex items-center justify-between px-5 py-4 rounded-xl border transition ${
              current === index
                ? "bg-neutral-800 border-white/30"
                : "bg-neutral-900 border-white/10"
            }`}
          >
            <span className="text-neutral-500">{index + 1}</span>

            <span className="flex-1 ml-4">{song.title}</span>

            <button
              onClick={() => playSong(index)}
              className="text-lg"
            >
              {current === index && playing ? "⏸" : "▶"}
            </button>
          </div>
        ))}
      </div>

      {/* AUDIO */}
      <audio ref={audioRef} onEnded={nextSong} />

      {/* 🎵 PLAYER */}
      {current !== null && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-white/10 p-4">

          {/* Song info */}
          <div className="flex justify-between text-sm mb-2">
            <span>{songs[current].title}</span>
            <span>
              {formatTime(progress)} / {formatTime(duration)}
            </span>
          </div>

          {/* Progress bar */}
          <input
            type="range"
            min="0"
            max={duration}
            value={progress}
            onChange={handleSeek}
            className="w-full mb-3"
          />

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 text-xl">
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
        </div>
      )}
    </main>
  );
}