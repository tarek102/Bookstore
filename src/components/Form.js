import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();
  const formSubmit = (e) => {
    const id = uuidv4();
    e.preventDefault();
    dispatch(
      addBook(id, title, author),
    );
    
    setAuthor('');
    setTitle('');
    
  };
  return (
    <div className="addBook">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={formSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={titleChange} value={title} />
        <input type="text" name="author" placeholder="Author" onChange={authorChange} value={author} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
