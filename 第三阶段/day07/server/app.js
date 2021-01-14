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
  ctx.state = {
    title: 'Koa2'
  }
  await ctx.render('index', ctx.state)
})

router.get('/regist', async (ctx, next) => {
  // ctx.body = 'Hello World'
  ctx.state = {
    title: 'Koa2'
  }
  await ctx.render('regist')
})

router.get('/userinfo', async (ctx, next) => {

  const { username,age,gender} = ctx.request.query

  const foods = [
    { 
      id:1,
      name:'food1',
      available:false
    },
    { 
      id:2,
      name:'food2',
      available:false
    },
    { 
      id:3,
      name:'food3',
      available:true
    },
    { 
      id:4,
      name:'food4',
      available:true
    }
  ]

  await ctx.render('userinfo',{username,age,gender,foods})
})

router.get('/userRegist',(ctx,next)=>{

  const {username,age,gender,password} = ctx.request.query

  let data = {
    status: 'success'
  }
  if(!checkUsername(username)){
    data.status = 'failed'
    data.message = '用户名格式不对'
  }else if(Number(age)<0 || Number(age)>120 ){
    data.status = 'failed'
    data.message = '年龄异常'
  }
  ctx.response.body = data
  
})

router.get('/checkName',(ctx)=>{

  const { username } = ctx.request.query

  const nameArray = ['lucy','tom','isen','lily']

  let data = {
    status : 'success'
  }
  if(nameArray.indexOf(username) > 0){
    data.status = 'failed'
  } 

  ctx.response.body = data
})

function checkUsername(val){

  const pattern = /^[a-zA-Z0-9_-]{4,16}$/

  return pattern.test(val)
}

routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
