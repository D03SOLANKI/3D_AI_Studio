'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Activity, ArrowRight, ArrowUpRight, Bot, Calendar, Camera, Check, ChevronDown, Cpu, Database, FileText, Globe, Globe2, Layers, Mail, Menu, MessageCircle, Mic, Network, Phone, Scan, Search, Sparkles, Volume2, X, Zap } from 'lucide-react';
import { StudioCanvas } from '@/components/studio-canvas';
import { HeroAiCanvas } from '@/components/hero-ai-canvas';
import { projects, type Project } from '@/lib/projects';
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

const capabilities = [
  { id: 'AI AGENTS', title: 'AI AGENTS', description: 'Intelligent agents that understand, reason and take action across enterprise workflows.', examples: ['Autonomous agents', 'Customer support agents', 'Sales agents', 'RAG reasoning engines'], icon: Network },
  { id: 'AI RECEPTIONISTS', title: 'AI RECEPTIONISTS', description: 'Natural voice agents that answer calls 24/7, qualify leads and schedule appointments.', examples: ['Voice receptionists', 'Appointment booking', 'Call routing', 'Customer FAQs'], icon: Phone },
  { id: 'AI CHATBOTS', title: 'AI CHATBOTS', description: 'Multilingual conversational AI chatbots trained on proprietary business data.', examples: ['Website chatbots', 'Knowledge base Q&A', 'Support bots', 'Lead qualification'], icon: Network },
  { id: 'WEBSITES + AI', title: 'WEBSITES + AI', description: 'High-converting, interactive WebGL & AI-integrated web applications engineered for scale.', examples: ['B2B SaaS portals', 'Tanush Fitness B2B', 'Interactive web apps', 'Personalized web platforms'], icon: Globe2 },
  { id: 'BUSINESS AUTOMATION', title: 'BUSINESS AUTOMATION', description: 'Connect your tools, eliminate repetitive tasks and streamline complex operations.', examples: ['n8n workflows', 'CRM automation', 'Lead automation', 'Email pipelines'], icon: Zap },
  { id: 'WHATSAPP & SOCIAL', title: 'WHATSAPP & SOCIAL AUTOMATION', description: 'Automate WhatsApp conversations, social media lead capture, and instant customer replies.', examples: ['WhatsApp API bots', 'Instagram DM automation', 'Social lead capture', 'Broadcast engines'], icon: MessageCircle },
];

const services = [
  { title: 'AI AGENTS', items: ['Autonomous agents', 'RAG engines', 'LLM reasoning', 'Multi-agent graphs', 'Custom AI tools'] },
  { title: 'AI RECEPTIONISTS', items: ['Voice receptionists', 'Appointment booking', '24/7 Call handling', 'Multilingual voice', 'CRM call sync'] },
  { title: 'AI CHATBOTS', items: ['Website AI bots', 'Knowledge base AI', 'Customer support', 'Lead qualification', 'Multilingual chat'] },
  { title: 'WEBSITES + AI', items: ['AI portals', 'B2B web apps', 'Next.js platforms', '3D WebGL interfaces', 'Dynamic lead capture'] },
  { title: 'BUSINESS AUTOMATION', items: ['n8n workflows', 'CRM automation', 'Lead generation', 'Email pipelines', 'API integrations'] },
  { title: 'WHATSAPP & SOCIAL', items: ['WhatsApp Business API', 'Instagram DM bots', 'Social lead capture', 'Automated follow-ups', 'Broadcast engines'] },
];

const processSteps = [
  ['DISCOVER', 'Understand the business problem.'],
  ['DESIGN', 'Define architecture and user experience.'],
  ['BUILD', 'Engineer the product and integrations.'],
  ['TEST', 'Validate reliability and edge cases.'],
  ['DEPLOY', 'Launch into production.'],
  ['OPTIMIZE', 'Monitor, improve and scale.'],
];

