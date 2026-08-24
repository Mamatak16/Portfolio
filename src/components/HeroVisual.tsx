import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Sparkles, Activity, Layers, Database } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);

  const snippets = [
    { label: "AGENT_CORE", code: "langchain.agent.run(task='schedule')", status: "EXECUTING" },
    { label: "MODEL_INFERENCE", code: "scikit.predict(cutoff_ranks)", status: "OPTIMAL" },
    { label: "GNN_GRAPH", code: "pyg.nn.GCNConv(in=128, out=64)", status: "EMBEDDING" },
    { label: "QUANTUM_CIRCUIT", code: "vqc.evaluate_kernel(state='|ψ⟩')", status: "CONVERGED" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSnippetIndex((prev) => (prev + 1) % snippets.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = 460);
    let height = (canvas.height = 460);

    // Neural Network Nodes Configuration
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      label: string;
      color: string;
      pulsePhase: number;
    }> = [
      { x: 230, y: 230, vx: 0, vy: 0, radius: 10, label: "AI_CORE", color: "#00F0FF", pulsePhase: 0 },
      { x: 120, y: 120, vx: 0.2, vy: 0.1, radius: 5, label: "LangChain", color: "#A855F7", pulsePhase: 1 },
      { x: 340, y: 130, vx: -0.1, vy: 0.2, radius: 5, label: "PyTorch", color: "#3B82F6", pulsePhase: 2 },
      { x: 350, y: 320, vx: -0.2, vy: -0.1, radius: 6, label: "MERN", color: "#00F0FF", pulsePhase: 3 },
      { x: 130, y: 330, vx: 0.15, vy: -0.2, radius: 5, label: "Scikit-Learn", color: "#A855F7", pulsePhase: 4 },
      { x: 230, y: 90, vx: -0.1, vy: 0.1, radius: 4, label: "GNN", color: "#60A5FA", pulsePhase: 2.5 },
      { x: 380, y: 220, vx: -0.15, vy: -0.1, radius: 4, label: "MongoDB", color: "#34D399", pulsePhase: 1.5 },
      { x: 90, y: 220, vx: 0.1, vy: 0.15, radius: 4, label: "FastAPI", color: "#F472B6", pulsePhase: 3.5 },
      { x: 230, y: 370, vx: 0.1, vy: -0.15, radius: 4, label: "Agentic AI", color: "#00F0FF", pulsePhase: 0.5 }
    ];

    // Data Packets moving along network lines
    const packets: Array<{
      from: number;
      to: number;
      progress: number;
      speed: number;
      color: string;
    }> = [];

    const createPacket = () => {
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) to = Math.floor(Math.random() * nodes.length);
      packets.push({
        from,
        to,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        color: Math.random() > 0.5 ? '#00F0FF' : '#A855F7'
      });
    };

    for (let i = 0; i < 6; i++) createPacket();

    let mousePos = { x: 230, y: 230 };

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleCanvasMouseMove);

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.03;

      // Draw outer glowing orbital rings around central node
      ctx.save();
      ctx.translate(230, 230);

      // Ring 1
      ctx.beginPath();
      ctx.arc(0, 0, 160, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.07)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 10]);
      ctx.stroke();

      // Ring 2 (Rotating reverse)
      ctx.rotate(-tick * 0.3);
      ctx.beginPath();
      ctx.arc(0, 0, 110, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([12, 16]);
      ctx.stroke();

      // Core pulse ring
      const corePulse = Math.sin(tick * 2) * 5 + 30;
      ctx.beginPath();
      ctx.arc(0, 0, corePulse, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();

      // Draw Connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.22;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = i === 0 || j === 0 ? 'rgba(0, 240, 255, ' + alpha + ')' : 'rgba(168, 85, 247, ' + (alpha * 0.8) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw Data Packets along connections
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          packets.splice(i, 1);
          createPacket();
          continue;
        }

        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        const px = n1.x + (n2.x - n1.x) * p.progress;
        const py = n1.y + (n2.y - n1.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update and Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (i !== 0) {
          n.x += n.vx;
          n.y += n.vy;

          // Tether to initial bounds
          if (n.x < 60 || n.x > 400) n.vx *= -1;
          if (n.y < 60 || n.y > 400) n.vy *= -1;
        }

        // Draw node pulse glow
        const nodePulse = Math.sin(tick * 3 + n.pulsePhase) * 2 + n.radius;

        ctx.beginPath();
        ctx.arc(n.x, n.y, nodePulse + 4, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.15;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, nodePulse, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.85;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Label text for outer nodes
        if (i > 0 && i < 6) {
          ctx.font = '10px "Fira Code", monospace';
          ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
          ctx.fillText(n.label, n.x + 10, n.y + 3);
        }
      }

      // Mouse interactive line to nearest node
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const mdx = n.x - mousePos.x;
        const mdy = n.y - mousePos.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 100) {
          ctx.beginPath();
          ctx.moveTo(mousePos.x, mousePos.y);
          ctx.lineTo(n.x, n.y);
          ctx.strokeStyle = '#00F0FF';
          ctx.globalAlpha = (1 - mdist / 100) * 0.4;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      canvas.removeEventListener('mousemove', handleCanvasMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const currentSnippet = snippets[activeSnippetIndex];

  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center">
      {/* Outer Hexagon / Circle HUD Frame */}
      <div className="absolute inset-0 rounded-3xl glass-card border border-cyan-500/20 shadow-cyan-glow overflow-hidden flex items-center justify-center">
        {/* Radar Line Sweep effect */}
        <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,240,255,0.06)_360deg)] animate-spin-slow pointer-events-none" />

        {/* Interactive Neural Canvas */}
        <canvas ref={canvasRef} className="relative z-10 block cursor-crosshair" />

        {/* HUD Overlay Top Left */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md text-xs font-mono text-cyan-400">
          <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>AI_CORE::SYSTEM_ACTIVE</span>
        </div>

        {/* HUD Overlay Top Right */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/30 text-xs font-mono text-purple-300">
          <Activity className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>FPS: 60 • LATENCY: 2ms</span>
        </div>

        {/* Floating Interactive Live Code Snippet Display */}
        <motion.div
          key={activeSnippetIndex}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-4 left-4 right-4 z-20 glass-card p-3 rounded-xl border border-cyan-500/30 shadow-lg font-mono text-xs text-slate-300 bg-slate-950/90"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-1.5">
            <span className="text-[11px] text-cyan-400 font-semibold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              {currentSnippet.label}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
              {currentSnippet.status}
            </span>
          </div>
          <p className="text-slate-200 truncate text-[11px] font-mono">
            <span className="text-purple-400">&gt; </span>
            {currentSnippet.code}
          </p>
        </motion.div>

        {/* Bottom Corner Ambient Chips */}
        <div className="absolute bottom-20 left-4 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/60 text-[10px] font-mono text-slate-400 border border-slate-800">
          <Layers className="w-3 h-3 text-cyan-400" /> GNN Embeddings
        </div>
        <div className="absolute bottom-20 right-4 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/60 text-[10px] font-mono text-slate-400 border border-slate-800">
          <Database className="w-3 h-3 text-purple-400" /> MERN Active
        </div>
      </div>
    </div>
  );
};
