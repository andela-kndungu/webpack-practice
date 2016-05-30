module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: './bin',
    filename: 'index.bundle.js'
  }
  module:{
    loaders:[{
      test: /\.js$/,
      include: './src/',
      loader: 'babel-loader'
    }]
  }
};
