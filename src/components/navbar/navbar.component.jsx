import {
    NavigationContainer,
    LogoContainer
} from './navbar.styles';





const Navbar = () => {
    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'></LogoContainer>
            </NavigationContainer>
        </>
    )
}

export default Navbar