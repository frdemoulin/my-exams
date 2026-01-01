import type { MetadataRoute } from 'next';
import prisma from '@/lib/db/prisma';
import { fetchActiveDiplomasWithExamPapers } from '@/core/exam-paper';

export const revalidate = 3600;

const DEFAULT_BASE_URL = 'http://localhost:3000';

function getBaseUrl() {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.AUTH_URL ||
    DEFAULT_BASE_URL;

  return baseUrl.replace(/\/$/, '');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/diplomes`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  const diplomas = await fetchActiveDiplomasWithExamPapers();

  const examPapers = await prisma.examPaper.findMany({
    where: {
      diploma: { isActive: true },
      teaching: {
        isActive: true,
        subject: { isActive: true },
      },
    },
    select: {
      diplomaId: true,
      sessionYear: true,
      updatedAt: true,
      teaching: {
        select: {
          subjectId: true,
        },
      },
    },
  });

  const diplomaLastModified = new Map<string, Date>();
  const subjectLastModified = new Map<string, Date>();
  const sessionLastModified = new Map<string, Date>();
  const subjectKeys = new Set<string>();
  const sessionKeys = new Set<string>();

  for (const paper of examPapers) {
    const updatedAt = paper.updatedAt ?? now;
    const subjectId = paper.teaching.subjectId;
    const subjectKey = `${paper.diplomaId}:${subjectId}`;
    const sessionKey = `${subjectKey}:${paper.sessionYear}`;

    subjectKeys.add(subjectKey);
    sessionKeys.add(sessionKey);

    const currentDiplomaDate = diplomaLastModified.get(paper.diplomaId);
    if (!currentDiplomaDate || updatedAt > currentDiplomaDate) {
      diplomaLastModified.set(paper.diplomaId, updatedAt);
    }

    const currentSubjectDate = subjectLastModified.get(subjectKey);
    if (!currentSubjectDate || updatedAt > currentSubjectDate) {
      subjectLastModified.set(subjectKey, updatedAt);
    }

    const currentSessionDate = sessionLastModified.get(sessionKey);
    if (!currentSessionDate || updatedAt > currentSessionDate) {
      sessionLastModified.set(sessionKey, updatedAt);
    }
  }

  const diplomaEntries: MetadataRoute.Sitemap = diplomas.map((diploma) => ({
    url: `${baseUrl}/diplomes/${diploma.id}`,
    lastModified: diplomaLastModified.get(diploma.id) ?? now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const subjectEntries: MetadataRoute.Sitemap = Array.from(subjectKeys).map((key) => {
    const [diplomaId, subjectId] = key.split(':');
    return {
      url: `${baseUrl}/diplomes/${diplomaId}/matieres/${subjectId}`,
      lastModified: subjectLastModified.get(key) ?? now,
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  const sessionEntries: MetadataRoute.Sitemap = Array.from(sessionKeys).map((key) => {
    const [diplomaId, subjectId, sessionYear] = key.split(':');
    return {
      url: `${baseUrl}/diplomes/${diplomaId}/matieres/${subjectId}/sessions/${sessionYear}`,
      lastModified: sessionLastModified.get(key) ?? now,
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  return [
    ...staticEntries,
    ...diplomaEntries,
    ...subjectEntries,
    ...sessionEntries,
  ];
}
