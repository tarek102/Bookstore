const addBook = 'BOOK_ADDED';
const removeBook = 'BOOK_REMOVED';

export const addBookFunc = (payload) => ({
  type: addBook,
  payload,
});

export const removeBookFunc = (id) => ({
  type: removeBook,
  id,
});

// Reducer

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case addBook:
      return [...state, { ...action.payload }];

    case removeBook:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export default bookReducer;

// const Books = () => {
//   const [bookList] = useState([
//     { title: 'The Hunger Games', author: 'Suzanne Collins', id: 1 },
//   ]);
//   return (
//     <div>
//       <Book bookList={bookList} />
//       <Form />
//     </div>
//   );
// };

// export default Books;
