let minCss = require('mini-css-extract-plugin')
let htmlPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/public/js/main.js',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
          {
            loader: minCss.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader'
        ]
			},
		]
	},
	plugins: [
    new minCss({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
		}),
		new htmlPlugin({  // Also generate a test.html
      template: './src/public/index.html'
    })
	],
}