'use client';

import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/BlogCard';
import { fetchBlogs } from '@/lib/sanity';

interface SanityBlog {
  _id: string;
  title: string;
  slug: { current: string };
  author?: { _id: string; name: string };
  category?: { _id: string; title: string };
  publishedAt: string;
  mainImage?: { asset?: { url: string } } | string | null;
  excerpt?: string;
}

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Fetch blogs from Sanity on component mount
  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      console.log('Starting to fetch blogs from Sanity...');
      const blogs = await fetchBlogs();
      
      console.log('Blogs fetched:', blogs);
      console.log('Number of blogs:', blogs.length);
      
      if (blogs.length === 0) {
        console.warn('No blogs returned from Sanity API');
      }
      
      // Transform Sanity blogs to match the expected format
      const transformedBlogs = blogs.map((blog: SanityBlog) => {
        // Handle image URL - could be string, object with asset.url, or null
        let imageUrl = '/default-blog-image.jpg';
        if (typeof blog.mainImage === 'string') {
          imageUrl = blog.mainImage;
        } else if (blog.mainImage?.asset?.url) {
          imageUrl = blog.mainImage.asset.url;
        }
        
        return {
          title: blog.title,
          excerpt: blog.excerpt || 'No description available',
          slug: blog.slug?.current || '',
          date: blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) : 'Unknown date',
          category: blog.category?.title || 'General',
          author: blog.author?.name || 'Anonymous',
          image: imageUrl,
        };
      });
      
      console.log('Transformed blogs:', transformedBlogs);
      setBlogPosts(transformedBlogs);
      setLoading(false);
    };

    loadBlogs();
  }, []);

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Page Header */}
      <section
        className="relative bg-center bg-cover py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden"
        style={{ backgroundImage: "url('/blog_sec.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
            Honey Knowledge Base
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-yellow-50 drop-shadow-md max-w-2xl mx-auto font-light">
            Science-backed articles about honey, health, quality, and wellness
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-900 mb-4"></div>
              <p className="text-gray-600 font-medium">Loading blog posts...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Filter/Category Section */}
            <div className="mb-16">
              <p className="text-center text-gray-600 font-medium mb-8">Filter by Category</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 text-sm sm:text-base transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-red-900 to-red-800 text-white shadow-lg hover:shadow-xl'
                        : 'bg-white text-gray-900 hover:bg-gray-100 border-2 border-gray-200 hover:border-red-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-8 text-gray-600">
              <p className="font-medium">
                Showing <span className="text-red-900 font-bold">{paginatedPosts.length}</span> of <span className="text-red-900 font-bold">{filteredPosts.length}</span> articles
              </p>
            </div>

            {/* Blog Grid */}
            {paginatedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                  {paginatedPosts.map((post, index) => (
                    <div
                      key={post.slug}
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      <BlogCard {...post} />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 py-8">
                    <button 
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                      className="px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-red-900 hover:text-white hover:border-red-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-sm sm:text-base"
                    >
                      ← Previous
                    </button>
                    
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageClick(page)}
                          className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                            currentPage === page
                              ? 'bg-gradient-to-r from-red-900 to-red-800 text-white shadow-lg'
                              : 'border-2 border-gray-300 text-gray-700 hover:border-red-900 hover:text-red-900'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    
                    <button 
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-red-900 hover:text-white hover:border-red-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-sm sm:text-base"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="inline-block">
                  <div className="text-5xl mb-4">📭</div>
                  <p className="text-lg sm:text-xl text-gray-600 font-medium">No blog posts found</p>
                  <p className="text-gray-500 mt-2">Try selecting a different category or check back soon!</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-red-100 text-base sm:text-lg mb-8">
            Subscribe to our newsletter for the latest honey insights and wellness tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-6 py-3 bg-yellow-400 text-red-900 rounded-lg font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
};

export default BlogPage;
