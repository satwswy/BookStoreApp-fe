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
Title
} from "./home.styles"
import books from '../../books.json'

const Home = () => {
    console.log(books)
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
                    {books.map((book,index)=>{
                        return <Book key={index}>
                            <img src={book.image} alt={book.title} />
                            <Title>{book.title}</Title>
                        </Book>
                    })}
                </BookList>
            </BookListContainer>
        </HeroContainer>
    )
}

export default Home