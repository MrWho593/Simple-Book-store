import BookList from "../components/BookList";

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Book mart</h1>
            <div className="book-list-container">
                <BookList />
            </div>
        </div>
    );
};

export default Home;
