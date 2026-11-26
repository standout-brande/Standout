import { ContactPage } from '@/components/pages/ContactPage'
import { JsonLd } from '@/components/JsonLd'
import { PAGE_SEO, breadcrumbLd, ldGraph, organizationLd, pageMetadata, webPageLd } from '@/lib/seo'

export const metadata = pageMetadata(PAGE_SEO.contact)

export default function Contact() {
  return (
    <>
      <JsonLd data={ldGraph(webPageLd('ContactPage', PAGE_SEO.contact), breadcrumbLd([{ name: 'Contact', path: PAGE_SEO.contact.path }]), organizationLd())} />
      <ContactPage />
    </>
  )
}
