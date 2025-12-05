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
    <div className="mb-6 p-4 bg-blue-100 border-2 border-blue-500 rounded">
      <p className="text-blue-900 font-bold">BREADCRUMB TEST - Items: {items.length}</p>
      <nav className="flex items-center gap-2 text-sm">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-gray-400">/</span>}
            {item.href ? (
              <Link href={item.href} className="text-blue-600 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}
