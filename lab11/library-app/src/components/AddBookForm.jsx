import { useState } from "react";
import { useBooks } from "./BookContext";
import { useNavigate } from "react-router-dom";

const AddBookForm = () => {
  const { addBook } = useBooks();
  const [form, setForm] = useState({ title: "", author: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.author) {
      addBook(form);
      navigate("/"); // Redirect to the home page after adding a book
      setForm({ title: "", author: "" });
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
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
