"use client";

import React, { useState, useRef, useEffect } from "react";

export default function ThemeSwitch(): JSX.Element {
    return (
        <div>
            <AudioButton />
        </div>
    );
}

function AudioButton(): JSX.Element {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [audioProgress, setAudioProgress] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0.7);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [audioLevel, setAudioLevel] = useState<number>(0);
    const [showVolumeControl, setShowVolumeControl] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleAudioToggle = async (): Promise<void> => {
        if (audioRef.current) {
            setIsLoading(true);
            try {
                if (isPlaying) {
                    audioRef.current.pause();
                } else {
                    await audioRef.current.play();
                }
                setIsPlaying(!isPlaying);
            } catch (error) {
                console.log("Audio playback failed");
            }
            setTimeout(() => setIsLoading(false), 300);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateProgress = (): void => {
                const progress = (audio.currentTime / audio.duration) * 100;
                setAudioProgress(progress || 0);
                if (isPlaying) {
                    setAudioLevel(0.3 + Math.random() * 0.7);
                } else {
                    setAudioLevel(0);
                }
            };

            const handleEnded = (): void => {
                setIsPlaying(false);
                setAudioProgress(0);
                setAudioLevel(0);
            };

            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('ended', handleEnded);

            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [isPlaying]);

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio ref={audioRef} src="/Death of Kings.mp3" preload="metadata" />
            
            {/* Premium Volume Control */}
            <div className={`absolute bottom-24 right-0 transition-all duration-700 ease-out ${
                showVolumeControl ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
            }`}>
                <div className="relative">
                    <div className="absolute inset-0 bg-black/50 rounded-2xl transform translate-x-1 translate-y-1 blur-sm" />
                    
                    <div className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 backdrop-blur-2xl border border-zinc-700/40 rounded-2xl p-6 shadow-xl">
                        <div className="absolute inset-1 bg-gradient-to-br from-zinc-800/15 to-zinc-900/15 rounded-xl border border-zinc-600/20" />
                        
                        <div className="relative flex flex-col items-center space-y-4">
                            <div className="text-zinc-300 text-xs font-light tracking-widest uppercase">Volume</div>
                            <div className="relative">
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.05"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="w-20 h-3 appearance-none cursor-pointer rounded-full"
                                    style={{
                                        background: `linear-gradient(to right, 
                                            #06b6d4 0%, 
                                            #0891b2 ${volume * 50}%, 
                                            #8b5cf6 ${volume * 100}%, 
                                            #27272a ${volume * 100}%, 
                                            #27272a 100%)`
                                    }}
                                />
                                
                                <div 
                                    className="absolute top-1/2 w-5 h-5 bg-gradient-to-br from-zinc-200 to-zinc-400 rounded-full transform -translate-y-1/2 shadow-lg border border-zinc-500"
                                    style={{ left: `${volume * 100}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                                >
                                    <div className="absolute inset-0.5 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                                </div>
                            </div>
                            <div className="text-zinc-400 text-sm font-mono bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-bold">
                                {Math.round(volume * 100)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rotating Frame System */}
            <div className={`absolute -inset-6 transition-all duration-1000 ${
                isPlaying ? 'animate-spin' : ''
            }`} style={{ animationDuration: '20s' }}>
                <div className="absolute inset-0 rounded-full border border-zinc-700/20 animate-pulse" style={{animationDuration: '3s'}} />
                <div className="absolute inset-1 rounded-full border border-zinc-600/15 animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s'}} />
                
                {/* Floating elements */}
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-br from-cyan-300 to-cyan-500 transform rotate-45 -translate-x-1/2 -translate-y-1 shadow-lg" />
                <div className="absolute bottom-1 right-1/4 w-1.5 h-1.5 bg-gradient-to-br from-violet-400 to-violet-600 transform rotate-45 shadow-md" />
                <div className="absolute left-1 top-1/2 w-1.5 h-1.5 bg-gradient-to-br from-zinc-200 to-zinc-400 transform rotate-45 -translate-y-1/2 shadow-md" />
            </div>

            {/* Energy Rings */}
            <div className="absolute -inset-3 pointer-events-none">
                <div className={`absolute inset-0 rounded-full border border-cyan-500/30 transition-all duration-800 ${
                    isPlaying ? 'scale-110 opacity-100 animate-pulse' : 'scale-100 opacity-20'
                }`} style={{animationDuration: '2s'}} />
                <div className={`absolute inset-1 rounded-full border border-violet-500/20 transition-all duration-800 ${
                    isPlaying ? 'scale-105 opacity-100 animate-pulse' : 'scale-100 opacity-15'
                }`} style={{animationDuration: '2.5s', animationDelay: '0.3s'}} />
            </div>
            
            {/* Progress Visualization */}
            <div className="absolute inset-0 rounded-full">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="46"
                        stroke="rgba(39,39,42,0.6)"
                        strokeWidth="4"
                        fill="none"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="46"
                        stroke="rgba(63,63,70,0.4)"
                        strokeWidth="2"
                        fill="none"
                    />
                    
                    <circle
                        cx="50"
                        cy="50"
                        r="46"
                        stroke="url(#premiumGradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 46}`}
                        strokeDashoffset={`${2 * Math.PI * 46 * (1 - audioProgress / 100)}`}
                        className="transition-all duration-300 ease-out"
                        style={{
                            filter: `drop-shadow(0 0 ${audioLevel * 10 + 3}px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 ${audioLevel * 6 + 2}px rgba(139, 92, 246, 0.4))`
                        }}
                    />
                    
                    <circle
                        cx="50"
                        cy="50"
                        r="46"
                        stroke="url(#innerGlow)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 46}`}
                        strokeDashoffset={`${2 * Math.PI * 46 * (1 - audioProgress / 100)}`}
                        className="transition-all duration-300 ease-out"
                        opacity="0.6"
                    />
                    
                    <defs>
                        <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                            <stop offset="30%" stopColor="#0891b2" stopOpacity="0.9" />
                            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#7c3aed" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="innerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Main Button */}
            <button
                className={`relative w-20 h-20 rounded-full backdrop-blur-2xl overflow-hidden group transition-all duration-600 ease-out ${
                    isHovered ? 'scale-105' : 'scale-100'
                } hover:scale-105 active:scale-95`}
                onClick={handleAudioToggle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onDoubleClick={() => setShowVolumeControl(!showVolumeControl)}
                disabled={isLoading}
                style={{
                    background: isPlaying 
                        ? 'linear-gradient(145deg, #18181b, #000000, #27272a)' 
                        : 'linear-gradient(145deg, #27272a, #18181b, #000000)',
                    boxShadow: `
                        inset 0 3px 6px rgba(255,255,255,0.08),
                        inset 0 -3px 6px rgba(0,0,0,0.6),
                        0 6px 24px rgba(0,0,0,0.4),
                        0 2px 6px rgba(0,0,0,0.3)
                    `,
                    border: '1.5px solid rgba(82,82,91,0.25)'
                }}
            >
                {/* Shimmer effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400/8 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-2000 ease-out" />
                
                <div className="absolute inset-0 bg-gradient-conic from-cyan-400/8 via-violet-400/8 to-cyan-400/8 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out animate-spin" 
                     style={{animationDuration: '12s'}} />

                <div className={`absolute inset-3 rounded-full transition-all duration-500 ${
                    isPlaying ? 'opacity-100' : 'opacity-60'
                }`} 
                style={{
                    background: 'linear-gradient(145deg, rgba(82,82,91,0.15), rgba(39,39,42,0.15))',
                    boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.08), inset 0 -1px 3px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(82,82,91,0.15)'
                }} />

                {/* Dynamic glow */}
                <div 
                    className={`absolute inset-4 rounded-full transition-all duration-300 ease-out ${
                        isPlaying ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        background: `radial-gradient(circle, 
                            rgba(6,182,212,${audioLevel * 0.3 + 0.15}) 0%, 
                            rgba(139,92,246,${audioLevel * 0.25 + 0.1}) 70%, 
                            transparent 100%)`,
                        transform: `scale(${1 + audioLevel * 0.2})`,
                        filter: `blur(${audioLevel * 3}px)`
                    }}
                />
                
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                    {isLoading ? (
                        <div className="relative">
                            <div className="w-6 h-6 border-2 border-zinc-400/40 border-t-zinc-200 rounded-full animate-spin" />
                            <div className="absolute inset-0 w-6 h-6 border-2 border-transparent border-t-cyan-400 rounded-full animate-spin" 
                                 style={{animationDirection: 'reverse', animationDuration: '1s'}} />
                        </div>
                    ) : isPlaying ? (
                        <div className="flex space-x-2 relative">
                            <div 
                                className="w-2 rounded-full transition-all duration-150"
                                style={{ 
                                    height: `${20 + audioLevel * 6}px`,
                                    background: 'linear-gradient(to top, #06b6d4, #0891b2)',
                                    boxShadow: `0 0 ${6 + audioLevel * 4}px rgba(6,182,212,0.6)`
                                }}
                            />
                            <div 
                                className="w-2 rounded-full transition-all duration-150"
                                style={{ 
                                    height: `${20 + audioLevel * 6}px`,
                                    background: 'linear-gradient(to top, #8b5cf6, #7c3aed)',
                                    boxShadow: `0 0 ${6 + audioLevel * 4}px rgba(139,92,246,0.6)`,
                                    animationDelay: '0.08s' 
                                }}
                            />
                            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/15 via-violet-400/15 to-cyan-400/15 rounded-full blur-md animate-pulse" />
                        </div>
                    ) : (
                        <div className="relative">
                            <div className={`w-0 h-0 border-y-transparent ml-1.5 transition-all duration-500 ${
                                isHovered 
                                    ? 'border-l-[14px] border-y-[9px] border-l-zinc-100' 
                                    : 'border-l-[12px] border-y-[8px] border-l-zinc-200'
                            }`} 
                            style={{
                                filter: `drop-shadow(0 0 ${isHovered ? 6 : 3}px rgba(255,255,255,0.2))`
                            }} />
                            <div className="absolute -inset-3 bg-gradient-to-r from-zinc-400/10 via-zinc-300/15 to-zinc-400/10 rounded-full blur-md animate-pulse" 
                                 style={{animationDuration: '3s'}} />
                        </div>
                    )}
                </div>

                {/* Ripple effects */}
                <div className="absolute inset-0 rounded-full bg-zinc-200/8 scale-0 group-active:scale-100 transition-transform duration-500 ease-out" />
                <div className="absolute inset-0 rounded-full bg-cyan-400/15 scale-0 group-active:scale-125 transition-transform duration-700 ease-out delay-75" />
            </button>

            {/* Floating particles */}
            {isPlaying && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full opacity-80 animate-float"
                            style={{
                                width: `${4 + Math.sin(i) * 2}px`,
                                height: `${4 + Math.sin(i) * 2}px`,
                                top: `${50 + Math.sin(i * 0.6 + Date.now() * 0.001) * 35}%`,
                                left: `${50 + Math.cos(i * 0.6 + Date.now() * 0.001) * 35}%`,
                                animationDelay: `${i * 0.4}s`,
                                animationDuration: `${2.5 + Math.random() * 1.5}s`,
                                transform: `scale(${1 + audioLevel * 0.5}) translate(-50%, -50%)`,
                                background: i % 2 === 0 
                                    ? `rgba(6,182,212,${0.6 + audioLevel * 0.3})` 
                                    : `rgba(139,92,246,${0.5 + audioLevel * 0.4})`,
                                boxShadow: `
                                    0 0 ${8 + audioLevel * 8}px ${i % 2 === 0 ? 'rgba(6,182,212,0.6)' : 'rgba(139,92,246,0.5)'},
                                    inset 0 1px 2px rgba(255,255,255,0.2)
                                `,
                                filter: `blur(${0.5 + audioLevel * 0.8}px)`
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Status indicator */}
            <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full transition-all duration-600 ${
                isPlaying ? 'bg-cyan-400 shadow-lg shadow-cyan-400/40' : 'bg-zinc-500'
            }`}
            style={{
                background: isPlaying 
                    ? 'linear-gradient(145deg, #06b6d4, #0891b2)' 
                    : 'linear-gradient(145deg, #71717a, #52525b)',
                boxShadow: isPlaying
                    ? `inset 0 1px 2px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(0,0,0,0.2), 0 0 12px rgba(6,182,212,0.5)`
                    : `inset 0 1px 2px rgba(255,255,255,0.08), inset 0 -1px 2px rgba(0,0,0,0.4)`,
                border: '1px solid rgba(0,0,0,0.2)'
            }}>
                <div className={`absolute inset-0.5 rounded-full transition-all duration-600 ${
                    isPlaying ? 'bg-cyan-300 animate-pulse' : 'bg-zinc-400'
                }`} 
                style={{
                    background: isPlaying 
                        ? 'radial-gradient(circle, #67e8f9, #22d3ee)' 
                        : 'radial-gradient(circle, #a1a1aa, #71717a)',
                    animationDuration: '2s'
                }} />
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-15px) scale(1.08); }
                }
                .animate-float {
                    animation: float 2.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}