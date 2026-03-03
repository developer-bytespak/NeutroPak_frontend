'use client';

import AdminLayout from '@/components/AdminLayout';
import Link from 'next/link';

export default function AdminBlog() {
  const posts = [
    { id: 1, title: 'Getting Started with NeutroPak', author: 'Admin', status: 'Published', published: 'Mar 1, 2025', views: 234 },
    { id: 2, title: 'Health Benefits of Raw Honey', author: 'Admin', status: 'Published', published: 'Feb 28, 2025', views: 456 },
    { id: 3, title: 'How to Store Honey Properly', author: 'Admin', status: 'Draft', published: 'Unpublished', views: 0 },
  ];

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <div className="flex justify-between items-center mb-6">
          <h1>Blog Posts Management</h1>
          <Link href="/admin/blog/new" className="btn-primary px-6 py-3">
            + New Post
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Published</th>
                <th>Views</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="font-semibold text-gray-900">{post.title}</td>
                  <td className="text-gray-700">{post.author}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      post.status === 'Published' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="text-gray-600">{post.published}</td>
                  <td className="font-semibold text-gray-900">{post.views}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/admin/blog/${post.id}/edit`} className="btn-edit">
                        Edit
                      </Link>
                      <button className="text-xs font-bold text-red-600 hover:text-red-700 px-3 py-2">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </AdminLayout>
  );
}
