const serialize = require('serialize-javascript')
const ejs = require('ejs')
//数据相关
const asyncBootstrap = require('react-async-bootstrapper').default
const ReactDomServer = require('react-dom/server')
const Helmet = require('react-helmet').default

const getSotreState = (stores) => {
	return Object.keys(stores).reduce((result, storeName) => {
		result[storeName] = stores[storeName].toJson()
		return result
	}, {})
}

// 由于需要进行服务端渲染，所以需要引入bundle
// 需要template把我们的html内容渲染进去
// 需要req和res来获取我们的请求信息以及发送我们的内容
module.exports = (bundle, template, req, res) => {
	return new Promise((resolve, reject) => {
		const createStoreMap = bundle.createStoreMap
		const createApp = bundle.default

		const routerContext = {}
		const stores = createStoreMap()
		const app = createApp(stores, routerContext, req.url)

		asyncBootstrap(app)
		.then(() => {
			if (routerContext.url) {
				res.status(302).setHeader('Location', routerContext.url)
				res.end()
				return
			}
			// 拿到当前页面显示的title, description等等head信息
			const helmet = Helmet.rewind()
			// console.log(stores.appState.count)
			const state = getSotreState(stores)
			const content = ReactDomServer.renderToString(app)
			// res.send(template.replace('<!-- app -->', content))
			// console.log(state);
			const html = ejs.render(template, {
				appString: content,
				initialState: serialize(state),
				meta: helmet.meta.toString(),
				title: helmet.title.toString(),
				style: helmet.style.toString(),
				link: helmet.link.toString()
			})
		res.send(html)
		resolve()
		})
		.catch(reject)
	})
}
