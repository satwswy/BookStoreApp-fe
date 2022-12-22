import {
    SelectedBookContainer,
    CardContainer,
    CardImage,
    CardTitle,
    CardDesc,
    CardTag,
    NotSelectedBookContainer,
    NotSelectedHeader,
    NotSelectedImage
} from "./selected-book.styles"
import { useContext } from "react"
import { SelectedBookContext } from "../../context/SelectedBookContext"


const SelectedBook = () => {
    const { selectedBook } = useContext(SelectedBookContext)
    return (
        <>
            {selectedBook !== null ?
                <SelectedBookContainer>
                    <CardContainer>
                        <CardImage src={selectedBook !== null ? selectedBook.image : ""} />
                        <CardTag>Book Title</CardTag>
                        <CardTitle>{selectedBook !== null ? selectedBook.title : ""}</CardTitle>
                        <CardTag>Book Description</CardTag>
                        <CardDesc>{selectedBook !== null ? selectedBook.desc : ""}</CardDesc>
                    </CardContainer>
                </SelectedBookContainer> :
                <NotSelectedBookContainer>
                    <NotSelectedHeader>Select a book</NotSelectedHeader>
                    <NotSelectedImage src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg" />
                </NotSelectedBookContainer>}
        </>

    )
}

export default SelectedBook