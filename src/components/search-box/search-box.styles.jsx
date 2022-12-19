import styled from "styled-components";

export const SearchContainer = styled.div`
height:120px;
display:flex;
justify-content: flex-end;
align-items: center;
`

export const SearchInner = styled.div`
position:relative;
`

export const Dropdown = styled.div`
background-color: white;
display: flex;
flex-direction: column;
height:min-context;
position:absolute;
width: 370px;
margin-top:5px;
`

export const DropdownRow = styled.div`
cursor: pointer;
text-align: start;
margin: 10px 5px;
font-size:1.1rem;
border-bottom:1px dotted grey;
`

export const Input = styled.input`
width: 370px;
padding: 15px 5px;
color: black;
font-size:1.1rem;
border: 0;
border-radius: 3px 0 0 3px;
&:focus {
  outline: 0;
}
&[type="search" i]::-webkit-search-cancel-button{
    cursor:pointer;
}
}
`
