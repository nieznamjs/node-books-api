import { Book } from './book.interface';

export interface Author {
  firstName: string;
  lastName: string;
  books?: Book;
}
