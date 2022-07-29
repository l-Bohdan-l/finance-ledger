import Logo from "../Logo/Logo"
import { Container } from '../Container/Container.jsx'
import { HeaderNav } from "../HeaderNav/HeaderNav"
import { HeaderBox, Wrapper } from "./Header.styled"

export function Header() {
    return (
        <HeaderBox>            
            <Container>
                <Wrapper>
                    <Logo />  
                    <HeaderNav />
                </Wrapper>
            </Container>
        </HeaderBox>
    )
}