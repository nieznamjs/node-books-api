import { Router } from 'express';
import { getAllBooks } from './books.controller';

const booksRouter = Router();

booksRouter
  .route('/')
  .get(getAllBooks);

export { booksRouter };
