import express from 'express';
import 'reflect-metadata';

import { router } from './routes';

import './database';

import './shared/container';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../src/swagger.json';

const app = express();

// Midleware
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(3000, () => console.log('Init Server on http://localhost:3000'));
