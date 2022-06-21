const express=require('express');
const { uploadVideo } = require('../Controllers/videoController');
const router=express.Router();
const multer=require('multer');
const path = require("path");
const videoStorage = multer.diskStorage({
    destination: 'videos', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null,  'myVideo_' + Date.now() 
         + path.extname(file.originalname))
    }
});
const videoUpload = multer({
    storage: videoStorage,
    limits: {
    fileSize: 50000000 // 50000000 Bytes = 50 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(mp4|MPEG-4|mkv|yuv)$/)) { 
         return cb(new Error('Please upload a video'))
      }
      cb(undefined, true)
   }
});
router.route('/videos/new').post(videoUpload.single('myVideo'),uploadVideo);
module.exports=router;