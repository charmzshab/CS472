import { BookProvider } from "./components/BookContext";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";
import BookList from "./components/BookList";

const App = () => {
  return (
    <BookProvider>
      <div style={{ padding: "2rem" }}>
        <h1>Book Library</h1>
        <AddBookForm />
        <EditBookForm />
        <BookList />
      </div>
    </BookProvider>
  );
};

export default App;















// import { BookList } from "./components/BookList"


// const App = () =>  {
//   return (
//     <>
//     <BookList/>
//     </>
//   )
// }

// export default App
