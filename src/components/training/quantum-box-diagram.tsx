'use client';

import { MathContent } from './math-content';
import type { TrainingQuantumBoxOrbital } from '@/core/training/training-choice-content';
import { cn } from '@/lib/utils';

type QuantumBoxDiagramProps = {
  orbitals: TrainingQuantumBoxOrbital[];
  suffix?: string;
  className?: string;
};

function QuantumBox({
  fill,
}: {
  fill: TrainingQuantumBoxOrbital['boxes'][number];
}) {
  if (fill === 'pair') {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center border border-foreground/70 bg-background text-sm leading-none text-foreground">
        <span className="inline-flex items-center">
          <span>↑</span>
          <span>↓</span>
        </span>
      </span>
    );
  }

  return (
    <span className="inline-flex h-6 w-6 items-center justify-center border border-foreground/70 bg-background text-sm leading-none text-foreground">
      {fill === 'up' ? '↑' : fill === 'down' ? '↓' : ''}
    </span>
  );
}

export function QuantumBoxDiagram({
  orbitals,
  suffix,
  className,
}: QuantumBoxDiagramProps) {
  return (
    <span className={cn('inline-flex flex-wrap items-center gap-x-3 gap-y-1.5', className)}>
      {orbitals.map((orbital, orbitalIndex) => (
        <span
          key={`${orbital.label}-${orbitalIndex}`}
          className={cn(
            'inline-flex items-center',
            orbital.label.trim() ? 'gap-1.5' : 'gap-0'
          )}
        >
          {orbital.label.trim() ? (
            <span className="font-medium text-heading">
              <MathContent value={`$${orbital.label}$`} />
            </span>
          ) : null}
          <span className="inline-flex items-center">
            {orbital.boxes.map((box, boxIndex) => (
              <QuantumBox key={`${orbital.label}-${boxIndex}`} fill={box} />
            ))}
          </span>
        </span>
      ))}
      {suffix ? <span className="ml-0.5">{suffix}</span> : null}
    </span>
  );
}
