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
const mongoose = require('mongoose')

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port
async function initConnection() {
  await mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (error) => {
    if (error) {
      console.log(error)
    }

    console.log('mongodb connection success')
  })
}

initConnection()

const { Schema } = mongoose

const personSchema = new Schema({
  'username' : String,
  'age' : Number,
  'password' : String,
})

// * model

const personModel = mongoose.model('persons', personSchema)


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

 
  await ctx.render('regist')
})

router.get('/login', async (ctx, next) => {

 
  await ctx.render('login')
})

router.get('/info', async (ctx, next) => {
 
  let usr = ctx.cookies.get('user')

  if(!usr){
    await ctx.redirect('/login')
  }else{
    const { id } = ctx.request.query

    const result = await personModel.findOne({ _id: id })
  
    await ctx.render('info',
      { username : result.username ,
        age : result.age
      })
  }
  
})

router.post('/userRegist', async (ctx, next) => {

  const { age , username,password } = ctx.request.body


  let data = {
    status : 'success'
  }

  if(Number(age) < 0 || Number(age) > 120){
    data.status = 'failed'
    data.message = '年龄不合法'
  }else{

    const model = new personModel({
      username,
      password,
      age
    })

    await model.save()
  }
  
  ctx.response.body = data
})

router.get('/userLogin', async (ctx, next) => {

  const { username,password } = ctx.request.query


  let data = {
    status : 'success'
  }

  let result = await personModel.findOne({
    username,
    password
  })

  if(!result){
    data.status = 'failed'
    data.message = '用户名密码不匹配'
  }else{
    data.id = result._id
    ctx.cookies.set('user',JSON.stringify({
      username:result.username,
      id:result._id
    }))
  }

  ctx.response.body = data
})



routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
