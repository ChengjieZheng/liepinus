const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge(baseConfig, {
	// 指定使用执行环境
	target: 'node',
	// 入口文件指定
	entry: {
		app: path.join(__dirname, '../client/server-entry.js')
	},
	//指定的某一些包不打包到输出的JS里
	externals: Object.keys(require('../package.json').dependencies),
	//出口文件指定
	output: {
		filename: 'server-entry.js',
		// 模块加载方案
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
})
