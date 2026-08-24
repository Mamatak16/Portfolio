import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Sparkles, Layers, Cpu, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'aiml', label: 'AI & ML' },
    { id: 'agentic', label: 'Agentic AI' },
    { id: 'research', label: 'Research & GNN' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-400 font-mono text-xs tracking-wider uppercase mb-2">
              <Code2 className="w-3.5 h-3.5" />
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              FEATURED PROJECTS
              <div className="h-[1px] w-24 bg-gradient-to-r from-purple-500/40 to-transparent hidden sm:block" />
            </h2>
            <p className="text-slate-400 text-sm font-sans mt-2 max-w-xl">
              Engineered solutions across full-stack web platforms, predictive machine learning, and autonomous agent systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-glow hover:-translate-y-1 ${
                  isFeatured ? 'lg:col-span-12 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border-cyan-500/30' : 'lg:col-span-6'
                }`}
              >
                {/* Glowing Corner Badge for Featured */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500 text-slate-950 shadow-cyan-glow uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> STAR PROJECT
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 opacity-80">
                      0{index + 1} // {project.category.toUpperCase()}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {project.metrics || 'ENGINEERED SYSTEM'}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1 mb-4">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlighted Project Features Grid */}
                  {isFeatured && project.features && (
                    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-800">
                      {project.features.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-sans text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions & Tech Stack */}
                <div className="pt-6 border-t border-slate-800/80 space-y-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-cyan-500/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline font-semibold"
                    >
                      <Eye className="w-4 h-4" />
                      View Details & Architecture
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 text-xs font-mono text-slate-200 hover:text-cyan-300 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
