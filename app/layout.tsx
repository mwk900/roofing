import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Northcrest Roofing Nottingham (Demo) | Roof Repairs and Re-roofs',
  description:
    'Emergency repairs, re-roofs and guttering across Nottingham. Written quotes, workmanship guarantees, and no call-out fee for booked inspections.',
  openGraph: {
    title: 'Northcrest Roofing Nottingham (Demo)',
    description:
      'Emergency-first roofing in Nottingham. Written quotes, guaranteed workmanship, same day callouts.',
    url: 'https://northcrest.demo',
    siteName: 'Northcrest Roofing Nottingham (Demo)',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={dmSans.variable}>
      <body className="font-sans antialiased">
        {children}
        <FloatingCallButton />
        <MobileBottomBar />
      </body>
    </html>
  );
}
