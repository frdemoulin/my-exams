import React from 'react';
import packageInfo from '../../../package.json';

type SiteFooterProps = {
  className?: string;
};

// Affiche la version de build : d'abord une éventuelle variable d'environnement
// NEXT_PUBLIC_APP_VERSION (tag CI), sinon fallback sur package.json.
export function SiteFooter({ className = '' }: SiteFooterProps) {
  const envVersion = process.env.NEXT_PUBLIC_APP_VERSION?.trim();
  const appVersion = envVersion || packageInfo.version;

  return (
    <footer className={`border-t border-border bg-card ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} Site d&apos;annales — plateforme de
          révision.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-[11px]">Version v{appVersion}</span>
          <div className="flex gap-4">
            <a href="/mentions-legales" className="hover:text-foreground">
              Mentions légales
            </a>
            <a href="/contact" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
