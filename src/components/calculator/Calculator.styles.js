import styled from "styled-components";

export const CalculatorWrapper = styled.div`
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

export const KeyPadWrapper = styled.section`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
  grid-gap: 1rem;
`;

export const KeyWrapper = styled.div`
  width: ${(props) => props.width || "7vw"};
  height: 7vw;
  border-radius: ${(props) => props.borderRadius || "50%"};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1.5rem;
  grid-column: ${(props) => props.gridColumn};
  cursor: pointer;
  &:nth-child(17) {
    width: auto;
    border-radius: 50px;
    grid-column: 1/span 2;
  }
  @media only screen and (max-width: 576px) {
    width: 19vw;
    height: 19vw;
    font-weight: 400;
    font-size: 1.25rem;
  }
`;
