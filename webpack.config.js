// const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
  context:__dirname,
  entry:'./src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    {
        // For pure CSS (without CSS modules)
        test: /\.s[ac]ss$/i,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }],
      },
    ]
  },
  output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'dist' )
  },
  devServer: {
        historyApiFallback: true,
        contentBase:path.resolve( __dirname, 'dist' )
  },
//   plugins: [
//     new HtmlWebPackPlugin()
//  ]
};
