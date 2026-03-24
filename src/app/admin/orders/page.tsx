'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { orderService } from '@/services/orderService';

interface Order {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  amount?: number;
  status: string;
  createdAt: string;
  address: string;
  city: string;
  postalCode: string;
  shippingMethod: string;
  orderItems: Array<{ product?: { name: string }; quantity: number; price: number }>;
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [updateError, setUpdateError] = useState('');

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const response = await orderService.listOrders(1, 100);
      if (response.data.success) {
        setOrders(response.data.data.orders);
      } else {
        setError('Failed to load orders');
      }
    } catch (err: any) {
      setError('Error loading orders');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      setUpdateError('');
      const response = await orderService.updateOrderStatus(orderId, newStatus);
      if (response.data.success) {
        // Update local state
        setOrders((prevOrders) =>
          prevOrders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order))
        );
        if (selectedOrder && selectedOrder.id === orderId) {
          setSelectedOrder({ ...selectedOrder, status: newStatus });
        }
      } else {
        setUpdateError(response.data.message || 'Failed to update order status');
      }
    } catch (err: any) {
      setUpdateError(err.response?.data?.message || 'Error updating order status');
    }
  };

  const getStatusStyles = (status: string) => {
    const statusStyles: { [key: string]: string } = {
      'COMPLETED': 'bg-green-100 text-green-700',
      'DELIVERED': 'bg-green-100 text-green-700',
      'PENDING': 'bg-yellow-100 text-yellow-700',
      'CONFIRMED': 'bg-blue-100 text-blue-700',
      'SHIPPED': 'bg-purple-100 text-purple-700',
      'CANCELLED': 'bg-red-100 text-red-700',
    };
    return statusStyles[status] || 'bg-gray-100 text-gray-700';
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setTimeout(() => setSelectedOrder(null), 300);
  };

  return (
    <AdminLayout>
      <main className="admin-dashboard">
        <h1>Orders Management</h1>

        {error && (
          <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="table-wrapper">
          {loading ? (
            <p className="p-8 text-center text-gray-500">Loading orders...</p>
          ) : orders.length > 0 ? (
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
                    <td className="font-bold text-gray-900">ORD-2026-{String(order.id).padStart(6, '0')}</td>
                    <td className="text-gray-700">{`${order.firstName} ${order.lastName}`}</td>
                    <td className="font-bold text-gold-600">₨{(order.amount || 0).toLocaleString('en-PK')}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyles(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="text-gray-600">{new Date(order.createdAt).toLocaleDateString('en-PK')}</td>
                    <td>
                      <button onClick={() => handleViewOrder(order)} className="btn-edit">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="p-8 text-center text-gray-500">No orders found</p>
          )}
        </div>
      </main>

      {showOverlay && selectedOrder && (
        <div className="order-overlay-backdrop" onClick={closeOverlay}>
          <div className="order-overlay" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeOverlay}
              className="order-overlay-close"
            >
              ✕
            </button>

            <div className="order-overlay-header">
              <h2>ORD-2026-{String(selectedOrder.id).padStart(6, '0')}</h2>
              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusStyles(selectedOrder.status)}`}>
                {selectedOrder.status}
              </span>
            </div>

            <div className="order-overlay-content">
              {updateError && (
                <div className="bg-red-100 border border-red-500 text-red-700 px-3 py-2 rounded mb-4 text-sm">
                  {updateError}
                </div>
              )}

              <div className="order-section">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> {`${selectedOrder.firstName} ${selectedOrder.lastName}`}</p>
                <p><strong>Email:</strong> {selectedOrder.email}</p>
                <p><strong>Phone:</strong> {selectedOrder.phone}</p>
              </div>

              <div className="order-section">
                <h3>Shipping Address</h3>
                <p>{selectedOrder.address}, {selectedOrder.city}, {selectedOrder.postalCode}</p>
                <p><strong>Method:</strong> {selectedOrder.shippingMethod}</p>
              </div>

              <div className="order-section">
                <h3>Order Items</h3>
                <div className="order-items">
                  {selectedOrder.orderItems?.map((item, idx) => (
                    <div key={idx} className="order-item">
                      <div>
                        <p className="font-semibold">{item.product?.name || 'Product'}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold">₨{(item.price * item.quantity).toLocaleString('en-PK')}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-section">
                <h3>Update Status</h3>
                <select
                  value={selectedOrder.status}
                  onChange={(e) => handleStatusChange(selectedOrder.id, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded bg-white"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="CONFIRMED">CONFIRMED</option>
                  <option value="SHIPPED">SHIPPED</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>

              <div className="order-section order-total">
                <p className="font-bold text-lg">Total Amount: <span className="text-yellow-600">₨{(selectedOrder.amount || 0).toLocaleString('en-PK')}</span></p>
                <p className="text-sm text-gray-600">Order Date: {new Date(selectedOrder.createdAt).toLocaleDateString('en-PK')}</p>
              </div>

              <button
                onClick={closeOverlay}
                className="btn-submit w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

