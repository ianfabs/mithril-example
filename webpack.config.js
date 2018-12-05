const path = require('path')

module.exports = ()=> {return {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './bin'),
        filename: 'app.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000
      }
}};