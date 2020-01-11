import uuid from 'uuid/v1';
import { Book } from '../../shared/interfaces/book.interface';
import { CreateBookBody } from '../../shared/interfaces/create-book-body.interface';
import { booksMock } from '../../mocks/mocks';

let books = booksMock;

export const getAll = async () => books;

export const getBook = async (id: string) => books.find(book => book.id === id);

export const getBooksByAuthor = async (id: string) => books.filter(book => book.authorId === id);

export const createBook = async (book: CreateBookBody) => {
  const newBook: Book = {
    id: uuid(),
    ...book,
  };

  books = [
    ...books,
    newBook
  ];

  return newBook;
};

export const updateBook = async (id: string, bookToUpdate: Book) => {
  books = books.map(book => {
    return book.id === id ? { id, ...bookToUpdate } : book;
  });

  return books.find(book => book.id === id);
};
