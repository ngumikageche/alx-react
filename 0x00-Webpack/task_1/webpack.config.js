const path = require('path');

module.exports = {
  mode: 'production', // Set Webpack mode to production
  entry: './src/dashboard_main.js', // Adjust the path to your JavaScript entry file
  output: {
    filename: 'bundle.js', // Name the JavaScript bundle as 'bundle.js'
    path: path.resolve(__dirname, 'public'), // Output to the 'public' folder
  },
};
