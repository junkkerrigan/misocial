import React from 'react';

import Welcome from './Welcome';
import WhyMisocial from './WhyMisocial';

import '../../styles/home/Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Welcome />
      <WhyMisocial />
    </div>
  );
};

export default Home;
