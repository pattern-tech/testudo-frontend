import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/header/Header';
import { AppProviders } from '@/components/Providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Testudo',
  description: '',
  // icons: {
  //   icon: '/favicon.svg',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <Header />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
