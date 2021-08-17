import 'reflect-metadata';
import express from 'express';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import connectDatabase from './helpers/db'
import dotenv from 'dotenv'

dotenv.config();

 
const app = createExpressServer({
  routePrefix: '/api',
  controllers: [UserController],
});

connectDatabase()

app.use(express.json());

app.listen(3000, () => {
  console.log('server started');
});
