const ADD_CATEGORY = 'bookstore/categories/ADD_CATEGORY';

export const addCategory = () => ({
  type: ADD_CATEGORY,
  text: 'UNDER CONSTRUCTION',
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return action.text;

    default:
      return state;
  }
};

export default categoriesReducer;
