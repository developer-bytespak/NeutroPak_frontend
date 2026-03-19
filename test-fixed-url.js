// Test the corrected URL building logic
const assetRef = "image-3d61b9e55625c3403ce092b122ea2879bbc0b623-1536x1024-png";
const projectId = "pjldabm4";
const dataset = "product";

// Remove 'image-' prefix
const refWithoutPrefix = assetRef.replace('image-', '');
console.log('1. Remove image- prefix:', refWithoutPrefix);

// Replace last '-' with '.'
const urlPath = refWithoutPrefix.replace(/-([a-z]+)$/, '.$1');
console.log('2. Replace last dash with dot:', urlPath);

// Build URL
const url = `https://cdn.sanity.io/images/${projectId}/${dataset}/${urlPath}`;
console.log('3. Final URL:', url);

// Expected from Sanity API
const expectedUrl = 'https://cdn.sanity.io/images/pjldabm4/product/3d61b9e55625c3403ce092b122ea2879bbc0b623-1536x1024.png';
console.log('\nExpected URL:', expectedUrl);
console.log('Match:', url === expectedUrl ? '✅' : '❌');

// Test if it works
fetch(url, { method: 'HEAD' })
  .then(r => {
    console.log('\n✅ Image URL works! Status:', r.status);
  })
  .catch(e => console.error('❌ Error:', e.message));
