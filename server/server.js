// 正式环境
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const session = require('express-session')
// const ReactSSR = require('react-dom/server')
const serverRender = require('./util/server-render')

const fs = require('fs')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const app  = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
	maxAge: 10 * 60 * 1000,
	name: 'tid',
	resave: false,
	saveUninitialized: false,
	secret: 'react cnode class'
}))
//handle icon
app.use(favicon(path.join(__dirname, '../favicon.ico')))
//example for cnodejs.org
app.use('/api/user', require('./util/handle-login'))
app.use('/api', require('./util/proxy'))

if (!isDev) {
	const serverEntry = require('../dist/server-entry')
	const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8')
	app.use('/public', express.static(path.join(__dirname, '../dist')))
	app.get("*", (req, res, next) => {
		// const appString = ReactSSR.renderToString(serverEntry)
		// res.send(template.replace('<!-- app -->', appString))
		serverRender(serverEntry, template, req, res).catch(next)
	})
} else {
	const devStatic = require('./util/dev-static')
	devStatic(app)
}

// 处理error的中间件
// req, res, next虽然在error处理中是用不到的，但是还是要把这3个参数传递进来。因为Express回去读取参数的长度来判断这个到底是不是一个error handler
// 如果是，就会使用error hendler的处理方式来处理中间件
	app.use(function(error, req, res, next) {
		console.log(error)
		res.status(500).send(error)
	})

app.listen(2333, ()=>{
	console.log('server is listening on 2333')
})
