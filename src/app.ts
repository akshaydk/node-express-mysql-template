import './init';
import express from 'express';
import helmet from 'helmet';
import * as mysql from './middlewares/mysql';

const app = express();
app.use(helmet());
app.use(express.json());
app.use(mysql.connect);

export default app;
