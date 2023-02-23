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

/* const create = async (body) => {
  
      const { dataValues } = user;
      const { password: _, ...dataUser } = dataValues; // o underline significa que ignoramos password
      
      return { status: 201, message: { token } };
  }
  return { status: 409, message: { message: 'User already registered' } };
}; */