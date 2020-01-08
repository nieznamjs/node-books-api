import uuid from 'uuid/v1';
import { Book } from '../../shared/interfaces/book.interface';
import { CreateBookBody } from '../../shared/interfaces/create-book-body.interface';

let books: Book[] = [
  { id: uuid(), title: 'Nowa książka', pagesCount: 300, authorId: '1' },
  { id: uuid(), title: 'Stara', pagesCount: 200, authorId: '1' },
  { id: uuid(), title: 'Średnio-stara', pagesCount: 500, authorId: '2' },
];

export const getAll = async () => books;

export const getBook = async (id: string) => books.find(book => book.id === id);

export const createBook = async (book: CreateBookBody) => {
  const newBook = {
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
