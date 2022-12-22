import styled,{keyframes} from "styled-components";

const rotate = keyframes`
0% {
    transform: perspective(400px) rotateY(0);
}

100% {
    transform: perspective(400px) rotateY(360deg);
}
`

const opacity = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`
export const SelectedBookContainer = styled.div`
width: 35%;
opacity: 100%;
animation: ${opacity} 2s;
`

export const NotSelectedBookContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:50px;
width: 35%;
background-color:inherit;
color:papayawhip;
text-align:center;
`

export const NotSelectedHeader = styled.h1`
margin-top:50px;
`
export const NotSelectedImage = styled.img`
width: 250px;
height:250px;
animation:15s ${rotate} infinite linear ;
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

margin-bottom:40px;
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