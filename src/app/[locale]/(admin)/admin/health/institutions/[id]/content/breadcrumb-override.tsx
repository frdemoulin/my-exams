"use client";

import { useEffect } from "react";

import { useBreadcrumbOverride } from "@/components/shared/auto-breadcrumb";

type HealthInstitutionContentBreadcrumbOverrideProps = {
  institutionId: string;
  institutionLabel: string;
};

export function HealthInstitutionContentBreadcrumbOverride({
  institutionId,
  institutionLabel,
}: HealthInstitutionContentBreadcrumbOverrideProps) {
  const { setOverride } = useBreadcrumbOverride();

  useEffect(() => {
    setOverride({
      items: [
        { label: "Administration", href: "/admin" },
        { label: "Santé", href: "/admin/health" },
        { label: "Établissements", href: "/admin/health/institutions" },
        {
          label: institutionLabel,
          href: `/admin/health/institutions/${institutionId}`,
        },
        { label: "Contenu" },
      ],
    });

    return () => setOverride(null);
  }, [institutionId, institutionLabel, setOverride]);

  return null;
}
