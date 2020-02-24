const minCss = require ('mini-css-extract-plugin')
const htmlPlugin = require ('html-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: minCss.loader,
                        options: {
                            publicPath: '../',
                            hmr: devMode,
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
          })
    ]
}