import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ukrainemonitor.vercel.app'),
  title: 'Ukraine Monitor — Brand Guidelines',
  description: 'Official brand identity documentation for Ukraine Monitor.',
  openGraph: {
    title: 'Ukraine Monitor — Brand Guidelines',
    description: 'Logo system, color palette, typography, and icon guidelines.',
    images: [
      {
        url: '/assets/logo/og.png',
        width: 1200,
        height: 630,
        alt: 'Ukraine Monitor Brand Guidelines',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ukraine Monitor — Brand Guidelines',
    images: ['/assets/logo/og.png'],
  },
  icons: {
    icon: [
      { url: '/assets/logo/Favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/assets/logo/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
