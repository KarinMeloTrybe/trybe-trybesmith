import express from 'express';
import userController from '../Controllers/userController';
import validationUser from '../middlewares/userMiddleware';

const usersRoute = express.Router();
usersRoute.post('/', validationUser, userController.newUser);

export default usersRoute;