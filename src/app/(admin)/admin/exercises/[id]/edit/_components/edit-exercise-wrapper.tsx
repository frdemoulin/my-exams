'use client';

import { useEffect } from 'react';
import { useBreadcrumbOverride } from '@/components/shared/auto-breadcrumb';
import EditExerciseForm from './edit-exercise-form';
import { Exercise, ExamPaper, Diploma, Division, Grade, Teaching, Subject } from '@prisma/client';

type ExerciseWithRelations = Exercise & {
  examPaper: ExamPaper & {
    diploma: Diploma;
    division: Division | null;
    grade: Grade;
    teaching: Teaching & {
      subject: Subject;
      grade: Grade;
    };
  };
};

interface EditExerciseWrapperProps {
  exercise: ExerciseWithRelations;
  themes: Array<{ value: string; label: string }>;
}

export default function EditExerciseWrapper({ exercise, themes }: EditExerciseWrapperProps) {
  const { setOverride } = useBreadcrumbOverride();

  useEffect(() => {
    setOverride({
      items: [
        { label: 'Sujets d\'examen', href: '/admin/exam-papers' },
        { label: exercise.examPaper.label || 'Sujet', href: `/admin/exam-papers/${exercise.examPaperId}` },
        { label: `Exercice ${exercise.exerciseNumber}`, href: `/admin/exam-papers/${exercise.examPaperId}` },
        { label: 'Édition' },
      ]
    });

    // Cleanup: retirer l'override quand le composant se démonte
    return () => setOverride(null);
  }, [exercise, setOverride]);

  return (
    <div className="w-full p-6">
      <div className="mb-6">
        <h1 className="text-lg font-semibold md:text-2xl">
          Modifier l'exercice {exercise.exerciseNumber}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Sujet : {exercise.examPaper.label || `${exercise.examPaper.diploma.shortDescription} ${exercise.examPaper.sessionYear}`}
        </p>
      </div>

      <EditExerciseForm exercise={exercise} themes={themes} />
    </div>
  );
}
