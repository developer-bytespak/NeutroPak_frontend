import { NextPage } from 'next';
import Head from 'next/head';
import AdminLayout from '@/components/AdminLayout';

const AdminOrders: NextPage = () => {
  return (
    <>
      <Head>
        <title>Orders - Admin | NeutroPak</title>
        <meta name="description" content="Manage orders" />
      </Head>

      <AdminLayout>
        <main className="admin-orders">
          <div className="page-header">
            <h1>Orders</h1>
          </div>

          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Orders will be listed here */}
                <tr>
                  <td>#ORD-001</td>
                  <td>John Doe</td>
                  <td>$299.99</td>
                  <td><span className="badge pending">Pending</span></td>
                  <td>Mar 3, 2025</td>
                  <td>
                    <a href="/admin/orders/1" className="link">View</a>
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

export default AdminOrders;
