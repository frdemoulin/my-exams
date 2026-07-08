'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button, type ButtonProps } from '@/components/ui/button';

type TrainingQuizActionButtonProps = {
  href: string;
  label?: string;
  variant?: ButtonProps['variant'];
};

export function TrainingQuizActionButton({
  href,
  label = 'Commencer',
  variant = 'default',
}: TrainingQuizActionButtonProps) {
  return (
    <Button asChild size="sm" variant={variant} className="gap-2">
      <Link href={href}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}
