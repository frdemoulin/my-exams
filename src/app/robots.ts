import type { MetadataRoute } from 'next';
import { getSeoBaseUrl, getSeoBaseUrlWithDefault } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NODE_ENV === 'production' ? getSeoBaseUrl() : getSeoBaseUrlWithDefault();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/'],
      },
    ],
    sitemap: baseUrl ? `${baseUrl}/sitemap.xml` : undefined,
  };
}
