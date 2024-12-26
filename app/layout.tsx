import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { DM_Serif_Text } from '@next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const dmSerifText = DM_Serif_Text({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Ben Power Photography',
  description: 'Photography portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSerifText.className} bg-white text-black text-lg md:text-xl`}>
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <nav className="flex items-center justify-between">
              {/* <Link href="/" className={window.innerWidth <= 768 ? 'text-lg md:text-xl font-light' : window.innerWidth <= 1024 ? 'text-xl md:text-2xl font-light' : 'text-2xl md:text-3xl font-light'}>
                <span className="font-[400]">Ben Power</span>
              </Link> */}
              <Link href="/" className="text-2xl md:text-3xl font-light">
                <span className="font-[400]">Ben Power</span>
              </Link>
              <div className="flex-1 flex justify-center">
                <div className="flex text-2xl items-center gap-4 md:gap-8">
                  <Link href="/work" className="hover:underline underline-offset-4">
                    Work
                  </Link>
                  <Link href="/about" className="hover:underline underline-offset-4">
                    About
                  </Link>
                  <Link href="/contact" className="hover:underline underline-offset-4">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <a href="https://instagram.com/benpowerphoto" target="_blank" rel="noopener noreferrer" className="p-2">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="mailto:contact@benpowerphotography.com" className="p-2">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <SpeedInsights />
            </nav>
          </div>
        </header>
        <main className="pt-16 md:pt-20">{children}</main>
      </body>
    </html>
  );
}