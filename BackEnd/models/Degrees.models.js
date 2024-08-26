const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  degree:{
    type:String,
    required:true
  },
  id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  }
},{
  timestamps:true
})

const degrees = mongoose.model('degrees', schema)

module.exports = degrees