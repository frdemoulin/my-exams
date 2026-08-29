import React from 'react';
import Link from 'next/link';
import packageInfo from '../../../package.json';
import { APP_NAME } from '@/config/app';

type SiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className = '' }: SiteFooterProps) {
  const envVersion = process.env.NEXT_PUBLIC_APP_VERSION?.trim();
  const appVersion = envVersion || packageInfo.version;

  return (
    <footer className={`border-t border-border bg-card ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* IDENTITÉ */}
          <div className="space-y-3 sm:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white">
                ME
              </div>
              <span className="text-base font-bold tracking-tight text-heading">
                {APP_NAME}
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              Plateforme de révision du collège à la L1 Santé.
            </p>
          </div>

          {/* UNIVERS */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-heading">
              Univers
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/college" className="hover:text-foreground transition-colors">
                  Collège
                </Link>
              </li>
              <li>
                <Link href="/lycee" className="hover:text-foreground transition-colors">
                  Lycée
                </Link>
              </li>
              <li>
                <Link href="/sante" className="hover:text-foreground transition-colors">
                  L1 Santé
                </Link>
              </li>
            </ul>
          </div>

          {/* INFORMATIONS */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-heading">
              Informations
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/mentions-legales" className="hover:text-foreground transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BAS DE PAGE */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-[11px] text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {APP_NAME}</p>
          <div className="flex items-center gap-4">
            <span>Version {appVersion}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
