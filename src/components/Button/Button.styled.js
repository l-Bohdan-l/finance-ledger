import styled from 'styled-components'
import { accentColor, secondColor, transition, hoverAccent } from '../../styles/variables'
import arrow from '../../images/gallery/next.png'

export const MainButton = styled.button`
    font-size: 16px;
    line-height: 1.63;
    text-align: center;
    color: ${secondColor};
    background: ${accentColor};    
    border-radius: 5px;    
    border: ${props => props.border ? 'none' : `1px solid ${secondColor}`};
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
