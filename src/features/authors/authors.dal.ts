import uuid from 'uuid/v1';
import { authorsMock } from '../../mocks/mocks';
import { CreateAuthorBody } from '../../shared/interfaces/create-author-body.interface';
import { Author } from '../../shared/interfaces/author.interface';

let authors = authorsMock;

export const getAll = async () => authors;

export const getAuthor = async (id: string) => authors.find(author => author.id === id);

export const createAuthor = async (body: CreateAuthorBody) => {
  const newAuthor: Author = {
    id: uuid(),
    ...body,
  };

  authors = [
    ...authors,
    newAuthor,
  ];

  return newAuthor;
};

export const updateAuthor = async (id: string, updatedAuthor: Author) => {
  authors = authors.map(author => {
    return author.id === id ? { id, ...updatedAuthor } : author;
  });

  return authors.find(author => author.id === id);
};
