import { NextFunction, Request, Response } from 'express';

const validationUser = (request: Request, response: Response, next: NextFunction) => {
  const { username, vocation, level, password } = request.body;
  if (!username || !vocation || !level || !password) {
    return response.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  return next();
};

export default validationUser;

/* 
const express = require('express');
require('dotenv/config');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validationToken = async (request, response, next) => {
  const token = request.header('Authorization');
  if (!token) return response.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded.data;
    next();
  } catch (error) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
};
 */