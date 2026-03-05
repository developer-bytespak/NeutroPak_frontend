import type { Metadata, Viewport } from 'next';
import NavbarWrapper from '@/components/NavbarWrapper';
import FooterWrapper from '@/components/FooterWrapper';
import { CartProvider } from '@/store/CartContext';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'NutreoPak - Raw Honey, As Nature Made It',
  description: '100% organic, pure, and lab-tested raw honey from trusted beekeepers in Pakistan. Free COD delivery nationwide.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <CartProvider>
          <NavbarWrapper />
          <main>{children}</main>
          <FooterWrapper />
        </CartProvider>
      </body>
    </html>
  );
}
