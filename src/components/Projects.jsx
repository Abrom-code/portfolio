import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import projectsData from '../data/projects.json';

export default function Projects({ onViewAll, onViewDetail }) {
  const projects = projectsData.filter(project => project.homeFeatured);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 sm:mb-16">
          <div className="text-left">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-textPrimary tracking-tight mb-2">
              Selected Works
            </h2>
            <p className="font-sans text-textMuted max-w-sm">
              Discover my latest applications and product developments.
            </p>
          </div>
          <a
            href="#projects"
            onClick={handleViewAllClick}
            className="flex items-center gap-1.5 font-sans font-semibold text-sm text-accentBlue hover:text-textPrimary transition-colors group"
          >
            View all works
            <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group rounded-3xl bg-darkCard border border-customBorder overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-customBorderHover hover:bg-darkCardHover cursor-pointer shadow-sm"
            >
              {/* Graphic Mockup Container */}
              <div className="h-64 md:h-72 bg-black/5 dark:bg-[#0E0F12] border-b border-customBorder flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accentIndigo/5 to-accentPurple/5 opacity-50" />
                
                {project.mockupType === 'mobile' ? (
                  /* Phone Mockup */
                  <div className="w-32 h-[210px] rounded-[24px] bg-darkBg border-[3px] border-customBorderHover p-2 shadow-2xl relative transform translate-y-6 group-hover:translate-y-3 group-hover:-rotate-2 transition-all duration-500">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full animate-pulse-slow" />
                    <div className="h-full rounded-[18px] bg-darkCard p-2 flex flex-col justify-between pt-3 overflow-hidden">
                      <div className="flex justify-between items-center mb-1">
                        <span className="w-3 h-3 rounded-full bg-accentBlue/20" />
                        <span className="w-6 h-1.5 rounded bg-black/10 dark:bg-white/10" />
                      </div>
                      
                      {/* Visual inner details mock */}
                      <div className="my-auto flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-full border-2 border-accentBlue/20 border-t-accentBlue animate-spin-slow" />
                      </div>

                      <div className="h-3 w-full rounded bg-accentIndigo" />
                    </div>
                  </div>
                ) : (
                  /* Desktop Browser Mockup */
                  <div className="w-56 h-[170px] rounded-xl bg-darkBg border-[3px] border-customBorderHover p-1.5 shadow-2xl relative transform translate-y-6 group-hover:translate-y-3 group-hover:rotate-1 transition-all duration-500">
                    {/* Browser top bar */}
                    <div className="flex gap-1 border-b border-customBorder pb-1 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/10" />
                      <span className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/10" />
                      <span className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/10" />
                    </div>
                    {/* Browser client area mock */}
                    <div className="h-[125px] rounded-md bg-darkCard p-2 flex flex-col justify-between overflow-hidden">
                      <div className="flex justify-between items-center mb-1">
                        <span className="w-12 h-2.5 rounded bg-black/10 dark:bg-white/10" />
                        <span className="w-4 h-4 rounded-full bg-accentPurple/25" />
                      </div>
                      <div className="space-y-1.5 my-auto">
                        <div className="w-full h-2 rounded bg-black/5 dark:bg-white/5" />
                        <div className="w-4/5 h-2 rounded bg-black/5 dark:bg-white/5" />
                        <div className="w-3/5 h-2 rounded bg-black/5 dark:bg-white/5" />
                      </div>
                      <div className="h-3 w-16 rounded bg-accentPurple" />
                    </div>
                  </div>
                )}
              </div>

              {/* Text Description Box */}
              <div className="p-6 text-left space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex gap-1.5 flex-wrap">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-sans text-[8px] font-bold tracking-widest text-textMuted bg-black/5 dark:bg-white/5 border border-customBorder px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-outfit text-xl font-bold text-textPrimary group-hover:text-accentBlue transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transform translate-y-0.5 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>

                  <p className="font-sans text-xs text-textMuted leading-relaxed line-clamp-3">
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
