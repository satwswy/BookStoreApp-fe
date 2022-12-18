import {
    HeroContainer,
    BookListContainer,
    Searchbox,
    BookList,
    Book,
    Title,
    PagesContainer,
    Button
} from "./home.styles"
import SelectedBook from "../../components/selectedbook/selected-book.component";
import books from '../../books.json'
import { useState } from "react";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(12);


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
        pageNumbers.push(i);
    }
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <HeroContainer>
            <SelectedBook />
            <BookListContainer>
                <Searchbox></Searchbox>
                <BookList>
                    {currentBooks.map((book, index) => {
                        return <Book key={index}>
                            <img src={book.image} alt={book.title} />
                            <Title>{book.title}</Title>
                        </Book>
                    })}
                </BookList>
                <PagesContainer >
                    {pageNumbers.map(number => (
                        <Button key={number} onClick={() => paginate(number)}>
                            {number}
                        </Button>
                    ))}
                </PagesContainer>
            </BookListContainer>
        </HeroContainer>
    )
}

export default Home