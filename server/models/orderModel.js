const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type:String,
    },
    username:{
        type:String,
    },
    phone_number : {
        type: String,
    },
    email: {
        type: String,
    },
    price: {
        type: String,
    },
    orderTime:{
        type: String,
    },
    discount:{
        type:String,
    },
    img_url:{
        type:String,
    }
})

const Orders= mongoose.model('orders',schema);
module.exports= Orders;