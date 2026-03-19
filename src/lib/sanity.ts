// Fetch blogs from your Sanity cloud API
const SANITY_PROJECT_ID = 'pjldabm4';
const SANITY_DATASET = 'product';
const SANITY_API_VERSION = 'v2024-01-01';

export async function fetchBlogs() {
  // First fetch basic blog data
  const basicQuery = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    category,
    publishedAt,
    mainImage,
    excerpt
  }`;

  try {
    const encodedQuery = encodeURIComponent(basicQuery);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
    
    console.log('Fetching from:', url);
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Sanity API Raw Response:', data);
      
      // Now fetch reference details for each blog
      const blogsWithDetails = await Promise.all(
        (data.result || []).map(async (blog: any) => {
          let author = null;
          let category = null;
          
          // Fetch author if it exists
          if (blog.author?._ref) {
            try {
              const authorQuery = encodeURIComponent(`*[_id == "${blog.author._ref}"] { _id, name }`);
              const authorUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${authorQuery}`;
              const authorRes = await fetch(authorUrl);
              if (authorRes.ok) {
                const authorData = await authorRes.json();
                author = authorData.result?.[0];
              }
            } catch (e) {
              console.error('Error fetching author:', e);
            }
          }
          
          // Fetch category if it exists
          if (blog.category?._ref) {
            try {
              const categoryQuery = encodeURIComponent(`*[_id == "${blog.category._ref}"] { _id, title }`);
              const categoryUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${categoryQuery}`;
              const categoryRes = await fetch(categoryUrl);
              if (categoryRes.ok) {
                const categoryData = await categoryRes.json();
                category = categoryData.result?.[0];
              }
            } catch (e) {
              console.error('Error fetching category:', e);
            }
          }
          
          // Fetch image asset if it exists
          let imageUrl = null;
          if (blog.mainImage?.asset?._ref) {
            try {
              const imageQuery = encodeURIComponent(`*[_id == "${blog.mainImage.asset._ref}"] { url }`);
              const imageUrl_api = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${imageQuery}`;
              const imageRes = await fetch(imageUrl_api);
              if (imageRes.ok) {
                const imageData = await imageRes.json();
                imageUrl = imageData.result?.[0]?.url;
              }
            } catch (e) {
              console.error('Error fetching image:', e);
            }
          }
          
          return {
            ...blog,
            author,
            category,
            mainImage: imageUrl ? { asset: { url: imageUrl } } : null
          };
        })
      );
      
      console.log('Blogs with details:', blogsWithDetails);
      return blogsWithDetails;
    } else {
      console.error('Sanity API error:', response.status, response.statusText);
      return [];
    }
  } catch (error) {
    console.error('Error fetching blogs from Sanity:', error);
    return [];
  }
}

