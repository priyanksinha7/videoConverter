const express=require('express');
const { uploadVideo } = require('../Controllers/videoController');

const router=express.Router();


router.route('/videos/new').post(uploadVideo);
module.exports=router;