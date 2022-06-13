const mongoose=require("mongoose");

const videoinputSchema=new mongoose.Schema(
    {
       source :
       {
             type: String,
             required: true
       },
       encoded:
       {
        type: String,
        required : false
       },
       conversionType:
       {
          type: String,
          required : false
       }

    }
)
module.exports=mongoose.model("video",videoinputSchema);
