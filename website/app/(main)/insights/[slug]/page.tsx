import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ARTICLES, articleFor } from '@/lib/insights'
import { ArticlePage } from '@/components/pages/InsightsPage'
import { JsonLd } from '@/components/JsonLd'
import { PHOTOS } from '@/lib/assets'
import { articleLd, ldGraph, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const hit = articleFor(slug)
  if (!hit) return {}
  const a = hit.article
  const base = pageMetadata({ title: `${a.title} | Standout`, description: a.dek, path: `/insights/${a.slug}`, image: `/og/insights/${a.slug}.jpg`, type: 'article' })
  return { ...base, openGraph: { ...base.openGraph, type: 'article', publishedTime: a.date, section: a.category, authors: ['Standout'] } }
}

/** One article: /insights/<slug>. */
export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const hit = articleFor(slug)
  if (!hit) notFound()
  return (
    <>
      <JsonLd data={ldGraph(articleLd(hit.article, PHOTOS[hit.article.photo]))} />
      <ArticlePage index={hit.index} />
    </>
  )
}
