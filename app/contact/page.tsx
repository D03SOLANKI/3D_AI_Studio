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
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="avGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0284c7" />
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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwkJ0bN_Qdt3QhFOzT08hd5DnV6Gzo63-N50NCPxn1Vdz-f7PMJsKeYzOixUftPydPVYg/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const body = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      });

      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body,
      });
      track('contact_form_submitted', { service: form.service });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="noise-bg min-h-screen bg-[#fbfcfd] text-slate-900">
      {/* Header Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3.5 group outline-none">
            <AutomateVisionLogo className="h-9 w-9 shrink-0 drop-shadow-[0_2px_10px_rgba(37,99,235,0.3)] group-hover:scale-105 transition-transform duration-500" />
            <span className="font-mono text-sm sm:text-base font-extrabold tracking-[0.24em] text-slate-900">
              AUTOMATE<span className="text-blue-600"> VISION</span>
            </span>
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-800 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            BACK TO HOME
          </Link>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="relative pt-32 pb-24 sm:pt-44 sm:pb-36 overflow-hidden">
        <HeroAiCanvas />
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs sm:text-sm font-mono tracking-[0.4em] uppercase text-blue-600 mb-4 flex items-center gap-3 font-semibold">
              <span className="h-[1px] w-6 bg-blue-600" />
              AUTOMATE VISION // CONTACT US
            </p>
            <h1 className="text-5xl font-medium tracking-tighter leading-[0.94] text-slate-900 sm:text-7xl">
              Let&apos;s Build Your <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-indigo-600">
                Intelligent System.
              </span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Have an enterprise project, automation pipeline, or AI web app in mind? Get in touch directly with our leadership team.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            {/* Leadership Cards */}
            <div className="space-y-6">
              {/* Dev Solanki Card */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-colors hover:border-blue-500/40">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-blue-500/30 bg-blue-50 font-mono text-sm font-bold text-blue-600">
                    DS
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900">DEV SOLANKI</h3>
                    <p className="font-mono text-xs text-blue-600 font-semibold">FOUNDER & CEO</p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                  AI Systems Architecture, LLM Reasoning, Full-Stack Web Engineering & Autonomous Agent Design.
                </p>
                <div className="mt-6 flex flex-wrap gap-5 font-mono text-xs text-slate-700">
                  <a href="tel:+919313220796" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <Phone className="h-3.5 w-3.5 text-blue-600" /> +91 9313220796
                  </a>
                  <a href="https://wa.me/919313220796" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <MessageCircle className="h-3.5 w-3.5 text-blue-600" /> WHATSAPP
                  </a>
                </div>
              </div>

              {/* Het Vekariya Card */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-colors hover:border-teal-500/40">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-teal-500/30 bg-teal-50 font-mono text-sm font-bold text-teal-600">
                    HV
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900">HET VEKARIYA</h3>
                    <p className="font-mono text-xs text-teal-600 font-semibold">FOUNDER & CEO</p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                  Leading AI System Architecture, Business Process Automation, Client Operations & Digital Solutions Strategy.
                </p>
                <div className="mt-6 flex flex-wrap gap-5 font-mono text-xs text-slate-700">
                  <a href="tel:+919712945544" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                    <Phone className="h-3.5 w-3.5 text-teal-600" /> +91 9712945544
                  </a>
                  <a href="https://wa.me/919712945544" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                    <MessageCircle className="h-3.5 w-3.5 text-teal-600" /> WHATSAPP
                  </a>
                </div>
              </div>

              {/* Email & Location */}
              <div className="rounded-2xl border border-blue-500/30 bg-blue-50/50 p-7 font-mono text-xs space-y-3">
                <div className="flex items-center gap-3 text-slate-800">
                  <Mail className="h-4 w-4 shrink-0 text-blue-600" />
                  <a href="mailto:automatevision06@gmail.com" className="hover:underline">
                    AUTOMATEVISION06@GMAIL.COM
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Sparkles className="h-4 w-4 shrink-0 text-blue-600" />
                  <span>LOCATION: INDIA (GLOBAL REMOTE SERVICES)</span>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xl shadow-slate-200/50">
              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-blue-600" />
                  <h2 className="mt-6 text-3xl font-medium text-slate-900 tracking-tight">MESSAGE RECEIVED</h2>
                  <p className="mt-3 text-sm text-slate-600 font-normal">
                    Thank you for reaching out! DEV SOLANKI & HET VEKARIYA will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-slate-300 px-6 py-3 font-mono text-xs text-slate-800 hover:bg-slate-900 hover:text-white transition-all"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Direct Inquiry</h2>
                  
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] text-slate-500 mb-2 uppercase">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] tracking-[0.2em] text-slate-500 mb-2 uppercase">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] tracking-[0.2em] text-slate-500 mb-2 uppercase">PHONE / WHATSAPP</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] text-slate-500 mb-2 uppercase">PRIMARY SERVICE INTEREST</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
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
                    <label className="block font-mono text-[10px] tracking-[0.2em] text-slate-500 mb-2 uppercase">PROJECT DETAILS *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business workflow, technical requirements, or timeline..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
                    />
                  </div>

                  {error && (
                    <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600 font-mono">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 px-6 py-4 font-mono text-xs font-bold tracking-[0.2em] text-white transition-all hover:bg-blue-600 hover:text-white shadow-lg shadow-slate-900/10 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                        SENDING...
                      </>
                    ) : (
                      <>
                        SUBMIT INQUIRY
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 bg-[#f8fafc]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between font-mono text-xs text-slate-600">
          <div className="font-mono text-xs font-extrabold tracking-[0.24em] text-slate-900">
            AUTOMATE<span className="text-blue-600"> VISION</span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
            © 2026 AUTOMATE VISION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
