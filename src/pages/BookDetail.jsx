import { useParams } from 'react-router-dom';
import books from '../data/book';

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  return (
    <div className="container">
        <div className="book-detail-container">
      {book ? (
        <>
          <h1>{book.title}</h1>
          <h2>by {book.author}</h2>
          <p>{book.description}</p>
        </>
      ) : (
        <p className="book-not-found">Book not found</p>
      )}
    </div>
    </div>
    
  );
};

export default BookDetail;
