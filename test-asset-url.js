// Try fetching the asset with expansion to get the actual URL from Sanity
const query = '*[_type == "post"] [0] { mainImage { asset->{ url } } }';
const url = 'https://pjldabm4.api.sanity.io/v2021-06-07/data/query/product?query=' + encodeURIComponent(query);
console.log('Querying for asset.url...\n');

fetch(url)
  .then(r => r.json())
  .then(d => {
    console.log('Response:', JSON.stringify(d.result, null, 2));
    if (d.result && d.result.mainImage) {
      console.log('\n✅ Asset URL from Sanity directly:', d.result.mainImage.asset?.url);
    }
  })
  .catch(e => console.error('Error:', e));
