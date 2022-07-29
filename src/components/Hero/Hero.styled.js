
import styled from 'styled-components'
import { thirdColor, accentColor, secondColor, transition, hoverAccent } from '../../styles/variables'
import showCaseImg from '../../images/home/showcase.jpg'
import arrow from '../../images/gallery/next.png'

export const HeroWrapper = styled.div`
    /* position: absolute;    
    top: 0;
    left: 0; */
    padding-top: 142px;
    padding-bottom: 96px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${showCaseImg});   
    background-color: rgb(51, 51, 51);
    background-size: cover;
    background-position: center center;
    z-index: -1;

    @media screen and (min-width: 768px) {
        padding-top: 407px;
        padding-bottom: 410px;
    }

    @media screen and (min-width: 1360px) {
        padding-top: 279px;
        padding-bottom: 282px;
    }
`

export const HeroSection = styled.section`
    /* padding-top: 40px; */
`

export const Title = styled.h1`    
    font-weight: 300;
    font-size: 52px;
    line-height: 1.27;
    text-align: center;
    color: ${thirdColor};
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        font-size: 55px;
        line-height: 1.2;
        margin-bottom: 24px;
    } ;
`

export const Subtitle = styled.p`
    font-size: 22px;
    line-height: 1.68;
    text-align: center;
    color: ${thirdColor};
    margin-bottom: 24px;
    
    @media screen and (min-width: 768px) {        
        margin-bottom: 32px;
    } ;
`

export const Button = styled.button`
    font-size: 16px;
    line-height: 1.63;
    text-align: center;
    color: ${secondColor};
    background: ${accentColor};
    border-radius: 5px;
    border: none;
    width: 156px;
    min-height: 45px;
    padding-top: 10px;
    padding-right: 29px;
    padding-left: 41px;
    padding-bottom: 9px;
    cursor: pointer;
    transition: ${transition};

    :hover,
    :focus {
        background-color: ${hoverAccent};
    }

    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 1.56;
        width: 165px;
        position: relative;

        ::before {
            content: '';
            position: absolute;
            left: 25px;
            top: 15px;
            display: inline-block;
            width: 18px;
            height: 18px;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(${arrow});
        }
    }

`