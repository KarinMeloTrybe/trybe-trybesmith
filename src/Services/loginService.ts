import 'dotenv/config';
import jwt from 'jsonwebtoken';
import ILogin from '../interfaces/loginInterface';
import Login from '../models/Login';

const { JWT_SECRET } = process.env; 

const newLogin = async (body: ILogin) => {
  const result = await Login.newLogin(body);
  if (!result) return { type: 'error', message: 'Username or password invalid' };
  if (body.username !== result.username || body.password !== result.password) {
    return { type: 'error', message: 'Username or password invalid' };
  }
  const { password: p, ...dataUser } = result;
  const token = jwt.sign({ data: dataUser }, JWT_SECRET || '', { expiresIn: '10d' });
  return { type: null, message: token };
};

export default {
  newLogin,
};