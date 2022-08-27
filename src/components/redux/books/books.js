import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const REMOVE_BOOK = 'bookstore/books/BOOK_REMOVE';
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oyWDKjNFmDbPA4wl83dI/books';

export const getBookFunc = createAsyncThunk(
  GET_BOOKS,
  async () => {
    const data = await fetch(api);
    const response = await data.json();
    const arr = [];
    const keys = Object.keys(response);
    keys.map((key) => (
      arr.push({
        item_id: key,
        title: response[key][0].title,
        author: response[key][0].author,
        category: response[key][0].category,
      })
    ));
    return [] || arr;
  },
);

export const addBookFunc = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await fetch(api, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(book),
    });
    return book;
  },
);

export const removeBookFunc = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    await fetch(`${api}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(id),
    });
    return id;
  },
);

// Reducer

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];

    case `${GET_BOOKS}/fulfilled`:
      return action.payload;

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
