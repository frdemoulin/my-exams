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

type ViewerState = 'loading' | 'anonymous' | 'noEnrollment' | 'secondary' | 'health';

export function PublicHeader() {
  const { data: session, status } = useSession();
  const [viewerState, setViewerState] = useState<ViewerState>('loading');
  const [secondarySegment, setSecondarySegment] = useState<'COLLEGE' | 'LYCEE' | null>(null);
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

  useEffect(() => {
    if (status === 'loading') {
      setViewerState('loading');
      return;
    }

    if (!session?.user) {
      setViewerState('anonymous');
      setSecondarySegment(null);
      return;
    }

    let isMounted = true;
    setViewerState('loading');

    const loadViewerProfile = async () => {
      try {
        const response = await fetch('/api/me/viewer-profile');
        const payload = (await response.json().catch(() => null)) as
          | {
              audience?: 'SECONDARY' | 'HEALTH' | null;
              segment?: 'COLLEGE' | 'LYCEE' | null;
            }
          | null;

        if (!isMounted) return;

        if (!response.ok || !payload?.audience) {
          setViewerState('noEnrollment');
          setSecondarySegment(null);
          return;
        }

        if (payload.audience === 'HEALTH') {
          setViewerState('health');
          setSecondarySegment(null);
        } else if (payload.audience === 'SECONDARY') {
          setViewerState('secondary');
          setSecondarySegment(payload.segment ?? null);
        } else {
          setViewerState('noEnrollment');
          setSecondarySegment(null);
        }
      } catch {
        if (isMounted) {
          setViewerState('noEnrollment');
          setSecondarySegment(null);
        }
      }
    };

    void loadViewerProfile();

    return () => {
      isMounted = false;
    };
  }, [session?.user, status]);

  // Déterminer les liens autorisés selon l'univers
  const showCollege =
    viewerState === 'anonymous' ||
    viewerState === 'noEnrollment' ||
    (viewerState === 'secondary' && secondarySegment === 'COLLEGE');

  const showLycee =
    viewerState === 'anonymous' ||
    viewerState === 'noEnrollment' ||
    (viewerState === 'secondary' && secondarySegment === 'LYCEE');

  const showHealth =
    viewerState === 'anonymous' ||
    viewerState === 'noEnrollment' ||
    viewerState === 'health';

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
          {/* Navigation Desktop */}
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {viewerState === 'loading' ? (
              <div className="h-4 w-28 animate-pulse rounded bg-neutral-primary-soft" />
            ) : (
              <>
                {showCollege && (
                  <Link
                    href="/college"
                    className={collegeLinkClass}
                    aria-current={isCollegeActive ? 'page' : undefined}
                  >
                    Collège
                  </Link>
                )}
                {showLycee && (
                  <Link
                    href="/lycee"
                    className={lyceeLinkClass}
                    aria-current={isLyceeActive ? 'page' : undefined}
                  >
                    Lycée
                  </Link>
                )}
                {showHealth && (
                  <Link
                    href="/sante"
                    className={healthLinkClass}
                    aria-current={isHealthActive ? 'page' : undefined}
                  >
                    L1 Santé
                  </Link>
                )}
                {!session?.user ? (
                  <Link href="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                ) : null}
              </>
            )}
          </nav>

          {/* Contrôles Desktop */}
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

          {/* Navigation & Contrôles Mobile */}
          <div className="flex items-center gap-1.5 sm:gap-3 md:hidden">
            {viewerState === 'loading' ? (
              <div className="h-9 w-16 animate-pulse rounded-base bg-neutral-primary-soft" />
            ) : (
              <>
                {showCollege && (
                  <Link
                    href="/college"
                    className={`${topbarIconButtonClass} h-9 w-9 p-2 sm:h-10 sm:w-10 sm:p-2.5 ${collegeIconClass}`}
                    aria-current={isCollegeActive ? 'page' : undefined}
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span className="sr-only">Collège</span>
                  </Link>
                )}
                {showLycee && (
                  <Link
                    href="/lycee"
                    className={`${topbarIconButtonClass} h-9 w-9 p-2 sm:h-10 sm:w-10 sm:p-2.5 ${lyceeIconClass}`}
                    aria-current={isLyceeActive ? 'page' : undefined}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className="sr-only">Lycée</span>
                  </Link>
                )}
                {showHealth && (
                  <Link
                    href="/sante"
                    className={`${topbarIconButtonClass} h-9 w-9 p-2 sm:h-10 sm:w-10 sm:p-2.5 ${healthIconClass}`}
                    aria-current={isHealthActive ? 'page' : undefined}
                  >
                    <Stethoscope className="h-4 w-4" />
                    <span className="sr-only">L1 Santé</span>
                  </Link>
                )}
              </>
            )}

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
