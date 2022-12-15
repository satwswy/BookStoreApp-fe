import styled from "styled-components";
import { Link } from 'react-router-dom';


export const NavigationContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
align-items: center;
@media (max-width: 700px) {
   display: none;
 }
`
export const HamburgerContainer = styled.div`
padding:0;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 25px;
align-items: flex-start;
gap: 15px;
margin-top:50px;
background-color: antiquewhite;
@media (min-width: 701px) {
   display: none;
 }
`
export const LogoContainer = styled(Link)`
height: 100 %;
width: 70px;
      
`
export const NavLinksContainer = styled.div`
width: 50 %;
height: 100 %;
display: flex;
justify-content: flex-end;
gap: 30px;
@media (max-width: 700px) {
   flex-direction: column;
 }
`

export const NavLink = styled(Link)`
font-size: 1.8rem;
cursor: pointer;
@media (max-width: 700px) {
   color:black;
 }
`
export const Button = styled.button`
display: none;
cursor: pointer;
border: none;
@media (max-width: 700px) {
   display: inline-block;
 }
`