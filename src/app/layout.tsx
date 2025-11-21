import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import NextTopLoader from 'nextjs-toploader';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} antialiased text-slate-700 dark:text-slate-400 dark:bg-slate-900`} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          {/* Récupère la session côté client après le chargement des pages */}
          <SessionProvider>
            <Toaster
              position="top-center"
              toastOptions={{
                className: "text-sm",
                duration: 3000,
              }}
            />
            <NextTopLoader
              color="#3266BF"
              height={4}
              showSpinner={false}
            />
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
