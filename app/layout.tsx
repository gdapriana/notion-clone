import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ConvexClientProvider } from '@/components/providers/convex-provider';
import { Toaster } from 'sonner';

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="mindmemo-theme"
          >
            <Toaster position="bottom-right" />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
