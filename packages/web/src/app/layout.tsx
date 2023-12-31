import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'raf/polyfill';

import { ModalProvider, ModalStack } from '../modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ height: '100vh', display: 'flex' }}>
        <ModalProvider stack={ModalStack}>{children}</ModalProvider>
      </body>
    </html>
  );
}
