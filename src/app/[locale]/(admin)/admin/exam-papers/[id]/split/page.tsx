import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import prisma from '@/lib/db/prisma';
import { SplitExercisesForm } from './_components/split-exercises-form';
import { fetchThemes } from '@/core/theme';
import { AppBreadcrumb } from '@/components/shared/app-breadcrumb';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SplitExercisesPage({ params }: PageProps) {
  const { id } = await params;

  // Récupérer l'ExamPaper
  const examPaper = await prisma.examPaper.findUnique({
    where: { id },
    include: {
      teaching: {
        include: {
          grade: true,
          subject: true,
        },
      },
      diploma: true,
      exercises: {
        select: {
          exerciseNumber: true,
          label: true,
        },
        orderBy: {
          exerciseNumber: 'asc',
        },
      },
    },
  });

  if (!examPaper) {
    notFound();
  }

  // Récupérer les thèmes disponibles
  const themes = await fetchThemes();

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="mb-6">
        <h1 className="text-lg font-semibold md:text-2xl mb-6">Découper un sujet en exercices</h1>
        <p className="text-muted-foreground">
          {examPaper.diploma.longDescription} › {examPaper.teaching.subject.longDescription} › {examPaper.teaching.grade.longDescription}
        </p>
      </div>

      <SplitExercisesForm
        examPaperId={id}
        examPaperLabel={`${examPaper.label} ${examPaper.sessionYear}`}
        existingExercises={examPaper.exercises}
        availableThemes={themes}
      />
    </div>
  );
}
