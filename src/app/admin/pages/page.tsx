'use client';

import AdminLayout from '@/components/AdminLayout';
import Link from 'next/link';

export default function AdminPages() {
  const pages = [
    { id: 1, title: 'About Us', slug: 'about', edited: 'Feb 28, 2025' },
    { id: 2, title: 'FAQs', slug: 'faqs', edited: 'Mar 1, 2025' },
    { id: 3, title: 'Privacy Policy', slug: 'privacy-policy', edited: 'Feb 15, 2025' },
    { id: 4, title: 'Terms and Conditions', slug: 'terms-and-conditions', edited: 'Jan 30, 2025' },
    { id: 5, title: 'Shipping Policy', slug: 'shipping-policy', edited: 'Feb 20, 2025' },
    { id: 6, title: 'Refund & Return Policy', slug: 'refund-return-policy', edited: 'Feb 25, 2025' },
  ];

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <h1>Pages Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {pages.map((page) => (
            <div key={page.id} className="card p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{page.title}</h3>
              <p className="text-sm text-gray-600 mb-4">/{page.slug}</p>
              <p className="text-xs text-gray-500 mb-4">Last edited: {page.edited}</p>
              <div className="flex gap-2">
                <Link 
                  href={`/admin/pages/${page.id}/edit`}
                  className="btn-edit flex-1 text-center"
                >
                  Edit
                </Link>
                <button className="flex-1 text-xs font-bold text-gray-600 hover:text-gray-700 px-3 py-2 border border-gray-300 rounded transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </AdminLayout>
  );
}
