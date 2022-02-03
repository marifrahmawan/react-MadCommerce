import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import GoTop from '../tools/GoTop';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;

  @media only screen and (max-width: 480px) {
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #bebebe;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    margin-right: 0px;
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    margin: 10px 0px;
  }
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select defaultValue="color">
              <Option value="color" disabled>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
            </Select>
            <Select defaultValue="size">
              <Option value="size" disabled>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select defaultValue="newest">
              <Option value="newest">Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products />
      <Newsletter />
      <Footer />
      <GoTop />
    </>
  );
};

export default ProductList;
