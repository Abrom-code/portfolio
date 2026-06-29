import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ExternalLink, ArrowUpRight, PlusCircle, ArrowRight } from 'lucide-react';

// Custom inline SVG icons matching Lucide style
const GithubIcon = ({ size = 16, ...props }) => (
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

export default function ProjectsArchive({ onViewProject }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest'); // 'latest' | 'name'

  // Archive projects database containing all 9 projects
  const allProjects = useMemo(() => [
    {
      id: 'matricmate',
      title: 'MatricMate',
      subtitle: 'Comprehensive mobile learning platform that centralizes practice questions from Grades 9–12 for the Ethiopian Matric Examination.',
      category: 'MOBILE APPS',
      categoryTag: 'EDUCATION • MOBILE APP',
      status: 'Completed',
      year: '2026',
      featured: true,
      tags: ['FLUTTER', 'SUPABASE', 'FIREBASE', 'GETX'],
      githubLink: 'https://github.com/Abrom-code/',
      demoLink: '#',
    },
    {
      id: 'eshetalehu',
      title: 'Eshetalehu',
      subtitle: 'Marketplace application that connects buyers and sellers of used goods in a secure environment with real-time chat.',
      category: 'MOBILE APPS',
      categoryTag: 'MARKETPLACE • MOBILE APP',
      year: '2025',
      tags: ['FLUTTER', 'SUPABASE', 'FIREBASE', 'BLOC'],
      githubLink: 'https://github.com/Abrom-code/',
      demoLink: '#',
    },
    {
      id: 'amharic-typing',
      title: 'Amharic Typing',
      subtitle: 'Interactive web platform designed to improve typing speed and accuracy through Amharic lessons and real-time practice.',
      category: 'FULL-STACK',
      categoryTag: 'EDUCATION • WEB APP',
      year: '2024',
      tags: ['REACT', 'TAILWIND CSS', 'JAVASCRIPT'],
      githubLink: 'https://github.com/Abrom-code/',
      demoLink: '#',
    },
    {
      id: 'ethioride',
      title: 'EthioRide',
      subtitle: 'Distributed ride-booking application simulating ride-sharing workflows while demonstrating networking and concurrency concepts.',
      category: 'BACKEND',
      categoryTag: 'NETWORKING • DISTRIBUTED APP',
      year: '2024',
      tags: ['JAVA', 'JAVA SOCKETS', 'MYSQL'],
      githubLink: 'https://github.com/Abrom-code/',
      demoLink: '#',
    },
    {
      id: 'noteify',
      title: 'Noteify',
      subtitle: 'Lightweight note-taking web application to organize, edit, and manage personal notes with persistent storage.',
      category: 'FULL-STACK',
      categoryTag: 'PRODUCTIVITY • WEB APP',
      year: '2023',
      tags: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'],
      githubLink: 'https://github.com/Abrom-code/',
      demoLink: '#',
    },
    {
      id: 'intelicoach',
      title: 'InteliCoach',
      subtitle: 'Java-based student coaching desktop application designed to organize study schedules, task priorities, and goals.',
      category: 'BACKEND',
      categoryTag: 'UTILITY • DESKTOP APP',
      year: '2023',
      tags: ['JAVA', 'MYSQL', 'MVC DESIGN'],
      githubLink: 'https://github.com/Abrom-code/',
      demoLink: '#',
    },
    {
      id: 'exam-system',
      title: 'Exam Management System',
      subtitle: 'Performance-focused C++ desktop examination management system enabling online test administration and automatic results.',
      category: 'BACKEND',
      categoryTag: 'EDUCATION • DESKTOP APP',
      year: '2023',
      tags: ['C++', 'MYSQL', 'OBJECT-ORIENTED DESIGN'],
      githubLink: 'https://github.com/Abrom-code/',
      demoLink: '#',
    },
    {
      id: 'task-manager',
      title: 'Task Manager',
      subtitle: 'Lightweight task management web application designed to organize work efficiently through a clean user experience.',
      category: 'FULL-STACK',
      categoryTag: 'PRODUCTIVITY • WEB APP',
      year: '2025',
      tags: ['REACT', 'TAILWIND CSS', 'JAVASCRIPT'],
      githubLink: 'https://github.com/Abrom-code/',
      demoLink: '#',
    },
    {
      id: 'shop',
      title: 'Shop',
      subtitle: 'Flutter-based e-commerce application that enables users to browse products, manage carts, and authenticate using Firebase.',
      category: 'MOBILE APPS',
      categoryTag: 'E-COMMERCE • MOBILE APP',
      year: '2025',
      tags: ['FLUTTER', 'MONGODB', 'FIREBASE'],
      githubLink: 'https://github.com/Abrom-code/',
      demoLink: '#',
    },
  ], []);

  // Filter Categories list
  const categories = ['ALL', 'MOBILE APPS', 'FULL-STACK', 'BACKEND', 'UI/UX'];

  // Filtered & Sorted projects list logic
  const filteredProjects = useMemo(() => {
    let result = allProjects;

    // Filter by category
    if (activeCategory !== 'ALL') {
      if (activeCategory === 'UI/UX') {
        result = result.filter(proj => proj.category === 'FULL-STACK' || proj.category === 'MOBILE APPS');
      } else {
        result = result.filter(proj => proj.category === activeCategory);
      }
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(proj =>
        proj.title.toLowerCase().includes(q) ||
        proj.subtitle.toLowerCase().includes(q) ||
        proj.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Sort result
    if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // sort by year/latest
      result = [...result].sort((a, b) => b.year.localeCompare(a.year));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy, allProjects]);

  // Featured Project logic (take the first featured project or first index from list)
  const featuredProject = useMemo(() => {
    return allProjects.find(p => p.featured) || allProjects[0];
  }, [allProjects]);

  // Grid projects logic (filter out the featured project from regular display if filtering is 'ALL')
  const gridProjects = useMemo(() => {
    if (activeCategory === 'ALL' && searchQuery.trim() === '') {
      return filteredProjects.filter(p => p.id !== featuredProject.id);
    }
    return filteredProjects;
  }, [filteredProjects, activeCategory, searchQuery, featuredProject]);

  return (
    <div className="bg-[#090A0C] min-h-screen text-slate-300 pt-28 pb-16 relative overflow-hidden text-left">
      {/* Background visual glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-backdrop w-[600px] h-[600px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Title Section */}
        <div className="space-y-3">
          <h1 className="font-outfit text-5xl font-extrabold text-white tracking-tight">
            Projects
          </h1>
          <p className="font-sans text-sm text-slate-400 max-w-xl">
            {allProjects.length} Projects — An archive of engineering excellence and digital craftsmanship.
          </p>
        </div>

        {/* Filter and Control Toolbar */}
        <div className="p-4 rounded-2xl bg-darkCard border border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between shadow-lg">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-outfit text-[10px] font-bold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accentBlue text-black'
                    : 'bg-[#090A0C] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar and Sort control */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input Container */}
            <div className="relative w-full md:w-60">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#090A0C] border border-white/5 hover:border-white/10 focus:border-accentBlue focus:outline-none text-white font-sans text-xs transition-all duration-300"
              />
            </div>

            {/* Sort Toggle Button */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-8 py-2 rounded-xl bg-[#090A0C] border border-white/5 text-slate-400 hover:text-white font-sans text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="latest">Sort: Latest</option>
                <option value="name">Sort: Name</option>
              </select>
              <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Featured Project Row (Only visible when activeCategory is ALL and searchQuery is empty) */}
        {activeCategory === 'ALL' && searchQuery.trim() === '' && (
          <div className="rounded-3xl bg-darkCard border border-white/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 hover:border-white/10 transition-colors">
            
            {/* Left Mockup Panel */}
            <div className="lg:col-span-6 bg-[#0E0F12] border border-white/5 rounded-2xl h-80 flex items-center justify-center p-8 relative overflow-hidden group">
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-accentBlue/20 border border-accentBlue/30 text-[9px] font-bold text-accentBlue tracking-widest uppercase">
                ★ FEATURED
              </div>

              {/* Glowing gradient backdrops */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accentIndigo/5 to-accentPurple/5 opacity-50" />

              {/* Large phone device mockup */}
              <div className="w-40 h-[280px] rounded-[24px] bg-darkBg border-[3px] border-white/10 p-2.5 shadow-2xl relative transform translate-y-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-full" />
                <div className="h-full rounded-[18px] bg-darkCard/80 p-2.5 flex flex-col justify-between pt-4 overflow-hidden">
                  <div className="flex justify-between items-center mb-1">
                    <span className="w-5 h-5 rounded-full bg-accentBlue/20" />
                    <span className="w-10 h-2 rounded bg-white/10" />
                  </div>
                  
                  {/* Visual charts */}
                  <div className="my-auto flex flex-col gap-2">
                    <div className="w-16 h-12 rounded bg-white/5 p-1 flex items-end gap-1">
                      <div className="h-[20%] w-2 rounded-t bg-white/10" />
                      <div className="h-[50%] w-2 rounded-t bg-white/10" />
                      <div className="h-[80%] w-2 rounded-t bg-accentBlue" />
                      <div className="h-[40%] w-2 rounded-t bg-white/10" />
                    </div>
                    <div className="w-16 h-2 rounded bg-white/10" />
                  </div>

                  <div className="h-5 w-full rounded bg-accentIndigo" />
                </div>
              </div>
            </div>

            {/* Right Information Panel */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-outfit text-[10px] font-bold text-slate-500 tracking-wider">
                    {featuredProject.categoryTag}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-bold text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Completed
                  </div>
                </div>

                <h2 className="font-outfit text-3xl font-extrabold text-white">
                  {featuredProject.title}
                </h2>

                <p className="font-sans text-sm text-slate-400 leading-relaxed">
                  {featuredProject.subtitle}
                </p>

                {/* Technology badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-outfit text-[9px] font-bold text-slate-300 bg-white/5 border border-white/5 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={() => onViewProject(featuredProject.id)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accentIndigo hover:bg-accentIndigo/90 text-white font-semibold text-xs transition-colors shadow-lg shadow-accentIndigo/25"
                >
                  View Details
                  <ArrowRight size={14} />
                </button>
                <a
                  href={featuredProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#090A0C] border border-white/5 hover:border-white/10 hover:text-white transition-colors"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={featuredProject.demoLink}
                  className="p-3 rounded-xl bg-[#090A0C] border border-white/5 hover:border-white/10 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-darkCard border border-white/5 overflow-hidden flex flex-col justify-between hover:border-white/10 hover:bg-darkCardHover transition-all duration-300"
            >
              {/* Graphic Mockup Header */}
              <div className="h-44 bg-[#0E0F12] border-b border-white/5 flex items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accentIndigo/5 to-accentPurple/5 opacity-50" />
                
                {/* Year Badge on bottom-right */}
                <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded-full bg-black/60 border border-white/5 text-[9px] font-bold text-slate-400">
                  {project.year}
                </div>

                {project.category === 'MOBILE APPS' ? (
                  /* Mobile Apps Phone Graphic */
                  <div className="w-24 h-32 rounded-t-[18px] bg-darkBg border-x-[2px] border-t-[2px] border-white/10 p-1.5 relative transform translate-y-6 transition-transform duration-500 group-hover:translate-y-4">
                    <div className="h-full rounded-t-[12px] bg-white/5 p-1">
                      <div className="w-8 h-1 rounded bg-white/10 mx-auto mb-2" />
                      <div className="h-16 rounded bg-white/5" />
                    </div>
                  </div>
                ) : project.id === 'amharic-typing' || project.id === 'task-manager' || project.id === 'noteify' ? (
                  /* Web/Browser Graphic Frame */
                  <div className="w-48 h-28 rounded-lg bg-darkBg border border-white/10 p-1 relative transform translate-y-3 transition-transform duration-500 group-hover:translate-y-2">
                    <div className="flex gap-1 border-b border-white/5 pb-1 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div>
                    <div className="grid grid-cols-3 gap-1 h-16 pt-1">
                      <div className="col-span-1 rounded bg-white/5" />
                      <div className="col-span-2 rounded bg-accentPurple/10 border border-accentPurple/20" />
                    </div>
                  </div>
                ) : (
                  /* Database/Console Graphic */
                  <div className="w-40 h-14 rounded bg-darkBg border border-white/10 p-2 flex flex-col justify-around transform transition-transform duration-500 group-hover:scale-105 font-mono text-[9px] text-emerald-400 text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>$ server running on :8080</span>
                    </div>
                    <div className="text-slate-500">$ query OK - 0.04s</div>
                  </div>
                )}
              </div>

              {/* Content Panel */}
              <div className="p-6 text-left space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-outfit text-[9px] font-bold text-slate-500 tracking-widest uppercase block">
                    {project.categoryTag}
                  </span>
                  
                  <h3 className="font-outfit text-xl font-bold text-white group-hover:text-accentBlue transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.subtitle}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-outfit text-[8px] font-bold text-slate-400 bg-white/5 px-1.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions row */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#090A0C] border border-white/5 hover:border-white/10 hover:text-white transition-colors"
                      >
                        <GithubIcon size={12} />
                      </a>
                      <a
                        href={project.demoLink}
                        className="p-2 rounded-lg bg-[#090A0C] border border-white/5 hover:border-white/10 hover:text-white transition-colors"
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <button
                      onClick={() => onViewProject(project.id)}
                      className="inline-flex items-center gap-1 font-sans text-[10px] font-bold text-slate-400 group-hover:text-accentBlue transition-colors"
                    >
                      DETAILS
                      <ArrowRight size={10} className="transform transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}

          {/* Submit Project Placeholder Card */}
          <div className="border-2 border-dashed border-white/10 hover:border-accentBlue/40 rounded-3xl p-6 min-h-[360px] flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300 relative">
            <div className="space-y-4">
              <PlusCircle className="mx-auto text-slate-500 group-hover:text-accentBlue group-hover:scale-110 transition-all duration-300" size={36} />
              <div className="space-y-1">
                <h3 className="font-outfit text-base font-bold text-white group-hover:text-accentBlue transition-colors">
                  SUBMIT PROJECT
                </h3>
                <p className="font-sans text-xs text-slate-500 max-w-[200px] leading-relaxed">
                  Have an exceptional project ideas in mind? Let's build together.
                </p>
              </div>
            </div>
            {/* Invisible overlay linking to contact */}
            <a href="#contact" className="absolute inset-0 z-10" />
          </div>
        </div>

        {/* Pagination Grid Controls */}
        <div className="flex items-center justify-center gap-2 pt-8">
          <button className="p-2 rounded-lg bg-darkCard border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all duration-300 cursor-not-allowed" disabled>
            &lt;
          </button>
          <button className="w-8 h-8 rounded-lg bg-accentBlue text-black font-outfit text-xs font-bold transition-all duration-300">
            1
          </button>
          <button className="w-8 h-8 rounded-lg bg-darkCard border border-white/5 text-slate-400 hover:text-white hover:border-white/10 font-outfit text-xs font-bold transition-all duration-300">
            2
          </button>
          <button className="w-8 h-8 rounded-lg bg-darkCard border border-white/5 text-slate-400 hover:text-white hover:border-white/10 font-outfit text-xs font-bold transition-all duration-300">
            3
          </button>
          <span className="text-slate-600 px-1">...</span>
          <button className="w-8 h-8 rounded-lg bg-darkCard border border-white/5 text-slate-400 hover:text-white hover:border-white/10 font-outfit text-xs font-bold transition-all duration-300">
            6
          </button>
          <button className="p-2 rounded-lg bg-darkCard border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all duration-300">
            &gt;
          </button>
        </div>

      </div>
    </div>
  );
}
