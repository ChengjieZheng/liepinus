const path = require('path')

module.exports = {
	output: {
		path: path.join(__dirname, '../dist'),
		publicPath: '/public/',
	},
	module: {
		//规则1：所有jsx使用babel打包执行
		//规则2：所有js使用babel打包，并不包含node_modules目录
		rules: [
			{
				enforce: 'pre',
				test: /.(js|jsx)$/,
				loader: 'eslint-loader',
				exclude: [
					path.resolve(__dirname, '../node_modules')
				]
			},
			{
				test: /.jsx$/,
				loader: 'babel-loader'
			},
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_modules')
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
}
