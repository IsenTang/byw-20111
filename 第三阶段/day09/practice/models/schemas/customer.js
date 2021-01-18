const mongoose = require('mongoose')
const { Schema } = mongoose

const customerSchema = new Schema({
  username : String,
  password: String,
  age : Number,
  gender: Number
})

// * model
const customerModel = mongoose.model('customers', customerSchema)

module.exports = {
    customerModel
}