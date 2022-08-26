const STATUS = 'bookstore/categories/CHECK_STATUS';
export const checkStatus = (payload) => ({
  type: STATUS,
  payload,
});

const categoriesReduser = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return ['under_construction'];

    default:
      return state;
  }
};

export default categoriesReduser;
