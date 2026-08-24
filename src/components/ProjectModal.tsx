import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Code2, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl glass-card rounded-2xl border border-cyan-500/40 p-6 sm:p-8 shadow-cyan-glow bg-slate-950/95 z-10 my-8 overflow-hidden"
        >
          {/* Top Gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-8">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                {project.category.toUpperCase()}
              </span>
              {project.metrics && (
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-purple-950 text-purple-300 border border-purple-500/30">
                  {project.metrics}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{project.title}</h3>
            <p className="text-sm font-mono text-cyan-400">{project.subtitle}</p>
          </div>

          {/* Description */}
          <div className="my-6 text-slate-300 text-sm font-sans leading-relaxed border-t border-b border-slate-800 py-4">
            <p>{project.description}</p>
          </div>

          {/* Key Features Section */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Key Features & Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300 font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mb-8 space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4 text-purple-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-cyan-500/30 text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTA Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold shadow-cyan-glow hover:shadow-lg transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl glass-card border border-slate-700 text-slate-300 text-xs font-mono hover:text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
