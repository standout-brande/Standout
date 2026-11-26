import { AboutPage } from '@/components/pages/AboutPage'
import { JsonLd } from '@/components/JsonLd'
import { PAGE_SEO, breadcrumbLd, ldGraph, pageMetadata, webPageLd } from '@/lib/seo'

export const metadata = pageMetadata(PAGE_SEO.about)

export default function About() {
  return (
    <>
      <JsonLd data={ldGraph(webPageLd('AboutPage', PAGE_SEO.about), breadcrumbLd([{ name: 'About', path: PAGE_SEO.about.path }]))} />
      <AboutPage />
    </>
  )
}
