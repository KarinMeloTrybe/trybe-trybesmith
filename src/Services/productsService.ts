import IProduct from '../interfaces/productsInterfaces';
import Product from '../models/Product';

const product = async (body: IProduct) => {
  const result = await Product.product(body);
  if (!result) return { type: 'error', message: 'It was not possible to register your product' };
  return { type: null, message: result };
};

const getAllProduct = async () => {
  const products = await Product.getAllProduct();
  if (!products) return { type: 'error', message: 'It was not possible to return your products' };
  return { type: null, message: products };
};
 
export default { 
  product,
  getAllProduct,
};