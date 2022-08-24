const status = 'CHECK_STATUS';

export const checkStatus = (payload) => ({
  type: status,
  payload,
});

const categoriesReduser = (state = [], action) => {
  switch (action.type) {
    case status:
      return ['under_construction'];

    default:
      return state;
  }
};

export default categoriesReduser;
