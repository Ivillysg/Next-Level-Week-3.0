import express from 'express';
import 'express-async-errors';

import routes from './routes';
import path from 'path';
import './database/connection';
import erroHandler from './errors/handler';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(erroHandler);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

const port = process.env.PORT || 5500;
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`),
);
