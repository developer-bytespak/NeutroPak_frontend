import { NextPage } from 'next';
import Head from 'next/head';
import Filters from '@/components/Filters';
import ProductCard from '@/components/ProductCard';

const Shop: NextPage = async () => {
  return (
    <>
      <Head>
        <title>Shop - NeutroPak</title>
        <meta name="description" content="Browse our complete product catalog" />
      </Head>

      <main className="shop-page">
        <div className="shop-header">
          <h1>Our Products</h1>
          <p>Explore our wide range of premium products</p>
        </div>

        <div className="shop-container">
          <aside className="filters-sidebar">
            <Filters />
          </aside>

          <section className="products-grid">
            <div className="products">
              {/* Products will be fetched and rendered here */}
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Shop;
