import { Router } from 'express';
import { createNewAuthor, getAllAuthors, getOneAuthor, updateAuthor } from './authors.controller';

const authorsRouter = Router();

authorsRouter
  .route('/')
  .get(getAllAuthors)
  .post((req, res, next) => createNewAuthor(req, res, next));

authorsRouter
  .route('/:id')
  .get((req, res, next) => getOneAuthor(req, res, next))
  .put((req, res, next) => updateAuthor(req, res, next));

export { authorsRouter };
