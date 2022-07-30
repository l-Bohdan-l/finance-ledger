import styled from 'styled-components';

import { firstColor } from '../../styles/variables';

export const SubTitle = styled.span`
    font-size: 18px;
    line-height: 1.67;    
    text-align: center;

    color: ${firstColor};

    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 1.65;
    }
`

export const Title = styled.h2`
    font-weight: 300;
    font-size: 38px;
    line-height: 1.26;    
    text-align: center;
    color: ${firstColor};
    margin-bottom: 20px;
`

export const SectionDescription = styled.p`
    font-size: 16px;
    line-height: 1.63;    
    text-align: center;
    color: #333333;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 1.56
    }
`

export const Section = styled.section`
    padding-top: 40px;
    padding-bottom: 40px;

    @media screen and (min-width: 1360px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`

export const CaseItem = styled.li`
    :not(:last-child) {
        margin-bottom: 8px;
    }
`

export const Img = styled.img`
    width: 280px;

    @media screen and (min-width: 768px) {
        width: 223px;
        margin-left: 18px;
        margin-top: 18px;
        flex-basis: calc((100% - 56px) / 3);
    }

    @media screen and (min-width: 1360px) {
        width: 421px;
        margin-left: 20px;
        margin-top: 24px;
        flex-basis: calc((100% - 60px) / 3);
    }
`

export const List = styled.ul`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: -18px;
        margin-top: -18px;
    }

    @media screen and (min-width: 1360px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: -20px;
        margin-top: -24px;
    }
`