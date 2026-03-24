'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      if (isLarge) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Close sidebar when a link is clicked on mobile
  const handleNavClick = () => {
    if (!isLargeScreen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="admin-layout">
      {/* Mobile Overlay */}
      {sidebarOpen && !isLargeScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${!sidebarOpen && !isLargeScreen ? 'closed' : ''}`}>
        <div className="sidebar-header">
          <span className="collapse-icon">☰</span>
          <h2>NutreoPak Admin</h2>
        </div>

        <nav className="sidebar-nav">
          <Link 
            href="/admin/dashboard" 
            className={`nav-link ${isActive('/admin/dashboard') ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            <span className="icon">📊</span>
            <span className="text">Dashboard</span>
          </Link>
          <Link 
            href="/admin/products" 
            className={`nav-link ${isActive('/admin/products') ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            <span className="icon">🛍️</span>
            <span className="text">Products</span>
          </Link>
          <Link 
            href="/admin/orders" 
            className={`nav-link ${isActive('/admin/orders') ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            <span className="icon">📦</span>
            <span className="text">Orders</span>
          </Link>
          <Link 
            href="/admin/payments" 
            className={`nav-link ${isActive('/admin/payments') ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            <span className="icon">💳</span>
            <span className="text">Payments</span>
          </Link>
          <Link 
            href="/admin/blog" 
            className={`nav-link ${isActive('/admin/blog') ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            <span className="icon">📝</span>
            <span className="text">Blog</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link 
            href="/" 
            className="nav-link"
            onClick={handleNavClick}
          >
            <span className="icon">👁️</span>
            <span className="text">View Store</span>
          </Link>
          <button 
            className="logout-btn"
            onClick={() => {
              setTimeout(() => {
                window.location.href = '/admin/login';
              }, 300);
            }}
          >
            <span className="icon">🚪</span>
            <span className="text">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        <div className="admin-content">
          {/* Mobile Menu Toggle - shown above heading */}
          {!isLargeScreen && (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="menu-toggle mb-4 lg:hidden"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
