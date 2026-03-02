import { NextPage } from 'next';
import Head from 'next/head';
import AdminLayout from '@/components/AdminLayout';

const AdminPayments: NextPage = () => {
  return (
    <>
      <Head>
        <title>Payments - Admin | NeutroPak</title>
        <meta name="description" content="Manage payments" />
      </Head>

      <AdminLayout>
        <main className="admin-payments">
          <div className="page-header">
            <h1>Payments</h1>
          </div>

          <div className="payment-stats">
            <div className="stat-card">
              <h3>Total Revenue</h3>
              <p className="stat-value">$45,678.90</p>
            </div>
            <div className="stat-card">
              <h3>Pending Payments</h3>
              <p className="stat-value">$8,999.99</p>
            </div>
            <div className="stat-card">
              <h3>Refunds</h3>
              <p className="stat-value">$1,234.56</p>
            </div>
          </div>

          <div className="payments-table">
            <table>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Order ID</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {/* Payments will be listed here */}
                <tr>
                  <td>#PAY-001</td>
                  <td>#ORD-001</td>
                  <td>$299.99</td>
                  <td>Credit Card</td>
                  <td><span className="badge success">Completed</span></td>
                  <td>Mar 3, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </AdminLayout>
    </>
  );
};

export default AdminPayments;
