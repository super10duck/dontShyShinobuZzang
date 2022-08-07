import React from 'react';
import styled from 'styled-components';
import { LayoutFlexJustifyContent } from './layer';
import { COLORS } from 'constants.js';

interface Props {
  text?: string
  onClick?: () => void
  buttonStyles?: ButtonStyles
}

const Container = styled(LayoutFlexJustifyContent)`
  width: 120px;
  height: 40px;
  border-radius: 6px;
  background-color: ${({ backgroundColor }) => backgroundColor || COLORS.PRIMARY}
`;

const Button: React.FunctionComponent<Props> = ({ text, onClick, buttonStyles }) => (
  <Container {...buttonStyles} onClick={onClick}>
    {text}
  </Container>
);

export default Button;