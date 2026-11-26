/**
 * SEO: site URL, page titles and descriptions, service FAQs and the JSON-LD builders.
 * One place to edit search copy. Titles here are the <title> text; the H1s on the pages stay as designed.
 */
import type { Metadata } from 'next'
import { CONTACT, SERVICES } from '@/lib/content'
import { SERVICE_PAGES } from '@/lib/service-pages'
import { SERVICE_PHOTOS, WORDMARK_COLOUR } from '@/lib/assets'
import type { Article } from '@/lib/insights'

/** Production origin. Override with NEXT_PUBLIC_SITE_URL (no trailing slash) if the domain differs. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://standout.ae').replace(/\/$/, '')
export const SITE_NAME = 'Standout'
export const DEFAULT_OG_IMAGE = '/og/standout-og.jpg'

export const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`)

/**
 * Social profiles for Organization `sameAs`. Only real profile URLs belong here; the placeholders in
 * CONTACT (platform home pages) are left out on purpose until the client sends the real links.
 */
export const SAME_AS: string[] = [CONTACT.linkedin, CONTACT.instagram].filter(
  (u) => !/^https:\/\/www\.(linkedin|instagram)\.com\/?$/.test(u),
)

/* ------------------------------------------------------------------ page metadata */

type PageSeo = { title: string; description: string; path: string; image?: string; noindex?: boolean; type?: 'website' | 'article' }

/** Builds a page's metadata: title, description, canonical, Open Graph and Twitter card. */
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, noindex, type = 'website' }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type, url: path, title, description, siteName: SITE_NAME, locale: 'en_AE', images: [{ url: image, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'Exhibition Marketing Agency in Dubai & UAE | Standout',
    description:
      'Standout is a Dubai exhibition marketing agency: stand graphics, pre-show campaigns, hosts and hostesses, event photo and video, lead capture and post-show nurture, run by one team.',
  },
  about: {
    path: '/about',
    title: 'About Standout | One Exhibition Marketing Team in Dubai',
    description:
      'Meet Standout, the Dubai-based team that runs exhibition marketing before, during and after the show: design, campaigns, hosts, content, lead capture and follow-up.',
  },
  services: {
    path: '/#services',
    title: 'Exhibition Marketing Services in Dubai | Standout',
    description: 'Ten exhibition marketing services from one team in Dubai, from stand graphics to post-event lead nurturing.',
  },
  packages: {
    path: '/packages',
    title: 'Exhibition Marketing Packages: Essentials, Marketing & 360 | Standout',
    description:
      'Compare Standout’s exhibition marketing packages for UAE shows, Essentials, Marketing and 360, or build your own from ten services.',
  },
  caseStudies: {
    path: '/case-studies',
    title: 'Exhibition & Event Case Studies in the UAE | Standout',
    description:
      'Event films and exhibition work for DP World, Sobha, Milkor at IDEX and more: what we did at each show in Dubai and Abu Dhabi, and what it delivered.',
  },
  insights: {
    path: '/insights',
    title: 'Exhibition Marketing Insights & Guides | Standout',
    description:
      'Practical guides on making exhibitions pay: stand graphics, pre-show emails, hosts, lead capture and the first 48 hours of follow-up.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Standout | Exhibition Marketing Agency, JLT Dubai',
    description: `Tell us the show and the date and we’ll come back with a plan. Call ${CONTACT.phone} or email ${CONTACT.email}. Office in Jumeirah Lakes Towers, Dubai.`,
  },
} satisfies Record<string, Omit<PageSeo, 'image'>>

/* ------------------------------------------------------------------ services */

export type ServiceSeo = { title: string; description: string; keyword: string; faqs: { q: string; a: string }[] }

