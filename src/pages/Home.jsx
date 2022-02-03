import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';
import GoTop from '../tools/GoTop';

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
      <h1 style={{ fontSize: '35px', paddingLeft: '20px', marginTop: '20px' }}>
        New Product
      </h1>
      <Products products={products} />
      <Newsletter />
      <Footer />
      <GoTop />
    </Fragment>
  );
};

export default Home;
