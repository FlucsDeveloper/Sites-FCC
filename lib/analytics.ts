declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    fbq?: (command: string, ...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackCTAClick = (label: string) => {
  trackEvent('cta_click', { label });
};

export const trackFormSubmit = (formType: string) => {
  trackEvent('form_submit', { form_type: formType });
};

export const trackCalendlyOpen = () => {
  trackEvent('calendly_open');
};
