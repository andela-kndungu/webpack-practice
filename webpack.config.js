module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: './bin',
    filename: 'index.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: './src/',
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
      },
    }],
  },
};
