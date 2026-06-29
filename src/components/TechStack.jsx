import React from 'react';
import { Smartphone, Monitor, Server, Cloud, Wrench, Check, Code2 } from 'lucide-react';

export default function TechStack() {
  const categories = [
    {
      title: 'Mobile',
      icon: <Smartphone className="text-accentBlue" size={20} />,
      skills: [
        { name: 'Flutter' },
      ],
    },
    {
      title: 'Web',
      icon: <Monitor className="text-accentPurple" size={20} />,
      skills: [
        { name: 'React' },
        { name: 'Tailwind CSS' },
        { name: 'HTML5 & CSS3' },
        { name: 'JavaScript' },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="text-indigo-400" size={20} />,
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'PHP' },
      ],
    },
    {
      title: 'Languages',
      icon: <Code2 className="text-yellow-400" size={20} />,
      skills: [
        { name: 'Python' },
        { name: 'C++' },
        { name: 'Java' },
        { name: 'JavaScript' },
      ],
    },
    {
      title: 'Cloud',
      icon: <Cloud className="text-pink-400" size={20} />,
      skills: [
        { name: 'Firebase' },
        { name: 'AWS' },
      ],
    },
    {
      title: 'Tools',
      icon: <Wrench className="text-emerald-400" size={20} />,
      skills: [
        { name: 'UI / UX' },
        { name: 'Git & GitHub' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Technical Stack
        </h2>
        <p className="font-sans text-slate-400 max-w-lg mx-auto mb-16">
          A selection of tools and technologies I use to build scalable products.
        </p>

        {/* Stack Cards Grid (6 items fit perfectly in a 3-column grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-darkCard border border-white/5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-darkCardHover group flex flex-col justify-between"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-outfit text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List as checkmarked bullets */}
                <ul className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2.5 text-sm text-slate-300 font-sans font-medium">
                      <Check size={14} className="text-accentBlue flex-shrink-0" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
