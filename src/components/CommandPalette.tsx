import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Cpu, User, Briefcase, Award, X } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { title: 'Go to Hero / Home', href: '#home', icon: <User className="w-4 h-4 text-cyan-400" /> },
    { title: 'Go to About Me & CGPA', href: '#about', icon: <User className="w-4 h-4 text-purple-400" /> },
    { title: 'View Experience & Internships', href: '#experience', icon: <Briefcase className="w-4 h-4 text-cyan-400" /> },
    { title: 'View Featured Projects', href: '#projects', icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { title: 'Explore Tech Stack', href: '#skills', icon: <Cpu className="w-4 h-4 text-purple-400" /> },
    { title: 'Explore Research Areas & Neural Net', href: '#research', icon: <Terminal className="w-4 h-4 text-indigo-400" /> },
    { title: 'View Achievements & NCC Grade A', href: '#achievements', icon: <Award className="w-4 h-4 text-amber-400" /> },
    { title: 'Contact Mamata (Email & Phone)', href: '#contact', icon: <Mail className="w-4 h-4 text-emerald-400" /> },
    { title: 'Open GitHub Profile', external: PERSONAL_INFO.github, icon: <Github className="w-4 h-4 text-cyan-400" /> },
    { title: 'Open LinkedIn Profile', external: PERSONAL_INFO.linkedin, icon: <Linkedin className="w-4 h-4 text-blue-400" /> },
  ];

  const filteredActions = actions.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = PROJECTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tech.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSelect = (item: any) => {
    if (item.href) {
      window.location.href = item.href;
    } else if (item.external) {
      window.open(item.external, '_blank');
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl glass-card rounded-2xl border border-cyan-500/40 shadow-cyan-glow bg-slate-950/95 overflow-hidden z-10"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-3 border-b border-slate-800">
            <Search className="w-4 h-4 text-cyan-400 mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, skills, sections, or links (ESC to exit)..."
              className="w-full bg-transparent text-sm text-slate-200 font-mono placeholder:text-slate-500 focus:outline-none"
            />
            <button onClick={onClose} className="p-1 text-slate-500 hover:text-slate-300">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredActions.length > 0 && (
              <div>
                <div className="px-3 py-1 text-[10px] font-mono text-slate-500 uppercase">Navigation Commands</div>
                {filteredActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(action)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-900 text-left text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      {action.icon}
                      <span>{action.title}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </button>
                ))}
              </div>
            )}

            {filteredProjects.length > 0 && (
              <div className="pt-2">
                <div className="px-3 py-1 text-[10px] font-mono text-slate-500 uppercase">Projects Match</div>
                {filteredProjects.map((p) => (
                  <a
                    key={p.id}
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-900 text-left text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-purple-400" />
                      <div>
                        <div className="font-bold text-white">{p.title}</div>
                        <div className="text-[10px] text-slate-400">{p.subtitle}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>COMMAND_CENTER v1.0</span>
            <span>Use ↑↓ to navigate, ENTER to execute</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
