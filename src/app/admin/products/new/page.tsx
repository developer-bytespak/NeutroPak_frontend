import { NextPage } from 'next';
import Head from 'next/head';
import AdminLayout from '@/components/AdminLayout';

const AddProduct: NextPage = () => {
  return (
    <>
      <Head>
        <title>Add Product - Admin | NeutroPak</title>
        <meta name="description" content="Add new product" />
      </Head>

      <AdminLayout>
        <main className="admin-add-product">
          <h1>Add New Product</h1>

          <form className="product-form">
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="sku">SKU</label>
              <input type="text" id="sku" name="sku" required />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" step="0.01" required />
              </div>

              <div className="form-group">
                <label htmlFor="stock">Stock</label>
                <input type="number" id="stock" name="stock" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows={5}></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Save Product</button>
              <button type="reset" className="btn btn-secondary">Cancel</button>
            </div>
          </form>
        </main>
      </AdminLayout>
    </>
  );
};

export default AddProduct;