/** Search copy per service, keyed by slug (same slugs as SERVICE_PAGES). FAQs are drafts for the client to confirm. */
export const SERVICE_SEO: Record<string, ServiceSeo> = {
  'stand-graphics': {
    title: 'Exhibition Stand Graphics & Shell Scheme Branding in Dubai | Standout',
    description: 'Exhibition stand graphics in Dubai: wall panels, fascia, counters, screens and hanging banners designed to the organiser’s spec and delivered print-ready.',
    keyword: 'exhibition stand graphics Dubai',
    faqs: [
      { q: 'What are exhibition stand graphics?', a: 'Stand graphics are the printed and on-screen artwork on an exhibition stand: back-wall panels, the fascia board, counter wraps, screen content and hanging banners. Good stand graphics tell a passing visitor who you are and what you do in about three seconds.' },
      { q: 'Can you brand a standard shell scheme stand?', a: 'Yes. Most of our stand graphics work turns a white shell scheme into a branded space. We design every panel, the fascia and the counter as one system, built to the organiser’s panel sizes and the exhibitor manual.' },
      { q: 'Do you deliver print-ready files to our stand contractor?', a: 'Yes. Every file is checked against the exhibitor manual and supplied print-ready to your contractor or ours, in time for build-up at venues such as Dubai World Trade Centre and ADNEC.' },
    ],
  },
  'print-collateral': {
    title: 'Exhibition Print & Marketing Collateral in Dubai | Standout',
    description: 'Brochures, company profiles, portfolio books, flyers and business cards for exhibitions in Dubai and the UAE, designed to keep selling after the show.',
    keyword: 'exhibition brochure printing Dubai',
    faqs: [
      { q: 'What print collateral do exhibitors need?', a: 'Most exhibitors need a short brochure or flyer to hand out, a fuller company profile or portfolio book for serious prospects, and business cards for everyone on the stand. We design all of them in one brand system with the stand.' },
      { q: 'Do you handle printing as well as design?', a: 'Yes. We design the collateral, prepare print-ready files and can manage printing and delivery to the stand in Dubai or Abu Dhabi.' },
      { q: 'How early should we order exhibition collateral?', a: 'Allow three to four weeks before the show for design, proofing and printing. Shorter timelines are possible for simple items such as flyers and cards.' },
    ],
  },
  'email-linkedin-marketing': {
    title: 'Pre-Show Email & LinkedIn Outreach for Exhibitors | Standout',
    description: 'Pre-event email and LinkedIn campaigns that find the right visitors and book meetings at your stand before the exhibition opens.',
    keyword: 'pre-show email marketing exhibition',
    faqs: [
      { q: 'How does pre-show outreach book meetings?', a: 'We build a contact list of the people you want to meet at the show, then reach them through an email sequence and LinkedIn messages that invite them to a specific time at your stand. Accepted meetings go straight into your stand diary.' },
      { q: 'When should a pre-show campaign start?', a: 'Registered visitors usually plan their route in the two weeks before doors open, so the campaign should start three to four weeks before the show.' },
      { q: 'Do you use the organiser’s visitor list?', a: 'Where the organiser offers a pre-registered visitor list or mailing, we use it. Otherwise we build a targeted list for your sector and region.' },
    ],
  },
  'paid-advertising': {
    title: 'Event & Exhibition Digital Advertising in the UAE | Standout',
    description: 'Social ads, Google Ads and organic posts that tell your market you’re exhibiting and drive visitors to your stand at UAE exhibitions.',
    keyword: 'exhibition digital advertising UAE',
    faqs: [
      { q: 'Which ad channels work best before an exhibition?', a: 'LinkedIn ads reach B2B decision makers by job title and company, Meta ads reach wider audiences cheaply, and Google Ads catch people searching for the show or your category. Most campaigns use two or three together.' },
      { q: 'Can you target people attending a specific show?', a: 'We target by location around the venue, by interest in the show and its sector, and by the job titles that attend, which together reach most of the likely visitors.' },
      { q: 'How do you measure exhibition ads?', a: 'We track clicks, meeting bookings and stand visits from campaign links and codes, and report them alongside the leads captured on the stand.' },
    ],
  },
  'social-media-management': {
    title: 'Live Event Social Media Management in Dubai | Standout',
    description: 'Live posting, stories and reels from your stand during the exhibition, plus a content calendar for before, during and after the show.',
    keyword: 'event social media coverage Dubai',
    faqs: [
      { q: 'What does live event social media include?', a: 'A content creator on the stand posts stories, photos and short reels to your channels while the show is running, following a content calendar agreed before the event.' },
      { q: 'Do we approve posts before they go live?', a: 'Yes. We agree tone, topics and an approval process with you before the show, so live content can go out quickly without surprises.' },
      { q: 'Do you cover the weeks around the show too?', a: 'Yes. The calendar covers the build-up before the event and the follow-up content afterwards, not just the show days.' },
    ],
  },
  presentations: {
    title: 'Exhibition Screen Content & Digital Decks | Standout',
    description: 'Looping stand-screen content, tablet presentations and video wall content designed to hold attention on your exhibition stand.',
    keyword: 'exhibition screen content',
    faqs: [
      { q: 'What screen content does an exhibition stand need?', a: 'A short looping reel for the main screen that works without sound, a tablet deck your team can walk visitors through, and any content for LED or video walls.' },
      { q: 'Should stand screen content have sound?', a: 'Plan for no sound. Halls are loud, so the message has to work through motion, captions and clear visuals.' },
      { q: 'Can you build content for LED and video walls?', a: 'Yes. We design to the exact resolution and aspect ratio of your screens, including non-standard LED wall sizes.' },
    ],
  },
  'hosts-and-hostesses': {
    title: 'Exhibition Hosts & Hostesses in Dubai | Standout',
    description: 'Exhibition hosts and hostesses in Dubai and Abu Dhabi, trained on your product and briefed on your goals, who engage visitors and capture their details.',
    keyword: 'exhibition hostesses Dubai',
    faqs: [
      { q: 'What do exhibition hosts and hostesses do?', a: 'They welcome visitors, start conversations, qualify interest, capture contact details and hand serious prospects to your sales team, so your specialists spend their time on the right people.' },
      { q: 'Are your hosts trained on our product?', a: 'Yes. Every host is briefed on your products, your industry and your objectives for the show before the doors open.' },
      { q: 'Do you provide hosts for shows across the UAE?', a: 'Yes. We provide hosts for exhibitions and events in Dubai, Abu Dhabi and across the UAE, including multilingual hosts on request.' },
    ],
  },
  'photography-video': {
    title: 'Event Photography & Videography in Dubai | Standout',
    description: 'Exhibition and event photography, videography, on-stand interviews and same-day social content in Dubai and Abu Dhabi, from one crew.',
    keyword: 'event videography Dubai',
    faqs: [
      { q: 'What does event photo and video coverage include?', a: 'A photographer and videographer cover the stand, the visitors and key moments, record interviews on the stand and shoot mobile content for social media, then deliver edited photos and films.' },
      { q: 'How quickly do we get the content?', a: 'Social clips and selected photos can be delivered the same day. Edited highlight films usually follow within a few working days.' },
      { q: 'Do you film events outside exhibitions?', a: 'Yes. We have filmed launches, premieres and sporting events in Dubai and Abu Dhabi, as the case studies show.' },
    ],
  },
  'lead-capture': {
    title: 'Exhibition Lead Capture & Badge Scanning | Standout',
    description: 'Tablet-based lead capture and badge scanning for exhibitions, with qualification questions and a clean CRM export after the show.',
    keyword: 'exhibition lead capture',
    faqs: [
      { q: 'How does exhibition lead capture work?', a: 'Your team scans the visitor’s badge or enters their details on a tablet or phone, answers a few qualification questions, and adds notes. Every lead is stored in one place instead of on business cards.' },
      { q: 'Can leads go straight into our CRM?', a: 'Yes. After the show we deliver a clean export mapped to your CRM fields, ready to import.' },
      { q: 'What should we capture about each visitor?', a: 'Contact details, what they are interested in, their timeline and budget where relevant, and the agreed next step. Leave out anything your sales team will not use.' },
    ],
  },
  'lead-nurturing': {
    title: 'Post-Event Lead Nurturing & Follow-Up | Standout',
    description: 'Post-exhibition follow-up sequences that reach every lead while the conversation is fresh, with reporting on replies, meetings and pipeline.',
    keyword: 'post event lead nurturing',
    faqs: [
      { q: 'When should post-event follow-up start?', a: 'Within 48 hours of the show closing. The sooner a lead hears from you, the more likely they are to remember the conversation and reply.' },
      { q: 'Do all leads get the same follow-up?', a: 'No. We segment leads by interest and readiness, then send each group content that matches what they asked about on the stand.' },
      { q: 'How do you report results?', a: 'We report replies, meetings booked and pipeline created from the show, so you can see what the exhibition actually returned.' },
    ],
  },
}

