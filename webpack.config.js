const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {

   mode: 'production',
   entry: {

      filename: path.resolve(__dirname, 'src/index.js')

   },

   output: {

      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js'

   },

   devServer: {

      port: 9000,
      compress: true,
      hot: true,
      static: {
         directory: path.join(__dirname, 'dist')
      }
   },

   module: {

      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         }
      ]
   },

   plugins: [
      new htmlWebpackPlugin({
         title: 'Snake',
         filename: 'index.html',
         template: 'src/html/snake.html'
      })
   ]


}