import { 
HeroContainer,
SelectedBookContainer,
CardContainer,
CardImage,
CardTitle,
CardDesc,
BookListContainer,
Searchbox,
BookList
} from "./home.styles"

const Home = () => {
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
                <BookList></BookList>
            </BookListContainer>
        </HeroContainer>
    )
}

export default Home