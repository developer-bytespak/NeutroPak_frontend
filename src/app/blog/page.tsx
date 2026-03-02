'use client';

import React from 'react';
import BlogCard from '@/components/BlogCard';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Does Heating Honey Destroy Honey Benefits?',
      excerpt: 'Learn how heat affects honey nutrients, enzymes, and antioxidants. Discover the safest temperature for consuming honey.',
      slug: 'heating-honey-benefits',
      date: 'January 16, 2026',
      category: 'Health',
      author: 'Dr. Hassan',
      image: '/blog-heating-honey.jpg',
    },
    {
      title: 'Which Honey Is Best for Which Health Problem?',
      excerpt: 'Different honey types have different therapeutic benefits. A science-backed guide to choosing the right honey for your needs.',
      slug: 'best-honey-health-problems',
      date: 'January 4, 2026',
      category: 'Health',
      author: 'Dr. Ayesha',
      image: '/blog-honey-health.jpg',
    },
    {
      title: 'Pure Honey Identification: Science vs Myths',
      excerpt: 'Most home honey tests are misleading. Learn the actual scientific methods to identify pure, adulteration-free honey.',
      slug: 'honey-identification',
      date: 'January 2, 2026',
      category: 'Education',
      author: 'Irfan Ullah',
      image: '/blog-honey-id.jpg',
    },
    {
      title: 'Honey Never Expires? The Truth About Honey Expiry Dates',
      excerpt: 'If honey never goes bad, why do bottles have expiry dates? Understanding honey preservation and storage.',
      slug: 'honey-never-expires',
      date: 'December 25, 2025',
      category: 'Education',
      author: 'Irfan Ullah',
      image: '/blog-honey-expiry.jpg',
    },
    {
      title: 'Honey Crystallization: Why It Happens and Why It\'s Good',
      excerpt: 'Crystallization is a sign of pure honey, not fake honey. Learn why crystallization is actually beneficial.',
      slug: 'honey-crystallization',
      date: 'December 22, 2025',
      category: 'Education',
      author: 'Irfan Ullah',
      image: '/blog-crystallization.jpg',
    },
    {
      title: 'Wild (Jangli) Honey vs Farm Honey: Which is Better?',
      excerpt: 'Understanding the differences between wild and farm honey without romanticism. A factual comparison.',
      slug: 'wild-vs-farm-honey',
      date: 'December 19, 2025',
      category: 'Comparison',
      author: 'Irfan Ullah',
      image: '/blog-wild-farm.jpg',
    },
  ];

  return (
    <main className="blog-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Honey Knowledge Base</h1>
          <p>Science-backed articles about honey, health, and purity</p>
        </div>
      </section>

      <div className="container">
        {/* Blog Grid */}
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <a href="#" className="page-link active">
            1
          </a>
          <a href="#" className="page-link">
            2
          </a>
          <a href="#" className="page-link">
            3
          </a>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
