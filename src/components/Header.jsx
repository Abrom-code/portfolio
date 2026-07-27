import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Header({ page = 'home', setPage, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Only track active sections on home page
      if (page === 'home') {
        const sections = ['skills', 'projects', 'certifications', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  const navLinks = [
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (setPage) {
      setPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, targetId) => {
    if (page !== 'home') {
      e.preventDefault();
      if (setPage) {
        setPage('home');
      }
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    }
    setIsMobileMenuOpen(false);
  };

  // Dynamic branding text based on page state
  const getLogoText = () => {
    if (page === 'archive') return 'Portfolio.Archive';
    if (page === 'detail') return 'ABR_TER';
    return 'Abrham Teramed';
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-darkBg/80 backdrop-blur-md border-b border-customBorder py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="font-outfit font-bold text-xl text-textPrimary tracking-tight flex items-center gap-2 group"
        >
          <span className="text-accentBlue font-bold">
            {getLogoText()}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`font-sans text-sm font-medium transition-colors hover:text-textPrimary relative py-1 ${
                activeSection === link.id ? 'text-textPrimary' : 'text-textMuted'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accentBlue rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-textSecondary border border-customBorder hover:border-customBorderHover transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-amber-400 transition-transform duration-500 hover:rotate-45" />
            ) : (
              <Moon size={16} className="text-accentIndigo transition-transform duration-500 hover:-rotate-12" />
            )}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-textPrimary font-medium text-xs border border-customBorder hover:border-customBorderHover transition-all duration-300 shadow-sm"
          >
            Let's Talk
            <ArrowUpRight size={14} className="text-accentBlue" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-textSecondary border border-customBorder hover:border-customBorderHover transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-accentIndigo" />
            )}
          </button>
          <button
            className="text-textSecondary hover:text-textPrimary transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-darkBg border-b border-customBorder px-6 py-6 flex flex-col gap-4 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`font-sans text-lg font-medium transition-colors py-2 ${
                activeSection === link.id ? 'text-textPrimary' : 'text-textMuted'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-accentIndigo hover:bg-accentIndigo/90 text-white font-medium text-sm mt-2 transition-all duration-300"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
