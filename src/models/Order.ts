import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import queries from './queries';

const getAllOrders = async () => {
  const [allOrders] = await connection.execute<RowDataPacket[]>(queries.getAllOrders);
  return allOrders;
};

export default { getAllOrders };