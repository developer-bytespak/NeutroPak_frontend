import { NextPage } from 'next';
import Head from 'next/head';

const AdminLogin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Login - NeutroPak</title>
        <meta name="description" content="Admin login page" />
      </Head>

      <main className="admin-login-page">
        <div className="login-container">
          <div className="login-box">
            <h1>Admin Portal</h1>
            <p>Enter your credentials to continue</p>

            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>

              <div className="form-group">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" name="remember" />
                  Remember me
                </label>
              </div>

              <button type="submit" className="login-btn">Login</button>
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
