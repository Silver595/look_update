'use client'
import Header from "@/components/header";
import "./globals.css";
import {  Playfair_Display, Cinzel} from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import MusicSwitch from "@/components/music-switch";
import { Toaster } from "react-hot-toast";


 const playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '700'] });
 const cinzel = Cinzel({ subsets: ["latin"], weight: ['400', '700'] });

const metadata = {
    title: "SILVER595",
    description: "I'm just a learner trying to learn new things",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <head>
                <style jsx>{`
                @keyframes luxury-pulse {
                    0%, 100% { 
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.6;
                        transform: scale(1.03);
                    }
                }
                
                @keyframes shimmer-gold {
                    0% { 
                        transform: translateX(-100%) rotateZ(45deg);
                        opacity: 0;
                    }
                    50% {
                        opacity: 0.8;
                    }
                    100% { 
                        transform: translateX(300%) rotateZ(45deg);
                        opacity: 0;
                    }
                }
                
                @keyframes float-elegant {
                    0%, 100% { 
                        transform: translateY(0px) rotateZ(0deg);
                    }
                    25% { 
                        transform: translateY(-15px) rotateZ(0.5deg);
                    }
                    50% { 
                        transform: translateY(-8px) rotateZ(0deg);
                    }
                    75% { 
                        transform: translateY(-12px) rotateZ(-0.5deg);
                    }
                }
                
                @keyframes gradient-luxury {
                    0%, 100% {
                        background-position: 0% 50%;
                        filter: brightness(1);
                    }
                    25% {
                        background-position: 50% 0%;
                        filter: brightness(1.05);
                    }
                    50% {
                        background-position: 100% 50%;
                        filter: brightness(0.95);
                    }
                    75% {
                        background-position: 50% 100%;
                        filter: brightness(1.02);
                    }
                }
                
                @keyframes premium-glow {
                    0%, 100% { 
                        box-shadow: 
                            0 0 20px rgba(218, 165, 32, 0.02),
                            0 0 40px rgba(184, 134, 11, 0.01),
                            inset 0 1px 0 rgba(255, 255, 255, 0.03);
                    }
                    50% { 
                        box-shadow: 
                            0 0 30px rgba(218, 165, 32, 0.04),
                            0 0 60px rgba(184, 134, 11, 0.02),
                            inset 0 1px 0 rgba(255, 255, 255, 0.05);
                    }
                }
                
                @keyframes stagger-reveal {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes diamond-sparkle {
                    0%, 100% {
                        transform: scale(0) rotate(0deg);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1) rotate(180deg);
                        opacity: 0.8;
                    }
                }
                
                @keyframes micro-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-2px); }
                }
                
                /* Premium Shimmer Effect */
                .shimmer-luxury::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -200%;
                    width: 200%;
                    height: 100%;
                    background: linear-gradient(
                        45deg,
                        transparent 30%,
                        rgba(218, 165, 32, 0.06) 50%,
                        transparent 70%
                    );
                    animation: shimmer-gold 6s infinite;
                    pointer-events: none;
                }
                
                /* Luxury Floating Orbs */
                .luxury-orb {
                    animation: float-elegant 15s ease-in-out infinite;
                    background: radial-gradient(circle at 30% 30%, 
                        rgba(25, 20, 15, 0.7) 0%,
                        rgba(40, 30, 20, 0.5) 30%,
                        rgba(15, 10, 5, 0.8) 70%,
                        rgba(0, 0, 0, 0.95) 100%);
                    filter: blur(80px);
                    opacity: 0.4;
                }
                
                .luxury-orb:nth-child(2) {
                    animation-delay: -5s;
                    animation-duration: 18s;
                    background: radial-gradient(circle at 70% 70%, 
                        rgba(30, 25, 15, 0.6) 0%,
                        rgba(20, 15, 10, 0.4) 50%,
                        rgba(0, 0, 0, 0.9) 100%);
                }
                
                .luxury-orb:nth-child(3) {
                    animation-delay: -10s;
                    animation-duration: 22s;
                    background: radial-gradient(circle at 50% 30%, 
                        rgba(35, 25, 10, 0.5) 0%,
                        rgba(25, 15, 5, 0.3) 40%,
                        rgba(0, 0, 0, 0.85) 100%);
                }
                
                /* Premium Glass Morphism */
                .glass-premium {
                    background: rgba(8, 5, 0, 0.92);
                    backdrop-filter: blur(24px);
                    border: 1px solid rgba(218, 165, 32, 0.04);
                    box-shadow: 
                        0 8px 32px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.03),
                        inset 0 -1px 0 rgba(218, 165, 32, 0.02);
                    animation: premium-glow 8s ease-in-out infinite;
                }
                
                /* Diamond Sparkles */
                .diamond-sparkle {
                    position: absolute;
                    width: 1.5px;
                    height: 1.5px;
                    background: rgba(218, 165, 32, 0.4);
                    animation: diamond-sparkle 4s ease-in-out infinite;
                    border-radius: 50%;
                }
                
                .diamond-sparkle:nth-child(1) { top: 15%; left: 25%; animation-delay: 0s; }
                .diamond-sparkle:nth-child(2) { top: 70%; left: 75%; animation-delay: 1.3s; }
                .diamond-sparkle:nth-child(3) { top: 35%; left: 85%; animation-delay: 2.6s; }
                .diamond-sparkle:nth-child(4) { top: 85%; left: 15%; animation-delay: 1.9s; }
                .diamond-sparkle:nth-child(5) { top: 10%; left: 65%; animation-delay: 3.2s; }
                .diamond-sparkle:nth-child(6) { top: 60%; left: 40%; animation-delay: 0.7s; }
                
                /* Luxury Grid Pattern */
                .luxury-grid {
                    background-image: 
                        linear-gradient(rgba(218, 165, 32, 0.008) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(218, 165, 32, 0.008) 1px, transparent 1px);
                    background-size: 100px 100px;
                    animation: micro-float 10s ease-in-out infinite;
                }
                
                /* Stagger Animations */
                .stagger-1 { animation: stagger-reveal 1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both; }
                .stagger-2 { animation: stagger-reveal 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both; }
                .stagger-3 { animation: stagger-reveal 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both; }
                .stagger-4 { animation: stagger-reveal 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both; }
                
                /* Premium Typography */
                .luxury-text {
                    font-weight: 200;
                    letter-spacing: 0.05em;
                    line-height: 1.3;
                    background: linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.95) 0%,
                        rgba(218, 165, 32, 0.8) 50%,
                        rgba(255, 255, 255, 0.9) 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradient-luxury 10s ease-in-out infinite;
                }
                
                /* Premium Selection */
                ::selection {
                    background: rgba(218, 165, 32, 0.12);
                    text-shadow: none;
                }
                
                /* Premium Scrollbar */
                ::-webkit-scrollbar {
                    width: 3px;
                }
                
                ::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.6);
                }
                
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, 
                        rgba(218, 165, 32, 0.15) 0%,
                        rgba(184, 134, 11, 0.1) 50%,
                        rgba(218, 165, 32, 0.15) 100%);
                    border-radius: 2px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, 
                        rgba(218, 165, 32, 0.25) 0%,
                        rgba(184, 134, 11, 0.2) 50%,
                        rgba(218, 165, 32, 0.25) 100%);
                }
                
                /* Responsive Adjustments */
                @media (max-width: 768px) {
                    .luxury-orb {
                        width: 200px !important;
                        height: 200px !important;
                        filter: blur(60px);
                    }
                    
                    .luxury-grid {
                        background-size: 60px 60px;
                    }
                    
                    .glass-premium {
                        backdrop-filter: blur(16px);
                    }
                    
                    .diamond-sparkle {
                        width: 1px;
                        height: 1px;
                    }
                }
                
                @media (max-width: 480px) {
                    .luxury-orb {
                        width: 150px !important;
                        height: 150px !important;
                        filter: blur(40px);
                    }
                    
                    .luxury-grid {
                        background-size: 40px 40px;
                        opacity: 0.15;
                    }
                    
                    .glass-premium {
                        backdrop-filter: blur(12px);
                        background: rgba(8, 5, 0, 0.95);
                    }
                }
            `}</style>
            </head>
            <body className={`${cinzel.className} relative bg-black text-white min-h-screen overflow-x-hidden antialiased selection:bg-yellow-600/10`}>
                    {/*Inter, Playfair_Display, Cinzel, Cormorant_Garamond, Libre_Baskerville, Prata, Marcellus, EB_Garamond*/}
                {/* Premium Background Layer */}
                <div className="fixed inset-0 -z-50 bg-gradient-to-br from-black via-gray-950 to-yellow-950/5"></div>

                {/* Luxury Grid Pattern */}
                <div className="fixed inset-0 -z-40 luxury-grid opacity-20"></div>

                {/* Premium Floating Orbs */}
                <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/6 w-80 h-80 sm:w-96 sm:h-96 rounded-full luxury-orb"></div>
                    <div className="absolute top-2/3 right-1/5 w-64 h-64 sm:w-80 sm:h-80 rounded-full luxury-orb"></div>
                    <div className="absolute top-1/2 left-2/3 w-48 h-48 sm:w-64 sm:h-64 rounded-full luxury-orb"></div>
                </div>

                {/* Diamond Sparkles */}
                <div className="fixed inset-0 -z-20 pointer-events-none">
                    <div className="diamond-sparkle"></div>
                    <div className="diamond-sparkle"></div>
                    <div className="diamond-sparkle"></div>
                    <div className="diamond-sparkle"></div>
                    <div className="diamond-sparkle"></div>
                    <div className="diamond-sparkle"></div>
                </div>

                {/* Premium Noise Texture */}
                <div className="fixed inset-0 -z-10 opacity-10 pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch' result='noise'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0.05 0.1 0.15 0.2'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23DAA520' opacity='0.25'/%3E%3C/svg%3E"), linear-gradient(135deg, #1a1a2e 0%, #111111 25%, #0f3460 50%, #2d1b69 100%)`, backgroundSize: '120px 120px'
                    }}>
                </div>

                {/* Main Content Container */}
                <div className="relative flex flex-col min-h-screen">

                 
                        <ActiveSectionContextProvider>

                            {/* Header with Premium Glass Effect */}
                            <div className="relative shimmer-luxury stagger-1">
                                <div className="glass-premium">
                                    <Header />
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <main className="flex-grow pt-20 sm:pt-28 lg:pt-36 px-3 sm:px-6 lg:px-8 max-w-full relative stagger-2">
                                <div className="relative glass-premium rounded-none p-4 sm:p-6 lg:p-8">
                                    <div className="shimmer-luxury absolute inset-0 opacity-20 pointer-events-none"></div>
                                    {children}
                                </div>
                            </main>

                            {/* Footer with Premium Effect */}
                            <div className="relative stagger-3">
                                <div className="glass-premium">
                                    <Footer />
                                </div>
                            </div>

                            {/* Luxury Toaster */}
                            <Toaster
                                position="top-right"
                                toastOptions={{
                                    style: {
                                        background: 'rgba(8, 5, 0, 0.98)',
                                        border: '1px solid rgba(218, 165, 32, 0.06)',
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        borderRadius: '0',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
                                        fontWeight: '200',
                                        letterSpacing: '0.025em',
                                        backdropFilter: 'blur(20px)',
                                    },
                                    duration: 4000,
                                }}
                            />

                            {/* Premium Theme Switch */}
                            <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 stagger-4">
                                <div className="glass-premium p-3 sm:p-6 hover:bg-black/10 transition-all duration-500 group">
                                    <div className="shimmer-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <MusicSwitch />
                                </div>
                            </div>

                        </ActiveSectionContextProvider>

                    {/* Premium Bottom Accent Line */}
                    <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/5 to-transparent pointer-events-none stagger-4"></div>

                    {/* Side Accent Lines */}
                    <div className="fixed top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-600/3 to-transparent pointer-events-none stagger-1"></div>
                    <div className="fixed top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-600/3 to-transparent pointer-events-none stagger-1"></div>

                </div>
            </body>
        </html>
    );
}