/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa'

const spin = keyframes`
  '0%' {transform: 'rotate(0deg)'},
  '100%' {transform: 'rotate(360deg)'}
`;

const FPS = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 4em;
`;

const SpinnerIcon = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`;

export function Spinner(props: any): any {
  return <SpinnerIcon aria-label="loading" {...props} />;
}

export function FullPageSpinner(): any {
  return (
    <FPS>
      <Spinner />
    </FPS>
  );
}
