import Order from '../models/Order';

const getAllOrders = async () => {
  const orders = await Order.getAllOrders();
  if (!orders) return { type: 'error', message: 'It was not possible to return your orders' };
  return { type: null, message: orders };
};

export default { getAllOrders };