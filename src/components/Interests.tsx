import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Sparkles, Cpu, Shield, Atom, Share2, ArrowUpRight, Zap } from 'lucide-react';
import { INTEREST_NODES } from '../data/portfolioData';

export const Interests: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('agentic');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeNode = INTEREST_NODES.find(n => n.id === (hoveredNodeId || selectedNodeId)) || INTEREST_NODES[0];

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Core AI': return 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40';
      case 'Modern AI': return 'border-purple-500/40 text-purple-400 bg-purple-950/40';
      case 'Advanced Research': return 'border-indigo-500/40 text-indigo-300 bg-indigo-950/40';
      case 'Frontier Tech': return 'border-pink-500/40 text-pink-400 bg-pink-950/40';
      default: return 'border-blue-500/40 text-blue-400 bg-blue-950/40';
    }
  };

  return (
    <section id="research" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-400 font-mono text-xs tracking-wider uppercase mb-2">
            <Network className="w-3.5 h-3.5" />
            RESEARCH & FRONTIER DOMAINS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            AREAS I'M EXPLORING
            <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/40 to-transparent max-w-xs" />
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-xl">
            Interactive neural network graph of technical domains I actively research and build solutions within.
          </p>
        </div>

        {/* Interactive Neural Network Map & Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Graph Node Matrix (8 Cols) */}
          <div className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-3 right-4 text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>INTERACTIVE_GRAPH_NODES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {INTEREST_NODES.map((node) => {
                const isSelected = node.id === activeNode.id;
                const isConnected = activeNode.connections.includes(node.id);

                return (
                  <motion.div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    whileHover={{ scale: 1.03 }}
                    className={`p-4 rounded-xl glass-card border cursor-pointer transition-all duration-300 relative ${
                      isSelected
                        ? 'border-cyan-400 bg-slate-900 shadow-cyan-glow'
                        : isConnected
                        ? 'border-purple-500/50 bg-slate-900/80 shadow-purple-glow'
                        : 'border-slate-800/80 hover:border-slate-700 bg-slate-950/40 opacity-75'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getCategoryColor(node.category)}`}>
                        {node.category}
                      </span>
                      {isSelected && <Zap className="w-3.5 h-3.5 text-cyan-400" />}
                    </div>

                    <h4 className="text-base font-bold text-white font-sans">{node.title}</h4>
                    
                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{node.connections.length} Neural Links</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-cyan-400 translate-x-0.5 -translate-y-0.5' : 'text-slate-600'}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Node Detail Inspector (4 Cols) */}
          <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-cyan-500/30 shadow-cyan-glow space-y-5 bg-slate-950/90 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                <Share2 className="w-4 h-4" />
                NODE_INSPECTOR
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                ID: {activeNode.id}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white font-sans">{activeNode.title}</h3>
              <p className="text-xs font-mono text-purple-400 mt-1">{activeNode.category}</p>
            </div>

            <p className="text-sm font-sans text-slate-300 leading-relaxed">
              {activeNode.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">Key Technologies & Concepts</div>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Linked Domains:</span>
              <span className="text-purple-300">{activeNode.connections.join(', ')}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
