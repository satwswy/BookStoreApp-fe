import { Outlet } from 'react-router-dom';
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from './navbar.styles.jsx';





const Navbar = () => {
    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'></LogoContainer>
                <NavLinks>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/categories'>Categories</NavLink>
                    <NavLink to='/auth'>Sign in</NavLink>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navbar