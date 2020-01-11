import { Author } from '../../shared/interfaces/author.interface';
import { CreateAuthorBody } from '../../shared/interfaces/create-author-body.interface';
import { createAuthor, getAll, getAuthor, updateAuthor } from './authors.dal';

export class AuthorsService {
  public static async getAll(): Promise<Author[]> {
    return await getAll();
  }

  public static async getAuthor(id: string): Promise<Author> {
    return await getAuthor(id);
  }

  public static async createAuthor(author: CreateAuthorBody): Promise<Author> {
    return await createAuthor(author);
  }

  public static async updateAuthor(id: string, author: Author): Promise<Author> {
    return await updateAuthor(id, author);
  }
}
