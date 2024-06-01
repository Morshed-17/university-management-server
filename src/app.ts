/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes

const test = (req: Request, res: Response) => {
  Promise.reject();
};

app.get('/', test);

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

// global error handling
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
