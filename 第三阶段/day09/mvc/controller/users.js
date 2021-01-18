const { getUser,checkAge,checkUsername ,regist : registService, checkLogin } = require('../services/users')

async function user(ctx,next){

  const result = await getUser({ id: '6004e7dae0e17836ece3ebc4'})
  ctx.state = {
    title: 'Koa2',
    name:result.username
  }
  await ctx.render('index', ctx.state)
}

async function regist(ctx,next){

  await ctx.render('regist')
}

async function userRegist(ctx,next){

  const { username , password , age } = ctx.request.body

  let data = {
    status : 'success'
  }
  if(checkAge(age)){
    data.status = 'failed'
    data.message = '年龄不合法'
  }else if(!checkUsername(username)){

    data.status = 'failed'
    data.message = '用户名不合法'
  }

  // * 放入数据库
  await registService({username , password , age})
  ctx.response.body = data

}

async function login(ctx,next){

  await ctx.render('login')
}

async function userLogin(ctx,next){

  const { username , password } = ctx.request.body

  let data = {
    status : 'success'
  }
  if(!checkUsername(username)){
    data.status = 'failed'
    data.message = '用户名不合法'
  }else{
    const result = await checkLogin({ username , password })

    console.log(result)
    if(!result){
      data.status = 'failed'
      data.message = '用户名密码不匹配'
    }
  }

  ctx.response.body = data
}

module.exports = {
  user,
  regist,
  userRegist,
  userLogin,
  login
}