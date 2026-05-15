// src/lib/trackLead.ts

interface LeadTrackingData {
  form_name: string;
  programme?: string;
  grade?: string;
  city?: string;
  email?: string;
  phone?: string;
  student_name?: string;
  parent_name?: string;
  value?: number;
}

export const trackLead = (data: LeadTrackingData) => {
  const {
    form_name,
    programme,
    grade,
    city,
    email,
    phone,
    student_name,
    parent_name,
    value = 0,
  } = data;

  try {
    // ============================================
    // 1. Google Analytics 4 - generate_lead event
    // ============================================
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        currency: 'INR',
        value: value,
        form_name,
        programme: programme || 'not_specified',
        grade: grade || 'not_specified',
        city: city || 'not_specified',
      });
    }

    // ============================================
    // 2. Meta Pixel - "Lead" STANDARD event
    // ============================================
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: form_name,
        content_category: programme || 'General',
        currency: 'INR',
        value: value,
      });

      // Advanced Matching - email/phone se Meta user ko match karega
      if (email || phone) {
        const userData: Record<string, string> = {};
        if (email) userData.em = email.toLowerCase().trim();
        if (phone) userData.ph = phone.replace(/\D/g, ''); // sirf digits
        if (student_name) userData.fn = student_name.toLowerCase().trim();
        if (parent_name) userData.ln = parent_name.toLowerCase().trim();
        if (city) userData.ct = city.toLowerCase().trim();
        userData.country = 'in';

        window.fbq('init', process.env.NEXT_PUBLIC_META_PIXEL_ID!, userData);
      }
    }

    // ============================================
    // 3. Microsoft Clarity - Tag the session
    // ============================================
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('set', 'lead_submitted', 'true');
      window.clarity('set', 'form_name', form_name);
      if (programme) window.clarity('set', 'programme_interest', programme);
      if (grade) window.clarity('set', 'grade_level', grade);
      if (city) window.clarity('set', 'city', city);

      // Custom event - dashboard pe filter ke liye
      window.clarity('event', 'lead_submitted');

      // Upgrade session - Clarity isko priority session bana dega
      window.clarity('upgrade', 'lead_conversion');
    }

    // Debug log
    console.log('✅ Lead tracked across all platforms:', form_name);
  } catch (error) {
    console.error('❌ Lead tracking error (non-blocking):', error);
  }
};
