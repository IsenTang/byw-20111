const { personModel } = require('./schemas/persons')

// * 创建新用户
async function create(data){

  const model = new personModel(data)

  await model.save()
}

// * 删除用户
async function remove({ query }){

  await personModel.remove(query)
}

// * 改变用户信息
async function updateOne({ query,updated }){

  await personModel.updateOne(query,updated)
}

// * 查询单个用户
async function findOne({ query }){

  return await personModel.findOne(query)
}

// * 查询多个用户
async function find({ query }){

  return await personModel.find(query)
}

module.exports  = {
  find,
  findOne,
  updateOne,
  remove,
  create
}