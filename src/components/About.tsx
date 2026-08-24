import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, MapPin, Briefcase, Code, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-400 font-mono text-xs tracking-wider uppercase mb-2">
            <Terminal className="w-3.5 h-3.5" />
            BACKGROUND & PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            ABOUT ME
            <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/40 to-transparent max-w-xs" />
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <GraduationCap className="w-44 h-44 text-cyan-400" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-cyan-400">{PERSONAL_INFO.education.institution}</p>
                </div>
              </div>

              <p className="text-slate-300 font-sans text-base leading-relaxed">
                {PERSONAL_INFO.aboutText}
              </p>

              {/* Detail Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>{PERSONAL_INFO.education.degree}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>CGPA: <strong className="text-emerald-400 font-bold">{PERSONAL_INFO.education.cgpa}</strong></span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Batch: <strong className="text-cyan-400 font-bold">{PERSONAL_INFO.education.period}</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Focus: AI Engineering & Agentic Systems
              </span>
              <span className="text-cyan-400">&gt; Status: Ready to impact</span>
            </div>
          </motion.div>

          {/* Right Column: Animated Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-cyan-glow transition-all duration-300 group"
              >
                <div className="flex items-center justify-between text-slate-500 group-hover:text-cyan-400 transition-colors">
                  {index === 0 && <Award className="w-6 h-6" />}
                  {index === 1 && <Briefcase className="w-6 h-6" />}
                  {index === 2 && <Code className="w-6 h-6" />}
                  {index === 3 && <GraduationCap className="w-6 h-6" />}
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">METRIC_{index+1}</span>
                </div>

                <div className="my-4">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono group-hover:text-cyan-300 transition-colors flex items-baseline gap-1">
                    {stat.value}
                    <span className="text-xs font-sans text-slate-400 font-normal">{stat.sub}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>

                <div className="w-full bg-slate-800/60 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full rounded-full transition-all duration-1000 group-hover:w-full"
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
