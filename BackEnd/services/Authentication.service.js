const { UserModel} = require('../models')
const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')

const register = async(body)=> {
  const {name, email,password} = body

  const existUser = await UserModel.findOne({email:email})
  if(existUSer){
    throw new ApiError(httpStatus.BAD_REQUEST, 'User Already Exist')
  }

  const user = await UserModel.create({name,email,password})
  return user
}

module.exports = {
  register
}