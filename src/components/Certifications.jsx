import React from 'react';
import { Award, ExternalLink, Building2, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'BunaScript Programming Language Certification',
      organization: 'Debre Markos University & Kekros American University',
      status: 'Certified',
      focus: 'Amharic-based JavaScript Programming Language',
      description:
        'Successfully completed the BunaScript Programming Language certification program. BunaScript is an Amharic-based programming language inspired by JavaScript, designed to make programming more accessible to Amharic speakers. The course covered programming fundamentals, variables, functions, control flow, objects, arrays, DOM manipulation, and modern software development concepts using BunaScript.',
      skills: [
        'BunaScript (Amharic-based JS)',
        'Programming Fundamentals',
        'Problem Solving',
        'Functions & Objects',
        'DOM Manipulation',
        'Algorithmic Thinking',
      ],
      link: 'https://drive.google.com/file/d/1Yfwh6g-WCKbYW8VbkVFf_kqj7b45-GqL/view?usp=sharing',
      iconColor: 'text-accentBlue',
      iconBg: 'bg-accentBlue/10',
    },
    {
      title: 'GDG React Development Course',
      organization: 'Google Developer Groups (GDG)',
      status: 'Certified',
      focus: 'Modern Frontend & Component-Based Architectures',
      description:
        'Completed the React Development Course organized by Google Developer Groups (GDG), gaining practical experience in building modern, responsive, and component-based web applications using React.',
      skills: [
        'React.js',
        'Components & Props',
        'State Management',
        'Hooks',
        'Routing',
        'Responsive UI Development',
        'Modern JavaScript (ES6+)',
      ],
      link: 'https://drive.google.com/file/d/1x-aSzKiQVvze6NVh0P85eH9tWe5cvVIT/view',
      iconColor: 'text-accentPurple',
      iconBg: 'bg-accentPurple/10',
    },
    {
      title: 'AWS SBG Core Team Member Badge',
      organization: 'Amazon Web Services (AWS Community)',
      status: 'Certified',
      focus: 'Student Builder Group Leadership & Community',
      description:
        'Official recognition as an AWS Student Builder Group Core Team member. As a core team member, contributed to building and developing the AWS Student Builder Group on campus — organizing events, driving student engagement, and fostering a community around cloud computing and AWS technologies.',
      skills: [
        'Community Building',
        'Organization and Leadership',
        'Student Engagement',
      ],
      link: 'https://www.credly.com/badges/7c499738-4cf8-46fe-a7c9-c72e67d9d9da/linked_in_profile',
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-400/10',
      credentialId: '7c499738-4cf8-46fe-a7c9-c72e67d9d9da',
      issuedDate: 'Jul 2026',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-backdrop w-[500px] h-[500px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Certifications
          </h2>
          <p className="font-sans text-slate-400 max-w-lg mx-auto">
            Academic and professional milestones validating my engineering and architectural capabilities.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-darkCard border border-white/5 text-left flex flex-col justify-between hover:border-white/10 hover:bg-darkCardHover transition-all duration-300 hover:-translate-y-1 shadow-xl group relative overflow-hidden"
            >
              {/* Top gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl ${cert.iconBg} ${cert.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                      <Award size={22} />
                    </div>
                    <div>
                      <h3 className="font-outfit text-xl font-bold text-white group-hover:text-accentBlue transition-colors line-clamp-1">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1 font-sans text-xs text-slate-400">
                        <Building2 size={12} className="text-slate-500" />
                        <span>{cert.organization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-400 tracking-wider uppercase">
                    <CheckCircle2 size={10} className="text-emerald-400" />
                    {cert.status}
                  </span>
                </div>

                {/* Focus Area banner */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-outfit text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Focus Area</span>
                  <span className="font-sans text-xs font-semibold text-white mt-1 block">
                    {cert.focus}
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills gained */}
                <div className="space-y-2 pt-2">
                  <span className="font-outfit text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Skills Gained</span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-outfit text-[9px] font-bold text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  {cert.issuedDate && (
                    <span className="font-sans text-[10px] text-slate-500">
                      Issued: <span className="text-slate-400">{cert.issuedDate}</span>
                    </span>
                  )}
                  {cert.credentialId && (
                    <span className="font-sans text-[9px] text-slate-600 truncate max-w-[180px]">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  View Credential
                  <ExternalLink size={12} className={cert.iconColor} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
