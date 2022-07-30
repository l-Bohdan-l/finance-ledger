import { Container } from "../Container/Container";
// import caseOne from '../../images/cases/cases1.jpg'
// import caseOneWebp from '../../images/cases/cases1.webp'
// import caseOne2x from '../../images/cases/cases1@2x.jpg'
// import caseOne2xWebp from '../../images/cases/cases1@2x.webp'
// import caseOne from '../../images/cases/cases1.jpg'
// import caseOneWebp from '../../images/cases/cases1.webp'
// import caseOne2x from '../../images/cases/cases1@2x.jpg'
// import caseOne2xWebp from '../../images/cases/cases1@2x.webp'
// import caseOne from '../../images/cases/cases1.jpg'
// import caseOneWebp from '../../images/cases/cases1.webp'
// import caseOne2x from '../../images/cases/cases1@2x.jpg'
// import caseOne2xWebp from '../../images/cases/cases1@2x.webp'
// import caseOne from '../../images/cases/cases1.jpg'
// import caseOneWebp from '../../images/cases/cases1.webp'
// import caseOne2x from '../../images/cases/cases1@2x.jpg'
// import caseOne2xWebp from '../../images/cases/cases1@2x.webp'
// import caseOne from '../../images/cases/cases1.jpg'
// import caseOneWebp from '../../images/cases/cases1.webp'
// import caseOne2x from '../../images/cases/cases1@2x.jpg'
// import caseOne2xWebp from '../../images/cases/cases1@2x.webp'
// import caseOne from '../../images/cases/cases1.jpg'
// import caseOneWebp from '../../images/cases/cases1.webp'
// import caseOne2x from '../../images/cases/cases1@2x.jpg'
// import caseOne2xWebp from '../../images/cases/cases1@2x.webp'
// import caseOne from '../../images/cases/cases1.jpg'
// import caseOneWebp from '../../images/cases/cases1.webp'
// import caseOne2x from '../../images/cases/cases1@2x.jpg'
// import caseOne2xWebp from '../../images/cases/cases1@2x.webp'
// import caseOne from '../../images/cases/cases1.jpg'
// import caseOneWebp from '../../images/cases/cases1.webp'
// import caseOne2x from '../../images/cases/cases1@2x.jpg'
// import caseOne2xWebp from '../../images/cases/cases1@2x.webp'
// import caseOne from '../../images/cases/cases1.jpg'
// import caseOneWebp from '../../images/cases/cases1.webp'
// import caseOne2x from '../../images/cases/cases1@2x.jpg'
// import caseOne2xWebp from '../../images/cases/cases1@2x.webp'

import casesGallery from "../../images/cases";
import {SubTitle, Title, SectionDescription, Section, CaseItem, Img, List} from './Cases.styled'

export function Cases() {
    return (
        <Section>
            <Container>
                <SubTitle>This is what we do</SubTitle>
                <Title>Business Cases</Title>
                <SectionDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</SectionDescription>

                <List>
                    {casesGallery.map((item, index) => {
                        return (
                            <CaseItem key={index}>
                                <picture>
                                    <source srcSet={`${item.webp} 1x, ${item.webp2x} 2x`} type='image/webp'/>
                                    <source srcSet={`${item.jpg} 1x, ${item.jpg2x} 2x`}/>
                                    <Img src={item.jpg} alt="case" />
                                </picture>
                            </CaseItem>
                        )
                    })}
                </List>
            </Container>
        </Section>
    );
}