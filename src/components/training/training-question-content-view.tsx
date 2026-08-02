'use client';

import { Fragment } from 'react';
import type { TrainingQuestionDiagramContent } from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';
import { BenzeneKekuleDiagram } from './benzene-kekule-diagram';
import { CarbohydrateDiagram } from './carbohydrate-diagram';
import { EnzymeDiagram } from './enzyme-diagram';
import { LewisResonanceDiagram } from './lewis-resonance-diagram';
import { LipidDiagram } from './lipid-diagram';
import { MathContent } from './math-content';
import { MoleculeDiagram } from './molecule-diagram';
import { ProteinDiagram } from './protein-diagram';
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

  if (
    questionDiagram.type === 'lewis-resonance' ||
    questionDiagram.type === 'benzene-kekule' ||
    questionDiagram.type === 'molecule' ||
    questionDiagram.type === 'carbohydrate' ||
    questionDiagram.type === 'lipid' ||
    questionDiagram.type === 'protein' ||
    questionDiagram.type === 'enzyme'
  ) {
    const diagram =
      questionDiagram.type === 'lewis-resonance' ? (
        <LewisResonanceDiagram value={questionDiagram} />
      ) : questionDiagram.type === 'benzene-kekule' ? (
        <BenzeneKekuleDiagram value={questionDiagram} />
      ) : questionDiagram.type === 'molecule' ? (
        <MoleculeDiagram value={questionDiagram} />
      ) : questionDiagram.type === 'carbohydrate' ? (
        <CarbohydrateDiagram value={questionDiagram} />
      ) : questionDiagram.type === 'protein' ? (
        <ProteinDiagram diagram={questionDiagram.diagram} />
      ) : questionDiagram.type === 'enzyme' ? (
        <EnzymeDiagram diagram={questionDiagram.diagram} />
      ) : (
        <LipidDiagram value={questionDiagram} />
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
        <QuantumBoxDiagram orbitals={questionDiagram.orbitals} suffix={questionDiagram.suffix} />
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
              suffix={questionDiagram.suffix}
              className="mx-2 inline-flex align-middle"
            />
          ) : null}
        </Fragment>
      ))}
    </span>
  );
}
