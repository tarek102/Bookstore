import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from './redux/books/books';

const Booklist = () => {
  const books = useSelector((state) => state.book);

  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(
      removeBook(e.target.id),
    );
  };

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} remove={onClick} />
      ))}
    </ul>
  );
};

export default Booklist;
