const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/BOOK_REMOVE';

export const addBookFunc = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBookFunc = (id) => ({
  type: REMOVE_BOOK,
  id,
});

// Reducer

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { ...action.payload }];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default bookReducer;
