import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/Books';
import categoriesReduser from './categories/Categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReduser,
});

const store = configureStore(rootReducer);

export default store;
