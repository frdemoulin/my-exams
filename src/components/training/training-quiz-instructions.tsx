type TrainingQuizInstructionsProps = {
  questionCount?: number;
  hasMultipleFormats?: boolean;
};

export function TrainingQuizInstructions({
  questionCount,
  hasMultipleFormats,
}: TrainingQuizInstructionsProps) {
  const paragraph1 =
    questionCount && questionCount > 0
      ? `Ce quiz comporte ${questionCount} question${questionCount > 1 ? 's' : ''}${hasMultipleFormats ? ' de différents formats' : ''}. La consigne propre à chaque question est indiquée au moment où elle s'affiche.`
      : `La consigne propre à chaque question est indiquée au moment où elle s'affiche.`;

  const paragraph2 = `L'utilisation d'une calculatrice n'est pas autorisée. Vous pouvez vous munir d'un brouillon et d’un crayon.`;

  return (
    <div className="rounded-2xl border border-default bg-neutral-secondary-soft/40 px-4 py-3">
      <p className="text-sm font-semibold text-heading">Consignes</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{paragraph1}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{paragraph2}</p>
    </div>
  );
}
