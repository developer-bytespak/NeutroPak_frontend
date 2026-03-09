'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';
import { productService } from '@/services/productService';

interface EditProductProps {
  params: {
    id: string;
  };
}

export default function EditProduct({ params }: EditProductProps) {
  const { id } = params;
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await productService.getProductById(parseInt(id));
      if (response.data.success) {
        const product = response.data.data;
        setFormData({
          name: product.name,
          description: product.description,
          price: product.price.toString(),
          category: product.category,
          stock: product.stock.toString(),
        });
      } else {
        setError('Failed to load product');
      }
    } catch (err: any) {
      setError('Error loading product: ' + (err.response?.data?.message || err.message));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError('');
      setSuccess('');

      const response = await productService.updateProduct(parseInt(id), {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        stock: parseInt(formData.stock),
      });

      if (response.data.success) {
        setSuccess('Product updated successfully!');
        setTimeout(() => {
          router.push('/admin/products');
        }, 1500);
      } else {
        setError(response.data.message || 'Failed to update product');
      }
    } catch (err: any) {
      setError('Error updating product: ' + (err.response?.data?.message || err.message));
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      setSubmitting(true);
      setError('');
      const response = await productService.deleteProduct(parseInt(id));
      if (response.data.success) {
        setSuccess('Product deleted successfully!');
        setTimeout(() => {
          router.push('/admin/products');
        }, 1500);
      } else {
        setError(response.data.message || 'Failed to delete product');
      }
    } catch (err: any) {
      setError('Error deleting product: ' + (err.response?.data?.message || err.message));
      console.error(err);
    } finally {
      setSubmitting(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Edit Product</h1>
            <p className="text-gray-600 mt-2">Update the product details and save your changes</p>
          </div>

          {error && (
            <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg mb-6">
              {success}
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg border-t-4 border-yellow-500 p-8">
            {loading ? (
              <p className="text-center text-gray-500 py-8">Loading product...</p>
            ) : (
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
                    disabled={submitting}
                  />
                </div>

                {/* Category */}
                <div className="form-group">
                  <label htmlFor="category" className="form-label">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="form-input"
                    required
                    disabled={submitting}
                  >
                    <option value="">Select a category</option>
                    <option value="Honey">Honey</option>
                    <option value="Dates">Dates</option>
                    <option value="Supplements">Supplements</option>
                    <option value="Other">Other</option>
                  </select>
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
                      disabled={submitting}
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
                      disabled={submitting}
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
                    disabled={submitting}
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.description.length}/500 characters</p>
                </div>

                {/* Form Actions */}
                <div className="form-actions-edit">
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={submitting || loading}
                  >
                    {submitting ? '⏳ Updating...' : '✓ Update Product'}
                  </button>
                  <button
                    type="button"
                    className="btn-danger"
                    onClick={() => setShowDeleteModal(true)}
                    disabled={submitting || loading}
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
            )}
          </div>

          {/* Delete Confirmation Modal */}
          {showDeleteModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 p-6 animate-fade-in">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 0v2m0-2v-2m0 0v-2m0-4V7m0 0V5" />
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
                    className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteConfirm}
                    className="flex-1 px-4 py-2.5 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                    disabled={submitting}
                  >
                    {submitting ? '⏳ Deleting...' : 'Delete Product'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </AdminLayout>
  );
}
