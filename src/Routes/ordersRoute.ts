import express from 'express';
import ordersController from '../Controllers/ordersController';

const ordersRoute = express.Router();

ordersRoute.get('/', ordersController.getAllOrders);

export default ordersRoute;