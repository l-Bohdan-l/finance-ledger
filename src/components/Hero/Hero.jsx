import { Container } from "../Container/Container"
import { Title, HeroWrapper, Subtitle, Button, HeroSection } from "./Hero.styled"

export function Hero() {
    return (
        <HeroWrapper>
            <Container>
                <HeroSection>
                    <Title>The Sky Is The Limit</Title>
                    <Subtitle>We provide world class financial assistance</Subtitle>
                    <Button type="button" >Read More</Button>
                </HeroSection>
            </Container>
        </HeroWrapper>
    )
}