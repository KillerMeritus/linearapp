import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({
   variable: '--font-inter',
   subsets: ['latin'],
   display: 'swap',
});

const interDisplay = Inter({
   variable: '--font-inter-display',
   subsets: ['latin'],
   weight: ['600', '700', '800'],
   display: 'swap',
});

const siteUrl = 'https://scaler-hackathon.piedpiper.dev';

export const metadata: Metadata = {
   title: {
      template: '%s | Scaler Hackathon by Pied Piper',
      default: 'Scaler Hackathon by Pied Piper',
   },
   description:
      'A comprehensive project management solution built for Scaler Hackathon by Team Pied Piper. Built with Next.js and shadcn/ui, featuring modern UI/UX for tracking issues, projects and teams with real-time collaboration.',
   openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteUrl,
      siteName: 'Scaler Hackathon - Pied Piper',
      images: [
         {
            url: `${siteUrl}/banner.png`,
            width: 2560,
            height: 1440,
            alt: 'Scaler Hackathon Project by Pied Piper',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      site: '@piedpiper_team',
      creator: '@piedpiper_team',
      images: [
         {
            url: `${siteUrl}/banner.png`,
            width: 2560,
            height: 1440,
            alt: 'Scaler Hackathon',
         },
      ],
   },
   authors: [{ name: 'Team Pied Piper', url: 'https://github.com/pied-piper/scaler-hackathon' }],
   keywords: ['scaler', 'hackathon', 'pied piper', 'project management', 'nextjs', 'shadcn'],
};

import { ThemeProvider } from '@/components/layout/theme-provider';
import { AuthProvider } from '@/lib/auth-context';

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
         </head>
         <body className={`${inter.variable} ${interDisplay.variable} antialiased bg-background`}>
            <AuthProvider>
               <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                  {children}
                  <Toaster />
               </ThemeProvider>
            </AuthProvider>
         </body>
      </html>
   );
}
