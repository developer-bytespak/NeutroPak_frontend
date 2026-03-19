// Fetch blogs from your Sanity cloud API
const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pjldabm4';
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'product';
const SANITY_API_VERSION = 'v2021-06-07';

// Simple function to build image URL from Sanity asset reference
function buildImageUrl(asset: any): string | null {
  if (!asset) return null;
  if (typeof asset === 'string') return asset;
  if (asset.url) return asset.url;
  if (asset._ref) {
    // Extract image ID and build CDN URL
    const imageId = asset._ref.replace('image-', '').split('-').slice(0, -1).join('-');
    return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${imageId}`;
  }
  return null;
}

export async function fetchBlogs() {
  // Query posts with expanded category reference
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category->{_id, title},
    publishedAt,
    mainImage,
    excerpt
  }`;

  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
    
    console.log('🔍 Fetching blogs from:', url);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      credentials: 'omit',
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    console.log('📡 Sanity API Response Status:', response.status);

    if (!response.ok) {
      console.error('❌ Sanity API error:', response.status, response.statusText);
      const error = await response.text();
      console.error('Error response:', error);
      return [];
    }

    const data = await response.json();
    console.log('📊 Sanity API Response:', data);
    
    if (data.error) {
      console.error('❌ Sanity query error:', data.error);
      return [];
    }

    if (!data.result) {
      console.warn('⚠️ No result field in response');
      return [];
    }

    console.log('✅ Total blogs found:', data.result.length);
    
    if (data.result.length === 0) {
      console.warn('⚠️ No blog posts found in Sanity');
      return [];
    }
    
    // Process blogs and build image URLs
    const blogsWithDetails = (data.result || []).map((blog: any) => {
      let imageUrl = '/default-blog-image.jpg';
      
      if (blog.mainImage?.asset?._ref) {
        // Build proper Sanity image CDN URL
        const imageId = blog.mainImage.asset._ref.replace('image-', '').split('-').slice(0, -1).join('-');
        imageUrl = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${imageId}?w=800&h=600&fit=crop`;
      } else if (blog.mainImage?.asset?.url) {
        imageUrl = blog.mainImage.asset.url;
      }

      return {
        ...blog,
        mainImage: { asset: { url: imageUrl } }
      };
    });
    
    console.log('✨ Processed blogs:', blogsWithDetails);
    return blogsWithDetails;
  } catch (error) {
    console.error('❌ Error fetching blogs from Sanity:', error);
    return [];
  }
}

// Function to fetch a single blog by slug
export async function fetchBlogBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"] {
    _id,
    title,
    slug,
    category->{_id, title},
    publishedAt,
    mainImage,
    excerpt,
    body
  }[0]`;

  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
    
    console.log('Fetching blog by slug from:', url);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      credentials: 'omit',
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error('Sanity API error:', response.status, response.statusText);
      const error = await response.text();
      console.error('Error response:', error);
      return null;
    }

    const data = await response.json();
    
    if (data.error) {
      console.error('Sanity query error:', data.error);
      return null;
    }

    const blog = data.result;
    
    if (!blog) {
      console.warn('Blog not found with slug:', slug);
      return null;
    }

    // Build image URL
    let imageUrl = '/default-blog-image.jpg';
    if (blog.mainImage?.asset?._ref) {
      const imageId = blog.mainImage.asset._ref.replace('image-', '').split('-').slice(0, -1).join('-');
      imageUrl = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${imageId}?w=800&h=600&fit=crop`;
    } else if (blog.mainImage?.asset?.url) {
      imageUrl = blog.mainImage.asset.url;
    }

    return {
      ...blog,
      mainImage: { asset: { url: imageUrl } }
    };
  } catch (error) {
    console.error('Error fetching blog by slug from Sanity:', error);
    return null;
  }
}

// Fetch related blogs - gets latest blogs excluding current one
export async function fetchRelatedBlogs(categoryId: string, currentBlogId: string, limit: number = 3) {
  try {
    console.log('fetchRelatedBlogs called with currentBlogId:', currentBlogId);
    
    // Fetch all blogs with expanded category
    const query = `*[_type == "post" && _id != "${currentBlogId}"] | order(publishedAt desc) | [0...${limit}] {
      _id,
      title,
      slug,
      category->{_id, title},
      publishedAt,
      mainImage,
      excerpt
    }`;

    const encodedQuery = encodeURIComponent(query);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      credentials: 'omit',
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error('Sanity API error:', response.status, response.statusText);
      return [];
    }

    const data = await response.json();
    
    if (data.error) {
      console.error('Sanity query error:', data.error);
      return [];
    }

    const blogs = data.result || [];
    console.log('Related blogs found:', blogs.length);
    
    // Process blogs and build image URLs
    const processedBlogs = blogs.map((blog: any) => {
      let imageUrl = '/default-blog-image.jpg';
      
      if (blog.mainImage?.asset?._ref) {
        const imageId = blog.mainImage.asset._ref.replace('image-', '').split('-').slice(0, -1).join('-');
        imageUrl = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${imageId}?w=800&h=600&fit=crop`;
      } else if (blog.mainImage?.asset?.url) {
        imageUrl = blog.mainImage.asset.url;
      }

      return {
        ...blog,
        mainImage: { asset: { url: imageUrl } }
      };
    });
    
    console.log('Processed related blogs:', processedBlogs);
    return processedBlogs;
  } catch (error) {
    console.error('Error fetching related blogs from Sanity:', error);
    return [];
  }
}
