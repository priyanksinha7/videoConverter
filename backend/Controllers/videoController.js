//const videoInput=require("../Models/videoInputModel");
const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const ffmpeg=require("ffmpeg");
const { exec } = require("child_process");
//CREATE video

exports.uploadVideo=catchAsyncErrors(async(req,res,next)=>
{
  
  //configuring inputs
  // let temp_input=req.body.myVideo;

  // if(!temp_input)
  // {
  //   return next(new ErrorHandler("Invalid video!",400));
  // }
 
  let input=req.file.path;
  const nu=Math.floor(Math.random()*1000);
    var out=`videos/output${nu}.yuv`;
    const conv_type=req.body.myQuality;
 
    //Vmaf-conversion
    if(conv_type==='VMAF')
    {
    try {
      var process = new ffmpeg(input);
      process.then(function (video) {
        video.setVideoFormat('mp4').save(out).then(()=>
        {

         //writing on command line
            
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
    }
    
    //fmpeg version end







  //   //pnsr calc
    if(conv_type==='PSNR')
    {
      try {
        var process = new ffmpeg(input);
        process.then(function (video) {
          video.setVideoFormat('mp4').save(out).then(()=>
          {
  
  
            //writing on command line
          //  console.log(out);
  
  
            exec(`ffmpeg -i ${input} -i ${out} -lavfi "[0][1]libvmaf=log_path='./logs/psnr_logfile${nu}.json':log_fmt=json:psnr=1" -f null -`, (error, stdout, stderr) => {
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
              const log=require(`../../logs/psnr_logfile${nu}.json`);
            const payload=log.pooled_metrics.psnr_y;
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
    }




   if(conv_type==='SSIM')
   {
    try {
      var process = new ffmpeg(input);
      process.then(function (video) {
        video.setVideoFormat('mp4').save(out).then(()=>
        {


          //writing on command line



          exec(`ffmpeg -i ${input} -i ${out} -lavfi "[0][1]libvmaf=log_path='./logs/ssim_logfile${nu}.json':log_fmt=json:ssim=1" -f null -`, (error, stdout, stderr) => {
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
            const log=require(`../../logs/ssim_logfile${nu}.json`);
          const payload=log.pooled_metrics.float_ssim;
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
  }
})




































