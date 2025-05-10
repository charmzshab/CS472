import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./components/BookContext";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";
import BookList from "./components/BookList";

const App = () => {
  return (
    <BookProvider>
      <Router>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/add">Add Book</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBookForm />} />
          <Route path="/edit/:id" element={<EditBookForm />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;










