
import { useBooks } from "./BookContext";
import { Link } from "react-router-dom";


const BookList = ()=>{
    const {books,setEditingBook,deleteBook,loading,error} = useBooks()
 if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

    return (
        <div>
            {books.map((book) => (
        <div key={book.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
          {/* <button onClick={() => setEditingBook(book)}>Edit</button> */}
          <Link to={`/edit/${book.id}`}><button>Edit</button></Link>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
            ))}
        </div>
    );
    
}

export default BookList