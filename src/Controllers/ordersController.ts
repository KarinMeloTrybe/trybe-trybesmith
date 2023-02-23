import { Request, Response } from 'express';
import ordersService from '../Services/ordersService';

const getAllOrders = async (_request: Request, response: Response) => {
  const { type, message } = await ordersService.getAllOrders();
  if (!type) return response.status(200).json(message);
  return response.status(400).json({ message });
};

export default { 
  getAllOrders,
};