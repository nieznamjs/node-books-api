import { Author } from './author.interface';

export interface CreateAuthorBody extends Omit<Author, 'id'> {
}
