import { Book } from './book.interface';

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  books?: Book;
}
