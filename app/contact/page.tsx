'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, MessageCircle, Phone, Send, Sparkles } from 'lucide-react';
import { track } from '@/components/analytics';

function AutomateVisionLogo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="avGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066ff" />
          <stop offset="100%" stopColor="#0033cc" />
        </linearGradient>
        <linearGradient id="avGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d9ff" />
          <stop offset="100%" stopColor="#0066ff" />
        </linearGradient>
      </defs>
      <path d="M 45 12 L 15 85 L 32 85 L 53 32 L 68 85 L 85 85 L 45 12 Z" fill="url(#avGrad1)" />
      <path d="M 50 38 L 68 85 L 82 85 L 60 36 L 50 38 Z" fill="url(#avGrad2)" />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI AGENTS',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    track('contact_form_submitted', { service: form.service });
    setSubmitted(true);
  };

  return (
    <div className="noise-bg min-h-screen bg-[#050505] text-white">
      {/* Header Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3.5">
            <AutomateVisionLogo className="h-9 w-9 shrink-0 drop-shadow-[0_0_15px_rgba(0,102,255,0.7)]" />
            <div className="flex flex-col">
              <span className="font-mono text-xs font-extrabold tracking-[0.24em] text-white">
                AUTOMATE<span className="text-cyan-400"> VISION</span>
              </span>
              <span className="font-mono text-[8px] tracking-[0.16em] text-zinc-400">
                AI AUTOMATION & DIGITAL SOLUTIONS
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-zinc-400 transition-colors hover:border-cyan-400/50 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            BACK TO HOME
          </Link>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.24em] text-cyan-400">
              <span className="h-px w-8 bg-cyan-400" />
              AUTOMATE VISION // CONTACT US
            </div>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl">
              LET&apos;S BUILD YOUR <br />
              <span className="text-gradient-accent">INTELLIGENT SYSTEM</span>.
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-400">
              Have an enterprise project, automation pipeline, or AI web app in mind? Get in touch directly with our leadership team.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            {/* Direct Contact Info & Founders */}
            <div className="space-y-8">
              {/* Dev Solanki Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-cyan-500/40">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-400">
                    DS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">DEV SOLANKI</h3>
                    <p className="font-mono text-xs text-cyan-400">FOUNDER & CEO</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-6 text-zinc-400">
                  AI Systems Architecture, LLM Reasoning, Full-Stack AI Web Engineering & Autonomous Agents.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-zinc-300">
                  <a href="tel:+919313220796" className="flex items-center gap-2 hover:text-cyan-400">
                    <Phone className="h-3.5 w-3.5 text-cyan-400" /> +91 9313220796
                  </a>
                  <a href="https://wa.me/919313220796" className="flex items-center gap-2 hover:text-cyan-400">
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-400" /> WHATSAPP
                  </a>
                </div>
              </div>

              {/* Het Vekariya Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-cyan-500/40">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-400">
                    HV
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">HET VEKARIYA</h3>
                    <p className="font-mono text-xs text-cyan-400">FOUNDER & CEO</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-6 text-zinc-400">
                  Business Process Automation, Client Operations & Digital Solutions Strategy.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-zinc-300">
                  <a href="tel:+919712945544" className="flex items-center gap-2 hover:text-cyan-400">
                    <Phone className="h-3.5 w-3.5 text-cyan-400" /> +91 9712945544
                  </a>
                  <a href="https://wa.me/919712945544" className="flex items-center gap-2 hover:text-cyan-400">
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-400" /> WHATSAPP
                  </a>
                </div>
              </div>

              {/* General Email & Location */}
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-6 font-mono text-xs space-y-3">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Mail className="h-4 w-4 shrink-0 text-cyan-400" />
                  <a href="mailto:automatevision06@gmail.com" className="hover:underline">
                    AUTOMATEVISION06@GMAIL.COM
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Sparkles className="h-4 w-4 shrink-0 text-cyan-400" />
                  <span>LOCATION: INDIA (GLOBAL REMOTE)</span>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-[#090b0c] p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-cyan-400" />
                  <h2 className="mt-6 text-3xl font-bold text-white">MESSAGE RECEIVED</h2>
                  <p className="mt-3 text-sm text-zinc-400">
                    Thank you for reaching out! DEV SOLANKI & HET VEKARIYA will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-white/15 px-6 py-2.5 font-mono text-xs text-white hover:border-cyan-400 hover:text-cyan-400"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">SEND A DIRECT INQUIRY</h2>
                  
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.18em] text-zinc-400 mb-2">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] tracking-[0.18em] text-zinc-400 mb-2">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] tracking-[0.18em] text-zinc-400 mb-2">PHONE / WHATSAPP</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.18em] text-zinc-400 mb-2">PRIMARY SERVICE INTEREST</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#0c1012] px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    >
                      <option value="AI AGENTS">AI AGENTS</option>
                      <option value="AI RECEPTIONISTS">AI RECEPTIONISTS</option>
                      <option value="AI CHATBOTS">AI CHATBOTS</option>
                      <option value="WEBSITES + AI">WEBSITES + AI</option>
                      <option value="BUSINESS AUTOMATION">BUSINESS AUTOMATION</option>
                      <option value="WHATSAPP AUTOMATION">WHATSAPP & SOCIAL AUTOMATION</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.18em] text-zinc-400 mb-2">PROJECT DETAILS *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business workflow, technical requirements, or timeline..."
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-mono text-xs font-bold tracking-[0.18em] text-black transition-all hover:bg-cyan-400 hover:text-black"
                  >
                    SUBMIT INQUIRY
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-xs font-extrabold tracking-[0.24em] text-white">
            AUTOMATE<span className="text-cyan-400"> VISION</span>
          </div>
          <div className="font-mono text-[9px] tracking-[0.14em] text-zinc-500">
            © 2026 AUTOMATE VISION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
