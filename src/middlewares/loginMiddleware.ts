import { NextFunction, Request, Response } from 'express';

const validationLogin = (request: Request, response: Response, next: NextFunction) => {
  const { username, password } = request.body;
  if (!username) {
    return response.status(400).json({
      message: '"username" is required',
    });
  }
  if (!password) {
    return response.status(400).json({
      message: '"password" is required',
    });
  }
  return next();
};

export default validationLogin;
