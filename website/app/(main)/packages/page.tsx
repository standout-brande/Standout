import { PackagesPage } from '@/components/pages/PackagesPage'
import { JsonLd } from '@/components/JsonLd'
import { PAGE_SEO, breadcrumbLd, ldGraph, pageMetadata, webPageLd } from '@/lib/seo'

export const metadata = pageMetadata(PAGE_SEO.packages)

export default function Packages() {
  return (
    <>
      <JsonLd data={ldGraph(webPageLd('CollectionPage', PAGE_SEO.packages), breadcrumbLd([{ name: 'Packages', path: PAGE_SEO.packages.path }]))} />
      <PackagesPage />
    </>
  )
}
