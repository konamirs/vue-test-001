const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title:{
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

const spotlights = mongoose.model('spotlight', schema)

module.exports = spotlights;