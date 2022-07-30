import {Button} from '../Button/Button';
import { BlogWrapper, TextBlock, Title, Subtitle, Description, Image } from './Blog.styled';
import blogPhoto from '../../images/home/blog.jpg';
import blogPhoto2x from '../../images/home/blog@2x.jpg';
import blogPhotoWebp from '../../images/home/blog.webp';
import blogPhotoWebp2x from '../../images/home/blog@2x.webp';
import blogPhotoTab from '../../images/home/blog-tab.jpg';
import blogPhotoTabWebp from '../../images/home/blog-tab.webp';
import blogPhotoTab2x from '../../images/home/blog-tab@2x.jpg';
import blogPhotoTabWebp2x from '../../images/home/blog-tab@2x.webp';

export function Blog() {
    return (
        <BlogWrapper> 
            <TextBlock>
                    <Title>What you are looking for</Title>
                    <Subtitle>We provide bespoke solutions</Subtitle>
                    <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</Description>
                    <Button/>
            </TextBlock>
            <picture>                        
                <source srcSet={`${blogPhotoWebp} 1x, ${blogPhotoWebp2x} 2x`} type='image/webp' media="(min-width: 1360px)"/>
                <source srcSet={`${blogPhoto} 1x, ${blogPhoto2x} 2x`} media="(min-width: 1360px)"/>
                <source srcSet={`${blogPhotoTabWebp} 1x, ${blogPhotoTabWebp2x} 2x`} type='image/webp' media="(min-width: 768px)"/>
                <source srcSet={`${blogPhotoTab} 1x, ${blogPhotoTab2x} 2x`} media="(min-width: 768px)"/>
                <source srcSet={`${blogPhotoWebp} 1x, ${blogPhotoWebp2x} 2x`} type='image/webp' media="(max-width: 767px)"/>
                <source srcSet={`${blogPhoto} 1x, ${blogPhoto2x} 2x`} media="(max-width: 767px)"/>
                <Image src={blogPhoto} alt="Group of people in costumes" />
            </picture>                     
        </BlogWrapper>
    );
}