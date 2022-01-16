import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
