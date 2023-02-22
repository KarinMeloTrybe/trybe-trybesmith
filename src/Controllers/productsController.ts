import { Request, Response } from 'express';
import productsService from '../Services/productsService';

const product = async (request: Request, response: Response) => {
  const { type, message } = await productsService.product(request.body);
  if (!type) return response.status(201).json(message);
  return response.status(400).json({ message });
};

const getAllProduct = async (_request: Request, response: Response) => {
  const { type, message } = await productsService.getAllProduct();
  if (!type) return response.status(200).json(message);
  return response.status(400).json({ message });
};

export default { 
  product,
  getAllProduct,
};