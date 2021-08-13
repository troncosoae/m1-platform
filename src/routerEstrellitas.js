const KoaRouter = require('koa-router')

const poolInterface = require('./poolInterface.js')

const router = KoaRouter()

router.get('/tabla', async ctx => {
	const jugadores = await poolInterface.select_jugadores()
	console.log('jugadores')
	console.log(jugadores)
	await ctx.render('tabla_estrellitas.ejs', {
		data: jugadores
	})
})

module.exports = router