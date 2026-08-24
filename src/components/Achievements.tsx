import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, ChevronDown, CheckCircle, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'achievements' | 'certifications'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('ncc-c');

  const items = [
    ...ACHIEVEMENTS,
    ...CERTIFICATIONS
  ];

  const filteredItems = activeTab === 'all'
    ? items
    : items.filter(i => i.type === (activeTab === 'achievements' ? 'achievement' : 'certification'));

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
              <Award className="w-3.5 h-3.5" />
              HONORS & CREDENTIALS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              ACHIEVEMENTS & CERTIFICATIONS
              <div className="h-[1px] w-24 bg-gradient-to-r from-cyan-500/40 to-transparent hidden sm:block" />
            </h2>
            <p className="text-slate-400 text-sm font-sans mt-2 max-w-xl">
              Verified certifications, national honors, and competitive hackathon credentials.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Credentials' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'certifications', label: 'Certifications' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Expandable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item, index) => {
            const isExpanded = expandedId === item.id;
            const isAchievement = item.type === 'achievement';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'border-cyan-500/50 shadow-cyan-glow bg-slate-900/90'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isAchievement
                        ? 'bg-purple-950/80 text-purple-400 border border-purple-500/30'
                        : 'bg-cyan-950/80 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {isAchievement ? <Award className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        {item.issuer || (isAchievement ? 'National Honor' : 'Professional Cert')}
                      </span>
                      <h3 className="text-base font-bold text-white font-sans mt-0.5 leading-snug">{item.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`} />
                  </div>
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-slate-800/80 space-y-3"
                    >
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> VERIFIED CREDENTIAL
                        </span>
                        <span className="text-purple-300 font-semibold">{item.badge}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
