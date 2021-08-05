const koa = require('koa')
const render = require('koa-ejs')
const path = require('path')

const router = require('./router.js')

koaApp = new koa()

const PORT = 3000;

render(koaApp, {
	root: path.join(__dirname, 'views'),
	viewExt: '',
	layout: false
})

koaApp.use(router.routes())

const app = new Object()

app.start = async function () {
	console.log('Starting app...')
	this.server = await koaApp.listen(PORT)
	console.log(`Listening to PORT ${PORT}...`)
	// console.log(this)
}

module.exports = app
