import styled from "styled-components";

export const HeroContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
border:2px solid black;
height:90vh;
`

export const BookListContainer = styled.div`
width: 65%;
height:100%;
border:1px solid blue;
`

export const Searchbox = styled.div`
width: 100%;
height:8%;
border:1px solid yellow;
`

export const BookList = styled.div`
width: 100%;
border:1px solid white;
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 30px;
`

export const Book = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap:5%;
  height: 350px;
  align-items: center;
  margin-bottom:25px;
  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
  }
`

export const Title = styled.span`
  width: 100%;
  height:20%;
`;

export const PagesContainer = styled.div`
display:flex;
`

export const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
&:hover{
  cursor:pointer;
}
`;