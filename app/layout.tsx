import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { AnalyticsProvider } from '@/components/analytics';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const STUDIO_NAME = 'AUTOMATE VISION';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.automatevision.com'),
  title: `${STUDIO_NAME} | AI Automation & Digital Solutions`,
  description:
    'AUTOMATE VISION architects AI systems that work for you — AI Agents, Voice AI Receptionists, WhatsApp & Social Automation, AI Chatbots, Websites + AI, and Business Automation.',
  keywords: [
    'AUTOMATE VISION',
    'AI automation',
    'digital solutions',
    'AI agents',
    'AI receptionists',
    'AI chatbots',
    'websites AI',
    'WhatsApp automation',
    'business automation',
    'Dev Solanki',
    'Het Vekariya',
  ],
  openGraph: {
    type: 'website',
    title: `${STUDIO_NAME} | AI Automation & Digital Solutions`,
    description:
      'AI Systems That Work For You — AI Agents, Voice AI Receptionists, WhatsApp Automation, Websites + AI, and Business Automation.',
    siteName: STUDIO_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${STUDIO_NAME} | AI Automation & Digital Solutions`,
    description:
      'AI Systems That Work For You — AI Agents, Voice AI Receptionists, WhatsApp Automation, Websites + AI, and Business Automation.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
