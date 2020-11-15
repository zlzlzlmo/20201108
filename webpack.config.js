const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //src까지만 적어줘도 index.js를 알아서 찾아감
  entry: path.resolve(__dirname, './src'), //어떤 파일을 기준으로 할 것인가?
  output: {
    //빌드된 결과물을 어디로 내보낼지?
    filename: 'bundle.[hash].js', //빌드 될때마다 특정한 hash값을 만들어서 유니크 ㅂ부여
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    //안에서 .js를 생략할수있게 도와주는거
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
}
