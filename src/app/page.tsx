import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NeutroPak - Premium Products</title>
        <meta name="description" content="Welcome to NeutroPak - Your trusted e-commerce store" />
      </Head>

      <main className="home-page">
        <section className="hero">
          <h1>Welcome to NeutroPak</h1>
          <p>Discover premium products at unbeatable prices</p>
          <Link href="/shop" className="cta-button">
            Shop Now
          </Link>
        </section>

        <section className="featured">
          <h2>Featured Products</h2>
          {/* Featured products will be displayed here */}
        </section>
      </main>
    </>
  );
};

export default Home;
