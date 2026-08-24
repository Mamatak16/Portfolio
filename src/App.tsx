import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Interests } from './components/Interests';
import { Achievements } from './components/Achievements';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070E] text-slate-200 relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Background Interactive Ambient Grid & Canvas Particles */}
      <ParticleBackground />

      {/* Main Command Center Header */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Interests />
        <Achievements />
        <Leadership />
        <Contact />
      </main>

      {/* Command Center Footer */}
      <Footer />

      {/* Terminal Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default App;
