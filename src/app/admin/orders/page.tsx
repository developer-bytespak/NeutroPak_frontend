import { NextPage } from 'next';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';

const AdminOrders: NextPage = () => {
  const orders = [
    { id: '#ORD-001', customer: 'Ahmed Khan', amount: 2599, status: 'Completed', date: 'Mar 1, 2025' },
    { id: '#ORD-002', customer: 'Fatima Ali', amount: 3999, status: 'Pending', date: 'Mar 2, 2025' },
    { id: '#ORD-003', customer: 'Hassan Raza', amount: 1799, status: 'Processing', date: 'Mar 3, 2025' },
    { id: '#ORD-004', customer: 'Zara Khan', amount: 4599, status: 'Shipped', date: 'Mar 3, 2025' },
    { id: '#ORD-005', customer: 'Ali Hassan', amount: 2199, status: 'Delivered', date: 'Mar 2, 2025' },
  ];

  const getStatusStyles = (status: string) => {
    const statusStyles: { [key: string]: string } = {
      'Completed': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Processing': 'bg-blue-100 text-blue-700',
      'Shipped': 'bg-purple-100 text-purple-700',
      'Delivered': 'bg-green-100 text-green-700',
      'Cancelled': 'bg-red-100 text-red-700',
    };
    return statusStyles[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <h1>Orders Management</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="admin-table">
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
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="font-bold text-gray-900">{order.id}</td>
                  <td className="text-gray-700">{order.customer}</td>
                  <td className="font-bold text-gold-600">₨{order.amount.toLocaleString()}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyles(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="text-gray-600">{order.date}</td>
                  <td>
                    <Link 
                      href={`/admin/orders/${order.id}`}
                      className="btn-edit"
                    >
                      View
                    </Link>
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

export default AdminOrders;
