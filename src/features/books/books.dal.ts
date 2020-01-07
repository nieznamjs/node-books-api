import { Book } from '../shared/interfaces/book.interface';

const books: Book[] = [
  { title: 'Nowa książka', pagesCount: 300, authorId: '1' },
  { title: 'Stara', pagesCount: 200, authorId: '1' },
  { title: 'Średnio-stara', pagesCount: 500, authorId: '2' },
];

export const getAll = async () => books;
