import { Book } from './book.interface';

export interface CreateBookBody extends Omit<Book, 'id'> {
}
