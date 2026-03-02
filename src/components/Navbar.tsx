import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          NeutroPak
        </Link>

        <div className="navbar-menu">
          <div className="navbar-links">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/faqs">FAQs</Link>
          </div>

          <div className="navbar-actions">
            <Link href="/search" className="search-icon" title="Search">
              🔍
            </Link>
            <Link href="/cart" className="cart-icon" title="Cart">
              🛒 <span className="cart-count">0</span>
            </Link>
            <button className="account-icon" title="Account">
              👤
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
