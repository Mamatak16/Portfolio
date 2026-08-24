import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#A855F7', '#3B82F6']
        });
      } catch (err) {
        // Fallback
      }

      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Heading Box */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase">
            <Terminal className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            LET'S BUILD SOMETHING.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-sans">
            Have an idea, opportunity, or interesting problem to solve?
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold shadow-cyan-glow hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 font-mono text-xs font-semibold transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 font-mono text-xs font-semibold transition-all hover:scale-105"
            >
              <Github className="w-4 h-4 text-purple-400" /> GitHub
            </a>
          </div>
        </div>

        {/* Form and Direct Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Contact Details
              </h3>

              {/* Email Copier */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                    <div className="text-xs font-mono text-slate-200 truncate">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Phone</div>
                  <div className="text-xs font-mono text-slate-200">{PERSONAL_INFO.phone}</div>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-xs font-mono text-slate-200">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 relative">
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out, Mamata will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 hover:bg-slate-800"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white font-sans mb-4">Send a Direct Message</h3>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-200 text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors ${
                      errors.name ? 'border-rose-500/70' : 'border-slate-800'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-400 font-mono mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">YOUR EMAIL</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-200 text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors ${
                      errors.email ? 'border-rose-500/70' : 'border-slate-800'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-400 font-mono mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">MESSAGE</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Project details, inquiry, or conversation topic..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-200 text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors ${
                      errors.message ? 'border-rose-500/70' : 'border-slate-800'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-400 font-mono mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-mono text-sm font-semibold shadow-cyan-glow hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Transmitting...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
