import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    { id: 1, title: 'Getting Started with NeutroPak', slug: 'getting-started' },
    { id: 2, title: 'Tips for Better Shopping', slug: 'shopping-tips' },
    { id: 3, title: 'New Products This Month', slug: 'new-products' },
  ];

  return (
    <>
      <Head>
        <title>Blog - NeutroPak</title>
        <meta name="description" content="Read our latest blog posts" />
      </Head>

      <main className="blog-page">
        <div className="blog-container">
          <h1>NeutroPak Blog</h1>
          <p className="blog-subtitle">Tips, updates, and stories from our community</p>

          <div className="blog-posts">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="post-excerpt">Read more about this topic...</p>
                <Link href={`/blog/${post.slug}`} className="read-more">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
