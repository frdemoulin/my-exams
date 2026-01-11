import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { fetchExerciseById } from '@/core/exercise';
import { buildCanonicalUrl } from '@/lib/seo';
import { normalizeExamPaperLabel } from '@/lib/utils';

type LayoutProps = {
  children: ReactNode;
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { id } = await params;
  if (!/^[a-f0-9]{24}$/i.test(id)) {
    return {
      title: 'Exercice introuvable',
    };
  }

  const exercise = await fetchExerciseById(id);
  if (!exercise) {
    return {
      title: 'Exercice introuvable',
    };
  }

  const subjectLabel =
    exercise.examPaper.teaching.subject.longDescription ||
    exercise.examPaper.teaching.subject.shortDescription ||
    exercise.examPaper.teaching.longDescription;
  const normalizedPaperLabel =
    normalizeExamPaperLabel(exercise.examPaper.label) ?? exercise.examPaper.label;
  const exerciseTitle =
    exercise.title ?? exercise.label ?? `Exercice ${exercise.exerciseNumber}`;
  const canonical = buildCanonicalUrl(`/exercices/${exercise.id}`);

  return {
    title: `${exerciseTitle} - ${subjectLabel}`,
    description: `Exercice ${exercise.exerciseNumber} du sujet ${normalizedPaperLabel} (${exercise.examPaper.sessionYear}).`,
    alternates: canonical ? { canonical } : undefined,
  };
}

export default function ExerciseLayout({ children }: LayoutProps) {
  return children;
}
