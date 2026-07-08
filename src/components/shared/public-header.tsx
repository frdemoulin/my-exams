'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Shield, LogIn, BookOpen, FlaskConical, Stethoscope } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { isAdminRole } from '@/lib/auth/roles';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import UserButton from '@/components/shared/user-button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { APP_NAME } from '@/config/app';

export function PublicHeader() {
  const { data: session } = useSession();
  const actorRole = session?.actor?.role ?? session?.user?.role ?? null;
  const canAccessAdmin = isAdminRole(actorRole);
  const [viewerAudience, setViewerAudience] = useState<'SECONDARY' | 'HEALTH' | null>(null);
  const pathname = usePathname();
  const isAnnalesActive = pathname?.startsWith('/diplomes')
    || pathname?.startsWith('/sujets')
    || pathname?.startsWith('/exercices');
  const isHealthActive = pathname?.startsWith('/sante');
  const isTrainingActive = pathname?.startsWith('/entrainement');
  const annalesLinkClass = isAnnalesActive
    ? 'font-semibold text-foreground'
    : 'hover:text-foreground';
  const annalesIconClass = isAnnalesActive
    ? 'border-brand/40 bg-brand/10 text-fg-brand'
    : '';
  const healthLinkClass = isHealthActive
    ? 'font-semibold text-foreground'
    : 'hover:text-foreground';
  const healthIconClass = isHealthActive
    ? 'border-brand/40 bg-brand/10 text-fg-brand'
    : '';
  const trainingLinkClass = isTrainingActive
    ? 'font-semibold text-foreground'
    : 'hover:text-foreground';
  const trainingIconClass = isTrainingActive
    ? 'border-brand/40 bg-brand/10 text-fg-brand'
    : '';
  const topbarIconButtonClass = 'inline-flex items-center justify-center rounded-base border border-default bg-neutral-primary-soft text-body shadow-xs text-sm font-semibold transition-colors hover:bg-neutral-secondary-soft hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1';
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-xs font-bold text-white">
            SA
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">{APP_NAME}</span>
            <span className="hidden text-xs text-muted-foreground md:inline">
              Annales d&apos;examens, gratuites et tri&eacute;es.
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {session?.user && canAccessAdmin && (
              <Link href="/admin" className="hover:text-foreground">
                Administration
              </Link>
            )}
            <Link
              href="/diplomes"
              className={annalesLinkClass}
              aria-current={isAnnalesActive ? 'page' : undefined}
            >
              Annales
            </Link>
            {canAccessHealth ? (
              <Link
                href="/sante"
                className={healthLinkClass}
                aria-current={isHealthActive ? 'page' : undefined}
              >
                Santé
              </Link>
            ) : null}
            <Link
              href="/entrainement"
              className={trainingLinkClass}
              aria-current={isTrainingActive ? 'page' : undefined}
            >
              Entra&icirc;nement
            </Link>
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
                <TooltipContent>Changer le th&egrave;me</TooltipContent>
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
          <div className="flex items-center gap-3 md:hidden">
            {session?.user && canAccessAdmin && (
              <Link
                href="/admin"
                className={`${topbarIconButtonClass} h-10 w-10 p-2.5`}
              >
                <Shield className="h-4 w-4" />
                <span className="sr-only">Administration</span>
              </Link>
            )}
            <Link
              href="/diplomes"
              className={`${topbarIconButtonClass} h-10 w-10 p-2.5 ${annalesIconClass}`}
              aria-current={isAnnalesActive ? 'page' : undefined}
            >
              <BookOpen className="h-4 w-4" />
              <span className="sr-only">Annales</span>
            </Link>
            {canAccessHealth ? (
              <Link
                href="/sante"
                className={`${topbarIconButtonClass} h-10 w-10 p-2.5 ${healthIconClass}`}
                aria-current={isHealthActive ? 'page' : undefined}
              >
                <Stethoscope className="h-4 w-4" />
                <span className="sr-only">Santé</span>
              </Link>
            ) : null}
            <Link
              href="/entrainement"
              className={`${topbarIconButtonClass} h-10 w-10 p-2.5 ${trainingIconClass}`}
              aria-current={isTrainingActive ? 'page' : undefined}
            >
              <FlaskConical className="h-4 w-4" />
              <span className="sr-only">Entra&icirc;nement</span>
            </Link>
            <ThemeToggle className={`${topbarIconButtonClass} h-10 w-10 p-2.5`} />
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
