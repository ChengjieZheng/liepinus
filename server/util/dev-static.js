const path = require('path')
//客户端的webpack启动时获得的tamplate，由于webpack-dev-server开发时,tamplate其实是不写到硬盘上的，我们没有办法读取该文件。所以使用http请求的方式去webpack-dev-server启动的服务里读取文件
//使用axios获取
const axios = require('axios')
const webpack = require('webpack')
//从内存中读写文件内容
const MemoryFS = require('memory-fs')
//http代理中间件
const proxy = require('http-proxy-middleware')
const serialize = require('serialize-javascript')
const ejs = require('ejs')
//数据相关
const asyncBootstrap = require('react-async-bootstrapper').default
const ReactDomServer = require('react-dom/server')
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
const Module = module.constructor
const mfs = new MemoryFS
//监听entry下面依赖的文件是否有变化，一旦有变化会重新去打包
const serverCompiler = webpack(serverConfig)
//此前通过FS读写的文件，现在都通过mfs读写，速度超级快，哈哈，毕竟是内存，不是硬盘
serverCompiler.outputFileSystem = mfs
let serverBundle, createStoreMap
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
    const m = new Module()
    //用module解析String的内容，会生成一个新的模块
    m._compile(bundle, 'server-entry.js')
		serverBundle = m.exports.default
		createStoreMap = m.exports.createStoreMap
})

const getSotreState = (stores) => {
	return Object.keys(stores).reduce((result, storeName) => {
		result[storeName] = stores[storeName].toJson()
		return result
	}, {})
}

module.exports = function (app) {

    app.use('/public', proxy({
        target: 'http://localhost:8888'
    }))
    //获取template
    app.get('*', (req, res) => {
        //返回服务端渲染完成之后的结果返回给浏览器端
        getTemplate().then(template => {

					const routerContext = {}
					const stores = createStoreMap()
					const app = serverBundle(stores, routerContext, req.url)

					asyncBootstrap(app)
					.then(() => {
						if (routerContext.url) {
							res.status(302).setHeader('Location', routerContext.url)
							res.end()
							return
						}
						// console.log(stores.appState.count)
						const state = getSotreState(stores)
						const content = ReactDomServer.renderToString(app)
						// res.send(template.replace('<!-- app -->', content))
						console.log(state);
						const html = ejs.render(template, {
							appString: content,
							initialState: serialize(state),
						})
						res.send(html)
					})
        })
    })
}
