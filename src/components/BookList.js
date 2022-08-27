import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getBookFunc, removeBookFunc } from './redux/books/books';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { id } = e.target.parentNode.parentNode.parentNode.parentNode;
    dispatch(
      removeBookFunc(id),
    );
  };

  useEffect(() => {
    dispatch(getBookFunc());
  }, []);

  return (
    <ul className="book-list">
      {books.map((book) => (
        <Book id={book.item_id} key={book.item_id} book={book} removeBook={handleClick} />
      ))}
    </ul>
  );
};

export default Booklist;
