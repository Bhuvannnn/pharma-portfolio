
import Navigation from "../../components/layout/Navigation";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pharmaceutical Design Portfolio',
  description: 'Portfolio showcasing pharmaceutical graphic design work',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">
        {children}
        </div>
      </body>
    </html>
  );
}
