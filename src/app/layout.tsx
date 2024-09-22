import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextTopLoader from 'nextjs-toploader';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className} suppressHydrationWarning={true}>
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
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
