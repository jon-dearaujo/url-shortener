import type { Metadata } from 'next';
import { Roboto_Mono, Roboto } from 'next/font/google';
import './globals.css';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import I18nProvider from '../modules/i18n';
import { getI18nLangKey } from '../modules/i18n/get-lang-key';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const i18nLangKey = await getI18nLangKey();
  return (
    <html
      lang="en"
      className={`${robotoSans.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body>
        <ChakraProvider>
          <I18nProvider lang={i18nLangKey}>{children}</I18nProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
