import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';

export const authRouter = Router();

authRouter
  .post('/register', AuthController.register)
  .post('/login', AuthController.login)
  
