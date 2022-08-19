import React, { useState } from 'react';
import Form from './list/Form';
import Book from './list/Book';

const Books = () => {
  const [bookList] = useState([
    { title: 'The Hunger Games', author: 'Suzanne Collins', id: 1 },
  ]);
  return (
    <div>
      <Book bookList={bookList} />
      <Form />
    </div>
  );
};

export default Books;
