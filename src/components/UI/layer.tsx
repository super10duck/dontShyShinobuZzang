import styled, { CSSProperties } from 'styled-components';

export const LayoutFlexJustifyContent = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  align-items: center;
  width: 100%;
`;
