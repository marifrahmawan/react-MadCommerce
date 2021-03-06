import React from 'react';
import { Send } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;

const InputContainer = styled.div`
  width: 50%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  @media only screen and (max-width: 480px) {
    width: 90%;
    height: 40px;
  }
`;

const Input = styled.input`
  flex: 10;
  border: none;
  padding-left: 20px;

  &::placeholder {
    font-size: 19px;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 480px) {
    padding-left: 10px;
    &::placeholder {
      font-size: 16px;
    }
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
