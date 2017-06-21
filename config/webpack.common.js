var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var helpers = require('./helpers')

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor':'./src/vendor.ts',
		'app': './src/main.ts',
	},
	output: {
		filename: '[name].js'
	},

	module: {
		rules: [
			{	
				test: /\.ts$/,
				use:  [
					{	
						loader: 'awesome-typescript-loader',
						options: { configFileName: helpers.root('src', 'tsconfig.json') } 		
					},
					'angular2-template-loader'
				]
				 
			},
			{ test: /\.html$/, use: 'html-loader'},
			{	
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
			 	use: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			{ 	
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
			},
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				use: 'raw-loader'
			}
		]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			helpers.root('./src'),
			{}
		),
		new webpack.optimize.CommonsChunkPlugin({
			name: [ 'app', 'vendor', 'polyfills' ]
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
	resolve: {
		extensions: [ '.ts' , '.js' ]
	},
	
} 
