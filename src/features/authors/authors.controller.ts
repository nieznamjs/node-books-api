import { AuthorsService } from './authors.service';

export const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await AuthorsService.getAll();
    res.json(authors);
  } catch (e) {
    next(e);
  }
};

export const getOneAuthor = async (req, res, next) => {
  try {
    const author = await AuthorsService.getAuthor(req.params.id);
    res.json(author);
  } catch (e) {
    next(e);
  }
};

export const createNewAuthor = async (req, res, next) => {
  try {
    const createdAuthor = await AuthorsService.createAuthor(req.body);
    res.json(createdAuthor);
  } catch (e) {
    next(e);
  }
};

export const updateAuthor = async (req, res, next) => {
  try {
    const updatedAuthor = await AuthorsService.updateAuthor(req.params.id, req.body);
    res.json(updatedAuthor);
  } catch (e) {
    next(e);
  }
};
