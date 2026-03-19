const assetRef = "image-3d61b9e55625c3403ce092b122ea2879bbc0b623-1536x1024-png";
const projectId = "pjldabm4";
const dataset = "product";

const refWithoutPrefix = assetRef.replace('image-', '');  // "3d61b9e55625c3403ce092b122ea2879bbc0b623-1536x1024-png"
console.log('Ref without prefix:', refWithoutPrefix);

// Try different URL formats
const formats = [
  // Format 1: Just the ref without the "image-" prefix
  `https://cdn.sanity.io/images/${projectId}/${dataset}/${refWithoutPrefix}`,
  
  // Format 2: Full ref with image- prefix
  `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetRef}`,
  
  // Format 3: Just ID with format extracted from ref
  () => {
    const parts = refWithoutPrefix.split('-');
    const idWithFormat = parts[0] + '.' + parts[parts.length - 1];
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${idWithFormat}`;
  },
];

console.log('\nTesting URL formats:\n');

Promise.all([
  fetch(formats[0]).then(r => ({ url: formats[0], status: r.status })),
  fetch(formats[1]).then(r => ({ url: formats[1], status: r.status })),
  fetch(formats[2]()).then(r => ({ url: formats[2](), status: r.status })),
])
.then(results => {
  results.forEach(r => console.log(`${r.status === 200 ? '✅' : '❌'} ${r.url}`));
})
.catch(e => console.error('Error:', e));
