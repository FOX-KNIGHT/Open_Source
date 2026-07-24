import type { Metadata } from 'next';
import { Archivo_Black, Space_Mono, Inter } from 'next/font/google';
import './globals.css';

const archivoBlack = Archivo_Black({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Open Source Ecosystem | GFG',
  description: 'Interactive session on Git, GitHub, Documentation, and Community Building',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
