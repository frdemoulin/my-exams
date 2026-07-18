'use client';

import { Fragment } from 'react';
import type { TrainingQuestionDiagramContent } from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';
import { BenzeneKekuleDiagram } from './benzene-kekule-diagram';
import { LewisResonanceDiagram } from './lewis-resonance-diagram';
import { MathContent } from './math-content';
import { QuantumBoxDiagram } from './quantum-box-diagram';

export const TRAINING_QUESTION_DIAGRAM_MARKER = '[[QUESTION_DIAGRAM]]';

type TrainingQuestionContentViewProps = {
  question: string;
  questionDiagram: TrainingQuestionDiagramContent | null;
  className?: string;
};

export function TrainingQuestionContentView({
  question,
  questionDiagram,
  className,
}: TrainingQuestionContentViewProps) {
  if (!questionDiagram) {
    return (
      <MathContent
        value={question.replaceAll(TRAINING_QUESTION_DIAGRAM_MARKER, '')}
        blockMathVariant="compact"
        className={className}
      />
    );
  }

  const segments = question.split(TRAINING_QUESTION_DIAGRAM_MARKER);

  if (questionDiagram.type === 'lewis-resonance' || questionDiagram.type === 'benzene-kekule') {
    const diagram =
      questionDiagram.type === 'lewis-resonance' ? (
        <LewisResonanceDiagram value={questionDiagram} />
      ) : (
        <BenzeneKekuleDiagram value={questionDiagram} />
      );

    return (
      <div className={cn('space-y-2 leading-relaxed', className)}>
        {segments.map((segment, index) => (
          <Fragment key={`${index}-${segment}`}>
            {segment.trim() ? (
              <MathContent
                value={segment.trim()}
                blockMathVariant="compact"
                className="block"
              />
            ) : null}
            {index < segments.length - 1 ? diagram : null}
          </Fragment>
        ))}
        {segments.length === 1 ? diagram : null}
      </div>
    );
  }

  if (segments.length === 1) {
    return (
      <div className={cn('space-y-3', className)}>
        <MathContent value={question} blockMathVariant="compact" />
        <QuantumBoxDiagram orbitals={questionDiagram.orbitals} />
      </div>
    );
  }

  return (
    <span className={cn('leading-relaxed', className)}>
      {segments.map((segment, index) => (
        <Fragment key={`${index}-${segment}`}>
          {segment ? <MathContent value={segment} blockMathVariant="compact" /> : null}
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
