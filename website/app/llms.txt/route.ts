import { CONTACT, SERVICES } from '@/lib/content'
import { SERVICE_PAGES } from '@/lib/service-pages'
import { ARTICLES } from '@/lib/insights'
import { PAGE_SEO, SERVICE_SEO, SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

/** /llms.txt (llmstxt.org): a plain-language map of the site for AI assistants and answer engines. */
export function GET() {
  const lines = [
    '# Standout',
    '',
    `> ${PAGE_SEO.home.description}`,
    '',
    'Standout is an exhibition marketing agency based in Jumeirah Lakes Towers, Dubai, serving exhibitors at shows across the UAE (Dubai World Trade Centre, Expo City Dubai, ADNEC Abu Dhabi). One team covers everything before, during and after the show.',
    '',
    `Contact: ${CONTACT.email} · ${CONTACT.phone} · ${CONTACT.address.join(', ')}`,
    '',
    '## Services',
    '',
    ...SERVICE_PAGES.map((p, i) => `- [${SERVICES[i].name}](${SITE_URL}/services/${p.slug}): ${SERVICE_SEO[p.slug]?.description ?? SERVICES[i].line}`),
    '',
    '## Company',
    '',
    `- [About](${SITE_URL}/about): ${PAGE_SEO.about.description}`,
    `- [Packages](${SITE_URL}/packages): ${PAGE_SEO.packages.description}`,
    `- [Case studies](${SITE_URL}/case-studies): ${PAGE_SEO.caseStudies.description}`,
    `- [Contact](${SITE_URL}/contact): ${PAGE_SEO.contact.description}`,
    '',
    '## Insights',
    '',
    ...ARTICLES.map((a) => `- [${a.title}](${SITE_URL}/insights/${a.slug}): ${a.dek}`),
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } })
}
