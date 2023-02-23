import express from 'express';
import loginController from '../Controllers/loginController';
import validationLogin from '../middlewares/loginMiddleware';

const loginRoute = express.Router();
loginRoute.post('/', validationLogin, loginController.newLogin);

export default loginRoute;