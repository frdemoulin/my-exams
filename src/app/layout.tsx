import type { Metadata } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import NextTopLoader from 'nextjs-toploader';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE } from "@/config/app";
import { ToastDisplay } from "@/components/shared/toast-display";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";
import "katex/dist/katex.min.css";

const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;
const umamiHost = process.env.NEXT_PUBLIC_UMAMI_HOST;

export const metadata: Metadata = {
  title: {
    template: APP_TITLE_TEMPLATE,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const cookieStore = await cookies();
  const theme = cookieStore.get("app-theme")?.value === "dark" ? "dark" : "light";

  return (
    <html lang={locale} className={theme} suppressHydrationWarning style={{ colorScheme: theme }}>
      <body className={`${inter.className} antialiased bg-background text-foreground`} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          {/* Récupère la session côté client après le chargement des pages */}
          <SessionProvider>
            <Toaster
              toastOptions={{
                className: "text-xs",
              }}
            />
            <ToastDisplay />
            <NextTopLoader
              color="#3266BF"
              height={4}
              showSpinner={false}
            />
            <ThemeProvider
              defaultTheme={theme}
            >
              {children}
            </ThemeProvider>
          </SessionProvider>
        </NextIntlClientProvider>
        {umamiWebsiteId && umamiSrc && (
          <Script
            src={umamiSrc}
            data-website-id={umamiWebsiteId}
            data-host-url={umamiHost}
            strategy="afterInteractive"
          />
        )}
        {/* Script Flowbite (UMD) via CDN ou local) */}
        <Script src="https://cdn.jsdelivr.net/npm/flowbite/dist/flowbite.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
