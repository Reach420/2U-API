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
        type: Number,
        required: true,
    },
    timecreated:{
        type: String,
    },
    discount:{
        type:String,
    },
    instock:{
        type:Number,
        required:true,
    },
    catergorytype:{
        type:String,
        required:true,
    }
})

const Products= mongoose.model('products',schema);
module.exports= Products;