import { NextFunction, Request, Response } from 'express';

const validationPostOrder = (request: Request, response: Response, next: NextFunction) => {
  const { productsIds } = request.body;
  if (!productsIds) {
    return response.status(400).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return response.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (!productsIds.length) {
    return response.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  return next();
};

export default validationPostOrder;
