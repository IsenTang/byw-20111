const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const mongoose = require('mongoose')
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

const userSchema = new Schema({
  name : String,
  password:String
})

// * model
const userModel = mongoose.model('tests', userSchema)


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

// =========

router.get('/nameRegist',async(ctx)=>{

  await ctx.render('nameRegist')
})

router.get('/passwordRegist',async(ctx)=>{

  let data = ctx.cookies.get('formData')

  console.log(ctx.cookies.get('formData'))
  // * ====> { step : 1,2 , username:'..',password:'...'}
  if(data){

    data = JSON.parse(data)

    if(data.step == 1 || data.step == 2){
      await ctx.render('passwordRegist')
    }else{
      ctx.redirect('/nameRegist')
    }
  }else{
    ctx.redirect('/nameRegist')
  }
  
})

router.get('/userinfoRegist',async(ctx)=>{

  let data = ctx.cookies.get('formData')

  if(data){

    data = JSON.parse(data)

    if(data.step == 1){
      ctx.redirect('/passwordRegist')
    }else{
      await ctx.render('userinfoRegist')
    }
  }else{
    ctx.redirect('/nameRegist')
  }

})

router.get('/login',async(ctx)=>{


  await ctx.render('login')
})

router.get('/regist',async(ctx)=>{


  await ctx.render('regist')
})

router.post('/userRegist',async(ctx)=>{

  const { name ,password } = ctx.request.body

  console.log('name ===>',name)
  const model = new userModel({name,password})

  await model.save()

  ctx.response.body = {
    status: 'success'
  }
})

router.post('/userLogin',async(ctx)=>{

  const { name ,password } = ctx.request.body

  const result = await userModel.findOne({ name , password })

  let data = {
    status: 'success'
  }

  if(!result){
    data.status = 'failed'
    data.message = '用户名密码不匹配'
  }

  ctx.response.body = data
})



router.get('/checkName',async (ctx)=>{

  const { name } = ctx.request.query

  const array = ['isen','tom','lucy']
  console.log(JSON.parse(ctx.cookies.get('formData')))

  const result = await userModel.find({name})

  // * ==> result null  []
  
  let data = {
    status: 'success'
  }
  if(array.indexOf(name) >= 0){
    data.status = 'failed'
    data.message = '用户名重复'
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
