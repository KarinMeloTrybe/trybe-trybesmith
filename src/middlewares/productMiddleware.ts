import { NextFunction, Request, Response } from 'express';

const validationName = (request: Request, response: Response, next: NextFunction) => {
  const { name } = request.body;
  if (!name) {
    return response.status(400).json({
      message: '"name" is required',
    });
  }
  if (name.length < 3) {
    return response.status(422).json({
      message: '"name" length must be at least 3 characters long',
    });
  }
  if (typeof name !== 'string') {
    return response.status(422).json({
      message: '"name" must be a string',
    });
  }
  return next();
};

const validationAmount = (request: Request, response: Response, next: NextFunction) => {
  const { amount } = request.body;
  if (!amount) {
    return response.status(400).json({
      message: '"amount" is required',
    });
  }
  if (amount.length < 3) {
    return response.status(422).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }
  if (typeof amount !== 'string') {
    return response.status(422).json({
      message: '"amount" must be a string',
    });
  }
  return next();
};
  
export {
  validationName,
  validationAmount,
};
