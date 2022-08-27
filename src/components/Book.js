/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const {
    item_id, title, author, category,
  } = book;
  return (
    <li id={item_id} key={item_id}>
      <div className="bookItem">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <h4>{category}</h4>
        <button type="button" onClick={removeBook}>Remove</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
