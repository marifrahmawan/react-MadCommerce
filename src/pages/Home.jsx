import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProudcts = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8080/api/products?new=true'
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProudcts();
  }, []);
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <h1
          style={{ fontSize: '35px', paddingLeft: '20px', marginTop: '20px' }}
        >
          New Product
        </h1>
        <Link
          to="products"
          style={{
            textDecoration: 'none',
            color: 'black',
            paddingRight: '25px',
            fontSize: '20px',
          }}
        >
          More...
        </Link>
      </div>
      <Products products={products} />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
