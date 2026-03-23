'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';
import { productService } from '@/services/productService';
import { apiPost } from '@/utils/api';

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
    imageUrl: '',
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
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
          imageUrl: product.imageUrl || '',
        });
        if (product.imageUrl) {
          setImagePreview(product.imageUrl);
        }
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

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    setImageFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    setError('');
  };

  const uploadImageToCloudinary = async (): Promise<string | null> => {
    if (!imageFile) return formData.imageUrl || null;

    try {
      setUploadingImage(true);
      setError('');

      const formDataToUpload = new FormData();
      formDataToUpload.append('file', imageFile);

      const response = await apiPost<any>('/api/upload/image', formDataToUpload);

      if (response.data.success) {
        return response.data.data.url;
      } else {
        setError('Failed to upload image: ' + (response.data.message || 'Unknown error'));
        return null;
      }
    } catch (err: any) {
      setError('Error uploading image: ' + (err.response?.data?.message || err.message));
      console.error(err);
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError('');
      setSuccess('');

      // Upload image if a new one is provided
      let imageUrl = formData.imageUrl; // Start with manual/existing URL
      if (imageFile) {
        const uploadedUrl = await uploadImageToCloudinary();
        if (!uploadedUrl) {
          setSubmitting(false);
          return;
        }
        imageUrl = uploadedUrl;
      }

      const response = await productService.updateProduct(parseInt(id), {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        stock: parseInt(formData.stock),
        imageUrl: imageUrl,
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
                      disabled={submitting || uploadingImage}
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
                      disabled={submitting || uploadingImage}
                    />
                  </div>
                </div>

                {/* Product Image */}
                <div className="form-group">
                  <label htmlFor="image" className="form-label">Product Image</label>
                  
                  {/* Option 1: Upload File */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2 font-semibold">Option 1: Upload Image File</p>
                    <div className="border-2 border-dashed border-yellow-300 rounded-lg p-6 text-center">
                      {imagePreview && !imageFile ? (
                        <div className="flex flex-col items-center">
                          <img src={imagePreview} alt="Preview" className="max-h-48 mb-4 rounded-lg" />
                          <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            disabled={submitting || uploadingImage}
                          />
                          <label htmlFor="image" className="cursor-pointer text-yellow-600 hover:text-yellow-700 font-semibold">
                            {uploadingImage ? '⏳ Uploading...' : '📷 Change Image'}
                          </label>
                        </div>
                      ) : imagePreview && imageFile ? (
                        <div className="flex flex-col items-center">
                          <img src={imagePreview} alt="Preview" className="max-h-48 mb-4 rounded-lg" />
                          <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            disabled={submitting || uploadingImage}
                          />
                          <label htmlFor="image" className="cursor-pointer text-yellow-600 hover:text-yellow-700 font-semibold">
                            {uploadingImage ? '⏳ Uploading...' : '📷 Change Image'}
                          </label>
                        </div>
                      ) : (
                        <div>
                          <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            disabled={submitting || uploadingImage}
                          />
                          <label htmlFor="image" className="cursor-pointer text-gray-500 hover:text-yellow-600 transition-colors">
                            <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <p className="font-semibold">Click to upload product image</p>
                            <p className="text-sm text-gray-400">PNG, JPG up to 5MB</p>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Option 2: Manual URL */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2 font-semibold">Option 2: Paste Image URL</p>
                    <p className="text-xs text-gray-500 mb-2">If file upload isn't working, paste a direct image URL</p>
                    <input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={formData.imageUrl}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, imageUrl: e.target.value }));
                        if (e.target.value && !imageFile) {
                          setImagePreview(e.target.value);
                        }
                      }}
                      className="form-input"
                      disabled={submitting || uploadingImage}
                    />
                    {formData.imageUrl && !imageFile && (
                      <img src={formData.imageUrl} alt="Preview" className="mt-3 max-h-48 rounded-lg" onError={() => setError('Invalid image URL')} />
                    )}
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