export function serviceMetadata(slug: string): Metadata {
  const hit = SERVICE_PAGES.findIndex((p) => p.slug === slug)
  const seo = SERVICE_SEO[slug]
  if (hit === -1 || !seo) return {}
  return pageMetadata({ title: seo.title, description: seo.description, path: `/services/${slug}`, image: `/og/services/${slug}.jpg` })
}

/* ------------------------------------------------------------------ JSON-LD */

const ORG_ID = `${SITE_URL}/#organization`
const SITE_ID = `${SITE_URL}/#website`

export function organizationLd() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: abs(WORDMARK_COLOUR),
    image: abs(DEFAULT_OG_IMAGE),
    description: PAGE_SEO.home.description,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address[0],
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 25.0683251, longitude: 55.1450851 },
    areaServed: [{ '@type': 'Country', name: 'United Arab Emirates' }, { '@type': 'City', name: 'Dubai' }, { '@type': 'City', name: 'Abu Dhabi' }],
    knowsAbout: ['Exhibition marketing', 'Exhibition stand graphics', 'Event photography and videography', 'Exhibition hosts and hostesses', 'Lead capture', 'Lead nurturing', 'Event digital advertising'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Exhibition marketing services',
      itemListElement: SERVICE_PAGES.map((p, i) => ({ '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/services/${p.slug}#service`, '@type': 'Service', name: SERVICES[i].name } })),
    },
    ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  }
}

export function websiteLd() {
  return { '@type': 'WebSite', '@id': SITE_ID, url: SITE_URL, name: SITE_NAME, inLanguage: 'en', publisher: { '@id': ORG_ID } }
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  }
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
}

