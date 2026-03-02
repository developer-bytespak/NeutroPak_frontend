import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';

const AdminProducts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products - Admin | NeutroPak</title>
        <meta name="description" content="Manage products" />
      </Head>

      <AdminLayout>
        <main className="admin-products">
          <div className="page-header">
            <h1>Products</h1>
            <Link href="/admin/products/new" className="btn btn-primary">
              Add New Product
            </Link>
          </div>

          <div className="products-table">
            <table>
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
                {/* Products will be listed here */}
                <tr>
                  <td>Sample Product</td>
                  <td>SKU-001</td>
                  <td>$99.99</td>
                  <td>50</td>
                  <td><span className="badge active">Active</span></td>
                  <td>
                    <Link href="/admin/products/1/edit" className="link">Edit</Link>
                    <button className="link delete">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </AdminLayout>
    </>
  );
};

export default AdminProducts;
