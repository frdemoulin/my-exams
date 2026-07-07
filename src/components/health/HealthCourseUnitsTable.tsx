'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { HealthStudentHomeBlock } from '@/core/health';

type HealthCourseUnitsTableRow = {
  id: string;
  label: string;
  semester: number | null;
  qcmCount: number;
  blockLabel: string;
  blockType: HealthStudentHomeBlock['type'];
  href: string;
};

type HealthCourseUnitsTableProps = {
  rows: HealthCourseUnitsTableRow[];
  blockTypeBadgeClassNames: Record<HealthStudentHomeBlock['type'], string>;
};

type SortKey = 'label' | 'blockLabel';
type SortDirection = 'asc' | 'desc';

const headerLabels: Record<SortKey, string> = {
  label: 'UE',
  blockLabel: 'Bloc',
};

export function HealthCourseUnitsTable({
  rows,
  blockTypeBadgeClassNames,
}: HealthCourseUnitsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('label');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const sortedRows = useMemo(() => {
    const collator = new Intl.Collator('fr', { sensitivity: 'base' });

    return [...rows].sort((left, right) => {
      const comparison =
        sortKey === 'label'
          ? collator.compare(left.label, right.label)
          : collator.compare(left.blockLabel, right.blockLabel);

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [rows, sortDirection, sortKey]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'));
      return;
    }

    setSortKey(key);
    setSortDirection('asc');
  };

  const renderSortIcon = (key: SortKey) => {
    if (sortKey !== key) {
      return <ArrowUpDown className="h-4 w-4" />;
    }

    return sortDirection === 'asc' ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-left text-sm text-body rtl:text-right">
        <thead className="bg-neutral-secondary-soft text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            {(['label', 'blockLabel'] as const).map((key) => (
              <th
                key={key}
                className={`px-5 py-4 font-medium ${
                  key === 'blockLabel' ? 'text-center' : ''
                }`}
              >
                <Button
                  type="button"
                  variant="ghost"
                  className={`h-auto px-3 py-1 text-sm font-medium text-muted-foreground hover:text-heading ${
                    key === 'blockLabel' ? 'mx-auto flex' : '-ml-3'
                  }`}
                  onClick={() => toggleSort(key)}
                >
                  {headerLabels[key]}
                  {renderSortIcon(key)}
                </Button>
              </th>
            ))}
            <th className="px-5 py-4 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-default bg-card transition-colors hover:bg-neutral-secondary-soft"
            >
              <td className="px-5 py-4 align-top">
                <p className="font-medium text-heading">{row.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {[
                    row.semester ? `S${row.semester}` : null,
                    `${row.qcmCount} QCM${row.qcmCount > 1 ? 's' : ''}`,
                  ]
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              </td>
              <td className="px-5 py-4 align-top text-center">
                <div className="flex justify-center">
                  <Badge
                    variant="outline"
                    className={blockTypeBadgeClassNames[row.blockType]}
                  >
                    {row.blockLabel}
                  </Badge>
                </div>
              </td>
              <td className="px-5 py-4 text-right align-top">
                <Button asChild size="sm">
                  <Link href={row.href}>Voir</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
