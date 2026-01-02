'use client';

import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

import { ThemeToggle } from '@/components/shared/theme-toggle';
import { APP_NAME } from '@/config/app';

export function PublicHeader() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-xs font-bold text-white">
            SA
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">{APP_NAME}</span>
            <span className="text-xs text-muted-foreground">
              Annales d&apos;examens, gratuites et tri&eacute;es.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {session?.user && (
              <Link href="/admin" className="hover:text-foreground">
                Administration
              </Link>
            )}
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            {!session?.user && (
              <Link
                href="/log-in"
                className="inline-flex h-9 items-center gap-2 rounded-base border border-transparent bg-success px-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-success-strong focus:outline-none focus:ring-4 focus:ring-success-medium focus:ring-offset-1"
              >
                <LogIn className="h-4 w-4" />
                <span>Se connecter</span>
              </Link>
            )}
            {session?.user && (
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="inline-flex h-9 items-center gap-2 rounded-base border border-default-medium bg-neutral-secondary-medium px-3 text-sm font-semibold text-body shadow-xs transition-colors hover:bg-neutral-tertiary-medium hover:text-heading focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
              >
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
                <span>Se d&eacute;connecter</span>
              </button>
            )}
          </div>
          <div className="flex items-center gap-3 md:hidden">
            {session?.user && (
              <Link
                href="/admin"
                className="text-sm font-semibold text-fg-brand hover:text-heading"
              >
                Admin
              </Link>
            )}
            <Link href="/contact" className="text-sm font-semibold text-fg-brand hover:text-heading">
              Contact
            </Link>
            <ThemeToggle />
            {session?.user ? (
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="inline-flex h-9 items-center gap-2 rounded-base border border-default-medium bg-neutral-secondary-medium px-3 text-sm font-semibold text-body shadow-xs transition-colors hover:bg-neutral-tertiary-medium hover:text-heading focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
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
                className="inline-flex h-9 items-center gap-2 rounded-base border border-transparent bg-success px-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-success-strong focus:outline-none focus:ring-4 focus:ring-success-medium focus:ring-offset-1"
              >
                <LogIn className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