const techGroups = [
  ['AI & ML', 'OpenAI', 'Gemini', 'Claude', 'Groq', 'Sarvam AI', 'LangChain', 'LangGraph'],
  ['DEVELOPMENT', 'React', 'Next.js 14+', 'TypeScript', 'Python', 'FastAPI', 'Node.js'],
  ['AUTOMATION', 'n8n', 'APIs', 'Webhooks', 'WhatsApp Business API'],
  ['DATA & STORAGE', 'PostgreSQL', 'MongoDB', 'Supabase', 'Vector Databases'],
  ['COMPUTER VISION', 'TensorFlow', 'PyTorch', 'OpenCV', 'MediaPipe'],
  ['INFRASTRUCTURE', 'Vercel', 'Docker', 'AWS', 'GitHub Actions'],
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3.5 group outline-none" aria-label="AUTOMATE VISION home">
      <AutomateVisionLogo className="h-9 w-9 shrink-0 drop-shadow-[0_2px_10px_rgba(37,99,235,0.3)] group-hover:scale-105 transition-transform duration-500" />
      <span className="font-mono text-sm sm:text-base font-extrabold tracking-[0.24em] text-slate-900">
        AUTOMATE<span className="text-blue-600"> VISION</span>
      </span>
    </a>
  );
}

