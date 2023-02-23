import jwt from 'jsonwebtoken';
import User from '../models/User';

import IUser from '../interfaces/userInterfaces';

import 'dotenv/config';

const { JWT_SECRET } = process.env;
 
const newUser = async (body: IUser) => {
  const token = jwt.sign({ body }, JWT_SECRET || '', { expiresIn: '10d' });
  const result = await User.newUser(body);
  if (!result) return { type: 'error', message: 'It was not possible to register' };
  return { type: null, message: { token } };
};

export default { 
  newUser,

};
