'use client';

import { Fragment } from 'react';
import type { TrainingQuantumBoxesChoice } from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';
import { MathContent } from './math-content';
import { QuantumBoxDiagram } from './quantum-box-diagram';

export const TRAINING_QUESTION_DIAGRAM_MARKER = '[[QUESTION_DIAGRAM]]';

type TrainingQuestionContentViewProps = {
  question: string;
  questionDiagram: TrainingQuantumBoxesChoice | null;
  className?: string;
};

export function TrainingQuestionContentView({
  question,
  questionDiagram,
  className,
}: TrainingQuestionContentViewProps) {
  if (!questionDiagram) {
    return <MathContent value={question} className={className} />;
  }

  const segments = question.split(TRAINING_QUESTION_DIAGRAM_MARKER);

  if (segments.length === 1) {
    return (
      <div className={cn('space-y-3', className)}>
        <MathContent value={question} />
        <QuantumBoxDiagram orbitals={questionDiagram.orbitals} />
      </div>
    );
  }

  return (
    <span className={cn('leading-relaxed', className)}>
      {segments.map((segment, index) => (
        <Fragment key={`${index}-${segment}`}>
          {segment ? <MathContent value={segment} /> : null}
          {index < segments.length - 1 ? (
            <QuantumBoxDiagram
              orbitals={questionDiagram.orbitals}
              className="mx-2 inline-flex align-middle"
            />
          ) : null}
        </Fragment>
      ))}
    </span>
  );
}
