import { InsightsPage } from '@/components/pages/InsightsPage'
import { JsonLd } from '@/components/JsonLd'
import { PAGE_SEO, breadcrumbLd, ldGraph, pageMetadata, webPageLd } from '@/lib/seo'

export const metadata = pageMetadata(PAGE_SEO.insights)

export default function Insights() {
  return (
    <>
      <JsonLd data={ldGraph(webPageLd('CollectionPage', PAGE_SEO.insights), breadcrumbLd([{ name: 'Insights', path: PAGE_SEO.insights.path }]))} />
      <InsightsPage />
    </>
  )
}
