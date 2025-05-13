import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router'
const API_URL = 'https://67d17ef590e0670699ba5929.mockapi.io/books';

function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useSearchParams();
    console.log(search.get('title'));
    const fetchBooks = async () => {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setBooks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <ul>
                {books.map(book => (
                    <li className='bookli' key={book.id}>
                        <Link to={`${book.id}/${book.author}/${book.title}`}>
                            {book.title}
                        </Link>

                    </li>
                )
                )}
            </ul>

        </div >);
}

export default Books;