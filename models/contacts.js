const mongoose = require('mongoose');


//Contact Schema
const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    lastname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    company:{
        type:String,
        minlength:3,
        maxlength:50
    },
    phone:{
        type:String,
        unique: true,
        minlength:10,
        maxlength:15
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:50
    }
});

module.exports = new mongoose.model('Contact', ContactSchema);