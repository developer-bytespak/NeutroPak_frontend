'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="admin-layout">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>NeutroPak Admin</h2>
          <button
            className="toggle-btn lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          <Link 
            href="/admin/dashboard" 
            className={`nav-link ${isActive('/admin/dashboard') ? 'active' : ''}`}
            onClick={() => setSidebarOpen(false)}
          >
            📊 Dashboard
          </Link>
          <Link 
            href="/admin/products" 
            className={`nav-link ${isActive('/admin/products') ? 'active' : ''}`}
            onClick={() => setSidebarOpen(false)}
          >
            🛍️ Products
          </Link>
          <Link 
            href="/admin/orders" 
            className={`nav-link ${isActive('/admin/orders') ? 'active' : ''}`}
            onClick={() => setSidebarOpen(false)}
          >
            📦 Orders
          </Link>
          <Link 
            href="/admin/payments" 
            className={`nav-link ${isActive('/admin/payments') ? 'active' : ''}`}
            onClick={() => setSidebarOpen(false)}
          >
            💳 Payments
          </Link>
          <Link 
            href="/admin/blog" 
            className={`nav-link ${isActive('/admin/blog') ? 'active' : ''}`}
            onClick={() => setSidebarOpen(false)}
          >
            📝 Blog
          </Link>
          <Link 
            href="/admin/pages" 
            className={`nav-link ${isActive('/admin/pages') ? 'active' : ''}`}
            onClick={() => setSidebarOpen(false)}
          >
            📄 Pages
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link 
            href="#settings" 
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            ⚙️ Settings
          </Link>
          <Link 
            href="/" 
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            👁️ View Store
          </Link>
          <button 
            className="logout-btn"
            onClick={() => {
              // TODO: Implement logout
              setTimeout(() => {
                window.location.href = '/admin/login';
              }, 300);
            }}
          >
            🚪 Logout
          </button>
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
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
            />
            <button className="user-menu">👤 Admin User</button>
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
