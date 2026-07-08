'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

type HealthViewButtonProps = {
  href: string;
  label?: string;
};

export function HealthViewButton({
  href,
  label = 'Voir',
}: HealthViewButtonProps) {
  return (
    <Button asChild size="sm" className="gap-2">
      <Link href={href}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}
