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

        const blogData = {
          _id: blog._id,
          title: blog.title,
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
        };
        
        setBlogContent(blogData);
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
        {/* Post Content with Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          {/* Featured Image - Top */}
          {blogContent.image && (
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg flex items-center justify-center mb-12">
              <Image
                src={blogContent.image}
                alt={blogContent.title}
                fill
                className="object-contain w-full h-full"
                priority
              />
            </div>
          )}

          {/* Main Content - Below */}
          <article className="max-w-4xl mx-auto">
            {/* Post Header */}
            <div className="mb-10 pb-8 border-b border-gray-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block bg-red-900 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                  {blogContent.category}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center">
                {blogContent.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-6 items-center justify-center text-gray-600">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-900 font-medium">{blogContent.date}</span>
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
          </article>
        </div>
      </main>
    </>
  );
}
