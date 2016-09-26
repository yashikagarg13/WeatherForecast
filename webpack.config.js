const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + "/app/index.html",
	filename: "index.html",
	inject: "body",
}); 
const path = require('path');

const config = {
	entry: [
		"./app/index.js"
	],
	output: {
		path: __dirname + "/dist",
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, include: path.resolve(__dirname, "app"), loader: "babel-loader"},
		]
	},
	plugins: [HTMLWebpackPluginConfig],
}

module.exports = config;