const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const {resolve} = require('path')

const isProd = process.env.NODE_ENV === 'production'

console.log(process.env.NODE_ENV , 'process.env.NODE_ENV ')
// function resolve(dir) {
//     return path.resolve(__dirname, '..', dir)
// }

module.exports = {

    mode: isProd ? 'production' : 'development',
    entry: {
        app: './src/main.ts'
    },
    output: {
        // path: resolve(__dirname, '../dist'),
        filename: '[name].[contenthash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: [resolve('src')]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}