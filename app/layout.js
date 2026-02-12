import { Barlow } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap'
});

export const metadata = {
  title: 'Voice Up Athletics | SaaS for Sports Teams',
  description:
    'Voice Up Athletics helps teams, coaches, and athletes communicate faster and train smarter with one simple platform.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}