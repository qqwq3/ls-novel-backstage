
// 引入path
var path = require('path');
// 分离css
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 生成html
var HtmlPlugin = require('html-webpack-plugin');
// 清除旧文件
// var CleanPlugin = require('clean-webpack-plugin');
// 引入webpack
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map', // 定位错误位置
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: __dirname + '/dist',
        publicPath: "/",
        filename: "[name].[hash:8].js"
    },
    resolve: {
        extensions: ['.js', '.es6.js' , '.jsx' , '.json']
    },
    plugins:[
        new HtmlPlugin({
            template: 'src/index.html',
            minify: true,
            hash: false
        }),
        //new ExtractTextPlugin('css/[name].[hash].css'),
        new webpack.HotModuleReplacementPlugin() // 热加载插件
    ],
    module:{
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                localIdentName: '[local].[hash:base64:5]'}
                        },
                        {
                            loader: "postcss-loader"
                        },
                        {
                            loader: 'stylus-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader:'url-loader',
                    options:{
                        limit: 100000,
                        name:'fonts/[name]-[hash:6].[ext]',
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 800,
                        outputPath: '/images/',
                    }
                }]
            }
        ]
    },
    devServer:{
        contentBase: './',
        // 服务端压缩是否开启
        compress: true,
        // 配置服务端口号
        port: 3000,
        // 实时刷新
        inline: true,
        // 设置启动项目
        open: 'http://127.0.0.1:3000/login',
        // 任意的 404 响应可以提供为 index.html 页面
        historyApiFallback: true,
        //服务器的IP地址，
        // host: '0.0.0.0',
        disableHostCheck: true,
        hot: true
    }
};







