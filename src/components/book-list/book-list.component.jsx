import {
    BookListContainer,
    Books,
    Book,
    Title,
    PagesContainer,
    Button
} from "./book-list.styles"
import books from '../../books.json'
import SearchBox from "../search-box/search-box.component";
import { useState, useContext } from "react";
import { SelectedBookContext } from "../../context/SelectedBookContext";

const BookList = () => {
    const { setSelectedBook } = useContext(SelectedBookContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(6);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
        pageNumbers.push(i);
    }
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <BookListContainer>
            <SearchBox />
            <Books>
                {currentBooks.map((book, index) => {
                    return <Book key={index} onClick={() => { setSelectedBook(book) }}>
                        <img src={book.image} alt={book.title} />
                        <Title>{book.title}</Title>
                    </Book>
                })}
            </Books>
            <PagesContainer >
                {pageNumbers.map(number =>
                    <Button key={number} onClick={() => paginate(number)}>
                        {number}
                    </Button>
                )}
            </PagesContainer>
        </BookListContainer>
    )
}

export default BookList