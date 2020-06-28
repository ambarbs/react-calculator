import styled, { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 0.9; }
`;

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;;
  z-index: 2;
  padding: 0.5rem;
  background-color: lightgrey;
  color: black;
  width: 75vw;
  animation: ${FadeIn} forwards 2s;
`;

export const HistoryItem = styled.label`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.color || '#8B8B8B'};
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  align-self: flex-end;
  padding-right: ${(props) => props.paddingRight};
`;
