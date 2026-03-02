import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/store/CartContext';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Honeeza - Raw Honey, As Nature Made It',
  description: '100% organic, pure, and lab-tested raw honey from trusted beekeepers in Pakistan. Free COD delivery nationwide.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
