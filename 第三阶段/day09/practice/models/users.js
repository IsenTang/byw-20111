const { customerModel } = require('./schemas/customer')

// * 创建新用户
async function create(data){

  const model = new customerModel(data)

  await model.save()
}

// * 删除用户
async function remove({ query }){

  await customerModel.remove(query)
}

// * 改变用户信息
async function updateOne({ query,updated }){

  await customerModel.updateOne(query,updated)
}

// * 查询单个用户
async function findOne({ query }){

  return await customerModel.findOne(query)
}

// * 查询多个用户
async function find({ query }){

  return await customerModel.find(query)
}

module.exports  = {
  find,
  findOne,
  updateOne,
  remove,
  create
}