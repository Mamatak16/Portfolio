import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [hoveredExpId, setHoveredExpId] = useState<string | null>(null);
  const [hoveredTechTag, setHoveredTechTag] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            EXPERIENCE
            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent max-w-xs" />
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-xl">
            Hands-on technical internships spanning Agentic AI, Generative AI, Machine Learning, and Predictive Pipelines.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {/* Animated Glow Line on Vertical Axis */}
          <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent pointer-events-none opacity-60" />

          {EXPERIENCES.map((exp, index) => {
            const isHovered = hoveredExpId === exp.id;
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredExpId(exp.id)}
                onMouseLeave={() => setHoveredExpId(null)}
                className={`relative group glass-card p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isHovered
                    ? 'border-cyan-500/50 bg-slate-900/90 shadow-cyan-glow translate-x-1'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Timeline Point Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-8 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isHovered
                      ? 'bg-cyan-500 border-white shadow-[0_0_15px_#00f0ff]'
                      : 'bg-slate-950 border-cyan-500/60'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-slate-950' : 'bg-cyan-400'}`} />
                </div>

                {/* Role & Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-sans">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="my-5 space-y-2.5 text-sm text-slate-300 font-sans leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" /> Stack:
                  </span>
                  {exp.technologies.map((tech) => {
                    const isTagHighlighted = isHovered || hoveredTechTag === tech;
                    return (
                      <span
                        key={tech}
                        onMouseEnter={() => setHoveredTechTag(tech)}
                        onMouseLeave={() => setHoveredTechTag(null)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 cursor-default ${
                          isTagHighlighted
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm scale-105'
                            : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
