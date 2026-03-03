'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';

interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Sidr (Beri) Honey - 125g', sku: 'SIDR-125', price: 799, stock: 50, status: 'Active' },
    { id: 2, name: 'Sidr (Beri) Honey - 250g', sku: 'SIDR-250', price: 1599, stock: 30, status: 'Active' },
    { id: 3, name: 'Wild Forest Honey - 500g', sku: 'WILD-500', price: 3299, stock: 15, status: 'Active' },
    { id: 4, name: 'Raw Honey Multi-Pack', sku: 'RAW-MULTI', price: 4999, stock: 0, status: 'Out of Stock' },
  ]);

  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; productId: number | null; productName: string }>({
    isOpen: false,
    productId: null,
    productName: '',
  });

  const handleDeleteClick = (id: number, name: string) => {
    setDeleteModal({
      isOpen: true,
      productId: id,
      productName: name,
    });
  };

  const handleDeleteConfirm = () => {
    if (deleteModal.productId !== null) {
      setProducts(products.filter(p => p.id !== deleteModal.productId));
      console.log(`Product ${deleteModal.productId} deleted`);
      // Add your API call here
    }
    setDeleteModal({ isOpen: false, productId: null, productName: '' });
  };

  return (
    <AdminLayout>
      <main className="admin-dashboard space-y-6">
        <div className="flex justify-between items-center">
          <h1>Products Management</h1>
          <Link href="/admin/products/new" className="btn-primary px-6 py-3">
            + Add New Product
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="font-semibold text-gray-900">{product.name}</td>
                    <td className="text-gray-600">{product.sku}</td>
                    <td className="font-bold text-gold-600">₨{product.price.toLocaleString()}</td>
                    <td>
                      <span className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        product.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <Link 
                          href={`/admin/products/${product.id}/edit`}
                          className="btn-edit"
                        >
                          Edit
                        </Link>
                        <button 
                          onClick={() => handleDeleteClick(product.id, product.name)}
                          className="btn-delete"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-500">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 p-6 animate-fade-in">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Delete Product?</h3>
            <p className="text-gray-600 text-center mb-1">
              Are you sure you want to delete:
            </p>
            <p className="text-gray-900 font-bold text-center mb-6">
              "{deleteModal.productName}"
            </p>
            <p className="text-sm text-gray-500 text-center mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModal({ isOpen: false, productId: null, productName: '' })}
                className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
