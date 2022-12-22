import {
    SelectedBookContainer,
    CardContainer,
    CardImage,
    CardTitle,
    CardDesc
} from "./selected-book.styles"
import { useContext } from "react"
import { SelectedBookContext } from "../../context/SelectedBookContext"


const SelectedBook = () => {
    const {selectedBook}= useContext(SelectedBookContext)
    return (
        <SelectedBookContainer>
            <CardContainer>
            <CardImage src={selectedBook!==null?selectedBook.image:""}/>
                <CardTitle>{selectedBook!==null?selectedBook.title:"title"}</CardTitle>
                <CardDesc>{selectedBook!==null?selectedBook.desc:"desc"}</CardDesc>
            </CardContainer>
        </SelectedBookContainer>
    )
}

export default SelectedBook