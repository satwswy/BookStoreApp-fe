import styled from "styled-components";
import { Link } from 'react-router-dom';


export const NavigationContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
align-items: center;

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
`

export const NavLink = styled(Link)`
font-size: 1.8rem;
cursor: pointer;
`
