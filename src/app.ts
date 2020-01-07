import { router } from './features';

const express = require('express');

const app = express();

app
  .set('json spaces', 2)
  .use(express.json())
  .use('/', router);

app.listen(3000, () => {
  console.warn('Listening...');
});
