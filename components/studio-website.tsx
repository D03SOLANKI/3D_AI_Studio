'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, ExternalLink, Github, Globe2, Linkedin, Mail, Menu, MessageCircle, Network, Phone, Play, X, Zap } from 'lucide-react';
import { StudioCanvas } from '@/components/studio-canvas';
import { HeroAiCanvas } from '@/components/hero-ai-canvas';
import { projects, type Project } from '@/lib/projects';
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
  ['AI', 'OpenAI', 'Gemini', 'Claude', 'Groq', 'Sarvam AI'],
  ['DEVELOPMENT', 'React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'Node.js'],
  ['AUTOMATION', 'n8n', 'APIs', 'Webhooks', 'WhatsApp API'],
  ['DATA', 'PostgreSQL', 'MongoDB', 'Supabase'],
  ['AI/ML', 'TensorFlow', 'PyTorch', 'OpenCV', 'LangChain', 'LangGraph'],
  ['INFRASTRUCTURE', 'Vercel', 'Docker', 'GitHub'],
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3.5" aria-label="AUTOMATE VISION home">
      <AutomateVisionLogo className="h-9 w-9 shrink-0 drop-shadow-[0_0_15px_rgba(0,102,255,0.7)]" />
      <div className="flex flex-col">
        <span className="font-mono text-xs font-extrabold tracking-[0.24em] text-white">
          AUTOMATE<span className="text-cyan-400"> VISION</span>
        </span>
        <span className="font-mono text-[8px] tracking-[0.16em] text-zinc-400">AI AUTOMATION & DIGITAL SOLUTIONS</span>
      </div>
    </a>
  );
}

