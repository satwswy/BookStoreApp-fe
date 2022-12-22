import {
    SelectedBookContainer,
    CardContainer,
    CardImage,
    CardTitle,
    CardDesc,
    CardTag
} from "./selected-book.styles"
import { useContext } from "react"
import { SelectedBookContext } from "../../context/SelectedBookContext"


const SelectedBook = () => {
    const { selectedBook } = useContext(SelectedBookContext)
    return (
        <SelectedBookContainer>
            <CardContainer>
                <CardImage src={selectedBook !== null ? selectedBook.image : ""} />
                <CardTag>Book Title</CardTag>
                <CardTitle>{selectedBook !== null ? selectedBook.title : ""}</CardTitle>
                <CardTag>Book Description</CardTag>
                <CardDesc>{selectedBook !== null ? selectedBook.desc : ""}</CardDesc>
            </CardContainer>
        </SelectedBookContainer>
    )
}

export default SelectedBook