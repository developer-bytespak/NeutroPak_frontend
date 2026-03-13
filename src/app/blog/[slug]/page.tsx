'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchBlogBySlug, fetchRelatedBlogs } from '@/lib/sanity';
import BlogCard from '@/components/BlogCard';

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
  const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);
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
        };
        
        setBlogContent(blogData);

        // Fetch related blogs - just get latest blogs excluding current one
        const relatedBlogsData = await fetchRelatedBlogs('', blog._id, 3);
        console.log('Related blogs:', relatedBlogsData);
        setRelatedBlogs(relatedBlogsData);
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
            {/* Main Content - Left */}
            <article>
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
            </article>

            {/* Featured Image - Right */}
            {blogContent.image && (
              <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg flex items-center justify-center">
                <Image
                  src={blogContent.image}
                  alt={blogContent.title}
                  fill
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
          {relatedBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedBlogs.map((blog: any) => (
                <BlogCard
                  key={blog._id}
                  title={blog.title}
                  slug={blog.slug?.current || ''}
                  image={blog.mainImage?.asset?.url || '/default-blog-image.jpg'}
                  excerpt={blog.excerpt}
                  category={blog.category?.title || 'General'}
                  date={blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  }) : 'Unknown'}
                  author={blog.author?.name || 'NutreoPak'}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">No related articles found.</p>
          )}
        </div>
      </main>
    </>
  );
}