function ButtonLink({ href, children, outline = false, onClick }: { href: string; children: React.ReactNode; outline?: boolean; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-3 rounded-full px-6 py-3 font-mono text-[10px] font-semibold tracking-[0.2em] transition-all duration-300 ${
        outline
          ? 'border border-slate-300 text-slate-800 hover:border-blue-600 hover:bg-blue-50/70 hover:text-blue-600'
          : 'bg-slate-900 text-white hover:bg-blue-600 hover:text-white shadow-[0_4px_20px_rgba(15,23,42,0.12)]'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    ['WORK', '#work'],
    ['CAPABILITIES', '#capabilities'],
    ['SERVICES', '#services'],
    ['PROCESS', '#process'],
    ['VISION', '#vision'],
    ['ABOUT', '#about'],
    ['CONTACT', '#contact'],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="font-mono text-[10px] tracking-[0.2em] text-slate-600 transition-colors hover:text-blue-600">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contact" onClick={() => track('cta_click', { location: 'nav' })}>
            START PROJECT
          </ButtonLink>
        </div>
        <button className="rounded-full border border-slate-200 p-2.5 text-slate-800 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-slate-200 bg-white px-5 py-6 lg:hidden">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-4 font-mono text-xs tracking-[0.2em] text-slate-700 hover:text-blue-600">
                {label}
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)} className="mt-6 block rounded-full bg-blue-600 px-5 py-3.5 text-center font-mono text-[10px] font-bold tracking-[0.2em] text-white">
              START PROJECT <ArrowRight className="ml-2 inline h-3.5 w-3.5" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-slate-200/80 bg-[#fbfcfd] pt-24 text-slate-900">
      {/* Light Mode 60fps Interactive Particle Wave Canvas */}
      <HeroAiCanvas />

      {/* Cybernetic Light Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-15 mix-blend-multiply">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-digital-lines-41551-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfcfd]/80 via-[#fbfcfd]/40 to-[#fbfcfd]/95 z-10 pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-10" />
      </div>

      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[140px] pointer-events-none" />

      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <StudioCanvas />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 py-28 text-center flex flex-col items-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="hidden sm:block h-[1px] w-8 bg-blue-600/40" />
          <span className="text-[10px] md:text-xs font-mono font-medium text-blue-600 uppercase tracking-[0.4em]">
            AUTOMATE VISION CONSULTANCY & DIGITAL SOLUTIONS
          </span>
          <span className="hidden sm:block h-[1px] w-8 bg-blue-600/40" />
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-medium tracking-tighter leading-[0.9] text-slate-900">
          Architecting <br />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-indigo-600">
            Digital Excellence.
          </span>
        </h1>

        <p className="mt-10 sm:mt-12 text-sm sm:text-base md:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
          We engineer intelligent business systems—from autonomous <strong className="text-slate-900 font-semibold">AI agents</strong> to scalable <strong className="text-slate-900 font-semibold">digital platforms</strong> and seamless <strong className="text-slate-900 font-semibold">WhatsApp automation</strong>—built to turn complexity into growth.
        </p>

        <div className="mt-12 sm:mt-16 flex justify-center items-center gap-4">
          <ButtonLink href="#work" onClick={() => track('cta_click', { location: 'hero_work' })}>
            EXPLORE OUR WORK
          </ButtonLink>
          <ButtonLink href="/contact" outline onClick={() => track('cta_click', { location: 'hero_contact' })}>
            START PROJECT
          </ButtonLink>
        </div>

        <div className="mt-20 flex flex-col items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-slate-500">
          <div className="w-[1px] h-10 bg-gradient-to-b from-blue-600 to-transparent relative overflow-hidden">
            <div className="w-full h-1/2 bg-blue-600 animate-pulse" />
          </div>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    'AI AGENTS',
    'VOICE AI RECEPTIONISTS',
    'AI CHATBOTS',
    'WEBSITES + AI',
    'BUSINESS AUTOMATION',
    'WHATSAPP AUTOMATION',
    'RAG ENGINE PIPELINES',
    'NEXT.JS 14+ PORTALS',
    'PYTHON AI SYSTEMS',
    'WEBGL & 3D INTERACTION',
  ];

  return (
    <section className="relative overflow-hidden border-b border-t border-slate-200/80 bg-slate-50/80 py-10">
      <div className="mx-auto mb-6 text-center font-mono text-[10px] tracking-[0.4em] text-slate-500 uppercase">
        AUTOMATE VISION CAPABILITIES
      </div>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8 font-mono text-sm sm:text-base tracking-[0.2em] text-slate-700 transition-colors hover:text-blue-600 cursor-default">
            <span className="text-blue-600">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TheVision() {
  const steps = [
    {
      number: '01',
      title: 'Ideas → Systems',
      description: 'Transforming operational concepts into structured software architecture and API pipelines.',
    },
    {
      number: '02',
      title: 'Systems → Intelligence',
      description: 'Injecting LLMs, RAG vector search, and Voice AI agents into your core workflow logic.',
    },
    {
      number: '03',
      title: 'Intelligence → Scale',
      description: 'Deploying resilient, autonomous workflows that scale output with zero operational friction.',
    },
  ];

  return (
    <section id="vision" className="relative overflow-hidden bg-[#0b0f19] py-20 sm:py-32 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs sm:text-sm font-mono tracking-[0.4em] uppercase text-cyan-400 font-semibold mb-8 sm:mb-12 text-center md:text-left">
          THE VISION
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.15] text-white">
          Ideas become <span className="text-cyan-400 font-normal">systems</span>.<br />
          Systems become <span className="text-blue-400 font-normal">intelligence</span>.<br />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            Intelligence becomes scale.
          </span>
        </h2>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 border-t border-white/10 pt-12 sm:pt-16">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="text-4xl sm:text-5xl font-light font-mono text-cyan-400">{step.number}</span>
              <h3 className="text-lg sm:text-xl font-medium text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="text-xs sm:text-sm font-mono tracking-[0.4em] uppercase text-blue-600 mb-4 flex items-center gap-3">
        <span className="h-[1px] w-6 bg-blue-600" />
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.05]">
        {title}
      </h2>
      {description && <p className="mt-6 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">{description}</p>}
    </div>
  );
}

function Capabilities() {
  const [active, setActive] = useState(0);
  return (
    <section id="capabilities" className="relative border-b border-slate-200/80 bg-[#fbfcfd] py-24 sm:py-36 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="CAPABILITIES" title="What We Build." description="From AI agents and voice receptionists to AI-powered web portals and business automation." />
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <button
                  key={capability.id}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`group flex w-full items-center gap-5 rounded-2xl border p-6 text-left transition-all duration-300 ${
                    active === index
                      ? 'border-blue-500/50 bg-blue-50/80 shadow-md shadow-blue-500/5'
                      : 'border-slate-200/80 bg-white hover:border-slate-300'
                  }`}
                >
                  <span className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors ${active === index ? 'border-blue-500/40 bg-blue-600/10 text-blue-600' : 'border-slate-200 text-slate-500'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 font-mono text-sm font-semibold tracking-[0.16em] text-slate-900">{capability.title}</span>
                  <ArrowRight className={`h-4 w-4 transition-all ${active === index ? 'translate-x-0 text-blue-600 opacity-100' : '-translate-x-2 text-slate-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                </button>
              );
            })}
          </div>
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative min-h-[340px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-lg shadow-slate-200/50">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/[0.06] blur-[90px]" />
            <div className="relative">
              <div className="mb-10 font-mono text-[10px] tracking-[0.24em] text-blue-600 uppercase">MODULE // {capabilities[active].title}</div>
              <h3 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">{capabilities[active].title}</h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 font-normal">{capabilities[active].description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {capabilities[active].examples.map((example) => (
                  <span key={example} className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.1em] text-slate-700">
                    {example}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 right-8 font-mono text-[10px] tracking-[0.24em] text-slate-400 uppercase">ACTIVE NODE</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === 'ai-receptionist') {
    return (
      <div className="relative h-60 overflow-hidden border-b border-slate-200 bg-[#070d18] p-6 text-white flex flex-col justify-between">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-blue-400 z-10 uppercase">
          <span className="flex items-center gap-1.5"><Mic className="h-3 w-3 text-cyan-400 animate-pulse" /> VOICE AI ENGINE</span>
          <span className="rounded bg-blue-500/20 px-2 py-0.5 border border-blue-400/30 text-blue-300">24/7 ACTIVE</span>
        </div>

        <div className="relative my-auto flex items-center justify-center gap-6 sm:gap-8 z-10">
          <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-950/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <Mic className="h-7 w-7 sm:h-8 sm:w-8 text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 animate-spin-slow" />
          </div>

          <div className="flex items-center gap-1.5 h-12">
            {[40, 75, 100, 60, 90, 45, 80, 100, 65, 30, 85, 50].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                className="w-1.5 rounded-full bg-gradient-to-t from-blue-600 via-cyan-400 to-white"
              />
            ))}
          </div>

          <div className="hidden sm:flex flex-col items-center gap-1 rounded-xl border border-blue-400/30 bg-blue-950/50 p-3 font-mono text-[9px] text-blue-200">
            <Calendar className="h-4 w-4 text-cyan-400" />
            <span>CAL.COM SYNC</span>
          </div>
        </div>

        <div className="font-mono text-[9px] tracking-[0.2em] text-slate-400 z-10 uppercase flex justify-between">
          <span>SIGNAL // SPEECH-TO-INTENT</span>
          <span>LATENCY // 140MS</span>
        </div>
      </div>
    );
  }

  if (project.id === 'tender-intelligence') {
    return (
      <div className="relative h-60 overflow-hidden border-b border-slate-200 bg-[#0b0c16] p-6 text-white flex flex-col justify-between">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-indigo-400 z-10 uppercase">
          <span className="flex items-center gap-1.5"><FileText className="h-3 w-3 text-indigo-400" /> NLP CLASSIFIER</span>
          <span className="rounded bg-indigo-500/20 px-2 py-0.5 border border-indigo-400/30 text-indigo-300">23K+ KEYWORDS</span>
        </div>

        <div className="relative my-auto flex items-center justify-center gap-4 sm:gap-6 z-10">
          <div className="flex flex-col gap-1 rounded-xl border border-indigo-500/30 bg-indigo-950/60 p-3 font-mono text-[9px]">
            <div className="text-slate-400">UNSTRUCTURED DOC</div>
            <div className="text-white font-semibold">TENDER_#9842.PDF</div>
          </div>
          <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-indigo-500 to-purple-500 relative">
            <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-purple-400 animate-ping" />
          </div>
          <div className="flex flex-col gap-1 font-mono text-[8px]">
            <div className="rounded border border-indigo-400/40 bg-indigo-500/20 px-2 py-0.5 text-indigo-200">[INFRASTRUCTURE 99.4%]</div>
            <div className="rounded border border-purple-400/40 bg-purple-500/20 px-2 py-0.5 text-purple-200">[GOVT COMPLIANCE]</div>
            <div className="rounded border border-blue-400/40 bg-blue-500/20 px-2 py-0.5 text-blue-200">[EXCAVATION & CIVIL]</div>
          </div>
        </div>

        <div className="font-mono text-[9px] tracking-[0.2em] text-slate-400 z-10 uppercase flex justify-between">
          <span>MODEL // TF-IDF + XGBOOST</span>
          <span>ACCURACY // 98.6%</span>
        </div>
      </div>
    );
  }

  if (project.id === 'handspeak') {
    return (
      <div className="relative h-60 overflow-hidden border-b border-slate-200 bg-[#061210] p-6 text-white flex flex-col justify-between">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-emerald-400 z-10 uppercase">
          <span className="flex items-center gap-1.5"><Camera className="h-3 w-3 text-emerald-400 animate-pulse" /> COMPUTER VISION</span>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 border border-emerald-400/30 text-emerald-300">REALTIME TRACKING</span>
        </div>

        <div className="relative my-auto flex items-center justify-center z-10">
          <div className="relative h-28 w-44 rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-2 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <div className="absolute top-2 left-2 flex items-center gap-1 text-[8px] font-mono text-emerald-400">
              <Scan className="h-3 w-3" /> FPS: 60
            </div>
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="relative h-16 w-24">
                {[[10, 20], [30, 15], [50, 25], [70, 10], [85, 30], [50, 50], [30, 60], [60, 70]].map(([x, y], idx) => (
                  <div
                    key={idx}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-2 right-2 rounded bg-emerald-400/20 px-1.5 py-0.5 font-mono text-[8px] font-bold text-emerald-300">
              GESTURE: &quot;HELLO&quot;
            </div>
          </div>
        </div>

        <div className="font-mono text-[9px] tracking-[0.2em] text-slate-400 z-10 uppercase flex justify-between">
          <span>PIPELINE // MEDIAPIPE + TENSORFLOW</span>
          <span>LATENCY // &lt; 20MS</span>
        </div>
      </div>
    );
  }

  if (project.id === 'property-intelligence') {
    return (
      <div className="relative h-60 overflow-hidden border-b border-slate-200 bg-[#06101a] p-6 text-white flex flex-col justify-between">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-sky-400 z-10 uppercase">
          <span className="flex items-center gap-1.5"><Database className="h-3 w-3 text-sky-400" /> RAG VECTOR ENGINE</span>
          <span className="rounded bg-sky-500/20 px-2 py-0.5 border border-sky-400/30 text-sky-300">-60% TOKENS</span>
        </div>

        <div className="relative my-auto flex items-center justify-center gap-4 sm:gap-6 z-10">
          <div className="flex flex-col items-center gap-1 rounded-xl border border-sky-500/30 bg-sky-950/50 p-2.5 font-mono text-[9px]">
            <Search className="h-4 w-4 text-sky-400" />
            <span>USER QUERY</span>
          </div>
          <div className="h-px w-8 bg-sky-400 animate-pulse" />
          <div className="relative flex h-20 w-28 flex-col justify-between rounded-xl border border-cyan-500/40 bg-cyan-950/60 p-2.5 font-mono text-[8px]">
            <div className="text-cyan-400 font-bold">VECTOR DB</div>
            <div className="text-slate-300">EMBEDDINGS RETRIEVED</div>
            <div className="rounded bg-sky-400/20 px-1 text-sky-200 text-[7px]">SUPABASE VECTOR</div>
          </div>
        </div>

        <div className="font-mono text-[9px] tracking-[0.2em] text-slate-400 z-10 uppercase flex justify-between">
          <span>VECTOR DB // SUPABASE VECTOR</span>
          <span>CONTEXT SAVINGS // 60%</span>
        </div>
      </div>
    );
  }

  if (project.id === 'intelligent-data-extraction') {
    return (
      <div className="relative h-60 overflow-hidden border-b border-slate-200 bg-[#160d06] p-6 text-white flex flex-col justify-between">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-amber-400 z-10 uppercase">
          <span className="flex items-center gap-1.5"><Globe className="h-3 w-3 text-amber-400 animate-spin-slow" /> DATA EXTRACTION</span>
          <span className="rounded bg-amber-500/20 px-2 py-0.5 border border-amber-400/30 text-amber-300">AUTOMATED PIPELINE</span>
        </div>

        <div className="relative my-auto flex items-center justify-center gap-4 z-10">
          <div className="rounded-xl border border-amber-500/30 bg-amber-950/50 p-3 font-mono text-[9px] space-y-1">
            <div className="text-amber-400 flex items-center gap-1"><Globe className="h-3 w-3" /> PLAYWRIGHT</div>
            <div className="text-slate-300 text-[8px]">DOM PARSER + PDF</div>
          </div>
          <div className="h-px w-6 bg-amber-400" />
          <div className="rounded-xl border border-amber-400/40 bg-amber-900/40 p-3 font-mono text-[9px] text-amber-200">
            <div>JSON MATRIX</div>
            <div className="text-[7px] text-amber-300">{`{ "records": 14200 }`}</div>
          </div>
        </div>

        <div className="font-mono text-[9px] tracking-[0.2em] text-slate-400 z-10 uppercase flex justify-between">
          <span>STACK // PLAYWRIGHT + MONGODB</span>
          <span>STATUS // PARSED & CLEAN</span>
        </div>
      </div>
    );
  }

  // Tanush Fitness B2B
  return (
    <div className="relative h-60 overflow-hidden border-b border-slate-200 bg-[#071318] p-6 text-white flex flex-col justify-between">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-cyan-400 z-10 uppercase">
        <span className="flex items-center gap-1.5"><Activity className="h-3 w-3 text-cyan-400" /> B2B SAAS PLATFORM</span>
        <span className="rounded bg-cyan-500/20 px-2 py-0.5 border border-cyan-400/30 text-cyan-300">100% BOOKING SYNC</span>
      </div>

      <div className="relative my-auto flex items-center justify-center z-10">
        <div className="w-64 rounded-xl border border-cyan-500/40 bg-cyan-950/60 p-3 font-mono text-[9px] space-y-2 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
          <div className="flex items-center justify-between text-cyan-300 font-bold border-b border-cyan-500/30 pb-1.5">
            <span>TANUSH FITNESS B2B</span>
            <span className="text-[8px] text-emerald-400">ONLINE</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[8px]">
            <div className="rounded bg-cyan-900/40 p-1.5">
              <div className="text-slate-400">QUALIFICATION</div>
              <div className="text-cyan-300 font-bold">+45% FASTER</div>
            </div>
            <div className="rounded bg-cyan-900/40 p-1.5">
              <div className="text-slate-400">BOOKING FLOW</div>
              <div className="text-emerald-400 font-bold">AUTOMATED</div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-mono text-[9px] tracking-[0.2em] text-slate-400 z-10 uppercase flex justify-between">
        <span>FRAMEWORK // NEXT.JS + FASTAPI</span>
        <span>CLIENT PORTAL // ACTIVE</span>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-md sm:p-8" onClick={onClose}>
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} onClick={(e) => e.stopPropagation()} className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
          <div className="font-mono text-[10px] tracking-[0.24em] text-blue-600 uppercase">CASE STUDY</div>
          <button onClick={onClose} className="rounded-full border border-slate-200 p-2 text-slate-500 transition-colors hover:text-slate-900" aria-label="Close modal">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 sm:p-10">
            <div className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">{project.category}</div>
            <h2 className="mt-4 text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">{project.title}</h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-600 font-normal">{project.description}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-blue-600 uppercase">THE PROBLEM</div>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">{project.problem}</p>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-blue-600 uppercase">THE SOLUTION</div>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">{project.solution}</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="font-mono text-[10px] tracking-[0.2em] text-blue-600 uppercase mb-3">TECHNOLOGY STACK</div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[10px] text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="font-mono text-[10px] tracking-[0.2em] text-blue-600 uppercase">VERIFIED RESULT</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-800 font-semibold">{project.result}</p>
            </div>
          </div>
          <div className="border-t border-slate-200 bg-slate-50 p-7 sm:p-10 lg:border-l lg:border-t-0">
            <div className="font-mono text-[10px] tracking-[0.2em] text-blue-600 uppercase">ARCHITECTURE PIPELINE</div>
            <div className="mt-6 space-y-3">
              {project.architecture.map((step) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 font-mono text-[10px] tracking-[0.1em] text-slate-800 shadow-sm">{step}</span>
                </div>
              ))}
            </div>
            {project.metrics && (
              <div className="mt-10 border-t border-slate-200 pt-6">
                <div className="font-mono text-[10px] tracking-[0.2em] text-blue-600 uppercase">TELEMETRY SIGNAL</div>
                {project.metrics.map((metric) => (
                  <div key={metric} className="mt-3 text-2xl font-medium text-slate-900">{metric}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="work" className="relative border-b border-slate-200/80 bg-[#fbfcfd] py-24 sm:py-36 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="SELECTED WORKS" title="Evidence of Execution." description="Case studies & production AI systems engineered for real-world enterprise operations." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              onClick={() => { setSelected(project); track('project_opened', { project: project.id }); }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-500 shadow-sm hover:border-blue-500/40 hover:shadow-xl"
            >
              <ProjectVisual project={project} />
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase">
                  <span>{project.category}</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-tight text-slate-900">{project.title}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal line-clamp-3">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="font-mono text-[9px] tracking-[0.08em] text-slate-500">{tech} •</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-900 transition-colors group-hover:text-blue-600">
                  VIEW CASE STUDY <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-b border-slate-200/80 py-28 sm:py-36 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="SERVICES"
          title="WHAT WE CAN BUILD FOR YOU"
          description="Focused engineering capabilities by AUTOMATE VISION for teams ready to make work more intelligent."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 shadow-sm hover:border-blue-500/40 hover:shadow-md">
              <h3 className="min-h-[44px] text-sm font-semibold tracking-[0.12em] text-slate-900">{service.title}</h3>
              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-b border-slate-200/80 py-28 sm:py-36 bg-[#fbfcfd]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="PROCESS METHODOLOGY"
          title="HOW WE BUILD"
          description="From an initial idea to a production-ready AI ecosystem, connected step-by-step."
        />

        {/* Connected Node Chain Grid */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6 relative">
          {processSteps.map(([title, copy], index) => {
            const stepNum = `0${index + 1}`;
            const isLast = index === processSteps.length - 1;

            return (
              <div key={title} className="relative group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 shadow-sm hover:border-blue-500/50 hover:shadow-lg">
                {/* Horizontal Connector Line & Arrow for desktop */}
                {!isLast && (
                  <div className="hidden lg:flex items-center absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="h-0.5 w-3 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                    <ArrowRight className="h-3 w-3 text-indigo-500 -ml-1" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-4">
                    <span className="font-bold text-blue-600 tracking-wider">{stepNum}</span>
                    <span className="h-2 w-2 rounded-full bg-blue-500/30 group-hover:bg-blue-600 transition-colors shadow-sm" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-[0.14em] text-slate-900">{title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 font-normal">{copy}</p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="border-b border-slate-200/80 bg-[#f8fafc] py-24 sm:py-36 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="TECHNOLOGY" title="The Right Tools for the Job." description="Technology is supporting evidence. The architecture and business outcome come first." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map(([name, ...tools]) => (
            <div key={name} className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <div className="font-mono text-[10px] tracking-[0.24em] text-blue-600 uppercase font-semibold">{name}</div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {tools.map((tool) => (
                  <span key={tool} className="text-sm text-slate-700 font-normal">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    ['01 BUSINESS FIRST', 'We build around actual business workflows and clear operational outcomes.'],
    ['02 AI FIRST', 'We identify where AI eliminates repetitive manual tasks and scales throughput.'],
    ['03 END-TO-END', 'From strategy and systems engineering to deployment, hosting, and API integrations.'],
    ['04 BUILT TO SCALE', 'Architectures designed for maintainability, high concurrency, and future expansion.'],
  ];
  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-900 sm:py-36 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs sm:text-sm font-mono tracking-[0.4em] uppercase text-blue-600 font-semibold mb-6">WHY US</p>
        <h2 className="text-4xl font-medium tracking-tight sm:text-6xl text-slate-900">Engineered for real business problems.</h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-slate-200 pt-10">
          {points.map(([title, copy]) => (
            <div key={title} className="flex flex-col gap-3">
              <span className="font-mono text-xs text-blue-600 tracking-[0.2em] font-semibold">{title.split(' ')[0]}</span>
              <h3 className="text-lg font-medium text-slate-900">{title.substring(3)}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-slate-200/80 bg-[#f8fafc] py-24 sm:py-36 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="LEADERSHIP & VISION"
          title="Engineered by DEV SOLANKI & HET VEKARIYA."
          description="AUTOMATE VISION is an AI Automation & Digital Solutions studio architecting AI Agents, Voice AI Receptionists, Web Applications, and WhatsApp Automation."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Dev Solanki */}
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
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
              Leading AI systems architecture, full-stack web engineering, machine learning pipelines, and autonomous agent design.
            </p>
            <div className="mt-6 font-mono text-xs text-slate-700 flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-blue-600" />
              <a href="tel:+919313220796" className="hover:text-blue-600 transition-colors">+91 9313220796</a>
            </div>
          </div>

          {/* Het Vekariya */}
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
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
              Driving business automation strategies, client operations, digital solutions, and enterprise growth engineering.
            </p>
            <div className="mt-6 font-mono text-xs text-slate-700 flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-teal-600" />
              <a href="tel:+919712945544" className="hover:text-teal-600 transition-colors">+91 9712945544</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 font-mono text-xs tracking-[0.24em] text-slate-600 shadow-sm">
          <span>AUTOMATE</span>
          <span className="text-blue-600">•</span>
          <span>INNOVATE</span>
          <span className="text-teal-600">•</span>
          <span>ELEVATE</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-44 bg-[#fbfcfd] text-slate-900">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[150px] pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 font-mono text-[10px] tracking-[0.3em] text-blue-600 uppercase font-semibold">AUTOMATE VISION // CONTACT</div>
        <h2 className="text-5xl sm:text-7xl font-medium tracking-tighter leading-[0.94] text-slate-900">
          READY TO BUILD YOUR <br />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-indigo-600">INTELLIGENT SYSTEM?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
          Get in touch with DEV SOLANKI & HET VEKARIYA to architect AI solutions tailored for your business.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/contact" onClick={() => track('contact_page_clicked')}>
            START PROJECT
          </ButtonLink>
          <ButtonLink href="https://wa.me/919313220796" outline onClick={() => track('whatsapp_clicked')}>
            WHATSAPP US
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#f8fafc] text-slate-700 w-full pt-16 pb-10 overflow-hidden border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Logo />
            <p className="text-slate-600 max-w-sm leading-relaxed text-xs sm:text-sm font-normal mt-4">
              Engineering digital systems that scale and perform. <br />Built with clarity, reliability, and purpose.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500">Platform</h4>
              <ul className="space-y-2.5 font-mono text-xs">
                <li><a href="#work" className="text-slate-600 hover:text-blue-600 transition-colors">Work</a></li>
                <li><a href="#capabilities" className="text-slate-600 hover:text-blue-600 transition-colors">Capabilities</a></li>
                <li><a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a></li>
                <li><a href="#vision" className="text-slate-600 hover:text-blue-600 transition-colors">Vision</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500">Company</h4>
              <ul className="space-y-2.5 font-mono text-xs">
                <li><a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#process" className="text-slate-600 hover:text-blue-600 transition-colors">Process</a></li>
                <li><a href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500">Direct Contact</h4>
              <ul className="space-y-2 font-mono text-xs text-slate-600">
                <li>DEV SOLANKI: +91 9313220796</li>
                <li>HET VEKARIYA: +91 9712945544</li>
                <li><a href="mailto:automatevision06@gmail.com" className="text-blue-600 hover:underline">automatevision06@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          <div>© 2026 AUTOMATE VISION. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <span>PRIVACY POLICY</span>
            <span>TERMS OF SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function StudioWebsite() {
  useEffect(() => { track('qr_landing'); }, []);
  return (
    <div className="noise-bg min-h-screen bg-[#fbfcfd] text-slate-900">
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <TheVision />
        <Capabilities />
        <Work />
        <Services />
        <Process />
        <Technology />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
