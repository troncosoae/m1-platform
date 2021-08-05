const koa = require('koa')
const render = require('koa-ejs')
const serve = require('koa-static')
const path = require('path')

const router = require('./router.js')

koaApp = new koa()

const PORT = process.env.PORT || 3000;

render(koaApp, {
	root: path.join(__dirname, 'views'),
	viewExt: '',
	layout: 'layout.ejs'
})

koaApp.use(router.routes())
koaApp.use(serve('.'))
koaApp.use(serve(__dirname + '/views'))

const app = new Object()

app.start = async function () {
	console.log('Starting app...')
	this.server = await koaApp.listen(PORT)
	console.log(`Listening to PORT ${PORT}...`)
	// console.log(this)
}

module.exports = app
