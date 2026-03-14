const fs = require('fs');

try {
  fs.copyFileSync("C:\\Users\\Allen\\.gemini\\antigravity\\brain\\add53b98-61d2-4776-b684-91908fdbc936\\global_reach_map_v2_1773411260279.png", "d:\\my study\\Project\\Sushant\\Dongar-To-Darya-\\public\\images\\global_map_v2.png");
  console.log('Successfully copied map image');
} catch (e) {
  console.error('Error copying file:', e);
}
