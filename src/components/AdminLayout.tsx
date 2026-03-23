'use client';

import React, { ReactNode, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const sidebarNavRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when sidebar overlay is visible on mobile
  useEffect(() => {
    if (sidebarOpen && !isLargeScreen) {
      document.body.classList.add('sidebar-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('sidebar-open');
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.classList.remove('sidebar-open');
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen, isLargeScreen]);

  // Scroll sidebar nav to top when sidebar opens
  useEffect(() => {
    if (sidebarOpen && sidebarNavRef.current && !isLargeScreen) {
      sidebarNavRef.current.scrollTop = 0;
    }
  }, [sidebarOpen, isLargeScreen]);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const closeSidebar = () => {
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
      <aside className={`admin-sidebar ${!sidebarOpen && !isLargeScreen ? 'mobile-closed' : ''}`}>
        <div className="sidebar-header">
          <span className="collapse-icon">☰</span>
          <h2>NutreoPak Admin</h2>
        </div>

        <nav className="sidebar-nav" ref={sidebarNavRef}>
          <Link 
            href="/admin/dashboard" 
            className={`nav-link ${isActive('/admin/dashboard') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="icon">📊</span>
            <span className="text">Dashboard</span>
          </Link>
          <Link 
            href="/admin/products" 
            className={`nav-link ${isActive('/admin/products') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="icon">🛍️</span>
            <span className="text">Products</span>
          </Link>
          <Link 
            href="/admin/orders" 
            className={`nav-link ${isActive('/admin/orders') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="icon">📦</span>
            <span className="text">Orders</span>
          </Link>
          <Link 
            href="/admin/payments" 
            className={`nav-link ${isActive('/admin/payments') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="icon">💳</span>
            <span className="text">Payments</span>
          </Link>
          <Link 
            href="/admin/blog" 
            className={`nav-link ${isActive('/admin/blog') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="icon">📝</span>
            <span className="text">Blog</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link 
            href="/" 
            className="nav-link"
            onClick={closeSidebar}
          >
            <span className="icon">👁️</span>
            <span className="text">View Store</span>
          </Link>
          <button 
            className="logout-btn"
            onClick={() => {
              closeSidebar();
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
          {children}
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      {!isLargeScreen && (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      )}
    </div>
  );
};

export default AdminLayout;
