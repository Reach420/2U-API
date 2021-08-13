const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    phone_number: {
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    gender: {
        type:String,
    },
    img_url:{
        type:String,
    },
})

const Users= mongoose.model('users',schema);
module.exports= Users;