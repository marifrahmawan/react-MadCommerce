import React, { Fragment } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <Slider />
    </Fragment>
  );
};

export default Home;
