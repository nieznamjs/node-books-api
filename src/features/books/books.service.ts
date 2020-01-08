import { createBook, getAll, getBook, updateBook } from './books.dal';
import { CreateBookBody } from '../../shared/interfaces/create-book-body.interface';
import { Book } from '../../shared/interfaces/book.interface';

export class BooksService {
  public static async getAll(): Promise<Book[]> {
    return await getAll();
  }

  public static async getBook(id: string): Promise<Book> {
    return await getBook(id);
  }

  public static async createBook(book: CreateBookBody): Promise<Book> {
    return await createBook(book);
  }

  public static async updateBook(id: string, book: Book): Promise<Book> {
    return await updateBook(id, book);
  }
}
