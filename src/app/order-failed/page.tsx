import Link from 'next/link';

export default function OrderFailed() {
  return (
    <main className="order-failed-page">
      <div className="failed-container">
        <div className="failed-icon">✕</div>
        <h1>Order Failed</h1>
        <p>Unfortunately, we couldn&apos;t process your order</p>

          <div className="error-info">
            <p>Please check your payment details and try again</p>
            <p>If problems persist, please contact our support team</p>
          </div>

          <div className="actions">
            <Link href="/checkout" className="btn">
              Try Again
            </Link>
            <Link href="/contact" className="btn secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </main>
  );
}
