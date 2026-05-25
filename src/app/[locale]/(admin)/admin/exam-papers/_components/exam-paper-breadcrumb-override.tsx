'use client';

import { useEffect } from 'react';

import { useBreadcrumbOverride } from '@/components/shared/auto-breadcrumb';

interface ExamPaperBreadcrumbOverrideProps {
  examPaperId: string;
  examPaperLabel: string;
  currentLabel: string;
}

export function ExamPaperBreadcrumbOverride({
  examPaperId,
  examPaperLabel,
  currentLabel,
}: ExamPaperBreadcrumbOverrideProps) {
  const { setOverride } = useBreadcrumbOverride();

  useEffect(() => {
    setOverride({
      items: [
        { label: 'Administration', href: '/admin' },
        { label: 'Sujets d\'examen', href: '/admin/exam-papers' },
        { label: examPaperLabel, href: `/admin/exam-papers/${examPaperId}` },
        { label: currentLabel },
      ],
    });

    return () => setOverride(null);
  }, [currentLabel, examPaperId, examPaperLabel, setOverride]);

  return null;
}