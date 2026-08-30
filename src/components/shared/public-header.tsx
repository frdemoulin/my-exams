'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LogIn, GraduationCap, BookOpen, Stethoscope } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { ThemeToggle } from '@/components/shared/theme-toggle';
import UserButton from '@/components/shared/user-button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { APP_NAME } from '@/config/app';

export function PublicHeader() {
  const { data: session } = useSession();
  const [viewerAudience, setViewerAudience] = useState<'SECONDARY' | 'HEALTH' | null>(null);
  const pathname = usePathname();

  const isCollegeActive = pathname === '/college' || pathname?.startsWith('/college/');
  const isLyceeActive = pathname === '/lycee' || pathname?.startsWith('/lycee/');
  const isHealthActive = pathname === '/sante' || pathname?.startsWith('/sante/');

  const collegeLinkClass = isCollegeActive
    ? 'font-semibold text-foreground'
    : 'hover:text-foreground';
  const collegeIconClass = isCollegeActive
    ? 'border-brand/40 bg-brand/10 text-fg-brand'
    : '';

  const lyceeLinkClass = isLyceeActive
    ? 'font-semibold text-foreground'
    : 'hover:text-foreground';
  const lyceeIconClass = isLyceeActive
    ? 'border-brand/40 bg-brand/10 text-fg-brand'
    : '';

  const healthLinkClass = isHealthActive
    ? 'font-semibold text-foreground'
    : 'hover:text-foreground';
  const healthIconClass = isHealthActive
    ? 'border-brand/40 bg-brand/10 text-fg-brand'
    : '';

  const topbarIconButtonClass =
    'inline-flex items-center justify-center rounded-base border border-default bg-neutral-primary-soft text-body shadow-xs text-sm font-semibold transition-colors hover:bg-neutral-secondary-soft hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1';
  const canAccessHealth = viewerAudience !== 'SECONDARY';

  useEffect(() => {
    if (!session?.user) {
      setViewerAudience(null);
      return;
    }

    let isMounted = true;

    const loadViewerAudience = async () => {
      try {
        const response = await fetch('/api/me/viewer-profile');
        const payload = (await response.json().catch(() => null)) as
          | { audience?: 'SECONDARY' | 'HEALTH' | null }
          | null;

        if (!isMounted) {
          return;
        }

        if (!response.ok) {
          setViewerAudience(null);
          return;
        }

        setViewerAudience(payload?.audience ?? null);
      } catch {
        if (isMounted) {
          setViewerAudience(null);
        }
      }
    };

    void loadViewerAudience();

    return () => {
      isMounted = false;
    };
  }, [session?.user]);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 max-sm:shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-xs font-bold text-white">
            ME
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="font-semibold tracking-tight">{APP_NAME}</span>
            <span className="hidden text-xs text-muted-foreground md:inline">
              Plateforme de révision du collège à la L1 Santé.
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link
              href="/college"
              className={collegeLinkClass}
              aria-current={isCollegeActive ? 'page' : undefined}
            >
              Collège
            </Link>
            <Link
              href="/lycee"
              className={lyceeLinkClass}
              aria-current={isLyceeActive ? 'page' : undefined}
            >
              Lycée
            </Link>
            {canAccessHealth ? (
              <Link
                href="/sante"
                className={healthLinkClass}
                aria-current={isHealthActive ? 'page' : undefined}
              >
                L1 Santé
              </Link>
            ) : null}
            {!session?.user ? (
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            ) : null}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ThemeToggle className={`${topbarIconButtonClass} h-10 w-10 p-2.5`} />
                </TooltipTrigger>
                <TooltipContent>Changer le thème</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {!session?.user && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/log-in"
                      className={`${topbarIconButtonClass} h-9 w-9`}
                    >
                      <LogIn className="h-4 w-4" />
                      <span className="sr-only">Se connecter</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Se connecter</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {session?.user ? <UserButton user={session.user} /> : null}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 md:hidden">
            <Link
              href="/college"
              className={`${topbarIconButtonClass} h-9 w-9 p-2 sm:h-10 sm:w-10 sm:p-2.5 ${collegeIconClass}`}
              aria-current={isCollegeActive ? 'page' : undefined}
            >
              <GraduationCap className="h-4 w-4" />
              <span className="sr-only">Collège</span>
            </Link>
            <Link
              href="/lycee"
              className={`${topbarIconButtonClass} h-9 w-9 p-2 sm:h-10 sm:w-10 sm:p-2.5 ${lyceeIconClass}`}
              aria-current={isLyceeActive ? 'page' : undefined}
            >
              <BookOpen className="h-4 w-4" />
              <span className="sr-only">Lycée</span>
            </Link>
            {canAccessHealth ? (
              <Link
                href="/sante"
                className={`${topbarIconButtonClass} h-9 w-9 p-2 sm:h-10 sm:w-10 sm:p-2.5 ${healthIconClass}`}
                aria-current={isHealthActive ? 'page' : undefined}
              >
                <Stethoscope className="h-4 w-4" />
                <span className="sr-only">L1 Santé</span>
              </Link>
            ) : null}

            <ThemeToggle className={`${topbarIconButtonClass} h-9 w-9 p-2 sm:h-10 sm:w-10 sm:p-2.5`} />

            {session?.user ? (
              <UserButton user={session.user} />
            ) : (
              <Link
                href="/log-in"
                className={`${topbarIconButtonClass} h-9 w-9`}
              >
                <LogIn className="h-4 w-4" />
                <span className="sr-only">Se connecter</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
