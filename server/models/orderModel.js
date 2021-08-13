const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    products : {
        type:Array,
        required:true
    },
    name:{
        type:String,
    },
    phone_number:{
        type:String,
    },
    email: {
        type: String,
    },
    orderTime:{
        type: String,
    },
})

const Orders= mongoose.model('orders',schema);
module.exports= Orders;