const express= require('express');
const route = express.Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
// User API 
route.post('/api/users',userController.create);
// route.delete('/api/users',userController.deletebyname);
route.get('/api/users',userController.find);
route.put('/api/users/:id',userController.update);
route.delete('/api/users/:id',userController.delete);

route.post('/api/orders',orderController.create);
// route.delete('/api/users',userController.deletebyname);
route.get('/api/orders',orderController.find);
route.put('/api/orders/:id',orderController.update);
route.delete('/api/orders/:id',orderController.delete);


//  filter product
route.get('/api/products/men_shirts',productController.findMenshirts)
route.get('/api/products/men_pants',productController.findMenpants)
route.get('/api/products/men_shoes',productController.findMenshoes)
route.get('/api/products/men_belts',productController.findMenbelts)
route.get('/api/products/men_watches',productController.findMenwatches)
route.get('/api/products/women_shirts',productController.findWomenshirts)
route.get('/api/products/women_skirts',productController.findWomenskirts)
route.get('/api/products/women_dresses',productController.findWomendresses)
route.get('/api/products/women_cosmetics',productController.findWomencosmetics)
route.get('/api/products/boy_shirts',productController.findBoyshirts)
route.get('/api/products/boy_pants',productController.findBoypants)
route.get('/api/products/girl_shirts',productController.findGirlshirts)
route.get('/api/products/girl_pants',productController.findGirlpants)
route.get('/api/products/skincare',productController.findSkincare)

route.put('/api/products/:id',productController.update);
route.delete('/api/products/:id',productController.delete);
// route.delete('/api/products',productController.removebydes);
route.post('/api/products',productController.create);
route.get('/api/products',productController.find);
module.export = route