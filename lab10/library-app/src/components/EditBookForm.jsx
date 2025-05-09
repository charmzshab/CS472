import { useState, useEffect } from "react";
import { useBooks } from "./BookContext";

const EditBookForm = () => {
  const { editingBook, updateBook } = useBooks();
  const [form, setForm] = useState({ title: "", author: "" });

  useEffect(() => {
    if (editingBook) {
      setForm({ title: editingBook.title, author: editingBook.author });
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBook && form.title && form.author) {
      updateBook(editingBook.id, form);
    }
  };

  if (!editingBook) return null;

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
