import type { Metadata } from 'next'
import { HomePage } from '@/components/HomePage'

/** Review build only: a near-copy of the homepage, so it stays out of search and points at the real one. */
export const metadata: Metadata = { title: { absolute: 'Homepage option 3 | Standout' }, robots: { index: false, follow: true }, alternates: { canonical: '/' } }

/** Homepage option 3: option 1 with the client's exhibition photography. */
export default function OptionThree() {
  return <HomePage photos />
}
