const Users = require('../models/userModel');


exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: `Content cannot empty` })
        return;
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password:req.body.password,
        img_url:req.body.img_url,
        gender: req.body.gender
    })
    user.save(user)
        .then(data => {
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
        Users.find({ name: { $regex: '.*' + name + '.*' } })
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
    else if (req.query.id) {
        Users.findById(req.query.id)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
    else {
        Users.find()
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
}
exports.delete = (req, res) => {
    const id = req.params.id;
    Users.findByIdAndDelete(id,{useFindAndModify:false})
        .then((data) => {
            if (data) {
                res.status(200).send({
                    message: `deleted: ${data}`
                })
            }
            else{
                res.status(404).send({message: `User ${id} was not found`})
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
    Users.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then((data)=>{
        if(data){
            res.send(data);
          
        }else{
            res.status(404).send({message:`can Update user with ${id} is not match`});
        }
    }).catch((err)=>{
        res.status(500).send({message: "Error Update!"})
    })
}
// exports.deletebyname=(req,res)=>{
//     if (req.query.name){
//         const name = req.query.name
//         Users.remove({ name: { $regex: '.*' + name + '.*' } })
//         .then((data) => {
//             if (data) {
//                 res.status(200).send({
//                     message: `deleted: ${data}`
//                 })
//             }
//             else{
//                 res.status(404).send({message: `User ${id} was not found`})
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({ message: err.message })
//         })
//     }}