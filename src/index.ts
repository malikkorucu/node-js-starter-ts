import "reflect-metadata";
import express from 'express'
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';

const app = createExpressServer({
  routePrefix: '/api',
  controllers: [UserController], 
});

app.use(express.json());

app.listen(3000 , ()=> {
  console.log('server started')
});