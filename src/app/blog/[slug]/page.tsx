'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchBlogBySlug } from '@/lib/sanity';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

interface PortableTextBlock {
  _type: string;
  _key?: string;
  style?: string;
  children?: Array<{ _type: string; text: string }>;
  level?: number;
  listItem?: string;
  content?: PortableTextBlock[];
}

// Simple portable text renderer
const renderPortableText = (blocks: any[] | undefined) => {
  if (!blocks) return null;

  return (
    <div className="prose prose-lg max-w-none mb-12 text-gray-700 leading-relaxed">
      {blocks.map((block: any, index: number) => {
        if (block._type === 'block') {
          const text = block.children?.map((child: any) => child.text).join('') || '';
          
          switch (block.style) {
            case 'h1':
              return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-10 mb-6">{text}</h1>;
            case 'h2':
              return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-6">{text}</h2>;
            case 'h3':
              return <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">{text}</h3>;
            case 'blockquote':
              return <blockquote key={index} className="border-l-4 border-red-900 pl-6 py-2 italic text-gray-600 bg-gray-50 my-6">{text}</blockquote>;
            default:
              return <p key={index} className="mb-6">{text}</p>;
          }
        }
        return null;
      })}
    </div>
  );
};

export default function BlogPost({ params }: BlogPostProps) {
  const [blogContent, setBlogContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isShareOpen, setIsShareOpen] = useState(false);

  // Fetch blog post from Sanity
  useEffect(() => {
    const loadBlog = async () => {
      setLoading(true);
      const blog = await fetchBlogBySlug(params.slug);
      console.log('Fetched blog:', blog);
      
      if (blog) {
        // Ensure we have image URL
        let imageUrl = '/default-blog-image.jpg';
        if (typeof blog.mainImage === 'string') {
          imageUrl = blog.mainImage;
        } else if (blog.mainImage?.asset?.url) {
          imageUrl = blog.mainImage.asset.url;
        }

        setBlogContent({
          title: blog.title,
          author: blog.author?.name || 'NutreoPak',
          date: blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) : 'Unknown date',
          readTime: '5 min read',
          category: blog.category?.title || 'Health',
          image: imageUrl,
          excerpt: blog.excerpt || 'No description available',
          body: blog.body || [],
          tags: [blog.category?.title || 'General'],
        });
      }
      setLoading(false);
    };

    loadBlog();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-900 mb-4"></div>
          <p className="text-gray-600 font-medium">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blogContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Blog post not found</p>
          <Link href="/blog" className="text-red-900 hover:text-red-800 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareLinks = [
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Copy Link', url: '#', icon: '🔗' },
  ];

  return (
    <>
      <Head>
        <title>{blogContent.title} - NutreoPak</title>
        <meta name="description" content={blogContent.excerpt} />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-900 to-red-800 text-white py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-red-100 hover:text-white transition-colors mb-6 font-medium">
              <span className="mr-2">←</span>
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Featured Image */}
        {blogContent.image && (
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-200 overflow-hidden">
            <Image
              src={blogContent.image}
              alt={blogContent.title}
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-10" />
          </div>
        )}

        {/* Post Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Post Header */}
              <div className="mb-10 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-red-900 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                    {blogContent.category}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {blogContent.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-6 items-center text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {blogContent.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{blogContent.author}</p>
                      <p className="text-sm text-gray-500">{blogContent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-lg">⏱️</span>
                    <span className="font-medium">{blogContent.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed mb-10 italic border-l-4 border-red-900 pl-6 py-2 bg-red-50">
                {blogContent.excerpt}
              </p>

              {/* Article Content from Sanity */}
              {renderPortableText(blogContent.body)}

              {/* Share Section */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 sm:p-8 mb-12 border border-red-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Share This Article</h3>
                <div className="flex flex-wrap gap-3">
                  {shareLinks.map((link) => (
                    <button
                      key={link.name}
                      className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-red-900 hover:text-white text-gray-900 rounded-lg border border-gray-200 transition-all duration-200 font-medium text-sm"
                    >
                      <span className="text-lg">{link.icon}</span>
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {blogContent.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="inline-block px-4 py-2 bg-gray-100 hover:bg-red-900 hover:text-white text-gray-700 rounded-full text-sm font-medium transition-all duration-200"
                  >
                    #{tag.replace(/\s+/g, '')}
                  </Link>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Information Box */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h3 className="text-lg font-bold text-gray-900 mb-4">About This Article</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-semibold text-gray-900">{blogContent.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Published</p>
                    <p className="font-semibold text-gray-900">{blogContent.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Reading Time</p>
                    <p className="font-semibold text-gray-900">{blogContent.readTime}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
