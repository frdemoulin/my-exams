'use client';

import { cn } from '@/lib/utils';
import { buildExerciseMetaItems, type ExerciseMetaInput } from '@/lib/exercise-meta';
import { Button } from '@/components/ui/button';

type ExerciseMetaLineProps = ExerciseMetaInput & {
  className?: string;
  itemClassName?: string;
  variant?: 'inline' | 'chips';
};

export function ExerciseMetaLine({
  className,
  itemClassName,
  variant = 'inline',
  ...input
}: ExerciseMetaLineProps) {
  const items = buildExerciseMetaItems(input);

  if (items.length === 0) {
    return null;
  }

  if (variant === 'chips') {
    return (
      <div className={cn('flex flex-wrap items-center gap-2', className)}>
        {items.map((item, index) => (
          <Button
            key={`${item}-${index}`}
            type="button"
            variant="secondary"
            size="xs"
            className={cn('rounded-lg', itemClassName)}
          >
            {item}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground',
        className
      )}
    >
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="inline-flex items-center gap-1">
          {item}
          {index < items.length - 1 && <span aria-hidden="true">•</span>}
        </span>
      ))}
    </div>
  );
}
