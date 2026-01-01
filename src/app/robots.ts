import type { MetadataRoute } from 'next';

const DEFAULT_BASE_URL = 'http://localhost:3000';

function getBaseUrl() {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.AUTH_URL ||
    DEFAULT_BASE_URL;

  return baseUrl.replace(/\/$/, '');
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

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
