import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/productsInterfaces';
import connection from './connection';
import queries from './queries';

const product = async ({ name, amount }: IProduct) => {
  const [result] = await connection.execute<ResultSetHeader>(queries.newProduct, [name, amount]);
  return { id: result.insertId, name, amount };
};

const getAllProduct = async () => {
  const [allProducts] = await connection.execute<RowDataPacket[]>(queries.getAllProducts);
  console.log(allProducts);
  return allProducts;
};

export default { 
  product,
  getAllProduct,
};