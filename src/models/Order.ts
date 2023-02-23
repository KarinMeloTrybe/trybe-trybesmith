import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/orderInterfaces';
import connection from './connection';
import queries from './queries';

const getAllOrders = async () => {
  const [allOrders] = await connection.execute<RowDataPacket[]>(queries.getAllOrders);
  return allOrders;
};

const newOrder = async ({ userId, productsIds }: IOrder) => {
  const [{ affectedRows, insertId }] = await connection
    .execute<ResultSetHeader>(queries.newPostOrder, [userId]);
  const promise = productsIds.map(async (id) => {
    await connection
      .execute<ResultSetHeader>(queries.updateProducts, [insertId, id]);
  });
  await Promise.all(promise);
  return affectedRows;
};

export default { 
  getAllOrders,
  newOrder,
};