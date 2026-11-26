import type { Metadata, Viewport } from 'next'
import { Funnel_Display, Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { DEFAULT_OG_IMAGE, PAGE_SEO, SITE_NAME, SITE_URL } from '@/lib/seo'

/** Google Tag Manager container. */
const GTM_ID = 'GTM-5LMH27CX'

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
      <head>
        {/* Google Search Console ownership check */}
        <meta name="google-site-verification" content="EJbO--Xy66Q59KlAnMvwJl8YRPpPUGDkpKcpIR4VRQw" />
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        <Script id="gtm-src" src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} strategy="afterInteractive" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe title="Google Tag Manager" src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
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
