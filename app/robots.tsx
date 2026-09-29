import { sharedMetadata } from '@/lib/shared-metadata'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/docs/app-policy/'],
      disallow: ['/private/', '/docs/'],
    },
    sitemap: `${sharedMetadata.urls.website}/sitemap.xml`,
  }
}
