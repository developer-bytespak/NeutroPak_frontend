'use client';

import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/BlogCard';
import { SearchIcon } from '@/components/Icons';
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
  body?: any;
}

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
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

        // Calculate read time (roughly 200 words per minute)
        const wordCount = (blog.excerpt || '').split(/\s+/).length + (blog.body ? 500 : 0);
        const readTime = Math.max(1, Math.round(wordCount / 200));
        
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
          readTime: readTime,
          publishedAt: blog.publishedAt ? new Date(blog.publishedAt) : new Date(),
        };
      });
      
      console.log('Transformed blogs:', transformedBlogs);
      setBlogPosts(transformedBlogs);
      setLoading(false);
    };

    loadBlogs();
  }, []);

  // Filter posts by category and search
  let filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Apply search filter
  if (searchQuery.trim()) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply sorting
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch(sortBy) {
      case 'oldest':
        return a.publishedAt - b.publishedAt;
      case 'title':
        return a.title.localeCompare(b.title);
      default: // newest
        return b.publishedAt - a.publishedAt;
    }
  });

  // Get featured posts (first 3)
  // const featuredPosts = blogPosts.slice(0, 3);

  // Pagination logic
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setSearchQuery('');
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
    <main className="overflow-x-hidden bg-white">
      {/* Page Header */}
      <section
        className="relative bg-center bg-cover py-12 sm:py-20 md:py-32"
        style={{
          backgroundImage: 'url(/blogs.png)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
            Blog & Articles
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white drop-shadow-lg font-medium">Science-backed articles about honey, health, quality, and wellness</p>
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
            {/* Search and Filter Section */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-6 py-4 rounded-full border-2 border-gold-300 focus:outline-none focus:border-gold-600 focus:ring-2 focus:ring-gold-200 transition-all duration-300 text-gray-900 placeholder-gray-500 shadow-sm hover:shadow-md bg-gold-50"
                  />
                  <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gold-600 w-5 h-5" />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <p className="text-center text-gray-600 font-medium mb-6">Filter by Category</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 text-sm sm:text-base transform hover:scale-105 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-gold-600 to-gold-700 text-white shadow-lg hover:shadow-xl'
                          : 'bg-white text-gray-900 hover:bg-gold-50 border-2 border-gold-300 hover:border-gold-500'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort and Results */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="font-medium">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="px-4 py-2 border-2 border-gold-300 rounded-lg focus:outline-none focus:border-gold-600 focus:ring-2 focus:ring-gold-200 cursor-pointer bg-gold-50 font-medium transition-all duration-300"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">Title (A-Z)</option>
                  </select>
                </div>
                <div className="text-center sm:text-right font-medium text-gray-600">
                  <p>
                    Showing <span className="text-gold-700 font-bold">{paginatedPosts.length}</span> of{' '}
                    <span className="text-gold-700 font-bold">{sortedPosts.length}</span> articles
                  </p>
                </div>
              </div>
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
                      className="px-4 py-3 rounded-lg border-2 border-gold-300 text-gray-700 hover:bg-gold-600 hover:text-white hover:border-gold-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-sm sm:text-base"
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
                              ? 'bg-gradient-to-r from-gold-600 to-gold-700 text-white shadow-lg'
                              : 'border-2 border-gold-300 text-gray-700 hover:border-gold-500 hover:text-gold-700'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    
                    <button 
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="px-4 py-3 rounded-lg border-2 border-gold-300 text-gray-700 hover:bg-gold-600 hover:text-white hover:border-gold-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-sm sm:text-base"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="inline-block">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-lg sm:text-xl text-gray-600 font-bold mb-2">No articles found</p>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>



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
