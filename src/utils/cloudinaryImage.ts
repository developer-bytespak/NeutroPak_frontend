/**
 * Utility functions for optimizing Cloudinary images
 */

/**
 * Add Cloudinary transformations to an image URL
 * @param url - Original Cloudinary URL
 * @param transformations - Transformation parameters
 * @returns Optimized Cloudinary URL
 */
export const optimizeCloudinaryImage = (
  url: string,
  transformations?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: string;
    crop?: string;
  }
): string => {
  if (!url || !url.includes('cloudinary.com')) {
    return url;
  }

  // Build transformation string using Cloudinary's URL format (comma-separated, underscore-separated)
  const transformParts: string[] = [];

  // Add custom transformations if provided
  if (transformations) {
    if (transformations.width) transformParts.push(`w_${transformations.width}`);
    if (transformations.height) transformParts.push(`h_${transformations.height}`);
    if (transformations.quality) transformParts.push(`q_${transformations.quality}`);
    if (transformations.format) transformParts.push(`f_${transformations.format}`);
    if (transformations.crop) transformParts.push(`c_${transformations.crop}`);
  } else {
    // Apply default optimizations
    transformParts.push('q_80');
    transformParts.push('f_auto');
  }

  // Add transformation string to URL
  const uploadIndex = url.indexOf('/upload/');
  if (uploadIndex !== -1) {
    const baseUrl = url.substring(0, uploadIndex + 8);
    const imagePath = url.substring(uploadIndex + 8);
    const transformString = transformParts.join(',');
    
    return `${baseUrl}${transformString}/${imagePath}`;
  }

  return url;
};

/**
 * Get optimized image URL for different sizes
 * @param url - Original Cloudinary URL
 * @param size - 'thumbnail' | 'small' | 'medium' | 'large' | 'original'
 * @returns Optimized URL for specified size
 */
export const getOptimizedImageUrl = (
  url: string,
  size: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'medium'
): string => {
  const sizeConfigs = {
    thumbnail: { width: 150, height: 150, quality: 60, crop: 'fill' },
    small: { width: 300, height: 300, quality: 70, crop: 'fill' },
    medium: { width: 500, height: 500, quality: 80, crop: 'fill' },
    large: { width: 800, height: 800, quality: 90, crop: 'fill' },
    original: {},
  };

  return optimizeCloudinaryImage(url, sizeConfigs[size]);
};

/**
 * Check if URL is a Cloudinary URL
 * @param url - URL to check
 * @returns True if URL is from Cloudinary
 */
export const isCloudinaryUrl = (url: string): boolean => {
  return url ? url.includes('res.cloudinary.com') : false;
};
