'use client';

import { BreadcrumbProvider, AutoBreadcrumb } from "@/components/shared/auto-breadcrumb";

export function BreadcrumbWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BreadcrumbProvider>
      <div className="flex-1 min-w-0">
        <div className="px-6 pt-4 pb-2">
          <AutoBreadcrumb />
        </div>
        {children}
      </div>
    </BreadcrumbProvider>
  );
}
