"use client";

import React, { useState, useRef } from "react";
import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun, BsPlayFill, BsPauseFill } from "react-icons/bs";


interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme() as ThemeContextType;

    return (
        <div>
            <button
                className="fixed bottom-5 right-20 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
                onClick={toggleTheme}
            >
                {theme === "light" ? <BsSun /> : <BsMoon />}
            </button>
            <AudioButton />
        </div>
    );
}

function AudioButton() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleAudioToggle = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            <audio ref={audioRef} src="/kids.mp3" />
            <button
                className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
                onClick={handleAudioToggle}
            >
                {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
            </button>
        </div>
    );
}
