'use client';

import {
  getTrainingChoicePlainText,
  type TrainingChoiceContent,
} from '@/core/training/training-choice-content';
import { QuantumBoxDiagram } from './quantum-box-diagram';
import { MathContent } from './math-content';
import { cn } from '@/lib/utils';

type TrainingChoiceContentViewProps = {
  choice: TrainingChoiceContent;
  className?: string;
};

export function TrainingChoiceContentView({
  choice,
  className,
}: TrainingChoiceContentViewProps) {
  if (typeof choice === 'string') {
    return <MathContent value={choice} className={className} />;
  }

  const plainText = getTrainingChoicePlainText(choice);

  return (
    <span
      aria-label={`${plainText}.`}
      className={cn('inline-flex items-end', className)}
    >
      <QuantumBoxDiagram orbitals={choice.orbitals} />
      <span aria-hidden="true">.</span>
    </span>
  );
}
