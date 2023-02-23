import express from 'express';
import userController from '../Controllers/userController';
import {
  validationLevel,
  validationName,
  validationPassword,
  validationVocation,
} from '../middlewares/userMiddleware';

const usersRoute = express.Router();
usersRoute.post(
  '/', 
  validationPassword, 
  validationName, 
  validationLevel, 
  validationVocation,
  userController.newUser,
);

export default usersRoute;