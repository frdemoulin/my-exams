import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import NextTopLoader from 'nextjs-toploader';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css";

const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;
const umamiHost = process.env.NEXT_PUBLIC_UMAMI_HOST;

export const metadata: Metadata = {
  title: {
    template: "%s | My exams",
    default: "My exams",
  },
  description: "My exams",
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
  const messages = await getMessages();

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-foreground`} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          {/* Récupère la session côté client après le chargement des pages */}
          <SessionProvider>
            <Toaster
              toastOptions={{
                className: "text-xs",
              }}
            />
            <NextTopLoader
              color="#3266BF"
              height={4}
              showSpinner={false}
            />
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
              disableTransitionOnChange
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
