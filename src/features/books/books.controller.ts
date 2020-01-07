import { getAll } from './books.dal';

export const getAllBooks = async (req, res, next) => {
  try {
    const allBooks = await getAll();
    res.json(allBooks);
  } catch (e) {
    next(e);
  }
};
