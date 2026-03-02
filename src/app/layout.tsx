import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/store/CartContext';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'NeutroPak - Premium E-Commerce Store',
  description: 'Your trusted platform for quality products and exceptional service',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
