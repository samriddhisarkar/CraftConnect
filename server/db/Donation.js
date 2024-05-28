const mongoose = require('mongoose');

const vSchema = new mongoose.Schema({
    name:String,
    address:String,
    phone:Number,
    email:String,
    village:String,
    donate:String,
    money:Number,
    accessories:String,
    location:String,
})

module.exports = mongoose.model("Village",vSchema);