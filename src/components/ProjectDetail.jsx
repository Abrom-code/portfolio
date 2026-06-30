import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Database, Award, BarChart2, Fingerprint, Wallet, CreditCard, Layers, Compass, Code, Smartphone, Monitor, ExternalLink } from 'lucide-react';
import projectsData from '../data/projects.json';

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

const iconMap = {
  Layers,
  Award,
  ShieldCheck,
  Compass,
  Code,
  Cpu,
  Database,
  BarChart2,
  Fingerprint,
  Wallet,
  CreditCard,
  Smartphone,
  Monitor
};

export default function ProjectDetail({ projectId, onBack, onNavigate }) {
  // Scroll to top when loading a new project detail
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projectsData.find(p => p.id === projectId) || projectsData[0];

  // Compute next project dynamically
  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  return (
    <div className="bg-[#090A0C] min-h-screen text-slate-300 pt-28 pb-16 relative overflow-hidden text-left">
      {/* Background circular glowing effects */}
      <div className="absolute top-10 left-10 glow-backdrop w-[500px] h-[500px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 glow-backdrop w-[600px] h-[600px] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-20">
        {/* Navigation Action */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-sans text-xs font-semibold border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <ArrowLeft size={14} className="text-accentBlue" />
          Back to Projects
        </button>

        {/* Project Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-outfit text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="font-sans text-lg text-slate-400 leading-relaxed max-w-2xl">
              {project.subtitle}
            </p>

            {/* Action buttons (GitHub and Live Demo) */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
              >
                <GithubIcon size={14} className="text-slate-300" />
                GitHub Repository
              </a>
              {project.demoLink ? (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accentIndigo hover:bg-accentIndigo/90 text-white font-semibold text-xs transition-colors shadow-lg shadow-accentIndigo/25"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/5 text-slate-600 cursor-not-allowed font-semibold text-xs opacity-50"
                  title="No demo available for this project"
                >
                  <ExternalLink size={14} />
                  No Demo Available
                </button>
              )}
            </div>
          </div>

          {/* Project Details Columns */}
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-6 pt-4 lg:pt-0 border-t border-white/5 lg:border-t-0 lg:border-l lg:border-white/5 lg:pl-10">
            <div>
              <span className="font-outfit text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Role</span>
              <span className="font-sans text-sm font-semibold text-white mt-1 block">{project.role}</span>
            </div>
            <div>
              <span className="font-outfit text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Tech</span>
              <span className="font-sans text-sm font-semibold text-white mt-1 block">{project.techStack}</span>
            </div>
            <div>
              <span className="font-outfit text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Duration</span>
              <span className="font-sans text-sm font-semibold text-white mt-1 block">{project.duration}</span>
            </div>
          </div>
        </div>

        {/* Graphic Mockup Area */}
        <div className="w-full rounded-3xl bg-darkCard border border-white/5 p-8 md:p-12 flex justify-center items-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accentIndigo/5 via-accentPurple/5 to-transparent opacity-50" />
          
          {project.techBadges.some(b => b.value === 'Flutter') ? (
            /* Large Mobile Phone Graphic Mockup */
            <div className="w-64 h-[440px] rounded-[36px] bg-darkBg border-4 border-white/10 p-3.5 shadow-2xl relative transform transition-transform duration-500 group-hover:scale-105 z-10">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full" />
              <div className="h-full rounded-[26px] bg-[#0E0F12] p-4 flex flex-col justify-between pt-6 overflow-hidden">
                <div className="flex justify-between items-center mt-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-accentBlue to-accentPurple" />
                  <div className="w-20 h-4 rounded bg-white/10" />
                </div>
                
                {/* Visual Chart inside mobile mockup */}
                <div className="h-32 w-full rounded-xl bg-white/5 border border-white/5 p-3 flex flex-col justify-between my-auto">
                  <div className="flex justify-between">
                    <span className="w-10 h-3 rounded bg-white/10" />
                    <span className="text-[10px] font-bold text-accentBlue">95%</span>
                  </div>
                  {/* Detailed Graph lines */}
                  <div className="h-16 w-full flex items-end gap-1.5 pt-2">
                    <div className="h-[25%] w-[12%] rounded-t bg-accentBlue/20" />
                    <div className="h-[40%] w-[12%] rounded-t bg-accentBlue/20" />
                    <div className="h-[75%] w-[12%] rounded-t bg-accentPurple/40" />
                    <div className="h-[60%] w-[12%] rounded-t bg-accentBlue/30" />
                    <div className="h-[85%] w-[12%] rounded-t bg-accentBlue" />
                    <div className="h-[95%] w-[12%] rounded-t bg-accentPurple" />
                  </div>
                </div>

                <div className="space-y-2 mt-auto">
                  <div className="w-full h-8 rounded-xl bg-accentIndigo hover:bg-accentIndigo/90 transition-colors flex items-center justify-center text-xs font-bold text-white">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop Dashboard Graphic Mockup */
            <div className="w-full max-w-xl h-72 rounded-2xl bg-darkBg border-2 border-white/10 p-3 shadow-2xl relative transform transition-transform duration-500 group-hover:scale-105 z-10">
              <div className="flex gap-1.5 pb-2 mb-2 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="grid grid-cols-4 gap-4 h-56 pt-2">
                <div className="col-span-1 border-r border-white/5 space-y-4 pr-2">
                  <div className="h-4 rounded bg-accentPurple/20" />
                  <div className="h-8 rounded bg-white/5" />
                  <div className="h-8 rounded bg-white/5" />
                </div>
                <div className="col-span-3 space-y-4 pl-2">
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-4 rounded bg-white/10" />
                    <div className="w-12 h-3 rounded bg-accentBlue/20" />
                  </div>
                  <div className="h-32 rounded-xl bg-white/5 border border-white/5 p-4 flex gap-4">
                    <div className="w-1/3 h-full rounded bg-white/5 flex flex-col justify-around p-2">
                      <div className="w-8 h-2 rounded bg-white/10" />
                      <div className="w-full h-12 rounded-full border-4 border-accentBlue/30 border-t-accentBlue animate-spin-slow" />
                    </div>
                    <div className="w-2/3 h-full flex flex-col justify-between">
                      <div className="h-3 rounded bg-white/10" />
                      <div className="h-3 rounded bg-white/10" />
                      <div className="h-3 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* The Challenge & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left pt-6">
          <div className="lg:col-span-4">
            <h2 className="font-outfit text-3xl font-extrabold text-white">
              The Challenge & Vision
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 rounded-2xl bg-darkCard border border-white/5">
              <span className="font-outfit text-[9px] font-bold text-accentBlue uppercase tracking-widest">Problem Statement</span>
              <p className="font-sans text-sm text-slate-400 mt-2 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-darkCard border border-white/5">
              <span className="font-outfit text-[9px] font-bold text-accentPurple uppercase tracking-widest">Proposed Solution</span>
              <p className="font-sans text-sm text-slate-400 mt-2 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Core Functionalities Section */}
        <div className="space-y-10 pt-6">
          <h2 className="font-outfit text-3xl font-extrabold text-white text-center">
            Core Functionalities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feature, idx) => {
              const IconComponent = iconMap[feature.icon] || Code;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-darkCard border border-white/5 text-left flex flex-col justify-between gap-6 hover:border-white/10 hover:bg-darkCardHover transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 w-fit">
                    <IconComponent className={feature.iconColor} size={20} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-outfit text-base font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 text-left">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-outfit text-3xl font-extrabold text-white">
              Architecture
            </h2>
            <p className="font-sans text-sm text-slate-400 leading-relaxed">
              {project.architectureText}
            </p>
            <ul className="space-y-2 list-none p-0 m-0">
              {project.architectureBullets.map((bullet, idx) => (
                <li key={idx} className="font-outfit text-[10px] font-bold text-slate-500 tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accentPurple" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {/* tech badges row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.techBadges.map((badge, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-darkCard border border-white/5 text-center">
                  <span className="font-outfit text-[9px] font-semibold text-slate-500 uppercase tracking-widest">{badge.label}</span>
                  <span className="font-sans text-sm font-bold text-white mt-1 block">{badge.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Project Call To Action Banner */}
        <div
          onClick={() => onNavigate(nextProject.id)}
          className="rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-white/5 hover:border-white/10 p-12 text-center relative overflow-hidden group cursor-pointer shadow-2xl pt-20 pb-20 transition-all duration-300"
        >
          {/* Glowing backdrops inside banner */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accentBlue/5 to-accentPurple/5 opacity-50 transition-opacity group-hover:opacity-80" />
          
          <div className="relative z-10 space-y-4">
            <span className="font-outfit text-[10px] font-bold text-accentBlue uppercase tracking-widest block">Up Next</span>
            <h3 className="font-outfit text-4xl font-extrabold text-white group-hover:text-accentBlue transition-colors leading-[1.2]">
              {nextProject.title}
            </h3>
            <div className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-white/80 group-hover:text-white transition-colors">
              View Project
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
