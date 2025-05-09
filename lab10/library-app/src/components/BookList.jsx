
import { useBooks } from "./BookContext";


const BookList = ()=>{
    const {books,setEditingBook,deleteBook} = useBooks()
    return (
        <div>
            {books.map((book) => (
        <div key={book.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
          <button onClick={() => setEditingBook(book)}>Edit</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
            ))}
        </div>
    );
    
}

export default BookList