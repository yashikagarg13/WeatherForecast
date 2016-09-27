const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin  = require("extract-text-webpack-plugin");
const path = require('path');


const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + "/app/index.html",
	filename: "index.html",
	inject: "body",
}); 


const config = {
	devTool: ["source-map"],
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
			{test: /\.css$/, loader: "style-loader!css-loader"},
     		{test: /\.svg$/, loaders: ["url?limit=8192&name=[name].[ext]"]},
		]
	},
	plugins: [HTMLWebpackPluginConfig, new ExtractTextPlugin(__dirname + "/app/styles/main.css")],
}

module.exports = config;