import styled from 'styled-components';

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
  height: ${(props) => props.height || '6rem'};
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize};
  text-align: right;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1rem;
    @media only screen and (max-width: 576px) {
    display: block;
}
`;

export const Icon = styled.i`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  opacity: ${(props) => props.opacity};
`;
