import { Outlet } from 'react-router-dom';
import {
    NavigationContainer,
    NavLinksContainer,
    LogoContainer,
    NavLink,
} from './navbar.styles.jsx';
import { ReactComponent as Logo } from '../../assets/logo.svg'




const Navbar = () => {
    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/categories'>Categories</NavLink>
                    <NavLink to='/auth'>Sign in</NavLink>
                </NavLinksContainer>
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navbar