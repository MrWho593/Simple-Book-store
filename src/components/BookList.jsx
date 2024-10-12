import { Link } from "react-router-dom";
import books from "../data/book";

const BookList = () => {
    return (
        <div>
            <h2>Book List</h2>
            <ul className="book-list">
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/book/${book.id}`}>{book.title}</Link> - <span className="author">{book.author}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
