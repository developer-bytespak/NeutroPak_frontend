'use client';

import AdminLayout from '@/components/AdminLayout';
import { useEffect, useState } from 'react';
import { orderService } from '@/services/orderService';

interface Order {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  total: number;
  status: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const response = await orderService.listOrders(1, 10);
      if (response.data.success && response.data.data?.orders) {
        setOrders(response.data.data.orders);
      } else {
        setOrders([]);
        setError('Failed to load orders');
      }
    } catch (err: any) {
      setOrders([]);
      setError('Error loading orders. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'DELIVERED':
        return 'bg-green-100 text-green-700';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-700';
      case 'CONFIRMED':
        return 'bg-blue-100 text-blue-700';
      case 'SHIPPED':
        return 'bg-purple-100 text-purple-700';
      case 'CANCELLED':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <h1>Dashboard</h1>

        {error && (
          <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="dashboard-charts">
          <section className="chart-section">
            <h2>Recent Orders</h2>
            {loading ? (
              <p>Loading orders...</p>
            ) : orders.length > 0 ? (
              <div className="table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Email</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>ORD-2026-{String(order.id).padStart(6, '0')}</td>
                        <td>{`${order.firstName} ${order.lastName}`}</td>
                        <td>{order.email}</td>
                        <td>₨{order.total.toLocaleString('en-PK')}</td>
                        <td>
                          <span
                            className={`px-3 py-1 ${getStatusStyles(order.status)} rounded-full text-sm font-semibold`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td>{new Date(order.createdAt).toLocaleDateString('en-PK')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No orders found</p>
            )}
          </section>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminDashboard;
