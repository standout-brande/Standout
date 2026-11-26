import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICE_PAGES, pageFor } from '@/lib/service-pages'
import { ServicePage } from '@/components/ServicePage'
import { ServicePageB } from '@/components/ServicePageB'
import { SERVICE_VISUALS } from '@/lib/service-visuals'
import { JsonLd } from '@/components/JsonLd'
import { ldGraph, serviceLd, serviceMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return serviceMetadata(slug)
}

/** One page per service: /services/<slug>. */
export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const hit = pageFor(slug)
  if (!hit) notFound()
  // Services with option C pictures use the option C layout; the rest keep the original one.
  return (
    <>
      <JsonLd data={ldGraph(serviceLd(slug))} />
      {SERVICE_VISUALS[slug] ? <ServicePageB index={hit.index} variant="c" /> : <ServicePage index={hit.index} />}
    </>
  )
}
