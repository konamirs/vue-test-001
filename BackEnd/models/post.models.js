const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    header:{
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

const post = mongoose.model("post",schema);

module.exports = post;