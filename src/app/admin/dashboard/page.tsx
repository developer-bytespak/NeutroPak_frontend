import { NextPage } from 'next';
import AdminLayout from '@/components/AdminLayout';

const AdminDashboard: NextPage = () => {
  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <h1>Dashboard</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Orders</h3>
            <p className="stat-value">1,234</p>
          </div>
          <div className="stat-card">
            <h3>Total Revenue</h3>
            <p className="stat-value">₨45,678</p>
          </div>
          <div className="stat-card">
            <h3>Total Products</h3>
            <p className="stat-value">567</p>
          </div>
          <div className="stat-card">
            <h3>Total Customers</h3>
            <p className="stat-value">2,890</p>
          </div>
        </div>

        <div className="dashboard-charts">
          <section className="chart-section">
            <h2>Recent Orders</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ORD001</td>
                  <td>Ahmed Khan</td>
                  <td>₨2,599</td>
                  <td><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Completed</span></td>
                  <td>2024-03-01</td>
                </tr>
                <tr>
                  <td>#ORD002</td>
                  <td>Fatima Ali</td>
                  <td>₨3,999</td>
                  <td><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Pending</span></td>
                  <td>2024-03-02</td>
                </tr>
                <tr>
                  <td>#ORD003</td>
                  <td>Hassan Raza</td>
                  <td>₨1,799</td>
                  <td><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Processing</span></td>
                  <td>2024-03-03</td>
                </tr>
                <tr>
                  <td>#ORD004</td>
                  <td>Maria Hassan</td>
                  <td>₨4,599</td>
                  <td><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Completed</span></td>
                  <td>2024-03-04</td>
                </tr>
                <tr>
                  <td>#ORD005</td>
                  <td>Ali Ahmed</td>
                  <td>₨2,299</td>
                  <td><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Pending</span></td>
                  <td>2024-03-05</td>
                </tr>
                <tr>
                  <td>#ORD006</td>
                  <td>Sara Khan</td>
                  <td>₨3,499</td>
                  <td><span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Shipped</span></td>
                  <td>2024-03-06</td>
                </tr>
                <tr>
                  <td>#ORD007</td>
                  <td>Usman Malik</td>
                  <td>₨5,899</td>
                  <td><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Completed</span></td>
                  <td>2024-03-07</td>
                </tr>
                <tr>
                  <td>#ORD008</td>
                  <td>Zainab Hussain</td>
                  <td>₨1,599</td>
                  <td><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Processing</span></td>
                  <td>2024-03-08</td>
                </tr>
                <tr>
                  <td>#ORD009</td>
                  <td>Bilal Ahmed</td>
                  <td>₨2,999</td>
                  <td><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Completed</span></td>
                  <td>2024-03-09</td>
                </tr>
                <tr>
                  <td>#ORD010</td>
                  <td>Hina Khan</td>
                  <td>₨4,199</td>
                  <td><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Pending</span></td>
                  <td>2024-03-10</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminDashboard;
