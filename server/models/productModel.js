const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
    },
    category : {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
        required: true,
    },
    timecreated:{
        type: String,
    },
    discount:{
        type:String,
        required: true,
    },
    instock:{
        type:String,
        required: true,
    },
    img_url:{
        type:String,
        required: true,
    }
})

const Products= mongoose.model('products',schema);
module.exports= Products;