import React from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import resumePdf from '../assets/Abrham Teramed.pdf';

// Custom inline SVG icons matching Lucide style
const GithubIcon = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TelegramIcon = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-backdrop w-[500px] h-[500px]" />
      <div className="absolute bottom-10 right-10 glow-backdrop w-[600px] h-[600px] opacity-75" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentIndigo/10 border border-accentIndigo/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accentBlue animate-pulse" />
            <span className="font-sans text-xs font-semibold tracking-wider text-accentBlue uppercase">
              Hi, I'm Abrham Teramed
            </span>
          </div>

          <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
            Building beautiful{' '}
            <span className="bg-gradient-to-r from-accentBlue via-accentPurple to-indigo-400 text-transparent bg-clip-text">
              mobile apps
            </span>{' '}
            and scalable web experiences.
          </h1>

          <p className="font-sans text-lg text-slate-400 max-w-xl leading-relaxed">
            A Senior Full-Stack Engineer specializing in Flutter and React, crafting high-performance digital products for startups and enterprises.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accentIndigo hover:bg-accentIndigo/90 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-accentIndigo/25"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={resumePdf}
              download="Abrham Teramed.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold text-sm transition-all duration-300"
            >
              Download CV
              <Download size={16} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4 text-slate-400">
            <a
              href="https://github.com/Abrom-code/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors text-sm font-medium"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abrham-nega-863787340"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors text-sm font-medium"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <a
              href="https://t.me/howdes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors text-sm font-medium"
            >
              <TelegramIcon size={18} />
              Telegram
            </a>
            <a
              href="mailto:gmikael1908@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors text-sm font-medium"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>

        {/* Right Graphical Column */}
        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
          {/* Main Container for Graphic Elements */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center">

            {/* Desktop Dashboard Card (Background) */}
            <div className="absolute right-0 top-16 w-80 h-56 rounded-2xl bg-darkCard border border-white/5 p-4 shadow-2xl transition-all duration-500 hover:border-white/10 animate-float-slow">
              {/* Browser Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="w-32 h-3 rounded-full bg-white/5" />
              </div>

              {/* Dashboard Content Mock */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="w-20 h-4 rounded bg-white/10" />
                  <div className="w-10 h-4 rounded bg-accentPurple/20" />
                </div>
                <div className="h-16 w-full rounded-lg bg-gradient-to-r from-accentIndigo/10 to-accentPurple/10 border border-white/5 flex items-end p-2 gap-1.5">
                  <div className="h-[20%] w-[15%] rounded-t bg-white/10" />
                  <div className="h-[45%] w-[15%] rounded-t bg-white/10" />
                  <div className="h-[60%] w-[15%] rounded-t bg-accentPurple/40" />
                  <div className="h-[30%] w-[15%] rounded-t bg-white/10" />
                  <div className="h-[80%] w-[15%] rounded-t bg-accentBlue/60" />
                  <div className="h-[95%] w-[15%] rounded-t bg-accentIndigo" />
                </div>
                <div className="flex justify-between gap-2">
                  <div className="h-4 w-1/3 rounded bg-white/5" />
                  <div className="h-4 w-1/2 rounded bg-white/5" />
                </div>
              </div>
            </div>

            {/* Mobile Phone Mockup (Foreground overlay) */}
            <div className="absolute left-6 top-24 w-52 h-[340px] rounded-[32px] bg-darkCard border-4 border-white/10 p-3 shadow-2xl z-20 transition-all duration-500 hover:border-white/20 animate-float-medium">
              {/* Speaker / Notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 rounded-full bg-black/80 flex items-center justify-center">
                <span className="w-8 h-1 rounded-full bg-white/10" />
              </div>

              {/* Mobile Content Mock */}
              <div className="h-full rounded-[24px] bg-[#0E0F12] p-3 flex flex-col justify-between pt-5">
                <div className="flex justify-between items-center mt-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-accentBlue to-accentPurple" />
                  <span className="w-16 h-3 rounded-full bg-white/10" />
                </div>

                <div className="space-y-2.5 my-auto">
                  <div className="h-28 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between p-2">
                    <div className="w-12 h-3 rounded bg-white/10" />
                    <div className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-accentBlue" />
                      <div className="w-20 h-4 rounded bg-white/10" />
                    </div>
                    <div className="w-full h-8 rounded bg-white/5" />
                  </div>
                </div>

                <div className="flex justify-around items-center pt-2 border-t border-white/5">
                  <span className="w-4 h-4 rounded-full bg-white/10" />
                  <span className="w-6 h-6 rounded-full bg-accentIndigo" />
                  <span className="w-4 h-4 rounded-full bg-white/10" />
                </div>
              </div>
            </div>

            {/* Floating Tags (positioned relative to phone and dashboard) */}
            <div className="absolute left-0 top-12 z-30 px-3 py-1.5 rounded-full bg-darkBg/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-accentBlue shadow-lg hover:border-accentBlue/40 transition-colors animate-float-slow">
              Flutter
            </div>

            <div className="absolute right-4 bottom-14 z-30 px-3 py-1.5 rounded-full bg-darkBg/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-accentPurple shadow-lg hover:border-accentPurple/40 transition-colors animate-float-medium">
              React
            </div>

            <div className="absolute right-20 top-2 z-30 px-3 py-1.5 rounded-full bg-darkBg/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white shadow-lg hover:border-white/20 transition-colors animate-float-fast">
              Firebase
            </div>

            <div className="absolute left-40 bottom-6 z-30 px-3 py-1.5 rounded-full bg-darkBg/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-indigo-400 shadow-lg hover:border-indigo-400/40 transition-colors animate-float-slow">
              TailwindCSS
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
