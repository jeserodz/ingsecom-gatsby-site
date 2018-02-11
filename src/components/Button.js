import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../utils/colors';

export default (props) => (
  <Button {...props}>{props.label}</Button>
);

const Button = styled.button`
  background-color: ${props => props.primary ? colors.blue : 'white'};
  color: ${props => props.primary ? 'white': colors.blue};
  border: 1px ${colors.blue} solid;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.25rem 2rem;
  cursor: pointer;
`