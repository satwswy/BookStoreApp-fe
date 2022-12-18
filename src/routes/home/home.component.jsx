import {
    HeroContainer,
} from "./home.styles"
import SelectedBook from "../../components/selectedbook/selected-book.component";
import BookList from "../../components/book-list/book-list.component";

const Home = () => {

    return (
        <HeroContainer>
            <SelectedBook />
            <BookList />
        </HeroContainer>
    )
}

export default Home