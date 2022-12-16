import { 
HeroContainer,
SelectedBookContainer,
BookListContainer,
Searchbox,
BookList
} from "./home.styles"

const Home = () => {
    return (
        <HeroContainer>
            <SelectedBookContainer></SelectedBookContainer>
            <BookListContainer>
                <Searchbox></Searchbox>
                <BookList></BookList>
            </BookListContainer>
        </HeroContainer>
    )
}

export default Home