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

const STUDIO_NAME = 'DevSolanki Studio';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: `AI Engineering & Automation Studio | ${STUDIO_NAME}`,
  description:
    'We build AI agents, voice AI, business automation, custom software and intelligent data systems engineered to solve real business problems.',
  keywords: [
    'AI engineering',
    'automation studio',
    'AI agents',
    'voice AI',
    'business automation',
    'custom software',
    'RAG systems',
    'data scraping',
    'SaaS development',
  ],
  openGraph: {
    type: 'website',
    title: `AI Engineering & Automation Studio | ${STUDIO_NAME}`,
    description:
      'We build AI agents, voice AI, business automation, custom software and intelligent data systems.',
    siteName: STUDIO_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `AI Engineering & Automation Studio | ${STUDIO_NAME}`,
    description:
      'We build AI agents, voice AI, business automation, custom software and intelligent data systems.',
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
