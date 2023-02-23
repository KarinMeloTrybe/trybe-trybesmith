import { ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/userInterfaces';
import connection from './connection';
import queries from './queries';

const newUser = async ({ username, vocation, level, password }: IUser) => {
  const [result] = await connection
    .execute<ResultSetHeader>(queries.newUser, [username, vocation, level, password]);
  return { id: result.insertId, username, vocation, level };
};

export default { 
  newUser,
};