import styled from "styled-components";


export const BookListContainer = styled.div`
width: 65%;
border:1px solid blue;
display:flex;
flex-direction:column;
`

export const Books = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 30px;
@media (max-width: 1300px) {
  grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 700px) {
  grid-template-columns: repeat(1, 1fr);
}
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
cursor:pointer;
img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
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
flex-grow:1;
align-items:flex-end;
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