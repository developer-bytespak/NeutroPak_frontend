
import AdminLayout from '@/components/AdminLayout';

interface OrderDetailProps {
  params: {
    id: string;
  };
}
export const metadata = {
  title: 'Order Details - Admin | NeutroPak',
  description: 'Order details',
};

export default function OrderDetail({ params }: OrderDetailProps) {
  return (
    <AdminLayout>
        <main className="admin-order-detail">
          <h1>Order #ORD-001</h1>

          <div className="order-container">
            <section className="order-info">
              <h2>Order Information</h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>Order ID:</label>
                  <p>#ORD-001</p>
                </div>
                <div className="info-item">
                  <label>Status:</label>
                  <p><span className="badge pending">Pending</span></p>
                </div>
                <div className="info-item">
                  <label>Order Date:</label>
                  <p>Mar 3, 2025</p>
                </div>
                <div className="info-item">
                  <label>Total Amount:</label>
                  <p>$299.99</p>
                </div>
              </div>
            </section>

            <section className="customer-info">
              <h2>Customer Information</h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>Name:</label>
                  <p>John Doe</p>
                </div>
                <div className="info-item">
                  <label>Email:</label>
                  <p>john@example.com</p>
                </div>
                <div className="info-item">
                  <label>Phone:</label>
                  <p>(555) 123-4567</p>
                </div>
              </div>
            </section>

            <section className="order-items">
              <h2>Order Items</h2>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product Name</td>
                    <td>2</td>
                    <td>$99.99</td>
                    <td>$199.98</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <div className="order-actions">
              <select className="status-select" defaultValue="pending">
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <button className="btn btn-primary">Update Status</button>
            </div>
          </div>
        </main>
    </AdminLayout>
  );
}
