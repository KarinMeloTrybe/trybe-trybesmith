import { RowDataPacket } from 'mysql2/promise';
import ILogin from '../interfaces/loginInterface';
import connection from './connection';
import queries from './queries';

const newLogin = async ({ username }: ILogin) => {
  const [[result]] = await connection.execute<RowDataPacket[]>(queries
    .getUserLogin, [username]);
  return result;
};

export default {
  newLogin,
}; 