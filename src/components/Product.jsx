import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  max-width: calc((100% / 5) - 40px);
  min-width: calc((100% / 5) - 40px);
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 1px 5px 2px rgba(148, 148, 148, 0.5);
  -webkit-box-shadow: 1px 1px 5px 2px rgba(148, 148, 148, 0.5);
  -moz-box-shadow: 1px 1px 5px 2px rgba(148, 148, 148, 0.5);

  @media only screen and (max-width: 480px) {
    max-width: 100%;
    width: 250px;
    height: 300px;
  }

  /* &:hover const Info {
    opacity: 1;
  } */
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link
            to={`/product/${item._id}`}
            style={{ textDecoration: 'none', color: 'black', display: 'flex' }}
          >
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
