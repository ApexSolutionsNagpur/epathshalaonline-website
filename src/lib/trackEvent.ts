/**
 * Centralized event tracking utility.
 * Fires events to GA4 (gtag) and Meta Pixel (fbq) when available.
 *
 * Usage:
 *   import { trackEvent } from '@/lib/trackEvent';
 *   trackEvent('generate_lead', { form_name: 'demo_class', city: 'Mumbai' });
 *
 * Survey 2026 events used in this codebase:
 *   - video_complete      → user finished the mandatory intro video
 *   - form_start          → user first interacted with any wizard field
 *   - survey_step_complete → user advanced past a wizard step (pass { step })
 *   - form_submit         → user successfully submitted the survey
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
