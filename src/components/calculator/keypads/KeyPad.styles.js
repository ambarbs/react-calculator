import styled from 'styled-components';

export const KeyPadWrapper = styled.section`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: ${(props) => `repeat(${props.rows}, auto)`};
  grid-template-rows: repeat(5, auto);
  grid-gap: 1rem;

  @media only screen and (max-width: 576px) {
    display: ${(props) => (props.scientific ? 'none' : 'grid')};
  }
`;

export const KeyWrapper = styled.div`
  width: ${(props) => props.width || '4vw'};
  height: 4vw;
  border-radius: ${(props) => props.borderRadius || '50%'};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: ${(props) => (props.super ? 'block' : 'flex')};
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  grid-column: ${(props) => props.gridColumn};
  cursor: pointer;
`;

export const KeyWrapperScientific = styled(KeyWrapper)`
  font-size: 0.9rem;
  @media only screen and (max-width: 800px) {
    font-size: 0.7rem;
  }
`;

export const KeyWrapperStandard = styled(KeyWrapper)`
  &:nth-child(17) {
    width: auto;
    border-radius: 50px;
    grid-column: 1 / span 2;
  }
  @media only screen and (max-width: 576px) {
    width: 19vw;
    height: 19vw;
    font-weight: 400;
    font-size: 1.75rem;
  }
`;