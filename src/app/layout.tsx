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
      </body>
    </html>
  );
}
