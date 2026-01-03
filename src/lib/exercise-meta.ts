export type CurriculumLabelInput = {
  shortDescription?: string | null;
  longDescription?: string | null;
} | null | undefined;

export type ExerciseMetaInput = {
  sessionYear?: number | null;
  duration?: number | null;
  difficulty?: number | null;
  points?: number | null;
  exerciseType?: string | null;
  curriculum?: CurriculumLabelInput;
};

export function formatDuration(minutes?: number | null): string | null {
  if (typeof minutes !== 'number') return null;
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return `${hours}h${remainder ? ` ${remainder}min` : ''}`;
  }
  return `${minutes} min`;
}

export function formatDifficultyLabel(value?: number | null): string | null {
  if (!value) return null;
  if (value >= 4) return 'Difficile';
  if (value === 3) return 'Moyenne';
  if (value === 2) return 'Facile';
  return 'Très facile';
}

export function formatExerciseType(value?: string | null): string | null {
  if (!value || value === 'NORMAL') return null;
  if (value === 'QCM') return 'QCM';
  if (value === 'TRUE_FALSE') return 'Vrai/Faux';
  if (value === 'OTHER') return 'Autre';
  return value;
}

export function formatCurriculumLabel(curriculum?: CurriculumLabelInput): string | null {
  const label = curriculum?.shortDescription || curriculum?.longDescription || null;
  if (!label) return null;
  return label.toLowerCase().includes('programme') ? label : `Programme ${label}`;
}

export function buildExerciseMetaItems(input: ExerciseMetaInput): string[] {
  const items: Array<string | null> = [
    formatCurriculumLabel(input.curriculum),
    typeof input.sessionYear === 'number' ? `Session ${input.sessionYear}` : null,
    formatDuration(input.duration),
    typeof input.points === 'number'
      ? `${input.points} pt${input.points > 1 ? 's' : ''}`
      : null,
    formatDifficultyLabel(input.difficulty),
    formatExerciseType(input.exerciseType),
  ];

  return items.filter((item): item is string => Boolean(item));
}
