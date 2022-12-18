import styled from "styled-components";


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

export const Books = styled.div`
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
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border:1px dotted white;
img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    img {
      opacity: 0.8;
    }
  }
`

export const Title = styled.span`
  width: 100%;
  height:20%;
  color: white;
  text-align:center;
  font-size:1.2rem;
`;


export const PagesContainer = styled.div`
display:flex;
`

export const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border:none;
&:hover{
  cursor:pointer;
}
`;