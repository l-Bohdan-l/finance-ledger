import styled from 'styled-components'
import {ReactComponent} from '../../images/svg/logoIcon.svg'
import {transition, accentColor, hoverAccent} from '../../styles/variables'

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%; */
  margin-bottom: 12px;
`

export const Icon = styled(ReactComponent)`
  transition: ${transition};
  fill: ${accentColor};
`

export const Text = styled.p`
  padding-left: 5px;
  font-size: 32px;
  line-height: 1.32;

  @media (min-width: 768px) {
    font-size: 35px;
  }
`
export const Accent = styled.span`
  transition: ${transition};
  color: ${accentColor};
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ${transition};
  :hover,
  :focus {
    transform: scale(1.05);
  }
  :hover ${Icon}, :focus ${Icon} {
    fill: ${hoverAccent};
  }
  :hover ${Accent}, :focus ${Accent} {
    color: ${hoverAccent};
  }
`