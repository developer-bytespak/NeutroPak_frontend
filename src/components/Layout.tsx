import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">NutreoPak</div>
          <ul className="nav-menu">
            <li><Link href="/">Home</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>&copy; 2026 NutreoPak. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
