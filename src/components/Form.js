/* eslint-disable camelcase */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookFunc } from './redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('GENERAL');

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();
  const formSubmit = (e) => {
    const item_id = uuidv4();
    e.preventDefault();
    const book = {
      item_id, title, author, category,
    };
    if (title.trim() && author.trim()) {
      dispatch(addBookFunc(book));
    }

    setAuthor('');
    setTitle('');
    setCategory('');
  };

  const categories = ['Science', 'Fiction', 'Drama', 'Romance', 'Geography', 'History'].sort();
  const categoryChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="add-book">
      <div className="separating-line" />
      <h2 className="add-new-book">ADD NEW BOOK</h2>
      <form onSubmit={formSubmit}>
        <input type="text" name="title" className="title-input" placeholder="Title" onChange={titleChange} value={title} />
        <input type="text" name="author" className="author-input" placeholder="Author" onChange={authorChange} value={author} />
        <select name="Category" onClick={categoryChange}>
          <option value="General">Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button className="submit-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
