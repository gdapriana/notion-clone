import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mindmemo',
  description:
    'Where Clarity Meets Creativity, Every Thought Captured, Every Idea Crafted.',
  icons: {
    icon: [
      { media: '(prefers-color-scheme: light)', url: '/m.svg', href: '/m.svg' },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/m-dark.svg',
        href: '/m-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
