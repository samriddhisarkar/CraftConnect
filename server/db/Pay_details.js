const mongoose = require('mongoose');
const pdschema=mongoose.Schema(
    {
       recipient_name:String,
       phone:Number,
       email:String,
       gender:String,
       address:String,     

    }
);
module.exports=mongoose.model("PaymentDetails",pdschema);