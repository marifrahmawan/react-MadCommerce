import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(25% - 6px);
  height: 50vh;
  position: relative;
  margin: 3px;

  @media only screen and (max-width: 480px) {
    width: calc(50% - 6px);
    height: 40vh;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 24px;
    margin: 10px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 5px;
  background-color: white;
  color: gray;
  font-weight: 600;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />

      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