function ButtonLink({ href, children, outline = false, onClick }: { href: string; children: React.ReactNode; outline?: boolean; onClick?: () => void }) {
  return <a href={href} onClick={onClick} className={`group inline-flex items-center gap-3 rounded-full px-5 py-3 font-mono text-[10px] font-semibold tracking-[0.18em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${outline ? 'border border-white/15 text-white hover:border-accent/60 hover:bg-accent/10' : 'bg-white text-black hover:bg-accent hover:text-black'}`}>{children}<ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" /></a>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [['WORK', '#work'], ['SERVICES', '#services'], ['PROCESS', '#process'], ['ABOUT', '#about'], ['CONTACT', '#contact']];
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"><Logo /><nav className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="font-mono text-[10px] tracking-[0.18em] text-zinc-500 transition-colors hover:text-white">{label}</a>)}</nav><div className="hidden md:block"><ButtonLink href="/contact" onClick={() => track('cta_click', { location: 'nav' })}>LET&apos;S BUILD</ButtonLink></div><button className="rounded-full border border-white/10 p-2.5 text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div><AnimatePresence>{open && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/[0.06] bg-[#050505] px-5 py-5 md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/[0.06] py-4 font-mono text-xs tracking-[0.2em] text-zinc-300">{label}</a>)}<a href="/contact" onClick={() => setOpen(false)} className="mt-5 block rounded-full bg-white px-5 py-3 text-center font-mono text-[10px] font-semibold tracking-[0.18em] text-black">LET&apos;S BUILD <ArrowRight className="ml-2 inline h-3.5 w-3.5" /></a></motion.nav>}</AnimatePresence></header>;
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden border-b border-white/[0.06] pt-20">
      {/* Dynamic 60fps Interactive Neural Particle Wave Canvas */}
      <HeroAiCanvas />

      {/* Layered Cybernetic Video Stream */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-35 mix-blend-screen"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-digital-lines-41551-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-blue-digital-technology-network-nodes-42795-large.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Sleek Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/85 via-[#050505]/45 to-[#050505]/95 z-10" />

        {/* Sci-Fi Beam Lines */}
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse z-10" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-10" />
      </div>

      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[110px] pointer-events-none" />
      
      <div className="absolute inset-0 opacity-60 pointer-events-none z-0">
        <StudioCanvas />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-3 font-mono text-[10px] tracking-[0.24em] text-accent">
            <span className="h-px w-8 bg-accent" />
            AUTOMATE VISION // AI AUTOMATION & DIGITAL SOLUTIONS
          </div>
          <h1 className="max-w-xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-white sm:text-7xl lg:text-[6.5rem]">
            AI SYSTEMS <br />
            <span className="text-gradient-accent">THAT WORK FOR YOU</span>
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-7 text-zinc-400 sm:text-lg">
            AI Agents, Voice AI Receptionists, AI Chatbots, Websites + AI, Business Automation, and WhatsApp Automation engineered to scale your operations.
          </p>
          <p className="mt-6 font-mono text-[9px] tracking-[0.18em] text-zinc-500">
            AUTOMATE <span className="text-accent">•</span> INNOVATE <span className="text-accent">•</span> ELEVATE
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#work" onClick={() => track('cta_click', { location: 'hero_work' })}>
              EXPLORE OUR WORK
            </ButtonLink>
            <ButtonLink href="mailto:automatevision06@gmail.com" outline onClick={() => track('cta_click', { location: 'hero_contact' })}>
              LET&apos;S BUILD
            </ButtonLink>
          </div>
        </div>
        <div className="mt-24 flex items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-zinc-600">
          <span className="animate-scroll-indicator">
            <ChevronDown className="h-4 w-4 text-accent" />
          </span>
          SCROLL TO EXPLORE AUTOMATE VISION
        </div>
      </div>
      <div className="absolute bottom-0 right-5 hidden font-mono text-[9px] tracking-[0.2em] text-zinc-700 sm:right-8 sm:block z-10">
        SYS.INIT
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    'AI AGENTS',
    'AI RECEPTIONISTS',
    'AI CHATBOTS',
    'WEBSITES + AI',
    'BUSINESS AUTOMATION',
    'WHATSAPP AUTOMATION',
    'VOICE AI AGENTS',
    'RAG ENGINE PIPELINES',
    'NEXT.JS 14+ WEBSITES',
    'PYTHON AI SYSTEMS',
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#040404] py-8">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8 font-mono text-xs tracking-[0.24em] text-zinc-400">
            <span className="text-cyan-400">•</span>
            <span className="hover:text-white transition-colors cursor-default">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className="mb-14 max-w-2xl"><div className="mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.24em] text-accent"><span className="h-px w-8 bg-accent" />{eyebrow}</div><h2 className={`text-4xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl ${light ? 'text-black' : 'text-white'}`}>{title}<span className={light ? 'text-cyan-600' : 'text-accent'}>.</span></h2>{description && <p className={`mt-6 max-w-lg text-base leading-7 ${light ? 'text-zinc-600' : 'text-zinc-400'}`}>{description}</p>}</div>;
}

function Capabilities() {
  const [active, setActive] = useState(0);
  return <section id="capabilities" className="relative border-b border-white/[0.06] py-28 sm:py-36"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="CAPABILITIES" title="WHAT WE BUILD" description="From AI agents and voice receptionists to AI-powered websites and business automation, we build technology around real business workflows." /><div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]"><div className="space-y-2">{capabilities.map((capability, index) => { const Icon = capability.icon; return <button key={capability.id} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={`group flex w-full items-center gap-4 rounded-xl border p-5 text-left transition-all duration-500 ${active === index ? 'border-accent/45 bg-accent/[0.07] shadow-[0_0_35px_rgba(0,217,255,0.06)]' : 'border-white/[0.07] bg-white/[0.015] hover:border-white/20'}`}><span className={`grid h-10 w-10 place-items-center rounded-lg border transition-colors ${active === index ? 'border-accent/40 bg-accent/10 text-accent' : 'border-white/10 text-zinc-500'}`}><Icon className="h-4 w-4" /></span><span className="flex-1 font-semibold tracking-[0.16em] text-white">{capability.title}</span><ArrowRight className={`h-4 w-4 transition-all ${active === index ? 'translate-x-0 text-accent opacity-100' : '-translate-x-2 text-zinc-600 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} /></button>; })}</div><motion.div key={active} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[310px] overflow-hidden rounded-xl border border-accent/20 bg-[#090f11] p-7 sm:p-9"><div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/[0.08] blur-[60px]" /><div className="relative"><div className="mb-14 font-mono text-[10px] tracking-[0.2em] text-accent">MODULE // {capabilities[active].title}</div><h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">{capabilities[active].title}</h3><p className="mt-4 max-w-sm leading-7 text-zinc-400">{capabilities[active].description}</p><div className="mt-7 flex flex-wrap gap-2">{capabilities[active].examples.map((example) => <span key={example} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] tracking-[0.08em] text-zinc-400">{example}</span>)}</div></div><div className="absolute bottom-6 right-7 font-mono text-[9px] tracking-[0.2em] text-zinc-700">ACTIVE NODE</div></motion.div></div></div></section>;
}

function ProjectVisual({ project }: { project: Project }) {
  return <div className="relative h-56 overflow-hidden border-b border-white/[0.07] bg-[#080c0d]"><div className="absolute inset-0 grid-bg-fine opacity-60" /><div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30 shadow-[0_0_50px_rgba(0,217,255,0.13)]" style={{ borderColor: `${project.accent}55` }}><div className="absolute inset-5 rounded-full border border-dashed border-accent/40" style={{ borderColor: `${project.accent}66` }} /><div className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_#00d9ff]" style={{ backgroundColor: project.accent, boxShadow: `0 0 20px ${project.accent}` }} /></div>{[0, 1, 2, 3].map((i) => <span key={i} className="absolute h-1.5 w-1.5 rounded-full bg-accent" style={{ left: `${18 + i * 22}%`, top: `${25 + (i % 2) * 45}%`, backgroundColor: project.accent, boxShadow: `0 0 10px ${project.accent}` }} />)}<div className="absolute bottom-4 left-5 font-mono text-[9px] tracking-[0.18em] text-zinc-600">VISUAL.SYSTEM // {project.visual.toUpperCase()}</div></div>;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-8" onClick={onClose}><motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} onClick={(event) => event.stopPropagation()} className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c0d] shadow-2xl"><div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-8"><div className="font-mono text-[10px] tracking-[0.2em] text-accent">CASE STUDY</div><button onClick={onClose} className="rounded-full border border-white/10 p-2 text-zinc-400 transition-colors hover:text-white" aria-label="Close case study"><X className="h-4 w-4" /></button></div><div className="grid lg:grid-cols-[1.05fr_0.95fr]"><div className="p-6 sm:p-10"><div className="font-mono text-[10px] tracking-[0.18em] text-zinc-500">{project.category}</div><h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl">{project.title}<span className="text-accent">.</span></h2><p className="mt-6 leading-7 text-zinc-400">{project.description}</p><div className="mt-8 grid gap-6 sm:grid-cols-2"><div><div className="font-mono text-[9px] tracking-[0.18em] text-accent">THE PROBLEM</div><p className="mt-3 text-sm leading-6 text-zinc-400">{project.problem}</p></div><div><div className="font-mono text-[9px] tracking-[0.18em] text-accent">THE SOLUTION</div><p className="mt-3 text-sm leading-6 text-zinc-400">{project.solution}</p></div></div><div className="mt-8"><div className="font-mono text-[9px] tracking-[0.18em] text-accent">TECHNOLOGY</div><div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded border border-white/10 px-2.5 py-1.5 font-mono text-[9px] text-zinc-400">{tech}</span>)}</div></div><div className="mt-8"><div className="font-mono text-[9px] tracking-[0.18em] text-accent">RESULT</div><p className="mt-3 text-sm leading-6 text-zinc-300">{project.result}</p></div></div><div className="border-t border-white/[0.07] bg-[#070909] p-6 sm:p-10 lg:border-l lg:border-t-0"><div className="font-mono text-[9px] tracking-[0.18em] text-accent">ARCHITECTURE</div><div className="mt-6 space-y-2">{project.architecture.map((step) => <div key={step} className="flex items-center gap-3"><span className="rounded border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-[10px] tracking-[0.08em] text-zinc-300">{step}</span></div>)}</div>{project.metrics && <div className="mt-8 border-t border-white/[0.07] pt-6"><div className="font-mono text-[9px] tracking-[0.18em] text-accent">VERIFIED SIGNALS</div>{project.metrics.map((metric) => <div key={metric} className="mt-3 text-2xl font-semibold text-white">{metric}</div>)}</div>}</div></div></motion.div></motion.div>;
}

function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  return <section id="work" className="relative border-b border-white/[0.06] py-28 sm:py-36"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="SELECTED WORK" title="SYSTEMS THAT SHIP" description="Systems and AI websites engineered by AUTOMATE VISION to solve real-world business problems." /><div className="grid gap-4 md:grid-cols-2">{projects.map((project, index) => <motion.button key={project.id} whileHover={{ y: -4 }} onClick={() => { setSelected(project); track('project_opened', { project: project.id }); }} className={`group overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] text-left transition-colors hover:border-accent/40 ${index === 0 ? 'md:col-span-2 lg:grid lg:grid-cols-2' : ''}`}><ProjectVisual project={project} /><div className="p-6 sm:p-7"><div className="flex items-center justify-between font-mono text-[9px] tracking-[0.18em] text-zinc-600"><span>{project.category}</span><ArrowUpRight className="h-4 w-4" /></div><h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">{project.title}<span className="text-accent">.</span></h3><p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.technologies.slice(0, 5).map((tech) => <span key={tech} className="font-mono text-[9px] tracking-[0.08em] text-zinc-600">{tech}</span>)}</div><div className="mt-7 flex items-center gap-2 font-mono text-[9px] font-semibold tracking-[0.18em] text-white transition-colors group-hover:text-accent">VIEW CASE STUDY <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></div></div></motion.button>)}</div></div><AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence></section>;
}

function SystemMap() {
  return <section className="relative overflow-hidden border-b border-white/[0.06] py-28 sm:py-36"><div className="absolute inset-0 grid-bg opacity-40" /><div className="relative mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="SYSTEM MAP" title="CONNECT YOUR BUSINESS TO INTELLIGENCE" description="We connect disconnected tools, web portals, and WhatsApp channels into intelligent workflows that move information seamlessly." /><div className="relative mx-auto max-w-4xl rounded-2xl border border-accent/20 bg-[#071012] p-6 sm:p-12"><div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.08),transparent_55%)]" /><div className="relative grid grid-cols-3 items-center gap-5 sm:gap-10"><div className="space-y-16 text-right font-mono text-[10px] tracking-[0.14em] text-zinc-400 sm:text-xs"><div>AI WEBSITE</div><div>WHATSAPP</div></div><div className="relative flex flex-col items-center gap-7"><div className="absolute left-1/2 top-1/2 h-[180%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent/50 to-transparent" /><div className="relative grid h-28 w-28 place-items-center rounded-full border border-accent/50 bg-[#0b242a] text-center font-mono text-[10px] tracking-[0.14em] text-accent shadow-[0_0_50px_rgba(0,217,255,0.18)] sm:h-36 sm:w-36"><span>AI<br />CORE</span></div><div className="relative flex h-16 w-40 items-center justify-center rounded-lg border border-accent/25 bg-[#0a181a] font-mono text-[9px] tracking-[0.12em] text-zinc-300">AUTOMATION ENGINE</div></div><div className="space-y-16 font-mono text-[10px] tracking-[0.14em] text-zinc-400 sm:text-xs"><div>VOICE AI</div><div>DATA</div></div></div><div className="mt-12 flex items-center justify-center gap-4 border-t border-white/10 pt-8 font-mono text-[10px] tracking-[0.14em] text-zinc-500"><span className="h-px w-12 bg-accent/50" />DATABASE<span className="h-px w-12 bg-accent/50" /></div></div></div></section>;
}

function Services() {
  return <section id="services" className="border-b border-white/[0.06] py-28 sm:py-36"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="SERVICES" title="WHAT WE CAN BUILD FOR YOU" description="Focused engineering capabilities by AUTOMATE VISION for teams ready to make work more intelligent." /><div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-6">{services.map((service) => <div key={service.title} className="bg-[#080808] p-6 transition-colors hover:bg-[#0c1011]"><h3 className="mt-6 min-h-[48px] text-sm font-semibold tracking-[0.12em] text-white">{service.title}</h3><ul className="mt-7 space-y-3">{service.items.map((item) => <li key={item} className="flex items-center gap-2 text-xs text-zinc-500"><Check className="h-3 w-3 text-accent" />{item}</li>)}</ul></div>)}</div></div></section>;
}

function Process() {
  return <section id="process" className="border-b border-white/[0.06] py-28 sm:py-36"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="PROCESS" title="HOW WE BUILD" description="From an idea to a production-ready AI website or automation system." /><div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3 lg:grid-cols-6">{processSteps.map(([title, copy]) => <div key={title} className="group relative bg-[#080808] p-6 transition-colors hover:bg-[#0c1011]"><h3 className="mt-6 text-sm font-semibold tracking-[0.14em] text-white">{title}</h3><p className="mt-4 text-xs leading-5 text-zinc-500">{copy}</p><div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" /></div>)}</div></div></section>;
}

function Technology() {
  return <section className="border-b border-white/[0.06] py-28 sm:py-36"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="TECHNOLOGY" title="THE RIGHT TOOLS FOR THE JOB" description="Technology is supporting evidence. The system and the outcome come first." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{techGroups.map(([name, ...tools]) => <div key={name} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6"><div className="font-mono text-[9px] tracking-[0.18em] text-accent">{name}</div><div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">{tools.map((tool) => <span key={tool} className="text-sm text-zinc-300">{tool}</span>)}</div></div>)}</div></div></section>;
}

function WhyUs() {
  const points = [['BUSINESS FIRST', 'We don&apos;t build technology for the sake of technology. We build around actual business workflows.'], ['AI FIRST', 'We identify where AI can eliminate repetitive work and improve customer experiences.'], ['END-TO-END', 'From architecture and development to deployment and integration.'], ['BUILT TO SCALE', 'Systems are designed with maintainability, reliability and future growth in mind.']];
  return <section className="border-b border-white/[0.06] bg-white py-28 text-black sm:py-36"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="WHY US" title="ENGINEERED FOR REAL BUSINESS PROBLEMS" description="Practical systems, clear thinking and technology that earns its place in the workflow." light /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{points.map(([title, copy]) => <div key={title} className="border-t border-black/15 pt-5"><h3 className="mt-6 text-lg font-semibold tracking-[-0.02em]">{title}</h3><p className="mt-4 text-sm leading-6 text-zinc-600">{copy}</p></div>)}</div></div></section>;
}

function About() {
  return (
    <section id="about" className="border-b border-white/[0.06] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="ABOUT AUTOMATE VISION"
          title="AI SYSTEMS THAT WORK FOR YOU"
          description="AUTOMATE VISION is an AI Automation & Digital Solutions studio. We architect AI Agents, Voice AI Receptionists, AI Chatbots, Websites + AI, WhatsApp Automation, and Business Automation."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Dev Solanki */}
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-cyan-500/40">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-400">
                DS
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">DEV SOLANKI</h3>
                <p className="font-mono text-xs text-cyan-400">FOUNDER & CEO</p>
              </div>
            </div>
            <p className="mt-5 text-xs leading-6 text-zinc-400">
              Leading AI systems architecture, full-stack web engineering, machine learning pipelines, and autonomous agent design.
            </p>
            <div className="mt-6 font-mono text-[10px] text-zinc-500">
              TEL: <a href="tel:+919313220796" className="text-zinc-300 hover:text-cyan-400">+91 9313220796</a>
            </div>
          </div>

          {/* Het Vekariya */}
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-cyan-500/40">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-400">
                HV
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">HET VEKARIYA</h3>
                <p className="font-mono text-xs text-cyan-400">FOUNDER & CEO</p>
              </div>
            </div>
            <p className="mt-5 text-xs leading-6 text-zinc-400">
              Driving business automation strategies, client operations, digital solutions, and enterprise growth engineering.
            </p>
            <div className="mt-6 font-mono text-[10px] text-zinc-500">
              TEL: <a href="tel:+919712945544" className="text-zinc-300 hover:text-cyan-400">+91 9712945544</a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.015] p-5 font-mono text-xs tracking-[0.2em] text-zinc-400">
          <span>AUTOMATE</span>
          <span className="text-cyan-400">•</span>
          <span>INNOVATE</span>
          <span className="text-cyan-400">•</span>
          <span>ELEVATE</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-44">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="mb-6 font-mono text-[10px] tracking-[0.24em] text-cyan-400">AUTOMATE VISION // CONTACT</div>
        <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl">
          READY TO BUILD YOUR <br />
          <span className="text-gradient-accent">INTELLIGENT SYSTEM?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-base leading-7 text-zinc-400">
          Get in touch with DEV SOLANKI & HET VEKARIYA to architect AI solutions tailored for your business.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact" onClick={() => track('contact_page_clicked')}>
            CONTACT US PAGE
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
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <div className="flex gap-5 font-mono text-[9px] tracking-[0.16em] text-zinc-500">
          <a href="#work" className="hover:text-white">WORK</a>
          <a href="#services" className="hover:text-white">SERVICES</a>
          <a href="#about" className="hover:text-white">ABOUT</a>
          <a href="#contact" className="hover:text-white">CONTACT</a>
        </div>
        <div className="font-mono text-[9px] tracking-[0.14em] text-zinc-500">
          © 2026 AUTOMATE VISION. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

export function StudioWebsite() {
  useEffect(() => { track('qr_landing'); }, []);
  return <div className="noise-bg min-h-screen bg-[#050505]"><Navigation /><main><Hero /><Marquee /><Capabilities /><Work /><SystemMap /><Services /><Process /><Technology /><WhyUs /><About /><Contact /></main><Footer /></div>;
}
