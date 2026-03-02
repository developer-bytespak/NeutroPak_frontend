import { NextPage } from 'next';
import Head from 'next/head';
import AdminLayout from '@/components/AdminLayout';

interface EditProductProps {
  params: {
    id: string;
  };
}

export default function EditProduct({ params }: EditProductProps) {
  const { id } = params;

  return (
    <>
      <Head>
        <title>Edit Product - Admin | NeutroPak</title>
        <meta name="description" content="Edit product" />
      </Head>

      <AdminLayout>
        <main className="admin-edit-product">
          <h1>Edit Product</h1>

          <form className="product-form">
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input type="text" id="name" name="name" defaultValue="Product Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="sku">SKU</label>
              <input type="text" id="sku" name="sku" defaultValue="SKU-001" required />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" step="0.01" defaultValue="99.99" required />
              </div>

              <div className="form-group">
                <label htmlFor="stock">Stock</label>
                <input type="number" id="stock" name="stock" defaultValue="50" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows={5} defaultValue="Product description"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category" defaultValue="category1">
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Update Product</button>
              <button type="button" className="btn btn-danger">Delete Product</button>
              <button type="reset" className="btn btn-secondary">Cancel</button>
            </div>
          </form>
        </main>
      </AdminLayout>
    </>
  );
}
