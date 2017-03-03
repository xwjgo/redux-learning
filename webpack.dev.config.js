const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

// dev
module.exports = {
    devtool: 'cheap-eval-source-map',   // 不需要uglify也可以使用sourceMap
    entry: {
        app: ['./index.js', HotMiddlewareScript],
        vendor: ['react', 'react-dom', 'redux', 'react-redux', HotMiddlewareScript]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/assets/', // 服务器server地址（虚拟的，可以不存在）以引用静态资源的html的视角来看，output.path的url
        chunkFilename: '[id].[name].chunk.js'  // 按需加载的脚本名称
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
        }),
        new webpack.HotModuleReplacementPlugin()   // 热加载插件
    ]
};