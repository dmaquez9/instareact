import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #e32e7f;
  font-size: 16px;
  padding: 2px 15px;
  border-radius: 4px;
  border: none;
  color: #fff;
`;

const Button: React.FC = ({ children, ...props }): React.ReactElement => (
  <Btn {...props}>{children}</Btn>
);

export default Button;
