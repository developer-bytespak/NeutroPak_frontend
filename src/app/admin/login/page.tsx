'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';

const AdminLogin: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // TODO: Implement actual authentication with backend
      if (email && password) {
        // Simulate login
        console.log('Login attempt:', { email, password, remember });
        // For now, redirect to dashboard
        window.location.href = '/admin/dashboard';
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="admin-login-page">
        <div className="login-container">
          <div className="login-box">
            <div className="text-center mb-8">
              <Link href="/" className="text-4xl font-bold text-gold-600 hover:text-gold-700">
                NutreoPak
              </Link>
            </div>

            <h1>Admin Portal</h1>
            <p>Enter your credentials to continue</p>

            {error && (
              <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="remember">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="login-footer">
              <a href="#forgot">Forgot password?</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLogin;
