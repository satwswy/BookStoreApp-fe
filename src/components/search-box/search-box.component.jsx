import { useState } from "react";
import books from "../../books.json"
import {
    SearchContainer,
    Dropdown,
    DropdownRow,
    Input,
    SearchInner,
} from "./search-box.styles";

const SearchBox = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        console.log("search ", searchTerm);
    };
    return (
        <SearchContainer>
            <SearchInner>
                <Input type="search" placeholder="Search Book..." value={value} onChange={onChange} />
                <Dropdown>
                    {books
                        .filter((book) => {
                            const searchTerm = value.toLowerCase();
                            const bookTitle = book.title.toLowerCase();
                            return (
                                searchTerm &&
                                bookTitle.startsWith(searchTerm) &&
                                bookTitle !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((book) => (
                            <DropdownRow
                                onClick={() => onSearch(book.title)}
                                key={book.title}
                            >
                                {book.title}
                            </DropdownRow>
                        ))}
                </Dropdown>
            </SearchInner>
        </SearchContainer>
    )
}

export default SearchBox