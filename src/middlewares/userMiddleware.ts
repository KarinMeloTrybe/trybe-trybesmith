import { NextFunction, Request, Response } from 'express';

const validationPassword = (request: Request, response: Response, next: NextFunction) => {
  const { password } = request.body;
  if (!password) {
    return response.status(400).json({ message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return response.status(422).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return response.status(422).json({
      message: '"password" length must be at least 8 characters long',
    });
  }
  return next();
};

const validationName = (request: Request, response: Response, next: NextFunction) => {
  const { username } = request.body;
  if (!username) {
    return response.status(400).json({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return response.status(422).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return response.status(422).json({
      message: '"username" length must be at least 3 characters long',
    });
  }
  return next();
};

const validationLevel = (request: Request, response: Response, next: NextFunction) => {
  const { level } = request.body;
  if (!JSON.stringify(level)) {
    return response.status(400).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return response.status(422).json({ message: '"level" must be a number' });
  }
  if (level <= 0) {
    return response.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  return next();
};
const validationVocation = (request: Request, response: Response, next: NextFunction) => {
  const { vocation } = request.body;
  if (!vocation) {
    return response.status(400).json({ message: '"vocation" is required' });
  }
  if (typeof vocation !== 'string') {
    return response.status(422).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return response.status(422).json({
      message: '"vocation" length must be at least 3 characters long',
    });
  }
  return next();
};

export {
  validationPassword,
  validationName,
  validationLevel,
  validationVocation,
};
