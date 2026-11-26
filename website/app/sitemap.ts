import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { SERVICE_PAGES } from '@/lib/service-pages'
import { SERVICE_PHOTOS, PHOTOS } from '@/lib/assets'
import { ARTICLES } from '@/lib/insights'

/** Indexable pages only: review routes (option-2, option-3, option-b, option-c) are left out on purpose. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const latest = ARTICLES.map((a) => a.date).sort().at(-1)
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' = 'monthly', lastModified: Date | string = now, images?: string[]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
    ...(images ? { images: images.map((i) => `${SITE_URL}${i}`) } : {}),
  })
  return [
    page('/', 1, 'weekly'),
    ...SERVICE_PAGES.map((p, i) => page(`/services/${p.slug}`, 0.9, 'monthly', now, [SERVICE_PHOTOS[i]])),
    page('/packages', 0.8),
    page('/case-studies', 0.8),
    page('/about', 0.7),
    page('/contact', 0.7),
    page('/insights', 0.6, 'weekly', latest ?? now),
    ...ARTICLES.map((a) => page(`/insights/${a.slug}`, 0.6, 'monthly', a.date, [PHOTOS[a.photo]])),
  ]
}
