import styled from 'styled-components'
import { accentColor, secondColor, transition } from '../../styles/variables'

export const Nav = styled.nav`
    
  `

export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;  
  `

export const NavItem = styled.li`
    cursor: pointer;
    position: relative;
    transition: ${transition};
    :not(:last-child) {
        margin-right: 20px;
    }

    :hover, :focus {
        ::after {
            position: absolute;
            bottom: 0;
            display: block;
            content: "";
            width: 100%;
            height: 4px;
            border-radius: 2px;
            background-color: ${accentColor}
        }
    }
  `

export const NavLink = styled.a`
    font-size: 16px;
    line-height: 1.625;
    color: ${secondColor};
  

    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 1.56;
    }
  `