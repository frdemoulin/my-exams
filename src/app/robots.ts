import type { MetadataRoute } from 'next';
import { getSeoBaseUrlWithDefault } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSeoBaseUrlWithDefault();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
