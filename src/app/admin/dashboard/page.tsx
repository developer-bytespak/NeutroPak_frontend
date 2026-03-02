import { NextPage } from 'next';
import Head from 'next/head';
import AdminLayout from '@/components/AdminLayout';

const AdminDashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard - NeutroPak</title>
        <meta name="description" content="Admin dashboard" />
      </Head>

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
              <p className="stat-value">$45,678.90</p>
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
              {/* Chart/table will be here */}
            </section>

            <section className="chart-section">
              <h2>Sales Overview</h2>
              {/* Chart will be here */}
            </section>
          </div>
        </main>
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;
