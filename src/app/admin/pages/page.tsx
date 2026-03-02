import { NextPage } from 'next';
import Head from 'next/head';
import AdminLayout from '@/components/AdminLayout';

const AdminPages: NextPage = () => {
  const pages = [
    { id: 1, title: 'About Us', slug: 'about' },
    { id: 2, title: 'FAQs', slug: 'faqs' },
    { id: 3, title: 'Privacy Policy', slug: 'privacy-policy' },
    { id: 4, title: 'Terms and Conditions', slug: 'terms-and-conditions' },
    { id: 5, title: 'Shipping Policy', slug: 'shipping-policy' },
    { id: 6, title: 'Refund & Return Policy', slug: 'refund-return-policy' },
  ];

  return (
    <>
      <Head>
        <title>Pages - Admin | NeutroPak</title>
        <meta name="description" content="Manage pages" />
      </Head>

      <AdminLayout>
        <main className="admin-pages">
          <div className="page-header">
            <h1>Pages</h1>
          </div>

          <div className="pages-list">
            {pages.map((page) => (
              <div key={page.id} className="page-card">
                <div className="page-info">
                  <h3>{page.title}</h3>
                  <p className="page-slug">/{page.slug}</p>
                </div>
                <button className="btn btn-small">Edit</button>
              </div>
            ))}
          </div>
        </main>
      </AdminLayout>
    </>
  );
};

export default AdminPages;
