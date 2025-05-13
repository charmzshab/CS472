import { useState, useEffect } from "react";
import { useBooks } from "./BookContext";
import { useParams, useNavigate } from "react-router-dom";

const EditBookForm = () => {
   const { id } = useParams();
   console.log(id);
   
  const navigate = useNavigate();
  const { books, updateBook } = useBooks();
  const [form, setForm] = useState({ title: "", author: "" });

  useEffect(() => {
     const book = books.find((b) => b.id === id);
     console.log(book);
     
    if (book) {
      setForm({ title: book.title, author: book.author });
    }
  }, [books, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.author) {
      updateBook(parseInt(id), form);
      navigate("/"); // Redirect to the home page after updating a book
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Title"
        required
      />
      <input
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
        placeholder="Author"
        required
      />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default EditBookForm;
