import type { Metadata } from 'next';
import { ReactNode } from 'react';
import TrpcClientProvider from '#shared/lib/providers/TrpcClient';
import AuthProvider from '#shared/lib/providers/AuthProvider';
import ThemeModeProvider from '#shared/lib/providers/ThemeProvider';
import Header from '#shared/ui/layout/Header';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const metadata: Metadata = {
  title: 'Burger Crew',
  description: '버거 크루',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TrpcClientProvider>
          <AuthProvider>
            <ThemeModeProvider>
              <Header />
              <main>{children}</main>
            </ThemeModeProvider>
          </AuthProvider>
        </TrpcClientProvider>
      </body>
    </html>
  );
}
