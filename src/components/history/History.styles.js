import styled, { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 0.9; }
`;

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  padding: 0.5rem;
  background-color: lightgrey;
  color: black;
  width: 35vw;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${FadeIn} forwards 600ms;
  @media only screen and (max-width: 576px) {
    width: 75vw;
  }
`;

export const HistoryItem = styled.label`
  font-size: ${(props) => props.fontSize || '2rem'};
  font-weight: 500;
  color: ${(props) => props.color || '#8B8B8B'};
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  align-self: flex-end;
  padding-right: ${(props) => props.paddingRight};
`;
