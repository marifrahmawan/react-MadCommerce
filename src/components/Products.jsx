import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
`;

const Products = ({ products }) => {
  return (
    <Container>
      <Wrapper>
        {products.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
