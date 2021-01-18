const mongoose = require('mongoose')
const { Schema } = mongoose

const personSchema = new Schema({
  'username' : String,
  'age' : Number,
  'password' : String,
})

// * model
const personModel = mongoose.model('persons', personSchema)

module.exports = {
  personModel
}