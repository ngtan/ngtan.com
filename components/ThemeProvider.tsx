'use client';

import siteMetadata from '@/data/siteMetadata';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </NextThemeProvider>
  );
}
