'use client';

import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';

interface Order {
  id: string;
  customer: string;
  amount: number;
  status: string;
  date: string;
  email?: string;
  phone?: string;
  items?: { name: string; qty: number; price: number }[];
  address?: string;
  shippingMethod?: string;
}

export default function AdminOrders() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const orders: Order[] = [
    {
      id: '#ORD-001',
      customer: 'Ahmed Khan',
      amount: 2599,
      status: 'Completed',
      date: 'Mar 1, 2025',
      email: 'ahmed.khan@email.com',
      phone: '+92-300-1234567',
      items: [
        { name: 'Premium Sunscreen SPF 50', qty: 2, price: 1299 },
      ],
      address: '123 Main Street, Karachi, Pakistan',
      shippingMethod: 'Express Delivery',
    },
    {
      id: '#ORD-002',
      customer: 'Fatima Ali',
      amount: 3999,
      status: 'Pending',
      date: 'Mar 2, 2025',
      email: 'fatima.ali@email.com',
      phone: '+92-300-7654321',
      items: [
        { name: 'Face Moisturizer', qty: 1, price: 1999 },
        { name: 'Lip Balm Pack', qty: 2, price: 999 },
      ],
      address: '456 Oak Avenue, Lahore, Pakistan',
      shippingMethod: 'Standard Delivery',
    },
    {
      id: '#ORD-003',
      customer: 'Hassan Raza',
      amount: 1799,
      status: 'Processing',
      date: 'Mar 3, 2025',
      email: 'hassan.raza@email.com',
      phone: '+92-300-9876543',
      items: [
        { name: 'Makeup Primer', qty: 1, price: 1799 },
      ],
      address: '789 Pine Road, Islamabad, Pakistan',
      shippingMethod: 'Standard Delivery',
    },
    {
      id: '#ORD-004',
      customer: 'Zara Khan',
      amount: 4599,
      status: 'Shipped',
      date: 'Mar 3, 2025',
      email: 'zara.khan@email.com',
      phone: '+92-300-5555555',
      items: [
        { name: 'Luxury Skincare Set', qty: 1, price: 3599 },
        { name: 'Face Serum', qty: 1, price: 999 },
      ],
      address: '321 Elm Street, Multan, Pakistan',
      shippingMethod: 'Express Delivery',
    },
    {
      id: '#ORD-005',
      customer: 'Ali Hassan',
      amount: 2199,
      status: 'Delivered',
      date: 'Mar 2, 2025',
      email: 'ali.hassan@email.com',
      phone: '+92-300-6666666',
      items: [
        { name: 'Body Lotion', qty: 2, price: 699 },
        { name: 'Bath Soap Set', qty: 1, price: 799 },
      ],
      address: '654 Birch Lane, Peshawar, Pakistan',
      shippingMethod: 'Standard Delivery',
    },
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
                    <button
                      onClick={() => handleViewOrder(order)}
                      className="btn-edit"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
              <h2>{selectedOrder.id}</h2>
              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusStyles(selectedOrder.status)}`}>
                {selectedOrder.status}
              </span>
            </div>

            <div className="order-overlay-content">
              <div className="order-section">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> {selectedOrder.customer}</p>
                <p><strong>Email:</strong> {selectedOrder.email}</p>
                <p><strong>Phone:</strong> {selectedOrder.phone}</p>
              </div>

              <div className="order-section">
                <h3>Shipping Address</h3>
                <p>{selectedOrder.address}</p>
                <p><strong>Method:</strong> {selectedOrder.shippingMethod}</p>
              </div>

              <div className="order-section">
                <h3>Order Items</h3>
                <div className="order-items">
                  {selectedOrder.items?.map((item, idx) => (
                    <div key={idx} className="order-item">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                      </div>
                      <p className="font-bold">₨{(item.price * item.qty).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-section order-total">
                <p className="font-bold text-lg">Total Amount: <span className="text-yellow-600">₨{selectedOrder.amount.toLocaleString()}</span></p>
                <p className="text-sm text-gray-600">Order Date: {selectedOrder.date}</p>
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
