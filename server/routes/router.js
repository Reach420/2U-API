const express= require('express');
const route = express.Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

// User API 
route.post('/api/users',userController.create);
// route.delete('/api/users',userController.deletebyname);
route.get('/api/users',userController.find);
route.put('/api/users/:id',userController.update);
route.delete('/api/users/:id',userController.delete);
route.put('/api/products/:id',productController.update);
route.delete('/api/products/:id',productController.delete);
route.post('/api/products',productController.create);
route.get('/api/products',productController.find);
module.exports = route