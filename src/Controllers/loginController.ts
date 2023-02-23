import { Request, Response } from 'express';
import loginService from '../Services/loginService';

const newLogin = async (request: Request, response: Response) => {
  const { type, message } = await loginService.newLogin(request.body);
  if (!type) return response.status(200).json({ token: message });
  return response.status(401).json({ message });
};

export default {
  newLogin,
};