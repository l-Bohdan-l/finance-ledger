import teamPhoto from '../../images/home/people.jpg';
import teamPhoto2x from '../../images/home/people@2x.jpg';
import teamPhotoWebp from '../../images/home/people.webp';
import teamPhotoWebp2x from '../../images/home/people@2x.webp';
import teamPhotoTab from '../../images/home/people-tab.jpg';
import teamPhotoTabWebp from '../../images/home/people-tab.webp';
import teamPhotoTab2x from '../../images/home/people-tab@2x.jpg';
import teamPhotoTabWebp2x from '../../images/home/people-tab@2x.webp';
// import {Container} from '../Container/Container'
import { Image, AboutWrapper, Title, Subtitle, Description, TextBlock } from './About.styled';
import { Button } from '../Button/Button';

export function About() {
    return (
        <AboutWrapper> 
                    <picture>                        
                        <source srcSet={`${teamPhotoWebp} 1x, ${teamPhotoWebp2x} 2x`} type='image/webp' media="(min-width: 1360px)"/>
                        <source srcSet={`${teamPhoto} 1x, ${teamPhoto2x} 2x`} media="(min-width: 1360px)"/>
                        <source srcSet={`${teamPhotoTabWebp} 1x, ${teamPhotoTabWebp2x} 2x`} type='image/webp' media="(min-width: 768px)"/>
                        <source srcSet={`${teamPhotoTab} 1x, ${teamPhotoTab2x} 2x`} media="(min-width: 768px)"/>
                        <source srcSet={`${teamPhotoWebp} 1x, ${teamPhotoWebp2x} 2x`} type='image/webp' media="(max-width: 767px)"/>
                        <source srcSet={`${teamPhoto} 1x, ${teamPhoto2x} 2x`} media="(max-width: 767px)"/>
                        <Image src={teamPhoto} alt="Group of people in costumes" />
                    </picture>  
                    <TextBlock>
                            <Title>What you are looking for</Title>
                            <Subtitle>We provide bespoke solutions</Subtitle>
                            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</Description>
                            <Button/>
                    </TextBlock>
        </AboutWrapper>
    );
}