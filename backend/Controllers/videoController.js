//const videoInput=require("../Models/videoInputModel");
const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const ffmpeg=require("ffmpeg");
const { exec } = require("child_process");
//CREATE video
exports.uploadVideo=catchAsyncErrors(async(req,res,next)=>
{
  let temp_input=req.body.myVideo;
  let input="W:/";
   input+=temp_input.substr(12);
   const nu=Math.floor(Math.random()*1000);
    var out=`W:/output${nu}.yuv`;
    try {
      var process = new ffmpeg(input);
      process.then(function (video) {
        video.setVideoFormat('mp4').save(out).then(()=>
        {
          exec(`ffmpeg -i ${input} -i ${out} -lavfi libvmaf=model=path=vmaf_v0.6.1.json:log_path='./logs/vmaf_logfile${nu}.json':log_fmt=json -f null -`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
              //  console.log(`stderr: ${stderr}`);
                return;
            }
            //console.log(`stdout: ${stdout}`);
          })
           .on('close',()=>
          {
            const log=require(`../../logs/vmaf_logfile${nu}.json`);
          const payload=log.pooled_metrics.vmaf;
          payload.max=Math.floor(payload.max*100)/100;
          payload.min=Math.floor(payload.min*100)/100;
          payload.mean=Math.floor(payload.mean*100)/100;
          res.status(201).json(
            {
              success: true,
              payload
            }
          )
          })
          
        })
      }, function (err) {
        console.log('Error: ' + err);
      });
    } catch (e) {
      console.log(e.code);
      console.log(e.msg);
    }    
});


