import type { Metadata, Viewport } from 'next'
import { Funnel_Display, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { DEFAULT_OG_IMAGE, PAGE_SEO, SITE_NAME, SITE_URL } from '@/lib/seo'

const funnel = Funnel_Display({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-funnel' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_SEO.home.title, template: `%s | ${SITE_NAME}` },
  description: PAGE_SEO.home.description,
  applicationName: SITE_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en_AE', url: '/', title: PAGE_SEO.home.title, description: PAGE_SEO.home.description, images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Standout, exhibition marketing agency in Dubai' }] },
  twitter: { card: 'summary_large_image', title: PAGE_SEO.home.title, description: PAGE_SEO.home.description, images: [DEFAULT_OG_IMAGE] },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = { themeColor: '#050A18' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${funnel.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if(!sessionStorage.getItem('standout-intro')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('intro-wait')}catch(e){}setTimeout(function(){document.documentElement.classList.remove('intro-wait')},8000)",
          }}
        />
        {children}
      </body>
    </html>
  )
}
