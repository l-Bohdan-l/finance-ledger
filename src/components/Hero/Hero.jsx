import { Container } from "../Container/Container"
import { Title, HeroWrapper, Subtitle, HeroSection } from "./Hero.styled"
import { Button } from "../Button/Button"

export function Hero() {
    return (
        <HeroWrapper>
            <Container>
                <HeroSection>
                    <Title>The Sky Is The Limit</Title>
                    <Subtitle>We provide world class financial assistance</Subtitle>
                    {/* <Button type="button" >Read More</Button> */}
                    <Button border/>
                </HeroSection>
            </Container>
        </HeroWrapper>
    )
}