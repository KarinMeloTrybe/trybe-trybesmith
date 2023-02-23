import IOrder from '../interfaces/orderInterfaces';
import Order from '../models/Order';

const getAllOrders = async () => {
  const orders = await Order.getAllOrders();
  if (!orders) return { type: 'error', message: 'It was not possible to return your orders' };
  return { type: null, message: orders };
};

const newOrder = async (body: IOrder) => {
  const order = await Order.newOrder(body);
  if (order === 0) {
    return { type: 'error', message: 'It was not possible to register your order' };
  }
  return { type: null, message: body };
};

export default {
  getAllOrders,
  newOrder,
};