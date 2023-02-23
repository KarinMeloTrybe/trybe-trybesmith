import express from 'express';
import ordersController from '../Controllers/ordersController';
import validationToken from '../middlewares/validationToken';
import validationPostOrder from '../middlewares/ordersMiddleware';

const ordersRoute = express.Router();

ordersRoute.get('/', ordersController.getAllOrders);

ordersRoute.post('/', validationToken, validationPostOrder, ordersController.newOrder);

export default ordersRoute;