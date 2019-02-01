import React from 'react';

import Welcome from './Welcome';
import WhyMisocial from './WhyMisocial';
import Features from './Features';

import '../../styles/home/Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Welcome />
      <WhyMisocial />
      <Features />
    </div>
  );
};

export default Home;
