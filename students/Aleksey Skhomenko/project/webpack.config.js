const minCss = require ('mini-css-extract-plugin')
const htmlPlugin = require ('html-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    module: {
        rules: [
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