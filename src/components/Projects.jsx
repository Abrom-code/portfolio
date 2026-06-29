import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects({ onViewAll, onViewDetail }) {
  const projects = [
    {
      id: 'matricmate',
      title: 'MatricMate',
      description: 'Comprehensive mobile learning platform that centralizes practice questions from Grades 9–12 for the Ethiopian Matric Examination.',
      tags: ['FLUTTER', 'SUPABASE', 'FIREBASE'],
      mockupType: 'mobile',
    },
    {
      id: 'eshetalehu',
      title: 'Eshetalehu',
      description: 'Marketplace application that connects buyers and sellers of used goods in a secure environment with real-time chat.',
      tags: ['FLUTTER', 'SUPABASE', 'FIREBASE'],
      mockupType: 'mobile',
    },
    {
      id: 'shop',
      title: 'Shop E-commerce',
      description: 'Flutter-based e-commerce application with fast product browsing, secure authentication, and cloud-based MongoDB sync.',
      tags: ['FLUTTER', 'MONGODB', 'FIREBASE'],
      mockupType: 'mobile',
    },
  ];

  const handleViewAllClick = (e) => {
    e.preventDefault();
    if (onViewAll) {
      onViewAll();
    }
  };

  const handleProjectClick = (projectId) => {
    if (onViewDetail) {
      onViewDetail(projectId);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16">
          <div className="text-left">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
              Selected Works
            </h2>
            <p className="font-sans text-slate-400 max-w-sm">
              Discover my latest mobile applications and product developments.
            </p>
          </div>
          <a
            href="#projects"
            onClick={handleViewAllClick}
            className="flex items-center gap-1.5 font-sans font-semibold text-sm text-accentBlue hover:text-white transition-colors group"
          >
            View all works
            <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group rounded-3xl bg-darkCard border border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:bg-darkCardHover cursor-pointer"
            >
              {/* Graphic Mockup Container */}
              <div className="h-64 md:h-72 bg-[#0E0F12] border-b border-white/5 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accentIndigo/5 to-accentPurple/5 opacity-50" />
                
                {/* Phone Mockup for mobile projects */}
                <div className="w-36 h-[240px] rounded-[24px] bg-darkBg border-[3px] border-white/10 p-2 shadow-2xl relative transform translate-y-6 group-hover:translate-y-3 group-hover:-rotate-2 transition-all duration-500">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-black rounded-full" />
                  <div className="h-full rounded-[18px] bg-darkCard/80 p-2 flex flex-col justify-between pt-4 overflow-hidden">
                    <div className="flex justify-between items-center mb-2">
                      <span className="w-4 h-4 rounded-full bg-accentBlue/20" />
                      <span className="w-8 h-2 rounded bg-white/10" />
                    </div>
                    
                    {/* Visual inner details mock */}
                    <div className="my-auto flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full border-2 border-accentBlue/20 border-t-accentBlue animate-spin-slow relative flex items-center justify-center" />
                      <div className="w-12 h-2 rounded bg-white/10" />
                    </div>

                    <div className="h-4 w-full rounded bg-accentIndigo" />
                  </div>
                </div>
              </div>

              {/* Text Description Box */}
              <div className="p-6 text-left space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex gap-1.5 flex-wrap">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-sans text-[8px] font-bold tracking-widest text-slate-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-outfit text-xl font-bold text-white group-hover:text-accentBlue transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transform translate-y-0.5 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>

                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
