'use client';

import React, { createContext, useContext, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbOverride {
  items: Array<{ label: string; href?: string }>;
}

interface BreadcrumbContextType {
  override: BreadcrumbOverride | null;
  setOverride: (override: BreadcrumbOverride | null) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | null>(null);

export function BreadcrumbProvider({ children }: { children: React.ReactNode }) {
  const [override, setOverride] = useState<BreadcrumbOverride | null>(null);
  
  return (
    <BreadcrumbContext.Provider value={{ override, setOverride }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumbOverride() {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumbOverride must be used within BreadcrumbProvider');
  }
  return context;
}

export function AutoBreadcrumb() {
  const pathname = usePathname();
  const context = useContext(BreadcrumbContext);
  const override = context?.override;
  
  // Ne pas afficher sur la home ou l'admin racine
  if (!pathname || pathname === '/' || pathname === '/admin') {
    return null;
  }

  const segments = pathname.split('/').filter(Boolean);
  
  // Mapping des segments vers des labels français
  const segmentLabels: Record<string, string> = {
    'admin': 'Administration',
    'dashboard': 'Tableau de bord',
    'exam-papers': 'Sujets d\'examen',
    'exercises': 'Exercices',
    'teachings': 'Enseignements',
    'subjects': 'Matières',
    'grades': 'Niveaux',
    'diplomas': 'Diplômes',
    'divisions': 'Filières',
    'themes': 'Thèmes',
    'chapters': 'Chapitres',
    'curriculums': 'Programmes',
    'examination-centers': 'Centres d\'examen',
    'users': 'Utilisateurs',
    'add': 'Ajouter',
    'edit': 'Modifier',
    'split': 'Découpage',
  };

  const breadcrumbItems: Array<{ label: string; href?: string }> = [];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Ignorer les IDs (segments qui ressemblent à des ObjectIds MongoDB)
    const isId = segment.length === 24 && /^[a-f0-9]{24}$/i.test(segment);
    
    if (!isId) {
      const label = segmentLabels[segment] || segment;
      const isLast = index === segments.length - 1;
      
      breadcrumbItems.push({
        label,
        href: isLast ? undefined : currentPath,
      });
    }
  });

  // Utiliser l'override si disponible
  const items = override?.items || breadcrumbItems;

  if (items.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
