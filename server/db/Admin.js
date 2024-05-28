const mongoose = require('mongoose');
const adschema=mongoose.Schema(
    {
       name:String,
       phone:Number,
       email:String,
       password:String,
       confirmpassword:String,
    }
);
module.exports=mongoose.model("Admin",adschema);