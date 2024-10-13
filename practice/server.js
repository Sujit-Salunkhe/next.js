// import axios  from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://maps.googleapis.com/maps/api/place/photo',
//   params: {
//     photo_reference: 'ATJ83zhSSAtkh5LTozXMhBghqubeOxnZWUV2m7Hv2tQaIzKQJgvZk9yCaEjBW0r0Zx1oJ9RF1G7oeM34sQQMOv8s2zA0sgGBiyBgvdyMxeVByRgHUXmv-rkJ2wyvNv17jyTSySm_-_6R2B0v4eKX257HOxvXlx_TSwp2NrICKrZM2d5d2P4q',
//     maxwidth: 400, // Specify width, can also use maxheight
//     key: 'YOUR_GOOGLE_MAPS_API_KEY' // Use your Google API key
//   }
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

// const options = {
//   method: 'GET',
//   url: 'https://google-map-places.p.rapidapi.com/maps/api/place/photo',
//   params: {
//     photo_reference: 'ATJ83zhSSAtkh5LTozXMhBghqubeOxnZWUV2m7Hv2tQaIzKQJgvZk9yCaEjBW0r0Zx1oJ9RF1G7oeM34sQQMOv8s2zA0sgGBiyBgvdyMxeVByRgHUXmv-rkJ2wyvNv17jyTSySm_-_6R2B0v4eKX257HOxvXlx_TSwp2NrICKrZM2d5d2P4q',
//     maxwidth: 400
//   },
//   headers: {
//     'x-rapidapi-key': '2647de9878msha440c3f6fc552bfp1b2741jsnd6e87afd29e0',
//     'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
//     'Accept': 'image/jpeg'
//   }
// };

// try {
//   const response = await axios.request(options);

//   // If it's HTML, convert the buffer to a string and print it
//   const responseText = response.data.toString('utf-8');
//   console.log(responseText);

// } catch (error) {
//   console.error(error.response ? error.response.data : error.message);
// }
// const photoOptions = {
//   method: 'GET',
//   url: 'https://google-map-places.p.rapidapi.com/maps/api/place/photo',
//   params: {
//     photo_reference: 'YOUR_PHOTO_REFERENCE', // Use the photo_reference obtained earlier
//     maxwidth: 400 // Specify width or height
//   },
//   headers: {
//     'x-rapidapi-key': '2647de9878msha440c3f6fc552bfp1b2741jsnd6e87afd29e0',
//     'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
//     'Accept': 'image/jpeg' // Request image format
//   },
//   responseType: 'arraybuffer' // Handle binary data
// };

// try {
//   const photoResponse = await axios.request(photoOptions);
//   // Convert the image response to base64 for display or saving
//   const imageBuffer = Buffer.from(photoResponse.data, 'binary').toString('base64');
//   console.log("data:image/jpeg;base64," + imageBuffer); // Base64 string for use in an <img> tag
// } catch (error) {
//   console.error(error.response ? error.response.data : error.message);
// }

// try {
//   const response = await axios.request(photoOptions);
  
//   // Check if the response is in HTML
//   if (typeof response.data === 'string' && response.data.includes('<html')) {
//     console.error("Received HTML instead of image:", response.data);
//   } else {
//     // Convert the image response to base64 for display, if it's an image
//     const imageBuffer = Buffer.from(response.data, 'binary').toString('base64');
//     console.log("data:image/jpeg;base64," + imageBuffer);
//   }

// } catch (error) {
//   console.error(error.response ? error.response.data : error.message);
// }




