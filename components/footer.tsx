import React from 'react';

export default function Footer() {
  return (
    <footer className="relative mt-20 mb-10 px-4 text-center">
      <div className="group cursor-default inline-block">
        <div className="backdrop-blur-xl bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80 rounded-xl px-8 py-4 border border-white/5 transition-all duration-700 hover:from-black/90 hover:via-gray-800/80 hover:to-black/90 hover:border-white/10 hover:shadow-xl hover:shadow-black/50 hover:scale-102 hover:-translate-y-0.5 transform-gpu">
          <small className="block text-gray-400 text-xs mb-1 group-hover:text-gray-200 transition-colors duration-300">
            &copy; {new Date().getFullYear()} Akash. All rights reserved.
          </small>
          <p className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors duration-300">
            <span className="font-semibold">Thank You</span> for making visit
          </p>
        </div>
      </div>
    </footer>
  );
}