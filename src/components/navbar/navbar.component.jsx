import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import {
    NavigationContainer,
    NavLinksContainer,
    LogoContainer,
    NavLink,
    Button,
    HamburgerContainer
} from './navbar.styles.jsx';
import { ReactComponent as Logo } from '../../assets/logo.svg'




const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/' onClick={() => closeMenu()}>Home</NavLink>
                    <NavLink to='/categories' onClick={() => closeMenu()}>Categories</NavLink>
                    <NavLink to='/auth' onClick={() => closeMenu()}>Sign in</NavLink>
                </NavLinksContainer>
            </NavigationContainer>
            <Button onClick={handleToggle}>{navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
            </Button>
            { navbarOpen && 
            <HamburgerContainer>
                <LogoContainer to='/'>
                    <Logo />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/' onClick={() => closeMenu()}>Home</NavLink>
                    <NavLink to='/categories' onClick={() => closeMenu()}>Categories</NavLink>
                    <NavLink to='/auth' onClick={() => closeMenu()}>Sign in</NavLink>
                </NavLinksContainer>
            </HamburgerContainer>}
            <Outlet />
        </>
    )
}

export default Navbar