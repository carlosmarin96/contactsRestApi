const mongoose = require('mongoose');
const yup = require('yup');

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
        type:String
    },
    phone:{
        type:String,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:50
    }
});

const validateContact = contact => {
    const schema = yup.object().shape({
        name:yup.string().required().min(3).max(50),
        lastname:yup.string().required().min(3).max(50),
        company:yup.string(),
        phone:yup.string(),
        email:yup.string().required().min(3).max(50)
    });

    return schema.validate(contact).then(contact => contact).catch(error => {return{message:error.message}});
};

exports.Contact = new mongoose.model('Contact', ContactSchema);
exports.validateContact = validateContact;