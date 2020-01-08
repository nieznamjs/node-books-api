import { Router } from 'express';
import { createNewBook, getAllBooks, getOneBook, updateOneBook } from './books.controller';

const booksRouter = Router();

booksRouter
  .route('/')
  .get(getAllBooks)
  .post((req, res, next) => createNewBook(req, res, next));

booksRouter
  .route('/:id')
  .get((req, res, next) => getOneBook(req, res, next))
  .put((req, res, next) => updateOneBook(req, res, next));

export { booksRouter };
