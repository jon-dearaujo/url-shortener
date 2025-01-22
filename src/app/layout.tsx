import type { Metadata } from 'next';
import { Roboto_Mono, Roboto } from 'next/font/google';
import './globals.css';
import { Provider } from '@/components/ui/provider';

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
  weight: '400',
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'URL Shortener',
  description: 'Shorten your URLs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoSans.variable} ${robotoMono.variable}`}>
        <Provider forcedTheme="light">{children}</Provider>
      </body>
    </html>
  );
}
