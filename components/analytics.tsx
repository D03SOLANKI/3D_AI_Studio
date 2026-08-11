import { ReactNode } from 'react';

type EventName =
  | 'qr_landing'
  | 'cta_click'
  | 'project_opened'
  | 'case_study_opened'
  | 'demo_launched'
  | 'contact_clicked'
  | 'contact_page_clicked'
  | 'contact_form_submitted'
  | 'whatsapp_clicked'
  | 'email_clicked'
  | 'github_clicked'
  | 'linkedin_clicked';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    __analytics?: {
      track: (event: EventName, properties?: Record<string, unknown>) => void;
    };
  }
}

export function track(event: EventName, properties?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('event', event, properties);
  }
  if (window.__analytics?.track) {
    window.__analytics.track(event, properties);
  }
}

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
