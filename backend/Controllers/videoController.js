const videoInput=require("../Models/videoInputModel");
const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
//CREATE TESLAHUB

exports.uploadVideo=catchAsyncErrors(async(req,res,next)=>
{
  //const source=await videoInput.create(req.body);
  console.log(req.body);
  res.status(201).json(
    {
      success: true,
    }
  )
});