export function webPageLd(kind: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage', p: { path: string; title: string; description: string }) {
  return { '@type': kind, '@id': `${abs(p.path)}#webpage`, url: abs(p.path), name: p.title, description: p.description, isPartOf: { '@id': SITE_ID }, about: { '@id': ORG_ID }, inLanguage: 'en' }
}

export function serviceLd(slug: string) {
  const i = SERVICE_PAGES.findIndex((p) => p.slug === slug)
  const seo = SERVICE_SEO[slug]
  const page = SERVICE_PAGES[i]
  return [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/services/${slug}#service`,
      name: SERVICES[i].name,
      serviceType: seo.keyword,
      description: `${page.intro}`,
      url: abs(`/services/${slug}`),
      image: abs(SERVICE_PHOTOS[i]),
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
      hasOfferCatalog: { '@type': 'OfferCatalog', name: `${SERVICES[i].name}: what’s included`, itemListElement: page.included.map((it) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: it.title, description: it.line } })) },
    },
    breadcrumbLd([{ name: 'Services', path: '/#services' }, { name: SERVICES[i].name, path: `/services/${slug}` }]),
    faqLd(seo.faqs),
  ]
}

export function articleLd(a: Article, image: string) {
  const path = `/insights/${a.slug}`
  return [
    {
      '@type': 'BlogPosting',
      '@id': `${abs(path)}#article`,
      headline: a.title,
      description: a.dek,
      image: abs(image),
      datePublished: a.date,
      dateModified: a.date,
      articleSection: a.category,
      wordCount: a.body.join(' ').split(/\s+/).length,
      timeRequired: `PT${a.readMinutes}M`,
      inLanguage: 'en',
      mainEntityOfPage: abs(path),
      author: { '@type': 'Organization', name: `The ${SITE_NAME} team`, url: abs('/about') },
      publisher: { '@id': ORG_ID },
    },
    breadcrumbLd([{ name: 'Insights', path: '/insights' }, { name: a.title, path }]),
  ]
}

/** Wraps nodes in one @graph document. */
export const ldGraph = (...nodes: unknown[]) => ({ '@context': 'https://schema.org', '@graph': nodes.flat() })
