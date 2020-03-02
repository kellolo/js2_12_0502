let minCss = require ('mini-css-extract-plugin')
let htmlPlugin = require ('html-webpack-plugin')
let vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        proxy: {
            '/api':{
                target: 'http://localhost:8080/',
                pathRewrite: {'^/api': ''},
                secure: false,
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: minCss.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'production',
                        },
                    },
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new minCss ({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, 
        }),
        new htmlPlugin({
            template: './src/public/index.html'
        }),
        new vueLoaderPlugin()
    ]
}
