const Products = require('../models/productModel');


exports.create= (req,res)=>{
const d= new Date();
const day = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();
const timenow = day + '||' + month + '||' + year

    if(!req.body){
        res.status(400).send({message: `Content cannot empty`})
        return ;
    }
    const product = new Products({
        name : req.body.name,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        timecreated:  timenow,
        discount: req.body.description,
        instock: req.body.instock,
        categorytype: req.body.categorytype,
    })
    product.save(product)
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    })
}
exports.find = (req, res) => {
    if (req.query.name) {
        const name = req.query.name
        Products.find({ name: {$regex: '.*' + name + '.*'} })
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
    else if (req.query.id) {
        Products.findById(req.query.id)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
    }
    else if (req.query.price) {
        const price = req.query.price
        Products.find({price})
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
    }
    else if (req.query.category) {
        const category = req.query.category
        Products.find({category})
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
    }
    else if (req.query.ltprice) {
        const price = req.query.ltprice
        Products.find({"price":{$lt:price}})
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
    }
    else if (req.query.gtprice) {
        const price = req.query.gtprice
        Products.find({"price":{$gt:price}})
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
    }
    else {
        Products.find()
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
}
exports.delete = (req, res) => {
    const id = req.params.id;
    Products.findByIdAndDelete(id,{useFindAndModify:false})
        .then((data) => {
            if (data) {
                res.status(200).send({
                    message: `deleted: ${data}`
                })
            }else{
                res.status(404).send({message: `Product ${id} was not found`})
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message })
        })
}
exports.update=(req,res)=>{
   
    if(JSON.stringify(req.body)==={}){
        return res.status(400).send({message: `Request body cannot empty`})
    }
    const id =req.params.id;
    Products.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then((data)=>{
        if(data){
            res.send(data);
          
        }else{
            res.status(404).send({message:`can Update Product with ${id} is not match`});
        }
    }).catch((err)=>{
        res.status(500).send({message: "Error Update!"})
    })
}