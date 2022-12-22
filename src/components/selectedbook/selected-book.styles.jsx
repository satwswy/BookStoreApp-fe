import styled from "styled-components";

export const SelectedBookContainer = styled.div`
width: 35%;
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
`

export const CardTitle = styled.h2`
font-size: 1.3rem;
color: #ffffff;
font-weight: 600;
text-align: center;
text-transform: uppercase;
letter-spacing: 0.01em;
line-height:37px;
`

export const CardDesc = styled.p`
font-size: 1.2rem;
line-height:37px;
color: #ffffff;
letter-spacing: 0.01em;
text-align:center;
`

export const CardTag = styled.h3`
font-size:1.4rem;
font-style: italic;
text-align:center;
color:papayawhip;
font-family: 'Crimson Text', serif;
`