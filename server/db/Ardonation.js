const mongoose = require('mongoose');

const aSchema = new mongoose.Schema({
    name:String,
    address:String,
    phone:Number,
    email:String,
    artisans:String,
    donate:String,
    money:Number,
    accessories:String,
    location:String,
})

module.exports = mongoose.model("Artisan",aSchema);