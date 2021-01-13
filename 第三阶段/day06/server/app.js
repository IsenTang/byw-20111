const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')

const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const cors = require('koa2-cors')

const config = require('./config/index.js')
const routes = require('./routes')
const { createContext } = require('vm')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares 中间件
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  .use(cors())
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
  ctx.state = {
    title: 'Koa2',
    name:'isen',
    gender: 0
  }
  await ctx.render('index', ctx.state)
})

router.get('/testpage', async (ctx, next) => {

  await ctx.render('index2')
})




router.get('/banyuan',(ctx, next)=>{

  // * request

  const { banyuan , username } = ctx.request.query
  console.log('username: ', username)
  console.log('banyuan: ', banyuan)


  console.log('in banyuan server')
  // * response
  ctx.response.body = {
    username,
    banyuan
  }
})


router.post('/banyuan',(ctx,next)=>{

  const { username,password } = ctx.request.body

  ctx.response.body = {
    username,
    password
  }
})


router.get('/form',(ctx,next)=>{

  // try {
  // console.log(abc)
  // } catch (error) {
    // console.log(error)
  // } finally {
  const { username,password,rePassword } = ctx.request.query

  const namePattern = /^[a-zA-Z0-9_-]{4,16}$/
  const passwordPattern = /^[a-zA-Z0-9_]{8,15}$/

  let data = {
    status : 'failed'
  }

  if(!namePattern.test(username)){
    data.message = '用户名不符合要求'
  }else if(!passwordPattern.test(password)){
    data.message = '密码不符合要求'
  }else if(password !== rePassword){
    data.message = '两次密码输入不一致'
  }else{
    data.status = 'success'
  }
  ctx.response.body = data
  // }

})


router.post('/test',async(ctx,next)=>{

  const { status } = ctx.request.body

  await sleep(5000)
  console.log('status ===>',status)
  // await sleep(5000)
  ctx.response.body = {
    status : 'success'
  }
})

router.get('/test',async(ctx,next)=>{

  const { status } = ctx.request.query

  console.log('status ===>',status)
  await sleep(5000)
  ctx.response.body = {
    status : 'success'
  }
})


router.get('/getName',async(ctx,next)=>{

  // await sleep(2000)
  const { name } = ctx.request.query

  const array = ['isen','123']

  let data = {
    status : 'success'
  }
  if(array.indexOf(name) >= 0){
    data.status = 'failed'
    data.message = '用户名重复'
  }

  ctx.response.body = data
})

function sleep(time){

  return new Promise((res)=>{

    setTimeout(()=>{

      res()
    },time)
  })
}

router.get('/getContentByKeyword',async(ctx,next)=>{

  // await sleep(2000)
  const { keyword } = ctx.request.query

  console.log('keyword ===>',keyword)
  // * i
  const resource = ['isen','banyuan','教育','isen123','isen223']

  let data = []

  resource.forEach((item)=>{
    if(item.includes(keyword)){
      data.push(item)
    }
  })
 
  ctx.response.body = data
})

router.post('/regist',(ctx,next)=>{

  const { username } = ctx.request.body

  let data = {
    status : 'success'
  }
  if(username.length < 5){
    data.status = 'failed'
    data.message = '用户名不符合要求'
  }

  ctx.response.body = data
})


// =========

router.get('/getUserInfo',async(ctx,next)=>{

  await ctx.render('getUserInfo')
})

router.get('/userInfo',async(ctx,next)=>{

  const { name } = ctx.request.query
  await ctx.render('userInfo', { name })
})



routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
