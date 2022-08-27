import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory } from './redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addCategory(),
    );
  };
  return (
    <div className="categories">
      <p>{categories}</p>
      <button type="button" onClick={handleClick}>Check Status</button>
    </div>
  );
};

export default Categories;
