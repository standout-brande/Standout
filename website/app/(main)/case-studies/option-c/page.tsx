import type { Metadata } from 'next'
import { CaseStudiesPage } from '@/components/pages/CaseStudiesPage'
import { HeroOptionC } from '@/components/HeroOptionC'

export const metadata: Metadata = { title: { absolute: 'Header option C — Standout' }, robots: { index: false, follow: true } }

/** Header option C, for review against the live page. */
export default function Page() {
  return (
    <HeroOptionC>
      <CaseStudiesPage />
    </HeroOptionC>
  )
}
