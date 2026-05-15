/**
 * Centralized event tracking utility.
 * Fires events to GA4 (gtag) and Meta Pixel (fbq) when available.
 *
 * Usage:
 *   import { trackEvent } from '@/lib/trackEvent';
 *   trackEvent('generate_lead', { form_name: 'demo_class', city: 'Mumbai' });
 */

// GA4 event name → Meta Pixel standard event mapping
const GA4_TO_META_EVENT: Record<string, string> = {
  generate_lead: 'Lead',
  sign_up: 'CompleteRegistration',
  purchase: 'Purchase',
  begin_checkout: 'InitiateCheckout',
  add_to_cart: 'AddToCart',
  view_item: 'ViewContent',
  search: 'Search',
  contact: 'Contact',
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  // ── GA4 via gtag ──
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }

  // ── Meta Pixel via fbq ──
  if (typeof window !== 'undefined' && window.fbq) {
    const metaEvent = GA4_TO_META_EVENT[eventName];
    if (metaEvent) {
      // Use standard event name for known mappings
      window.fbq('track', metaEvent, params);
    } else {
      // Use custom event for unmapped names
      window.fbq('trackCustom', eventName, params);
    }
  }
}
