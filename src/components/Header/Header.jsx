import Logo from "../Logo/Logo"
// import { Container } from '../Container/Container.jsx'
import { HeaderNav } from "../HeaderNav/HeaderNav"
import { HeaderBox } from "./Header.styled"

export function Header() {
    return (
        <HeaderBox>            
            {/* <Container> */}
                <Logo />  
                <HeaderNav />
            {/* </Container> */}
        </HeaderBox>
    )
}