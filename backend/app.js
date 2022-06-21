const express=require('express');
const app=express();
const errorMiddleware=require('./middleware/error');
const cookieParser=require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require('cors');
const multer  = require('multer');
const fileUpload=require('express-fileupload');
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const upload = multer({ dest: './' });


// Route Imports
const video=require('./Routes/videoRoute');
app.use("/api/v1",video);






//middleware for error
app.use(errorMiddleware);


module.exports=app;