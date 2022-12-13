import styled from "styled-components";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.webp'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
   height: 100 %;
   width: 70px;
   padding: 25px;    
   background-image: url(${Logo});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
`
export const NavLinks = styled.div`
      width: 50 %;
      height: 100 %;
      display: flex;
      align - items: center;
      justify - content: flex - end;
`

export const NavLink = styled(Link)`
      color: white;
      padding: 10px 15px;
      cursor: pointer;
`
