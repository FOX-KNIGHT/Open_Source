import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
