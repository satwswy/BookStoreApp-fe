import { Outlet } from 'react-router-dom';
import {
    NavigationContainer,
    LogoContainer,
    NavLink,
} from './navbar.styles.jsx';





const Navbar = () => {
    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'></LogoContainer>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/categories'>Categories</NavLink>
                <NavLink to='/auth'>Sign in</NavLink>
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navbar