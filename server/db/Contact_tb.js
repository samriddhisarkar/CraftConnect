const mongoose = require('mongoose');

const cSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone:Number,
    message:String,
})

module.exports = mongoose.model("Contact",cSchema);