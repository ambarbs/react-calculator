import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 35vw;
`;

export const DisplayLabel = styled.label`
  width: 100%;
  height: 6rem;
  color: white;
  font-size: 2rem;
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
  width: ${props => props.width || '6vw'};
  height: 6vw;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  grid-column: ${props=> props.gridColumn};
  cursor: pointer;
`;
