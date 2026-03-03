'use client';

import AdminLayout from '@/components/AdminLayout';

interface Order {
  id: string;
  customer: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Processing' | 'Shipped';
  date: string;
}

const AdminDashboard = () => {
  const orders: Order[] = [
    { id: '#ORD001', customer: 'Ahmed Khan', amount: '₨2,599', status: 'Completed', date: '2024-03-01' },
    { id: '#ORD002', customer: 'Fatima Ali', amount: '₨3,999', status: 'Pending', date: '2024-03-02' },
    { id: '#ORD003', customer: 'Hassan Raza', amount: '₨1,799', status: 'Processing', date: '2024-03-03' },
    { id: '#ORD004', customer: 'Maria Hassan', amount: '₨4,599', status: 'Completed', date: '2024-03-04' },
    { id: '#ORD005', customer: 'Ali Ahmed', amount: '₨2,299', status: 'Pending', date: '2024-03-05' },
    { id: '#ORD006', customer: 'Sara Khan', amount: '₨3,499', status: 'Shipped', date: '2024-03-06' },
    { id: '#ORD007', customer: 'Usman Malik', amount: '₨5,899', status: 'Completed', date: '2024-03-07' },
    { id: '#ORD008', customer: 'Zainab Hussain', amount: '₨1,599', status: 'Processing', date: '2024-03-08' },
    { id: '#ORD009', customer: 'Bilal Ahmed', amount: '₨2,999', status: 'Completed', date: '2024-03-09' },
    { id: '#ORD010', customer: 'Hina Khan', amount: '₨4,199', status: 'Pending', date: '2024-03-10' },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Processing':
        return 'bg-blue-100 text-blue-700';
      case 'Shipped':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <h1>Dashboard</h1>

        <div className="dashboard-charts">
          <section className="chart-section">
            <h2>Recent Orders</h2>
            <div className="table-wrapper">
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
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.amount}</td>
                      <td><span className={`px-3 py-1 ${getStatusStyles(order.status)} rounded-full text-sm font-semibold`}>{order.status}</span></td>
                      <td>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminDashboard;
