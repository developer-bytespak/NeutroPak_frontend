const assetRef = "image-3d61b9e55625c3403ce092b122ea2879bbc0b623-1536x1024-png";
const projectId = "pjldabm4";
const dataset = "product";

const refWithoutPrefix = assetRef.replace('image-', '');
const assetId = refWithoutPrefix.split('-')[0];

const cdnUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}`;
console.log('CDN URL:', cdnUrl);

// Test with GET to see the error
fetch(cdnUrl)
  .then(r => r.text())
  .then(text => {
    console.log('Response (400 error):', text);
  })
  .catch(e => console.error('Error:', e));
