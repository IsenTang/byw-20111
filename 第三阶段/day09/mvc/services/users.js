const { findOne ,create } = require('../models/person')

// * 查找用户
async function getUser(data){
    
  const { id } = data
  return await findOne({ query: { _id : id }})
}

// * 检测用户名
function checkUsername(name){

  const pattern = /^[0-9a-zA-Z-_]{4,16}$/

  return pattern.test(name)
}

function checkAge(age){
  
  return Number(age) > 120 || Number(age) < 0
}

// * 注册，存入数据库
async function regist(data){

  await create(data)
}

async function checkLogin({ username , password }){

  const result = await findOne({ query:{ username , password } })

  return result
}

module.exports = {
  getUser,
  checkUsername,
  checkAge,
  regist,
  checkLogin
}