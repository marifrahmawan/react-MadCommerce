import React, { Fragment } from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';
import GoTop from '../tools/GoTop';

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
      <GoTop />
    </Fragment>
  );
};

export default Home;
