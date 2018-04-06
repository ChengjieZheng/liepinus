const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// webpack配置导入与合并
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

// 查看运行环境
const isDev = process.env.NODE_ENV === 'development'
// 使用webpackMerge组合baseConfig和现有的配置
const config = webpackMerge(baseConfig, {
	// 入口文件指定
	entry: {
		app: path.join(__dirname, '../client/app.js')
	},
	// 出口文件指定
	output: {
		filename: '[name].[hash].js',
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		// 自动整合上面的东西并生成html
		new HTMLPlugin({
			template: path.join(__dirname, '../client/template.html')
		}),
		new HTMLPlugin({
			template: '!!ejs-compiled-loader!' + path.join(__dirname, '../client/server.template.ejs'),
			filename: 'server.ejs'
		})
	]
})
if (isDev) {
	// 这是webpack dev tool的选项，它能够形成source map 让我们浏览器端，调试时，实际调试的是没有编译过的代码，可以快速找到问题所在
	config.devtool = "#cheap-module-eval-source-map"
	// app中的数组代表一个entry包含了很多引用的文件，会打包到一个文件里去
	// 使用hot-module-replacement热更新需要用的内容配置
	config.entry = {
		app: [
			'react-hot-loader/patch',
			path.join(__dirname, '../client/app.js')
		]
	}
	config.devServer = {
		host: '0.0.0.0',
		port: '8888',
		// 静态文件的地址
		// contentBase: path.join(__dirname, '../dist'),
		// 启动hot module replacement, 当前并没有在React中配置hot module replacement的相关的模块，因为hot module replacement会在JS中注入部分代码
		hot: true,
		// webpack编译过程中，如果出现错误，则在网页显示黑色背景的错误信息
		overlay: {
			// 只有错误信息，不显示warning
			errors: true
		},
		// 对应webpacl的路径设置
		publicPath: '/public/',
		// 配置了对应关系，由于是单页应用开发，所有请求的url无法返回的，即404的，都应该返回这个html
		historyApiFallback: {
			index: '/public/index.html'
		},
		proxy: {
			'/api': 'http://localhost:2333'
		}
	}
	config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config
