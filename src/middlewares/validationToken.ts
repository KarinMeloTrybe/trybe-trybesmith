import express, { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

require('dotenv/config');

const app = express();

app.use(express.json());

const validationToken = async (request: Request, response: Response, next: NextFunction) => {
  const token = request.header('Authorization');
  if (!token) return response.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
    request.body.user = decoded;
    next();
  } catch (error) {
    return response.status(401).json({ message: 'Invalid token' });
  }
};

export default validationToken;