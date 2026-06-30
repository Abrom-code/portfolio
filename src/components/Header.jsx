import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ page = 'home', setPage }) {
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
          ? 'bg-darkBg/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="font-outfit font-bold text-xl text-white tracking-tight flex items-center gap-2 group"
        >
          <span className="bg-gradient-to-r from-accentBlue to-accentPurple text-transparent bg-clip-text">
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
              className={`font-sans text-sm font-medium transition-colors hover:text-white relative py-1 ${
                activeSection === link.id ? 'text-white' : 'text-slate-400'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accentBlue to-accentPurple rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            Let's Talk
            <ArrowUpRight size={14} className="text-accentBlue" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-darkBg border-b border-white/5 px-6 py-6 flex flex-col gap-4 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`font-sans text-lg font-medium transition-colors py-2 ${
                activeSection === link.id ? 'text-white' : 'text-slate-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-gradient-to-r from-accentBlue to-accentPurple text-white font-medium text-sm mt-2 transition-all duration-300"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
