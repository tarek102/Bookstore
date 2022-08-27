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
        <div className="book-info">
          <h4 className="category">{category}</h4>
          <h3 className="title">{title}</h3>
          <h4 className="author">{author}</h4>
          <div className="btn-group">
            <button type="button">Comments</button>
            <button type="button" onClick={removeBook}>Remove</button>
            <button type="button">Edit</button>
          </div>

        </div>
        <div className="progress">
          <h3>65%</h3>
          <h5>Completed</h5>
        </div>
        <div className="chapter">
          <h5>CURRENT CHAPTER</h5>
          <h4>chapter 7</h4>
          <button type="button" className="submit-btn">UPDATE PROGRESS</button>
        </div>
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
