import { Router } from 'express';
import { booksRouter } from './books';
import { authorsRouter } from './authors';

const router = Router();

router
  .use('/books', booksRouter)
  .use('/authors', authorsRouter);

export { router };
