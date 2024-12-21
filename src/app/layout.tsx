import type { Metadata } from "next";
import "./globals.css";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import SmoothScroll from './components/smooth-scroll';
import { Nav } from './components/nav';
import { Footer } from './components/footer';
import clsx from "clsx";
import { Hatton } from '@/fonts/Hatton';
import { Mori } from '@/fonts/Mori';

export const metadata: Metadata = {
  title: "Emeralds",
  description: "Clothing brand",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={clsx(
          Hatton.className,
          Hatton.variable,
          Mori.className,
          Mori.variable,
          'antialiased',
          'bg-white'
        )}
      >
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
