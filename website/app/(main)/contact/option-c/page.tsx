import type { Metadata } from 'next'
import { ContactPage } from '@/components/pages/ContactPage'
import { HeroOptionC } from '@/components/HeroOptionC'

export const metadata: Metadata = { title: { absolute: 'Header option C — Standout' }, robots: { index: false, follow: true } }

/** Header option C, for review against the live page. */
export default function Page() {
  return (
    <HeroOptionC>
      <ContactPage />
    </HeroOptionC>
  )
}
