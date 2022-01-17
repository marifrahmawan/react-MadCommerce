import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Products = () => {
  return (
    <Container>
      <Wrapper>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
