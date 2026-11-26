import { HomePage } from '@/components/HomePage'
import { JsonLd } from '@/components/JsonLd'
import { PAGE_SEO, ldGraph, organizationLd, pageMetadata, webPageLd, websiteLd } from '@/lib/seo'

export const metadata = pageMetadata(PAGE_SEO.home)

export default function Home() {
  return (
    <>
      <JsonLd data={ldGraph(organizationLd(), websiteLd(), webPageLd('WebPage', PAGE_SEO.home))} />
      <HomePage photos services="b" />
    </>
  )
}
