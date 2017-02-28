const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// dev
module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
        app: './index.js',
        vendor: ['react', 'react-dom', 'redux', 'react-redux']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: './public/', // 以引用静态资源的html的视角来看，output.path的url
        chunkFilename: '[id].chunk.js'  // 按需加载的脚本名称
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['syntax-dynamic-import']
                }
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        })
    ]
};