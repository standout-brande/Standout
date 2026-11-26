import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // three ships modern ESM; let Next transpile drei/fiber cleanly.
  transpilePackages: ['three'],
  // Service pages that were renamed, merged or removed.
  async redirects() {
    return [
      // One host for search: www.standout.ae → standout.ae, keeping the path and query.
      // statusCode 301 (not `permanent`, which Next sends as 308).
      { source: '/:path*', has: [{ type: 'host', value: 'www.standout.ae' }], destination: 'https://standout.ae/:path*', statusCode: 301 },
      { source: '/services/email-campaigns', destination: '/services/email-linkedin-marketing', permanent: true },
      { source: '/services/content-creation', destination: '/services/photography-video', permanent: true },
      { source: '/services/landing-pages', destination: '/#services', permanent: true },
    ]
  },
}

export default nextConfig
