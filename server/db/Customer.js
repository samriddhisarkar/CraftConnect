const mongoose = require('mongoose');
const pschema=mongoose.Schema(
    {
       name:String,
       phone:Number,
       email:String,
       password:String,
       
        

    }
);
module.exports=mongoose.model("Customer",pschema);