import styled from 'styled-components';

export const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  
  @media screen and (min-width: 320px) {
    width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
    padding-left: 28px;
    padding-right: 28px;
  }
`;