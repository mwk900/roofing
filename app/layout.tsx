import type { Metadata } from 'next';
import EmergencyBar from '@/components/EmergencyBar';
import ScrollTop from '@/components/scroll-top';
import './globals.css';

export const metadata: Metadata = {
  title: 'Northcrest Roofing Nottingham (Demo) | Roof Repairs & Re-roofs',
  description:
    'Trusted roofing in Nottingham for repairs, re-roofs, flat roofs and emergency callouts. Fast response, clear written quotes and guaranteed work.',
  openGraph: {
    title: 'Northcrest Roofing Nottingham (Demo)',
    description:
      'Fast-response roofing in Nottingham with clear quotes and guaranteed workmanship.',
    url: 'https://example.com',
    siteName: 'Northcrest Roofing Nottingham (Demo)',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <EmergencyBar />
        <ScrollTop />
      </body>
    </html>
  );
}
