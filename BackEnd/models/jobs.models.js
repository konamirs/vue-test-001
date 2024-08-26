const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
},{
    timestamps:true
})

const jobs = mongoose.model("jobs",schema);

module.exports = jobs;