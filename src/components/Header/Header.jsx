import { useState, useEffect } from "react"

import Logo from "../Logo/Logo"
import { Container } from '../Container/Container.jsx'
import { HeaderNav } from "../HeaderNav/HeaderNav"
import { HeaderBox, Wrapper } from "./Header.styled"

export function Header() {
    const [addBgtoHeader, setAddBgtoHeader] = useState(false);

    const handleScroll = () => { 
        if (window.scrollY > 0) {            
            setAddBgtoHeader(true);
        }
        if (window.scrollY === 0) {
            setAddBgtoHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => { 
            window.removeEventListener("scroll", handleScroll);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addBgtoHeader]);

    const setBg = () => { 
        if (addBgtoHeader) {
            return (
               {backgroundColor: `rgba(0, 0, 0, 0.8)`}
            )
        }
    }

    const background = setBg();
   
    return (
        <HeaderBox style={background}>            
            <Container>
                <Wrapper>
                    <Logo />  
                    <HeaderNav />
                </Wrapper>
            </Container>
        </HeaderBox>
    )
}