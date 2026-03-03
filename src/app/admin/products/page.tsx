import { NextPage } from 'next';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';

const AdminProducts: NextPage = () => {
  const products = [
    { id: 1, name: 'Sidr (Beri) Honey - 125g', sku: 'SIDR-125', price: 799, stock: 50, status: 'Active' },
    { id: 2, name: 'Sidr (Beri) Honey - 250g', sku: 'SIDR-250', price: 1599, stock: 30, status: 'Active' },
    { id: 3, name: 'Wild Forest Honey - 500g', sku: 'WILD-500', price: 3299, stock: 15, status: 'Active' },
    { id: 4, name: 'Raw Honey Multi-Pack', sku: 'RAW-MULTI', price: 4999, stock: 0, status: 'Out of Stock' },
  ];

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
              {products.map((product) => (
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
};

export default AdminProducts;
