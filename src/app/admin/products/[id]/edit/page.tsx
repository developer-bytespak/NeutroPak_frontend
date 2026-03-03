'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';

interface EditProductProps {
  params: {
    id: string;
  };
}

export default function EditProduct({ params }: EditProductProps) {
  const { id } = params;

  const [formData, setFormData] = useState({
    name: 'Product Name',
    sku: 'SKU-001',
    price: '99.99',
    stock: '50',
    description: 'Product description',
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated product data:', formData);
    // Add your API call here
  };

  const handleDeleteConfirm = () => {
    console.log('Delete product:', id);
    // Add your delete API call here
    setShowDeleteModal(false);
  };

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Edit Product</h1>
            <p className="text-gray-600 mt-2">Update the product details and save your changes</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border-t-4 border-yellow-500 p-8">
            <form onSubmit={handleSubmit} className="product-form">
              {/* Product Name */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Product Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter product name"
                  required
                />
              </div>

              {/* SKU */}
              <div className="form-group">
                <label htmlFor="sku" className="form-label">SKU (Stock Keeping Unit) *</label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter SKU"
                  required
                />
              </div>

              {/* Price and Stock - Grid */}
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="price" className="form-label">Price (₨) *</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="stock" className="form-label">Stock Quantity *</label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="0"
                    min="0"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="form-group">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Enter detailed product description..."
                  rows={5}
                />
                <p className="text-xs text-gray-500 mt-1">{formData.description.length}/500 characters</p>
              </div>

              {/* Form Actions */}
              <div className="form-actions-edit">
                <button
                  type="submit"
                  className="btn-submit"
                >
                  ✓ Update Product
                </button>
                <button
                  type="button"
                  className="btn-danger"
                  onClick={() => setShowDeleteModal(true)}
                >
                  🗑 Delete Product
                </button>
                <Link
                  href="/admin/products"
                  className="btn-cancel"
                >
                  ✕ Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </AdminLayout>
  );
}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 p-6 animate-fade-in">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 0v2m0-2v-2m0 0v-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13H5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Delete Product?</h3>
              <p className="text-gray-600 text-center mb-6">
                Are you sure you want to delete this product? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
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
