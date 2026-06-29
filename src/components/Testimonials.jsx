import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Yohannes Kebede',
      role: 'Lead Organizer at GDG Addis',
      initials: 'YK',
      quote:
        'Abrham is an outstanding engineer and a proactive community contributor. His workshops on Flutter and clean application architecture have inspired countless developers in our Google Developer Group.',
      color: 'from-accentBlue to-indigo-500',
    },
    {
      name: 'Rediet Belay',
      role: 'AWS Club Lead at AASTU',
      initials: 'RB',
      quote:
        'Working alongside Abrham on distributed cloud applications has been incredible. His skills in scaling serverless systems and designing secure backend APIs with Node.js and AWS are exceptional.',
      color: 'from-accentPurple to-pink-500',
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Client Success
        </h2>
        <p className="font-sans text-slate-400 max-w-md mx-auto mb-16">
          Hear from some of the amazing teams and clients I have worked with.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-darkCard border border-white/5 text-left flex flex-col justify-between gap-8 relative hover:border-white/10 hover:bg-darkCardHover transition-all duration-300"
            >
              {/* Quote Mark Icon */}
              <Quote className="absolute right-8 top-8 text-white/5 w-16 h-16 pointer-events-none" />

              {/* Text Quote */}
              <p className="font-sans text-base text-slate-300 leading-relaxed italic relative z-10">
                "{rev.quote}"
              </p>

              {/* Client Info Block */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                {/* Initials Avatar */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-outfit text-sm font-bold text-white bg-gradient-to-tr ${rev.color}`}
                >
                  {rev.initials}
                </div>
                
                {/* Text details */}
                <div className="text-left">
                  <h4 className="font-outfit text-sm font-bold text-white">{rev.name}</h4>
                  <p className="font-sans text-xs text-slate-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
