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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProudcts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:8080/api/products?category=${category}`
            : `http://localhost:8080/api/products`
        );
        setProducts(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProudcts();
  }, [category]);

  useEffect(() => {
    if (filters) {
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            if (value !== '') {
              console.log(value);
              return item[key].includes(value);
            }

            if (value === '') {
              return item;
            }

            return null;
          })
        )
      );
    }

    if (sort === 'newest') {
      setFilteredProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [category, products, filters, sort]);

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
              <Option value="">All</Option>
              <Option value="white">White</Option>
              <Option value="black">Black</Option>
              <Option value="red">Red</Option>
              <Option value="blue">Blue</Option>
              <Option value="yellow">Yellow</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option value="">All</Option>
              <Option value="XS">XS</Option>
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
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
      <Products products={filteredProducts} isLoading={isLoading} />
      <Newsletter />
      <Footer />
      <GoTop />
    </>
  );
};

export default ProductList;
