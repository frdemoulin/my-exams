'use client';

import {
  getTrainingChoicePlainText,
  type TrainingChoiceContent,
} from '@/core/training/training-choice-content';
import { QuantumBoxDiagram } from './quantum-box-diagram';
import { MathContent } from './math-content';
import { cn } from '@/lib/utils';
import { LewisAtomDiagram } from './lewis-atom-diagram';

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

  if (choice.type === 'quantum-boxes') {
    return (
      <span aria-label={plainText} className={cn('inline-flex items-end', className)}>
        <QuantumBoxDiagram orbitals={choice.orbitals} suffix={choice.suffix} />
      </span>
    );
  }

  return (
    <span className={cn('inline-flex items-center', className)}>
      <LewisAtomDiagram value={choice} ariaLabel={plainText} />
    </span>
  );
}
