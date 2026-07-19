import '../global.scss';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import clsx from 'clsx';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.FRONTEND_URL || 'https://studio.voholabs.com'
  ),
};

const interTight = Inter_Tight({
  weight: ['600', '500', '400'],
  style: ['normal'],
  subsets: ['latin'],
});

// Standalone root layout for /privacy and /terms. Deliberately free of auth,
// SWR and provider context so the pages render for anonymous reviewers.
export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Voholabs Studio" />
      </head>
      <body
        className={clsx(interTight.className, 'dark text-primary !bg-primary')}
      >
        {children}
      </body>
    </html>
  );
}
