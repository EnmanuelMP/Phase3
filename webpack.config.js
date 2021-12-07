var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.jsx'),
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			}
        ]
    },
	devServer: {
		static: {
		  directory: path.join(__dirname, './'),
		},
		compress: true,
		port: 9000,
	  },
}