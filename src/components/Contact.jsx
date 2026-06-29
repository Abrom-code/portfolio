import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setTimeout(() => {
        setForm({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-backdrop w-[500px] h-[500px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Card Container */}
        <div className="rounded-3xl bg-darkCard border border-white/5 p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2]">
                Let's Build Something Exceptional
              </h2>
              <p className="font-sans text-slate-400 leading-relaxed max-w-sm">
                Ready to turn your vision into a production-ready reality? Drop me a message and I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Direct contact items */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-accentBlue">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="font-sans text-xs text-slate-500 block">EMAIL ME</span>
                  <a href="mailto:gmikael1908@gmail.com" className="font-sans text-sm font-medium text-white hover:text-accentBlue transition-colors">
                    gmikael1908@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-accentPurple">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-sans text-xs text-slate-500 block">LOCATION</span>
                  <span className="font-sans text-sm font-medium text-white">
                    Addis Ababa, Ethiopia — Remote
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-accentBlue/20 rounded-2xl bg-accentBlue/5 space-y-3">
                <CheckCircle size={48} className="text-accentBlue animate-bounce" />
                <h3 className="font-outfit text-xl font-bold text-white">Message Sent!</h3>
                <p className="font-sans text-slate-400 max-w-xs">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-outfit text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-white/5 hover:border-white/10 focus:border-accentBlue focus:outline-none text-white font-sans text-sm transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-outfit text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-white/5 hover:border-white/10 focus:border-accentBlue focus:outline-none text-white font-sans text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="font-outfit text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-white/5 hover:border-white/10 focus:border-accentBlue focus:outline-none text-white font-sans text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accentIndigo hover:bg-accentIndigo/90 text-white font-semibold text-sm transition-colors shadow-lg shadow-accentIndigo/25"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
