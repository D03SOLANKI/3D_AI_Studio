export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  metrics?: string[];
  architecture: string[];
  problem: string;
  solution: string;
  result: string;
  accent: string;
  visual: 'voice' | 'nlp' | 'vision' | 'rag' | 'data';
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 'ai-receptionist',
    number: '01',
    title: 'AI Receptionist',
    category: 'VOICE AI • AUTOMATION • APPOINTMENTS',
    description:
      'An AI-powered voice receptionist that answers calls, understands customers, checks availability and manages appointments automatically.',
    technologies: ['Vapi', 'Sarvam AI', 'n8n', 'Cal.com', 'FastAPI', 'Supabase', 'Google Calendar'],
    features: ['Voice conversations', 'Multilingual interaction', 'Appointment booking', 'Availability checking', 'Rescheduling', 'Cancellation', 'Customer FAQs', 'Calendar integration', 'Workflow automation'],
    architecture: ['CALLER', 'VOICE AI', 'AI RECEPTIONIST', 'N8N', 'INTENT ROUTER', 'AVAILABILITY / BOOKING / CANCELLATION', 'CAL.COM', 'CALENDAR'],
    problem: 'Businesses lose time and leads when calls go unanswered or appointments require manual coordination.',
    solution: 'A multilingual voice agent that handles the conversation, understands intent and executes scheduling workflows without human intervention.',
    result: 'A complete voice-to-calendar workflow designed for reliable customer conversations and operational follow-through.',
    accent: '#00d9ff',
    visual: 'voice',
  },
  {
    id: 'tender-intelligence',
    number: '02',
    title: 'Tender Intelligence',
    category: 'AI/ML • NLP • DATA',
    description: 'An intelligent classification system that analyzes government tender descriptions and categorizes them automatically.',
    technologies: ['Python', 'NLTK', 'TF-IDF', 'Sentence Transformers', 'XGBoost', 'FlashText'],
    features: ['23K+ keywords', 'Automated classification', 'Multi-label support', 'Learning pipeline'],
    metrics: ['23K+ keywords'],
    architecture: ['TENDER DATA', 'TEXT PROCESSING', 'FEATURE ENGINEERING', 'CLASSIFICATION', 'CATEGORIES'],
    problem: 'Large tender datasets are difficult to scan consistently and classify by hand.',
    solution: 'A structured NLP and machine learning pipeline for extracting signal from tender descriptions and assigning relevant categories.',
    result: 'A repeatable classification workflow with multi-label support and a learning pipeline.',
    accent: '#78a9ff',
    visual: 'nlp',
  },
  {
    id: 'handspeak',
    number: '03',
    title: 'HandSpeak',
    category: 'COMPUTER VISION • AI/ML',
    description: 'An AI-powered sign language recognition system that interprets hand gestures in real time and converts them into accessible communication.',
    technologies: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Streamlit', 'pyttsx3'],
    features: ['Real-time gesture recognition', 'Hand landmark tracking', 'Accessible communication', 'Speech output'],
    architecture: ['CAMERA', 'HAND LANDMARKS', 'GESTURE MODEL', 'SIGN INTERPRETATION', 'VOICE OUTPUT'],
    problem: 'Real-time sign language interpretation needs to be responsive, understandable and accessible.',
    solution: 'A computer vision pipeline that tracks hand landmarks, recognizes gestures and turns them into a usable communication layer.',
    result: 'A working real-time recognition experience designed to make interaction more accessible.',
    accent: '#7dd3fc',
    visual: 'vision',
  },
  {
    id: 'property-intelligence',
    number: '04',
    title: 'Property Intelligence',
    category: 'RAG • AI • DATA',
    description: 'A RAG-powered property analysis system designed to extract and analyze property information efficiently.',
    technologies: ['Python', 'RAG', 'Embeddings', 'Vector Search', 'Supabase'],
    features: ['Document retrieval', 'Property analysis', 'Context-aware answers', 'Efficient prompt context'],
    metrics: ['60% API token consumption reduction'],
    architecture: ['PROPERTY DATA', 'DOCUMENT PROCESSING', 'EMBEDDINGS', 'RETRIEVAL', 'AI ANALYSIS'],
    problem: 'Property information is often spread across documents, making analysis slow and context-heavy.',
    solution: 'A retrieval-augmented analysis system that finds relevant property context before generating an answer.',
    result: '60% API token consumption reduction through more focused context retrieval.',
    accent: '#67e8f9',
    visual: 'rag',
  },
  {
    id: 'intelligent-data-extraction',
    number: '05',
    title: 'Intelligent Data Extraction',
    category: 'SCRAPING • DATA ENGINEERING • AUTOMATION',
    description: 'Automated systems for extracting, processing and organizing data from complex websites and documents.',
    technologies: ['Playwright', 'Python', 'PyMuPDF', 'pdfplumber', 'MongoDB'],
    features: ['Browser automation', 'PDF processing', 'Data cleaning', 'Structured storage', 'Analytics-ready output'],
    architecture: ['WEBSITES', 'PLAYWRIGHT', 'DATA EXTRACTION', 'PDF PROCESSING', 'DATA CLEANING', 'DATABASE', 'ANALYTICS / AUTOMATION'],
    problem: 'Valuable business data is trapped in complex websites and documents that resist simple exports.',
    solution: 'A resilient extraction pipeline that navigates, parses, cleans and organizes data for downstream workflows.',
    result: 'Structured, automation-ready data from complex digital sources.',
    accent: '#38bdf8',
    visual: 'data',
  },
];
