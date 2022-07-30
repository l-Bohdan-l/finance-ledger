import styled from "styled-components";
import { accentColor, secondColor, fontWeight } from '../../styles/variables';

export const Image = styled.img`
    width: 100%;

    /* @media screen and (min-width: 320px) {
        width: 320px;
        height: 220px;
    } */

    @media screen and (min-width: 768px) {
       flex-basis: calc(368 / 768 * 100%);
    }

   @media screen and (min-width: 1360px) {
        flex-basis: calc(670 / 1360 * 100%);
    }
`

export const AboutWrapper = styled.section`
    background-color: ${accentColor};

    @media screen and (min-width: 768px) {
        display: flex;
        
    }
`

export const Title = styled.h2`
    font-weight: ${fontWeight};
    font-size: 18px;
    line-height: 1.67;    
    color: ${secondColor};
    margin-bottom: 8px;
    text-align: start;
`

export const Subtitle = styled.p`
    font-weight: 300;
    font-size: 38px;
    line-height: 1.26;    
    color: ${secondColor};
    margin-bottom: 24px;
    text-align: start;
`

export const Description = styled.p`
    font-weight: ${fontWeight};
    font-size: 16px;
    line-height: 1.63;    
    color: ${secondColor};
    margin-bottom: 24px;
    text-align: start;
    
`

export const TextBlock = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (min-width: 768px) {
       flex-basis: calc(400 / 768 * 100%);
    }

   @media screen and (min-width: 1360px) {
        flex-basis: calc(690 / 1360 * 100%);
    }

`