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
    phone_number : {
        type:Number,
        required: true,
    },
    gender: {
        type:String,
    },
})

const Users= mongoose.model('users',schema);
module.exports= Users;