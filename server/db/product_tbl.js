const mongoose = require('mongoose');
const {Schema} = mongoose;

const pschema = new Schema({
    product_name:String,
    product_price:Number,
    product_details:String,
    product_image:String,
    product_cat:String,
    // cart: [{type : Schema.Types.ObjectId , ref : 'Product'}]
});

module.exports=mongoose.model("Product", pschema);