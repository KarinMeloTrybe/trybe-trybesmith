import express from 'express';

import productsRoute from './Routes/productsRoute';
import usersRoute from './Routes/userRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

app.use('/users', usersRoute);

export default app;