// Function to fetch a single blog by slug
export async function fetchBlogBySlug(slug: string) {
  // Fetch basic blog data without deep reference resolution
  const query = `*[_type == "post" && slug.current == "${slug}"] {
    _id,
    title,
    slug,
    author,
    category,
    publishedAt,
    mainImage,
    excerpt,
    body
  }[0]`;

  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const blog = data.result;
      
      if (!blog) return null;

      // Fetch author details if available
      let author = null;
      if (blog.author?._ref) {
        try {
          const authorQuery = encodeURIComponent(`*[_id == "${blog.author._ref}"] { _id, name }[0]`);
          const authorUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${authorQuery}`;
          const authorRes = await fetch(authorUrl);
          if (authorRes.ok) {
            const authorData = await authorRes.json();
            author = authorData.result;
          }
        } catch (e) {
          console.error('Error fetching author:', e);
        }
      }

      // Fetch category details if available
      let category = null;
      if (blog.category?._ref) {
        try {
          const categoryQuery = encodeURIComponent(`*[_id == "${blog.category._ref}"] { _id, title }[0]`);
          const categoryUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${categoryQuery}`;
          const categoryRes = await fetch(categoryUrl);
          if (categoryRes.ok) {
            const categoryData = await categoryRes.json();
            category = categoryData.result;
          }
        } catch (e) {
          console.error('Error fetching category:', e);
        }
      }

      // Fetch image asset if available
      let imageUrl = null;
      if (blog.mainImage?.asset?._ref) {
        try {
          const imageQuery = encodeURIComponent(`*[_id == "${blog.mainImage.asset._ref}"] { url }[0]`);
          const imageUrl_api = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${imageQuery}`;
          const imageRes = await fetch(imageUrl_api);
          if (imageRes.ok) {
            const imageData = await imageRes.json();
            imageUrl = imageData.result?.url;
          }
        } catch (e) {
          console.error('Error fetching image:', e);
        }
      }

      return {
        ...blog,
        author,
        category,
        mainImage: imageUrl ? { asset: { url: imageUrl } } : null
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching blog from Sanity:', error);
    return null;
  }
}

// Fetch related blogs - gets latest blogs excluding current one
export async function fetchRelatedBlogs(categoryId: string, currentBlogId: string, limit: number = 3) {
  try {
    console.log('fetchRelatedBlogs called with currentBlogId:', currentBlogId);
    
    // Fetch all blogs
    const allBlogsQuery = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      category,
      publishedAt,
      mainImage,
      excerpt
    }`;

    const encodedQuery = encodeURIComponent(allBlogsQuery);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const allBlogs = data.result || [];
      
      // Filter out the current blog and take the first 'limit' blogs
      const filteredBlogs = allBlogs
        .filter((blog: any) => blog._id !== currentBlogId)
        .slice(0, limit);

      console.log('Total blogs:', allBlogs.length);
      console.log('Filtered blogs (excluding current):', filteredBlogs.length);
      
      // Fetch additional details for each blog
      const blogsWithDetails = await Promise.all(
        filteredBlogs.map(async (blog: any) => {
          let author = null;
          let category = null;
          let imageUrl = null;
          
          if (blog.author?._ref) {
            try {
              const authorQuery = encodeURIComponent(`*[_id == "${blog.author._ref}"] { _id, name }[0]`);
              const authorUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${authorQuery}`;
              const authorRes = await fetch(authorUrl);
              if (authorRes.ok) {
                const authorData = await authorRes.json();
                author = authorData.result;
              }
            } catch (e) {
              console.error('Error fetching author:', e);
            }
          }
          
          if (blog.category?._ref) {
            try {
              const categoryQuery = encodeURIComponent(`*[_id == "${blog.category._ref}"] { _id, title }[0]`);
              const categoryUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${categoryQuery}`;
              const categoryRes = await fetch(categoryUrl);
              if (categoryRes.ok) {
                const categoryData = await categoryRes.json();
                category = categoryData.result;
              }
            } catch (e) {
              console.error('Error fetching category:', e);
            }
          }
          
          if (blog.mainImage?.asset?._ref) {
            try {
              const imageQuery = encodeURIComponent(`*[_id == "${blog.mainImage.asset._ref}"] { url }[0]`);
              const imageUrl_api = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${imageQuery}`;
              const imageRes = await fetch(imageUrl_api);
              if (imageRes.ok) {
                const imageData = await imageRes.json();
                imageUrl = imageData.result?.url;
              }
            } catch (e) {
              console.error('Error fetching image:', e);
            }
          }
          
          return {
            ...blog,
            author,
            category,
            mainImage: imageUrl ? { asset: { url: imageUrl } } : null
          };
        })
      );
      
      console.log('Final blogs with details:', blogsWithDetails);
      return blogsWithDetails;
    } else {
      console.error('Sanity API error:', response.status, response.statusText);
      return [];
    }
  } catch (error) {
    console.error('Error fetching related blogs from Sanity:', error);
    return [];
  }
}
