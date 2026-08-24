import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Sparkles, Code2, Bot, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-cyan-glow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-400">{PERSONAL_INFO.status}</span>
            </div>

            {/* Small Badge above heading */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                {PERSONAL_INFO.badgeText}
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Building{' '}
                <span className="gradient-text-ai font-extrabold drop-shadow-sm">
                  intelligent systems
                </span>
                ,<br />
                one project at a time.
              </h1>
            </div>

            {/* Subheading / Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-sans leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Keyword Pills */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              {['Agentic AI', 'Generative AI', 'Graph Neural Networks', 'Quantum ML', 'MERN Stack'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300 hover:border-cyan-500/40 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-sm font-semibold shadow-cyan-glow hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card hover:bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-cyan-400 font-mono text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Institution Badge */}
            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-300">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>RV Institute of Technology and Management, Bengaluru</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-semibold">CGPA {PERSONAL_INFO.education.cgpa}</span>
            </div>
          </motion.div>

          {/* Right Column - Futuristic AI Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
