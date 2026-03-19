// Test if the CDN URL works
const assetRef = "image-3d61b9e55625c3403ce092b122ea2879bbc0b623-1536x1024-png";
const projectId = "pjldabm4";
const dataset = "product";

// Extract asset ID
const refWithoutPrefix = assetRef.replace('image-', '');
const assetId = refWithoutPrefix.split('-')[0];

const cdnUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}`;
console.log('Asset Ref:', assetRef);
console.log('Extracted Asset ID:', assetId);
console.log('CDN URL:', cdnUrl);

// Test if the URL works
fetch(cdnUrl, { method: 'HEAD' })
  .then(r => {
    console.log('✅ Image URL works! Status:', r.status);
    console.log('Content-Type:', r.headers.get('content-type'));
    console.log('Content-Length:', r.headers.get('content-length'));
  })
  .catch(e => console.error('❌ Image URL failed:', e.message));
