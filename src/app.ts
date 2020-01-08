import { router } from './features';
import express from 'express';

const app = express();

app
  .set('json spaces', 2)
  .use(express.json())
  .use('/', router);

app.listen(3000, () => {
  console.warn('Listening...');
});
