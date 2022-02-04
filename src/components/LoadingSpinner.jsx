import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  &::after {
    content: ' ';
    display: block;
    width: 200px;
    height: 200px;
    margin: 8px;
    border-radius: 50%;
    border: 25px solid teal;
    border-color: teal transparent teal transparent;
    animation: lds-dual-ring 1.2s linear infinite;

    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;
