'use client';

import React from 'react';
import Link from 'next/link';

const OrderSuccessPage = () => {
  const orderNumber = 'HZ-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <main className="order-success-page">
      {/* Success Message */}
      <section className="success-header">
        <div className="container">
          <div className="success-icon">✓</div>
          <h1>Thank You for Your Order!</h1>
          <p>Your order has been placed successfully</p>
        </div>
      </section>

      <div className="container">
        {/* Order Details */}
        <section className="order-details">
          <div className="detail-card">
            <div className="detail-row">
              <label>Order Number:</label>
              <strong>{orderNumber}</strong>
            </div>
            <div className="detail-row">
              <label>Order Date:</label>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="detail-row">
              <label>Total Amount:</label>
              <strong>₨ 8,607</strong>
            </div>
            <div className="detail-row">
              <label>Delivery Method:</label>
              <span>Cash on Delivery (COD)</span>
            </div>
          </div>

          <div className="detail-card">
            <h3>Delivery Address</h3>
            <p>
              John Doe
              <br />
              123 Main Street
              <br />
              Lahore, 54000
              <br />
              Phone: +92 320 1234567
            </p>
          </div>
        </section>

        {/* Order Status */}
        <section className="order-status">
          <h2>Order Status</h2>
          <div className="status-timeline">
            <div className="status-item completed">
              <div className="status-dot"></div>
              <div className="status-content">
                <h4>Order Confirmed</h4>
                <p>Your order has been confirmed</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-dot"></div>
              <div className="status-content">
                <h4>Processing</h4>
                <p>We're preparing your honey</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-dot"></div>
              <div className="status-content">
                <h4>Shipped</h4>
                <p>Your order is on its way</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-dot"></div>
              <div className="status-content">
                <h4>Delivered</h4>
                <p>Enjoy your pure honey!</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="next-steps">
          <h2>What's Next?</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">📧</div>
              <h4>Confirmation Email</h4>
              <p>
                Check your email for your order
                confirmation and tracking details.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon">📦</div>
              <h4>Preparation</h4>
              <p>
                We'll carefully prepare your order
                within 1-2 business days.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon">🚚</div>
              <h4>Delivery</h4>
              <p>
                Your honey will be delivered within
                3-5 business days via COD.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon">😊</div>
              <h4>Enjoy!</h4>
              <p>
                Enjoy your pure, raw honey fresh
                from our beekeepers.
              </p>
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className="success-actions">
          <Link href="/shop" className="btn btn-primary">
            Continue Shopping
          </Link>
          <Link href="/" className="btn btn-outlined">
            Back to Home
          </Link>
        </section>

        {/* Support */}
        <section className="success-support">
          <h3>Need Help?</h3>
          <p>
            If you have any questions about your
            order, please contact us at{' '}
            <a href="mailto:info@honeeza.com">
              info@honeeza.com
            </a>{' '}
            or call{' '}
            <a href="tel:+923379788677">
              +92 337 9788677
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default OrderSuccessPage;
