import uuid from 'uuid/v1';
import { Book } from '../shared/interfaces/book.interface';
import { Author } from '../shared/interfaces/author.interface';

export const authorsMock: Author[] = [
  { id: uuid(), firstName: 'Gregorowicz', lastName: 'Brzęczyszczykiewicz' },
  { id: uuid(), firstName: 'Dreftowy', lastName: 'Staruch' },
];

export const booksMock: Book[] = [
  { id: uuid(), title: 'Nowa książka', pagesCount: 300, authorId: authorsMock[0].id },
  { id: uuid(), title: 'Stara', pagesCount: 200, authorId: authorsMock[0].id },
  { id: uuid(), title: 'Średnio-stara', pagesCount: 500, authorId: authorsMock[1].id },
];
