import express from 'express';
import productsController from '../Controllers/productsController';
import { validationAmount, validationName } from '../middlewares/productMiddleware';

const productsRoute = express.Router();
productsRoute.post('/', validationName, validationAmount, productsController.product);
productsRoute.get('/', productsController.getAllProduct);

export default productsRoute;