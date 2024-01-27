const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	entry: {
		'frontend': path.resolve(__dirname, './src/frontend.ts'),
		'backend': path.resolve(__dirname, './src/backend.ts'),
		'print': path.resolve(__dirname, './src/print.ts'),
	},
	plugins: [],
	resolve: {
        extensions: ['.ts', '.js']
    },
	module: {
		rules: [
			{
                test: /\.ts$/, 
                use: 'ts-loader',
                exclude: /node_modules/
            },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				type: "asset/resource",
				generator: {
					filename: 'media/[name][ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				type: "asset/resource",
				generator: {
					filename: 'webfont/[name][ext]',
				},
			}
		]
	},
};
