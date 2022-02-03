import React from 'react';
import styled from 'styled-components';
import NotFoundImg from '../img/404PageNotFound_Flatline.svg';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 40%;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Img src={NotFoundImg} />
    </Wrapper>
  );
};

export default NotFound;
