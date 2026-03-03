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
              </tbody>
            </table>
          </section>

          <section className="chart-section">
            <h2>Sales Overview</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">Sidr Honey</span>
                  <span className="text-gold-600 font-bold">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gold-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">Wild Forest Honey</span>
                  <span className="text-gold-600 font-bold">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gold-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">Other Products</span>
                  <span className="text-gold-600 font-bold">30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gold-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminDashboard;
