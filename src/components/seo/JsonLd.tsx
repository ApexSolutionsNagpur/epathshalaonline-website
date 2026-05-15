import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.epathshalaonline.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'ePathshala Online School',
  alternateName: 'ePathshala Online',
  url: siteUrl,
  logo: `${siteUrl}/images/footerlogo.png`,
  description:
    "India's recognized online CBSE school providing high-quality education with AI/Robotics, Sports, Art, and Dance programs for Grades 1-12.",
  telephone: ['+91-7887889302', '+91-7887889304', '+91-7887889306'],
  email: 'info@epathshalaonline.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/epathshala.online.school/',
    'https://www.instagram.com/epathshalaonline/',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-7887889306',
      contactType: 'admissions',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Academic Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'CBSE Academic Program (Grade 1-12)',
          provider: { '@type': 'School', name: 'ePathshala Online School' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'AIRoboticsShala - AI & Robotics Program',
          provider: { '@type': 'School', name: 'ePathshala Online School' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'SportsShala - Online Sports Academy',
          provider: { '@type': 'School', name: 'ePathshala Online School' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'ArtShala - Creative Arts Program',
          provider: { '@type': 'School', name: 'ePathshala Online School' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'DanceShala - Premium Dance Academy',
          provider: { '@type': 'School', name: 'ePathshala Online School' },
        },
      },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ePathshala Online School',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is ePathshala Online a recognized school?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, ePathshala Online is India's recognized online school providing CBSE-aligned education for students from Grade 1 to 12.",
      },
    },
    {
      '@type': 'Question',
      name: 'What grades does ePathshala Online offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ePathshala Online offers admissions from Nursery to Grade 8, with CBSE Academic, JEE & NEET Foundation, and STEM & Coding programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What extra-curricular programs are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ePathshala offers AIRoboticsShala (AI & Robotics), SportsShala (Sports Academy), ArtShala (Creative Arts), and DanceShala (Dance Academy) as specialized programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I enroll my child at ePathshala Online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can enroll by filling the enrollment form on our website or calling/WhatsApp at +91-7887889306. Admissions are open for the 2026-27 academic year.',
      },
    },
  ],
};

/**
 * Server component that injects JSON-LD structured data into the page.
 * Import this into the root layout to enable rich results in search engines.
 */
export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
