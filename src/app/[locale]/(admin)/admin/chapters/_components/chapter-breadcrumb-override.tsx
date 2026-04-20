"use client";

import { useEffect } from "react";

import { useBreadcrumbOverride } from "@/components/shared/auto-breadcrumb";

interface ChapterBreadcrumbItem {
  label: string;
  href?: string;
}

interface ChapterBreadcrumbOverrideProps {
  items: ChapterBreadcrumbItem[];
}

export function ChapterBreadcrumbOverride({ items }: ChapterBreadcrumbOverrideProps) {
  const { setOverride } = useBreadcrumbOverride();

  useEffect(() => {
    setOverride({ items });

    return () => setOverride(null);
  }, [items, setOverride]);

  return null;
}