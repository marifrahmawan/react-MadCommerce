import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  text-transform: capitalize;
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
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProudcts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/products?category=${category}`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProudcts();
  }, [category]);

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Title>{category}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option>All</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option>All</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products products={products} />
      <Newsletter />
      <Footer />
      <GoTop />
    </>
  );
};

export default ProductList;
