const Orders = require('../models/orderModel');


exports.create = (req, res) => {
    const d= new Date();
const day = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();
const timenow = day + '||' + month + '||' + year

    if (!req.body) {
        res.status(400).send({ message: `Content cannot empty` })
        return;
    }
    const order = new Orders({
        name: req.body.name,    
        products: req.body.products,
        email: req.body.email,
        phone_number: req.body.phonenumber,
        ordertime:timenow,
    })
    order.save(order)
        .then(data => {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        })
}
exports.find = (req, res) => {
    if (req.query.name) {
        const name = req.query.name
        Orders.find({ name: { $regex: '.*' + name + '.*' } })
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
    else if (req.query.id) {
        Orders.findById(req.query.id)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
    else {
        Orders.find()
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
}
exports.delete = (req, res) => {
    const id = req.params.id;
    Orders.findByIdAndDelete(id,{useFindAndModify:false})
        .then((data) => {
            if (data) {
                res.status(200).send({
                    message: `deleted: ${data}`
                })
            }
            else{
                res.status(404).send({message: `order ${id} was not found`})
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
    Orders.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then((data)=>{
        if(data){
            res.send(data);
          
        }else{
            res.status(404).send({message:`can Update order with ${id} is not match`});
        }
    }).catch((err)=>{
        res.status(500).send({message: "Error Update!"})
    })
}
// exports.deletebyname=(req,res)=>{
//     if (req.query.name){
//         const name = req.query.name
//         Orders.remove({ name: { $regex: '.*' + name + '.*' } })
//         .then((data) => {
//             if (data) {
//                 res.status(200).send({
//                     message: `deleted: ${data}`
//                 })
//             }
//             else{
//                 res.status(404).send({message: `order ${id} was not found`})
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({ message: err.message })
//         })
//     }}