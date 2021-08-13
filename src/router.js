const KoaRouter = require('koa-router')
require('dotenv').config();

const routerEstrellitas = require('./routerEstrellitas.js')

const router = KoaRouter()

router.use('/estrellitas', routerEstrellitas.routes())

router.get('/', async ctx => {
	await ctx.render('home.ejs')
})

module.exports = router