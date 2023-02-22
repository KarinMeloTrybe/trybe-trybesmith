import express from 'express';
import productsController from '../Controllers/productsController';
import validationProduct from '../middlewares/productMiddleware';

const productsRoute = express.Router();
productsRoute.post('/', validationProduct, productsController.product);
productsRoute.get('/', productsController.getAllProduct);

export default productsRoute;