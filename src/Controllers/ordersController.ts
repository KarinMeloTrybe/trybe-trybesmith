import { Request, Response } from 'express';
import ordersService from '../Services/ordersService';
import IOrder from '../interfaces/orderInterfaces';

const getAllOrders = async (_request: Request, response: Response) => {
  const { type, message } = await ordersService.getAllOrders();
  if (!type) return response.status(200).json(message);
  return response.status(400).json({ message });
};

const newOrder = async (request: Request, response: Response) => {
  const { productsIds, user: { data: { id: userId } } } = request.body;
  const { type, message } = await ordersService.newOrder({ userId, productsIds } as IOrder);
  if (!type) return response.status(201).json(message);
  return response.status(400).json({ message });
};

export default { 
  getAllOrders,
  newOrder,
};