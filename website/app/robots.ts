import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

/** Open to all crawlers, including AI search (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended). Review routes are noindexed per page. */
export default function robots(): MetadataRoute.Robots {
  return {
    // Review routes are not disallowed: crawlers must be able to fetch them to see their noindex.
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
