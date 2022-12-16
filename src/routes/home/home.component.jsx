import {
    HeroContainer,
    SelectedBookContainer,
    CardContainer,
    CardImage,
    CardTitle,
    CardDesc,
    BookListContainer,
    Searchbox,
    BookList,
    Book,
    Title,
    PagesContainer
} from "./home.styles"
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
            <SelectedBookContainer>
                <CardContainer>
                    <CardImage></CardImage>
                    <CardTitle>hey</CardTitle>
                    <CardDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat modi, corporis quae dignissimos saepe esse similique optio ad! Quae maiores incidunt minus suscipit tempore cum blanditiis error quo dignissimos.</CardDesc>
                </CardContainer>
            </SelectedBookContainer>
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
                        <button key={number} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    ))}
                </PagesContainer>
            </BookListContainer>
        </HeroContainer>
    )
}

export default Home