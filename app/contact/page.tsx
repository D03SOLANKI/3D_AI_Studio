'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Mail, MessageCircle, Phone, Send, Sparkles } from 'lucide-react';
import { HeroAiCanvas } from '@/components/hero-ai-canvas';
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
    <div className="noise-bg min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3.5 group outline-none">
            <AutomateVisionLogo className="h-9 w-9 shrink-0 drop-shadow-[0_0_15px_rgba(0,102,255,0.7)] group-hover:scale-105 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="font-mono text-xs font-extrabold tracking-[0.24em] text-white">
                AUTOMATE<span className="text-cyan-400"> VISION</span>
              </span>
              <span className="font-mono text-[8px] tracking-[0.16em] text-neutral-400">
                CONSULTANCY & DIGITAL SOLUTIONS
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-neutral-300 transition-all duration-300 hover:bg-white hover:text-black"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            BACK TO HOME
          </Link>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="relative pt-32 pb-24 sm:pt-44 sm:pb-36 overflow-hidden">
        <HeroAiCanvas />
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[140px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs sm:text-sm font-mono tracking-[0.4em] uppercase text-neutral-500 mb-4 flex items-center gap-3">
              <span className="h-[1px] w-6 bg-cyan-400" />
              AUTOMATE VISION // CONTACT US
            </p>
            <h1 className="text-5xl font-medium tracking-tighter leading-[0.94] text-white sm:text-7xl">
              Let&apos;s Build Your <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-cyan-400">
                Intelligent System.
              </span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Have an enterprise project, automation pipeline, or AI web app in mind? Get in touch directly with our leadership team.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            {/* Leadership Cards */}
            <div className="space-y-6">
              {/* Dev Solanki Card */}
              <div className="rounded-2xl border border-white/10 bg-neutral-950 p-8 transition-colors hover:border-cyan-400/40">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-400">
                    DS
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">DEV SOLANKI</h3>
                    <p className="font-mono text-xs text-cyan-400">FOUNDER & CEO</p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-400 font-light">
                  AI Systems Architecture, LLM Reasoning, Full-Stack Web Engineering & Autonomous Agent Design.
                </p>
                <div className="mt-6 flex flex-wrap gap-5 font-mono text-xs text-neutral-300">
                  <a href="tel:+919313220796" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <Phone className="h-3.5 w-3.5 text-cyan-400" /> +91 9313220796
                  </a>
                  <a href="https://wa.me/919313220796" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-400" /> WHATSAPP
                  </a>
                </div>
              </div>

              {/* Het Vekariya Card */}
              <div className="rounded-2xl border border-white/10 bg-neutral-950 p-8 transition-colors hover:border-cyan-400/40">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-400">
                    HV
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">HET VEKARIYA</h3>
                    <p className="font-mono text-xs text-cyan-400">FOUNDER & CEO</p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-400 font-light">
                  Business Process Automation, Client Operations & Digital Solutions Strategy.
                </p>
                <div className="mt-6 flex flex-wrap gap-5 font-mono text-xs text-neutral-300">
                  <a href="tel:+919712945544" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <Phone className="h-3.5 w-3.5 text-cyan-400" /> +91 9712945544
                  </a>
                  <a href="https://wa.me/919712945544" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-400" /> WHATSAPP
                  </a>
                </div>
              </div>

              {/* Email & Location */}
              <div className="rounded-2xl border border-cyan-400/30 bg-[#070d0f] p-7 font-mono text-xs space-y-3">
                <div className="flex items-center gap-3 text-neutral-200">
                  <Mail className="h-4 w-4 shrink-0 text-cyan-400" />
                  <a href="mailto:automatevision06@gmail.com" className="hover:underline">
                    AUTOMATEVISION06@GMAIL.COM
                  </a>
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  <Sparkles className="h-4 w-4 shrink-0 text-cyan-400" />
                  <span>LOCATION: INDIA (GLOBAL REMOTE SERVICES)</span>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 sm:p-12 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-cyan-400" />
                  <h2 className="mt-6 text-3xl font-medium text-white tracking-tight">MESSAGE RECEIVED</h2>
                  <p className="mt-3 text-sm text-neutral-400 font-light">
                    Thank you for reaching out! DEV SOLANKI & HET VEKARIYA will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-white/20 px-6 py-3 font-mono text-xs text-white hover:bg-white hover:text-black transition-all"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-medium text-white tracking-tight">Direct Inquiry</h2>
                  
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-2 uppercase">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-2 uppercase">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-2 uppercase">PHONE / WHATSAPP</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-2 uppercase">PRIMARY SERVICE INTEREST</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
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
                    <label className="block font-mono text-[10px] tracking-[0.2em] text-neutral-400 mb-2 uppercase">PROJECT DETAILS *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business workflow, technical requirements, or timeline..."
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-mono text-xs font-bold tracking-[0.2em] text-black transition-all hover:bg-cyan-400 hover:text-black"
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
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between font-mono text-xs text-neutral-400">
          <div className="font-mono text-xs font-extrabold tracking-[0.24em] text-white">
            AUTOMATE<span className="text-cyan-400"> VISION</span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
            © 2026 AUTOMATE VISION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
