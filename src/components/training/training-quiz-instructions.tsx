const trainingQuizInstructionParagraphs = [
  `Dans ce QCM, chaque question est accompagnée de 4 propositions. Sans consigne particulière dans l'énoncé d'une question, il faut systématiquement déterminer la ou les propositions correctes. Pour chaque question, le nombre d'items à sélectionner varie de 1 à 4.`,
  `L'utilisation d'une calculatrice n'est pas autorisée. Avant de vous lancer, vous pouvez vous munir d'un brouillon et d’un crayon.`,
] as const;

export function TrainingQuizInstructions() {
  return (
    <div className="rounded-2xl border border-default bg-neutral-secondary-soft/40 px-4 py-3">
      <p className="text-sm font-semibold text-heading">Consignes</p>
      {trainingQuizInstructionParagraphs.map((paragraph) => (
        <p key={paragraph} className="mt-2 text-sm leading-6 text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
