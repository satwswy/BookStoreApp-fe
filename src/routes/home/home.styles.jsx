import styled from "styled-components";

export const HeroContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
border:2px solid black;
height:90vh;
`

export const SelectedBookContainer = styled.div`
width: 35%;
height:100%;
border:1px solid yellow;
`
export const CardContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);   
}
`
export const CardImage = styled.img`
object-fit: cover;
width: 100%;
height: 35%;
border:2px solid purple;
`
export const CardTitle = styled.h2`
font-size: 1.5rem;
color: #ffffff;
font-weight: 600;
text-align: center;
text-transform: uppercase;
letter-spacing: 0.01em;
border:2px solid blue;
`
export const CardDesc = styled.p`
font-size: 1.2rem;
color: #ffffff;
letter-spacing: 0.01em;
border:2px solid green;
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