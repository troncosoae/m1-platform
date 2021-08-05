const KoaRouter = require('koa-router')

const router = KoaRouter()

router.get('/', async ctx => {
	await ctx.render('home.ejs')
})

module.exports = router