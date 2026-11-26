import type { Metadata, Viewport } from 'next'
import { Funnel_Display, Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

/** Google Tag Manager container. */
const GTM_ID = 'GTM-5LMH27CX'

const funnel = Funnel_Display({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-funnel' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Standout — Exhibition marketing, end to end',
  description:
    'Stand graphics, campaigns, coverage, data capture and post-show nurture from one team, so every exhibition earns its place.',
}

export const viewport: Viewport = { themeColor: '#050A18' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${funnel.variable} ${geist.variable} ${geistMono.variable}`}>
      <head>
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
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
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
