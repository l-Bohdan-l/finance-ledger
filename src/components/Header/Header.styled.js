import styled from 'styled-components';
import { firstColor } from '../../styles/variables';

export const HeaderBox = styled.header`
    padding-top: 21px;
    padding-bottom: 5px;
    width: 100%;
    opacity: 0.8;
    background-color: ${firstColor};
    position: fixed;
    top: 0;
    z-index: 1000;

    
`
export const Wrapper = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }
`