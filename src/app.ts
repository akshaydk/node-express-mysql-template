import './init';
import express from 'express';
import * as mysql from './middlewares/mysql';

const app = express();
app.use(mysql.connect);

export default app;
