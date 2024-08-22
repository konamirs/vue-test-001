const { AuthenticationServices } = require('../services')
const catchAsync = require('../utils/catchAsync')

class AuthenticationController{
  static register = catchAsync(async(req,res)=>{
    const res_obj = await AuthenticationServices.register(req?.body)
    // res.send(res_obj)
    res.status(httpStatus.CREATED).send(res_obj)
  })
}

module.exports = AuthenticationController