import axios  from 'axios';

const options = {
  method: 'GET',
  url: 'https://maps.googleapis.com/maps/api/place/photo',
  params: {
    photo_reference: 'ATJ83zhSSAtkh5LTozXMhBghqubeOxnZWUV2m7Hv2tQaIzKQJgvZk9yCaEjBW0r0Zx1oJ9RF1G7oeM34sQQMOv8s2zA0sgGBiyBgvdyMxeVByRgHUXmv-rkJ2wyvNv17jyTSySm_-_6R2B0v4eKX257HOxvXlx_TSwp2NrICKrZM2d5d2P4q',
    maxwidth: 400, // Specify width, can also use maxheight
    key: 'YOUR_GOOGLE_MAPS_API_KEY' // Use your Google API key
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

