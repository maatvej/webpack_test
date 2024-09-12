const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js'
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWWebpackPlugin({
        template: './src/index.pug',
        filename: 'index.html'}

      ),

    ],
    
    module: {
    rules: [
        { test: /\.css$/,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
              },
            },
            'css-loader',
      ], },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
          pretty: true
          }
        },
    ]
  }
};