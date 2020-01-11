import { BooksService } from './books.service';

export const getAllBooks = async (req, res, next) => {
  try {
    const allBooks = await BooksService.getAll();
    res.json(allBooks);
  } catch (e) {
    next(e);
  }
};

export const getOneBook = async (req, res, next) => {
  try {
    const book = await BooksService.getBook(req.params.id);
    res.json(book);
  } catch (e) {
    next(e);
  }
};

export const getBooksByAuthor = async (req, res, next) => {
  try {
    const books = await BooksService.getBooksByAuthor(req.params.authorId);
    res.json(books);
  } catch (e) {
    next(e);
  }
};

export const createNewBook = async (req, res, next) => {
  try {
    const book = await BooksService.createBook(req.body);
    res.json(book);
  } catch (e) {
    next(e);
  }
};

export const updateOneBook = async (req, res, next) => {
  try {
    const book = await BooksService.updateBook(req.params.id, req.body);
    res.json(book);
  } catch (e) {
    next(e);
  }
};
