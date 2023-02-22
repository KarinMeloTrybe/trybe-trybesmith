import { NextFunction, Request, Response } from 'express';

const validationProduct = (request: Request, response: Response, next: NextFunction) => {
  const { name, amount } = request.body;
  if (!name || !amount) {
    return response.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  return next();
};
  
export default validationProduct;