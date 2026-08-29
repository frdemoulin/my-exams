import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import HomePage from '@/components/pages/HomePage';
import { buildCanonicalUrl } from '@/lib/seo';
import { APP_DESCRIPTION, APP_NAME } from '@/config/app';

export const dynamic = 'force-dynamic';
const canonical = buildCanonicalUrl('/');

export const metadata: Metadata = {
  title: `${APP_NAME} — Plateforme de révision du collège à la L1 Santé`,
  description: APP_DESCRIPTION,
  alternates: canonical ? { canonical } : undefined,
};

export default function Page() {
  noStore();
  return <HomePage />;
}
