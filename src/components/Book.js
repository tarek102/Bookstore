import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { id, title, author } = book;
  return (
    <li id={id} key={id}>
      <div className="bookItem">
        <p>
          <h3>{title}</h3>
          <h4>{author}</h4>
        </p>
        <div>
          <button type="button" onClick={removeBook}>Remove</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf,
  removeBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
};

export default Book;
