const httpStatus = require("http-status");
const { UserModel ,BlogPostModel, DegreesModel,ContactModel} = require("../models");
const ApiError = require("../utils/ApiError");
const { GenerateToken } = require("../utils/jwt.utils");
const cloundary = require("../utils/cloudnary");
const degrees = require("../models/Degrees.models");
const spotlights = require('../models/spotlight.models')

const uploadOnCLoundary = async(path)=>{
  const result = await cloundary.uploader.upload(path,{
    folder:"blogs"
  });
  return result;
}

const register = async(body)=>{
    const {name,email,password} = body;

    const existUser = await UserModel.findOne({email:email});
    if(existUser){
      throw new ApiError(httpStatus.BAD_REQUEST,"User Already Exist");
    }

  const user = await  UserModel.create({name,email,password});
  return {msg:"User Register Successfully"};

}

const loginService = async(body)=>{
  const {email,password} = body;

  const existUser = await UserModel.findOne({email:email});
  if(!existUser){
    throw new ApiError(httpStatus.NOT_FOUND,"User Not Exist");
  }

const isMatch = await existUser.comparePassword(password);

if(!isMatch){
  throw new ApiError(httpStatus.BAD_REQUEST,"Invalid Crendentials");
}



  // return existUser;
  const token = await GenerateToken(existUser);
  return {msg:"login success",token};



}

const UserProfile = async(id)=>{
  return await UserModel.findById(id).select("name email");
}

const createPost= async(user,body,file)=>{
    const {title,content,description} = body;


const existance = await BlogPostModel.findOne({title});
if(existance){
  throw new ApiError(httpStatus.BAD_REQUEST,"Title already exist try with another name")
}

  await BlogPostModel.create({
      header:title,
      icon: content,
      title: content,
      benefit: description,
      moreBenefits: description,
      id: description
    })

    return {
      msg:"post added successfully"
    };


}

const AllPost  = async()=>{
  const posts =  await BlogPostModel.find({isDeleted:false}).populate("user","name email").select("-content")
  return {posts,total:posts.length}
}

const PostById = async(id)=>{
  const post =  await BlogPostModel.findOne({_id:id, isDeleted:false}).populate("user","name email")
  

  return {post,image:post.image.image_url}
}


const deleteById = async(id)=>{
  const post =  await BlogPostModel.findByIdAndUpdate(id,{
    isDeleted:true
  })
  return {msg:"post deleted"}
}


const Contact = async(body)=>{
  const {name,email,message}=  body;

  await ContactModel.create({
    name,email,message
  })

  return {msg:"Thanku for Contacting :) "}


}


const createDegrees= async(user,body,file)=>{
  const {title,content} = body;


const existance = await degrees.findOne({title});
if(existance){
throw new ApiError(httpStatus.BAD_REQUEST,"Title already exist try with another name")
}

await degrees.create({
    degree: content,
    id: title
  })

  return {
    msg:"post added successfully"
  };


}


const createSpotLight= async(user,body,file)=>{
  const {title,content, description} = body;


const existance = await degrees.findOne({title});
if(existance){
throw new ApiError(httpStatus.BAD_REQUEST,"Title already exist try with another name")
}

await spotlights.create({
    title: content,
    img: title,
    description: description,
    id: title
  })

  return {
    msg:"post added successfully"
  };


}


module.exports = {
    register,
    loginService,
    UserProfile,
    createPost,
    AllPost,
    PostById,
    deleteById,
    Contact,
    createDegrees,
    createSpotLight
}