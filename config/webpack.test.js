var webpack = require('webpack')
var helpers = require('./helpers')

module.exports = {
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['ts', 'js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					{
						loader: 'awesome-typescript-loader',
						options: { configFileName: helpers.root('src', 'tsconfig.json') }
					},
					'angular2-template-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'null-loader',
			},
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app')
			},
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw-loader'
			}
		]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			helpers.root('./src'),
			{}
		)
	]
}