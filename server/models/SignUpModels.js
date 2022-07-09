const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
  fullName: {
    type:String,
    require: true
  },
  username:{
    type: String,
    required: true
  },
  email: {
    type:String,
    required: true
  }.
  password: {
    type: String,
    required:true
  },
  date: {
    type: Date,
    default: Data.now
  }
})

module.exports = mongoose.model('mytable', signUpTemplate)

fullName: ,
password,
