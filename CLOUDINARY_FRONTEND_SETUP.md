# Cloudinary Images Frontend Integration

This guide covers how the frontend fetches and displays Cloudinary images from the backend API.

## Setup Overview

The frontend is fully configured to:
1. Fetch products with Cloudinary image URLs from the backend API
2. Optimize images for web performance
3. Handle image loading states and errors
4. Display images across different components (Shop, Product Detail, etc.)

## Environment Configuration

The frontend is already set up with the necessary configuration:

**File: `.env`**
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NODE_ENV=development
```

**File: `next.config.js`**
- Configured to accept all HTTPS image sources
- Cloudinary URLs are automatically optimized by Next.js Image component
- Automatic format conversion (WebP, etc.)

## How It Works

### Product Fetching Flow

```
Frontend (Shop Page/Product Detail)
    ↓
Calls productService.getAllProducts()
    ↓
Makes HTTP GET to /api/products
    ↓
Backend returns products with imageUrl (Cloudinary URL)
    ↓
Frontend renders ProductCard with imageUrl
    ↓
ProductCard passes image to Next.js Image component
    ↓
Image is optimized and displayed
```

### Image Optimization Utility

**File: `src/utils/cloudinaryImage.ts`**

Provides functions for optimizing Cloudinary images:

```typescript
import { getOptimizedImageUrl } from '@/utils/cloudinaryImage';

// Get optimized image for specific size
const optimized = getOptimizedImageUrl(imageUrl, 'medium');
// Available sizes: 'thumbnail' | 'small' | 'medium' | 'large' | 'original'

// Apply custom transformations
import { optimizeCloudinaryImage } from '@/utils/cloudinaryImage';
const custom = optimizeCloudinaryImage(imageUrl, {
  width: 800,
  height: 800,
  quality: 85
});
```

### Components Using Cloudinary Images

#### 1. **ProductCard Component**
**File: `src/components/ProductCard.tsx`**

Features:
- Automatically optimizes images using `getOptimizedImageUrl()`
- Shows loading state while image loads
- Fallback to placeholder on error
- Hover scale animation

Usage:
```tsx
<ProductCard
  image={product.imageUrl}
  name={product.name}
  price={product.price}
  // ... other props
/>
```

#### 2. **Shop Page**
**File: `src/app/shop/page.tsx`**

Features:
- Fetches all products from backend `/api/products`
- Passes `imageUrl` to ProductCard components
- Handles loading and error states
- Filters and sorts products

#### 3. **Product Detail Page**
**File: `src/app/product/[slug]/page.tsx`**

Features:
- Fetches specific product by ID
- Displays high-quality optimized image
- Shows related products with images
- Loading and error state management

## API Integration

### Backend Service

**File: `src/services/productService.ts`**

```typescript
export const productService = {
  async getAllProducts(page = 1, limit = 10) {
    // Fetches products from /api/products
    // Returns products with imageUrl field
  },

  async getProductById(id: number) {
    // Fetches single product
    // Returns product with imageUrl
  }
};
```

### API Client

**File: `src/utils/api.ts`**

- Configured axios instance with base URL to backend
- Handles authentication with JWT token
- Automatic error handling

## Image Sizes & Optimization

### Default Image Sizes

| Size | Width | Height | Quality | Use Case |
|------|-------|--------|---------|----------|
| thumbnail | 150px | 150px | 60% | Thumbnails |
| small | 300px | 300px | 70% | Product lists |
| medium | 500px | 500px | 80% | Product cards |
| large | 800px | 800px | 90% | Product details |
| original | - | - | - | Full quality |

### Manual URL Transformation

Cloudinary URLs from the backend can be manually transformed:

```
Original:  https://res.cloudinary.com/cloud/image/upload/...

// Resize to 400x400
https://res.cloudinary.com/cloud/image/upload/w_400,h_400/...

// Quality 80
https://res.cloudinary.com/cloud/image/upload/q_80/...

// Auto format (WebP on supported browsers)
https://res.cloudinary.com/cloud/image/upload/f_auto/...

// Combined
https://res.cloudinary.com/cloud/image/upload/w_400,h_400,q_80,f_auto/...
```

## Error Handling

### Image Failure Fallback

If a Cloudinary image fails to load, it automatically falls back to:
- `product.imageUrl` → **Cloudinary URL**
- Retry logic → **Placeholder image** (`/product-placeholder.jpg`)

### Loading States

All image components show:
- Skeleton/pulse animation while loading
- Loading text indicator
- Smooth transition once loaded

### API Error Handling

- Connection errors → Display error message
- Invalid products → Show "Product not found"
- 401 Unauthorized → Clear token and redirect to login

## Troubleshooting

### Images Not Loading

**Problem:** Images show placeholder instead of Cloudinary URLs

**Solutions:**
1. Check backend is running on port 3001
2. Verify NEXT_PUBLIC_API_URL in .env matches backend port
3. Check browser Network tab for failed image requests
4. Verify products have imageUrl in database

### Cloudinary URLs Not Valid

**Problem:** 404 errors on Cloudinary URLs

**Solutions:**
1. Verify images were uploaded with correct Cloudinary credentials
2. Check Cloudinary cloud name in backend .env
3. Check image public_id is correct in database
4. Verify Cloudinary account is active

### Optimization Not Working

**Problem:** Images seem unoptimized or slow

**Solutions:**
1. Check Next.js Image component is being used (not `<img>`)
2. Verify next.config.js has remotePatterns configured
3. Check browser DevTools for image dimensions
4. Clear .next cache and rebuild

## Performance Tips

1. **Use appropriate size for each component:**
   - Thumbnails: Use `thumbnail` size
   - Product cards: Use `medium` size
   - Product details: Use `large` size

2. **Enable lazy loading for below-fold images:**
   ```tsx
   <Image
     src={url}
     alt="..."
     loading="lazy"  // For non-critical images
   />
   ```

3. **Use dynamic imports for heavy components:**
   ```tsx
   import dynamic from 'next/dynamic';
   const HeavyComponent = dynamic(() => import('./HeavyComponent'));
   ```

## Testing

### Test Product Image Display

1. **Shop Page:**
   - Navigate to `/shop`
   - Verify all products display with images
   - Check images are optimized (~300KB for medium size)

2. **Product Detail:**
   - Click on a product
   - Large image should load with high quality
   - Related products should show below

3. **Image Optimization:**
   - Open DevTools Network tab
   - Check image file sizes
   - WebP format should be used on supported browsers

## Next Steps

### Frontend Enhancements

1. **Image Gallery/Lightbox:**
   - Add multiple images per product
   - Implement lightbox preview

2. **Responsive Images:**
   - Different sizes for mobile/tablet/desktop
   - Use srcSet for optimization

3. **Image Lazy Loading:**
   - Defer loading for below-fold images
   - Implement intersection observer

4. **Caching:**
   - Enable HTTP caching for Cloudinary images
   - Service worker for offline support

## Resources

- [Next.js Image Component Documentation](https://nextjs.org/docs/api-reference/next/image)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Cloudinary Transformations](https://cloudinary.com/documentation/image_transformation_reference)
- [Frontend API Utilities](./src/utils/api.ts)
- [Product Service](./src/services/productService.ts)
