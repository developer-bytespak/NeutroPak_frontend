'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button
            className="toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
        </div>

        <nav className="sidebar-nav">
          <Link href="/admin/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link href="/admin/products" className="nav-link">
            Products
          </Link>
          <Link href="/admin/orders" className="nav-link">
            Orders
          </Link>
          <Link href="/admin/payments" className="nav-link">
            Payments
          </Link>
          <Link href="/admin/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/admin/pages" className="nav-link">
            Pages
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link href="#settings" className="nav-link">
            Settings
          </Link>
          <Link href="/" className="nav-link">
            View Store
          </Link>
          <button className="logout-btn">Logout</button>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-header">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <div className="header-actions">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="user-menu">👤 Admin</button>
          </div>
        </header>

        <div className="admin-content">
          {children}
        </div>

        <footer className="admin-footer">
          <p>&copy; 2025 NeutroPak Admin Panel. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
