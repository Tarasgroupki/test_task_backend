import { Router } from 'express';

const app = Router();

import DataApi from './data';
app.use('/api', DataApi);

export default app;
