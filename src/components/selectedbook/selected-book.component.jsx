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
                <CardImage></CardImage>
                <CardTitle>hey</CardTitle>
                <CardDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat modi, corporis quae dignissimos saepe esse similique optio ad! Quae maiores incidunt minus suscipit tempore cum blanditiis error quo dignissimos.</CardDesc>
            </CardContainer>
        </SelectedBookContainer>
    )
}

export default SelectedBook