const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const cookie  = require('koa-cookie')
const views = require('koa-views')
const session = require('koa-session2')
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
const { join } = require('path')

const port = process.env.PORT || config.port


const CONFIG = {
  key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  secure: true, /** (boolean) secure cookie*/
  sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
}



// error handler
onerror(app)

router.use(cookie.default())

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
  
  .use(session({
    key:'banyuan'
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

  ctx.cookies.set('user','isen')
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


// ===================

router.get('/login', async (ctx, next) => {
  // ctx.body = 'Hello World'

  await ctx.render('login')
})


router.post('/userLogin',(ctx)=>{

  const { name , password } = ctx.request.body

  let data = { name,password }

  ctx.cookies.set('user',JSON.stringify(data))
  ctx.session.name = 'isen2222'
  // console.log('JSON.stringify(data): ', string)
  // console.log(typeof string)
  
  // ctx.cookies.set('user',data)

  ctx.response.body = {
    name , password 
  }
})

router.post('/test',(ctx)=>{

  // const user = ctx.cookies.get('user')
  const local = decodeURIComponent(ctx.cookies.get('local'))
  console.log('local: ', local)



  console.log((JSON.parse((local))))
  // console.log('ctx.session.name ===>',ctx.session.name)

  
  // console.log('user ===>',user)
  // let data = JSON.parse(user)
  // console.log('data: ', data)
  // console.log(data.name)
  // console.log('user ===>',typeof user)

  ctx.response.body = {
    
  }
})

router.get('/cookie', async (ctx, next) => {
  // ctx.body = 'Hello World'
  // ctx.session.refresh()
  // ctx.session.name = 'isen2222'

  const user = ctx.cookies.get('user')

  console.log('user ===>',user)
  if(user){
    await ctx.render('cookie')
  }else{
    ctx.redirect('/login')
  }
  
})




routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
