import { CaseStudiesPage } from '@/components/pages/CaseStudiesPage'
import { JsonLd } from '@/components/JsonLd'
import { PAGE_SEO, breadcrumbLd, ldGraph, pageMetadata, webPageLd } from '@/lib/seo'

export const metadata = pageMetadata(PAGE_SEO.caseStudies)

export default function CaseStudies() {
  return (
    <>
      <JsonLd data={ldGraph(webPageLd('CollectionPage', PAGE_SEO.caseStudies), breadcrumbLd([{ name: 'Case Studies', path: PAGE_SEO.caseStudies.path }]))} />
      <CaseStudiesPage />
    </>
  )
}
