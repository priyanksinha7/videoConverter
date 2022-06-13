const express=require('express');
const app=express();
const errorMiddleware=require('./middleware/error');
const cookieParser=require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));




// Route Imports
const video=require('./Routes/videoRoute');
app.use("/api/v1",video);






//middleware for error
app.use(errorMiddleware);


module.exports=app;