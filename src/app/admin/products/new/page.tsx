'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    price: '',
    stock: '',
    description: '',
    category: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product data:', formData);
    // Add your API call here
  };

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
            <p className="text-gray-600 mt-2">Fill in the details to add a new product to your catalog</p>
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
                  placeholder="Enter product name (e.g., Sidr Honey - 250g)"
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
                  placeholder="Enter SKU (e.g., SIDR-250)"
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
              <div className="form-actions">
                <button
                  type="submit"
                  className="btn-submit"
                >
                  ✓ Save Product
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
