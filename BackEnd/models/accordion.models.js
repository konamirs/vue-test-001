const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  header:{
    type:String,
    required:true
  },
  id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true
  }
},{
  timestamps:true
})

const accordion = mongoose.model('accordion',schema)

module.exports = accordion