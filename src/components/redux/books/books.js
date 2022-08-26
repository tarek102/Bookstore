import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [{
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  id: uuidv4(),
},
{
  title: 'Beloved',
  author: 'Toni Morrison',
  id: uuidv4(),
}];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    default: return state;
  }
};

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  payload: {
    id,
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
