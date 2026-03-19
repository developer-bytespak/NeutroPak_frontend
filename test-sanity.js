const query = '*[_type == "post"] [0] { _id, title, mainImage, "mainImageFull": mainImage }';
const url = 'https://pjldabm4.api.sanity.io/v2021-06-07/data/query/product?query=' + encodeURIComponent(query);
console.log('Fetching from:', url);

fetch(url)
  .then(r => r.json())
  .then(d => {
    console.log('Full response:', JSON.stringify(d, null, 2));
    if (d.result && d.result[0]) {
      console.log('\nFirst blog mainImage:', JSON.stringify(d.result[0].mainImage, null, 2));
      console.log('Asset structure:', JSON.stringify(d.result[0].mainImage?.asset, null, 2));
    }
  })
  .catch(e => console.error('Error:', e));
