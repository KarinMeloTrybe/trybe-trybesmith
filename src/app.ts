import express from 'express';

import loginRoute from './Routes/loginRoute';
import ordersRoute from './Routes/ordersRoute';
import productsRoute from './Routes/productsRoute';
import usersRoute from './Routes/userRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

app.use('/users', usersRoute);

app.use('/orders', ordersRoute);

app.use('/login', loginRoute);

export default app;
