import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Terminal, Layers, Sparkles, Server, Flame, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'LANGUAGES': return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'WEB & FRAMEWORKS': return <Server className="w-4 h-4 text-purple-400" />;
      case 'AI / ML': return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'TOOLS & PLATFORMS': return <Wrench className="w-4 h-4 text-emerald-400" />;
      case 'CORE CS CONCEPTS': return <Layers className="w-4 h-4 text-blue-400" />;
      default: return <Terminal className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <Cpu className="w-3.5 h-3.5" />
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            TECH STACK
            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent max-w-xs" />
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-xl">
            Categorized technical toolkit spanning Machine Learning algorithms, full-stack frameworks, and core engineering principles.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-10">
          {SKILL_CATEGORIES.map((catGroup, idx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveCategoryIndex(idx)}
              onMouseLeave={() => setActiveCategoryIndex(null)}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono tracking-wider">{catGroup.category}</h3>
                </div>
                <span className="text-xs font-mono text-slate-500">{catGroup.skills.length} TECHNOLOGIES</span>
              </div>

              {/* Skills Chips Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {catGroup.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className={`group relative p-3 rounded-xl glass-card border transition-all duration-200 cursor-default flex flex-col justify-between ${
                      skill.featured
                        ? 'border-slate-700/80 hover:border-cyan-400/60 hover:shadow-cyan-glow bg-slate-900/60'
                        : 'border-slate-800/80 hover:border-purple-400/50 bg-slate-950/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      {skill.featured && (
                        <Flame className="w-3 h-3 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{skill.level}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
