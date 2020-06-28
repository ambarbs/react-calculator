import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  position: relative;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
`;

export const DisplayLabel = styled.label`
  width: 100%;
  height: 6rem;
  color: white;
  font-size: ${(props) => props.fontSize};
  text-align: right;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1rem;
`;

export const KeyPadWrapper = styled.section`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: ${(props) => `repeat(${props.rows}, auto)`};
  grid-template-rows: repeat(5, auto);
  grid-gap: 1rem;

  @media only screen and (max-width: 576px) {
    display: ${(props) => (props.scientific ? "none" : "grid")};
  }
`;

export const KeyWrapper = styled.div`
  width: ${(props) => props.width || "4vw"};
  height: 4vw;
  border-radius: ${(props) => props.borderRadius || "50%"};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: ${(props) => (props.super ? "block" : "flex")};
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  grid-column: ${(props) => props.gridColumn};
  cursor: pointer;
`;

export const KeyWrapperStandardScientific = styled(KeyWrapper)`
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

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  cursor: pointer;
  @media only screen and (max-width: 576px) {
    top: -1rem;
  }
`;
