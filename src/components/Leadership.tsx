import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { LEADERSHIP } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-400 font-mono text-xs tracking-wider uppercase mb-2">
            <Users className="w-3.5 h-3.5" />
            COMMUNITY & INITIATIVE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            LEADERSHIP & EXTRACURRICULARS
            <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/40 to-transparent max-w-xs" />
          </h2>
        </div>

        {/* Leadership Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-2xl border border-slate-800 hover:border-purple-500/40 hover:shadow-purple-glow transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Users className="w-48 h-48 text-purple-400" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">{LEADERSHIP.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mt-0.5">
                    <span className="font-semibold">{LEADERSHIP.role}</span>
                    <span>•</span>
                    <span>{LEADERSHIP.organization}</span>
                  </div>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 self-start sm:self-auto">
                {LEADERSHIP.period}
              </span>
            </div>

            <p className="text-slate-300 font-sans text-base leading-relaxed">
              {LEADERSHIP.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>Organized Flagship Event: 'Samyama'</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Hospitality & VIP Protocols</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>1000+ Audience Management</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
