declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    clarity: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

export {};
