const KoaRouter = require('koa-router')

const router = KoaRouter()

router.get('/', async ctx => {
	await ctx.render('home.html.ejs')
})

module.exports = router