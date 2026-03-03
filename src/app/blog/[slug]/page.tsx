import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;

  return (
    <>
      <Head>
        <title>Blog Post - NutreoPak</title>
        <meta name="description" content="Read our blog post" />
      </Head>

      <main className="blog-post-page">
        <article className="blog-post-container">
          <div className="post-header">
            <Link href="/blog" className="back-link">← Back to Blog</Link>
            <h1>Blog Post Title</h1>
            <div className="post-meta">
              <span className="author">By NutreoPak</span>
              <span className="date">March 3, 2025</span>
              <span className="read-time">5 min read</span>
            </div>
          </div>

          <div className="post-content">
            <p>Blog content goes here...</p>
            {/* Additional content sections */}
          </div>

          <div className="post-footer">
            <div className="tags">
              <span className="tag">Tag 1</span>
              <span className="tag">Tag 2</span>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
