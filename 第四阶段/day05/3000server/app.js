const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const cors = require('koa2-cors');
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  .use(cors({
    credentials:true
  }))
  .use(router.routes())
  .use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello World'

  ctx.cookies.set('user',123);
  ctx.state = {
    title: 'Koa2'
  }
  await ctx.render('index', ctx.state)
})

router.post('/test', async (ctx, next) => {
  // ctx.body = 'Hello World'
  let usr = ctx.cookies.get('user');

  console.log('usr ===>',usr);
  ctx.response.body = {}
})

// * xss
// router.get('/xss',(ctx)=>{

//   ctx.response.body = '<script>alert(1);</script>'
// });

router.get('/xss',(ctx)=>{

  const { content }  = ctx.request.query;
  ctx.response.body = content;
});

routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
