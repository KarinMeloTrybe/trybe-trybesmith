import express from 'express';

import ordersRoute from './Routes/ordersRoute';
import productsRoute from './Routes/productsRoute';
import usersRoute from './Routes/userRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

app.use('/users', usersRoute);

app.use('/orders', ordersRoute);

export default app;
