import React from 'react';
import './Home.css';
import Navbar from './Navbar'; // Import Navbar component
import { ImageSection } from './ImageSection';
import { ServiceSection } from './ServiceSection';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <ImageSection/>
      <ServiceSection/>
    </div>
  );
};

export default Home;
