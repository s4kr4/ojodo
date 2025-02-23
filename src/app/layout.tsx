import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import { TRPCReactProvider } from '~/trpc/react';
import AuthProvider from '~/components/providers/SessionProvider';
import Header from '~/app/_components/parts/Header';

export const metadata: Metadata = {
  title: '往生堂',
  description: '原神キャラ育成管理ツール',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${GeistSans.variable}`}>
      <body>
        <AuthProvider>
          <TRPCReactProvider>
            <Header />
            <main className="pt-16">{children}</main>
          </TRPCReactProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
