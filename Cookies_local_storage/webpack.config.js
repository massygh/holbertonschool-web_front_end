const path = require('path');

module.exports = {
  entry: './src/index.js', // Ne touche pas à ce fichier, il reste vide
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    port: 8080,
    open: true,
  },
};
