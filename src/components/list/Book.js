import React from 'react';

const Book = (props) => {
  const { bookList } = props;

  return (
    <div className="book">
      {bookList.map((book) => (
        <div className="each-book" key={book.id}>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
        </div>
      ))}
    </div>
  );
};

export default Book;
