import { Request, Response } from 'express';
import userService from '../Services/userService';

const newUser = async (request: Request, response: Response) => {
  const { type, message } = await userService.newUser(request.body);
  if (!type) return response.status(201).json(message);
  return response.status(400).json({ message });
};

export default { 
  newUser,
};