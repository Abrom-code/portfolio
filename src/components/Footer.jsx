import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#090A0C] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand details */}
        <div className="text-left space-y-1">
          <div className="font-outfit font-bold text-lg text-white">
          <span className="text-accentBlue">Abrham Teramed</span>
          </div>
          <p className="font-sans text-xs text-slate-500">
            © {currentYear} Abrham Teramed. All rights reserved. Built with passion.
          </p>
        </div>

        {/* Navigation / Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Abrom-code/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abrham-nega-863787340"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/howdes"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Telegram
          </a>
          <a
            href="mailto:gmikael1908@gmail.com"
            className="font-sans text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
