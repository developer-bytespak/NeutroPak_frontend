import { NextPage } from 'next';
import AdminLayout from '@/components/AdminLayout';

const AdminPayments: NextPage = () => {
  const payments = [
    { id: '#PAY-001', orderId: '#ORD-001', amount: 2599, method: 'Credit Card', status: 'Completed', date: 'Mar 1, 2025' },
    { id: '#PAY-002', orderId: '#ORD-002', amount: 3999, method: 'Bank Transfer', status: 'Pending', date: 'Mar 2, 2025' },
    { id: '#PAY-003', orderId: '#ORD-003', amount: 1799, method: 'JazzCash', status: 'Completed', date: 'Mar 3, 2025' },
    { id: '#PAY-004', orderId: '#ORD-004', amount: 4599, method: 'Credit Card', status: 'Completed', date: 'Mar 3, 2025' },
  ];

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <h1>Payments Management</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Revenue</h3>
            <p className="stat-value">₨45,678</p>
          </div>
          <div className="stat-card">
            <h3>Pending Payments</h3>
            <p className="stat-value">₨8,999</p>
          </div>
          <div className="stat-card">
            <h3>Refunds</h3>
            <p className="stat-value">₨1,234</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
          <table className="admin-table">
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
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="font-bold text-gray-900">{payment.id}</td>
                  <td className="text-gray-700">{payment.orderId}</td>
                  <td className="font-bold text-gold-600">₨{payment.amount.toLocaleString()}</td>
                  <td className="text-gray-700">{payment.method}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      payment.status === 'Completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="text-gray-600">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminPayments;
