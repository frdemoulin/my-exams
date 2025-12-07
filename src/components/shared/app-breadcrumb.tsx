import React from 'react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface AppBreadcrumbProps {
  items: BreadcrumbItemType[];
}

export function AppBreadcrumb({ items }: AppBreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <div className="mb-6 rounded border-2 border-brand bg-brand/10 p-4">
      <p className="font-bold text-heading">BREADCRUMB TEST - Items: {items.length}</p>
      <nav className="flex items-center gap-2 text-sm">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-muted-foreground">/</span>}
            {item.href ? (
              <Link href={item.href} className="text-fg-brand hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-heading">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}
