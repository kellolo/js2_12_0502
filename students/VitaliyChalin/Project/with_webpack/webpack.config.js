let minCss = require ('mini-css-extract-plugin');
let htmlPlugin = require ('html-webpack-plugin');

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
	      chunkFilename: 'css/[id].css',
	      ignoreOrder: false,
	    }),
	    new htmlPlugin({
	    	template: './src/public/index.html'
	    })
	]
}