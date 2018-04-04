const path = require('path')
//客户端的webpack启动时获得的tamplate，由于webpack-dev-server开发时,tamplate其实是不写到硬盘上的，我们没有办法读取该文件。所以使用http请求的方式去webpack-dev-server启动的服务里读取文件
//使用axios获取
const axios = require('axios')
const webpack = require('webpack')
//从内存中读写文件内容
const MemoryFS = require('memory-fs')
//http代理中间件
const proxy = require('http-proxy-middleware')

const serverRender = require('./server-render')

// const serialize = require('serialize-javascript')
// const ejs = require('ejs')
// //数据相关
// const asyncBootstrap = require('react-async-bootstrapper').default
// const ReactDomServer = require('react-dom/server')
// const Helmet = require('react-helmet').default

//获取server端的bundle文件，因为Server端的bundle文件是通过webpack.server这个配置文件去启动webpack之后，才能拿到bundle，而且我们修改了任何client下面所有的文件，都是会需要去实时的更新我们的bundle的内容
//通过webpack打包的内容获取结果
const serverConfig = require('../../build/webpack.config.server')
//通过webpack-dev-server拿到实时最新的template文件
const getTemplate = () => {
	return new Promise((resolve, reject) => {
		axios.get('http://localhost:8888/public/server.ejs')
		.then(res => {
			resolve(res.data)
		})
		.catch(reject => {
			console.error(reject)
		})
	})
}
//用构造方法创建新的module用于string内容转换
// const Module = module.constructor

//由于在服务端打包时，没有包含modules，所以需要用另一种方法获取modules，这个方法也比较hack
//
const NativeModule = require('module')
const vm = require('vm')

const getModuleFromString = (bundle, filename) => {
	const m = { exports: {} }
	// NativeModule里有个wrap方法，可以把可执行的JS代码包装一下
	// 包装成类似于如下代码：`(function(exports, require, module, __filename, __dirname){ 这里是真正传进去的bundle要执行的代码：...bundle code })`
	// 当如此包装之后的效果为：可以手动传入exports，这个exports就是我们代码在执行是的module.exports是一样的效果
	// 括号内的参数对应的都是执行环境内的export, require, module, 这样我们就能传入这些定制的参数。
	// 最后会形成字符串
	// 为了要执行js字符串的代码，可使用vm里的script类，就能跑这部分JS代码，并能指定context,即执行环境。由于没有特殊的执行环境的要求，所以只要使用runInThisContext方法即可，无需指定其他执行环境
	// 执行环境的意义是：在我们这段{}代码中，如果我们会调用一些全局变量，如process.env.NODE_ENV。其中process就是全局对象，就是执行环境的上下文。我们无需指定特殊的context，使用当前的即可
	// const result = script.runInThisContext()即可执行，执行时可以让他指定m.export作为调用者，去掉用result代码，并一一对应上面所提到的参数（exports, require等等），其中module也就是我们的m
	// 通过这种方式，实际执行我们代码中的...bundle code，执行完成后把m.exports都附着在m对象上，这样就能拿到我们想要的东西了（解决了react module找不到的问题）
	// 如何解决了react module找不到的问题？我们的require是我们传进去的当前环境中的require，他当然是可以require我们node_modules里面的代码
	// 这就是拿到一个string代码，然后如何去调用的方式，这个方式很常规，不会有问题
	const wrapper = NativeModule.wrap(bundle)
	const script = new vm.Script(wrapper, {
		filename: filename,
		displayErrors: true,
	})
	const result = script.runInThisContext()
	result.call(m.exports, m.exports, require, m)
	return m
}

const mfs = new MemoryFS
//监听entry下面依赖的文件是否有变化，一旦有变化会重新去打包
const serverCompiler = webpack(serverConfig)
//此前通过FS读写的文件，现在都通过mfs读写，速度超级快，哈哈，毕竟是内存，不是硬盘
serverCompiler.outputFileSystem = mfs
// let serverBundle, createStoreMap
let serverBundle
serverCompiler.watch({}, (err, stats) => {
    if (err) throw err
    //stats是webpack打包时所输出的信息
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(warn => console.warn(warn))
    //读取server bundle信息
    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    )

    const bundle = mfs.readFileSync(bundlePath, 'utf-8')//注意是string内容，不是模块内容，需要转换
    // const m = new Module()
    // //用module解析String的内容，会生成一个新的模块
		// m._compile(bundle, 'server-entry.js')
		const m = getModuleFromString(bundle, 'server-entry.js')
		serverBundle = m.exports
		// serverBundle = m.exports.default
		// createStoreMap = m.exports.createStoreMap
})

// const getSotreState = (stores) => {
// 	return Object.keys(stores).reduce((result, storeName) => {
// 		result[storeName] = stores[storeName].toJson()
// 		return result
// 	}, {})
// }

module.exports = function (app) {

    app.use('/public', proxy({
        target: 'http://localhost:8888'
    }))
    //获取template
		app.get('*', (req, res, next) => {
			// 判断server bundle是否存在，如果不存在，服务端渲染会报错，所以加入如下代码：
			// 此问题在开发时会出现
			if (!serverBundle) {
				return res.send('Waiting for compile, refresh later')
			}
        //返回服务端渲染完成之后的结果返回给浏览器端
        getTemplate().then(template => {

					// const routerContext = {}
					// const stores = createStoreMap()
					// const app = serverBundle(stores, routerContext, req.url)

					// asyncBootstrap(app)
					// .then(() => {
					// 	if (routerContext.url) {
					// 		res.status(302).setHeader('Location', routerContext.url)
					// 		res.end()
					// 		return
					// 	}
					// 	// 拿到当前页面显示的title, description等等head信息
					// 	const helmet = Helmet.rewind()
					// 	// console.log(stores.appState.count)
					// 	const state = getSotreState(stores)
					// 	const content = ReactDomServer.renderToString(app)
					// 	// res.send(template.replace('<!-- app -->', content))
					// 	// console.log(state);
					// 	const html = ejs.render(template, {
					// 		appString: content,
					// 		initialState: serialize(state),
					// 		meta: helmet.meta.toString(),
					// 		title: helmet.title.toString(),
					// 		style: helmet.style.toString(),
					// 		link: helmet.link.toString()
					// 	})
					// 	res.send(html)
					// })
					//会返回promiss
					return serverRender(serverBundle, template, req, res)
				})
				.catch(next)
    })
}
