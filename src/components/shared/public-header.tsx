'use client';

import Link from 'next/link';
import { Shield, LogIn, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

import { ThemeToggle } from '@/components/shared/theme-toggle';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { APP_NAME } from '@/config/app';

export function PublicHeader() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isAnnalesActive = pathname?.startsWith('/diplomes')
    || pathname?.startsWith('/sujets')
    || pathname?.startsWith('/exercices');
  const annalesLinkClass = isAnnalesActive
    ? 'font-semibold text-foreground'
    : 'hover:text-foreground';
  const annalesIconClass = isAnnalesActive
    ? 'border-brand/40 bg-brand/10 text-fg-brand'
    : '';
  const topbarIconButtonClass = 'inline-flex items-center justify-center rounded-base border border-default bg-neutral-primary-soft text-body shadow-xs text-sm font-semibold transition-colors hover:bg-neutral-secondary-soft hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1';

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
            {session?.user && (
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
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
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
            {session?.user && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={() => signOut({ callbackUrl: '/' })}
                      className={`${topbarIconButtonClass} h-9 w-9`}
                    >
                      <span className="sr-only">Se d&eacute;connecter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.75A2.75 2.75 0 0 0 13 3H6.75A2.75 2.75 0 0 0 4 5.75v12.5A2.75 2.75 0 0 0 6.75 21H13a2.75 2.75 0 0 0 2.75-2.75V15M10 12h10m0 0-3-3m3 3-3 3"
                        />
                      </svg>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Se d&eacute;connecter</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <div className="flex items-center gap-3 md:hidden">
            {session?.user && (
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
            <ThemeToggle className={`${topbarIconButtonClass} h-10 w-10 p-2.5`} />
            {session?.user ? (
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: '/' })}
                className={`${topbarIconButtonClass} h-9 w-9`}
              >
                <span className="sr-only">Se d&eacute;connecter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.75A2.75 2.75 0 0 0 13 3H6.75A2.75 2.75 0 0 0 4 5.75v12.5A2.75 2.75 0 0 0 6.75 21H13a2.75 2.75 0 0 0 2.75-2.75V15M10 12h10m0 0-3-3m3 3-3 3"
                  />
                </svg>
              </button>
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
