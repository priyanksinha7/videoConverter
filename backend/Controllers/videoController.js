const videoInput=require("../Models/videoInputModel");
const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const ffmpeg=require("ffmpeg");
//CREATE video

exports.uploadVideo=catchAsyncErrors(async(req,res,next)=>
{
  //const source=await videoInput.create(req.body);

  let temp_input=req.body.myVideo;
  let input="W:/";
   input+=temp_input.substr(12);
    var out="W:/output.avi";
    try {
      var process = new ffmpeg(input);
      process.then(function (video) {
        video.setVideoFormat('avi').save(out).then(console.log("successs"));
      }, function (err) {
        console.log('Error: ' + err);
      });
    } catch (e) {
      console.log(e.code);
      console.log(e.msg);
    }    
  res.status(201).json(
    {
      success: true,
    }
  )
});


